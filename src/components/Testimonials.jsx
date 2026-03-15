import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Business Traveller, Pune',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
    text: 'EliteDrive has been my go-to for corporate travel for over two years. The drivers are always on time, the cars are spotless, and the billing is transparent. Highly recommend them for any business trip.',
  },
  {
    name: 'Priya Menon',
    role: 'Family Traveller, Chennai',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
    text: 'We booked the Hill Station Tour package for our family trip to Ooty. The driver was experienced on mountain roads, the Innova was comfortable, and the service was outstanding. Will definitely book again!',
  },
  {
    name: 'Arjun Kapoor',
    role: 'Frequent Flyer, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
    text: 'I use their airport service twice a month. They track my flights and always adjust if there are delays. Not once have I had to wait. That reliability is priceless when you travel as much as I do.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Event Planner, Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 5,
    text: 'For our corporate events, we need multiple vehicles at once with perfect timing. EliteDrive manages it flawlessly every time. Their operations team is incredibly professional.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((index + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const auto = setInterval(() => goTo(active + 1), 5000);
    return () => clearInterval(auto);
  }, [active]);

  const t = testimonials[active];

  return (
    <section className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        {/* Large quote decoration */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-[20rem] leading-none text-white/2 select-none pointer-events-none">"</div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">What They Say</p>
          <h2 className="section-heading text-white mb-4">
            Customer <span className="gold-gradient">Testimonials</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Testimonial Card */}
        <div className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="glass-card rounded-sm p-8 md:p-12 text-center border-gold-500/20">
            <Quote className="w-10 h-10 text-gold-500/40 mx-auto mb-6" />

            <p className="font-display text-xl md:text-2xl text-white leading-relaxed italic mb-8 max-w-3xl mx-auto">
              "{t.text}"
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gold-500/40"
              />
              <div className="text-left">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-gold-400 text-sm">{t.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => goTo(active - 1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-400 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-gold-400' : 'w-3 bg-white/20'}`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(active + 1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-400 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
