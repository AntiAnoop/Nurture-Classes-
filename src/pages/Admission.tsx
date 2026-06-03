/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { CalendarCheck2, Star, ShieldCheck, Users } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

export default function Admission() {
  return (
    <div className="font-sans flex flex-col bg-white" id="admission-page-root">
      
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-14" id="admission-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          {/* Breadcrumb strip */}
          <nav className="flex justify-center items-center gap-2 text-xs font-semibold text-[#475569] uppercase tracking-wider mb-3">
            <Link to="/" className="hover:text-[#1E3A8A]">Home</Link>
            <span>/</span>
            <span className="text-[#1E3A8A]">Admission Enquiry</span>
          </nav>
          <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] tracking-tight">
            Apply for Nurture Admission
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto mt-3">
            Submit your child's academic details. Our administrative coordinators will process individual counselor requests instantly.
          </p>
        </div>
      </section>

      {/* 2. Structured split overview & Enqueue form */}
      <section className="py-12 sm:py-20 bg-white" id="admission-form-split">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="admission-layout-container">
            
            {/* Left side: Enrollment checklist & requirements instruction block */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left" id="admission-instruction-panel">
              <div className="flex flex-col gap-3">
                <span className="font-bold text-xs uppercase tracking-widest text-[#10B981] bg-emerald-50 px-3 py-1.5 rounded-full w-fit">
                  Enrollment Guide 2025–26
                </span>
                <h2 className="font-sans font-bold text-2xl text-[#1E293B] tracking-tight">
                  Academic Admission Steps
                </h2>
                <p className="font-sans text-xs text-[#475569] leading-relaxed">
                  Parents interested in admissions are requested to follow these steps to secure academic slots for Class 8, 9, or 10.
                </p>
              </div>

              {/* Steps checklist with Lucide Icons */}
              <div className="flex flex-col gap-5 border-t border-[#E2E8F0] pt-5" id="admission-steps-checklist">
                <div className="flex gap-3.5 items-start">
                  <div className="h-7 w-7 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center font-bold text-xs text-[#1E3A8A] shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-xs text-[#1E293B]">Submit Online Enquiry</span>
                    <span className="text-[11px] text-[#475569] leading-relaxed mt-0.5">
                      Fill our verified online intake form on the right. Form takes less than 60 seconds.
                    </span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="h-7 w-7 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center font-bold text-xs text-[#1E3A8A] shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-xs text-[#1E293B]">Counselling Interview</span>
                    <span className="text-[11px] text-[#475569] leading-relaxed mt-0.5">
                      Our coordinator will call you to schedule a 1-on-1 counseling discuss parent goals.
                    </span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="h-7 w-7 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center font-bold text-xs text-[#1E3A8A] shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-xs text-[#1E293B]">Confirm Batch & Slot</span>
                    <span className="text-[11px] text-[#475569] leading-relaxed mt-0.5">
                      Visit Shop No. 20 in person to complete enrollment files & select morning/evening timings.
                    </span>
                  </div>
                </div>
              </div>

              {/* Extra stats badge panel */}
              <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-5 rounded-2xl flex flex-col gap-3 text-xs text-[#475569] leading-relaxed mt-4">
                <div className="flex items-center gap-2 font-bold text-[#1E293B]">
                  <Users className="h-4.5 w-4.5 text-[#1E3A8A]" />
                  <span>Personalized Batches</span>
                </div>
                <p className="text-[11px]">
                  Batch size is strictly limited to <strong>30 scholars</strong>. Slots are assigned on a first-come, first-served basis relative to board standards.
                </p>
              </div>
            </div>

            {/* Right side: Reusable enrollment form card */}
            <div className="lg:col-span-8 w-full shadow-xs" id="admission-form-panel">
              <EnquiryForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
