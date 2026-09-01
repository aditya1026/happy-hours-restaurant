import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { IMAGES } from '../data/images';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Cinematic Background with Slow Ambient Zoom & Parallax */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src={IMAGES.hero.main}
          alt={IMAGES.hero.alt}
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08]"
        />
        {/* Layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-dark/30 to-dark" />
      </motion.div>

      {/* Decorative Subtle Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[18vw] font-serif font-black text-white/[0.025] tracking-tight leading-none whitespace-nowrap">
          HAPPY HOURS
        </span>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Small Label with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-brand-orange uppercase">
            WELCOME TO HAPPY HOURS
          </span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="text-xs sm:text-sm text-cream/80 hidden sm:inline">Patna, Bihar</span>
        </motion.div>

        {/* Main Dramatic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream tracking-tight leading-[1.08] mb-6"
        >
          Where Every Bite Feels Like{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange">
            Happiness.
            <svg
              className="absolute -bottom-2 left-0 w-full text-brand-orange/60"
              viewBox="0 0 300 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15C80 5 220 5 295 15"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-cream/85 font-light leading-relaxed mb-10"
        >
          Delicious flavours, great moments, and unforgettable food experiences — all served at Happy Hours.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* Primary CTA */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-orange hover:bg-brand-red text-white font-semibold text-base shadow-xl shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>Explore Our Menu</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>

          {/* Secondary CTA */}
          <a
            href="#location"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-cream hover:text-white font-medium text-base border border-white/20 hover:border-white/40 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MapPin size={18} className="text-brand-gold" />
            <span>Visit Us</span>
          </a>
        </motion.div>

        {/* Value Highlights Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 max-w-xl mx-auto text-center gap-2"
        >
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-cream">Fresh</div>
            <div className="text-xs text-muted font-medium mt-0.5">Handmade Daily</div>
          </div>
          <div className="border-x border-white/10">
            <div className="text-xl sm:text-2xl font-serif font-bold text-cream">Mithapur</div>
            <div className="text-xs text-muted font-medium mt-0.5">Prime Patna Location</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-cream">Unwind</div>
            <div className="text-xs text-muted font-medium mt-0.5">Warm Ambience</div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-auto"
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-1.5 text-xs tracking-widest uppercase text-muted hover:text-cream transition-colors duration-200"
        >
          <span className="text-[10px] tracking-widest">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-brand-orange"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
