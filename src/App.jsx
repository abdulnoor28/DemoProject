import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import WhyChooseUs from './components/WhyChooseUs';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';
import { MessageCircle, Phone } from 'lucide-react';

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:+919999999999"
        aria-label="Call us"
        className="w-12 h-12 rounded-full bg-navy-800 border border-white/20 flex items-center justify-center text-white shadow-xl hover:border-gold-500 hover:text-gold-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-gold-500/20"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-400 transition-all duration-200 hover:-translate-y-0.5 animate-float"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default function App() {
  useReveal();

  // Re-run reveal on route changes (for SPA safety)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <WhyChooseUs />
        <Packages />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
