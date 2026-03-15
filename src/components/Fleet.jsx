import React, { useState } from 'react';
import { Users, Gauge, Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const fleet = [
  {
    name: 'Maruti Swift Dzire',
    category: 'Sedan',
    seats: 4,
    pricePerKm: '₹12',
    rating: 4.8,
    tags: ['AC', 'Music System', 'Well Maintained'],
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q=80',
    badge: 'Most Popular',
  },
  {
    name: 'Toyota Innova Crysta',
    category: 'SUV / MUV',
    seats: 7,
    pricePerKm: '₹18',
    rating: 4.9,
    tags: ['AC', 'Spacious', 'Corporate Choice'],
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
    badge: 'Premium',
  },
  {
    name: 'Mahindra XUV700',
    category: 'Premium SUV',
    seats: 7,
    pricePerKm: '₹22',
    rating: 4.9,
    tags: ['AC', 'Sunroof', 'Luxury Interior'],
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
    badge: 'New Fleet',
  },
  {
    name: 'Kia Carens',
    category: 'MPV',
    seats: 7,
    pricePerKm: '₹16',
    rating: 4.7,
    tags: ['AC', 'Family Friendly', 'Comfortable'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    badge: '',
  },
  {
    name: 'Mercedes-Benz E-Class',
    category: 'Luxury Sedan',
    seats: 4,
    pricePerKm: '₹45',
    rating: 5.0,
    tags: ['Chauffeur-driven', 'VIP', 'Airport Special'],
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80',
    badge: 'Luxury',
  },
  {
    name: 'Force Traveller',
    category: 'Mini Bus',
    seats: 14,
    pricePerKm: '₹25',
    rating: 4.6,
    tags: ['AC', 'Group Travel', 'Outstation'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
    badge: 'Group',
  },
];

const badgeColors = {
  'Most Popular': 'bg-gold-500 text-navy-900',
  'Premium': 'bg-purple-500 text-white',
  'New Fleet': 'bg-emerald-500 text-white',
  'Luxury': 'bg-rose-500 text-white',
  'Group': 'bg-blue-500 text-white',
};

export default function Fleet() {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(fleet.length / perPage);

  return (
    <section id="fleet" className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">Our Vehicles</p>
          <h2 className="section-heading text-white mb-4">
            Choose Your <span className="gold-gradient">Ride</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A diverse, well-maintained fleet for every journey — from quick city hops to luxurious long drives.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((car, i) => (
            <div
              key={car.name}
              className={`reveal stagger-${(i % 3) + 1} glass-card rounded-sm overflow-hidden group hover:-translate-y-2 transition-all duration-400 hover:border-gold-500/40 hover:shadow-xl hover:shadow-gold-500/10`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                {car.badge && (
                  <span className={`absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-sm ${badgeColors[car.badge] || 'bg-gold-500 text-navy-900'}`}>
                    {car.badge}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  <span className="text-white text-sm font-semibold">{car.rating}</span>
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-slate-300 font-mono bg-navy-900/70 px-2 py-1 rounded-sm">
                  {car.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-white mb-4">{car.name}</h3>

                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-slate-300">
                    <Users className="w-4 h-4 text-gold-400" />
                    {car.seats} Seats
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-slate-300">
                    <Gauge className="w-4 h-4 text-gold-400" />
                    {car.pricePerKm}/km
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {car.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gold-400/80 border border-gold-500/20 bg-gold-500/5 px-2 py-0.5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 btn-primary py-3 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-slate-400 text-sm mb-4">Don't see what you're looking for?</p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Request a Custom Vehicle
          </a>
        </div>
      </div>
    </section>
  );
}
