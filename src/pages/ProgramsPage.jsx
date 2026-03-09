import React from 'react';
import { BookOpen } from 'lucide-react';
import { Button } from '../components/Button';
import { CheckCircle } from 'lucide-react';
import { Droplets } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Heart } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { HeartPulse } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Link } from '../components/Link';
import { Menu } from 'lucide-react';
import { Text } from '../components/Text';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';

export const ProgramsPage = ({ className, children, variant, contentKey, ...props }) => {
  return (
    <div className="font-body antialiased">
      <>
        {/* Our Programs */}
        <section id="our_programs" className="pt-40 pb-20 bg-primaryDark text-white relative overflow-x-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6"> Our Programs </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
               We take a holistic approach to community development, focusing on the interconnected needs of water, health, and education. 
            </p>
          </div>
        </section>
        {/* Clean Water Initiative */}
        <section id="clean_water_initiative" className="py-24 overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {/* Program 1: Water */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><Droplets className="w-8 h-8 text-primary" /></div>
                <h2 className="text-4xl font-heading font-bold text-textDark mb-6"> Clean Water Initiative </h2>
                <p className="text-lg text-text mb-6 leading-relaxed">
                   Access to clean water is the foundation of a healthy community. We drill deep-water wells and install solar-powered pumps in arid regions, ensuring a reliable water source year-round. 
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Solar-powered filtration systems 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Community maintenance training 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Hygiene education workshops 
                  </li>
                </ul>
                <Link variant="inline" contentKey="cta_26" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primaryDark transition-colors" href="donate.html"> Support This Cause </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-accent rounded-3xl transform rotate-3 -z-10"></div>
                <img alt="Water" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-xl w-full" />
              </div>
            </div>
            {/* Program 2: Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl transform -rotate-3 -z-10"></div>
                <img alt="Education" src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-xl w-full" />
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6"><BookOpen className="w-8 h-8 text-secondary" /></div>
                <h2 className="text-4xl font-heading font-bold text-textDark mb-6"> Education for All </h2>
                <p className="text-lg text-text mb-6 leading-relaxed">
                   We build schools, train teachers, and provide scholarships to ensure that every child, regardless of gender or background, has the opportunity to learn and grow. 
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-primary" />
                     School construction & renovation 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-primary" />
                     Teacher training programs 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-primary" />
                     Girls' scholarship funds 
                  </li>
                </ul>
                <Link variant="inline" contentKey="cta_27" className="inline-block px-8 py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondaryHover transition-colors" href="donate.html"> Support This Cause </Link>
              </div>
            </div>
            {/* Program 3: Healthcare */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6"><HeartPulse className="w-8 h-8 text-red-600" /></div>
                <h2 className="text-4xl font-heading font-bold text-textDark mb-6"> Community Health </h2>
                <p className="text-lg text-text mb-6 leading-relaxed">
                   Our mobile clinics bring essential healthcare to remote areas. We focus on maternal health, vaccinations, and preventative care to reduce mortality rates. 
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Mobile medical units 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Maternal & child health 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Disease prevention campaigns 
                  </li>
                </ul>
                <Link variant="inline" contentKey="cta_28" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primaryDark transition-colors" href="donate.html"> Support This Cause </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3 -z-10"></div>
                <img alt="Healthcare" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-xl w-full" />
              </div>
            </div>
          </div>
        </section>
        {/* Impact Stats */}
        <section id="impact_stats" className="py-20 bg-primaryDark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-heading font-bold mb-2"> 150+ </div>
                <p className="text-teal-200"> Wells Built </p>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold mb-2"> 12k </div>
                <p className="text-teal-200"> Students Enrolled </p>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold mb-2"> 45 </div>
                <p className="text-teal-200"> Mobile Clinics </p>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold mb-2"> 50k+ </div>
                <p className="text-teal-200"> Lives Impacted </p>
              </div>
            </div>
          </div>
        </section>
    
      </>
    </div>
  );
};

