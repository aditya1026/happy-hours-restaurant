import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/images';

const HIGHLIGHTS = [
  { text: "Quality Ingredients", desc: "Sourced fresh every single day" },
  { text: "Delicious Flavours", desc: "Crafted to satisfy authentic cravings" },
  { text: "Comfortable Ambience", desc: "Designed for lingering conversations" },
  { text: "Perfect For Friends & Family", desc: "Celebrations of all sizes welcome" },
];

export default function StatementSection() {
  return (
    <section className="relative py-32 lg:py-44 bg-dark-surface text-cream overflow-hidden border-y border-white/10">
      {/* Background Image with Dark Vignette & Subtle Film Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.statement.bg}
          alt={IMAGES.statement.alt}
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-dark/50 to-dark" />
      </div>

      {/* Giant Editorial Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[22vw] font-serif font-black text-white/[0.03] tracking-tighter leading-none">
          MEMORIES
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest mb-8"
        >
          <Sparkles size={13} />
          <span>THE HAPPY HOURS PHILOSOPHY</span>
        </motion.div>

        {/* Huge Dramatic Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.98] text-cream">
            Good Food. <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-orange to-brand-red">
              Better Memories.
            </span>
          </h2>
        </motion.div>

        {/* 4 Layered Checkpoint Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left max-w-5xl mx-auto"
        >
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.text}
              className="p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-brand-gold/40 group"
            >
              <div className="w-8 h-8 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange mb-4 group-hover:scale-110 transition-transform">
                <Check size={16} strokeWidth={3} />
              </div>
              <h4 className="font-serif text-lg font-bold text-cream mb-1 group-hover:text-brand-gold transition-colors">
                {item.text}
              </h4>
              <p className="text-xs text-muted font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Editorial Accent Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 text-sm sm:text-base text-cream/70 font-light max-w-xl mx-auto italic"
        >
          "Food made with happiness brings people closer than anything else."
        </motion.p>
      </div>
    </section>
  );
}
