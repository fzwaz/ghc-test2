import React from 'react';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { DEAL_SIGNALS } from '../../data/insightsData';
import { HudCorners } from '../common/HudCorners';

interface DealSignalsProps {
  onOpenMandate: (pillar?: string) => void;
}

export const DealSignals: React.FC<DealSignalsProps> = ({ onOpenMandate }) => {
  return (
    <section id="signals" className="relative py-24 sm:py-32 bg-obsidian-900/60 border-t border-brand/15 overflow-hidden">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 right-10 w-72 h-72 bg-brand/5 blur-[100px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5 text-brand" />
              Strategic Intelligence
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Field notes from <br />
              <span className="text-gradient-teal">the deal room.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
            Executive playbooks, valuation methodologies, and term-sheet negotiation intelligence written by GHC managing partners.
          </p>
        </div>

        {/* Signals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {DEAL_SIGNALS.map((signal) => (
            <div
              key={signal.id}
              className="group relative p-6 sm:p-8 rounded-2xl bg-obsidian-950 border border-brand/15 hover:border-brand/40 transition-all duration-300 shadow-[0_0_25px_rgba(170,209,213,0.05)] hover:shadow-[0_0_35px_rgba(170,209,213,0.12)] flex flex-col justify-between"
            >
              <HudCorners borderColor="rgba(170, 209, 213, 0.35)" size="w-3 h-3" />

              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5 text-[11px] font-mono text-slate-400">
                  <span className="text-brand font-semibold">{signal.tag}</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{signal.readTime}</span>
                  </div>
                </div>

                <div className="pt-5 space-y-3">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    {signal.category}
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-semibold text-white tracking-tight group-hover:text-brand transition-colors leading-snug">
                    {signal.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {signal.summary}
                  </p>

                  <div className="pt-3 space-y-1.5 border-t border-white/5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-brand">Key Takeaways:</div>
                    {signal.keyTakeaways.map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-brand mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenMandate()}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand hover:text-brand-light uppercase tracking-wider font-semibold"
                >
                  <span>Request Full Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <span className="text-[10px] font-mono text-slate-400">{signal.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
