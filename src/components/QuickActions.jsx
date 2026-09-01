import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function QuickActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (450px)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-1.5 rounded-full bg-dark/90 backdrop-blur-xl border border-white/15 shadow-2xl"
        >
          {/* Call Now */}
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-orange hover:bg-brand-red text-white text-xs sm:text-sm font-semibold shadow-lg shadow-brand-orange/30 transition-all hover:scale-105 active:scale-95"
            aria-label="Call Happy Hours"
          >
            <Phone size={14} className="animate-pulse" />
            <span>Call Now</span>
          </a>

          {/* Directions */}
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-cream text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95"
            aria-label="Get Directions on Google Maps"
          >
            <Navigation size={14} className="text-brand-gold" />
            <span className="hidden sm:inline">Directions</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
