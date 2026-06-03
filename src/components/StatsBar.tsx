/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Users, Award, Star } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <Calendar className="h-6 w-6 text-[#1E3A8A]" />,
      value: '15+ Years',
      label: 'of Educational Excellence',
    },
    {
      icon: <Users className="h-6 w-6 text-[#1E3A8A]" />,
      value: '3,000+',
      label: 'Students Enrolled Since 2009',
    },
    {
      icon: <Award className="h-6 w-6 text-[#10B981]" />,
      value: '98%',
      label: 'Board Passing rate',
    },
    {
      icon: <Star className="h-6 w-6 text-amber-500 fill-amber-400" />,
      value: '4.7 / 5',
      label: 'JustDial Verified (48 Reviews)',
    },
  ];

  return (
    <div className="bg-[#F8F9FA] border-y border-[#E2E8F0] py-10 font-sans" id="stats-strip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm hover:translate-y-[-2px] transition-transform duration-200"
              id={`stat-card-${idx}`}
            >
              <div className="p-3 bg-[#F8F9FA] rounded-full mb-3 flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="font-sans font-bold text-3xl text-[#1E293B] tracking-tight">
                {stat.value}
              </span>
              <p className="font-sans text-xs text-[#475569] font-medium mt-1 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
