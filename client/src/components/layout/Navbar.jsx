import {
  useState,
  useEffect,
} from 'react';

import {
  useNavigate,
  useLocation,
} from 'react-router-dom';

import {
  Menu,
  X,
} from 'lucide-react';

export function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  /* =========================
     Handle Scroll Section
  ========================= */
  const handleNavigateSection = (
    sectionId
  ) => {

    /* Jika bukan landing page */
    if (location.pathname !== '/') {

      navigate('/', {
        state: {
          scrollTo: sectionId,
        },
      });

      setMobileOpen(false);

      return;
    }

    /* Scroll section */
    const section =
      document.getElementById(
        sectionId
      );

    section?.scrollIntoView({
      behavior: 'smooth',
    });

    setMobileOpen(false);
  };

  /* =========================
     Handle Navigate Page
  ========================= */
  const handleNavigatePage = (
    path
  ) => {
    navigate(path);

    setMobileOpen(false);
  };

  /* =========================
     Close Mobile Menu on Desktop
  ========================= */
  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener(
      'resize',
      handleResize
    );

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );
    };
  }, []);

  /* =========================
     Lock Scroll When Menu Open
  ========================= */
  useEffect(() => {

    if (mobileOpen) {
      document.body.style.overflow =
        'hidden';
    } else {
      document.body.style.overflow =
        'auto';
    }

    return () => {
      document.body.style.overflow =
        'auto';
    };
  }, [mobileOpen]);

  /* =========================
     Active Page Helper
  ========================= */
  const isActivePage = (path) =>
    location.pathname === path;

  return (
    <>
      {/* =========================
          Navbar
      ========================= */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">

        <div className="container-custom py-5 flex items-center justify-between">

          {/* =========================
              Logo
          ========================= */}
          <button
            onClick={() =>
              handleNavigateSection(
                'home'
              )
            }
            className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Go to home"
          >

            <img
              src="/careerpath-icon.png"
              alt="CareerPath AI Logo"
              className="w-11 h-11 object-contain"
            />

            <h1 className="text-2xl font-bold text-slate-800">
              CareerPath AI
            </h1>

          </button>

          {/* =========================
              Desktop Navigation
          ========================= */}
          <div className="hidden md:flex items-center gap-8">

            {/* Landing Links */}
            <button
              onClick={() =>
                handleNavigateSection(
                  'home'
                )
              }
              className="nav-link"
            >
              Home
            </button>

            <button
              onClick={() =>
                handleNavigateSection(
                  'about'
                )
              }
              className="nav-link"
            >
              About
            </button>

            <button
              onClick={() =>
                handleNavigateSection(
                  'workflow'
                )
              }
              className="nav-link"
            >
              Workflow
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-slate-300" />

            {/* Team */}
            <button
              onClick={() =>
                handleNavigatePage(
                  '/team'
                )
              }
              className={`nav-link ${
                isActivePage('/team')
                  ? 'text-blue-600 font-semibold'
                  : ''
              }`}
            >
              Team
            </button>

            {/* Contact */}
            <button
              onClick={() =>
                handleNavigatePage(
                  '/contact'
                )
              }
              className={`nav-link ${
                isActivePage('/contact')
                  ? 'text-blue-600 font-semibold'
                  : ''
              }`}
            >
              Contact
            </button>

            {/* CTA */}
            <button
              onClick={() =>
                handleNavigatePage(
                  '/analyze'
                )
              }
              className="primary-button"
            >
              Analyze CV
            </button>

          </div>

          {/* =========================
              Mobile Menu Button
          ========================= */}
          <button
            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Toggle navigation menu"
            aria-expanded={
              mobileOpen
            }
            aria-controls="mobile-menu"
          >

            {mobileOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}

          </button>

        </div>
      </nav>

      {/* =========================
          Mobile Overlay
      ========================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() =>
            setMobileOpen(false)
          }
          aria-hidden="true"
        />
      )}

      {/* =========================
          Mobile Navigation
      ========================= */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 md:hidden ${
          mobileOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >

        <div className="p-6 flex flex-col gap-5">

          {/* Close Button */}
          <div className="flex justify-end">

            <button
              onClick={() =>
                setMobileOpen(false)
              }
              className="p-2 rounded-xl hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close menu"
            >

              <X className="w-6 h-6 text-slate-700" />

            </button>

          </div>

          {/* Navigation */}
          <button
            onClick={() =>
              handleNavigateSection(
                'home'
              )
            }
            className="mobile-link"
          >
            Home
          </button>

          <button
            onClick={() =>
              handleNavigateSection(
                'about'
              )
            }
            className="mobile-link"
          >
            About
          </button>

          <button
            onClick={() =>
              handleNavigateSection(
                'workflow'
              )
            }
            className="mobile-link"
          >
            Workflow
          </button>

          <div className="w-full h-px bg-slate-200" />

          <button
            onClick={() =>
              handleNavigatePage(
                '/team'
              )
            }
            className="mobile-link"
          >
            Team
          </button>

          <button
            onClick={() =>
              handleNavigatePage(
                '/contact'
              )
            }
            className="mobile-link"
          >
            Contact
          </button>

          <button
            onClick={() =>
              handleNavigatePage(
                '/analyze'
              )
            }
            className="primary-button w-full mt-2"
          >
            Analyze CV
          </button>

        </div>

      </div>
    </>
  );
}