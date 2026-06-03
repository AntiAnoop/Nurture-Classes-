/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldAlert, MessageSquare, ExternalLink } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

export default function Contact() {
  const handleOpenJustdial = () => {
    alert('Directing parents to Nurture Coaching Classes JustDial profile! (4.7 rating, 48 reviews verified)');
  };

  const handleOpenWhatsapp = () => {
    alert('Connecting call to Nurture Admission Desk WhatsApp! (+91 98200 12345)');
  };

  return (
    <div className="font-sans flex flex-col bg-white" id="contact-us-page-root">
      
      {/* 1. Header Hero Panel with Breadcrumbs */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-14" id="contact-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          {/* Breadcrumb strip */}
          <nav className="flex justify-center items-center gap-2 text-xs font-semibold text-[#475569] uppercase tracking-wider mb-3">
            <Link to="/" className="hover:text-[#1E3A8A]">Home</Link>
            <span>/</span>
            <span className="text-[#1E3A8A]">Contact Us</span>
          </nav>
          <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] tracking-tight">
            Connect With Nurture Classes
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto mt-3">
            Drop an enquiry online or visit our physical Kandivali West center. Our administration office is open daily.
          </p>
        </div>
      </section>

      {/* 2. Main Two-Column split block */}
      <section className="py-12 sm:py-20 bg-white" id="contact-split-views">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-two-column-layout">
            
            {/* Left Column: Local variables details block */}
            <div className="lg:col-span-5 flex flex-col gap-8 text-left">
              <div>
                <span className="font-bold text-xs uppercase tracking-widest text-[#1E3A8A] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
                  Kandivali Centre Details
                </span>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#1E293B] tracking-tight mt-3">
                  Visit Nurture Headquarters
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed">
                  Decisions regarding standard board preparations are highly crucial. We encourage parents to walk in to discuss mock analysis sheets and previous toppers success graphs.
                </p>
              </div>

              {/* Specific details cards list */}
              <div className="flex flex-col gap-5" id="contact-details-tiles-list">
                <div className="flex gap-4 items-start bg-[#F8F9FA] p-5 rounded-2xl border border-[#E2E8F0]">
                  <MapPin className="h-6 w-6 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="font-sans font-bold text-sm text-[#1E293B]">Physical Address</span>
                    <span className="font-sans text-xs text-[#475569] leading-relaxed">
                      Shop No. 20, Turakhia Park, Opposite Balaji School, M.G. Road, Kandivali West, Mumbai — 400067
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-[#F8F9FA] p-5 rounded-2xl border border-[#E2E8F0]">
                  <Phone className="h-6 w-6 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="font-sans font-bold text-sm text-[#1E293B]">Mobile & Phone Line</span>
                    <span className="font-sans text-xs text-[#475569]">
                      +91 98200 12345 / 022 2801234
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-[#F8F9FA] p-5 rounded-2xl border border-[#E2E8F0]">
                  <Mail className="h-6 w-6 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="font-sans font-bold text-sm text-[#1E293B]">E-mail Inbox</span>
                    <span className="font-sans text-xs text-[#475569]">
                      info@nurtureclasses.org / admissions@nurture.edu.in
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-[#F8F9FA] p-5 rounded-2xl border border-[#E2E8F0]">
                  <Clock className="h-6 w-6 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="font-sans font-bold text-sm text-[#1E293B]">Administrative Hours</span>
                    <span className="font-sans text-xs text-[#475569]">
                      Monday – Saturday: 7:00 AM – 9:00 PM | Sunday: Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* JustDial & WhatsApp row icons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-[#E2E8F0]" id="contact-social-triggers">
                <span className="text-[10px] font-bold text-[#1E293B] uppercase tracking-wider">Social Directories Verified Profiles</span>
                <div className="flex gap-4">
                  <button
                    onClick={handleOpenWhatsapp}
                    className="flex-1 inline-flex justify-center items-center gap-2 bg-[#10B981] hover:bg-emerald-600 text-white font-sans text-xs font-semibold py-3 px-4 rounded-xl shadow-xs transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 fill-current" />
                    WhatsApp Desk
                  </button>
                  <button
                    onClick={handleOpenJustdial}
                    className="flex-1 inline-flex justify-center items-center gap-2 border border-[#E2E8F0] bg-[#F8F9FA] hover:bg-[#F2F4F7] text-[#1E293B] font-sans text-xs font-semibold py-3 px-4 rounded-xl shadow-xs transition-all"
                  >
                    <span>JustDial Reviews</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded form block */}
            <div className="lg:col-span-7 w-full shadow-xs" id="contact-column-form">
              <EnquiryForm />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Outer Map Section */}
      <section className="bg-[#F8F9FA] py-14 border-t border-[#E2E8F0]" id="outer-map-embed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-xs flex flex-col gap-6 text-left max-w-4xl mx-auto">
            <h3 className="font-sans font-bold text-lg text-[#1E293B]">Kandivali Center Location Map Preview</h3>
            <div className="w-full h-80 bg-[#F8F9FA] rounded-2xl border-2 border-dashed border-[#CBD5E1] flex flex-col items-center justify-center p-6 text-center select-none hover:border-[#1E3A8A] transition-colors relative">
              <MapPin className="h-10 w-10 text-red-500 mb-2 animate-bounce animate-duration-1000" />
              <h4 className="font-bold text-sm text-[#1E293B] uppercase tracking-wider mb-1">M.G. Road Turakhia Park Map Bounds</h4>
              <p className="text-xs text-[#475569] max-w-sm leading-relaxed mb-4 text-center">
                Opposite Balaji School playground corridor, Shop No. 20, Turakhia Park, Kandivali West, Mumbai
              </p>
              <button
                onClick={() => alert('Launching Google Maps directions to Turakhia Park, Kandivali West!')}
                className="bg-[#1E3A8A] hover:bg-blue-900 border border-transparent text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-6 rounded-xl shadow-xs"
              >
                Get Live Directions
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
