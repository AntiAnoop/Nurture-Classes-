/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Loader2, GraduationCap, Lock, Mail, AlertCircle, Info } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Guard: if student is already authenticated, redirect them directly to dashboard
  useEffect(() => {
    async function checkActiveSession() {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/dashboard');
      }
    }
    checkActiveSession();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Initial basic client field check
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please fill in both email and password.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (error) {
        setErrorMessage(error.message);
      } else if (data.session) {
        // Sign-in successful! Redirecting
        navigate('/dashboard');
      }
    } catch {
      setErrorMessage('An unexpected authentication error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans" id="student-login-page-root">
      
      {/* Outer Card Wrap */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 sm:px-10 border border-[#E2E8F0] shadow-sm sm:rounded-2xl flex flex-col gap-6" id="login-card-container">
          
          {/* Logo element lockup inside login page */}
          <div className="flex flex-col items-center text-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="bg-[#1E3A8A] p-2.5 rounded-xl text-white group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-sans font-extrabold text-xl text-[#1E3A8A] tracking-tight">Nurture</span>
                <span className="text-[10px] text-[#475569] font-bold tracking-wider mt-1 uppercase">Coaching Classes</span>
              </div>
            </Link>
            
            <div className="flex flex-col gap-1 mt-2">
              <h2 className="font-sans font-bold text-xl text-[#1E293B] tracking-tight">
                Student Portal Login
              </h2>
              <p className="font-sans text-xs text-[#475569] leading-relaxed">
                Access your Class 10 SSC learning dashboard
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" id="login-form-element">
            {/* Field: Email */}
            <div className="flex flex-col gap-1.5 text-left">
              <label htmlFor="login-email" className="font-sans text-xs font-bold text-[#1E293B]">Student Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. student@nurture.edu.in"
                  className="font-sans text-sm w-full border border-[#E2E8F0] bg-[#F8F9FA] rounded-xl pl-9 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all"
                  aria-required="true"
                />
              </div>
            </div>

            {/* Field: Password */}
            <div className="flex flex-col gap-1.5 text-left">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="login-password" className="font-sans font-bold text-[#1E293B]">Portal Password</label>
                <button
                  type="button"
                  onClick={() => alert('Forgot password helper: Contact Nurture desk at Shop No. 20 to reset pre-assigned credentials.')}
                  className="text-xs font-semibold text-[#1E3A8A] hover:underline"
                  id="forgot-password-link"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="font-sans text-sm w-full border border-[#E2E8F0] bg-[#F8F9FA] rounded-xl pl-9 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all"
                  aria-required="true"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                  id="password-visibility-toggle"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Error Message banner */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex gap-2 items-start text-left text-xs text-red-700 leading-relaxed" id="login-error-view">
                <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Triggers */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex justify-center items-center bg-[#1E3A8A] hover:bg-blue-900 text-white font-sans text-sm font-semibold py-3 px-4 rounded-xl shadow-xs transition-colors mt-2"
              id="signin-btn-trigger"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Authenticating student...
                </>
              ) : (
                'Sign In to Portal'
              )}
            </button>
          </form>

          {/* Quick Informational Sandbox Access Banner */}
          <div className="bg-[#F8F9FA] border border-blue-100 rounded-xl p-4 text-left flex gap-3 text-[11px] text-[#475569] leading-relaxed">
            <Info className="h-4.5 w-4.5 text-[#1E3A8A] shrink-0 mt-0.5" />
            <div>
              <strong>Quick Preview Access:</strong> Use pre-enrolled testing details:<br />
              Email: <code className="bg-white border px-1 py-0.5 rounded text-blue-800">student@nurture.edu.in</code><br />
              Password: <code className="bg-white border px-1 py-0.5 rounded text-blue-800">student123</code>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
