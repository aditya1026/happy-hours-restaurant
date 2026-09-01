import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BUSINESS_INFO, NAV_LINKS } from '../data/businessData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'experience', 'featured', 'menu', 'gallery', 'location'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-dark/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-6 bg-gradient-to-b from-dark/80 via-dark/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Wordmark */}
            <a
              href="#home"
              className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-orange to-brand-gold flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                H
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-cream group-hover:text-brand-orange transition-colors">
                  Happy Hours<span className="text-brand-orange">.</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-muted font-medium -mt-1">
                  Patna • Food &amp; Moments
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-full ${
                      isActive ? 'text-white' : 'text-cream/80 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-brand-orange/20 border border-brand-orange/40 rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Instagram Icon */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Happy Hours Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-amber-600 hover:to-pink-600 text-cream hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <InstagramIcon size={18} />
              </a>

              {/* Call Now Button */}
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-red text-white text-sm font-semibold tracking-wide shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Phone size={15} className="animate-pulse" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="p-2.5 rounded-full bg-brand-orange text-white"
                aria-label="Call Happy Hours"
              >
                <Phone size={16} />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2.5 rounded-xl bg-white/10 text-cream hover:text-white border border-white/10 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Animated Fullscreen Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-2xl flex flex-col lg:hidden pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-1">
                <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase">
                  Menu Navigation
                </span>
                <nav className="divide-y divide-white/10 mt-3">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                      className="flex items-center justify-between py-4 text-xl font-serif text-cream hover:text-brand-orange transition-colors"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-sans font-normal text-muted">0{idx + 1}</span>
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Mobile Drawer Bottom Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="pt-6 border-t border-white/10 space-y-4"
              >
                <div className="flex items-start gap-3 text-xs text-muted">
                  <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.shortAddress}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-orange text-white font-medium text-sm shadow-lg shadow-brand-orange/30"
                  >
                    <Phone size={15} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-medium text-sm border border-white/10"
                  >
                    <InstagramIcon size={15} />
                    <span>Instagram</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
