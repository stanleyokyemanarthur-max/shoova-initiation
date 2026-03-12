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
        {/* About Hero */}
        <section
          className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center text-center"
          style={{ backgroundImage: "url('/img/dryland.jpg')" }}
        >

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-4xl px-6 text-white">

            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              From Scars to Strength
            </h1>

            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Illegal mining has scarred the land of Ghana’s Eastern Region.
              Shoova Initiative is equipping young people with the tools
              to restore the soil, rebuild communities, and reclaim the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                to="/donate"
                className="bg-secondary hover:bg-secondaryHover text-white px-8 py-4 rounded-full font-semibold"
              >
                Join the Restoration
              </Link>

              <Link
                to="/programs"
                className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
              >
                See Our Solution
              </Link>

            </div>

          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
            ↓
          </div>

        </section>

        <section className="py-28 bg-accent">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT STORY */}
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                The Shoova Solution
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Through our 8-acre Restoration Campus, we equip youth with the
                technical skills needed to heal damaged land and build sustainable
                livelihoods.
              </p>

              <ul className="space-y-3 text-lg font-medium text-gray-800">
                <li>Land reclamation</li>
                <li>Engineering and fabrication</li>
                <li>Solar and sustainable technology</li>
                <li>Ethical leadership training</li>
              </ul>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondaryHover text-white font-semibold rounded-full transition shadow-lg"
                >
                  Join the Restoration
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition"
                >
                  Partner With Us
                </Link>

              </div>
            </div>


            {/* RIGHT VISUAL STORY */}
            <div className="relative w-full max-w-lg mx-auto h-[420px]">

              {/* Crisis Image */}
              <div className="absolute top-0 left-0 w-[85%] z-10">
                <img
                  src="/img/galamsey.jpg"
                  alt="Illegal mining destruction"
                  className="rounded-xl shadow-2xl rotate-[-3deg] object-cover w-full h-[260px]"
                />

                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] px-3 py-1 rounded-full tracking-wider font-semibold">
                  CRISIS
                </span>
              </div>

              {/* Restoration Image */}
              <div className="absolute bottom-0 right-0 w-[75%] z-20">
                <img
                  src="/img/tech.jpg"
                  alt="Vocational training and restoration"
                  className="rounded-xl shadow-2xl rotate-[2deg] object-cover w-full h-[240px]"
                />

                <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] px-3 py-1 rounded-full tracking-wider font-semibold">
                  RESTORATION
                </span>
              </div>

            </div>

          </div>
        </section>

        <section id="mission_vision" className="pt-40 pb-24 bg-white">

          <div className="max-w-6xl mx-auto px-6 text-center">

            {/* Mission */}
            <div className="mb-20">

              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-textDark">
                Our Mission
              </h2>

              <p className="text-xl md:text-2xl italic text-primary max-w-4xl mx-auto leading-relaxed">
                “To ignite a restoration movement in Ghana’s Eastern Region by empowering
                the next generation of technical leaders with the world-class skills,
                ethical grounding, and environmental stewardship necessary to heal our
                lands and reclaim our future.”
              </p>

            </div>


            {/* Vision */}

            <div>

              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-textDark">
                Our Vision
              </h2>

              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Restoration is not a dream—it is a trade. We envision a Ghana where
                communities once scarred by illegal mining become centers of
                environmental renewal, technical excellence, and dignified opportunity
                for the next generation.
              </p>

            </div>

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

