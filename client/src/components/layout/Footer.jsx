import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  Youtube,
  Instagram,
} from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');

      setTimeout(() => {
        const section =
          document.getElementById(id);

        section?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);

      return;
    }

    const section =
      document.getElementById(id);

    section?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container-custom py-14">

        <div className="grid md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5 pr-8">

            {/* Logo + Title */}
            <div className="flex items-center gap-3">
              <img
                src="/careerpath-icon.png"
                alt="CareerPath AI Logo"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h2 className="text-3xl font-bold leading-none">
                  CareerPath AI
                </h2>
              </div>
            </div>

            {/* Short Description */}
            <p className="mt-5 text-slate-300 leading-relaxed max-w-sm">
              Platform AI untuk rekomendasi karier
              modern berdasarkan CV dan skill.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 px-2">
            <h3 className="text-xl font-semibold mb-5">
              Navigasi
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>
                <button
                  onClick={() =>
                    scrollToSection('home')
                  }
                  className="hover:text-white transition"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    scrollToSection('about')
                  }
                  className="hover:text-white transition"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    scrollToSection('workflow')
                  }
                  className="hover:text-white transition"
                >
                  Workflow
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    navigate('/team')
                  }
                  className="hover:text-white transition"
                >
                  Team
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    navigate('/contact')
                  }
                  className="hover:text-white transition"
                >
                  Contact
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    navigate('/analyze')
                  }
                  className="hover:text-white transition"
                >
                  Analyze CV
                </button>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 px-4">
            <h3 className="text-xl font-semibold mb-4">
              Kontak
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                Email:
                careerpathai@gmail.com
              </li>

              <li>
                Telp:
                (021) 1234-5678
              </li>

              <li>
                WhatsApp:
                +62 812-3456-7890
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="md:col-span-3 pl-6">
            <h3 className="text-xl font-semibold mb-4">
              Alamat
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                Jl. Teknologi AI No. 139
              </li>

              <li>
                Jakarta Selatan, 12345
              </li>

              <li>
                Indonesia
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 mt-10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">

          <p>
            © 2026 CareerPath AI.
            All rights reserved.
          </p>

          <div className="flex gap-6">

            <button className="hover:text-white transition">
              Perusahaan
            </button>

            <button className="hover:text-white transition">
              Karir
            </button>

            <button className="hover:text-white transition">
              Kebijakan Privasi
            </button>

            <button className="hover:text-white transition">
              Syarat & Ketentuan
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}