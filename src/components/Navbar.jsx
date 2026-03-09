import React, { useState, useEffect } from "react";
import { Menu, X, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <header>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled
          ? " shadow-md "
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div className="relative w-[250px] h-[95px]">
              <Link to="/" className="block w-full h-full">
                <img
                  src="/img/shoova_logo.png"
                  alt="Shoova Initiative"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">

              <Link
                className={`font-medium transition ${scrolled ? "text-gray-400 hover:text-primary" : "text-primary hover:text-secondary"
                  }`}
                to="/about"
              >
                About
              </Link>

              <Link
                className={`font-medium transition ${scrolled ? "text-gray-400 hover:text-primary" : "text-primary hover:text-secondary"
                  }`}
                to="/programs"
              >
                Programs
              </Link>

              <Link
                className={`font-medium transition ${scrolled ? "text-gray-400 hover:text-primary" : "text-primary hover:text-secondary"
                  }`}
                to="/blog"
              >
                Stories
              </Link>

              <Link
                className={`font-medium transition ${scrolled ? "text-gray-400 hover:text-primary" : "text-primary hover:text-secondary"
                  }`}
                to="/contact"
              >
                Contact
              </Link>

              <Link
                className="bg-secondary hover:bg-[#B85D2F] text-white px-6 py-2.5 rounded-full font-semibold transition shadow-sm"
                to="/donate"
              >
                Donate Now
              </Link>

            </div>

            {/* Mobile Button */}
            <button
              className={`md:hidden transition ${scrolled ? "text-text" : "text-text"
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
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col p-8 space-y-8 text-lg font-medium">

          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary transition"
            to="/about"
          >
            About
          </Link>

          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary transition"
            to="/programs"
          >
            Programs
          </Link>

          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary transition"
            to="/blog"
          >
            Stories
          </Link>

          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary transition"
            to="/contact"
          >
            Contact
          </Link>

          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 bg-secondary hover:bg-secondaryHover text-white py-3 rounded-full text-center font-semibold transition"
            to="/donate"
          >
            Donate Now
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;