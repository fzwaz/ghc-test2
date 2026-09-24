import React, { useState } from 'react';
import { ArrowUpRight, Shield, Eye } from 'lucide-react';
import { CASE_STUDIES } from '../../data/caseStudiesData';
import { CaseStudy } from '../../types';
import { HudCorners } from '../common/HudCorners';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenMandate: (pillar?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy, onOpenMandate }) => {
  const [filter, setFilter] = useState<'all' | 'raise' | 'grow' | 'scale'>('all');

  const filteredStudies = filter === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter((c) => c.pillar === filter);

  return (
    <section id="case-studies" className="relative py-24 sm:py-32 bg-obsidian-950 overflow-hidden">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-0 w-80 h-80 bg-brand/5 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand font-semibold mb-2">
              <Shield className="w-3.5 h-3.5 text-brand" />
              Verified Deal Outcomes
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white">
              High-stakes work. <br />
              <span className="text-gradient-teal">Discreet by design.</span>
            </h2>
          </div>

          <div className="space-y-3">
            <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
              We do not publish deal theatre. Below is a verified cross-section of how GHC structures capital, defends valuations, and closes complex transactions.
            </p>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { id: 'all', label: 'All Mandates' },
                { id: 'raise', label: 'Fundraising' },
                { id: 'grow', label: 'Strategic CFO' },
                { id: 'scale', label: 'IPO & M&A' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-3 py-1 text-xs font-mono rounded-md border transition-all ${
                    filter === tab.id
                      ? 'bg-brand/15 border-brand text-brand font-semibold'
                      : 'bg-obsidian-900 border-white/10 text-slate-400 hover:border-white/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="group relative p-6 sm:p-8 rounded-2xl bg-obsidian-900/80 border border-brand/15 hover:border-brand/40 transition-all duration-300 shadow-[0_0_30px_rgba(170,209,213,0.06)] hover:shadow-[0_0_40px_rgba(170,209,213,0.12)] flex flex-col justify-between"
            >
              <HudCorners borderColor="rgba(170, 209, 213, 0.4)" size="w-3.5 h-3.5" />

              <div>
                {/* Top Badge & Metric */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/5">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand block mb-1">
                      {study.sector}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {study.dealType}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-gradient-teal">
                      {study.heroMetric}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {study.heroLabel}
                    </div>
                  </div>
                </div>

                {/* Title & Challenge Preview */}
                <div className="pt-6 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight group-hover:text-brand transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                    {study.subtitle}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {study.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-obsidian-850/90 border border-white/5">
                        <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                        <div className="text-sm font-semibold text-white mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onSelectCaseStudy(study)}
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-brand hover:text-brand-light uppercase font-semibold"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Mandate Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <span className="text-[11px] font-mono text-slate-400">
                  {study.timeline}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-xl bg-obsidian-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Have a specialized transaction or growth round requiring partner-led underwriting?
          </div>
          <button
            onClick={() => onOpenMandate()}
            className="px-5 py-2.5 rounded-lg bg-brand/10 border border-brand/30 text-brand text-xs font-mono uppercase tracking-wider hover:bg-brand/20 transition-all shrink-0"
          >
            Start Confidential Mandate Scoping →
          </button>
        </div>

      </div>
    </section>
  );
};
