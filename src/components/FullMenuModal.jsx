import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Phone, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_DATA } from '../data/menuData';
import { BUSINESS_INFO } from '../data/businessData';

export default function FullMenuModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDietary, setFilterDietary] = useState('all'); // all, veg, non-veg

  if (!isOpen) return null;

  // Flatten all menu items
  const allItems = Object.entries(MENU_DATA).flatMap(([catKey, items]) => {
    const categoryObj = MENU_CATEGORIES.find((c) => c.id === catKey);
    return items.map((item) => ({
      ...item,
      categoryName: categoryObj ? categoryObj.name : catKey,
      categoryId: catKey,
    }));
  });

  const filteredItems = allItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.categoryId === activeCategory;
    const matchesDietary = filterDietary === 'all' || item.dietary === filterDietary;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDietary && matchesSearch;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-dark-surface border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[88vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 bg-dark/60 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-orange mb-1">
                <Sparkles size={14} />
                <span>Happy Hours Complete Catalog</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream">
                Digital Menu Demo
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-muted hover:text-white border border-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Filter & Search Controls */}
          <div className="p-6 border-b border-white/10 bg-dark/30 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search dishes or ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-cream placeholder-muted text-sm focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>

              {/* Dietary Filter Buttons */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 shrink-0">
                {['all', 'veg', 'non-veg'].map((diet) => (
                  <button
                    key={diet}
                    onClick={() => setFilterDietary(diet)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                      filterDietary === diet
                        ? 'bg-brand-orange text-white'
                        : 'text-muted hover:text-cream'
                    }`}
                  >
                    {diet === 'all' ? 'All Diets' : diet}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === 'all'
                    ? 'bg-brand-gold text-dark font-bold shadow-md'
                    : 'bg-white/5 text-muted hover:text-white border border-white/10'
                }`}
              >
                All Categories ({allItems.length})
              </button>
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-brand-gold text-dark font-bold shadow-md'
                      : 'bg-white/5 text-muted hover:text-white border border-white/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items List */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4">
            <div className="p-3.5 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-xs text-cream/90 flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-orange mt-1 shrink-0" />
              <span>
                <strong>Demonstration Note:</strong> Dish names and descriptions shown are illustrative samples designed for preview. Official Happy Hours menu items and current pricing will be connected upon restaurant launch.
              </span>
            </div>

            {filteredItems.length === 0 ? (
              <div className="py-12 text-center text-muted">
                <p>No dishes found matching your search criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {filteredItems.map((dish) => (
                  <div
                    key={dish.id}
                    className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-serif font-bold text-cream text-lg">
                          {dish.name}
                        </h4>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {dish.badge && (
                            <span className="px-2 py-0.5 rounded-md bg-brand-gold/20 text-brand-gold text-[10px] font-semibold uppercase">
                              {dish.badge}
                            </span>
                          )}
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              dish.dietary === 'veg' ? 'bg-emerald-400' : 'bg-red-400'
                            }`}
                            title={dish.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                          />
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-muted">
                      <span className="text-[11px] font-medium text-brand-orange">
                        {dish.categoryName}
                      </span>
                      <span className="italic text-[11px] text-white/50">Chef Recommended</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer with Call Action & Digital Menu Hook */}
          <div className="p-6 border-t border-white/10 bg-dark/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted text-center sm:text-left">
              Questions about ingredients or catering? Call us directly.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-red text-white text-xs font-semibold shadow-lg shadow-brand-orange/30 transition-colors"
              >
                <Phone size={14} />
                <span>Call Restaurant</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-cream text-xs font-medium border border-white/15 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
