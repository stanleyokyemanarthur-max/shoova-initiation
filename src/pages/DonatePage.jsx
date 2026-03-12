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
     
        {/* Make A Difference Today */}
        <section id="make_a_difference_today" className="pt-32 pb-12 bg-primary text-white text-center">
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
                        <p className="text-sm text-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0"><BookOpen className="w-5 h-5 text-secondary" /></div>
                      <div>
                        <p className="font-bold text-textDark"> $100 </p>
                        <p className="text-sm text-text"> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0"><HeartPulse className="w-5 h-5 text-yellow-700" /></div>
                      <div>
                        <p className="font-bold text-textDark"> $500 </p>
                        <p className="text-sm text-text"> Lorem ipsum dolor sit amet consectetur. </p>
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
                    <button className="py-4 border-2 border-primary bg-primary text-white rounded-xl font-bold text-lg shadow-lg transition-all transform scale-105"> $100 </button>
                    <Button variant="primary" className="py-4 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"> $500 </Button>
                  </div>
                  {/* Custom Amount */}
                  <div className="relative mb-8">
                    <Text variant="bold" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold"> $ </Text>
                    <input placeholder="Other Amount" type="number" className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-0 font-bold text-textDark" />
                  </div>
                  {/* Payment Button */}
                  <button className="w-full py-4 bg-secondary hover:bg-secondaryHover text-white font-bold rounded-xl text-lg shadow-xl shadow-secondary/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                     Donate $500 Now 
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
        
      </>
    </div>
  );
};

