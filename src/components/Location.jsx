import React, { useState } from 'react';
import { MapPin, Phone, Navigation, Copy, Check, ExternalLink, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Location() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="location" className="relative py-28 lg:py-36 bg-cream text-dark overflow-hidden">
      {/* Background Subtle Typography */}
      <div className="absolute top-10 left-10 select-none pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="text-[20vw] font-serif font-black tracking-tight leading-none text-dark">
          VISIT
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-brand-orange" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-orange uppercase">
              LOCATION &amp; DIRECTIONS
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-dark mb-4">
            Come Hungry. Leave Happy.
          </h2>
          <p className="text-base sm:text-lg text-darktext/80 font-normal leading-relaxed">
            Conveniently situated in Mithapur, Patna. Find your way to hearty flavours, warm greetings, and unforgettable moments.
          </p>
        </div>

        {/* Split Layout: Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Business Information Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Main Details Card */}
            <div className="p-8 rounded-3xl bg-white border border-dark/10 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Restaurant Location
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark mt-1">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              {/* Exact Address Block */}
              <div className="flex items-start gap-4 pt-2">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-dark">
                    Official Address
                  </h4>
                  <p className="text-sm font-medium text-darktext mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  
                  {/* Copy Address Button */}
                  <button
                    onClick={copyAddress}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:text-brand-red transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-600" />
                        <span className="text-emerald-600">Address copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy full address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-4 pt-4 border-t border-dark/10">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-dark">
                    Phone &amp; Inquiries
                  </h4>
                  <p className="text-lg font-bold text-dark font-serif mt-1">
                    {BUSINESS_INFO.phone}
                  </p>
                  <p className="text-xs text-muted-dark mt-0.5">
                    Direct call for table reservations &amp; takeaway
                  </p>
                </div>
              </div>

              {/* Landmark Guide */}
              <div className="flex items-start gap-4 pt-4 border-t border-dark/10">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center text-dark shrink-0 mt-1">
                  <Compass size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-dark">
                    Key Landmark
                  </h4>
                  <p className="text-sm text-darktext mt-1">
                    Near Kali Mandir Gaudiya Math, Gandhi Path, Jakkanpur, Mithapur.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons: Call Now & Get Directions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call Now */}
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-brand-orange hover:bg-brand-red text-white font-semibold text-sm shadow-xl shadow-brand-orange/30 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <Phone size={18} />
                <span>CALL NOW</span>
              </a>

              {/* Get Directions */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-dark hover:bg-dark-surface text-cream font-semibold text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <Navigation size={18} className="text-brand-gold" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map Frame & Directions Visual */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-dark">
              {/* Embedded Google Maps iFrame */}
              <iframe
                title="Happy Hours Location Map"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                className="w-full h-full min-h-[420px] border-0 filter contrast-[1.05] grayscale-[15%]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge with Direct Directions Link */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-dark/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white shadow-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-orange uppercase mb-1">
                  <MapPin size={14} />
                  <span>Patna, Bihar 800001</span>
                </div>
                <p className="font-serif font-bold text-base text-cream">
                  Happy Hours Patna
                </p>
                <p className="text-xs text-white/70 mt-0.5 line-clamp-2">
                  Gandhi Path, near Kali Mandir Gaudiya Math, Jakkanpur
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
