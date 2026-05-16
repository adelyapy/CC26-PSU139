import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { TeamSection } from '../components/landing/TeamSection';

export function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <TeamSection />

      <Footer />
    </div>
  );
}