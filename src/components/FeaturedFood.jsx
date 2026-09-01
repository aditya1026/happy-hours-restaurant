import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { IMAGES } from '../data/images';

const FEATURED_ITEMS = [
  {
    id: 'pizza',
    category: 'Pizza',
    title: IMAGES.featured.pizza.title,
    tagline: IMAGES.featured.pizza.tagline,
    image: IMAGES.featured.pizza.image,
    alt: IMAGES.featured.pizza.alt,
    layout: 'col-span-1 lg:col-span-8 row-span-2',
    accent: 'Hand-tossed Crust',
    highlight: true,
  },
  {
    id: 'burger',
    category: 'Burger',
    title: IMAGES.featured.burger.title,
    tagline: IMAGES.featured.burger.tagline,
    image: IMAGES.featured.burger.image,
    alt: IMAGES.featured.burger.alt,
    layout: 'col-span-1 lg:col-span-4 row-span-1',
    accent: 'Double Melt',
    highlight: false,
  },
  {
    id: 'pasta',
    category: 'Pasta',
    title: IMAGES.featured.pasta.title,
    tagline: IMAGES.featured.pasta.tagline,
    image: IMAGES.featured.pasta.image,
    alt: IMAGES.featured.pasta.alt,
    layout: 'col-span-1 lg:col-span-4 row-span-1',
    accent: 'Velvet Emulsion',
    highlight: false,
  },
  {
    id: 'indian',
    category: 'Indian Cuisine',
    title: IMAGES.featured.indian.title,
    tagline: IMAGES.featured.indian.tagline,
    image: IMAGES.featured.indian.image,
    alt: IMAGES.featured.indian.alt,
    layout: 'col-span-1 lg:col-span-4 row-span-1',
    accent: 'Tandoor Char',
    highlight: false,
  },
  {
    id: 'mocktails',
    category: 'Mocktails',
    title: IMAGES.featured.mocktails.title,
    tagline: IMAGES.featured.mocktails.tagline,
    image: IMAGES.featured.mocktails.image,
    alt: IMAGES.featured.mocktails.alt,
    layout: 'col-span-1 lg:col-span-4 row-span-1',
    accent: 'Iced Botanical',
    highlight: false,
  },
  {
    id: 'desserts',
    category: 'Desserts',
    title: IMAGES.featured.desserts.title,
    tagline: IMAGES.featured.desserts.tagline,
    image: IMAGES.featured.desserts.image,
    alt: IMAGES.featured.desserts.alt,
    layout: 'col-span-1 lg:col-span-4 row-span-1',
    accent: 'Sweet Finale',
    highlight: false,
  },
];

export default function FeaturedFood() {
  return (
    <section id="featured" className="relative py-28 lg:py-36 bg-cream text-dark overflow-hidden">
      {/* Editorial Decorative Background Text */}
      <div className="absolute top-20 left-10 select-none pointer-events-none opacity-[0.035] overflow-hidden">
        <span className="text-[18vw] font-serif font-black tracking-tight leading-none text-dark">
          CRAVINGS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-brand-orange" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-orange uppercase">
                SIGNATURE HIGHLIGHTS
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-dark">
              Taste The Happiness.
            </h2>
            <p className="mt-3 text-lg text-darktext/80 max-w-xl font-normal">
              Some flavours are too good to miss.
            </p>
          </div>

          {/* Demonstration Notice Badge */}
          <div className="mt-6 lg:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/5 border border-dark/10 text-xs text-darktext/70">
            <Info size={14} className="text-brand-orange shrink-0" />
            <span>Curated demonstration categories • Easily customizable for official menu</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {FEATURED_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden shadow-xl bg-dark ${item.layout} ${
                item.highlight ? 'min-h-[420px] lg:min-h-[560px]' : 'min-h-[300px]'
              }`}
            >
              {/* Image Container with Zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.78] group-hover:brightness-[0.88]"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-transparent" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full text-white">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-brand-gold uppercase">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-white/70">
                    {item.accent}
                  </span>
                </div>

                {/* Bottom Title & Tagline */}
                <div>
                  <h3 className={`font-serif font-bold text-cream mb-2 transition-transform duration-300 group-hover:translate-x-1 ${
                    item.highlight ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-cream/80 max-w-md font-light mb-4">
                    {item.tagline}
                  </p>

                  <a
                    href="#menu"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-orange group-hover:text-white transition-colors"
                  >
                    <span>View in Menu</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-orange/40 rounded-3xl transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
