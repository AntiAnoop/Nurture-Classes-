/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Topic {
  id: string;
  number: number;
  title: string;
  summary: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  videoUrl?: string;
  duration?: string;
  topics: Topic[];
}

export interface SubjectPaper {
  id: string;
  name: string;
  code: string;
  chaptersCount: number;
  chapters: Chapter[];
}

export interface DashboardSubjectProgress {
  id: string;
  name: string;
  paperName: string;
  chapterCount: number;
  progress: number; // percentage
}

export interface Topper {
  name: string;
  class: string;
  percentage: number;
  schoolName: string;
  quote: string;
  year: number;
}

export interface FacultyMember {
  name: string;
  subject: string;
  experience: string;
  qualifications: string;
  imageUrl: string;
}

export interface EnquiryFormData {
  studentName: string;
  classApplyingFor: '8' | '9' | '10';
  schoolName: string;
  parentName: string;
  mobile: string;
  email: string;
  preferredBatch: 'Morning' | 'Evening' | 'Any';
  source: string;
  message: string;
}
