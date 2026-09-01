import React from 'react';
import { Phone, MapPin, ArrowUp, Sparkles } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BUSINESS_INFO, NAV_LINKS } from '../data/businessData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#0d0d0d] text-cream border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-orange to-brand-gold flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
                H
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-cream">
                Happy Hours<span className="text-brand-orange">.</span>
              </span>
            </div>
            
            <p className="text-sm text-muted font-light leading-relaxed max-w-sm">
              Where Every Bite Feels Like Happiness. Authentic flavours, welcoming ambience, and great conversations in the heart of Mithapur, Patna.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange text-cream hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={BUSINESS_INFO.phoneTel}
                aria-label="Call Happy Hours"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange text-cream hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300"
              >
                <Phone size={18} />
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Directions"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange text-cream hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted hover:text-cream transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Information Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Visit &amp; Contact
            </h4>
            
            <div className="space-y-3 text-sm text-muted">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Gandhi Path, near Kali Mandir Gaudiya Math, <br />
                  Jakkanpur, Mithapur, <br />
                  Patna, Bihar 800001
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 pt-1">
                <Phone size={16} className="text-brand-orange shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-cream hover:text-brand-orange font-medium transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-2.5">
                <InstagramIcon size={16} className="text-brand-orange shrink-0" />
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-brand-orange transition-colors"
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            <p>© 2026 Happy Hours. All Rights Reserved.</p>
          </div>

          <div className="flex items-center gap-2 text-center">
            <Sparkles size={13} className="text-brand-gold" />
            <span className="italic text-cream/70">Made for great food and happy moments.</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-cream transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
