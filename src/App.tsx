import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './Components/Layout/DashboardLayout';
import { ContactModal } from './Components/Contact/ContactModal';
import { Dashboard } from './Pages/Dashboard';
import { ErrorBoundary } from './Components/UI/ErrorBoundary';

// Lazy loading pages (simulating others for now using same dashboard or placeholder)
const About = lazy(() => import('./Pages/AboutPage'));
const Projects = lazy(() => import('./Pages/ProjectListPage'));
const Contact = lazy(() => import('./Pages/ContactPage'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-slate-900">
            <div className="w-12 h-12 border-4 border-white/20 border-t-pink-500 rounded-full animate-spin" />
          </div>
        }>
          <Routes>
            <Route path="/" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:category" element={<Projects />} />
            <Route path="/category/:category" element={<Projects />} />
            <Route path="*" element={<div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">404 - Page Not Found</div>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <ContactModal />
    </Router>
  );
}

export default App;
