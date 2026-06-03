/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, HelpCircle, Loader2 } from 'lucide-react';
import { EnquiryFormData } from '../types';

export default function EnquiryForm() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    studentName: '',
    classApplyingFor: '10',
    schoolName: '',
    parentName: '',
    mobile: '',
    email: '',
    preferredBatch: 'Any',
    source: 'Neighbour / Word of mouth',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};
    
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.schoolName.trim()) newErrors.schoolName = 'Current school name is required';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent or Guardian name is required';
    
    // 10-digit Indian Mobile Validation
    const mobileTrimmed = formData.mobile.trim();
    if (!mobileTrimmed) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(mobileTrimmed)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number (starts with 6-9)';
    }

    // Email format checks
    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      newErrors.email = 'Please enter a valid email format (e.g., parent@gmail.com)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when editing field
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulating database storage delay beautifully with a spinner loader
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 text-center max-w-lg mx-auto shadow-sm flex flex-col items-center gap-6" id="enquiry-success-view">
        <div className="h-16 w-16 bg-[#10B981] bg-opacity-10 border border-[#10B981] rounded-full flex items-center justify-center text-[#10B981]">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-sans font-bold text-2xl text-[#1E293B]">Enquiry Submitted Successfully</h3>
          <p className="font-sans text-sm text-[#475569] leading-relaxed max-w-sm mx-auto">
            Thank you for reaching out to <strong>Nurture Coaching Classes</strong>! Our academic counselor will contact you at <strong>{formData.mobile}</strong> within 24 hours to schedule an interview or counseling session.
          </p>
        </div>
        <div className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xl p-4 text-left text-xs text-[#475569] flex flex-col gap-2">
          <div><strong>Student Name:</strong> {formData.studentName}</div>
          <div><strong>Class Selected:</strong> Class {formData.classApplyingFor} (Maharashtra Board)</div>
          <div><strong>Reference ID:</strong> NUR-{Math.floor(100000 + Math.random() * 900000)}</div>
        </div>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              studentName: '',
              classApplyingFor: '10',
              schoolName: '',
              parentName: '',
              mobile: '',
              email: '',
              preferredBatch: 'Any',
              source: 'Neighbour / Word of mouth',
              message: '',
            });
          }}
          className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm hover:underline"
          id="submit-another-enquiry-btn"
        >
          Submit another enquiry
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm max-w-xl mx-auto flex flex-col gap-5" id="admission-enquiry-form" noValidate>
      <div className="border-b border-[#E2E8F0] pb-4 mb-2">
        <h3 className="font-sans font-bold text-xl text-[#1E293B]">Admission Enquiry Form</h3>
        <p className="font-sans text-xs text-[#475569] mt-1 leading-relaxed">
          Please fill out the details below. All fields are required to process the enrollment request.
        </p>
      </div>

      {/* Grid: Student Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="studentName" className="font-sans text-xs font-semibold text-[#1E293B]">Student Full Name <span className="text-red-500">*</span></label>
          <input
            id="studentName"
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="e.g. Rahul Patil"
            className={`font-sans text-sm border bg-[#F8F9FA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all ${
              errors.studentName ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0]'
            }`}
            aria-required="true"
            aria-invalid={!!errors.studentName}
          />
          {errors.studentName && <span className="text-[10px] text-red-500 font-bold">{errors.studentName}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="classApplyingFor" className="font-sans text-xs font-semibold text-[#1E293B]">Class Enrolling For <span className="text-red-500">*</span></label>
          <select
            id="classApplyingFor"
            name="classApplyingFor"
            value={formData.classApplyingFor}
            onChange={handleChange}
            className="font-sans text-sm border border-[#E2E8F0] bg-[#F8F9FA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all"
          >
            <option value="8">Class 8 (SSC curriculum)</option>
            <option value="9">Class 9 (SSC curriculum)</option>
            <option value="10">Class 10 (SSC batch ONLY)</option>
          </select>
        </div>
      </div>

      {/* Input: School name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="schoolName" className="font-sans text-xs font-semibold text-[#1E293B]">Current School Name <span className="text-red-500">*</span></label>
        <input
          id="schoolName"
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          placeholder="e.g. Balaji International School, Kandivali"
          className={`font-sans text-sm border bg-[#F8F9FA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all ${
            errors.schoolName ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0]'
          }`}
          aria-required="true"
          aria-invalid={!!errors.schoolName}
        />
        {errors.schoolName && <span className="text-[10px] text-red-500 font-bold">{errors.schoolName}</span>}
      </div>

      {/* Grid: Parent details */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="parentName" className="font-sans text-xs font-semibold text-[#1E293B]">Parent / Guardian Name <span className="text-red-500">*</span></label>
        <input
          id="parentName"
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          placeholder="e.g. Suresh Patil"
          className={`font-sans text-sm border bg-[#F8F9FA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all ${
            errors.parentName ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0]'
          }`}
          aria-required="true"
          aria-invalid={!!errors.parentName}
        />
        {errors.parentName && <span className="text-[10px] text-red-500 font-bold">{errors.parentName}</span>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mobile" className="font-sans text-xs font-semibold text-[#1E293B]">Parent Mobile Number <span className="text-red-500">*</span></label>
          <input
            id="mobile"
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="e.g. 9820012345"
            maxLength={10}
            className={`font-sans text-sm border bg-[#F8F9FA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all ${
              errors.mobile ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0]'
            }`}
            aria-required="true"
            aria-invalid={!!errors.mobile}
          />
          {errors.mobile && <span className="text-[10px] text-red-500 font-bold">{errors.mobile}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-sans text-xs font-semibold text-[#1E293B]">E-mail Address <span className="text-red-500">*</span></label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. parent@gmail.com"
            className={`font-sans text-sm border bg-[#F8F9FA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all ${
              errors.email ? 'border-red-400 focus:ring-red-400' : 'border-[#E2E8F0]'
            }`}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="text-[10px] text-red-500 font-bold">{errors.email}</span>}
        </div>
      </div>

      {/* Grid: Timing preferences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="preferredBatch" className="font-sans text-xs font-semibold text-[#1E293B]">Preferred Batch Timing <span className="text-red-500">*</span></label>
          <select
            id="preferredBatch"
            name="preferredBatch"
            value={formData.preferredBatch}
            onChange={handleChange}
            className="font-sans text-sm border border-[#E2E8F0] bg-[#F8F9FA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all"
          >
            <option value="Any">Any Timing is fine</option>
            <option value="Morning">Morning Batch (7:00 AM - 10:00 AM)</option>
            <option value="Evening">Evening Batch (4:30 PM - 7:30 PM)</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="source" className="font-sans text-xs font-semibold text-[#1E293B]">How did you hear about us?</label>
          <select
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="font-sans text-sm border border-[#E2E8F0] bg-[#F8F9FA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all"
          >
            <option value="Neighbour / Word of mouth">Neighbour / Word of mouth</option>
            <option value="Newspaper Pamphlet">Newspaper Advertisement</option>
            <option value="Banner Outside Complex">Banner / Poster On Street</option>
            <option value="JustDial Search">JustDial Portal Page</option>
          </select>
        </div>
      </div>

      {/* Field: Optional comment text */}
      <div className="flex flex-col gap-1.5 hover:shadow-xs">
        <label htmlFor="message" className="font-sans text-xs font-semibold text-[#1E293B]">Additional Message / Queries (Optional)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Any specific academic struggles or queries you would like our staff to know?"
          className="font-sans text-sm border border-[#E2E8F0] bg-[#F8F9FA] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex justify-center items-center gap-3 bg-[#1E3A8A] hover:bg-blue-900 disabled:bg-slate-400 text-white font-sans text-base font-semibold py-4 rounded-xl shadow-md transition-all duration-200 mt-2"
        id="enquiry-submit-trigger"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting secure details...
          </>
        ) : (
          'Submit Admission Enquiry'
        )}
      </button>
    </form>
  );
}
