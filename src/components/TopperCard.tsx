/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, School } from 'lucide-react';
import { Topper } from '../types';

interface TopperCardProps {
  topper: Topper;
  key?: string | number;
}

export default function TopperCard({ topper }: TopperCardProps) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden group">
      {/* Decorative percentage corner background glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-[#10B981] bg-opacity-[0.03] rounded-bl-full pointer-events-none"></div>

      <div className="flex flex-col gap-4">
        {/* Top Header Row with Name and Score Badge */}
        <div className="flex justify-between items-start gap-3">
          <div className="flex flex-col">
            <h4 className="font-sans font-bold text-lg text-[#1E293B] group-hover:text-[#1E3A8A] transition-colors leading-tight">
              {topper.name}
            </h4>
            <span className="font-sans text-xs font-semibold text-[#475569] uppercase tracking-wide mt-1">
              Class {topper.class} · SSC Board
            </span>
          </div>
          <div className="bg-[#10B981] bg-opacity-10 border border-[#10B981] text-[#10B981] font-sans font-bold text-sm px-3 py-1 rounded-full shrink-0">
            {topper.percentage}%
          </div>
        </div>

        {/* School reference info */}
        <div className="flex items-center gap-2 text-xs text-[#475569] font-medium bg-[#F8F9FA] px-3 py-2 rounded-xl border border-[#E2E8F0]">
          <School className="h-3.5 w-3.5 text-[#1E3A8A] shrink-0" />
          <span className="truncate">{topper.schoolName}</span>
        </div>

        {/* Student Testimonial Quote */}
        <div className="flex gap-2 text-slate-500 mt-2 relative">
          <Quote className="h-4 w-4 text-[#1E3A8A] opacity-20 shrink-0 mt-1" />
          <p className="font-sans text-xs italic text-[#475569] leading-relaxed">
            "{topper.quote}"
          </p>
        </div>
      </div>

      {/* Footer metadata stamp */}
      <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex justify-between items-center text-[10px] font-bold text-[#475569] tracking-wider uppercase">
        <span>Kandivali West Centre</span>
        <span className="bg-[#1E3A8A] text-white px-2 py-0.5 rounded">Batch {topper.year}</span>
      </div>
    </div>
  );
}
