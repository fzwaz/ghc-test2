import { StrategicPillar } from '../types';

export const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    id: 'build',
    code: '01',
    title: 'Build',
    subtitle: 'Institutional Foundations & Capital Architecture',
    overview: 'Engineering bulletproof corporate architecture, cap-table hygiene, and financial governance before scaling capital.',
    founderPainPoint: 'Messy cap tables, unclear IP holding structures, and ad-hoc compliance that stall growth rounds and trigger valuation haircuts during diligence.',
    strategicAdvantage: 'We architect institutional-grade foundations that eliminate deal risk, preserve founder equity, and satisfy top-tier fund mandates.',
    accentColor: '#aad1d5',
    tags: ['Corporate Restructuring', 'Cap Table Architecture', 'IP Holding Vehicles', 'Tax Strategy'],
    deliverables: [
      {
        title: 'Corporate & Holding Structuring',
        description: 'Cross-border entity architecture, holding-operating structures, and strategic domiciliation (India, Singapore, UAE, US).',
        keyOutputs: ['Multi-jurisdiction corporate roadmap', 'Tax-optimized intercompany transfer pricing', 'Founder ESOP trust constitution'],
        timeline: '3 - 6 Weeks',
        metricImpact: '100% Diligence-ready structure'
      },
      {
        title: 'Cap Table Engineering & Clean-up',
        description: 'Rationalization of early angel notes, convertible instruments, and secondary rights optimization.',
        keyOutputs: ['Waterfall simulation model', 'Classified voting / non-voting share tiers', 'Anti-dilution mitigation blueprint'],
        timeline: '2 - 4 Weeks',
        metricImpact: 'Preserves 8-15% founder equity'
      },
      {
        title: 'Financial Governance & Systems',
        description: 'Setting up audit-ready GAAP / Ind-AS financial processes, automated unit-economic reporting, and ERP governance.',
        keyOutputs: ['Audit-grade chart of accounts', 'Management Information System (MIS) engine', 'Internal financial controls manual'],
        timeline: '4 - 8 Weeks',
        metricImpact: 'Zero red flags in Big-4 diligence'
      }
    ]
  },
  {
    id: 'grow',
    code: '02',
    title: 'Grow',
    subtitle: 'Strategic CFO Advisory & Economic Modelling',
    overview: 'Translating operator ambitions into high-fidelity financial models, unit economics optimization, and board-level strategic counsel.',
    founderPainPoint: 'Operating on backward-looking accounting instead of forward-looking predictive finance, leading to cash crunches and missed milestone targets.',
    strategicAdvantage: 'Partner-led Virtual CFO & strategic finance team that sits on the executive bench to stress-test runway, margins, and expansion ROI.',
    accentColor: '#8cb9bd',
    tags: ['Fractional CFO', 'Predictive Modelling', 'Unit Economics', 'Board Advisory'],
    deliverables: [
      {
        title: 'Institutional Financial Modelling',
        description: 'Multi-scenario 3-statement models dynamic with cohort retention, CAC/LTV decay, and working capital cycles.',
        keyOutputs: ['Dynamic 5-year financial model with sensitivity analysis', 'Capital expenditure & burn-rate matrix', 'Real-time runway dashboard'],
        timeline: '2 - 3 Weeks',
        metricImpact: 'Institutional grade underwriting'
      },
      {
        title: 'Virtual CFO & Strategic Counsel',
        description: 'Senior partner advisory attending board meetings, overseeing treasury, pricing models, and capital allocation.',
        keyOutputs: ['Monthly executive MIS & board packs', 'Working capital cycle compression', 'Cash-flow preservation strategies'],
        timeline: 'Ongoing Mandate',
        metricImpact: '+32% average operating margin uplift'
      },
      {
        title: 'Unit Economics & Margin Optimization',
        description: 'Granular product and customer profitability decomposition to unlock non-dilutive internal cash generation.',
        keyOutputs: ['SKU/Customer contribution analysis', 'Pricing strategy restructuring', 'Channel partner economics review'],
        timeline: '3 - 5 Weeks',
        metricImpact: 'Unlocks ₹5-15 Cr self-funded cash flow'
      }
    ]
  },
  {
    id: 'raise',
    code: '03',
    title: 'Raise',
    subtitle: 'Institutional Capital, Valuation & Deal Execution',
    overview: 'Full-cycle transaction advisory: equity, venture debt, structured capital, and rigorous valuation defence from outreach to escrow release.',
    founderPainPoint: 'Founders running broken fundraising processes alone, suffering predatory terms, liquidation preference traps, and 9-month deal drags.',
    strategicAdvantage: 'We run tight, competitive, partner-curated processes that pit strategic and institutional funds against each other to maximize terms.',
    accentColor: '#aad1d5',
    tags: ['Institutional Equity', 'Valuation Defence', 'Venture Debt', 'Term Sheet Negotiation'],
    deliverables: [
      {
        title: 'Valuation Modelling & Narrative Defence',
        description: 'Multi-methodology valuation (DCF, Precedent Transactions, Trading Comps, Scorecard) defensible before institutional ICs.',
        keyOutputs: ['Comprehensive valuation deck & memo', 'Comparable deal universe benchmarking', 'Regulatory 56(2)(viib) / FEMA / IBBI report'],
        timeline: '2 - 4 Weeks',
        metricImpact: '3.5x - 4.5x valuation multiple protection'
      },
      {
        title: 'Competitive Deal Room & Process Management',
        description: 'Curated syndication across domestic & global Tier-1 VC/PE funds, strategic corporates, and sovereign family offices.',
        keyOutputs: ['Confidential Information Memorandum (CIM)', 'Virtual Data Room (VDR) curation', 'Competitive bidding cadence'],
        timeline: '8 - 14 Weeks',
        metricImpact: 'Average 90 days from launch to term sheet'
      },
      {
        title: 'Term Sheet & Definitive Agreements Advisory',
        description: 'Aggressive negotiation of governance rights, liquidation preference, affirmative voting items, and founder lock-ins.',
        keyOutputs: ['Term sheet clause redline matrix', 'SHA / SSA legal advisor alignment', 'Escrow & conditions precedent monitoring'],
        timeline: '3 - 6 Weeks',
        metricImpact: 'Zero toxic governance covenants'
      }
    ]
  },
  {
    id: 'scale',
    code: '04',
    title: 'Scale',
    subtitle: 'SME IPO Pathways, M&A & Transaction Advisory',
    overview: 'Guiding mature enterprises through liquidity events, cross-border M&A acquisitions, and public capital markets listing.',
    founderPainPoint: 'Unpreparedness for public market scrutiny, lack of merchant banker alignment, and leaving secondary liquidity value on the table.',
    strategicAdvantage: 'Turnkey pre-IPO governance, listing pathway evaluation (BSE SME / NSE Emerge / Mainboard), and strategic acquirer curation.',
    accentColor: '#78b3b9',
    tags: ['SME IPO Readiness', 'M&A Protocol', 'Corporate Governance', 'Secondary Liquidity'],
    deliverables: [
      {
        title: 'SME IPO & Capital Markets Roadmap',
        description: 'End-to-end listing readiness: merchant banker selection, DRHP structuring, anchor investor syndication, and roadshows.',
        keyOutputs: ['IPO feasibility & timing diagnostic', 'Board reconstitution & committee structuring', 'DRHP financial restatement management'],
        timeline: '6 - 9 Months',
        metricImpact: 'Subscribed 15x+ institutional book'
      },
      {
        title: 'M&A & Strategic Buyout Mandates',
        description: 'Sell-side and buy-side strategic transaction management, synergy modelling, and negotiation of representations & warranties.',
        keyOutputs: ['Target / Acquirer qualification matrix', 'Synergy valuation & earn-out architecture', 'Integration & escrow execution'],
        timeline: '12 - 20 Weeks',
        metricImpact: 'Premium multiples over market standard'
      },
      {
        title: 'Corporate Governance & Pre-Liquidity Hygiene',
        description: 'Transforming private businesses into institutional market leaders compliant with statutory, ESG, and regulatory standards.',
        keyOutputs: ['Secretarial & statutory compliance overhaul', 'Related-party transaction rationalization', 'Key man & risk mitigation plan'],
        timeline: '6 - 12 Weeks',
        metricImpact: '100% regulatory sanction resilience'
      }
    ]
  }
];
