import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BUSINESS_INFO } from '../data/businessData';
import { IMAGES } from '../data/images';

export default function InstagramCTA() {
  return (
    <section className="relative py-28 lg:py-36 bg-dark text-cream overflow-hidden border-t border-white/10">
      {/* Background Social Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-amber-500/10 to-purple-500/10 border border-white/10 text-xs font-bold tracking-widest text-brand-orange uppercase mb-4">
            <InstagramIcon size={14} className="text-brand-orange" />
            <span>COMMUNITY FEED</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream mb-4">
            Follow Our Flavours.
          </h2>

          <p className="text-base sm:text-lg text-muted font-light leading-relaxed mb-6">
            See what we're cooking and join the Happy Hours community.
          </p>

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-brand-gold font-serif text-lg">
            <span>{BUSINESS_INFO.instagramHandle}</span>
          </div>
        </div>

        {/* Dynamic Image Collage */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-14">
          {IMAGES.instagram.map((post, idx) => (
            <motion.a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-dark-surface shadow-md cursor-pointer block"
            >
              <img
                src={post.url}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay with Likes & Instagram Icon */}
              <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-white">
                <InstagramIcon size={24} className="text-brand-orange mb-2 group-hover:scale-110 transition-transform" />
                <div className="flex items-center gap-1.5 text-xs font-semibold text-cream">
                  <Heart size={14} className="fill-brand-gold text-brand-gold" />
                  <span>{post.likes}</span>
                </div>
                <p className="text-[10px] text-white/70 line-clamp-2 mt-1 leading-tight font-light">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="text-center">
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-amber-600 via-brand-orange to-pink-600 hover:from-amber-500 hover:to-pink-500 text-white font-semibold text-sm shadow-xl shadow-brand-orange/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <InstagramIcon size={18} className="group-hover:rotate-12 transition-transform" />
            <span>Follow on Instagram</span>
            <ExternalLink size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
