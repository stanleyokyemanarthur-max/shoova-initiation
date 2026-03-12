import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { Heart } from 'lucide-react';
import { Image } from '../components/Image';
import { Link } from '../components/Link';
import { MapPin } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Text } from '../components/Text';
import { Facebook, Twitter, Instagram, Youtube, Share2 } from "lucide-react";
import { motion } from "framer-motion"




export const IndexPage = ({ className, children, variant, contentKey, ...props }) => {
  const impactTabs = [
    {
      id: "environment",
      label: "Environment",
      eyebrow: "WHY RESTORATION?",
      title: "Because healthy land sustains life",
      image: "/img/envi.jpg",
      text: "Reclaiming land damaged by illegal mining restores soil health, protects water sources, and rebuilds ecosystems that communities depend on.",
    },
    {
      id: "youth",
      label: "Youth",
      eyebrow: "WHY YOUTH?",
      title: "Because opportunity changes destinies",
      image: "/img/youth.jpg",
      text: "When young people gain technical and environmental skills, they can build dignified livelihoods that replace destructive mining practices.",
    },
    {
      id: "communities",
      label: "Communities",
      eyebrow: "WHY COMMUNITIES?",
      title: "Because restoration begins at home",
      image: "/img/community.jpg",
      text: "Communities that lead restoration efforts protect their environment while creating sustainable opportunities for present and future generations.",
    },
    {
      id: "future",
      label: "Future",
      eyebrow: "WHY THE FUTURE?",
      title: "Because what we restore today shapes tomorrow",
      image: "/img/future.jpg",
      text: "Restoring landscapes today ensures that future generations inherit healthier ecosystems, stronger livelihoods, and renewed hope.",
    },
  ];

  const [activeImpact, setActiveImpact] = useState(impactTabs[0]);
  return (

    <div className="font-body antialiased">
      <>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen  w-full flex items-center justify-center text-center overflow-hidden"
        >
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              scale-110
              muted
              loop
              playsInline
              className="w-full h-full transition-transform duration-[8000ms] object-cover scale-105"
            >
              <source src="/img/planting.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.45)_75%,rgba(0,0,0,0.72)_100%)]"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl px-6 text-white">
            {/* <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white font-medium text-sm mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Over 50,000 lives impacted this year
            </Badge> */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              Restoring Lives.
              <br />
              <span className="text-secondary italic">Restoring Lands</span>
            </motion.h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Shoova Initiative is building a restoration movement in Ghana’s Eastern Region by equipping youth with technical skills, ethical leadership, and environmental stewardship to heal scarred lands and reclaim the future.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/donate"
                className="px-8 py-4 bg-secondary hover:bg-secondaryHover text-white font-bold rounded-full text-lg transition shadow-xl"
              >
                Join the Restoration
              </Link>

              <Link
                to="/programs"
                className="px-8 py-4 border border-white/70 hover:bg-white hover:text-black rounded-full font-semibold text-lg transition flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
  ↓
</div>
        </section>
        {/* Restoration Process */}
        <section id="restoration_process" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-14"
            >
              <p className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">
                How the Movement Works
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4">
                The Restoration Process
              </h2>
              <p className="text-text text-lg max-w-2xl mx-auto">
                Shoova Initiative is building a pathway from environmental destruction to
                community renewal through a three-step model: reclaim, train, and restore.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="bg-background rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src="/img/recliam.jpg"
                    alt="Land assessment and reclamation"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    Reclaim
                  </h3>
                  <p className="text-text">
                    We identify lands devastated by illegal mining, assess the damage, and
                    engage local communities in the first steps toward environmental healing.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                className="bg-background rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src="/img/train.jpg"
                    alt="Youth technical training"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    Train
                  </h3>
                  <p className="text-text">
                    We equip youth from affected communities with world-class technical,
                    environmental, and leadership skills that open dignified pathways beyond
                    galamsey.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="bg-background rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src="/img/restore.jpg"
                    alt="Community restoration and renewal"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    Restore
                  </h3>
                  <p className="text-text">
                    Our graduates apply their skills to rebuild livelihoods, reclaim damaged
                    land, and lead a future rooted in stewardship, innovation, and hope.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why This Movement Matters */}
        <section id="why_this_movement_matters" className="py-24 bg-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-14"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-secondary/80 mb-4">
                {activeImpact.eyebrow}
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-textDark max-w-4xl mx-auto leading-tight">
                Because restoring land restores lives
              </h2>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {impactTabs.map((tab) => {
                const isActive = activeImpact.id === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveImpact(tab)}
                    className={`px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border ${isActive
                      ? "bg-secondary text-white border-secondary shadow-md"
                      : "bg-white text-textDark border-gray-300 hover:bg-white/70"
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Main Visual Block */}
            <motion.div
              key={activeImpact.id}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden min-h-[620px] shadow-xl"
            >
              {/* Background image */}
              <img
                src={activeImpact.image}
                alt={activeImpact.label}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              {/* Floating story card */}
              <motion.div
                key={`${activeImpact.id}-card`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-md shadow-2xl"
              >
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-textDark mb-4 leading-snug">
                  {activeImpact.title}
                </h3>

                <p className="text-text text-base md:text-lg leading-relaxed mb-6">
                  {activeImpact.text}
                </p>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wide hover:gap-3 transition-all"
                >
                  Follow the Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* Impact Metrics */}
        <section id="impact_metrics" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Text className="text-secondary font-bold tracking-wider uppercase text-sm">
                Measuring Restoration
              </Text>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mt-2 mb-6">
                Impact You Can Measure
              </h2>
              <p className="text-xl text-text max-w-3xl mx-auto">
                Restoration is more than a vision — it is measurable change. Shoova
                Initiative tracks the healing of land, water, and livelihoods to ensure
                every effort creates lasting transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Metric 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/img/lands.jpg"
                    alt="Restored land and environmental recovery"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-primary">
                    LAND
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    Acres of Land Restored
                  </h3>
                  <p className="text-text mb-6">
                    Tracking the physical recovery of landscapes damaged by illegal
                    mining, from degraded soil to restored ecosystems capable of
                    supporting life again.
                  </p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/img/waters.jpg"
                    alt="River health and water quality monitoring"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-secondary">
                    WATER
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    River Quality Index
                  </h3>
                  <p className="text-text mb-6">
                    Monitoring improvements in water health, including the reduction of
                    mercury, silt, and other pollutants affecting rivers and nearby
                    communities.
                  </p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/img/repair.jpg"
                    alt="Youth training and dignified livelihoods"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-primary">
                    LIVELIHOODS
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    Dignified Livelihoods
                  </h3>
                  <p className="text-text mb-6">
                    Measuring how many young people transition from dangerous mining
                    work into skilled, sustainable, and dignified careers that rebuild
                    both lives and communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/programs"
                className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                Explore Our Impact
              </Link>
            </div>
          </div>
        </section>
        {/* Meet the People Behind the Restoration */}
        <section id="meet_the_team" className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Content */}
              <div>
                <p className="text-secondary font-bold tracking-wider uppercase text-sm mb-4">
                  Leadership & Trust
                </p>

                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                  Meet the People Behind the Restoration
                </h2>

                <p className="text-teal-100 text-lg mb-8 leading-relaxed max-w-xl">
                  Shoova Initiative is led by a coalition of project managers, data
                  scientists, engineers, and community leaders united by one mission:
                  to restore land, rebuild livelihoods, and equip the next generation
                  of technical leaders in Ghana’s Eastern Region.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      Minnesota-based leadership and governance
                    </Text>
                  </li>

                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      Ghana-rooted operations and partnerships
                    </Text>
                  </li>

                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      Financial stewardship and accountability
                    </Text>
                  </li>

                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      Technical, legal, and community expertise
                    </Text>
                  </li>
                </ul>

                <Link
                  to="/about"
                  className="inline-block mt-8 px-7 py-3 border border-white/40 rounded-full font-semibold hover:bg-white hover:text-primary transition"
                >
                  Meet the Full Team
                </Link>
              </div>

              {/* Right Portrait Grid */}
              <div className="grid grid-cols-2 gap-6">

                {/* Member 1 */}
                <div className="group relative transform translate-y-8">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/img/willie.jpg"
                      alt="William Agyekum"
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Expanding Social Rail */}
                    {/* Expanding Social Rail */}
                    <div className="absolute left-0 bottom-0 group/social">
                      <div className="bg-secondary w-12 h-12 group-hover:h-48 transition-all duration-500 overflow-hidden flex flex-col items-center">

                        {/* Main Share Icon */}
                        <div className="w-full h-12 flex items-center justify-center border-b border-white/20">
                          <Share2 className="w-4 h-4 text-white" />
                        </div>

                        {/* Hidden Icons */}
                        <div className="flex flex-col opacity-0 group-hover:opacity-100 transition duration-300 delay-200">

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Facebook className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Twitter className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Instagram className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Youtube className="w-4 h-4 text-white" />
                          </a>

                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-heading font-bold">William Agyekum</h3>
                    <p className="text-sm text-teal-100 mt-1">President &amp; Executive Director</p>
                    <p className="text-xs text-white/70 mt-1">USA</p>
                  </div>
                </div>

                {/* Member 2 */}
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/img/salome.jpg"
                      alt="Salome Agyekum"
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Expanding Social Rail */}
                    <div className="absolute left-0 bottom-0 group/social">
                      <div className="bg-secondary w-12 h-12 group-hover:h-48 transition-all duration-500 overflow-hidden flex flex-col items-center">

                        {/* Main Share Icon */}
                        <div className="w-full h-12 flex items-center justify-center border-b border-white/20">
                          <Share2 className="w-4 h-4 text-white" />
                        </div>

                        {/* Hidden Icons */}
                        <div className="flex flex-col opacity-0 group-hover:opacity-100 transition duration-300 delay-200">

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Facebook className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Twitter className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Instagram className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Youtube className="w-4 h-4 text-white" />
                          </a>

                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-heading font-bold">Salome Agyekum, CA</h3>
                    <p className="text-sm text-teal-100 mt-1">Treasurer</p>
                    <p className="text-xs text-white/70 mt-1">USA</p>
                  </div>
                </div>

                {/* Member 3 */}
                <div className="group relative transform translate-y-8">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/img/opon.jpg"
                      alt="Kwame Opon-Yeboah"
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Expanding Social Rail */}
                    <div className="absolute left-0 bottom-0 group/social">
                      <div className="bg-secondary w-12 h-12 group-hover:h-48 transition-all duration-500 overflow-hidden flex flex-col items-center">

                        {/* Main Share Icon */}
                        <div className="w-full h-12 flex items-center justify-center border-b border-white/20">
                          <Share2 className="w-4 h-4 text-white" />
                        </div>

                        {/* Hidden Icons */}
                        <div className="flex flex-col opacity-0 group-hover:opacity-100 transition duration-300 delay-200">

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Facebook className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Twitter className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Instagram className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Youtube className="w-4 h-4 text-white" />
                          </a>

                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-heading font-bold">Kwame Opon-Yeboah</h3>
                    <p className="text-sm text-teal-100 mt-1">Head of Ghana Operations</p>
                    <p className="text-xs text-white/70 mt-1">Ghana</p>
                  </div>
                </div>

                {/* Member 4 */}
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/img/julius.jpeg"
                      alt="Julius Botchchway"
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Expanding Social Rail */}
                    <div className="absolute left-0 bottom-0 group/social">
                      <div className="bg-secondary w-12 h-12 group-hover:h-48 transition-all duration-500 overflow-hidden flex flex-col items-center">

                        {/* Main Share Icon */}
                        <div className="w-full h-12 flex items-center justify-center border-b border-white/20">
                          <Share2 className="w-4 h-4 text-white" />
                        </div>

                        {/* Hidden Icons */}
                        <div className="flex flex-col opacity-0 group-hover:opacity-100 transition duration-300 delay-200">

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Facebook className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Twitter className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Instagram className="w-4 h-4 text-white" />
                          </a>

                          <a href="#" className="w-12 h-12 flex items-center justify-center hover:bg-black/20">
                            <Youtube className="w-4 h-4 text-white" />
                          </a>

                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-heading font-bold">Julius Botchchway</h3>
                    <p className="text-sm text-teal-100 mt-1">Director of Ghana Operations</p>
                    <p className="text-xs text-white/70 mt-1">Ghana</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* From Donation to Restoration */}
        {/* <section id="from_donation_to_restoration" className="py-24 bg-white cursor-default">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Text className="text-secondary font-bold tracking-wider uppercase text-sm">
                How Support Creates Change
              </Text>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mt-2 mb-6">
                From Donation to Restoration
              </h2>
              <p className="text-xl text-text max-w-3xl mx-auto">
                Every contribution to Shoova Initiative helps transform damaged land,
                equip young people with skills, and build a future rooted in restoration.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-white">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-textDark mb-2">Give</h3>
                  <p className="text-text text-sm">
                    Your support fuels the restoration movement and helps invest in the
                    next generation of technical leaders.
                  </p>
                </div>

                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-textDark mb-2">Equip</h3>
                  <p className="text-text text-sm">
                    We provide students with tools, training, and hands-on instruction
                    through the Shoova Restoration Campus.
                  </p>
                </div>

                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-textDark mb-2">Restore</h3>
                  <p className="text-text text-sm">
                    Graduates apply their skills to reclaim land, protect water, and
                    create sustainable alternatives to galamsey.
                  </p>
                </div>

                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-textDark mb-2">Multiply</h3>
                  <p className="text-text text-sm">
                    Restored land, dignified livelihoods, and stronger communities
                    create long-term impact for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Ready to Restore the Land */}
        <section id="ready_to_restore" className="py-24 bg-[#f7f3ea]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Heading */}
            <div className="text-center mb-16">
              <p className="text-secondary font-bold tracking-wider uppercase text-sm mb-4">
                Restoration Tiers
              </p>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-6">
                Choose Your Impact
              </h2>

              <p className="text-xl text-text max-w-2xl mx-auto">
                Every contribution fuels restoration — from soil testing to building the Shoova Restoration Campus.
              </p>
            </div>


            <Swiper
              modules={[Navigation]}
              navigation
              grabCursor
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
              }}
            >

              {/* Root Seed */}
              <SwiperSlide>
                <Link
                  to="/donate"
                  className="group relative h-[420px] rounded-xl overflow-hidden block"
                >

                  <img
                    src="/img/restore.jpg"
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition duration-500" />

                  {/* Default Title */}
                  <div className="absolute bottom-6 left-6 text-white z-10 group-hover:opacity-0 transition">
                    <h3 className="text-xl font-heading font-bold">
                      The Root Seed
                    </h3>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 text-white opacity-0 group-hover:opacity-100 transition duration-500">

                    <p className="text-secondary font-bold text-sm mb-3">$25</p>

                    <h3 className="text-2xl font-heading font-bold mb-4">
                      The Root Seed
                    </h3>

                    <p className="text-white/90 text-sm mb-6 max-w-xs">
                      Funds one day of land reclamation soil-testing for a student field team.
                    </p>

                    <button className="bg-secondary hover:bg-secondaryHover px-6 py-3 rounded-full font-semibold">
                      Join the Restoration
                    </button>

                  </div>

                </Link>
              </SwiperSlide>


              {/* Tool Kit */}
              <SwiperSlide>
                <Link
                  to="/donate"
                  className="group relative h-[420px] rounded-xl overflow-hidden block"
                >

                  <img
                    src="/img/train.jpg"
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition duration-500" />

                  <div className="absolute bottom-6 left-6 text-white z-10 group-hover:opacity-0 transition">
                    <h3 className="text-xl font-heading font-bold">
                      The Tool Kit
                    </h3>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 text-white opacity-0 group-hover:opacity-100 transition duration-500">

                    <p className="text-secondary font-bold text-sm mb-3">$100</p>

                    <h3 className="text-2xl font-heading font-bold mb-4">
                      The Tool Kit
                    </h3>

                    <p className="text-white/90 text-sm mb-6 max-w-xs">
                      Provides a set of high-quality tools for one student.
                    </p>

                    <button className="bg-secondary hover:bg-secondaryHover px-6 py-3 rounded-full font-semibold">
                      Sponsor a Future Architect
                    </button>

                  </div>

                </Link>
              </SwiperSlide>


              {/* Scholar Path */}
              <SwiperSlide>
                <Link
                  to="/donate"
                  className="group relative h-[420px] rounded-xl overflow-hidden block"
                >

                  <img
                    src="/img/youth.jpg"
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition duration-500" />

                  <div className="absolute bottom-6 left-6 text-white z-10 group-hover:opacity-0 transition">
                    <h3 className="text-xl font-heading font-bold">
                      The Scholar's Path
                    </h3>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 text-white opacity-0 group-hover:opacity-100 transition duration-500">

                    <p className="text-secondary font-bold text-sm mb-3">$500</p>

                    <h3 className="text-2xl font-heading font-bold mb-4">
                      The Scholar's Path
                    </h3>

                    <p className="text-white/90 text-sm mb-6 max-w-xs">
                      Covers a full semester of training for a youth transitioning out of galamsey.
                    </p>

                    <button className="bg-secondary hover:bg-secondaryHover px-6 py-3 rounded-full font-semibold">
                      Sponsor a Future Architect
                    </button>

                  </div>

                </Link>
              </SwiperSlide>


              {/* Campus Catalyst */}
              <SwiperSlide>
                <Link
                  to="/donate"
                  className="group relative h-[420px] rounded-xl overflow-hidden block"
                >

                  <img
                    src="/img/community.jpg"
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition duration-500" />

                  <div className="absolute bottom-6 left-6 text-white z-10 group-hover:opacity-0 transition">
                    <h3 className="text-xl font-heading font-bold">
                      Campus Catalyst
                    </h3>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 text-white opacity-0 group-hover:opacity-100 transition duration-500">

                    <p className="text-secondary font-bold text-sm mb-3">$5000+</p>

                    <h3 className="text-2xl font-heading font-bold mb-4">
                      Campus Catalyst
                    </h3>

                    <p className="text-white/90 text-sm mb-6 max-w-xs">
                      Directly funds the construction of dormitories or staff housing at the Shoova Restoration Campus.
                    </p>

                    <button className="bg-secondary hover:bg-secondaryHover px-6 py-3 rounded-full font-semibold">
                      Fund a Hectare of Hope
                    </button>

                  </div>

                </Link>
              </SwiperSlide>

            </Swiper>

          </div>
        </section>
        {/* Final CTA */}
        <section id="join_the_restoration" className="py-24 relative overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 bg-primary">
            <Image
              variant="cover"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              src="/img/community.jpg"
              alt="Shoova restoration movement"
            />
          </div>

          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">

            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Help Turn Scars Back Into Strength
            </h2>

            <p className="text-xl text-teal-100 mb-10">
              Restore land. Equip youth. Rebuild communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                className="px-10 py-5 bg-secondary hover:bg-secondaryHover text-white font-bold text-xl rounded-full transition-all shadow-xl transform hover:scale-105"
                to="/donate"
              >
                Join the Restoration
              </Link>

              <Link
                className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold text-xl rounded-full transition-all"
                to="/contact"
              >
                Partner With Us
              </Link>

            </div>

          </div>
        </section>
      </>
    </div>
  );
};

