import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Info, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="relative py-28 lg:py-36 bg-dark text-cream overflow-hidden border-t border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-brand-orange uppercase mb-4">
            <Heart size={13} className="fill-brand-orange" />
            <span>GUEST EXPERIENCES</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream mb-4">
            Loved By Food Lovers.
          </h2>
          <p className="text-base sm:text-lg text-muted font-light">
            What guests appreciate most when good taste and warm smiles meet.
          </p>
        </div>

        {/* Testimonial Slider Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-dark-surface/90 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-xl"
        >
          {/* Decorative Giant Quote Icon */}
          <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
            <Quote size={96} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45 }}
              className="relative z-10 flex flex-col justify-between min-h-[220px]"
            >
              {/* Star Rating & Dish Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-1.5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-brand-gold fill-brand-gold"
                    />
                  ))}
                  <span className="text-xs font-semibold text-brand-gold ml-2">5.0 Star Experience</span>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/20">
                  {current.dishMentioned}
                </span>
              </div>

              {/* Quote Text */}
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed text-cream/95 mb-8">
                "{current.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <h4 className="font-serif font-bold text-lg text-cream">
                    {current.name}
                  </h4>
                  <p className="text-xs text-muted font-light mt-0.5">
                    {current.role}
                  </p>
                </div>
                <span className="text-xs text-white/40">{current.date}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls (Prev / Next / Dots) */}
          <div className="mt-8 pt-6 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-brand-orange'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/5 hover:bg-brand-orange text-cream hover:text-white border border-white/10 transition-all duration-200"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/5 hover:bg-brand-orange text-cream hover:text-white border border-white/10 transition-all duration-200"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Demo Testimonials Disclaimer Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-muted bg-white/[0.03] px-4 py-2 rounded-full border border-white/5">
            <Info size={13} className="text-brand-gold shrink-0" />
            <span>Illustrative demo reviews. Official reviews will link directly to Google Business reviews.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
