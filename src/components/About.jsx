import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Utensils } from 'lucide-react';
import { IMAGES } from '../data/images';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-cream text-darktext overflow-hidden">
      {/* Decorative Large Background Typography */}
      <div className="absolute top-10 right-0 select-none pointer-events-none opacity-[0.035] overflow-hidden">
        <span className="text-[20vw] font-serif font-black tracking-tight leading-none text-dark">
          STORY
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling & Layered Editorial Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Primary Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="aspect-[4/5] img-zoom-container">
                  <img
                    src={IMAGES.about.primary}
                    alt={IMAGES.about.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-80" />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-white/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-dark text-sm">Handcrafted With Passion</p>
                      <p className="text-xs text-muted-dark">From fresh local ingredients to your plate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Accent Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden sm:block absolute -bottom-10 -right-8 w-48 lg:w-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <div className="aspect-square img-zoom-container">
                  <img
                    src={IMAGES.about.accent}
                    alt="Happy Hours freshly made culinary dish"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Decorative Accent Pattern */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right Column: Editorial Typography & Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-brand-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-orange uppercase">
                OUR STORY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-[1.15] mb-6">
              More Than Food.{' '}
              <span className="italic font-normal text-brand-red">
                It's A Happy Experience.
              </span>
            </h2>

            {/* Editorial Description */}
            <p className="text-base sm:text-lg text-darktext/80 leading-relaxed mb-8">
              At Happy Hours, we believe great food brings people together. From flavour-packed dishes to memorable moments with friends and family, every visit is made to feel special.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pt-4 border-t border-dark/10">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-cream-soft border border-dark/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Utensils size={18} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-dark text-base">Flavor-First Philosophy</h4>
                  <p className="text-xs text-darktext/70 mt-1">Every recipe is balanced to deliver deep, memorable satisfaction.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-cream-soft border border-dark/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Heart size={18} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-dark text-base">Community &amp; Warmth</h4>
                  <p className="text-xs text-darktext/70 mt-1">A welcoming space in Mithapur where friends celebrate and unwind.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <a
                href="#experience"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-dark hover:bg-dark-surface text-cream font-medium text-sm transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 group"
              >
                <span>Discover Our Story</span>
                <ArrowRight
                  size={16}
                  className="text-brand-orange group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
