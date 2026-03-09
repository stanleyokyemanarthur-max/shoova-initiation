import React from "react";
import { HeartHandshake, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Logo + Description */}
          <div className="md:col-span-2">
            <div className="relative h-14 w-80 mb-6">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/img/shoova_logo.png"
                  alt="Shoova Initiative"
                  className="absolute -top-10 left-0 w-80 h-auto object-contain cursor-pointer "
                />
              </Link>
            </div>

            <p className="text-text max-w-md mt-20 mb-6">
              Dedicated to empowering communities through sustainable development,
              education, and healthcare initiatives.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                <Facebook className="w-6 h-6" />
              </a>

              <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                <Twitter className="w-6 h-6" />
              </a>

              <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                <Instagram className="w-6 h-6" />
              </a>

              <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-textDark mb-6">Quick Links</h4>

            <ul className="space-y-4">
              <li>
                <Link className="text-text hover:text-primary transition-colors" to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link className="text-text hover:text-primary transition-colors" to="/programs">
                  Our Programs
                </Link>
              </li>

              <li>
                <Link className="text-text hover:text-primary transition-colors" to="/blog">
                  Impact Stories
                </Link>
              </li>

              <li>
                <Link className="text-text hover:text-primary transition-colors" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-textDark mb-6">Get Involved</h4>

            <ul className="space-y-4">
              <li>
                <Link className="text-text hover:text-primary transition-colors" to="/donate">
                  Donate
                </Link>
              </li>

              <li>
                <a className="text-text hover:text-primary transition-colors" href="#">
                  Volunteer
                </a>
              </li>

              <li>
                <a className="text-text hover:text-primary transition-colors" href="#">
                  Partner With Us
                </a>
              </li>

              <li>
                <a className="text-text hover:text-primary transition-colors" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HopeHorizon. Non-Profit Organization.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            for the world
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;