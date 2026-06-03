/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Compass, Eye, ShieldCheck, Award, GraduationCap, MapPin, Map, Phone, Mail } from 'lucide-react';
import { FacultyMember } from '../types';

export default function About() {
  const coreValues = [
    {
      icon: <Compass className="h-6 w-6 text-[#1E3A8A]" />,
      title: 'Our Mission',
      desc: 'To provide structured, highly affordable, and results-driven academic mentoring for Maharashtra State Board students, empowering them with conceptual confidence for their primary crucial board examination years.',
    },
    {
      icon: <Eye className="h-6 w-6 text-[#1E3A8A]" />,
      title: 'Our Vision',
      desc: 'To become Mumbai\'s flagship community-focused coaching institute, recognized for student improvement, ethical teaching practices, and creating equal success pathways regardless of prior scholastic benchmarks.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#10B981]" />,
      title: 'Our Approach',
      desc: 'A curriculum centered around textbook mastery, regular feedback boards, continuous formula practice exercises, and small classroom limits that make mentoring active instead of passive.',
    },
  ];

  const faculty: FacultyMember[] = [
    {
      name: 'Prof. Sandeep R. Patil',
      subject: 'Mathematics (Algebra & Geometry)',
      experience: '16+ Years Experience',
      qualifications: 'M.Sc. in Applied Mathematics (Mumbai University)',
      imageUrl: 'Patil sir is Nurtures founder, renowned across Kandivali for converting complex proofs into simple logic formulas.',
    },
    {
      name: 'Mrs. Shailaja M. Joshi',
      subject: 'Science & Technology (Part 1 & 2)',
      experience: '12+ Years Experience',
      qualifications: 'B.Ed, B.Sc. in Physics & Chemistry',
      imageUrl: 'An outstanding science coordinator who emphasizes diagrammatic accuracy and chemical equation balancing techniques.',
    },
    {
      name: 'Prof. Anant K. Deshmukh',
      subject: 'Social Sciences & Languages',
      experience: '10+ Years Experience',
      qualifications: 'M.A. in History & Political Science',
      imageUrl: 'Passionate historical educator who uses comparative timelines to help students score maximum results with ease.',
    },
  ];

  const milestones = [
    { year: '2009', title: 'Institute Founded', desc: 'Opened Nurture Coaching Classes with a single batch of 15 students in Kandivali West.' },
    { year: '2013', title: '500+ Students Milestone', desc: 'Achieved consistent board results, expanding the faculty to 5 subject specialists.' },
    { year: '2018', title: 'Modern Center Upgrade', desc: 'Moved to our present, spacious location at Shop No. 20, Turakhia Park, M.G. Road with modern teaching boards.' },
    { year: '2023', title: '3,000+ Alumni Milestone', desc: 'Grounded a record academic year with over 40+ scholars securing above 90% in Class 10 SSC Boards.' },
  ];

  return (
    <div className="font-sans flex flex-col bg-white" id="about-us-page-root">
      
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-14" id="about-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          {/* Breadcrumb strip */}
          <nav className="flex justify-center items-center gap-2 text-xs font-semibold text-[#475569] uppercase tracking-wider mb-3">
            <Link to="/" className="hover:text-[#1E3A8A]">Home</Link>
            <span>/</span>
            <span className="text-[#1E3A8A]">About Us</span>
          </nav>
          <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] tracking-tight">
            Our Story, Faculty & Vision
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto mt-3">
            Providing Maharashtra Board SSC classes with absolute integrity and results-driven guidelines since 2009 in Kandivali West, Mumbai.
          </p>
        </div>
      </section>

      {/* 2. Founding Story Block */}
      <section className="py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] bg-blue-50 px-3 py-1.5 rounded-full w-fit">
                Established 2009
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#1E293B] tracking-tight">
                Empowering Kandivali's Youth through Systematic Education
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed">
                Nurture Coaching Classes was founded to provide structured, affordable, and highly result-oriented coaching for Maharashtra Board students in Kandivali West. Established in 2009, our institute has served thousands of students across Classes 8–10. We specialize in transforming average scorers into board toppers by stripping academic fear and replacing it with rigorous, routine exam series guidelines.
              </p>
              <div className="flex gap-4 items-center bg-[#F8F9FA] p-4 rounded-xl border border-[#E2E8F0]" id="about-quote-card">
                <GraduationCap className="h-10 w-10 text-[#1E3A8A] shrink-0" />
                <p className="text-xs italic text-[#475569] leading-relaxed">
                  "At Nurture, we do not believe in mass commercial classrooms. We believe in taking responsibility for every child's report book by keeping batches small and interactive."
                </p>
              </div>
            </div>

            {/* Side visual representation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-square bg-[#F8F9FA] border-2 border-dashed border-[#CBD5E1] rounded-2xl p-8 text-center flex flex-col justify-center items-center shadow-inner hover:border-[#1E3A8A] transition-colors group">
                <div className="p-4 bg-white border border-[#E2E8F0] rounded-2xl mb-4 text-[#1E3A8A] shadow-xs group-hover:scale-105 transition-transform">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-base text-[#1E293B] mb-1">Over 15 Years</h3>
                <p className="text-xs text-[#475569] leading-relaxed max-w-[200px]">
                  Of consistent, verified high performance in Maharashtra SSC Board results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-[#F8F9FA] py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="about-core-values-grid">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm"
              >
                <div className="p-3 bg-[#F8F9FA] rounded-xl w-fit flex items-center justify-center text-[#1E3A8A]">
                  {val.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-bold text-lg text-[#1E293B]">
                    {val.title}
                  </h3>
                  <p className="font-sans text-xs text-[#475569] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Faculty Profiles section */}
      <section className="py-16 sm:py-20 border-b border-[#E2E8F0]" id="about-faculty-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-bold text-xs uppercase tracking-widest text-[#1E3A8A] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Expert Faculty
            </span>
            <h2 className="font-sans font-bold text-3xl text-[#1E293B] tracking-tight mt-3">
              Learn From Subject Specialists
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#475569] mt-3">
              Our core academic teachers possess immense familiarity with standard Maharashtra State Board evaluation models, helping students study exactly what counts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="faculty-display-grid">
            {faculty.map((member, idx) => (
              <div key={idx} className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all duration-200">
                {/* Faculty Photo Placeholder Box with highly stylized graphics */}
                <div className="bg-[#F8F9FA] aspect-[4/3] w-full border-b border-[#E2E8F0] flex flex-col items-center justify-center p-6 text-center select-none group relative">
                  <div className="mb-2 bg-white border border-[#E2E8F0] p-3 rounded-full text-[#1E3A8A] shadow-xs">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="font-sans font-semibold text-xs text-[#1E293B] uppercase tracking-wider">{member.subject}</span>
                  <span className="text-[10px] text-[#475569] mt-1 font-bold">{member.experience}</span>
                  <div className="absolute inset-0 bg-[#1E3A8A] bg-opacity-[0.01] pointer-events-none"></div>
                </div>
                
                {/* Text details */}
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-sans font-bold text-lg text-[#1E293B]">{member.name}</h3>
                  <span className="font-sans font-semibold text-xs text-[#1E3A8A]">{member.qualifications}</span>
                  <p className="font-sans text-xs text-[#475569] leading-relaxed mt-2 border-l-2 border-[#CBD5E1] pl-3">
                    {member.imageUrl}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Historical Milestone Timeline */}
      <section className="bg-[#F8F9FA] py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-bold text-xs uppercase tracking-widest text-[#10B981] bg-emerald-50 px-3 py-1.5 rounded-full inline-block">
              Nurture Milestones Timeline
            </span>
            <h2 className="font-sans font-bold text-3xl text-[#1E293B] tracking-tight mt-3">
              Our Journey of Educational Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="milestones-steps-container">
            {milestones.map((step, idx) => (
              <div key={idx} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm flex flex-col gap-3 relative">
                <span className="font-sans font-bold text-4xl text-[#1E3A8A] leading-none mb-1">
                  {step.year}
                </span>
                <div className="flex flex-col gap-1.5 border-t border-[#E2E8F0] pt-3">
                  <h4 className="font-sans font-bold text-[#1E293B] text-base">{step.title}</h4>
                  <p className="font-sans text-xs text-[#475569] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Physical Location Center Embed Block */}
      <section className="py-16 sm:py-20" id="about-location-interactive-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="lg:col-span-5 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="bg-[#1E3A8A] text-white p-2.5 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-sans font-bold text-xl text-[#1E293B]">Nurture Kandivali Centre</h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed">
                Parents are requested to visit our physical headquarters at Turakhia Park, M.G. Road for secure counseling, mock syllabus guides, fee installments discussions, and cohort analysis.
              </p>
              <div className="flex flex-col gap-2 text-xs font-semibold text-[#1E293B] mt-2">
                <div className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-[#1E3A8A]" />
                  <span>Shop No. 20, Turakhia Park, Kandivali West, Mumbai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#1E3A8A]" />
                  <span>+91 98200 12345 / 022 2801234</span>
                </div>
              </div>
            </div>

            {/* Mock Map Layout Embed */}
            <div className="lg:col-span-7 w-full h-64 bg-[#F8F9FA] rounded-2xl border-2 border-dashed border-[#CBD5E1] flex flex-col items-center justify-center p-6 text-center select-none hover:border-[#1E3A8A] transition-colors relative">
              <MapPin className="h-8 w-8 text-red-500 mb-2 animate-bounce" />
              <h4 className="font-bold text-xs text-[#1E293B] uppercase tracking-wider mb-1">Interactive Google Maps Embed</h4>
              <p className="text-[10px] text-[#475569] max-w-xs leading-relaxed mb-4">
                Shop No. 20, Turakhia Park, Opposite Balaji School, M.G. Road, Kandivali West, Mumbai
              </p>
              <span className="bg-[#1E3A8A] hover:bg-blue-900 cursor-pointer text-white text-[10px] font-bold uppercase tracking-wider py-2 px-4 rounded-lg shadow-sm" onClick={() => alert('Opening Kandivali West center location coordinates in Google Maps!')}>
                Launch Map Directions
              </span>
              <div className="absolute inset-0 bg-[#1E3A8A] bg-opacity-[0.01] pointer-events-none rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
