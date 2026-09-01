import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Maximize2, X, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import { BUSINESS_INFO } from '../data/businessData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-28 lg:py-36 bg-cream text-dark overflow-hidden">
      {/* Editorial Decorative Background Text */}
      <div className="absolute top-10 right-10 select-none pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="text-[20vw] font-serif font-black tracking-tight leading-none text-dark">
          GALLERY
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark/5 border border-dark/10 text-xs font-bold tracking-widest text-brand-orange uppercase mb-4">
            <InstagramIcon size={14} />
            <span>THE VISUAL DIARY</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-dark mb-4">
            A Taste Of Happy Hours.
          </h2>
          <p className="text-base sm:text-lg text-darktext/80 font-normal leading-relaxed">
            A glimpse into our kitchen crafts, warm ambience, and the radiant smiles of our guests.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-dark/5 border border-dark/10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-dark text-white shadow-md'
                    : 'text-darktext/70 hover:text-dark hover:bg-dark/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-3xl overflow-hidden shadow-lg bg-dark cursor-pointer ${
                  item.aspect === 'tall' ? 'aspect-[3/4]' : item.aspect === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
                }`}
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover:brightness-[0.75]"
                />

                {/* Dark Overlay & Content Reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  {/* Top: Category and Instagram icon */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase text-brand-gold">
                      {item.category}
                    </span>
                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-full bg-white/20 hover:bg-brand-orange backdrop-blur-md flex items-center justify-center text-white transition-colors"
                      aria-label="View on Instagram"
                    >
                      <InstagramIcon size={16} />
                    </a>
                  </div>

                  {/* Bottom: Title, Subtitle, and Fullscreen Icon */}
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cream/80 font-light mb-3">
                      {item.subtitle}
                    </p>
                    <div className="flex items-center justify-between text-xs text-brand-gold">
                      <span className="flex items-center gap-1">
                        <Heart size={13} className="fill-brand-gold" />
                        {item.likes} Likes
                      </span>
                      <span className="flex items-center gap-1 text-white/70 group-hover:text-white">
                        <Maximize2 size={13} />
                        View Photo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA: Follow us on Instagram */}
        <div className="mt-16 text-center">
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-dark hover:bg-dark-surface text-cream font-medium text-sm transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 group"
          >
            <InstagramIcon size={18} className="text-brand-orange group-hover:rotate-12 transition-transform" />
            <span>Follow us on Instagram</span>
            <ArrowUpRight size={16} className="text-brand-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <p className="text-xs text-darktext/60 mt-2 font-medium">
            Join @happyhoursyummyflavours on Instagram
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/95 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] bg-dark-surface rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-brand-orange transition-colors"
                aria-label="Close photo"
              >
                <X size={20} />
              </button>

              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />

              <div className="p-6 bg-dark-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-cream">
                    {selectedImage.title}
                  </h4>
                  <p className="text-xs text-muted mt-1">
                    {selectedImage.subtitle}
                  </p>
                </div>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-red text-white text-xs font-semibold shadow-lg transition-colors"
                >
                  <InstagramIcon size={14} />
                  <span>View On Instagram</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
