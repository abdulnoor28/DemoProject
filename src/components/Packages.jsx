import React from 'react';
import { MapPin, Clock, Users, Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'City Explorer',
    subtitle: 'Half Day / Full Day',
    duration: '4 hrs or 8 hrs',
    people: '1–7 pax',
    price: '₹999',
    priceNote: 'onwards',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&q=80',
    highlights: ['Pick-up & drop-off included', 'Multiple city stops', 'Professional driver', 'Fuel inclusive'],
    tag: '',
    destinations: ['Business District', 'Shopping Centres', 'Heritage Sites', 'Local Markets'],
    color: 'from-blue-500/20',
  },
  {
    name: 'Weekend Getaway',
    subtitle: '2 Days / 1 Night',
    duration: '2 Days',
    people: '1–7 pax',
    price: '₹3,499',
    priceNote: 'per package',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=700&q=80',
    highlights: ['Outstation covered', 'Overnight stay drop', 'Flexible itinerary', '24/7 driver support'],
    tag: 'Best Value',
    destinations: ['Beach Resorts', 'Hill Retreats', 'Forest Stays', 'Heritage Hotels'],
    color: 'from-gold-500/20',
  },
  {
    name: 'Hill Station Tour',
    subtitle: '3 Days / 2 Nights',
    duration: '3 Days',
    people: '1–7 pax',
    price: '₹5,999',
    priceNote: 'per package',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80',
    highlights: ['Scenic mountain roads', 'Sightseeing stops', 'Experienced mountain driver', 'Comfortable SUV'],
    tag: 'Popular',
    destinations: ['Ooty', 'Coorg', 'Munnar', 'Lonavala'],
    color: 'from-emerald-500/20',
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">Curated Experiences</p>
          <h2 className="section-heading text-white mb-4">
            Travel <span className="gold-gradient">Packages</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Ready-made packages designed to give you maximum comfort with minimum hassle. All inclusive, all sorted.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`reveal stagger-${i + 1} glass-card rounded-sm overflow-hidden group hover:-translate-y-2 transition-all duration-400 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10 flex flex-col`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                {pkg.tag && (
                  <span className="absolute top-4 right-4 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-sm">
                    {pkg.tag}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-gold-300 text-sm">{pkg.subtitle}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex gap-4 mb-5 pb-5 border-b border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    {pkg.people}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5 flex-1">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Destinations */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {pkg.destinations.map((d) => (
                    <span key={d} className="text-xs text-slate-400 border border-white/10 px-2 py-0.5 rounded-sm flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-gold-500" />
                      {d}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div>
                    <div className="font-display text-2xl font-bold text-gold-400">{pkg.price}</div>
                    <div className="text-xs text-slate-400">{pkg.priceNote}</div>
                  </div>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2.5"
                  >
                    Book <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom package CTA */}
        <div className="mt-12 text-center reveal">
          <div className="glass-card rounded-sm p-8 max-w-2xl mx-auto border-gold-500/20">
            <h3 className="font-display text-2xl text-white mb-2">Need a Custom Package?</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Planning a special trip? We'll build a tailored package around your dates, destinations, and budget.
            </p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Plan My Custom Trip
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
