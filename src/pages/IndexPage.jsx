import React , { useState }from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { Facebook } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Image } from '../components/Image';
import { Instagram } from 'lucide-react';
import { Link } from '../components/Link';
import { MapPin } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Text } from '../components/Text';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';
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
          className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
        >
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-105"
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
            <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white font-medium text-sm mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Over 50,000 lives impacted this year
            </Badge>

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
                Make a Donation
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

        {/* Communities We Serve */}
        <section id="communities_we_serve" className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6"> Communities We Serve </h2>
                <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                  We work hand-in-hand with local leaders to identify the most vulnerable populations. Our approach is community-led and sustainable.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-accent" /></div>
                    <Text className="text-xl font-medium"> Rural Villages in Sub-Saharan Africa </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-accent" /></div>
                    <Text className="text-xl font-medium"> Urban Slums in Southeast Asia </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-accent" /></div>
                    <Text className="text-xl font-medium"> Indigenous Communities in South America </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-accent" /></div>
                    <Text className="text-xl font-medium"> Refugee Settlements Worldwide </Text>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img alt="Community 1" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop" className="rounded-2xl shadow-lg transform translate-y-8" />
                <img alt="Community 2" src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop" className="rounded-2xl shadow-lg" />
                <img alt="Community 3" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=600&auto=format&fit=crop" className="rounded-2xl shadow-lg transform translate-y-8" />
                <img alt="Community 4" src="https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* Our Path To Impact */}
        <section id="our_path_to_impact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Text variant="bold" className="text-secondary font-bold tracking-wider uppercase text-sm"> How We Work </Text>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mt-2 mb-6"> Our Path to Impact </h2>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-white"> 1 </div>
                  <h3 className="text-xl font-bold text-textDark mb-2"> Listen </h3>
                  <p className="text-text text-sm">
                    We start by listening to the community's needs and aspirations.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg"> 2 </div>
                  <h3 className="text-xl font-bold text-textDark mb-2"> Plan </h3>
                  <p className="text-text text-sm">
                    We co-create sustainable solutions with local stakeholders.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg"> 3 </div>
                  <h3 className="text-xl font-bold text-textDark mb-2"> Act </h3>
                  <p className="text-text text-sm"> We implement projects with transparency and efficiency. </p>
                </div>
                {/* Step 4 */}
                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg"> 4 </div>
                  <h3 className="text-xl font-bold text-textDark mb-2"> Empower </h3>
                  <p className="text-text text-sm">
                    We train locals to maintain projects, ensuring long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Your Gift Changes Lives */}
        <section id="your_gift_changes_lives" className="py-24 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-6"> Your Gift Changes Lives </h2>
              <p className="text-xl text-text max-w-2xl mx-auto">
                Choose a monthly donation amount to make a sustained impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tier 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-textDark mb-2"> Friend </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  $25
                  <Text className="text-lg text-gray-400 font-normal"> /mo </Text>
                </div>
                <p className="text-text mb-8"> Provides school supplies for 5 children every month. </p>
                <Link contentKey="cta_53" className="block w-full py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors" href="donate.html"> Select </Link>
              </div>
              {/* Tier 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-secondary text-center transform md:-translate-y-4 relative">
                <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold"> MOST POPULAR </Badge>
                <h3 className="text-2xl font-bold text-textDark mb-2"> Guardian </h3>
                <div className="text-4xl font-bold text-secondary mb-4">
                  $50
                  <Text className="text-lg text-gray-400 font-normal"> /mo </Text>
                </div>
                <p className="text-text mb-8"> Provides clean water for a family of 4 for a year. </p>
                <Link contentKey="cta_54" className="block w-full py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondaryHover transition-colors shadow-lg shadow-secondary/20" href="donate.html"> Select </Link>
              </div>
              {/* Tier 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-textDark mb-2"> Champion </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  $100
                  <Text className="text-lg text-gray-400 font-normal"> /mo </Text>
                </div>
                <p className="text-text mb-8"> Funds a mobile clinic visit for an entire village. </p>
                <Link contentKey="cta_55" className="block w-full py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors" href="donate.html"> Select </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Be The Change You Wish To See */}
        <section id="be_the_change_you_wish_to_see" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary">
            <Image variant="cover" className="w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2000&auto=format&fit=crop" alt="Background" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8"> Be the Change You Wish to See </h2>
            <p className="text-xl text-teal-100 mb-12 max-w-2xl mx-auto">
              Every second counts. Your contribution today can save a life tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link contentKey="cta_56" className="px-10 py-5 bg-secondary hover:bg-secondaryHover text-white font-bold text-xl rounded-full transition-all shadow-xl transform hover:scale-105" href="donate.html"> Donate Now </Link>
              <Link contentKey="cta_57" className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold text-xl rounded-full transition-all" href="contact.html"> Volunteer With Us </Link>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

