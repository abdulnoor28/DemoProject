import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Car } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-2xl shadow-black/40 border-b border-gold-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center group-hover:bg-gold-400 transition-colors">
              <Car className="w-5 h-5 text-navy-900" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-white text-lg leading-none">Car</div>
              <div className="text-gold-500 text-xs tracking-[0.2em] uppercase font-mono">Travel & Rentals</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`nav-link relative pb-1 ${
                  activeLink === link.href ? 'text-gold-400' : ''
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold-500 to-gold-300" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 text-sm font-medium text-white border border-white/20 px-4 py-2.5 rounded-sm hover:border-gold-500 hover:text-gold-400 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold bg-emerald-500 text-white px-4 py-2.5 rounded-sm hover:bg-emerald-400 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 rounded-sm hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-900/98 backdrop-blur-md border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`block w-full text-left py-2.5 border-b border-white/5 text-sm font-medium tracking-wide transition-colors ${
                activeLink === link.href ? 'text-gold-400' : 'text-slate-300 hover:text-gold-400'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="flex gap-3 pt-2">
            <a
              href="tel:+919999999999"
              className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-white border border-white/20 px-4 py-3 rounded-sm hover:border-gold-500 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold bg-emerald-500 text-white px-4 py-3 rounded-sm hover:bg-emerald-400 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
