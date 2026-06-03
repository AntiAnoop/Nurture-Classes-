/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Trophy, Users } from 'lucide-react';
import TopperCard from './TopperCard';
import { Topper } from '../types';

export const toppersData: Topper[] = [
  // 2024 Batch Toppers
  {
    name: 'Aditya S. Kulkarni',
    class: '10',
    percentage: 97.8,
    schoolName: 'Balaji International School, Kandivali West',
    quote: 'Nurtures structured test series and weekly question papers made the actual board exam feel like just another practice test!',
    year: 2024,
  },
  {
    name: 'Sneha R. Joshi',
    class: '10',
    percentage: 96.4,
    schoolName: 'St. Lawrence High School, Borivali West',
    quote: 'The personalized attention during doubt sessions made all the difference in Algebra and Science. Highly recommend Nurture!',
    year: 2024,
  },
  {
    name: 'Pranav V. Deshmukh',
    class: '10',
    percentage: 94.2,
    schoolName: 'Kamla Vihar High School, Kandivali West',
    quote: 'Teachers are extremely supportive. They cleared my fundamental concepts in geometry and physics right from the beginning.',
    year: 2024,
  },
  {
    name: 'Rutuja M. Patil',
    class: '10',
    percentage: 91.8,
    schoolName: 'Oxford Public School, Kandivali West',
    quote: 'The study material and class notes are so precise that I did not need to refer to any other guides for my SSC preparation.',
    year: 2024,
  },
  
  // 2023 Batch Toppers
  {
    name: 'Tanvi S. Sawant',
    class: '10',
    percentage: 95.6,
    schoolName: 'Sardar Vallabhbhai Patel High School, Kandivali West',
    quote: 'Learning here was an absolute joy. The mock tests helped me manage time effectively during final board exam papers.',
    year: 2023,
  },
  {
    name: 'Rohan D. Naik',
    class: '10',
    percentage: 93.8,
    schoolName: 'Jingle Bells Academy High School, Malad West',
    quote: 'The teachers at Nurture are subject matter specialists. Their continuous guidance kept me focused throughout Class 10.',
    year: 2023,
  },
  {
    name: 'Sayali A. Shinde',
    class: '10',
    percentage: 90.5,
    schoolName: 'S.V.P. Vividhlaxi Vidyalaya, Kandivali West',
    quote: 'Their monthly feedback meetings with parents helped bridge learning gaps. Grateful to everyone at Nurture Classes.',
    year: 2023,
  },
  {
    name: 'Yash K. Tambe',
    class: '10',
    percentage: 89.2,
    schoolName: 'Mary Immaculate Girls Secondary, Borivali West',
    quote: 'Focusing on school textbooks alongside Nurtures question banks is what helped me score high in Social Sciences.',
    year: 2023,
  },

  // 2022 Batch Toppers
  {
    name: 'Aniket G. Gawde',
    class: '10',
    percentage: 96.2,
    schoolName: 'Amulakh Amichand High School, Borivali West',
    quote: 'The small batch size ensured that teachers observed our weak areas individually and guided us with custom strategies.',
    year: 2022,
  },
  {
    name: 'Shruti R. Rane',
    class: '10',
    percentage: 94.6,
    schoolName: 'Don Bosco High School, Borivali West',
    quote: 'I improved from 78% in nine class school tests to 94.6% in the Class 10 Board exams, thanks to the team at Nurture.',
    year: 2022,
  },
  {
    name: 'Parth D. Kadam',
    class: '10',
    percentage: 91.2,
    schoolName: 'St. Joseph High School, Malad West',
    quote: 'Algebra used to terrify me, but Nurtures systematic formulas sheets and regular practice made it my highest scoring subject.',
    year: 2022,
  },
  {
    name: 'Diya S. More',
    class: '10',
    percentage: 88.0,
    schoolName: 'Our Lady of Remedy High School, Kandivali West',
    quote: 'Even during challenging chapters, the educators broke down the diagrams and proofs so simply. Excellent atmosphere!',
    year: 2022,
  },
];

interface TopperGridProps {
  showAll?: boolean; // If true, show full grid, else show first 6 for home preview
}

export default function TopperGrid({ showAll = false }: TopperGridProps) {
  const [selectedYear, setSelectedYear] = useState<number>(2024);

  // Filter toppers by year first
  const filteredByYear = toppersData.filter(t => t.year === selectedYear);
  
  // Decide what subset to render based on page context (Home preview shows first 6 of all combined, Results Page shows filtered by year tabs)
  const renderList = showAll ? filteredByYear : toppersData.slice(0, 6);

  return (
    <div className="font-sans" id="toppers-container">
      {/* If showAll is true, display the Year filter tabs and Aggregate stats row above the grid */}
      {showAll && (
        <div className="flex flex-col gap-8 mb-10" id="results-filter-header">
          {/* Aggregate Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#F8F9FA] rounded-2xl p-6 border border-[#E2E8F0]">
            <div className="flex items-center gap-4">
              <div className="bg-[#1E3A8A] bg-opacity-10 p-3 rounded-xl text-[#1E3A8A]">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <span className="block font-bold text-2xl text-[#1E293B]">100%</span>
                <span className="text-xs text-[#475569] font-medium">Board Exam Pass Rate</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#10B981] bg-opacity-10 p-3 rounded-xl text-[#10B981]">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <span className="block font-bold text-2xl text-[#1E293B]">91.4%</span>
                <span className="text-xs text-[#475569] font-medium">Top 20 Average Score</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <span className="block font-bold text-2xl text-[#1E293B]">140+</span>
                <span className="text-xs text-[#475569] font-medium">Students Scored &gt;90%</span>
              </div>
            </div>
          </div>

          {/* Centered Year Selection Tabs */}
          <div className="flex justify-center border-b border-[#E2E8F0]" id="year-tabs-nav">
            <div className="flex gap-2">
              {[2024, 2023, 2022].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 font-sans text-sm font-semibold border-b-2 transition-all duration-200 ${
                    selectedYear === year
                      ? 'border-[#1E3A8A] text-[#1E3A8A]'
                      : 'border-transparent text-[#475569] hover:text-[#1E3A8A]'
                  }`}
                  id={`year-tab-${year}`}
                >
                  {year} Batch SSC Results
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Grid of topper profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="toppers-display-grid">
        {renderList.map((topper, idx) => (
          <TopperCard key={`${topper.name}-${idx}`} topper={topper} />
        ))}
      </div>
    </div>
  );
}
