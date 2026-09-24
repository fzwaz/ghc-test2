import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Lock, ArrowRight } from 'lucide-react';
import { HudCorners } from '../common/HudCorners';

interface ConversionCtaProps {
  onOpenMandate: (pillar?: string) => void;
  onNavigateSolutions: () => void;
}

export const ConversionCta: React.FC<ConversionCtaProps> = ({ onOpenMandate, onNavigateSolutions }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-obsidian-950 overflow-hidden">
      
      {/* Background glow and subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand/10 blur-[140px] rounded-full" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-brand/30 shadow-[0_0_60px_rgba(170,209,213,0.14)] text-center space-y-8">
          <HudCorners borderColor="rgba(170, 209, 213, 0.6)" size="w-5 h-5" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/25 text-brand font-mono text-xs uppercase tracking-widest mx-auto">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Founder-First Capital Architecture
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              Ready to engineer your next <br />
              <span className="text-gradient-teal font-bold">non-dilutive & strategic leap?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you are preparing for a ₹50 Cr+ institutional round, restructuring your cap table, or mapping an SME IPO listing, GHC provides senior partner conviction at every milestone.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenMandate()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand text-obsidian-950 font-bold text-xs tracking-widest uppercase hover:bg-brand-light transition-all duration-300 shadow-[0_0_35px_rgba(170,209,213,0.5)] active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Initiate Partner Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateSolutions}
              className="w-full sm:w-auto px-7 py-4 rounded-xl border border-brand/30 bg-obsidian-850/80 text-white hover:border-brand hover:bg-obsidian-800 text-xs font-mono tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Solutions Subpage</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-brand" />
              <span>Strict Bilateral NDA</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-brand" />
              <span>Partner-Led Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              <span>24h Response Cadence</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
