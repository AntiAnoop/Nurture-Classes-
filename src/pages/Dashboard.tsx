/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, LogOut, Menu, X, LayoutDashboard, ChevronDown, ChevronRight, BookOpen, Clock, AlertCircle, Sparkles 
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { DashboardSubjectProgress } from '../types';
import SubjectCard from '../components/SubjectCard';
import { getSubjectPaper } from '../lib/curriculum';
import { loadCompletedTopicIds, getSubjectProgressPercent } from '../lib/progress';

// Full layout sidebar navigation items
export const dashboardSidebarItems = [
  {
    category: 'Mathematics',
    items: [
      { name: 'Algebra', id: 'algebra', path: '/dashboard/algebra/linear-equations' },
      { name: 'Geometry', id: 'geometry', path: '/dashboard/geometry/similarity' },
    ]
  },
  {
    category: 'Science & Technology',
    items: [
      { name: 'Science Part 1', id: 'science-part-1', path: '/dashboard/science-part-1/gravitation' },
      { name: 'Science Part 2', id: 'science-part-2', path: '/dashboard/science-part-2/heredity-evolution' },
    ]
  },
  {
    category: 'Social Sciences',
    items: [
      { name: 'History & Pol. Science', id: 'history', path: '/dashboard/history/historiography' },
      { name: 'Geography of India', id: 'geography', path: '/dashboard/geography/field-visit' },
    ]
  }
];

export default function Dashboard() {
  const [studentEmail, setStudentEmail] = useState('student@nurture.edu.in');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);
  const navigate = useNavigate();

  // Route security: Check active session details on mount
  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate('/login');
      } else if (data.session.user?.email) {
        setStudentEmail(data.session.user.email);
      }
    }
    checkSession();
  }, [navigate]);

  // Synchronize student completed topics list on mount or email changes
  useEffect(() => {
    async function fetchProgress() {
      if (studentEmail) {
        const completions = await loadCompletedTopicIds(studentEmail);
        setCompletedTopicIds(completions);
      }
    }
    fetchProgress();
  }, [studentEmail]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  // Syllabus configuration mappings
  const subjectsConfig = [
    { id: 'algebra', name: 'Algebra', paperName: 'Mathematics Part 1' },
    { id: 'geometry', name: 'Geometry', paperName: 'Mathematics Part 2' },
    { id: 'science-part-1', name: 'Science Part 1', paperName: 'Science Theory' },
    { id: 'science-part-2', name: 'Science Part 2', paperName: 'Science Practicals' },
    { id: 'history', name: 'History', paperName: 'History & Pol. Science' },
    { id: 'geography', name: 'Geography', paperName: 'Geography of India' },
  ];

  // Dynamically calculated progres lists based on database completions
  const subjectProgressList: DashboardSubjectProgress[] = subjectsConfig.map((sub) => {
    const paper = getSubjectPaper(sub.id);
    const chapterCount = paper ? paper.chapters.length : 0;
    const progress = getSubjectProgressPercent(sub.id, completedTopicIds);
    return {
      id: sub.id,
      name: sub.name,
      paperName: sub.paperName,
      chapterCount,
      progress,
    };
  });

  return (
    <div className="h-screen flex overflow-hidden bg-[#F8F9FA] font-sans" id="dashboard-portal-root">
      
      {/* 1. Desktop Left Sidebar Navigation */}
      <aside className="hidden md:flex md:flex-shrink-0 w-64 bg-white border-r border-[#E2E8F0] flex flex-col justify-between h-full z-30">
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Logo block */}
          <div className="h-16 flex items-center px-6 border-b border-[#E2E8F0] shrink-0 bg-white">
            <Link to="/dashboard" className="flex items-center gap-2.5">
              <div className="bg-[#1E3A8A] p-1.5 rounded-lg text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#1E3A8A] tracking-tight">Nurture Portal</span>
                <span className="text-[9px] text-[#475569] font-bold tracking-wider uppercase">Class 10 Syllabus</span>
              </div>
            </Link>
          </div>

          {/* Student Email identity frame */}
          <div className="px-6 py-4 bg-[#F8F9FA] border-b border-[#E2E8F0] flex flex-col gap-1.5 text-left shrink-0">
            <span className="text-[10px] font-bold text-[#475569] uppercase tracking-wider">Logged In</span>
            <span className="font-semibold text-xs text-[#1E293B] truncate" title={studentEmail}>
              {studentEmail}
            </span>
          </div>

          {/* Sidebar Menu Navigation link loops */}
          <nav className="flex-1 px-4 py-4 space-y-6 text-left">
            <div>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-sm bg-blue-50 text-[#1E3A8A] border border-blue-100"
              >
                <LayoutDashboard className="h-4.5 w-4.5 shrink-0 text-[#1E3A8A]" />
                <span>Overview Home</span>
              </Link>
            </div>

            {dashboardSidebarItems.map((category, catIdx) => (
              <div key={catIdx} className="space-y-2">
                <span className="block px-3 text-[10px] font-bold text-[#475569] uppercase tracking-wider">
                  {category.category}
                </span>
                <div className="space-y-1">
                  {category.items.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      to={sub.path}
                      className="flex items-center justify-between px-3 py-2 rounded-lg font-medium text-xs text-[#475569] hover:bg-[#F8F9FA] hover:text-[#1E3A8A]"
                    >
                      <span className="truncate">{sub.name}</span>
                      <ChevronRight className="h-3 w-3 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer sign out strip */}
        <div className="p-4 border-t border-[#E2E8F0] bg-white shrink-0">
          <button
            onClick={handleSignOut}
            className="w-full inline-flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs py-2.5 px-4 rounded-xl border border-red-100"
            id="sidebar-signout-trigger"
          >
            <LogOut className="h-4 w-4" />
            Sign Out Session
          </button>
        </div>
      </aside>

      {/* 2. Mobile collapsible navigation header */}
      <div className="flex flex-col flex-1 overflow-hidden h-full">
        {/* Top bar header for mobile controls */}
        <header className="md:hidden h-16 bg-white border-b border-[#E2E8F0] px-4 flex items-center justify-between z-40 shrink-0">
          <Link to="/dashboard" className="flex items-center gap-2.5">
            <div className="bg-[#1E3A8A] p-1 rounded text-white">
              <GraduationCap className="h-4 w-4" />
            </div>
            <span className="font-bold text-sm text-[#1E3A8A]">Nurture Admin Portal</span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2.5 rounded-lg border border-[#E2E8F0] hover:bg-slate-50 focus:outline-[#1E3A8A] transition-colors"
            id="mobile-drawer-trigger"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </header>

        {/* Mobile menu drawer wrapper */}
        {isSidebarOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex" id="mobile-sidebar-drawer bg-white">
            <div className="fixed inset-0 bg-slate-600 bg-opacity-40 backdrop-blur-xs" onClick={() => setIsSidebarOpen(false)}></div>
            <div className="relative flex flex-col w-72 max-w-sm bg-white border-r h-full p-5 shadow-xl text-left gap-6 animate-fade-in z-55">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-[#1E3A8A]">Class 10 Portal Menu</span>
                <button onClick={() => setIsSidebarOpen(false)} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Student Email Frame */}
              <div className="bg-[#F8F9FA] border p-3 rounded-lg flex flex-col gap-0.5">
                <span className="text-[9px] font-bold text-slate-500 uppercase">Logged In As</span>
                <span className="text-xs font-semibold text-slate-700 truncate">{studentEmail}</span>
              </div>

              {/* Sidebar items inside mobile */}
              <nav className="flex-1 space-y-5 overflow-y-auto pr-1">
                <Link
                  to="/dashboard"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center gap-3 py-2 px-3 bg-blue-50 text-[#1E3A8A] border-l-2 border-[#1E3A8A] font-semibold text-xs"
                >
                  <LayoutDashboard className="h-4 w-4 text-[#1E3A8A]" />
                  <span>Overview Home</span>
                </Link>

                {dashboardSidebarItems.map((category, catIdx) => (
                  <div key={catIdx} className="space-y-2">
                    <span className="block px-3 text-[10px] font-bold text-slate-500 uppercase">{category.category}</span>
                    <div className="space-y-0.5">
                      {category.items.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.path}
                          onClick={() => setIsSidebarOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded text-xs text-slate-600"
                        >
                          <span>{sub.name}</span>
                          <ChevronRight className="h-3 w-3 text-slate-400" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>

              <button
                onClick={() => {
                  setIsSidebarOpen(false);
                  handleSignOut();
                }}
                className="w-full bg-red-50 text-red-600 font-bold text-xs py-3 rounded-xl border border-red-100 shrink-0"
              >
                Sign Out Session
              </button>
            </div>
          </div>
        )}

        {/* 3. Main Dashboard Overview Container */}
        <main className="flex-1 bg-[#F8F9FA] overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto flex flex-col gap-6" id="dashboard-content-grid">
            
            {/* Welcome Banner Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative overflow-hidden shadow-xs">
              {/* Abs decoration bar */}
              <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#1E3A8A]"></div>
              
              <div className="flex flex-col gap-2 text-left pl-2">
                <h2 className="font-sans font-bold text-2xl text-[#1E293B]">
                  Welcome back, <span className="text-[#1E3A8A]">Student</span> 👋
                </h2>
                <p className="font-sans text-xs text-[#475569] max-w-xl">
                  Ready to continue your Maharashtra SSC board preparations? Click any subject card below to stream video lectures or view study guide solutions.
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 text-[#10B981] font-bold text-xs px-4 py-2 rounded-full shrink-0 flex items-center gap-1.5 shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                Class 10 · SSC Board · 2025–26
              </div>
            </div>

            {/* Section subject cards title header */}
            <div className="text-left mt-2">
              <span className="font-semibold text-xs text-[#1E3A8A] uppercase tracking-wider">
                Academic Curriculum
              </span>
              <h3 className="font-sans font-bold text-xl text-[#1E293B] mt-0.5">
                Your Class 10 Syllabus Papers
              </h3>
            </div>

            {/* Progressive cards grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="subcard-dashboard-grid">
              {subjectProgressList.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>

            {/* Quick coaching board summary banner block at bottom */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-4 text-left items-start mt-4">
              <AlertCircle className="h-5.5 w-5.5 text-[#1E3A8A] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <h4 className="font-bold text-sm text-[#1E3A8A]">Syllabus Notice Board Rules</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  The preliminary test series schedule for July is now posted at Nurture Shop No. 20. Parents are requested to collect individual scorecard printouts during our monthly feedback meetings. Contact Prof. Sandeep in person for any updates.
                </p>
              </div>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
