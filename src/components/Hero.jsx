import React, { useEffect, useState } from 'react';
import { MessageCircle, ChevronDown, MapPin, Clock, Shield } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=85',
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&q=85',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85',
];

const stats = [
  { icon: MapPin, value: '500+', label: 'Routes Covered' },
  { icon: Shield, value: '10K+', label: 'Happy Customers' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
];

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImgIndex((i) => (i + 1) % heroImages.length);
        setFade(true);
      }, 700);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages[imgIndex]}
          alt="EliteDrive Hero"
          className={`w-full h-full object-cover transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/30" />
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gold-500/5 blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold-500/40 bg-gold-500/10 text-gold-400 text-xs font-mono tracking-[0.15em] uppercase px-4 py-2 rounded-sm mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Premium Travel & Car Rental Services
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6 text-shadow">
            Reliable Travel &{' '}
            <span className="gold-gradient italic">Car Rental</span>{' '}
            <br className="hidden sm:block" />
            Services
          </h1>

          {/* Sub */}
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl font-light">
            Experience seamless journeys with professional drivers, premium vehicles, and round-the-clock support — crafted for every occasion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-base"
            >
              View Services
            </button>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-gold-500/15 border border-gold-500/30 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-xl leading-none">{value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFade(false); setTimeout(() => { setImgIndex(i); setFade(true); }, 300); }}
            className={`h-0.5 transition-all duration-300 rounded-full ${i === imgIndex ? 'w-8 bg-gold-400' : 'w-3 bg-white/30'}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <button
        onClick={handleScroll}
        className="absolute bottom-10 right-8 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-gold-400 transition-colors group"
      >
        <span className="text-xs font-mono tracking-widest rotate-90 mb-2">SCROLL</span>
        <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-pulse-slow" />
      </button>
    </section>
  );
}
