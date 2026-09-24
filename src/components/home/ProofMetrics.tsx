import React from 'react';
import { ShieldCheck, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export const ProofMetrics: React.FC = () => {
  const metrics = [
    {
      numeric: '₹240+ Cr',
      label: 'Growth & Capital Advised',
      context: 'Across Equity, Structured Debt & SME IPO mandates',
      icon: TrendingUp,
    },
    {
      numeric: '4.3x',
      label: 'Avg Valuation Multiple Uplift',
      context: 'Achieved through structured diligence defence & buyer mapping',
      icon: ShieldCheck,
    },
    {
      numeric: '90 Days',
      label: 'Avg Mandate to Term Sheet',
      context: 'Discipline-driven competitive deal process with curated funds',
      icon: Clock,
    },
    {
      numeric: '100%',
      label: 'Partner-Led Execution',
      context: 'Every mandate operated directly by seasoned managing partners',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="relative border-y border-brand/15 bg-obsidian-900/80 py-12 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx} 
                className={`pt-6 sm:pt-0 ${idx > 0 ? 'sm:pl-8' : ''} group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      PROOF 0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-brand/60 group-hover:text-brand transition-colors" />
                  </div>
                  <div className="font-display text-3xl sm:text-4xl lg:text-4.5xl font-bold tracking-tight text-white group-hover:text-gradient-teal transition-all">
                    {m.numeric}
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">
                    {m.label}
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {m.context}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
