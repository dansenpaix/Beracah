import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Instagram, MapPin, Shield, Clock, ChevronRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';

export default function Footer({ onOpenQuote }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#6C1A32] text-white pt-16 pb-8 border-t-4 border-[#5B9D3C] relative overflow-hidden">
      {/* Decorative subtle background circle */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-lg border border-[#5B9D3C]">
                <img src="/assets/beracah_primary_logo.png" alt="Beracah Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl font-sans tracking-tight text-white">BERACAH</h3>
                <p className="text-[10px] uppercase font-bold text-amber-300 tracking-widest">Marble & Granite</p>
              </div>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed font-body">
              "Timeless Craftsmanship in Every Cut — Premium Marble & Granite Solutions." Custom tombstones, luxury kitchen countertops, sanctuary podiums & architectural stone.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://wa.me/2347085514253"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-[#5B9D3C] hover:bg-[#48802e] text-white p-2.5 rounded-lg transition-transform transform hover:scale-110 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/beracah_marble_and_granite?igsi=c3oxemY1YXNqa2Nh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-pink-600 hover:bg-pink-700 text-white p-2.5 rounded-lg transition-transform transform hover:scale-110 shadow-md"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+2347085514253"
                aria-label="Call Us"
                className="bg-amber-600 hover:bg-amber-700 text-white p-2.5 rounded-lg transition-transform transform hover:scale-110 shadow-md"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation & Catalog */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-sans text-amber-300 border-b border-white/10 pb-2">
              Catalog Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PRODUCT_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="text-slate-200 hover:text-[#5B9D3C] transition-colors flex items-center space-x-2 text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#5B9D3C]" />
                    <span>{cat.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Factory Line */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-sans text-amber-300 border-b border-white/10 pb-2">
              Direct Contact Lines
            </h4>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#5B9D3C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-amber-200/80 font-bold uppercase">Primary Hotline / WhatsApp</p>
                  <a href="tel:+2347085514253" className="font-semibold hover:text-amber-300 transition-colors">
                    +234 708 551 4253
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#5B9D3C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-amber-200/80 font-bold uppercase">Alternative Customer Line</p>
                  <a href="tel:+2349071210896" className="font-semibold hover:text-amber-300 transition-colors">
                    +234 907 121 0896
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Instagram className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-amber-200/80 font-bold uppercase">Instagram Official</p>
                  <a
                    href="https://www.instagram.com/beracah_marble_and_granite?igsi=c3oxemY1YXNqa2Nh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-xs text-slate-200"
                  >
                    @beracah_marble_and_granite
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#5B9D3C] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-slate-300">
                  State-of-the-Art Stone Fabrication & Polishing Facility. Nationwide Delivery & Installation.
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Action & Guarantee */}
          <div className="space-y-4 bg-white/5 p-5 rounded-2xl border border-white/10">
            <h4 className="text-base font-bold font-sans text-white flex items-center space-x-2">
              <Shield className="w-5 h-5 text-[#5B9D3C]" />
              <span>Craftsmanship Guarantee</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every marble and granite piece is diamond-polished, edge-profiled, and factory-sealed for weather-resistant durability.
            </p>

            <button
              onClick={onOpenQuote}
              className="w-full bg-[#5B9D3C] hover:bg-[#48802e] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition duration-300"
            >
              Get Instant Estimate
            </button>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300">
          <p>© {currentYear} Beracah Marble & Granite Ltd. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-slate-400">
            Designed for Architectural Excellence & Bespoke Stonework.
          </p>
        </div>
      </div>
    </footer>
  );
}
