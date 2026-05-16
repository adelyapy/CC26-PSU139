import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/landing/HeroSection';
import { AboutSection } from '../components/landing/AboutSection';
import { WorkflowSection } from '../components/landing/WorkflowSection';

export function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section =
        document.getElementById(
          location.state.scrollTo
        );

      section?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <WorkflowSection />

      <Footer />
    </div>
  );
}