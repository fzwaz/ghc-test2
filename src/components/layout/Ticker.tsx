import React from 'react';

export const Ticker: React.FC = () => {
  const items = [
    'M&A PROTOCOL',
    'EQUITY CAPITAL SYNDICATION',
    '₹240+ CR ADVISORY VOLUME',
    'VALUATION & 56(2) DEFENCE',
    'SME IPO READINESS',
    'FRACTIONAL CFO BENCH',
    'CAP TABLE CLEAN-UP',
    'INDIA • DUBAI • SINGAPORE',
    'M&A PROTOCOL',
    'EQUITY CAPITAL SYNDICATION',
    '₹240+ CR ADVISORY VOLUME',
    'VALUATION & 56(2) DEFENCE',
    'SME IPO READINESS',
    'FRACTIONAL CFO BENCH',
    'CAP TABLE CLEAN-UP',
    'INDIA • DUBAI • SINGAPORE',
  ];

  return (
    <div className="border-b border-brand/10 bg-obsidian-950/90 overflow-hidden py-1.5 backdrop-blur-md relative z-30">
      <div className="flex shrink-0 animate-marquee gap-8 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
        {items.map((item, index) => (
          <span key={index} className="inline-flex items-center gap-8">
            <span className="hover:text-brand transition-colors cursor-default">{item}</span>
            <span className="h-1 w-1 rounded-full bg-brand/50 shadow-[0_0_6px_#aad1d5]" />
          </span>
        ))}
      </div>
    </div>
  );
};
