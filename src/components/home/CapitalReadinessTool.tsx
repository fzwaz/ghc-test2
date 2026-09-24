import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { HudCorners } from '../common/HudCorners';

interface CapitalReadinessToolProps {
  onOpenMandateWithMetrics: (summary: string) => void;
}

export const CapitalReadinessTool: React.FC<CapitalReadinessToolProps> = ({ onOpenMandateWithMetrics }) => {
  const [revenue, setRevenue] = useState<number>(15); // in ₹ Cr
  const [growthRate, setGrowthRate] = useState<number>(85); // in % YoY
  const [margin, setMargin] = useState<number>(65); // in % Gross Margin
  const [objective, setObjective] = useState<'equity' | 'debt' | 'ipo' | 'ma'>('equity');

  // Realistic strategic valuation & capital sizing calculations
  const calculateMetrics = () => {
    let baseMultiple = 3.5;
    if (objective === 'equity') baseMultiple = 5.0;
    if (objective === 'ipo') baseMultiple = 6.2;
    if (objective === 'ma') baseMultiple = 4.8;
    if (objective === 'debt') baseMultiple = 2.5;

    // Growth multiplier
    const growthFactor = 1 + (growthRate / 100) * 0.8;
    // Margin multiplier
    const marginFactor = 0.7 + (margin / 100) * 0.5;

    const estimatedMultiple = (baseMultiple * growthFactor * marginFactor).toFixed(1);
    const lowValuation = (revenue * parseFloat(estimatedMultiple) * 0.85).toFixed(1);
    const highValuation = (revenue * parseFloat(estimatedMultiple) * 1.2).toFixed(1);

    // Capital recommendation
    let targetCapitalLow = (revenue * 0.6).toFixed(1);
    let targetCapitalHigh = (revenue * 1.5).toFixed(1);
    let dilutionEstimate = '12% - 18%';

    if (objective === 'ipo') {
      targetCapitalLow = (revenue * 1.2).toFixed(1);
      targetCapitalHigh = (revenue * 2.5).toFixed(1);
      dilutionEstimate = '15% - 25% (Public Listing)';
    } else if (objective === 'debt') {
      targetCapitalLow = (revenue * 0.3).toFixed(1);
      targetCapitalHigh = (revenue * 0.8).toFixed(1);
      dilutionEstimate = '0% - 2% (Warrant Coverage)';
    } else if (objective === 'ma') {
      targetCapitalLow = lowValuation;
      targetCapitalHigh = highValuation;
      dilutionEstimate = '100% (Full or Majority Buyout)';
    }

    return {
      multiple: estimatedMultiple,
      valRange: `₹${lowValuation} Cr - ₹${highValuation} Cr`,
      targetCapital: `₹${targetCapitalLow} Cr - ₹${targetCapitalHigh} Cr`,
      dilution: dilutionEstimate,
      readinessScore: Math.min(96, Math.floor(65 + growthRate * 0.15 + margin * 0.2)),
    };
  };

  const results = calculateMetrics();

  const handleLaunchMandate = () => {
    const summary = `Revenue: ₹${revenue} Cr, Growth: ${growthRate}%, Margins: ${margin}%, Goal: ${objective.toUpperCase()}, Est Valuation: ${results.valRange}`;
    onOpenMandateWithMetrics(summary);
  };

  return (
    <section id="readiness-tool" className="relative py-24 sm:py-32 bg-obsidian-900 border-y border-brand/15 overflow-hidden">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-brand/5 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5 text-brand" />
            Strategic Diagnostic Engine
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Growth & Capital Readiness Sizing Matrix
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
            Simulate defensible institutional valuation multiples, optimal capital structuring, and equity dilution protection based on your core operating metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-obsidian-950/80 border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
                Operating Parameters
              </span>
              <span className="font-mono text-[11px] text-brand">Real-time Underwriting</span>
            </div>

            {/* Strategic Objective Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Strategic Mandate Objective
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'equity', label: 'Series A/B Equity' },
                  { id: 'debt', label: 'Non-Dilutive Debt' },
                  { id: 'ipo', label: 'SME IPO Listing' },
                  { id: 'ma', label: 'Strategic M&A Exit' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setObjective(item.id as any)}
                    className={`p-2.5 text-xs font-medium rounded-lg border transition-all ${
                      objective === item.id
                        ? 'bg-brand/15 border-brand text-brand shadow-[0_0_15px_rgba(170,209,213,0.15)] font-semibold'
                        : 'bg-obsidian-900 border-white/10 text-slate-400 hover:border-white/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Revenue Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-slate-300 uppercase">Annual Revenue (ARR / Run-rate)</span>
                <span className="font-mono text-base font-bold text-white">₹{revenue} Cr</span>
              </div>
              <input
                type="range"
                min="2"
                max="100"
                step="1"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2 bg-obsidian-850 rounded-lg appearance-none cursor-pointer accent-brand"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>₹2 Cr</span>
                <span>₹50 Cr</span>
                <span>₹100 Cr+</span>
              </div>
            </div>

            {/* Growth Rate Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-slate-300 uppercase">YoY Revenue Growth Rate</span>
                <span className="font-mono text-base font-bold text-brand">{growthRate}% YoY</span>
              </div>
              <input
                type="range"
                min="15"
                max="250"
                step="5"
                value={growthRate}
                onChange={(e) => setGrowthRate(Number(e.target.value))}
                className="w-full h-2 bg-obsidian-850 rounded-lg appearance-none cursor-pointer accent-brand"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>15%</span>
                <span>100%</span>
                <span>250%+</span>
              </div>
            </div>

            {/* Gross Margin Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-slate-300 uppercase">Gross Margin Health</span>
                <span className="font-mono text-base font-bold text-white">{margin}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="90"
                step="5"
                value={margin}
                onChange={(e) => setMargin(Number(e.target.value))}
                className="w-full h-2 bg-obsidian-850 rounded-lg appearance-none cursor-pointer accent-brand"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>20% (Low)</span>
                <span>60% (Healthy)</span>
                <span>90% (Pure Software/IP)</span>
              </div>
            </div>

          </div>

          {/* Real-time Output Architecture Card */}
          <div className="lg:col-span-6 relative p-6 sm:p-8 rounded-2xl bg-obsidian-950 border border-brand/30 shadow-[0_0_50px_rgba(170,209,213,0.15)] space-y-6">
            <HudCorners borderColor="rgba(170, 209, 213, 0.6)" size="w-4 h-4" />

            <div className="flex items-center justify-between pb-4 border-b border-brand/15">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-semibold">
                  DIAGNOSTIC SYNTHESIS // CONFIDENTIAL
                </span>
                <h3 className="text-xl font-display font-medium text-white mt-0.5">
                  Institutional Capital Sizing
                </h3>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-400">Readiness Score</div>
                <div className="font-mono text-lg font-bold text-brand">{results.readinessScore}/100</div>
              </div>
            </div>

            {/* Output Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-obsidian-900 border border-brand/20">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Defensible Valuation Range</div>
                <div className="text-2xl font-display font-bold text-gradient-teal mt-1">
                  {results.valRange}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  ~{results.multiple}x revenue multiple
                </div>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-900 border border-brand/20">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Recommended Capital Sizing</div>
                <div className="text-2xl font-display font-bold text-white mt-1">
                  {results.targetCapital}
                </div>
                <div className="text-[11px] text-brand mt-1 font-mono">
                  {results.dilution}
                </div>
              </div>

            </div>

            {/* GHC Action Blueprint */}
            <div className="p-4 rounded-xl bg-brand/5 border border-brand/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand font-semibold">
                <ShieldCheck className="w-4 h-4 text-brand" />
                GHC Recommended Execution Strategy
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                At ₹{revenue} Cr revenue with {growthRate}% growth, the primary valuation trap is {margin < 50 ? 'sub-scale gross margins triggering PE discounts' : 'unoptimized cap tables and lack of competitive deal tension'}. GHC deploys a {objective === 'equity' ? '90-day curated institutional equity syndicate' : objective === 'ipo' ? 'pre-IPO Ind-AS restructuring & anchor book roadshow' : 'bespoke capital architecture'} to maximize terms.
              </p>
            </div>

            {/* Kickoff Button */}
            <button
              onClick={handleLaunchMandate}
              className="w-full py-3.5 rounded-lg bg-brand text-obsidian-950 font-semibold text-xs tracking-widest uppercase hover:bg-brand-light transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(170,209,213,0.35)] active:scale-95"
            >
              <span>Underwrite This Mandate With GHC Partners</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
