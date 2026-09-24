import React from 'react';
import { X, ArrowRight, CheckCircle, ShieldCheck, Clock, Layers } from 'lucide-react';
import { CaseStudy } from '../../types';
import { HudCorners } from './HudCorners';

interface CaseStudyDrawerProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenMandate: (pillar: string) => void;
}

export const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({ caseStudy, onClose, onOpenMandate }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-obsidian-900 border border-brand/20 rounded-xl shadow-[0_0_60px_rgba(170,209,213,0.12)] overflow-hidden flex flex-col">
        <HudCorners borderColor="rgba(170, 209, 213, 0.45)" size="w-4 h-4" />

        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand/10 bg-obsidian-950/70 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-brand/10 text-brand font-mono text-[11px] uppercase tracking-wider font-semibold border border-brand/20">
              Verified Mandate Brief // {caseStudy.sector}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-brand hover:bg-brand/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-2 font-mono">
              <span className="flex items-center gap-1"><Layers className="w-3.5 h-3.5 text-brand" /> {caseStudy.dealType}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand" /> {caseStudy.timeline}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
              {caseStudy.title}
            </h2>
            <p className="text-slate-300 text-sm mt-1.5">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* Key Outcome Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-obsidian-850/80 border border-brand/15 relative overflow-hidden">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient-teal">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-white mt-1">{m.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{m.context}</div>
              </div>
            ))}
          </div>

          {/* Structured Storytelling Brief */}
          <div className="space-y-4 text-sm leading-relaxed">
            {/* 1. The Challenge */}
            <div className="p-4 rounded-lg bg-obsidian-850/40 border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                The Challenge
              </div>
              <p className="text-slate-300">{caseStudy.challenge}</p>
            </div>

            {/* 2. The Situation */}
            <div className="p-4 rounded-lg bg-obsidian-850/40 border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                The Bottleneck Situation
              </div>
              <p className="text-slate-300">{caseStudy.situation}</p>
            </div>

            {/* 3. GHC Intervention */}
            <div className="p-4 rounded-lg bg-brand/5 border border-brand/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-brand">
                <ShieldCheck className="w-4 h-4 text-brand" />
                GHC Strategic Intervention
              </div>
              <ul className="space-y-2 text-slate-200">
                {caseStudy.ghcIntervention.map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Verified Outcome */}
            <div className="p-4 rounded-lg bg-obsidian-850/60 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Verified Outcome
              </div>
              <p className="text-slate-200 font-medium">{caseStudy.outcome}</p>
            </div>

            {/* Founder Testimonial if present */}
            {caseStudy.testimonial && (
              <div className="p-5 rounded-lg border border-brand/20 bg-gradient-to-r from-brand/10 to-transparent">
                <p className="italic text-slate-200 text-sm">
                  "{caseStudy.testimonial.quote}"
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white">{caseStudy.testimonial.author}</span>
                    <span className="text-slate-400 block">{caseStudy.testimonial.role}</span>
                  </div>
                  <span className="text-brand font-mono text-[10px] tracking-widest uppercase">
                    CONFIDENTIAL ADVISORY CLIENT
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need a similar growth or capital architecture engineered for your firm?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenMandate(caseStudy.pillar);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-brand text-obsidian-950 font-semibold text-sm hover:bg-brand-light transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(170,209,213,0.3)]"
            >
              Discuss Similar Mandate <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
