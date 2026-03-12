import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#123a5a] to-[#0b2a45] text-white pt-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">

          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/img/shoova_logo.png"
                alt="Shoova Initiative"
                className="h-16"
              />
              <h3 className="text-2xl font-bold">Shoova Initiative</h3>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">
              Shoova Initiative is building a restoration movement in Ghana’s
              Eastern Region by restoring land damaged by illegal mining,
              equipping youth with world-class skills, and rebuilding
              communities with dignity.
            </p>

            <p className="text-white/70 mb-6">
              From scars to strength — restoring the land and restoring hope.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a className="bg-white/10 p-3 rounded hover:bg-secondary transition">
                <Facebook size={18} />
              </a>

              <a className="bg-white/10 p-3 rounded hover:bg-secondary transition">
                <Twitter size={18} />
              </a>

              <a className="bg-white/10 p-3 rounded hover:bg-secondary transition">
                <Instagram size={18} />
              </a>

              <a className="bg-white/10 p-3 rounded hover:bg-secondary transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>


          {/* Our Offices (Map) */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Offices</h4>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Shoova Map"
                src="https://maps.google.com/maps?q=Ghana&t=&z=5&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[220px] border-0"
                loading="lazy"
              />
            </div>
          </div>


          {/* Recent News */}
          <div>
            <h4 className="text-xl font-bold mb-6">Restoration Updates</h4>

            <div className="space-y-6">

              <div className="flex gap-4">
                <img
                  src="/img/recliam.jpg"
                  className="w-16 h-16 object-cover rounded"
                />

                <div>
                  <p className="font-semibold text-sm">
                    Reclaiming land damaged by illegal mining
                  </p>

                  <div className="flex items-center gap-2 text-xs text-white/60 mt-1">
                    <Calendar size={12}/>
                    March 2026
                  </div>
                </div>
              </div>


              <div className="flex gap-4">
                <img
                  src="/img/train.jpg"
                  className="w-16 h-16 object-cover rounded"
                />

                <div>
                  <p className="font-semibold text-sm">
                    Training youth for restoration engineering
                  </p>

                  <div className="flex items-center gap-2 text-xs text-white/60 mt-1">
                    <Calendar size={12}/>
                    February 2026
                  </div>
                </div>
              </div>


              <div className="flex gap-4">
                <img
                  src="/img/restore.jpg"
                  className="w-16 h-16 object-cover rounded"
                />

                <div>
                  <p className="font-semibold text-sm">
                    Healing Ghana’s rivers and soil
                  </p>

                  <div className="flex items-center gap-2 text-xs text-white/60 mt-1">
                    <Calendar size={12}/>
                    January 2026
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Bottom Footer */}
      <div className="bg-black/30 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">

          <p>
            © {new Date().getFullYear()} Shoova Initiative. All Rights Reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Healing the land, one student at a time.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;