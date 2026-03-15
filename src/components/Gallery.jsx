import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80', alt: 'Mountain road trip', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80', alt: 'Fleet of vehicles', span: '' },
  { src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80', alt: 'Driver with vehicle', span: '' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', alt: 'Scenic travel', span: '' },
  { src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80', alt: 'Luxury car', span: '' },
  { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', alt: 'Road travel', span: 'col-span-2' },
  { src: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80', alt: 'Premium SUV', span: '' },
  { src: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80', alt: 'City travel', span: '' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-navy-900 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">Visual Journey</p>
          <h2 className="section-heading text-white mb-4">
            Our <span className="gold-gradient">Gallery</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A glimpse into the journeys, vehicles, and experiences that define EliteDrive.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`reveal stagger-${(i % 4) + 1} relative overflow-hidden rounded-sm group cursor-pointer ${item.span}`}
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/50 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-gold-500/90 flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-navy-900" />
                </div>
              </div>
              {/* Gold corner accent on hover */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-4xl max-h-[85vh] w-full object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
