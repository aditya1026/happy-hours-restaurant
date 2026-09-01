import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Sparkles, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/images';

const EXPERIENCES = [
  {
    number: "01",
    title: "Delicious Flavours",
    subtitle: "Taste Crafted to Perfection",
    description: "Fresh ingredients and unforgettable taste. Every dish is seasoned with care to bring mouth-watering satisfaction to every bite.",
    icon: UtensilsCrossed,
    image: IMAGES.experience.flavours,
    tag: "Culinary Excellence",
  },
  {
    number: "02",
    title: "Great Ambience",
    subtitle: "A Space That Feels Like Home",
    description: "A comfortable space for conversations and celebrations. Warm ambient lighting, soft melodies, and relaxing spaces crafted for your comfort.",
    icon: Sparkles,
    image: IMAGES.experience.ambience,
    tag: "Atmosphere & Comfort",
  },
  {
    number: "03",
    title: "Happy Moments",
    subtitle: "Shared With The People You Love",
    description: "Food tastes better when shared with people you love. Whether it's a birthday, an evening date, or casual laughter with best friends.",
    icon: HeartHandshake,
    image: IMAGES.experience.moments,
    tag: "Memories That Linger",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36 bg-dark text-cream overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-brand-orange" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-brand-orange uppercase">
                THE HAPPY HOURS PROMISE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream">
              Made For Good Times.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-base sm:text-lg text-muted max-w-md font-light">
            We craft sensory dining moments that linger long after the last plate is cleared.
          </p>
        </div>

        {/* Distinctive Editorial Highlights Layout - Not Standard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {EXPERIENCES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group relative flex flex-col justify-between p-8 lg:p-10 rounded-2xl bg-dark-surface/60 border border-white/10 hover:border-brand-orange/50 transition-all duration-500 overflow-hidden"
              >
                {/* Background Hover Image Reveal with subtle opacity */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-dark/80" />
                </div>

                {/* Top: Large Editorial Number & Icon Badge */}
                <div className="relative z-10 flex items-start justify-between mb-12">
                  <span className="font-serif text-5xl lg:text-6xl font-bold text-white/20 group-hover:text-brand-orange/60 transition-colors duration-300">
                    {item.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand-orange group-hover:border-brand-orange flex items-center justify-center text-cream group-hover:text-white transition-all duration-300 shadow-lg">
                    <Icon size={24} />
                  </div>
                </div>

                {/* Middle: Content */}
                <div className="relative z-10 mb-8">
                  <span className="inline-block text-xs font-semibold tracking-wider text-brand-gold uppercase mb-2">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Accent Line & Interactive Cue */}
                <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs tracking-wider uppercase text-muted group-hover:text-cream transition-colors">
                  <span>Explore Experience</span>
                  <ArrowUpRight
                    size={18}
                    className="text-brand-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
