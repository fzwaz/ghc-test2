import React from 'react';
import { ArrowUpRight, ShieldCheck, Activity, Layers } from 'lucide-react';
import { HudCorners } from '../common/HudCorners';

interface HeroProps {
  onOpenMandate: (pillar?: string) => void;
  onNavigateSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMandate, onNavigateSolutions }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-obsidian-950">
      
      {/* Ambient background glow and grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-brand/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-72 h-72 bg-brand/5 blur-[90px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand/30 bg-obsidian-900/90 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(170,209,213,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-brand animate-radar" />
                <span className="relative h-2 w-2 rounded-full bg-brand shadow-[0_0_8px_#aad1d5]" />
              </span>
              <span className="font-mono text-xs text-brand font-medium tracking-wider uppercase">
                Partner-Led Growth & Capital Advisory
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-6.5xl font-medium tracking-tight text-white leading-[1.06]">
                Capital, <br className="hidden sm:inline" />
                <span className="text-gradient-teal font-bold">engineered</span>
                <span className="text-white/30"> — </span>
                <br />
                not brokered.
              </h1>
            </div>

            {/* Strategic Tagline */}
            <p className="max-w-xl text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              GHC Growth Lab helps ambitious companies turn high-velocity growth plans into investable, scalable, market-leading businesses. We sit at the intersection of <span className="text-white font-medium">private capital advisory</span>, <span className="text-white font-medium">strategy consulting</span>, and <span className="text-white font-medium">hands-on CFO execution</span>.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenMandate()}
                className="group px-7 py-3.5 rounded-lg bg-brand text-obsidian-950 font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-brand-light hover:shadow-[0_0_35px_rgba(170,209,213,0.5)] active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Start a Mandate</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onNavigateSolutions}
                className="px-6 py-3.5 rounded-lg border border-brand/30 bg-obsidian-900/80 text-slate-200 hover:text-white hover:border-brand hover:bg-obsidian-850 font-mono text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Solutions Subpage</span>
                <span className="text-brand">→</span>
              </button>
            </div>

            {/* Quick Micro Proof Point */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand" />
                <span>Zero Pitch-Factory Model</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-brand" />
                <span>₹240+ Cr Mandates Advised</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Live Growth & Capital Telemetry Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-obsidian-900/95 border border-brand/25 shadow-[0_0_50px_rgba(170,209,213,0.12)] backdrop-blur-2xl">
              <HudCorners borderColor="rgba(170, 209, 213, 0.5)" size="w-4 h-4" />

              {/* Card Top Indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-brand font-semibold">
                    CAPITAL SYSTEM PROTOCOL
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                  SYS // LIVE 2026
                </span>
              </div>

              {/* Dynamic Telemetry Visualizer */}
              <div className="mt-5 space-y-4">
                
                {/* Visual Graph Bar Simulation */}
                <div className="p-4 rounded-xl bg-obsidian-850/90 border border-brand/15 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">Enterprise Valuation Uplift Simulation</span>
                    <span className="font-mono text-brand font-bold">+3.8x Target</span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Unstructured Inbound Offer</span>
                        <span className="font-mono">₹22 Cr Benchmark</span>
                      </div>
                      <div className="w-full h-1.5 bg-obsidian-950 rounded-full overflow-hidden">
                        <div className="w-[32%] h-full bg-slate-600 rounded-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-brand font-medium mb-1">
                        <span>GHC Strategic Syndication & Diligence Defense</span>
                        <span className="font-mono text-brand font-bold">₹84 Cr Underwritten</span>
                      </div>
                      <div className="w-full h-2 bg-obsidian-950 rounded-full overflow-hidden">
                        <div className="w-[92%] h-full bg-gradient-to-r from-brand/60 via-brand to-brand-light rounded-full shadow-[0_0_12px_#aad1d5]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Pillars Mini Matrix */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-lg bg-obsidian-850/60 border border-white/5 hover:border-brand/30 transition-all">
                    <div className="text-[10px] font-mono text-brand">01 // BUILD</div>
                    <div className="text-xs font-semibold text-white mt-0.5">Cap Table Clean-up</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">100% Diligence Ready</div>
                  </div>

                  <div className="p-3 rounded-lg bg-obsidian-850/60 border border-white/5 hover:border-brand/30 transition-all">
                    <div className="text-[10px] font-mono text-brand">02 // GROW</div>
                    <div className="text-xs font-semibold text-white mt-0.5">Strategic Virtual CFO</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">+32% Margin Expansion</div>
                  </div>

                  <div className="p-3 rounded-lg bg-obsidian-850/60 border border-white/5 hover:border-brand/30 transition-all">
                    <div className="text-[10px] font-mono text-brand">03 // RAISE</div>
                    <div className="text-xs font-semibold text-white mt-0.5">Institutional Equity</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">90-Day Execution Engine</div>
                  </div>

                  <div className="p-3 rounded-lg bg-obsidian-850/60 border border-white/5 hover:border-brand/30 transition-all">
                    <div className="text-[10px] font-mono text-brand">04 // SCALE</div>
                    <div className="text-xs font-semibold text-white mt-0.5">SME IPO & Buyout</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Public Market Liquidity</div>
                  </div>
                </div>

                {/* Direct Action Link in Card */}
                <div 
                  onClick={() => onOpenMandate()}
                  className="p-3.5 rounded-xl bg-brand/10 border border-brand/30 hover:bg-brand/20 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-brand text-obsidian-950">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-white">Direct Mandate Scoping</div>
                      <div className="text-slate-400 text-[11px]">Strict NDA Bilateral Dispatch</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brand" />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
