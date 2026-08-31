import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Instagram, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products & Catalog', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#6C1A32] text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-amber-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-medium tracking-wide">Timeless Craftsmanship in Every Cut</span>
            </span>
            <span className="text-white/40">|</span>
            <a href="tel:+2347085514253" className="hover:text-[#5B9D3C] transition-colors flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5" />
              <span>+234 708 551 4253</span>
            </a>
            <a href="tel:+2349071210896" className="hover:text-[#5B9D3C] transition-colors flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5 text-[#5B9D3C]" />
              <span>+234 907 121 0896</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/beracah_marble_and_granite?igsi=c3oxemY1YXNqa2Nh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5B9D3C] transition-colors flex items-center space-x-1.5"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>@beracah_marble_and_granite</span>
            </a>
            <span className="text-white/40">|</span>
            <a
              href="https://wa.me/2347085514253"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5B9D3C] hover:bg-[#48802e] text-white px-2.5 py-0.5 rounded text-[11px] font-semibold flex items-center space-x-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-40 bg-white transition-all duration-300 ${scrolled ? 'shadow-md border-b border-slate-200 py-3' : 'border-b border-slate-100 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="h-12 w-12 rounded-xl bg-[#6C1A32] p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden border border-[#5B9D3C]/40">
                <img
                  src="/assets/beracah_primary_logo.png"
                  alt="Beracah Marble Logo"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    // Fallback icon if logo image fails
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl text-[#6C1A32] font-sans tracking-tight leading-none group-hover:text-[#5B9D3C] transition-colors">
                  BERACAH
                </span>
                <span className="text-[10px] uppercase font-bold text-[#5B9D3C] tracking-widest mt-1">
                  Marble & Granite Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1.5 ${
                    isActive(link.path)
                      ? 'text-[#5B9D3C]'
                      : 'text-slate-700 hover:text-[#6C1A32]'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5B9D3C] rounded-full animate-fadeIn"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={onOpenQuote}
                className="bg-[#5B9D3C] hover:bg-[#48802e] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all duration-300 flex items-center space-x-2 transform hover:-translate-y-0.5"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={onOpenQuote}
                className="bg-[#5B9D3C] text-white px-3 py-1.5 rounded-lg text-xs font-bold"
              >
                Quote
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-slate-700 hover:text-[#6C1A32] hover:bg-slate-100 transition-colors"
              >
                {isOpen ? <X className="w-7 h-7 text-[#6C1A32]" /> : <Menu className="w-7 h-7 text-[#6C1A32]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Out Drawer */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            <div
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between z-50 border-l border-slate-200 animate-slideInRight"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <img src="/assets/beracah_primary_logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                    <span className="font-bold text-lg text-[#6C1A32]">Beracah Stonework</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl font-bold text-base transition-colors ${
                        isActive(link.path)
                          ? 'bg-[#5B9D3C]/10 text-[#5B9D3C] border-l-4 border-[#5B9D3C]'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#6C1A32]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-[#5B9D3C] hover:bg-[#48802e] text-white py-3 rounded-xl font-bold text-center shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="space-y-2 text-xs text-slate-600 pt-2">
                  <a href="tel:+2347085514253" className="flex items-center space-x-2 hover:text-[#5B9D3C]">
                    <Phone className="w-4 h-4 text-[#5B9D3C]" />
                    <span>+234 708 551 4253</span>
                  </a>
                  <a href="tel:+2349071210896" className="flex items-center space-x-2 hover:text-[#5B9D3C]">
                    <Phone className="w-4 h-4 text-[#5B9D3C]" />
                    <span>+234 907 121 0896</span>
                  </a>
                  <a
                    href="https://www.instagram.com/beracah_marble_and_granite?igsi=c3oxemY1YXNqa2Nh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-pink-600 hover:underline"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>@beracah_marble_and_granite</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
