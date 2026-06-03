/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, ArrowRight, Download, Users, Star, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const handleDownloadBrochure = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Nurture Coaching Brochure download starting! (Class 8, 9, 10 Maharashtra Board SSC Syllabus Guide)');
  };

  return (
    <div className="relative bg-white overflow-hidden py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left" id="hero-text-container">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-[#E2E8F0] rounded-full px-4 py-1.5 w-fit" id="hero-badge">
              <CheckCircle className="h-4 w-4 text-[#10B981]" />
              <span className="text-xs font-semibold text-[#1E3A8A]">Admissions Open for Academic Year 2025–26</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1E293B] tracking-tight leading-none">
              Kandivali's Most Trusted{' '}
              <span className="text-[#1E3A8A]">Coaching Classes</span> for Maharashtra SSC Board
            </h1>

            {/* Subheadline description */}
            <p className="font-sans text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
              Helping Class 8, 9 & 10 students achieve top scores since 2009 — structured batches, expert faculty, and proven Board results under Maharashtra curriculum guidelines.
            </p>

            {/* Map Address Strip */}
            <div className="flex items-start gap-2 text-sm text-[#475569]" id="hero-location-strip">
              <MapPin className="h-5 w-5 text-[#1E3A8A] shrink-0 mt-0.5" />
              <span>
                <strong>Kandivali West Centre:</strong> Shop No. 20, Turakhia Park, M.G. Road, Kandivali West, Mumbai — 400067
              </span>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
              <Link
                to="/admission"
                className="inline-flex justify-center items-center gap-2 bg-[#1E3A8A] hover:bg-blue-900 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                id="hero-cta-enquire"
              >
                Enquire for Admission
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={handleDownloadBrochure}
                className="inline-flex justify-center items-center gap-2 border-2 border-[#1E3A8A] hover:bg-[#F8F9FA] text-[#1E3A8A] font-semibold text-base px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                id="hero-cta-brochure"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </button>
            </div>

            {/* Small Quick Endorsement metrics */}
            <div className="flex flex-wrap items-center gap-6 mt-4 border-t border-[#E2E8F0] pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#475569]">
                <Users className="h-4 w-4 text-[#1E3A8A]" />
                <span>Personalized Batch sizes (Max 30)</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#475569]">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>4.7/5 Rated on JustDial</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Box */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end" id="hero-image-pane">
            <div className="relative w-full max-w-[420px] aspect-[4/5] bg-[#F8F9FA] border-2 border-dashed border-[#CBD5E1] rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-inner hover:border-[#1E3A8A] transition-all duration-300 group">
              <div className="absolute inset-0 bg-[#1E3A8A] bg-opacity-[0.02] rounded-2xl pointer-events-none mb-2"></div>
              
              {/* Central Illustration elements */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#E2E8F0] mb-4 group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Camera className="h-10 w-10 text-[#1E3A8A] group-hover:rotate-6 transition-transform" />
              </div>
              
              <h3 className="font-sans font-bold text-[#1E293B] text-lg mb-1">
                Kandivali West Centre Cohort
              </h3>
              <p className="font-sans text-xs text-[#475569] max-w-[240px] leading-relaxed mb-6">
                Live interactive visual board classes & classroom interactions since 2009. Join our toppers.
              </p>
              
              <div className="bg-[#1E3A8A] bg-opacity-5 border border-blue-100 text-xs text-[#1E3A8A] font-semibold tracking-wide py-2.5 px-4 rounded-xl">
                Batch Photo — Shop No. 20
              </div>

              {/* Decorative Corner Tabs */}
              <div className="absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2 border-[#CBD5E1] rounded-tl-sm"></div>
              <div className="absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2 border-[#CBD5E1] rounded-tr-sm"></div>
              <div className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 border-[#CBD5E1] rounded-bl-sm"></div>
              <div className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 border-[#CBD5E1] rounded-br-sm"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
