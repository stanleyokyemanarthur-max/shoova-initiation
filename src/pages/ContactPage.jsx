import React from 'react';
import { Button } from '../components/Button';
import { ChevronDown } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Heart } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { Input } from '../components/Input';
import { Instagram } from 'lucide-react';
import { Link } from '../components/Link';
import { Mail } from 'lucide-react';
import { Map } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Text } from '../components/Text';
import { Twitter } from 'lucide-react';
import { Users } from 'lucide-react';
import { Youtube } from 'lucide-react';

export const ContactPage = ({ className, children, variant, contentKey, ...props }) => {
  return (
    <div className="font-body antialiased">
      <>
        {/* Get In Touch */}
        <section id="get_in_touch" className="pt-32 pb-12 bg-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4"> Get in Touch </h1>
            <p className="text-xl text-text max-w-2xl mx-auto">
               Have questions about our programs or want to get involved? We're here to help. 
            </p>
          </div>
        </section>
        {/* Visit Us */}
        <section id="visit_us" className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info & Map */}
              <div className="space-y-12">
                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4"><MapPin className="w-6 h-6" /></div>
                    <h3 className="font-bold text-textDark mb-2"> Visit Us </h3>
                    <p className="text-text text-sm">
                       123 Hope Avenue, Suite 400 
                      <br />
                       New York, NY 10012 
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4"><Mail className="w-6 h-6" /></div>
                    <h3 className="font-bold text-textDark mb-2"> Email Us </h3>
                    <p className="text-text text-sm">
                       hello@hopehorizon.org 
                      <br />
                       partners@hopehorizon.org 
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-yellow-600 mb-4"><Phone className="w-6 h-6" /></div>
                    <h3 className="font-bold text-textDark mb-2"> Call Us </h3>
                    <p className="text-text text-sm">
                       +1 (555) 123-4567 
                      <br />
                       Mon-Fri, 9am - 5pm EST 
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4"><Users className="w-6 h-6" /></div>
                    <h3 className="font-bold text-textDark mb-2"> Volunteer </h3>
                    <p className="text-text text-sm">
                       Join our team 
                      <br />
                       volunteer@hopehorizon.org 
                    </p>
                  </div>
                </div>
                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-2xl h-64 w-full flex items-center justify-center text-gray-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale"></div>
                  <div className="relative z-10 bg-white/80 backdrop-blur px-6 py-3 rounded-full font-bold shadow-lg">
                    <Map className="inline-block w-5 h-5 mr-2 align-text-bottom" />
                     View on Google Maps 
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-heading font-bold text-textDark mb-6"> Send a Message </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-textDark mb-2"> First Name </label>
                      <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-textDark mb-2"> Last Name </label>
                      <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-textDark mb-2"> Email Address </label>
                    <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="email" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-textDark mb-2"> Subject </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                      <option> General Inquiry </option>
                      <option> Donation Question </option>
                      <option> Volunteering </option>
                      <option> Partnership </option>
                      <option> Media/Press </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-textDark mb-2"> Message </label>
                    <textarea placeholder="How can we help you?" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"></textarea>
                  </div>
                  <button type="button" className="w-full bg-primary hover:bg-primaryDark text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary/30"> Send Message </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Frequently Asked Questions */}
        <section id="frequently_asked_questions" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-textDark text-center mb-12"> Frequently Asked Questions </h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg text-textDark group-hover:text-primary transition-colors"> Is my donation tax-deductible? </h3>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-text mt-4 hidden">
                   Yes, HopeHorizon is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law. 
                </p>
              </div>
              {/* FAQ 2 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg text-textDark group-hover:text-primary transition-colors"> How much of my donation goes to the cause? </h3>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-text mt-4 hidden">
                   We are proud that 92% of every dollar donated goes directly to our programs in the field. The remaining 8% covers essential administrative and fundraising costs. 
                </p>
              </div>
              {/* FAQ 3 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg text-textDark group-hover:text-primary transition-colors"> Can I volunteer abroad? </h3>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-text mt-4 hidden">
                   Yes! We have volunteer programs in 12 countries. Please visit our Volunteer page or contact us for current opportunities and requirements. 
                </p>
              </div>
            </div>
          </div>
        </section>
      
      </>
    </div>
  );
};

