import React from 'react';
import { Car, Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Travel Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Local City Travel',
  'Airport Pickup & Drop',
  'Outstation Trips',
  'Corporate Travel',
  'Hourly Rentals',
  'Group Tours',
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold-500/3 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-500/3 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center">
                <Car className="w-5 h-5 text-navy-900" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-none">EliteDrive</div>
                <div className="text-gold-500 text-xs tracking-[0.2em] uppercase font-mono">Travel & Rentals</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for premium travel and car rental services. Comfortable rides, professional drivers, and unforgettable journeys across the region.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 hover:border-gold-500/50 hover:text-gold-400 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wide mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-gold-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-gold-400 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-gold-500/50 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wide mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-gold-500" />
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="w-1 h-1 rounded-full bg-gold-500/50" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wide mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-gold-500" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919999999999" className="flex items-start gap-3 text-slate-400 text-sm hover:text-gold-400 transition-colors group">
                  <Phone className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  +91 99999 99999
                </a>
              </li>
              <li>
                <a href="https://wa.me/919999999999" className="flex items-start gap-3 text-slate-400 text-sm hover:text-emerald-400 transition-colors group">
                  <MessageCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="mailto:hello@elitedrive.in" className="flex items-start gap-3 text-slate-400 text-sm hover:text-gold-400 transition-colors group">
                  <Mail className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  hello@elitedrive.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                123 Travel Hub, MG Road, Your City – 500001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} EliteDrive Travel & Car Rentals. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cancellation Policy'].map((item) => (
              <a key={item} href="#" className="text-slate-500 text-xs hover:text-gold-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
