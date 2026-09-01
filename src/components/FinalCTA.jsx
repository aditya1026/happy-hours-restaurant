import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Navigation, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 bg-dark overflow-hidden border-t border-white/10">
      {/* Ambient Radial Lighting & Animated Particle Spheres */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-orange/15 via-dark to-dark opacity-90" />
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Floating Circles */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-brand-gold/40"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-16 w-3 h-3 rounded-full bg-brand-orange/40"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-brand-orange uppercase mb-6"
        >
          <Sparkles size={14} />
          <span>VISIT HAPPY HOURS PATNA</span>
        </motion.div>

        {/* Large Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-cream leading-[1.1] mb-6"
        >
          Your Table Of Happiness{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold">
            Is Waiting.
          </span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-cream/80 max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          Come experience great flavours and unforgettable moments at Happy Hours.
        </motion.p>

        {/* Prominent Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Call Now Button */}
          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-brand-orange hover:bg-brand-red text-white font-semibold text-base shadow-2xl shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <Phone size={18} className="animate-pulse" />
            <span>Call Now</span>
          </a>

          {/* Get Directions Button */}
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-white/10 hover:bg-white/15 text-cream hover:text-white font-medium text-base border border-white/20 hover:border-white/40 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Navigation size={18} className="text-brand-gold" />
            <span>Get Directions</span>
          </a>
        </motion.div>

        {/* Location Snapshot Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 text-xs sm:text-sm text-muted font-light"
        >
          Gandhi Path, near Kali Mandir Gaudiya Math, Jakkanpur, Mithapur, Patna, Bihar 800001
        </motion.p>
      </div>
    </section>
  );
}
