import { DealSignal } from '../types';

export const DEAL_SIGNALS: DealSignal[] = [
  {
    id: 'unfair-advantage-ma',
    category: 'M&A Protocol · Exit Strategy',
    readTime: '6 min read',
    date: 'Q3 Strategic Brief',
    title: 'The Unfair Advantage in M&A: Why the Best Exits are Engineered 12 Months Before Term Sheets',
    summary: 'Most founders treat M&A as an episodic event rather than an engineered corporate state. How proactive cap table hygiene, IP partitioning, and buyer mapping yield 40%+ valuation premiums.',
    keyTakeaways: [
      'Buyer curation must begin long before capital need arises.',
      'Diligence friction destroys deal momentum faster than price disputes.',
      'Representations & warranties insurance is the modern founder safety net.'
    ],
    tag: 'M&A'
  },
  {
    id: 'cap-table-dilution-defense',
    category: 'Capital Architecture · Equity Strategy',
    readTime: '5 min read',
    date: 'Q3 Strategic Brief',
    title: 'Cap Tables that Survive Institutional Diligence: Defending Founder Equity Across Multi-Stage Rounds',
    summary: 'Unpacking liquidation preference traps, participating preferred shares, and convertible debt overhangs that quietly dilute founders out of their own upside.',
    keyTakeaways: [
      'Standard 1x non-participating preferred is the only sustainable term.',
      'Convertible debt caps stack cumulatively during bridge rounds.',
      'ESOP pool expansion must be negotiated on post-money terms.'
    ],
    tag: 'CAPITAL'
  },
  {
    id: 'sme-ipo-vs-pe-calculus',
    category: 'Liquidity Pathways · Public Markets',
    readTime: '7 min read',
    date: 'Q2 Strategic Brief',
    title: 'The SME IPO Calculus: When Public Listing Outperforms Private Equity for Mid-Market Enterprises',
    summary: 'A deep comparative analysis of NSE Emerge / BSE SME platforms versus Private Equity rounds: evaluating liquidity, valuation multiples, promoter control, and secondary cash-outs.',
    keyTakeaways: [
      'SME IPOs preserve complete promoter management autonomy.',
      'Secondary listing provides currency for non-cash corporate acquisitions.',
      'Post-listing liquidity requires dedicated market maker governance.'
    ],
    tag: 'SME IPO'
  }
];
