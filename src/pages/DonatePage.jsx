import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { Button } from '../components/Button';
import { Droplets } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Heart } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { HeartPulse } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Link } from '../components/Link';
import { Menu } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Text } from '../components/Text';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';

export const DonatePage = ({ className, children, variant, contentKey, ...props }) => {
  return (
    <div className="font-body antialiased">
      <>
        <header>
          <nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <div className="flex-shrink-0 flex items-center">
                  <Link className="flex items-center gap-2" href="index.html"><div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white"><HeartHandshake className="w-6 h-6" /></div>
                  <Text variant="bold" className="font-heading font-bold text-2xl text-primaryDark"> Hope 
                  <Text className="text-secondary"> Horizon </Text></Text></Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <Link className="text-text hover:text-primary transition-colors font-medium" href="about.html"> About Us </Link>
                  <Link className="text-text hover:text-primary transition-colors font-medium" href="programs.html"> Our Programs </Link>
                  <Link className="text-text hover:text-primary transition-colors font-medium" href="blog.html"> Stories </Link>
                  <Link className="text-text hover:text-primary transition-colors font-medium" href="contact.html"> Contact </Link>
                  <Link contentKey="cta_21" className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5" href="donate.html"> Donate Now </Link>
                </div>
                <div className="md:hidden flex items-center">
                  <Button variant="primary" className="text-text hover:text-primary focus:outline-none" id="mobile-menu-btn"><Menu className="w-8 h-8" /></Button>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full">
              <div className="px-4 pt-2 pb-6 space-y-2">
                <Link contentKey="cta_22" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="about.html"> About Us </Link>
                <Link contentKey="cta_23" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="programs.html"> Our Programs </Link>
                <Link contentKey="cta_24" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="blog.html"> Stories </Link>
                <Link contentKey="cta_25" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="contact.html"> Contact </Link>
                <Link contentKey="cta_26" className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg" href="donate.html"> Donate Now → </Link>
              </div>
            </div>
          </nav>
        </header>
        {/* Navigation */}
        <nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0 flex items-center">
                <Link className="flex items-center gap-2" href="index.html"><div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white"><HeartHandshake className="w-6 h-6" /></div>
                <Text variant="bold" className="font-heading font-bold text-2xl text-primaryDark"> Hope 
                <Text className="text-secondary"> Horizon </Text></Text></Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link className="text-text hover:text-primary transition-colors font-medium" href="about.html"> About Us </Link>
                <Link className="text-text hover:text-primary transition-colors font-medium" href="programs.html"> Our Programs </Link>
                <Link className="text-text hover:text-primary transition-colors font-medium" href="blog.html"> Stories </Link>
                <Link className="text-text hover:text-primary transition-colors font-medium" href="contact.html"> Contact </Link>
                <Link contentKey="cta_27" className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5" href="donate.html"> Donate Now </Link>
              </div>
              <div className="md:hidden flex items-center">
                <Button variant="primary" className="text-text hover:text-primary focus:outline-none" id="mobile-menu-btn"><Menu className="w-8 h-8" /></Button>
              </div>
            </div>
          </div>
          <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link contentKey="cta_28" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="about.html"> About Us </Link>
              <Link contentKey="cta_29" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="programs.html"> Our Programs </Link>
              <Link contentKey="cta_30" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="blog.html"> Stories </Link>
              <Link contentKey="cta_31" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="contact.html"> Contact </Link>
              <Link contentKey="cta_32" className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg" href="donate.html"> Donate Now → </Link>
            </div>
          </div>
        </nav>
        {/* Make A Difference Today */}
        <section id="make_a_difference_today" className="pt-32 pb-12 bg-primaryDark text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6"> Make a Difference Today </h1>
            <p className="text-xl text-teal-100">
               Your generosity fuels our mission. 100% of public donations go directly to funding our projects. 
            </p>
          </div>
        </section>
        {/* Your Impact */}
        <section id="your_impact" className="py-12 -mt-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Left: Impact Info */}
                <div className="md:col-span-2 bg-gray-50 p-8 border-r border-gray-100">
                  <h3 className="text-xl font-bold text-textDark mb-4"> Your Impact </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"><Droplets className="w-5 h-5 text-primary" /></div>
                      <div>
                        <p className="font-bold text-textDark"> $25 </p>
                        <p className="text-sm text-text"> Provides clean water for one person for a lifetime. </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0"><BookOpen className="w-5 h-5 text-secondary" /></div>
                      <div>
                        <p className="font-bold text-textDark"> $50 </p>
                        <p className="text-sm text-text"> Sends a child to school for a full semester. </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0"><HeartPulse className="w-5 h-5 text-yellow-700" /></div>
                      <div>
                        <p className="font-bold text-textDark"> $100 </p>
                        <p className="text-sm text-text"> Funds a mobile clinic visit for a village. </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <Text variant="bold" className="font-bold text-blue-800 text-sm"> Secure Donation </Text>
                    </div>
                    <p className="text-xs text-blue-600"> Your transaction is SSL encrypted and secure. </p>
                  </div>
                </div>
                {/* Right: Form */}
                <div className="md:col-span-3 p-8">
                  {/* Frequency Toggle */}
                  <div className="flex justify-center mb-8">
                    <div className="bg-gray-100 p-1 rounded-full inline-flex">
                      <Button variant="primary" contentKey="cta_33" className="px-6 py-2 rounded-full text-sm font-bold bg-white shadow-sm text-primaryDark transition-all"> Monthly </Button>
                      <Button className="px-6 py-2 rounded-full text-sm font-bold text-gray-500 hover:text-textDark transition-all"> One-Time </Button>
                    </div>
                  </div>
                  {/* Amount Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <Button variant="primary" className="py-4 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"> $25 </Button>
                    <button className="py-4 border-2 border-primary bg-primary text-white rounded-xl font-bold text-lg shadow-lg transition-all transform scale-105"> $50 </button>
                    <Button variant="primary" className="py-4 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"> $100 </Button>
                  </div>
                  {/* Custom Amount */}
                  <div className="relative mb-8">
                    <Text variant="bold" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold"> $ </Text>
                    <input placeholder="Other Amount" type="number" className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-0 font-bold text-textDark" />
                  </div>
                  {/* Payment Button */}
                  <button className="w-full py-4 bg-secondary hover:bg-secondaryHover text-white font-bold rounded-xl text-lg shadow-xl shadow-secondary/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                     Donate $50 Now 
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                     By donating, you agree to our Terms of Service and Privacy Policy. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Frequently Asked Questions */}
        <section id="frequently_asked_questions" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-center mb-12"> Frequently Asked Questions </h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <h3 className="text-lg font-bold text-textDark mb-2"> Is my donation tax-deductible? </h3>
                <p className="text-text">
                   Yes, HopeHorizon is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law. 
                </p>
              </div>
              <div className="border border-gray-200 rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <h3 className="text-lg font-bold text-textDark mb-2"> How much of my donation goes to the cause? </h3>
                <p className="text-text">
                   We are proud that 100% of public donations go directly to funding our programs. Our operating costs are covered by a group of private donors. 
                </p>
              </div>
              <div className="border border-gray-200 rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <h3 className="text-lg font-bold text-textDark mb-2"> Can I cancel my monthly donation? </h3>
                <p className="text-text">
                   Absolutely. You can pause, change, or cancel your monthly donation at any time through your donor portal or by contacting us. 
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <Link className="flex items-center gap-2 mb-6" href="index.html"><div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white"><HeartHandshake className="w-5 h-5" /></div>
                <Text variant="bold" className="font-heading font-bold text-2xl text-primaryDark"> Hope 
                <Text className="text-secondary"> Horizon </Text></Text></Link>
                <p className="text-text max-w-md mb-6">
                   Dedicated to empowering communities through sustainable development, education, and healthcare initiatives. 
                </p>
                <div className="flex space-x-4">
                  <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><Facebook className="w-6 h-6" /></Link>
                  <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><Twitter className="w-6 h-6" /></Link>
                  <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><Instagram className="w-6 h-6" /></Link>
                  <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><Youtube className="w-6 h-6" /></Link>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-textDark mb-6"> Quick Links </h4>
                <ul className="space-y-4">
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="about.html"> About Us </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="programs.html"> Our Programs </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="blog.html"> Impact Stories </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="contact.html"> Contact </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-textDark mb-6"> Get Involved </h4>
                <ul className="space-y-4">
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="donate.html"> Donate </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="#"> Volunteer </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="#"> Partner With Us </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="#"> Careers </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm"> © 2026 HopeHorizon. 501(c)(3) Non-Profit Organization. </p>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                 Made with 
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                 for the world 
              </p>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

