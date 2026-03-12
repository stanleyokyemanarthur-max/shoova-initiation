import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  // Desktop nav styling
 const navLinkClass = ({ isActive }) =>
  `font-medium transition relative ${
    isActive
      ? scrolled
        ? "text-secondary"
        : "text-white"
      : scrolled
      ? "text-gray-700 hover:text-primary"
      : "text-white hover:text-secondary"
  }`;


  return (
    <header>
      {/* Scroll Progress Bar */}
      <div
        className=" fixed top-0 left-0 h-[3px] bg-secondary z-[100]"
        style={{ width: `${scrollProgress}%` }}
      />

    <nav
  className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white/95 backdrop-blur-md shadow-md"
      : "bg-transparent shadow-none"
  }`}
>

        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <div className="relative w-[230px] h-[85px]">
              <Link to="/" className="block w-full h-full">
                <img
                  src="/img/shoova_logo.png"
                  alt="Shoova Initiative"
                  className="absolute inset-0 w-full h-full object-contain transition"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              <NavLink to="/programs" className={navLinkClass}>
                Programs
              </NavLink>

              <NavLink to="/blog" className={navLinkClass}>
                Stories
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>

              <Link
                to="/donate"
                className="bg-secondary hover:bg-[#B85D2F] text-white px-6 py-2.5 rounded-full font-semibold transition shadow-sm"
              >
                Join the Restoration
              </Link>

            </div>

            {/* Mobile Button */}
            <button
              className={`md:hidden transition ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 space-y-8 text-lg font-medium">

          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-secondary font-semibold"
                : "hover:text-primary transition"
            }
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            to="/programs"
            className={({ isActive }) =>
              isActive
                ? "text-secondary font-semibold"
                : "hover:text-primary transition"
            }
          >
            Programs
          </NavLink>

          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-secondary font-semibold"
                : "hover:text-primary transition"
            }
          >
            Stories
          </NavLink>

          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-secondary font-semibold"
                : "hover:text-primary transition"
            }
          >
            Contact
          </NavLink>

          <Link
            onClick={() => setMobileMenuOpen(false)}
            to="/donate"
            className="mt-6 bg-secondary hover:bg-[#B85D2F] text-white py-3 rounded-full text-center font-semibold transition"
          >
            Join the Restoration
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
