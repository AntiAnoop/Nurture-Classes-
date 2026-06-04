/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { supabase, isMockMode } from './supabase';
import { getSubjectPaper, curriculumData } from './curriculum';

// Local storage key prefix for local progress backup/mock mode
const LOCAL_STORAGE_KEY_PREFIX = 'nurture_student_progress_';

/**
 * Loads all completed topic IDs for a given student email.
 * Reconciles with local storage to ensure persistent progress even if Supabase is mock-initialized.
 */
export async function loadCompletedTopicIds(studentEmail: string): Promise<string[]> {
  const localKey = `${LOCAL_STORAGE_KEY_PREFIX}${encodeURIComponent(studentEmail)}`;
  
  // 1. Get from local storage first as a starting reference / offline fallback
  let localCompletions: string[] = [];
  try {
    const saved = localStorage.getItem(localKey);
    if (saved) {
      localCompletions = JSON.parse(saved);
    }
  } catch (err) {
    console.error('Error reading progress from local storage:', err);
  }

  // If we are in mock mode, return local completions
  if (isMockMode) {
    return localCompletions;
  }

  // 2. Try fetching from real Supabase client
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      return localCompletions; // Not logged in yet or session expired
    }

    const { data, error } = await (supabase.realClient as any)
      ?.from('student_progress')
      .select('topic_id')
      .eq('student_email', studentEmail)
      .eq('completed', true);

    if (error) {
      console.warn('Real Supabase query failed (table may not exist yet, defaulting to local persistence):', error.message);
      return localCompletions;
    }

    if (data) {
      const dbCompletions = data.map((item: any) => item.topic_id);
      
      // Merge local and remote changes (offline sync helper)
      const mergedSet = new Set([...localCompletions, ...dbCompletions]);
      const mergedCompletions = Array.from(mergedSet);
      
      // Keep local storage in sync with DB
      try {
        localStorage.setItem(localKey, JSON.stringify(mergedCompletions));
      } catch (err) {
        console.error('Error writing synchronized progress to local storage:', err);
      }
      
      return mergedCompletions;
    }
  } catch (error) {
    console.warn('Supabase not fully reachable, using offline localStorage fallback:', error);
  }

  return localCompletions;
}

/**
 * Toggles a topic's completion status.
 * Updates both local storage and Supabase database.
 */
export async function toggleTopicCompletion(
  studentEmail: string,
  subjectId: string,
  chapterId: string,
  topicId: string,
  completed: boolean
): Promise<string[]> {
  const localKey = `${LOCAL_STORAGE_KEY_PREFIX}${encodeURIComponent(studentEmail)}`;
  let currentCompletions: string[] = [];
  
  try {
    const saved = localStorage.getItem(localKey);
    if (saved) {
      currentCompletions = JSON.parse(saved);
    }
  } catch (err) {
    console.error('Error reading progress for toggle:', err);
  }

  const index = currentCompletions.indexOf(topicId);
  if (completed && index === -1) {
    currentCompletions.push(topicId);
  } else if (!completed && index !== -1) {
    currentCompletions.splice(index, 1);
  }

  // Update localStorage immediately
  try {
    localStorage.setItem(localKey, JSON.stringify(currentCompletions));
  } catch (err) {
    console.error('Error writing toggled progress to local storage:', err);
  }

  // If in mock mode, terminate early returning local updates
  if (isMockMode) {
    return currentCompletions;
  }

  // Update Supabase Database asynchronously
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    if (sessionData.session && supabase.realClient) {
      if (completed) {
        // Upsert to mark topic as completed
        const { error } = await (supabase.realClient as any)
          .from('student_progress')
          .upsert(
            {
              student_email: studentEmail,
              subject_id: subjectId,
              chapter_id: chapterId,
              topic_id: topicId,
              completed: true,
              updated_at: new Date().toISOString()
            },
            { onConflict: 'student_email,topic_id' }
          );
        if (error) {
          console.warn('Failed to upsert to Supabase student_progress table:', error.message);
        }
      } else {
        // Delete to mark topic as incomplete
        const { error } = await (supabase.realClient as any)
          .from('student_progress')
          .delete()
          .match({ student_email: studentEmail, topic_id: topicId });
        if (error) {
          console.warn('Failed to delete from Supabase student_progress table:', error.message);
        }
      }
    }
  } catch (error) {
    console.warn('Could not sync toggle to remote Supabase server:', error);
  }

  return currentCompletions;
}

/**
 * Calculates current progress percentage of a subject dynamically.
 */
export function getSubjectProgressPercent(subjectId: string, completedTopicIds: string[]): number {
  const paper = getSubjectPaper(subjectId);
  if (!paper) return 0;

  let totalTopics = 0;
  let completedTopicsCount = 0;

  paper.chapters.forEach((ch) => {
    ch.topics.forEach((topic) => {
      totalTopics++;
      if (completedTopicIds.includes(topic.id)) {
        completedTopicsCount++;
      }
    });
  });

  if (totalTopics === 0) return 0;
  return Math.round((completedTopicsCount / totalTopics) * 100);
}

/**
 * Calculates the total completed chapters (a chapter is considered complete when all its topics are checked).
 */
export function getChapterCompletionStatus(
  subjectId: string,
  chapterId: string,
  completedTopicIds: string[]
): { isComplete: boolean; completedCount: number; totalCount: number } {
  const paper = getSubjectPaper(subjectId);
  if (!paper) return { isComplete: false, completedCount: 0, totalCount: 0 };

  const chapter = paper.chapters.find((ch) => ch.id === chapterId);
  if (!chapter || !chapter.topics || chapter.topics.length === 0) {
    return { isComplete: false, completedCount: 0, totalCount: 0 };
  }

  let completedCount = 0;
  chapter.topics.forEach((topic) => {
    if (completedTopicIds.includes(topic.id)) {
      completedCount++;
    }
  });

  return {
    isComplete: completedCount === chapter.topics.length,
    completedCount,
    totalCount: chapter.topics.length
  };
}
