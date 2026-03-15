import React from 'react';
import { MapPin, Plane, Navigation, Briefcase, Clock, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: MapPin,
    title: 'Local City Travel',
    description: 'Comfortable rides across the city for any occasion — errands, events, shopping, or leisure.',
    highlights: ['Point-to-point', 'Hourly bookings', 'AC vehicles'],
    color: 'from-blue-500/20 to-blue-600/5',
    accent: '#60A5FA',
  },
  {
    icon: Plane,
    title: 'Airport Pickup & Drop',
    description: 'Never miss a flight. Our punctual drivers track your flight status for zero wait time.',
    highlights: ['Flight tracking', 'Meet & greet', 'All airports'],
    color: 'from-gold-500/20 to-gold-600/5',
    accent: '#C9A84C',
  },
  {
    icon: Navigation,
    title: 'Outstation Trips',
    description: 'Explore neighbouring cities and distant destinations in comfort with expert local drivers.',
    highlights: ['One-way & return', 'Night driving', 'All India coverage'],
    color: 'from-emerald-500/20 to-emerald-600/5',
    accent: '#34D399',
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'Dedicated corporate accounts with priority bookings, invoicing, and a premium fleet.',
    highlights: ['GST invoices', 'Priority fleet', 'Monthly billing'],
    color: 'from-purple-500/20 to-purple-600/5',
    accent: '#A78BFA',
  },
  {
    icon: Clock,
    title: 'Hourly Rentals',
    description: 'Hire a car by the hour for meetings, events, or errands with complete flexibility.',
    highlights: ['Flexible duration', 'Driver included', 'No hidden charges'],
    color: 'from-rose-500/20 to-rose-600/5',
    accent: '#FB7185',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-navy-900">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-gold-500/5 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">What We Offer</p>
          <h2 className="section-heading text-white mb-4">
            Our <span className="gold-gradient">Services</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            From quick city rides to long-distance journeys, we provide tailored travel solutions for every need.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal stagger-${i + 1} glass-card rounded-sm p-8 group hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 cursor-default`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-sm bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  style={{ border: `1px solid ${service.accent}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.accent }} />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-xl text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full" style={{ background: service.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-3"
                  style={{ color: service.accent }}
                >
                  Book Now <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}

          {/* Wide last card – custom / any request */}
          <div className="reveal stagger-6 glass-card rounded-sm p-8 md:col-span-2 lg:col-span-1 flex flex-col justify-between bg-gradient-to-br from-gold-500/15 to-transparent border-gold-500/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
            <div>
              <div className="text-gold-400 font-mono text-xs tracking-widest uppercase mb-3">Custom Request?</div>
              <h3 className="font-display font-semibold text-2xl text-white mb-3">Need Something Specific?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We handle weddings, events, group tours, multi-day trips and more. Tell us your requirement and we'll craft the perfect plan.
              </p>
            </div>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 self-start"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
