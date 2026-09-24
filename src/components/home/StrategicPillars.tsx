import React, { useState } from 'react';
import { ArrowUpRight, AlertCircle, ArrowRight, ShieldCheck, Layers, TrendingUp, DollarSign, Building2 } from 'lucide-react';
import { STRATEGIC_PILLARS } from '../../data/pillarsData';
import { StrategicPillarId } from '../../types';
import { HudCorners } from '../common/HudCorners';

interface StrategicPillarsProps {
  onOpenMandate: (pillarId: string) => void;
  onNavigateSolutions: () => void;
}

export const StrategicPillars: React.FC<StrategicPillarsProps> = ({ onOpenMandate, onNavigateSolutions }) => {
  const [activeTab, setActiveTab] = useState<StrategicPillarId>('raise');

  const activePillar = STRATEGIC_PILLARS.find((p) => p.id === activeTab) || STRATEGIC_PILLARS[0];

  const getPillarIcon = (id: StrategicPillarId) => {
    switch (id) {
      case 'build': return Layers;
      case 'grow': return TrendingUp;
      case 'raise': return DollarSign;
      case 'scale': return Building2;
    }
  };

  return (
    <section id="pillars" className="relative py-24 sm:py-32 bg-obsidian-950 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 right-0 w-96 h-96 bg-brand/5 blur-[120px] rounded-full" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              Strategic Architecture
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-5.5xl font-medium tracking-tight text-white">
              Four pillars. <br />
              <span className="text-gradient-teal">One institutional standard.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We reject the fragmented "CA + pitch broker" model. GHC operates an integrated growth architecture tailored for high-conviction founders.
            </p>
            <button
              onClick={onNavigateSolutions}
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-brand hover:text-brand-light uppercase"
            >
              <span>View Full Solutions Subpage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tab Selectors (Horizontal 4 Pillars) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-8 pb-8">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.id);
            const isActive = activeTab === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`relative text-left p-5 sm:p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-obsidian-900 border-brand shadow-[0_0_30px_rgba(170,209,213,0.18)]'
                    : 'bg-obsidian-900/40 border-white/10 hover:border-brand/40 hover:bg-obsidian-900/80'
                }`}
              >
                {isActive && <HudCorners borderColor="rgba(170, 209, 213, 0.6)" size="w-3 h-3" />}
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs uppercase tracking-widest ${isActive ? 'text-brand font-bold' : 'text-slate-400'}`}>
                    {pillar.code} // PILLAR
                  </span>
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-brand text-obsidian-950' : 'bg-white/5 text-brand'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className={isActive ? 'text-brand' : 'text-slate-400'}>
                    {isActive ? 'Active Deep Dive' : 'Explore Framework'}
                  </span>
                  <span className={isActive ? 'text-brand' : 'text-slate-400'}>→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel for the Active Pillar */}
        <div className="relative p-6 sm:p-10 rounded-2xl bg-obsidian-900/90 border border-brand/25 backdrop-blur-2xl shadow-[0_0_50px_rgba(170,209,213,0.1)]">
          <HudCorners borderColor="rgba(170, 209, 213, 0.5)" size="w-4 h-4" />

          {/* Pillar Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-white/10">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-brand/10 text-brand font-mono text-xs uppercase tracking-wider font-semibold border border-brand/20">
                  PILLAR {activePillar.code} · {activePillar.title.toUpperCase()}
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  {activePillar.tags.join(' • ')}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-white tracking-tight">
                {activePillar.subtitle}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activePillar.overview}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {/* Founder Pain vs Strategic Advantage */}
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-red-400 mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  The Founder Risk Point
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activePillar.founderPainPoint}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand/10 border border-brand/25">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-brand mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                  GHC Strategic Advantage
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {activePillar.strategicAdvantage}
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Deliverables Grid */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Institutional Deliverables & Impact Output
              </h4>
              <span className="font-mono text-[11px] text-brand">3 Strategic Modules</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activePillar.deliverables.map((del, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-xl bg-obsidian-850/80 border border-brand/15 hover:border-brand/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-brand font-semibold">MODULE 0{idx + 1}</span>
                      <span className="text-slate-400 font-mono text-[10px]">{del.timeline}</span>
                    </div>

                    <h5 className="font-display text-base font-semibold text-white">
                      {del.title}
                    </h5>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {del.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Key Outputs:</div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {del.keyOutputs.map((out, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-brand mt-1.5 shrink-0" />
                          <span className="text-[11px]">{out}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <span className="inline-block px-2.5 py-1 rounded bg-brand/10 text-brand font-mono text-[10px] font-semibold border border-brand/20">
                        Impact: {del.metricImpact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel Bottom Action */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Need a partner-led mandate for <span className="text-white font-medium">{activePillar.title}</span>? We schedule confidential scoping calls within 24h.
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenMandate(activePillar.id)}
                className="px-6 py-2.5 rounded-lg bg-brand text-obsidian-950 font-semibold text-xs tracking-wider uppercase hover:bg-brand-light transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(170,209,213,0.3)]"
              >
                <span>Engage on {activePillar.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
