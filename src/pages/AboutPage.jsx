import React from 'react';
import { Book } from 'lucide-react';
import { Button } from '../components/Button';
import { Droplet } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Heart } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { Image } from '../components/Image';
import { Instagram } from 'lucide-react';
import { Link } from '../components/Link';
import { Menu } from 'lucide-react';
import { Text } from '../components/Text';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';

export const AboutPage = ({ className, children, variant, contentKey, ...props }) => {
  return (
    <div className="font-body antialiased">
      <>
        
     
        {/* Our Mission */}
        <section id="our_mission" className="pt-40 pb-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-textDark"> Our Mission </h1>
            <p className="text-2xl md:text-3xl font-heading italic text-primary max-w-4xl mx-auto leading-relaxed">
               "To empower vulnerable communities with the resources, knowledge, and support they need to build a sustainable and dignified future." 
            </p>
          </div>
        </section>
        {/* How It Started */}
        <section id="how_it_started" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute bg-primary/10 rounded-3xl transform -rotate-2 -z-10"></div>
                <img alt="Founders" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-xl w-full" />
              </div>
              <div>
                <h2 className="text-4xl font-heading font-bold text-textDark mb-6"> How It Started </h2>
                <p className="text-lg text-text mb-6 leading-relaxed">
                   HopeHorizon began in 2010 with a simple observation: a single well in a remote village didn't just provide water; it transformed the entire community. Girls went to school instead of walking miles for water. Disease rates dropped. Small businesses flourished. 
                </p>
                <p className="text-lg text-text mb-6 leading-relaxed">
                   Founded by Sarah Jenkins and Dr. David Okonjo, we started as a small team of volunteers. Today, we are a global movement, but our core belief remains the same: sustainable change starts from within the community. 
                </p>
                <div className="flex gap-8 mt-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1"> 15+ </div>
                    <p className="text-sm text-gray-500"> Years of Service </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1"> 30+ </div>
                    <p className="text-sm text-gray-500"> Countries Reached </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Meet Our Leadership */}
        <section id="meet_our_leadership" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-textDark mb-6"> Meet Our Leadership </h2>
              <p className="text-xl text-text max-w-2xl mx-auto"> The passionate individuals driving our mission forward. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Member 1 */}
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary transition-colors">
                  <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Sarah Jenkins" />
                </div>
                <h3 className="text-xl font-bold text-textDark"> Sarah Jenkins </h3>
                <p className="text-primary font-medium mb-4"> Co-Founder & CEO </p>
                <p className="text-text text-sm px-4">
                   Former UN development officer with 20 years of field experience. 
                </p>
              </div>
              {/* Member 2 */}
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary transition-colors">
                  <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" alt="Dr. David Okonjo" />
                </div>
                <h3 className="text-xl font-bold text-textDark"> Dr. David Okonjo </h3>
                <p className="text-primary font-medium mb-4"> Co-Founder & Director of Health </p>
                <p className="text-text text-sm px-4">
                   Public health specialist focused on preventative care in rural areas. 
                </p>
              </div>
              {/* Member 3 */}
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary transition-colors">
                  <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" alt="Elena Rodriguez" />
                </div>
                <h3 className="text-xl font-bold text-textDark"> Elena Rodriguez </h3>
                <p className="text-primary font-medium mb-4"> Head of Operations </p>
                <p className="text-text text-sm px-4">
                   Expert in logistics and supply chain management for humanitarian aid. 
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Trusted By Global Partners */}
        <section id="trusted_by_global_partners" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-gray-400 mb-12"> Trusted by Global Partners </h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for logos */}
              <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
                <Globe className="w-8 h-8" />
                 GlobalAid 
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
                <Droplet className="w-8 h-8" />
                 WaterWorks 
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
                <Book className="w-8 h-8" />
                 EduFuture 
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
                <Heart className="w-8 h-8" />
                 HealthFirst 
              </div>
            </div>
          </div>
        </section>
      
      </>
    </div>
  );
};

