/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { 
  Users, Award, BookOpen, Clock, HeartHandshake, ShieldCheck, HelpCircle, ArrowRight, CheckCircle2 
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import TopperGrid from '../components/TopperGrid';

export default function Home() {
  const whyChooseNurture = [
    {
      icon: <Users className="h-6 w-6 text-[#1E3A8A]" />,
      title: 'Small Batch Sizes',
      desc: 'We limit our classrooms to 30 students maximum. This guarantees personalized attention and enables our teachers to monitor progress individually.',
    },
    {
      icon: <Award className="h-6 w-6 text-[#1E3A8A]" />,
      title: 'Experienced Faculty',
      desc: 'Our faculty members are respected subject matter specialists with over 10 years of experience teaching Maharashtra State Board curricula.',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#1E3A8A]" />,
      title: 'Regular Test Series',
      desc: 'Systematic weekly and chapter-wise mock examinations modeled exactly after the latest Maharashtra SSC Board question paper patterns.',
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-[#10B981]" />,
      title: 'Doubt-Clearing Sessions',
      desc: 'Specialized 1-on-1 doubt clearing clinics held every Saturday, letting students review complex theorems, formulas, or translation rules.',
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-[#1E3A8A]" />,
      title: 'Parent Progress Updates',
      desc: 'Monthly performance scorecards and progress tracking consultations with parents to ensure transparent accountability and support.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#10B981]" />,
      title: 'Proven Track Record',
      desc: 'Consistently churning out Board toppers in Kandivali West since 2009. Join our alumni who successfully entered premier Junior Colleges.',
    },
  ];

  return (
    <div className="font-sans flex flex-col" id="homepage-root">
      
      {/* 1. Hero banner section */}
      <HeroSection />

      {/* 2. Cumulative milestones and rating strip */}
      <StatsBar />

      {/* 3. Why Choose Nurture Feature Grid */}
      <section className="bg-white py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="font-bold text-xs uppercase tracking-widest text-[#1E3A8A] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Why Choose Nurture Classes
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#1E293B] tracking-tight mt-3">
              Crafting Successful Futures Since 2009
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#475569] mt-3">
              We specialize in structured tutoring for Classes 8, 9, and 10. Our methodology bridges core mathematical concepts and scientific rules for lasting board excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-nurture-grid">
            {whyChooseNurture.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FA] border border-[#E2E8F0] hover:border-[#1E3A8A] rounded-2xl p-6 sm:p-8 hover:translate-y-[-2px] transition-all duration-200 shadow-xs flex flex-col gap-4 group"
                id={`feature-card-${idx}`}
              >
                <div className="p-3 bg-white border border-[#E2E8F0] rounded-xl w-fit flex items-center justify-center shadow-xs text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-bold text-lg text-[#1E293B] group-hover:text-[#1E3A8A] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs text-[#475569] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Active Toppers Wall Highlights preview */}
      <section className="bg-[#F8F9FA] py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <span className="font-bold text-xs uppercase tracking-widest text-[#10B981] bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
                Our Students, Their Success
              </span>
              <h2 className="font-sans font-bold text-3xl text-[#1E293B] tracking-tight mt-3">
                Meet Nurture Classes Toppers
              </h2>
            </div>
            <Link
              to="/results"
              className="inline-flex items-center gap-2 font-semibold text-sm text-[#1E3A8A] hover:text-blue-900 group"
              id="toppers-wall-results-link"
            >
              View All Board Results
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <TopperGrid showAll={false} />
        </div>
      </section>

      {/* 5. Direct Admission Form and CTA Callout */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1E3A8A] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-8 shadow-md">
            
            {/* Background absolute decor circles */}
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 border border-white border-opacity-10 rounded-full"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-white bg-opacity-[0.02] rounded-full"></div>

            <div className="flex flex-col gap-4 text-center lg:text-left relative">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-white bg-opacity-10 backdrop-blur-md rounded-full px-4 py-1.5 w-fit mx-auto lg:mx-0">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                <span className="text-xs font-semibold">Limited Seats Available 2025–26</span>
              </div>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl">
                Admissions Open for Class 8, 9 & 10 Batches
              </h2>
              <p className="font-sans text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
                Unlock your complete academic potential with Maharashtra State Board curriculum experts. Our dedicated staff is ready to help you trace your goals.
              </p>
            </div>

            <div className="relative shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/admission"
                className="inline-flex justify-center items-center bg-white hover:bg-[#F8F9FA] text-[#1E3A8A] font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-200 text-center"
                id="admission-cta-banner-btn"
              >
                Enquire Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex justify-center items-center border border-white hover:bg-white hover:bg-opacity-5 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-center"
              >
                Our Location
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
