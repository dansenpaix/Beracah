import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Ruler, 
  Sparkles, 
  Truck, 
  CheckCircle2, 
  Phone, 
  Star,
  Award,
  Layers,
  Hammer
} from 'lucide-react';
import { TRUST_POINTS, TESTIMONIALS } from '../data/products';

export default function Home({ onOpenQuote }) {
  const whatsappUrl = "https://wa.me/2347085514253?text=Hello%20Beracah%20Marble%20%26%20Granite%2C%20I%20am%20interested%20in%20discussing%20a%20custom%20stone%20project.";

  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#5B9D3C]" />,
    Ruler: <Ruler className="w-8 h-8 text-[#5B9D3C]" />,
    Sparkles: <Sparkles className="w-8 h-8 text-[#5B9D3C]" />,
    Truck: <Truck className="w-8 h-8 text-[#5B9D3C]" />,
  };

  const featuredCategories = [
    {
      title: 'Tombstones & Bespoke Memorials',
      subtitle: 'Dignified, weather-proof ledger slabs and headstones carved with precision.',
      image: '/assets/tombstone.jpg',
      categoryId: 'tombs'
    },
    {
      title: 'Luxury Kitchen Countertops & Islands',
      subtitle: 'Mirror-polished granite and marble surfaces tailored for modern culinary spaces.',
      image: '/assets/kitchencab.jpg',
      categoryId: 'kitchens'
    },
    {
      title: 'Church Altars & Sanctuary Podiums',
      subtitle: 'Sleek, sacred altars, pulpits, and bespoke architectural sanctuary stonework.',
      image: '/assets/pulpit.jpg',
      categoryId: 'lecterns'
    },
    {
      title: 'Custom Stone Tables & Furniture',
      subtitle: 'Distinctive dining tops, executive slabs, and pedestal stone consoles.',
      image: '/assets/table.jpg',
      categoryId: 'tables'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] bg-stone-pattern flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#5B9D3C]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#6C1A32]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center space-x-2 bg-[#6C1A32]/10 border border-[#6C1A32]/20 px-3.5 py-1.5 rounded-full text-[#6C1A32]">
                <Award className="w-4 h-4 text-[#5B9D3C]" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Nigeria's Premier Stone Craftsmanship
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#6C1A32] font-sans tracking-tight leading-[1.15]">
                Crafted for Excellence: <br />
                <span className="text-[#5B9D3C] font-serif italic font-normal">
                  Timeless Stone
                </span> for Homes, Sanctuaries & Memorials
              </h1>

              <p className="text-slate-700 text-base sm:text-lg max-w-2xl leading-relaxed font-body">
                "Timeless Craftsmanship in Every Cut — Premium Marble & Granite Solutions." We specialize in diamond-polished granite countertops, dignified tombstones, architectural church pulpits, and custom cut stone slabs.
              </p>

              {/* Dual CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/products"
                  className="bg-[#5B9D3C] hover:bg-[#48802e] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-emerald-700/20 hover:shadow-2xl transition duration-300 flex items-center justify-center space-x-3 transform hover:-translate-y-0.5"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#6C1A32] text-[#6C1A32] hover:bg-[#6C1A32] hover:text-white px-8 py-4 rounded-xl font-bold text-base shadow-md transition duration-300 flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="w-5 h-5 text-[#5B9D3C]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Quick Metrics */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg">
                <div>
                  <p className="text-2xl font-extrabold text-[#6C1A32]">100%</p>
                  <p className="text-xs text-slate-600 font-medium">Natural Granite & Marble</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#5B9D3C]">CAD</p>
                  <p className="text-xs text-slate-600 font-medium">Precision Edge Cutting</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#6C1A32]">Nationwide</p>
                  <p className="text-xs text-slate-600 font-medium">Delivery & Fitting</p>
                </div>
              </div>

            </div>

            {/* Hero Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
                  <img
                    src="/assets/tombstone.jpg"
                    alt="Beracah Premium Tombstone Memorial"
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6C1A32]/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="bg-[#5B9D3C] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                      Featured Monument
                    </span>
                    <h3 className="text-xl font-bold font-sans">Regal Memorial Ledger Slab</h3>
                    <p className="text-xs text-slate-200">Mirror Polished Black Galaxy Granite</p>
                  </div>
                </div>

                {/* Floating Secondary Image Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-2.5 rounded-2xl shadow-2xl border border-slate-100 hidden sm:flex items-center space-x-3 max-w-xs">
                  <img src="/assets/pulpit.jpg" alt="Pulpit preview" className="w-16 h-16 rounded-xl object-cover" />
                  <div>
                    <p className="text-xs font-bold text-[#6C1A32]">Sanctuary Stonework</p>
                    <p className="text-[11px] text-slate-500">Custom Marble Altars & Podiums</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST & FEATURE CARDS (4-GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#5B9D3C]">
            Unmatched Craftsmanship Standards
          </h2>
          <p className="text-3xl font-extrabold text-[#6C1A32] font-sans mt-1">
            Why Architects & Families Trust Beracah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_POINTS.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-stone hover:shadow-stone-hover transition-all duration-300 space-y-4 group hover:-translate-y-1"
            >
              <div className="p-3.5 bg-[#5B9D3C]/10 rounded-2xl w-fit group-hover:bg-[#5B9D3C] group-hover:text-white transition-colors">
                {iconMap[pt.icon]}
              </div>
              <h3 className="text-lg font-bold text-[#6C1A32] font-sans group-hover:text-[#5B9D3C] transition-colors">
                {pt.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-body">
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED CATEGORIES PREVIEW */}
      <section className="bg-[#F8F9FA] py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#5B9D3C]">
                Explore Our Specializations
              </span>
              <h2 className="text-3xl font-extrabold text-[#6C1A32] font-sans mt-1">
                Bespoke Stone Product Categories
              </h2>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 text-sm font-bold text-[#5B9D3C] hover:text-[#48802e] flex items-center space-x-1 hover:underline"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/products?category=${cat.categoryId}`}
                className="group relative rounded-2xl overflow-hidden shadow-lg h-80 flex flex-col justify-end p-6 border border-slate-200"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6C1A32] via-[#6C1A32]/50 to-transparent"></div>

                <div className="relative z-10 space-y-2 text-white">
                  <h3 className="text-xl font-bold font-sans group-hover:text-amber-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                    {cat.subtitle}
                  </p>
                  <span className="inline-flex items-center text-xs font-bold text-[#5B9D3C] bg-white px-3 py-1 rounded-full mt-2 group-hover:bg-[#5B9D3C] group-hover:text-white transition-colors">
                    Browse Category
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE BERACAH (2-COLUMN SPLIT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="bg-[#6C1A32]/10 text-[#6C1A32] text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
              Factory Precision & Craftsmanship
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6C1A32] font-sans leading-tight">
              Mastering the Art of Natural Stone Fabrication
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-body">
              At Beracah Marble & Granite, every cut represents decades of stonemasonry excellence. From high-gloss mirror polishes on dark granite to delicate relief carving on white Carrara marble, we ensure maximum structural durability against weather, humidity, and wear.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#5B9D3C] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Architectural Grade Slabs:</strong> Carefully selected raw marble & granite blocks free from interior fractures.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#5B9D3C] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Custom Inscriptions & Engravings:</strong> Laser-etched memorial gold lettering, church logos, and family coats of arms.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#5B9D3C] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Turnkey On-Site Fitting:</strong> Complete professional measurement, transportation, and installation team.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenQuote}
                className="bg-[#6C1A32] hover:bg-[#4e1123] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition"
              >
                Schedule a Stone Consultation
              </button>
            </div>

          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="/assets/kitchencabinet.jpg" alt="Kitchen Granite" className="rounded-2xl shadow-md h-48 w-full object-cover border border-slate-200" />
              <img src="/assets/pulpi3.jpg" alt="Church Altar" className="rounded-2xl shadow-md h-64 w-full object-cover border border-slate-200" />
            </div>
            <div className="space-y-4 pt-6">
              <img src="/assets/tomb1.jpg" alt="Tombstone Cross" className="rounded-2xl shadow-md h-64 w-full object-cover border border-slate-200" />
              <img src="/assets/others.jpg" alt="Marble Flooring" className="rounded-2xl shadow-md h-48 w-full object-cover border border-slate-200" />
            </div>
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS & QUICK INQUIRY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B9D3C]">
              Client Satisfaction
            </span>
            <h2 className="text-3xl font-extrabold text-[#6C1A32] font-sans mt-1">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed font-serif">
                    "{test.quote}"
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <p className="font-bold text-sm text-[#6C1A32]">{test.author}</p>
                  <p className="text-xs text-slate-500">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Inquiry CTA Banner */}
        <div className="bg-gradient-to-r from-[#6C1A32] to-[#4e1123] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border-b-4 border-[#5B9D3C]">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="bg-[#5B9D3C] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Ready to Begin Your Project?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans leading-tight">
              Get Your Custom Marble & Granite Quote Today
            </h2>
            <p className="text-slate-200 text-sm font-body">
              Speak directly with our chief stone masons via WhatsApp or Phone for immediate pricing, material samples, and factory availability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5B9D3C] hover:bg-[#48802e] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center justify-center space-x-2 transition"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-[#5B9D3C]" />
              <span>Instant WhatsApp Chat</span>
            </a>

            <a
              href="tel:+2347085514253"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-[#5B9D3C]" />
              <span>Call +234 708 551 4253</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
