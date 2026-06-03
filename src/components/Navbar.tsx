/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap, ArrowRight, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Results', path: '/results' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo element with precise branding */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group" id="navbar-logo-link">
              <div className="bg-[#1E3A8A] p-2 rounded-xl text-white group-hover:scale-105 transition-all duration-200">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg text-[#1E3A8A] tracking-tight leading-none">Nurture</span>
                <span className="font-sans text-xs text-[#475569] font-medium tracking-wide mt-1">Coaching Classes</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative overflow-hidden font-sans text-sm font-medium transition-all duration-200 py-1 ${
                    isActive
                      ? 'text-[#1E3A8A] border-b-2 border-[#1E3A8A]'
                      : 'text-[#475569] hover:text-[#1E3A8A]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-blue-900 text-white font-sans text-sm font-semibold rounded-full px-5 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              id="student-portal-login-btn"
            >
              <User className="h-4 w-4" />
              Student Login
            </Link>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#1E293B] hover:bg-[#F8F9FA] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              id="mobile-menu-trigger"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu pane */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg font-sans text-base font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-[#F2F4F7] text-[#1E3A8A]'
                      : 'text-[#475569] hover:bg-[#F8F9FA] hover:text-[#1E3A8A]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 pb-2 border-t border-[#E2E8F0] px-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-blue-900 text-white text-base font-semibold rounded-lg py-3 shadow-sm"
              >
                <User className="h-4 w-4" />
                Student Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
