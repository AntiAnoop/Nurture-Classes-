/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Circle, BookOpen, Layers } from 'lucide-react';
import { Topic } from '../types';

interface TopicAccordionProps {
  topics: Topic[];
}

export default function TopicAccordion({ topics }: TopicAccordionProps) {
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(topics[0]?.id || null);
  const [completedTopicIds, setCompletedTopicIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedTopicId(expandedTopicId === id ? null : id);
  };

  const toggleComplete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering accordion expand toggle
    setCompletedTopicIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm font-sans flex flex-col gap-5" id="topic-notes-accordion-card">
      
      {/* List header meta block */}
      <div className="border-b border-[#E2E8F0] pb-4 flex justify-between items-center bg-white">
        <div className="flex items-center gap-2.5">
          <div className="bg-[#1E3A8A] bg-opacity-10 p-2 rounded-lg text-[#1E3A8A]">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-sans font-bold text-lg text-[#1E293B]">Chapter Topics & Notes</h3>
            <span className="text-[10px] text-[#475569] font-semibold uppercase tracking-wider mt-0.5">
              {completedTopicIds.size} of {topics.length} topics finished
            </span>
          </div>
        </div>
        <div className="text-xs font-semibold text-[#1E3A8A] bg-blue-50 px-2.5 py-1 rounded-full">
          Syllabus Study Guide
        </div>
      </div>

      {/* Accordion list items */}
      <div className="flex flex-col gap-3" id="accordion-topics-list">
        {topics.map((topic, index) => {
          const isExpanded = expandedTopicId === topic.id;
          const isCompleted = completedTopicIds.has(topic.id);

          return (
            <div
              key={topic.id}
              onClick={() => toggleExpand(topic.id)}
              className={`border rounded-xl cursor-pointer transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'border-[#1E3A8A] bg-[#F8F9FA] shadow-xs'
                  : 'border-[#E2E8F0] hover:border-[#1E3A8A] hover:bg-slate-50'
              }`}
              id={`topic-item-${topic.id}`}
            >
              {/* Accordion header row */}
              <div className="flex items-center justify-between p-4 font-medium transition-colors">
                <div className="flex items-center gap-3">
                  {/* Status Indicator */}
                  <button
                    onClick={(e) => toggleComplete(topic.id, e)}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E3A8A] rounded-full p-0.5 transition-transform active:scale-90 shrink-0"
                    title={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                    id={`topic-complete-toggle-${topic.id}`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-[#10B981] fill-[#10B981] fill-opacity-5" />
                    ) : (
                      <Circle className="h-5 w-5 text-slate-300 hover:text-[#10B981] hover:scale-105" />
                    )}
                  </button>

                  <div className="flex gap-2 items-center">
                    <span className="font-sans font-bold text-xs text-[#1E3A8A] bg-blue-50 border border-blue-100 rounded-md px-1.5 py-0.5 min-w-6 text-center shrink-0">
                      C.{index + 1}
                    </span>
                    <span className="font-sans font-bold text-[#1E293B] text-sm leading-snug">
                      {topic.title}
                    </span>
                  </div>
                </div>

                <div className="text-slate-400 pl-4 shrink-0">
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </div>

              {/* Accordion body content notes with CSS transition simulation height constraint */}
              {isExpanded && (
                <div className="px-4 pb-5 pt-1 border-t border-[#E2E8F0] border-opacity-70 bg-white animate-fade-in">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2 text-xs font-semibold text-[#1E3A8A]">
                      <Layers className="h-4 w-4" />
                      <span>Maharashtra State Board Core Study Guide Class 10 Notes</span>
                    </div>
                    <p className="font-sans text-xs text-[#475569] leading-relaxed bg-[#F8F9FA] p-3 rounded-lg border border-[#E2E8F0] border-opacity-60">
                      {topic.summary}
                    </p>
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={(e) => toggleComplete(topic.id, e)}
                        className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all ${
                          isCompleted
                            ? 'bg-emerald-50 border-[#10B981] text-[#10B981] hover:bg-emerald-100'
                            : 'bg-[#1E3A8A] hover:bg-blue-900 border-transparent text-white shadow-xs'
                        }`}
                        id={`mark-complete-btn-${topic.id}`}
                      >
                        {isCompleted ? 'Completed ✓' : 'Mark Topic as Complete'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
