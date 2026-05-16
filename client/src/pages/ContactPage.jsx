import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContactSection } from '../components/landing/ContactSection';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <Navbar />

      <main className="flex-1">

        <ContactSection />

      </main>

      <Footer />

    </div>
  );
}