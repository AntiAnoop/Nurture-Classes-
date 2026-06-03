/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Award, BookOpen } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026; // set according to design timeframe

  return (
    <footer className="bg-white border-t border-[#E2E8F0] text-[#475569] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#1E3A8A] p-2 rounded-xl text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-[#1E3A8A] tracking-tight leading-none">Nurture</span>
                <span className="text-xs text-[#1E293B] font-semibold tracking-wide">Coaching Classes</span>
              </div>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed mt-2">
              Kandivali's premier coaching classes specializing in Maharashtra Board (SSC) for Class 8, 9, and 10 since 2009. We believe in providing structured learning paths for solid outcomes.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#1E293B] font-medium mt-1">
              <Award className="h-4 w-4 text-[#10B981]" />
              98% Board Pass Rate Guaranteed
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold text-[#1E293B] tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-[#1E3A8A] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1E3A8A] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[#1E3A8A] transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-[#1E3A8A] transition-colors">Board Results</Link>
              </li>
              <li>
                <Link to="/admission" className="hover:text-[#1E3A8A] transition-colors">Admission Enquiry</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#1E3A8A] transition-colors font-medium text-[#1E3A8A]">Student Portal</Link>
              </li>
            </ul>
          </div>

          {/* Programs Covered */}
          <div>
            <h3 className="text-sm font-semibold text-[#1E293B] tracking-wider uppercase mb-4">Our Batches</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#1E3A8A]" />
                <span>Class 8 (Maharashtra SSC)</span>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#1E3A8A]" />
                <span>Class 9 (Maharashtra SSC)</span>
              </li>
              <li className="flex items-center gap-2 text-[#1E293B] font-medium">
                <BookOpen className="h-4 w-4 text-[#10B981]" />
                <span>Class 10 SSC (Exclusive Batch)</span>
              </li>
              <li className="text-xs text-[#475569] italic mt-2 border-l-2 border-[#1E3A8A] pl-3">
                Subjects: Mathematics (Algebra/Geometry), Science Tech, Social Science, Language Electives
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-[#1E293B] tracking-wider uppercase">Kandivali Centre</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin className="h-5 w-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Shop No. 20, Turakhia Park, M.G. Road, Kandivali West, Mumbai — 400067
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="h-4 w-4 text-[#1E3A8A] shrink-0" />
                <span>+91 98200 12345 / 022 2801234</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="h-4 w-4 text-[#1E3A8A] shrink-0" />
                <span>info@nurtureclasses.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar section */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {currentYear} Nurture Coaching Classes · Kandivali West, Mumbai. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-[#475569]">Maharashtra Board (SSC) Specialization</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#1E3A8A] font-semibold">ISO 9001:2015 Certified Institute</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
