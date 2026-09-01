import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Utensils, Info } from 'lucide-react';
import { MENU_CATEGORIES, MENU_DATA } from '../data/menuData';
import FullMenuModal from './FullMenuModal';

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState('starters');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentDishes = MENU_DATA[activeTab] || [];

  return (
    <>
      <section id="menu" className="relative py-28 lg:py-36 bg-dark text-cream overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-brand-orange uppercase mb-4">
              <Utensils size={13} />
              <span>HANDCRAFTED FLAVOURS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream mb-4">
              Explore Our Menu.
            </h2>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              Every recipe is prepared with care, blending fresh wholesome ingredients with bold, crowd-pleasing taste.
            </p>

            {/* Demo Notice Disclaimer */}
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/50 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/5">
              <Info size={12} className="text-brand-gold shrink-0" />
              <span>Demonstration menu preview • Official dishes &amp; pricing updated on launch</span>
            </div>
          </div>

          {/* Animated Category Tabs */}
          <div className="flex justify-center mb-14">
            <div className="flex flex-wrap justify-center items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md max-w-3xl">
              {MENU_CATEGORIES.map((category) => {
                const isActive = activeTab === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`relative px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 focus:outline-none ${
                      isActive ? 'text-dark font-bold' : 'text-cream/70 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeMenuTab"
                        className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full shadow-lg shadow-brand-orange/20"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dishes Grid with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
            >
              {currentDishes.map((dish, idx) => (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-dark-surface/80 hover:bg-dark-elevated border border-white/10 hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Title & Dietary Indicator */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream group-hover:text-brand-orange transition-colors">
                        {dish.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 shrink-0">
                        {dish.badge && (
                          <span className="px-2.5 py-0.5 rounded-full bg-brand-gold/15 text-brand-gold text-[10px] font-bold uppercase tracking-wider">
                            {dish.badge}
                          </span>
                        )}
                        <span
                          className={`w-3 h-3 rounded-full border border-white/20 ${
                            dish.dietary === 'veg' ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                          title={dish.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                        />
                      </div>
                    </div>

                    {/* Dish Description */}
                    <p className="text-sm text-muted font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                    <span>Freshly Prepared to Order</span>
                    <span className="text-brand-orange/80 group-hover:text-brand-orange font-medium">Chef's Recipe</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA: View Full Menu */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-cream hover:text-white border border-white/20 hover:border-brand-orange text-sm font-semibold tracking-wide transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 group"
            >
              <Sparkles size={16} className="text-brand-orange" />
              <span>View Full Menu &amp; Categories</span>
              <ArrowRight
                size={16}
                className="text-brand-gold group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
            <p className="text-xs text-muted mt-3">
              Click to browse our complete digital menu collection
            </p>
          </div>

        </div>
      </section>

      {/* Full Interactive Menu Modal */}
      <FullMenuModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
