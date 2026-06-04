/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ChevronRight } from 'lucide-react';
import { DashboardSubjectProgress } from '../types';
import { getSubjectPaper } from '../lib/curriculum';

interface SubjectCardProps {
  subject: DashboardSubjectProgress;
  key?: string | number;
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  const paper = getSubjectPaper(subject.id);
  const firstChapterId = paper?.chapters[0]?.id || 'linear-equations';

  // SVG Circle measurements
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (subject.progress / 100) * circumference;

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#1E3A8A] transition-all duration-200 flex flex-col justify-between group">
      
      {/* Subject meta header */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-sans text-[10px] font-bold text-[#1E3A8A] uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
            {subject.paperName}
          </span>
          <h4 className="font-sans font-bold text-lg text-[#1E293B] group-hover:text-[#1E3A8A] transition-colors leading-tight mt-1.5">
            {subject.name}
          </h4>
        </div>
        
        {/* Dynamic circular progress ring */}
        <div className="relative h-14 w-14 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              className="text-slate-100"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="28"
              cy="28"
            />
            <circle
              className="text-[#1E3A8A] transition-all duration-500 ease-in-out"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="28"
              cy="28"
            />
          </svg>
          <span className="absolute font-sans font-bold text-xs text-[#1E293B]">
            {subject.progress}%
          </span>
        </div>
      </div>

      {/* Chapters counter badge and visual status info */}
      <div className="flex items-center gap-2 mt-6 text-xs text-[#475569] font-medium">
        <BookOpen className="h-4 w-4 text-[#1E3A8A]" />
        <span>{subject.chapterCount} Syllabus Lectures</span>
        {subject.progress === 100 && (
          <span className="flex items-center gap-1 text-[#10B981] ml-auto font-bold">
            <CheckCircle className="h-3.5 w-3.5" />
            Complete
          </span>
        )}
      </div>

      {/* Action link */}
      <div className="mt-5 pt-4 border-t border-[#E2E8F0]">
        <Link
          to={`/dashboard/${subject.id}/${firstChapterId}`} // defaults to first chapter of the subject
          className="inline-flex w-full justify-between items-center text-sm font-semibold text-[#1E3A8A] group-hover:text-blue-900"
          id={`continue-learning-link-${subject.id}`}
        >
          <span>Continue Learning</span>
          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
