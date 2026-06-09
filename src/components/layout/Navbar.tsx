import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/hero";
import type { NavLink } from "../../types";
import irisLogo from "../../assets/logo/irisLogo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-1 bg-white/95 dark:bg-[#0D0D1A]/95 backdrop-blur-md shadow-lg"
          : "py-3 sm:py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Pill wrapper */}
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            !scrolled
              ? "bg-white/95 dark:bg-[#151528]/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 shadow-xl"
              : ""
          }`}
        >
          {/* ── Logo ── */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={irisLogo}
              alt="Iris Health logo"
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop nav (lg+) ── */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link: NavLink) => (
              <div key={link.label} className="relative">
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                    ${location.pathname === link.href
                      ? "text-[#6B4EC6] bg-purple-50 dark:bg-[#1E1E38] dark:text-[#A48ED9]"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#6B4EC6] dark:hover:text-[#A48ED9] hover:bg-purple-50 dark:hover:bg-[#1E1E38]"
                    }`}
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {link.dropdown && openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-[#151528] rounded-xl shadow-xl border border-gray-100 dark:border-white/10 py-2 z-50"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.dropdown.map((item: string) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#6B4EC6] hover:bg-purple-50 dark:hover:bg-[#1E1E38] transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="mailto:admin@irisphysio.co.uk"
              className="ml-2 xl:ml-3 px-4 xl:px-5 py-2 xl:py-2.5 bg-[#6B4EC6] hover:bg-[#5A3EAD] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 whitespace-nowrap"
            >
              Book Appointment
            </a>
          </div>

          {/* ── Hamburger (below lg) ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1E1E38] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile / tablet menu (below lg) ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white dark:bg-[#151528] rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 p-3 sm:p-4 space-y-1">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.label}
                to={link.href}
                className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors
                  ${location.pathname === link.href
                    ? "text-[#6B4EC6] bg-purple-50 dark:bg-[#1E1E38] dark:text-[#A48ED9]"
                    : "text-gray-700 dark:text-gray-200 hover:text-[#6B4EC6] hover:bg-purple-50 dark:hover:bg-[#1E1E38]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-1">
              <a
                href="mailto:admin@irisphysio.co.uk"
                className="block px-4 py-3 bg-[#6B4EC6] hover:bg-[#5A3EAD] text-white text-sm font-semibold rounded-xl text-center transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
