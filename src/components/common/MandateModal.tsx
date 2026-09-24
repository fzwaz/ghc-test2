import React, { useState } from 'react';
import { X, Shield, ArrowRight, CheckCircle2, Lock, Building2, TrendingUp, DollarSign, Layers } from 'lucide-react';
import { HudCorners } from './HudCorners';

interface MandateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPillar?: string;
}

export const MandateModal: React.FC<MandateModalProps> = ({ isOpen, onClose, defaultPillar }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    objective: defaultPillar || 'Institutional Fundraising (₹10 Cr - ₹100 Cr+)',
    revenue: '₹5 Cr - ₹25 Cr ARR',
    capitalNeeded: '₹15 Cr - ₹40 Cr',
    timeline: 'Within 90 Days',
    companyName: '',
    founderName: '',
    email: '',
    phone: '',
    notes: '',
  });

  if (!isOpen) return null;

  const objectives = [
    { id: 'raise', label: 'Institutional Fundraising', desc: 'Series A/B Equity, Structured Debt & Term Sheet Defence', icon: DollarSign },
    { id: 'grow', label: 'Strategic CFO & Margin Expansion', desc: 'Unit economics audit, financial modeling & runway optimization', icon: TrendingUp },
    { id: 'build', label: 'Cap Table & Corporate Restructuring', desc: 'Cross-border holding setup, IP ringfencing & diligence preparation', icon: Layers },
    { id: 'scale', label: 'SME IPO & M&A Advisory', desc: 'BSE/NSE listing roadmap, DRHP alignment & buyout syndication', icon: Building2 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-obsidian-900 border border-brand/20 rounded-xl shadow-[0_0_50px_rgba(170,209,213,0.15)] overflow-hidden">
        <HudCorners borderColor="rgba(170, 209, 213, 0.5)" size="w-4 h-4" />

        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand/10 bg-obsidian-950/60">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-brand font-semibold">
              Mandate Intake Protocol // GHC-2026
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-brand hover:bg-brand/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <div>
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                {[
                  { num: 1, title: 'Growth Objective' },
                  { num: 2, title: 'Company Metrics' },
                  { num: 3, title: 'Direct Channel' }
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-medium transition-all ${
                      step >= s.num ? 'bg-brand text-obsidian-950 font-bold' : 'bg-white/5 text-slate-500'
                    }`}>
                      {s.num}
                    </span>
                    <span className={`text-xs hidden sm:inline ${step === s.num ? 'text-brand font-medium' : 'text-slate-500'}`}>
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step 1: Objective */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-display font-medium text-white mb-1">
                      What is your primary strategic objective?
                    </h3>
                    <p className="text-sm text-slate-400">
                      GHC mandates are partner-led and tailored for ambitious high-growth enterprises.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 pt-2">
                    {objectives.map((obj) => {
                      const Icon = obj.icon;
                      const isSelected = formData.objective === obj.label;
                      return (
                        <div
                          key={obj.id}
                          onClick={() => setFormData({ ...formData, objective: obj.label })}
                          className={`p-4 rounded-lg border cursor-pointer transition-all flex items-start gap-4 ${
                            isSelected
                              ? 'bg-brand/10 border-brand shadow-[0_0_20px_rgba(170,209,213,0.15)]'
                              : 'bg-obsidian-850/60 border-white/10 hover:border-brand/40 hover:bg-obsidian-800'
                          }`}
                        >
                          <div className={`p-2 rounded-md ${isSelected ? 'bg-brand text-obsidian-950' : 'bg-white/5 text-brand'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-semibold text-white">{obj.label}</h4>
                              {isSelected && <div className="w-2 h-2 rounded-full bg-brand" />}
                            </div>
                            <p className="text-xs text-slate-400 mt-1">{obj.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 rounded-lg bg-brand text-obsidian-950 font-medium text-sm hover:bg-brand-light transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(170,209,213,0.3)]"
                    >
                      Continue to Metrics <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Company Metrics */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-display font-medium text-white mb-1">
                      Current Scale & Capital Requirements
                    </h3>
                    <p className="text-sm text-slate-400">
                      Helps us assign the relevant managing partner with sector specialization.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Annual Revenue Scale
                      </label>
                      <select
                        value={formData.revenue}
                        onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                        className="w-full px-4 py-2.5 bg-obsidian-850 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                      >
                        <option value="Pre-Revenue / Seed Prototype">Pre-Revenue / Seed Stage</option>
                        <option value="₹2 Cr - ₹10 Cr ARR">₹2 Cr - ₹10 Cr ARR</option>
                        <option value="₹10 Cr - ₹35 Cr ARR">₹10 Cr - ₹35 Cr ARR</option>
                        <option value="₹35 Cr - ₹100 Cr+ ARR">₹35 Cr - ₹100 Cr+ ARR</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Target Capital / Deal Size
                      </label>
                      <select
                        value={formData.capitalNeeded}
                        onChange={(e) => setFormData({ ...formData, capitalNeeded: e.target.value })}
                        className="w-full px-4 py-2.5 bg-obsidian-850 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                      >
                        <option value="₹5 Cr - ₹15 Cr">₹5 Cr - ₹15 Cr</option>
                        <option value="₹15 Cr - ₹40 Cr">₹15 Cr - ₹40 Cr</option>
                        <option value="₹40 Cr - ₹120 Cr+">₹40 Cr - ₹120 Cr+</option>
                        <option value="Advisory / Non-Capital Mandate">Strategic CFO / Advisory Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Target Execution Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Immediate (30-60d)', 'Next 90-120d', 'Strategic 6-12m'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all ${
                            formData.timeline === t
                              ? 'bg-brand/10 border-brand text-brand'
                              : 'bg-obsidian-850 border-white/10 text-slate-400 hover:border-white/30'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 rounded-lg bg-brand text-obsidian-950 font-medium text-sm hover:bg-brand-light transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(170,209,213,0.3)]"
                    >
                      Founder Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-display font-medium text-white mb-1">
                      Direct Executive Channel
                    </h3>
                    <p className="text-sm text-slate-400">
                      We execute strict bilateral NDAs before reviewing sensitive cap-table and financial data.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1">
                        Founder / Executive Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Siddharth Verma"
                        value={formData.founderName}
                        onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                        className="w-full px-3.5 py-2 bg-obsidian-850 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1">
                        Company / Enterprise *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Nexa Robotics Corp"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2 bg-obsidian-850 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="founder@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 bg-obsidian-850 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 bg-obsidian-850 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1">
                      Brief Context or Deal Particulars (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g., Looking to raise Series A from institutional funds with clean-up of bridge notes."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 bg-obsidian-850 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded bg-brand/5 border border-brand/15 text-xs text-brand">
                    <Shield className="w-4 h-4 shrink-0 text-brand" />
                    <span>All inquiries handled directly by Senior Advisory Partners under strict confidentiality.</span>
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-brand text-obsidian-950 font-semibold text-sm hover:bg-brand-light transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(170,209,213,0.4)]"
                    >
                      Submit Mandate Brief <Lock className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Success confirmation */
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center text-brand">
                <CheckCircle2 className="w-8 h-8 text-brand" />
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-brand">
                  MANDATE REGISTERED // ENCRYPTED DISPATCH
                </span>
                <h3 className="text-2xl font-display font-medium text-white mt-1">
                  Advisory Protocol Initiated
                </h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto mt-2">
                  Thank you, <span className="text-white font-medium">{formData.founderName || 'Founder'}</span>. A managing partner at GHC Growth Lab will review your parameters and initiate a confidential dialogue within 24 business hours.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-obsidian-850 border border-white/10 max-w-sm mx-auto text-left text-xs text-slate-300 space-y-1.5 font-mono">
                <div><span className="text-slate-500">Enterprise:</span> {formData.companyName || 'Confidential'}</div>
                <div><span className="text-slate-500">Pillar:</span> {formData.objective}</div>
                <div><span className="text-slate-500">Target Size:</span> {formData.capitalNeeded}</div>
                <div><span className="text-slate-500">Status:</span> <span className="text-brand">Allocated to Senior Partner</span></div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 font-medium text-xs tracking-wider uppercase transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
