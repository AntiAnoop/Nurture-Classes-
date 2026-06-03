/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { AlertTriangle, BookOpen, Clock, CreditCard, ChevronRight, Check, MapPin } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      classNo: '8',
      className: 'Class 8 Primary Foundation Batch',
      isPopular: false,
      subjects: ['Mathematics (Arithmetic, Algebra, Geometry Foundation)', 'Science & Technology (General Science Physics / Chemistry)', 'Social Sciences (History, Civics, Geography Intro)', 'English Language & Marathi Regular'],
      timings: 'Morning Cycle: 7:30 AM – 10:00 AM | Evening Cycle: 5:00 PM – 7:30 PM',
      fees: 'Rs. 24,000 / Academic Year (Split installments available)',
      features: [
        'Weekly basic conceptual tests',
        'Visual interactive board presentations',
        'Complete exercise solutions for textbooks',
        'Max 25 students per class limit',
      ],
    },
    {
      classNo: '10',
      className: 'Class 10 SSC Elite Board Batch',
      isPopular: true,
      subjects: ['Mathematics (Algebra Part 1 & Geometry Part 2)', 'Science & Technology (Part 1 Physics/Chem & Part 2 Life Sciences)', 'Social Sciences (History, Political Science & Geography)', 'English Language & Marathi Higher Electives'],
      timings: 'Morning Cycle: 7:00 AM – 10:00 AM | Evening Cycle: 4:30 PM – 7:30 PM',
      fees: 'Rs. 36,000 / Board Preparation Cycle (No hidden cost rules)',
      features: [
        '100% textbook syllabus coverage + Board patterns worksheets',
        '20+ full-length preliminary mock series papers',
        'Saturday specialized 1-on-1 doubt clearing clinic',
        'Access to our authenticated Student Learning Portal',
      ],
    },
    {
      classNo: '9',
      className: 'Class 9 Secondary Preparation Batch',
      isPopular: false,
      subjects: ['Mathematics (Algebra Essentials, Geometry Axioms)', 'Science & Technology (Introduction to Chemical Equations)', 'Social Sciences (History of India, Democratic Politics, Planet Geography)', 'English Language & Marathi Standard'],
      timings: 'Morning Cycle: 7:30 AM – 10:05 AM | Evening Cycle: 5:00 PM – 7:35 PM',
      fees: 'Rs. 28,000 / Academic Year (Monthly installments available)',
      features: [
        'Detailed focus on Class 10 prerequisite theorems',
        'Weekly assessment score cards shared with parents',
        'Saturday specialized doubt clearance slots',
        'Detailed answer writing practice guides',
      ],
    },
  ];

  return (
    <div className="font-sans flex flex-col bg-white" id="programs-page-root">
      
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-14" id="programs-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <nav className="flex justify-center items-center gap-2 text-xs font-semibold text-[#475569] uppercase tracking-wider mb-3">
            <Link to="/" className="hover:text-[#1E3A8A]">Home</Link>
            <span>/</span>
            <span className="text-[#1E3A8A]">Our Programs</span>
          </nav>
          <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] tracking-tight">
            Our Academic Programs
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto mt-3">
            Fully updated curriculum maps for Maharashtra State Board (SSC) Classes 8, 9, and 10. View reference details beneath.
          </p>
        </div>
      </section>

      {/* 2. Mandatory Notice Banner (No transaction links rule) */}
      <section className="bg-white py-6" id="programs-notice-block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex gap-4 text-left max-w-4xl mx-auto shadow-xs">
            <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <h4 className="font-sans font-bold text-sm text-amber-800 uppercase tracking-wide">
                Physical Enrollment Only at Kandivali West Centre
              </h4>
              <p className="font-sans text-xs text-amber-700 leading-relaxed">
                ℹ️ Enrollment is done strictly in person at our Kandivali West centre (Shop No. 20, Turakhia Park). These program details are for informational reference only. No online fee collection, enrollment, or registration button is provided on this website. Interested parents are requested to drop an enquiry or visit the centre in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Program Listing Cards Section */}
      <section className="py-12 sm:py-16" id="programs-cards-block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 max-w-5xl mx-auto" id="programs-list-wrapper">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row gap-8 items-start relative overflow-hidden transition-all duration-300 ${
                  program.isPopular
                    ? 'border-2 border-[#1E3A8A] ring-4 ring-blue-50'
                    : 'border border-[#E2E8F0]'
                }`}
                id={`program-details-${program.classNo}`}
              >
                {/* Visual Highlight Badge for Class 10 (Most Popular) */}
                {program.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#1E3A8A] text-white text-[10px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-bl-2xl shadow-xs">
                    Most Popular & Highest Rating
                  </div>
                )}

                {/* Left side: Class details, timings */}
                <div className="flex-1 flex flex-col gap-5 text-left">
                  <div className="flex items-center gap-3">
                    <span className="font-sans font-bold text-2xl text-[#1E3A8A] bg-blue-50 px-4 py-2 rounded-2xl border border-blue-100 shrink-0">
                      C.{program.classNo}
                    </span>
                    <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#1E293B]">
                      {program.className}
                    </h2>
                  </div>

                  {/* Subjects Covered tag block */}
                  <div className="flex flex-col gap-2.5">
                    <span className="font-bold text-xs text-[#1E293B] uppercase tracking-wider flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-[#1E3A8A]" />
                      Syllabus Subjects Covered (Maharashtra State Board)
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#475569]">
                      {program.subjects.map((subj, subIdx) => (
                        <li key={subIdx} className="flex gap-2 items-start">
                          <Check className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{subj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Batch structure, timings */}
                  <div className="flex flex-col gap-2 border-t border-[#E2E8F0] pt-4">
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-[#475569]">
                      <Clock className="h-4 w-4 text-[#1E3A8A]" />
                      <span><strong>Batch Schedules:</strong> {program.timings}</span>
                    </div>
                  </div>
                </div>

                {/* Right side: Pricing and structural benefits */}
                <div className="w-full lg:w-80 bg-[#F8F9FA] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col gap-5 text-left shrink-0">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-[#475569] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <CreditCard className="h-3.5 w-3.5 text-[#1E3A8A]" />
                      Fee Structure Placeholder
                    </span>
                    <span className="font-sans font-bold text-[#1E293B] text-lg leading-tight">
                      {program.fees}
                    </span>
                  </div>

                  {/* Bullet Benefits list */}
                  <div className="flex flex-col gap-3 border-t border-[#E2E8F0] pt-4">
                    <span className="text-[10px] text-[#1E293B] font-bold uppercase tracking-wider">Features Included</span>
                    <ul className="flex flex-col gap-2.5 text-xs text-[#475569]">
                      {program.features.map((feat, featIdx) => (
                        <li key={featIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A] shrink-0 mt-1.5"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instruction footer tag */}
                  <div className="text-[10px] font-bold text-[#475569] bg-white border border-[#E2E8F0] p-3 rounded-xl italic leading-relaxed text-center">
                    Visit Shop No. 20 for custom installment plans
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Action navigation prompt block */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E2E8F0]" id="programs-contact-prompt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h3 className="font-sans font-bold text-xl text-[#1E293B]">Have additional questions regarding academic pathways?</h3>
          <p className="font-sans text-xs text-[#475569] leading-relaxed">
            Our counsellors can help choose the correct batch size and installment structures for your ward. Drop an enquiry directly.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-xs"
              id="programs-enquire-primary"
            >
              Enquire for Admission
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
