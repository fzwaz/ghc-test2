import React from 'react';
import { ArrowUpRight, Mail, MapPin, Globe } from 'lucide-react';
import { HudCorners } from '../common/HudCorners';

interface FooterProps {
  onNavigate: (page: 'home' | 'solutions') => void;
  onOpenMandate: (pillar?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenMandate }) => {
  return (
    <footer className="relative bg-obsidian-950 border-t border-brand/15 pt-16 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand/5 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Box */}
        <div className="relative p-8 sm:p-10 rounded-2xl bg-obsidian-900/90 border border-brand/20 mb-16 shadow-[0_0_40px_rgba(170,209,213,0.08)]">
          <HudCorners borderColor="rgba(170, 209, 213, 0.4)" size="w-4 h-4" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand font-mono text-xs uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                Confidential Partner Advisory
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-white tracking-tight">
                Turn your growth plans into an investable, category-defining enterprise.
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Every GHC mandate is managed directly by seasoned partners who have built, funded, and scaled multi-hundred crore businesses.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => onOpenMandate()}
                className="px-6 py-3.5 rounded-lg bg-brand text-obsidian-950 font-semibold text-xs tracking-widest uppercase hover:bg-brand-light transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(170,209,213,0.35)]"
              >
                <span>Initiate Mandate Discussion</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  onNavigate('solutions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-lg border border-brand/30 bg-obsidian-850 text-slate-200 hover:text-white hover:border-brand text-xs font-mono tracking-wider uppercase transition-all text-center"
              >
                Explore Solutions Architecture →
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-obsidian-850 border border-brand/40 text-brand">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-white tracking-tight">
                GHC <span className="text-brand font-mono text-sm font-normal">GROWTH LAB</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Boutique private capital, strategic finance, and transaction advisory firm for ambitious founders and enterprises. We sit between strategy consultancy, investment banking, and startup growth.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-brand" /> India / Global</span>
              <span>•</span>
              <span className="text-brand">Discreet by Design</span>
            </div>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-brand">
              Strategic Pillars
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onOpenMandate('build')} className="hover:text-brand transition-colors text-left">
                  01 · Build — Cap Table & Corporate Foundations
                </button>
              </li>
              <li>
                <button onClick={() => onOpenMandate('grow')} className="hover:text-brand transition-colors text-left">
                  02 · Grow — Fractional CFO & Financial Modelling
                </button>
              </li>
              <li>
                <button onClick={() => onOpenMandate('raise')} className="hover:text-brand transition-colors text-left">
                  03 · Raise — Institutional Equity & Valuation Defence
                </button>
              </li>
              <li>
                <button onClick={() => onOpenMandate('scale')} className="hover:text-brand transition-colors text-left">
                  04 · Scale — SME IPO & M&A Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions & Practice */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-brand">
              Practice Areas
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-brand transition-colors">Solutions Overview</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-brand transition-colors">Valuation 56(2) Memo</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-brand transition-colors">90-Day Mandate Engine</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-brand transition-colors">SME Listing Protocol</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-brand transition-colors">Founder Engagement</button></li>
            </ul>
          </div>

          {/* Hubs & Direct Channel */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-brand">
              Advisory Network Hubs
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                <span>Mumbai Financial District • Bengaluru Tech Hub</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                <span>Dubai DIFC & Singapore Global Desks</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Mail className="w-3.5 h-3.5 text-brand shrink-0" />
                <span className="font-mono text-brand">mandates@ghcgrowthlab.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} GHC Growth Lab LLP. All Rights Reserved. Private Capital & Strategic Advisory.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Confidentiality Charter</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Regulatory Framework</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Partner Access</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
