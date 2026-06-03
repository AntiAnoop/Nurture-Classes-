/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, LogOut, Menu, X, ArrowLeft, ArrowRight, LayoutDashboard, ChevronRight, BookOpen, 
  HelpCircle, PlayCircle, Library, Milestone 
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { getSubjectPaper, getChapter, curriculumData } from '../lib/curriculum';
import VideoPlayer from '../components/VideoPlayer';
import TopicAccordion from '../components/TopicAccordion';
import { dashboardSidebarItems } from './Dashboard';

export default function ChapterView() {
  const { subject: subjectParam, chapter: chapterParam } = useParams<{ subject: string; chapter: string }>();
  const [studentEmail, setStudentEmail] = useState('student@nurture.edu.in');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Route security: Check session details on mount
  useEffect(() => {
    async function checkSession() {
      // Direct relative import handles safe supabase references
      const { supabase: importedSupabase } = await import('../lib/supabase');
      const { data } = await importedSupabase.auth.getSession();
      if (!data.session) {
        navigate('/login');
      } else if (data.session.user?.email) {
        setStudentEmail(data.session.user.email);
      }
    }
    checkSession();
  }, [navigate]);

  const handleSignOut = async () => {
    const { supabase: importedSupabase } = await import('../lib/supabase');
    await importedSupabase.auth.signOut();
    navigate('/login');
  };

  // Find curriculum details dynamically
  const subjectId = subjectParam || 'algebra';
  const paper = getSubjectPaper(subjectId) || curriculumData[0];
  
  // Find active chapter, default to first chapter of the active subject if param mismatch
  const activeChapterId = chapterParam || paper.chapters[0]?.id;
  const activeChapter = paper.chapters.find(ch => ch.id === activeChapterId) || paper.chapters[0];

  // Helper lists: Find indices for Previous and Next chapter navigation triggers
  const activeChapterIndex = paper.chapters.findIndex(ch => ch.id === activeChapter.id);
  const prevChapter = activeChapterIndex > 0 ? paper.chapters[activeChapterIndex - 1] : null;
  const nextChapter = activeChapterIndex < paper.chapters.length - 1 ? paper.chapters[activeChapterIndex + 1] : null;

  return (
    <div className="h-screen flex overflow-hidden bg-[#F8F9FA] font-sans" id="classroom-portal-root">
      
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
                <span className="text-[9px] text-[#475569] font-bold tracking-wider uppercase">Class 10 Classroom</span>
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

          {/* Sidebar Menu Links */}
          <nav className="flex-1 px-4 py-4 space-y-6 text-left">
            <div>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-xl font-medium text-xs text-[#475569] hover:bg-[#F8F9FA] hover:text-[#1E3A8A]"
              >
                <LayoutDashboard className="h-4.5 w-4.5 shrink-0 text-slate-400" />
                <span>Overview Home</span>
              </Link>
            </div>

            {/* List all other subjects navigation */}
            {dashboardSidebarItems.map((category, catIdx) => (
              <div key={catIdx} className="space-y-1.5">
                <span className="block px-3 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  {category.category}
                </span>
                <div className="space-y-0.5">
                  {category.items.map((sub, subIdx) => {
                    const isCurrentSubject = sub.id === paper.id;
                    return (
                      <Link
                        key={subIdx}
                        to={sub.path}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg font-medium text-xs transition-colors ${
                          isCurrentSubject
                            ? 'bg-blue-50 bg-opacity-70 text-[#1E3A8A] border-l-2 border-[#1E3A8A]'
                            : 'text-[#475569] hover:bg-[#F8F9FA] hover:text-[#1E3A8A]'
                        }`}
                      >
                        <span className="truncate">{sub.name}</span>
                        {isCurrentSubject && <span className="h-1.5 w-1.5 bg-[#1E3A8A] rounded-full shrink-0"></span>}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer sign out */}
        <div className="p-4 border-t border-[#E2E8F0] bg-white shrink-0">
          <button
            onClick={handleSignOut}
            className="w-full inline-flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs py-2 px-4 rounded-xl border border-red-100"
          >
            <LogOut className="h-4 w-4" />
            Sign Out Session
          </button>
        </div>
      </aside>

      {/* 2. Mobile Drawer Header */}
      <div className="flex flex-col flex-1 overflow-hidden h-full">
        <header className="md:hidden h-16 bg-white border-b border-[#E2E8F0] px-4 flex items-center justify-between z-40 shrink-0">
          <Link to="/dashboard" className="flex items-center gap-2.5">
            <div className="bg-[#1E3A8A] p-1 rounded text-white">
              <GraduationCap className="h-4 w-4" />
            </div>
            <span className="font-bold text-sm text-[#1E3A8A]">Nurture Lecture Portal</span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2.5 rounded-lg border border-[#E2E8F0] hover:bg-slate-50 focus:outline-[#1E3A8A] transition-colors"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </header>

        {/* Mobile menu drawer panel */}
        {isSidebarOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-slate-600 bg-opacity-40 backdrop-blur-xs" onClick={() => setIsSidebarOpen(false)}></div>
            <div className="relative flex flex-col w-72 max-w-sm bg-white border-r h-full p-5 shadow-xl text-left gap-6 animate-fade-in z-55">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-[#1E3A8A]">Syllabus Lectures</span>
                <button onClick={() => setIsSidebarOpen(false)} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile identity */}
              <div className="bg-[#F8F9FA] border p-3 rounded-lg flex flex-col gap-0.5">
                <span className="text-[9px] font-bold text-slate-500 uppercase">Logged In As</span>
                <span className="text-xs font-semibold text-slate-700 truncate">{studentEmail}</span>
              </div>

              {/* Navigation loop */}
              <nav className="flex-1 space-y-4 overflow-y-auto pr-1">
                <Link
                  to="/dashboard"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center gap-3 py-2 px-3 hover:bg-slate-50 text-slate-600 font-medium text-xs"
                >
                  <LayoutDashboard className="h-4 w-4 text-slate-400" />
                  <span>Overview Home</span>
                </Link>

                {dashboardSidebarItems.map((category, catIdx) => (
                  <div key={catIdx} className="space-y-2">
                    <span className="block px-3 text-[10px] font-bold text-slate-500 uppercase">{category.category}</span>
                    <div className="space-y-0.5">
                      {category.items.map((sub, subIdx) => {
                        const isCurrent = sub.id === paper.id;
                        return (
                          <Link
                            key={subIdx}
                            to={sub.path}
                            onClick={() => setIsSidebarOpen(false)}
                            className={`flex items-center justify-between py-2 px-3 rounded text-xs leading-none ${
                              isCurrent ? 'bg-blue-50 text-[#1E3A8A] font-semibold' : 'text-slate-600'
                            }`}
                          >
                            <span>{sub.name}</span>
                            <ChevronRight className="h-3 w-3 text-slate-400" />
                          </Link>
                        );
                      })}
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

        {/* 3. Main Split-Pane Classroom Content Area (Dual Pane on Desktop, stacked on mobile) */}
        <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden bg-[#F8F9FA]">
          
          {/* Main Classroom Viewer (Left side 60% on desktop) */}
          <main className="flex-1 bg-white md:overflow-y-auto p-4 sm:p-6 lg:p-8 border-r border-[#E2E8F0]">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
              
              {/* Back to dashboard Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#475569] uppercase tracking-wider text-left bg-white">
                <Link to="/dashboard" className="hover:text-[#1E3A8A] flex items-center gap-1.5 shrink-0">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Portal Home
                </Link>
                <span>/</span>
                <span className="truncate">{paper.name}</span>
                <span>/</span>
                <span className="text-[#1E3A8A] truncate">{activeChapter.title}</span>
              </div>

              {/* Render dynamic VideoPlayer component */}
              <VideoPlayer
                title={activeChapter.title}
                duration={activeChapter.duration}
                chapterNumber={activeChapter.number}
              />

              {/* Dynamic Bottom Previous / Next Chapter navigation panel */}
              <div className="flex justify-between items-center bg-[#F8F9FA] border border-[#E2E8F0] p-4 sm:p-6 rounded-2xl shadow-xs mt-2" id="chapter-navigation-row">
                {prevChapter ? (
                  <Link
                    to={`/dashboard/${paper.id}/${prevChapter.id}`}
                    className="inline-flex items-center gap-2 font-semibold text-xs text-[#1E3A8A] hover:text-blue-900 border border-[#E2E8F0] bg-white rounded-xl px-4 py-2.5 shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <ArrowLeft className="h-4 w-4 shrink-0" />
                    <span className="hidden sm:inline">Prev Lecture:</span> {prevChapter.number}. {prevChapter.title}
                  </Link>
                ) : (
                  <div className="text-[10px] uppercase font-bold text-[#475569] bg-white border px-3 py-2 rounded-xl">
                    Syllabus Entry point
                  </div>
                )}

                {nextChapter ? (
                  <Link
                    to={`/dashboard/${paper.id}/${nextChapter.id}`}
                    className="inline-flex items-center gap-2 font-semibold text-xs text-[#1E3A8A] hover:text-blue-900 border border-transparent bg-[#1E3A8A] text-white rounded-xl px-4 py-2.5 shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <span className="hidden sm:inline">Next Lecture:</span> {nextChapter.number}. {nextChapter.title}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                ) : (
                  <div className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-2 rounded-xl">
                    Syllabus Finished ✓
                  </div>
                )}
              </div>

            </div>
          </main>

          {/* Right Pane Sidebar: Subject Chapter Index + Topic Accordions (Right side 40% on desktop) */}
          <aside className="w-full md:w-[380px] bg-[#F8F9FA] md:overflow-y-auto p-4 sm:p-6 lg:p-8 shrink-0 border-t md:border-t-0 flex flex-col gap-6 text-left">
            
            {/* Render the full dynamic topic accordion guidelines */}
            <TopicAccordion topics={activeChapter.topics} />

            {/* Subject chapter playlists (LMS style list) */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-3">
                <Library className="h-4.5 w-4.5 text-[#1E3A8A]" />
                <h4 className="font-sans font-bold text-sm text-[#1E293B]">
                  Syllabus Lecture Index
                </h4>
              </div>
              <div className="flex flex-col gap-1.5" id="chapter-playlists-scroll">
                {paper.chapters.map((ch) => {
                  const isActive = ch.id === activeChapter.id;
                  return (
                    <Link
                      key={ch.id}
                      to={`/dashboard/${paper.id}/${ch.id}`}
                      className={`flex gap-3 p-3 rounded-xl text-left border transition-all duration-150 ${
                        isActive
                          ? 'bg-blue-50 border-[#1E3A8A] ring-1 ring-[#1E3A8A]'
                          : 'bg-white border-[#E2E8F0] hover:border-slate-300'
                      }`}
                    >
                      <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                        isActive
                          ? 'bg-[#1E3A8A] text-white animate-pulse'
                          : 'bg-[#F8F9FA] text-[#1E3A8A]'
                      }`}>
                        {ch.number}
                      </div>
                      <div className="flex flex-col min-w-0 justify-center">
                        <span className="font-sans font-semibold text-xs text-[#1E293B] truncate leading-tight">
                          {ch.title}
                        </span>
                        <span className="text-[10px] text-[#475569] font-medium tracking-wide mt-1">
                          {ch.duration || '24:35'} · {ch.topics.length} topics
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
