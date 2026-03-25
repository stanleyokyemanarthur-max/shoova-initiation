import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const navLinkClass = ({ isActive }) =>
    `
    text-[17px] font-medium tracking-[0.02em] transition duration-300 relative
    text-gray-700 hover:text-gray-900
    after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-secondary
    after:transition-all after:duration-300 hover:after:w-full
    ${isActive ? "text-secondary after:w-full" : ""}
  `;

  return (
    <header>

      {/* SCROLL PROGRESS */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-secondary z-[100]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAV */}
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-md border-b border-gray-100"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 md:px-10 transition-all duration-500 ${
            scrolled ? "mt-0" : "mt-2"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16" : "h-22"
            }`}
          >

            {/* LOGO */}
            <div
              className={`transition-all duration-500 ${
                scrolled ? "w-[150px]" : "w-[200px]"
              }`}
            >
              <Link to="/">
                <img
                  src="/img/shoova_logo.png"
                  alt="Shoova Initiative"
                  className="w-full h-auto object-contain"
                />
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex font-body text-[15px] font-semibold tracking-[0.05em] items-center gap-10">

                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>

                <NavLink to="/programs" className={navLinkClass}>
                  Programs
                </NavLink>

                <NavLink to="/blog" className={navLinkClass}>
                  Our Story
                </NavLink>

                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>

              </div>
            </div>

            {/* CTA */}
            <div className="hidden md:flex w-[160px] justify-end">
              <Link
                to="/donate"
                className="bg-secondary hover:bg-[#B85D2F] text-white px-5 py-2 rounded-full text-[14px] font-medium transition shadow-sm hover:shadow-md"
              >
                Donate
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24 space-y-8">

          <NavLink onClick={() => setMobileMenuOpen(false)} to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink onClick={() => setMobileMenuOpen(false)} to="/programs" className={navLinkClass}>
            Programs
          </NavLink>

          <NavLink onClick={() => setMobileMenuOpen(false)} to="/blog" className={navLinkClass}>
            Our Story
          </NavLink>

          <NavLink onClick={() => setMobileMenuOpen(false)} to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <div className="mt-10">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/donate"
              className="block text-center bg-secondary text-white py-3 rounded-full font-medium"
            >
              Donate
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;