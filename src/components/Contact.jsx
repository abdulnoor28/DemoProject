import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 99999 99999',
    href: 'tel:+919999999999',
    accent: '#C9A84C',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 99999 99999',
    href: 'https://wa.me/919999999999',
    accent: '#34D399',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@elitedrive.in',
    href: 'mailto:hello@elitedrive.in',
    accent: '#60A5FA',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '123 Travel Hub, MG Road, Your City – 500001',
    href: 'https://maps.google.com',
    accent: '#FB7185',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gold-500/5 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">Get In Touch</p>
          <h2 className="section-heading text-white mb-4">
            Contact <span className="gold-gradient">Us</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Ready to book? Have questions? We're here 24/7 — reach out via any channel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left – Contact Info + Map */}
          <div className="reveal-left space-y-6">
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="glass-card rounded-sm p-5 hover:border-gold-500/30 transition-all duration-200 group hover:-translate-y-0.5"
                  >
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center mb-3"
                      style={{ background: `${info.accent}15`, border: `1px solid ${info.accent}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: info.accent }} />
                    </div>
                    <div className="text-slate-400 text-xs mb-1">{info.label}</div>
                    <div className="text-white text-sm font-medium leading-snug group-hover:text-gold-300 transition-colors">
                      {info.value}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Map */}
            <div className="rounded-sm overflow-hidden h-64 border border-white/5">
              <iframe
                title="EliteDrive Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.938993267898!2d77.60745!3d12.97194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712345678901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp banner */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card rounded-sm p-5 border-emerald-500/30 hover:border-emerald-500/60 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-semibold">Chat on WhatsApp</div>
                <div className="text-slate-400 text-sm">Get instant responses • Available 24/7</div>
              </div>
              <div className="ml-auto text-emerald-400 group-hover:translate-x-1 transition-transform">→</div>
            </a>
          </div>

          {/* Right – Contact Form */}
          <div className="reveal-right">
            <div className="glass-card rounded-sm p-8 border-gold-500/15">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">Message Received!</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    Thank you for reaching out. We'll get back to you within 30 minutes during business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }); }}
                    className="mt-6 text-gold-400 text-sm hover:text-gold-300 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl text-white mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-400 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-gold-500/60 focus:bg-white/8 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-gold-500/60 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-gold-500/60 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5">Service Required</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-navy-800 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-500/60 transition-all appearance-none"
                      >
                        <option value="">Select a service…</option>
                        <option>Local City Travel</option>
                        <option>Airport Pickup & Drop</option>
                        <option>Outstation Trip</option>
                        <option>Corporate Travel</option>
                        <option>Hourly Rental</option>
                        <option>Travel Package</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5">Your Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your requirement — date, destination, number of passengers…"
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-gold-500/60 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
