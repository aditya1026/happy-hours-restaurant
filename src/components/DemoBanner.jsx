import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-brand-orange/90 via-dark-surface to-dark border-b border-white/10 text-cream px-4 py-2 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <Sparkles size={14} className="text-brand-gold shrink-0" />
          <span>
            <strong className="font-semibold text-brand-gold">Demo Presentation:</strong> Custom-tailored concept for <strong>{BUSINESS_INFO.name}</strong>, Patna. All business details &amp; links are verified live.
          </span>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors shrink-0"
          aria-label="Dismiss banner"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
