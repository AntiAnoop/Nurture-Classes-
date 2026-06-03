/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import TopperGrid from '../components/TopperGrid';
import { Award, CheckCircle } from 'lucide-react';

export default function Results() {
  return (
    <div className="font-sans flex flex-col bg-white" id="results-page-root">
      
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-14" id="results-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          {/* Breadcrumb strip */}
          <nav className="flex justify-center items-center gap-2 text-xs font-semibold text-[#475569] uppercase tracking-wider mb-3">
            <Link to="/" className="hover:text-[#1E3A8A]">Home</Link>
            <span>/</span>
            <span className="text-[#1E3A8A]">Board Results</span>
          </nav>
          <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] tracking-tight">
            Our Students, Their Success
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto mt-3">
            Nurture Coaching classes has been consistent in churning out Maharashtra Board (SSC) toppers from Kandivali West. Explore our historical honor boards below.
          </p>
        </div>
      </section>

      {/* 2. Full interactive filtered results block */}
      <section className="py-12 sm:py-16 bg-white" id="toppers-wall-results-block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-bold text-xs uppercase tracking-widest text-[#1E3A8A] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Proven Board Excellence
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#1E293B] tracking-tight mt-3">
              Official SSC Honor Academic Board
            </h2>
          </div>

          {/* Render the unified filters, aggregate stats and 12-toppers grid set */}
          <TopperGrid showAll={true} />
        </div>
      </section>

      {/* 3. Direct counseling callout */}
      <section className="py-12 bg-[#F8F9FA] border-t border-[#E2E8F0]" id="results-coaching-callout">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-4">
          <Award className="h-10 w-10 text-[#1E3A8A] bg-white p-2 rounded-xl shadow-xs border border-[#E2E8F0]" />
          <h3 className="font-sans font-bold text-xl text-[#1E293B]">Want to see your ward on our honor scoreboard next year?</h3>
          <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl">
            Join Nurture Class 10 SSC batches. We offer personalized monitoring sheets, textbook rigor, and structural weekly preliminary exam patterns modeled precisely after official Maharashtra State Board guidelines.
          </p>
          <Link
            to="/admission"
            className="inline-flex justify-center items-center gap-2 bg-[#1E3A8A] hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-xs mt-2"
          >
            Enquire for Admission
          </Link>
        </div>
      </section>

    </div>
  );
}
