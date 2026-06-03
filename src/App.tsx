/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages imports
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Results from './pages/Results';
import Contact from './pages/Contact';
import Admission from './pages/Admission';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ChapterView from './pages/ChapterView';

// Internal layouts manager to hide headers/footers in classroom dashboard screens
function AppLayout() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Show Navbar only for non-dashboard marketing pages */}
      {!isDashboardRoute && <Navbar />}
      
      {/* Primary pages workspace rendering viewports */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:subject/:chapter" element={<ChapterView />} />
        </Routes>
      </div>

      {/* Show Footer only for non-dashboard marketing pages */}
      {!isDashboardRoute && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
