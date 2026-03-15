import React from 'react';
import { UserCheck, Sparkles, HeadphonesIcon, IndianRupee, Award, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Professional Drivers',
    description: 'All our drivers are background-verified, licensed, and trained in safe driving and customer etiquette.',
  },
  {
    icon: Sparkles,
    title: 'Clean & Sanitised Vehicles',
    description: 'Every vehicle is thoroughly cleaned and sanitised before each trip for your health and comfort.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Customer Support',
    description: 'Our support team is available round the clock via phone and WhatsApp for instant assistance.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises. Get upfront pricing with detailed fare breakdowns before every trip.',
  },
  {
    icon: Award,
    title: 'Trusted by Thousands',
    description: 'Over 10,000 happy customers across the region — businesses, families, and frequent travellers.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured Fleet',
    description: 'Travel with peace of mind knowing every vehicle in our fleet carries comprehensive insurance.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Gold diagonal stripe decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -right-20 top-0 w-1/2 h-full opacity-5"
          style={{
            background: 'repeating-linear-gradient(-45deg, #C9A84C, #C9A84C 1px, transparent 1px, transparent 60px)',
          }}
        />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Image + accent */}
          <div className="relative reveal-left">
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                alt="Professional driver"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/60 to-transparent" />

              {/* Floating stat card */}
              <div className="absolute bottom-8 left-8 glass-card rounded-sm p-5 border-gold-500/30">
                <div className="font-display text-4xl font-bold gold-gradient mb-1">10K+</div>
                <div className="text-slate-300 text-sm">Satisfied Customers</div>
                <div className="flex mt-3 gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} className="text-gold-400 text-sm">★</span>
                  ))}
                  <span className="text-slate-400 text-xs ml-1 self-center">4.9/5</span>
                </div>
              </div>

              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold-500/60" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold-500/60" />
            </div>

            {/* Years badge */}
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-gold-500 rounded-full flex flex-col items-center justify-center shadow-xl shadow-gold-500/30 z-10">
              <span className="font-display font-bold text-navy-900 text-2xl leading-none">8+</span>
              <span className="text-navy-900/70 text-xs font-semibold mt-0.5">Years</span>
            </div>
          </div>

          {/* Right – Reasons */}
          <div>
            <div className="reveal-right">
              <p className="text-gold-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">Our Advantage</p>
              <h2 className="section-heading text-white mb-4">
                Why Choose <span className="gold-gradient">EliteDrive?</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 mb-8" />
              <p className="text-slate-400 leading-relaxed mb-10">
                We don't just drive you from A to B — we craft experiences. Every ride is a commitment to comfort, safety, and punctuality.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className={`reveal stagger-${i + 1} flex gap-4 group`}
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-sm bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{reason.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
