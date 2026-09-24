import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { STRATEGIC_PILLARS } from '../../data/pillarsData';
import { StrategicPillarId } from '../../types';
import { HudCorners } from '../common/HudCorners';

interface SolutionsPageProps {
  onOpenMandate: (pillar?: string) => void;
  onNavigateHome: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenMandate, onNavigateHome }) => {
  const [selectedPillar, setSelectedPillar] = useState<StrategicPillarId>('build');

  const activePillarData = STRATEGIC_PILLARS.find((p) => p.id === selectedPillar) || STRATEGIC_PILLARS[0];

  const executionSteps = [
    {
      num: '01',
      title: 'Diagnose & Underwrite',
      subtitle: 'Days 1 - 15',
      desc: 'Deep audit of existing cap table, Ind-AS / GAAP accounting, revenue recognition, tax exposure, and customer cohort dynamics to uncover hidden valuation drivers and eliminate diligence traps.',
      outputs: ['Valuation Baseline Matrix', 'Cap Table Waterfall Clean-up', 'Red-Flag Remediation Memo']
    },
    {
      num: '02',
      title: 'Architect Narrative & Model',
      subtitle: 'Days 16 - 35',
      desc: 'Constructing dynamic 3-statement institutional financial model with scenario sensitivity, alongside a compelling Confidential Information Memorandum (CIM) and curated Virtual Data Room (VDR).',
      outputs: ['5-Year Cohort Financial Engine', 'Institutional CIM Deck', 'VDR Diligence Index']
    },
    {
      num: '03',
      title: 'Run Competitive Process',
      subtitle: 'Days 36 - 65',
      desc: 'Simultaneous confidential syndication across curated Tier-1 VC/PE funds, strategic acquirers, and sovereign family offices to create competitive deal tension and prevent partner fatigue.',
      outputs: ['Qualified Investor Syndicate', 'Management Presentation Cadence', 'Multi-Bid Term Sheet Generation']
    },
    {
      num: '04',
      title: 'Negotiate & Close Hard',
      subtitle: 'Days 66 - 90',
      desc: 'Line-by-line negotiation of Term Sheets, SHA, SSA, liquidation preferences, affirmative voting items, and founder vesting, managing CP clearances through escrow wire execution.',
      outputs: ['De-risked Definitive Agreements', 'Zero Toxic Covenants', 'Fund Wire & Escrow Release']
    }
  ];

  const engagementModels = [
    {
      id: 'transaction',
      title: 'Transaction & Capital Mandate',
      tag: 'EQUITY / DEBT / M&A',
      desc: 'Full-cycle mandate execution for institutional capital raises (₹15 Cr to ₹150 Cr+) or strategic sell-side/buy-side M&A.',
      features: [
        'Curated syndication to domestic & international funds',
        'Defensive valuation modeling & 56(2) defense',
        'Virtual Data Room (VDR) & CIM preparation',
        'Term sheet & SHA/SSA hard negotiation',
        'Aligned retainer + success fee structure'
      ],
      idealFor: 'Founders raising Series A/B/Growth rounds or seeking strategic acquisition liquidity.'
    },
    {
      id: 'cfo',
      title: 'Strategic Virtual CFO Retainer',
      tag: 'FRACTIONAL CFO & ADVISORY',
      desc: 'Embedded senior finance leadership functioning as your Chief Financial Officer and board-level strategic counsel.',
      features: [
        'Monthly board packs & institutional MIS generation',
        'Unit economics & SKU profitability optimization',
        'Cash runway management & treasury governance',
        'Tax structuring & statutory compliance oversight',
        'Fixed monthly partner retainer'
      ],
      idealFor: 'High-growth companies from ₹5 Cr - ₹50 Cr ARR needing Wall Street-grade financial rigor.'
    },
    {
      id: 'ipo',
      title: 'SME IPO & Listing Architecture',
      tag: 'BSE SME / NSE EMERGE',
      desc: 'Turnkey advisory preparing profitable mid-market enterprises for public listing and multi-fold institutional subscription.',
      features: [
        'IPO timing & valuation feasibility diagnostic',
        'Ind-AS financial restatement management',
        'Merchant banker selection & syndicate curation',
        'DRHP filing vetting & statutory committee setup',
        'Milestone-phased capital markets mandate'
      ],
      idealFor: 'Profitable enterprises with ₹25 Cr+ revenue looking for permanent equity currency.'
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 pt-28 pb-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand/10 blur-[150px] rounded-full" />

      {/* Subpage Hero */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <button onClick={onNavigateHome} className="hover:text-brand transition-colors">Home</button>
          <span>/</span>
          <span className="text-brand">Solutions & Capital Architecture</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-brand/15">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/25 text-brand font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Strategic Practice Architecture
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
              Capital architecture <br />
              <span className="text-gradient-teal font-bold">engineered for enterprise value.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              We provide ambitious founders with institutional-grade financial strategy, cap-table engineering, fundraising execution, and capital-markets readiness — without the corporate bloat of legacy advisory firms.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button
              onClick={() => onOpenMandate()}
              className="px-6 py-3.5 rounded-lg bg-brand text-obsidian-950 font-bold text-xs tracking-widest uppercase hover:bg-brand-light transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(170,209,213,0.4)]"
            >
              <span>Initiate Solutions Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-[11px] font-mono text-slate-400 text-center lg:text-right">
              Direct access to Senior Partners • 24h response
            </div>
          </div>
        </div>

      </section>

      {/* Interactive Pillar Architecture Deep Dive */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">
            Section 01 // Four Pillars Deep Dive
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-medium text-white mt-1">
            Modular Intervention Frameworks
          </h2>
        </div>

        {/* 4 Pillar Selection Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {STRATEGIC_PILLARS.map((p) => {
            const isSelected = selectedPillar === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(p.id)}
                className={`p-5 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? 'bg-obsidian-900 border-brand shadow-[0_0_25px_rgba(170,209,213,0.2)]'
                    : 'bg-obsidian-900/40 border-white/10 hover:border-white/20 text-slate-400'
                }`}
              >
                {isSelected && <HudCorners borderColor="rgba(170, 209, 213, 0.5)" size="w-3 h-3" />}
                <div className="font-mono text-xs text-brand font-bold">{p.code} // PILLAR</div>
                <div className="text-lg font-display font-semibold text-white mt-1">{p.title}</div>
                <div className="text-xs text-slate-400 mt-1 line-clamp-1">{p.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Full Detail Display */}
        <div className="p-6 sm:p-10 rounded-2xl bg-obsidian-900/95 border border-brand/25 relative shadow-[0_0_40px_rgba(170,209,213,0.08)]">
          <HudCorners borderColor="rgba(170, 209, 213, 0.5)" size="w-4 h-4" />

          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <span className="font-mono text-xs text-brand uppercase tracking-widest">
                Comprehensive Scope // Pillar {activePillarData.code}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mt-1">
                {activePillarData.title}: {activePillarData.subtitle}
              </h3>
            </div>

            <button
              onClick={() => onOpenMandate(activePillarData.id)}
              className="px-5 py-2.5 rounded-lg bg-brand text-obsidian-950 font-semibold text-xs tracking-wider uppercase hover:bg-brand-light transition-all flex items-center gap-2 self-start md:self-auto shadow-[0_0_20px_rgba(170,209,213,0.3)]"
            >
              <span>Scope {activePillarData.title} Mandate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {activePillarData.deliverables.map((del, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-obsidian-850 border border-brand/15 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-brand font-semibold">MODULE 0{idx + 1}</span>
                    <span className="font-mono text-slate-400 text-[10px]">{del.timeline}</span>
                  </div>

                  <h4 className="text-lg font-display font-semibold text-white">
                    {del.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {del.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Core Deliverable Outputs:</div>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {del.keyOutputs.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <span className="inline-block px-2.5 py-1 rounded bg-brand/10 text-brand font-mono text-[10px] font-semibold border border-brand/20">
                      Measurable Impact: {del.metricImpact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The 90-Day Mandate Execution Protocol */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-obsidian-900/80 border border-brand/20 relative shadow-[0_0_50px_rgba(170,209,213,0.08)]">
          <HudCorners borderColor="rgba(170, 209, 213, 0.4)" size="w-4 h-4" />

          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-brand font-semibold mb-2">
              Section 02 // Execution Discipline
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white">
              The 90-Day Partner-Led Mandate Protocol
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              We execute tight, competitive, information-controlled processes designed to maximize enterprise valuation while eliminating diligence leakage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executionSteps.map((step) => (
              <div 
                key={step.num}
                className="p-6 rounded-2xl bg-obsidian-850/90 border border-white/5 hover:border-brand/30 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-gradient-teal">{step.num}</span>
                    <span className="font-mono text-[10px] text-slate-400 px-2 py-0.5 rounded bg-white/5">{step.subtitle}</span>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-brand">Outputs:</div>
                  {step.outputs.map((out, i) => (
                    <div key={i} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-brand" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Founder-Aligned Engagement Models */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-brand font-semibold mb-2">
            Section 03 // Commercial Alignment
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white">
            Founder-Aligned Advisory Models
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Transparent commercial structures designed so our economic incentives are 100% aligned with your equity upside.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((model) => (
            <div
              key={model.id}
              className="p-8 rounded-2xl bg-obsidian-900 border border-brand/20 hover:border-brand/40 transition-all flex flex-col justify-between space-y-6 shadow-[0_0_30px_rgba(170,209,213,0.06)]"
            >
              <div className="space-y-4">
                <div className="inline-block px-2.5 py-1 rounded bg-brand/10 border border-brand/20 text-brand font-mono text-[10px] font-semibold uppercase tracking-wider">
                  {model.tag}
                </div>

                <h3 className="text-xl font-display font-semibold text-white">
                  {model.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {model.desc}
                </p>

                <div className="pt-2 border-t border-white/5 space-y-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Included Engagements:</div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {model.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="p-3 rounded-lg bg-obsidian-850 text-[11px] text-slate-400">
                  <span className="text-slate-200 font-semibold block mb-0.5">Ideal Profile:</span>
                  {model.idealFor}
                </div>

                <button
                  onClick={() => onOpenMandate(model.id)}
                  className="w-full py-3 rounded-lg bg-brand text-obsidian-950 font-bold text-xs tracking-wider uppercase hover:bg-brand-light transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(170,209,213,0.3)]"
                >
                  <span>Structure This Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subpage CTA */}
      <section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-obsidian-900 border border-brand/30 text-center space-y-6 shadow-[0_0_50px_rgba(170,209,213,0.12)]">
          <HudCorners borderColor="rgba(170, 209, 213, 0.5)" size="w-4 h-4" />

          <h3 className="text-2xl sm:text-4xl font-display font-medium text-white">
            Discuss your company's growth architecture with a Managing Partner.
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            We review business models, cap tables, and capital requirements under strict confidentiality.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenMandate()}
              className="px-8 py-3.5 rounded-lg bg-brand text-obsidian-950 font-bold text-xs tracking-widest uppercase hover:bg-brand-light transition-all shadow-[0_0_25px_rgba(170,209,213,0.4)]"
            >
              Start Confidential Discussion →
            </button>
            <button
              onClick={onNavigateHome}
              className="px-6 py-3.5 rounded-lg border border-white/20 bg-obsidian-850 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              ← Back to Overview
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
