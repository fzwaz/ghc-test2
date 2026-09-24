import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'deeptech-series-a',
    title: 'Precision Robotics & AI Enterprise',
    subtitle: 'Structuring & Closing a ₹48 Cr Series A Round with Global Strategic Co-investors',
    sector: 'DeepTech / Industrial Automation',
    dealType: 'Series A Equity & Venture Debt',
    pillar: 'raise',
    capitalSize: '₹48 Cr ($5.8M)',
    timeline: '82 Days to Term Sheet',
    heroMetric: '₹48 Cr',
    heroLabel: 'Growth Capital Closed',
    challenge: 'The company had groundbreaking industrial AI patents and high pilot retention, but possessed zero institutional financial structure, convoluted early angel convertible instruments, and was receiving low-ball predatory term sheets.',
    situation: 'Existing financial projections were built on naive top-down assumptions. Tier-1 VC funds stalled during technical and financial diligence due to lack of standard revenue recognition and messy IP ownership holding across 2 countries.',
    ghcIntervention: [
      'Engineered clean cross-border IP holding structure between Delaware and India entity with tax-neutral IP assignment.',
      'Collapsed 6 discordant convertible debt notes into a clean pre-Series A cap table waterfall.',
      'Built a bottom-up cohort-based gross-margin expansion model demonstrating 72% software-like contribution margins on hardware deployments.',
      'Ran a confidential competitive process with 14 curated institutional deep-tech funds across India, Singapore, and Europe.'
    ],
    outcome: 'Secured 3 competitive term sheets within 82 days. Closed ₹48 Cr lead-syndicated round with zero onerous liquidation preferences, preserving 14% additional founder equity compared to the initial predatory offers.',
    metrics: [
      { label: 'Capital Closed', value: '₹48 Cr', context: 'Equity + Venture Debt hybrid' },
      { label: 'Valuation Uplift', value: '3.8x', context: 'Over initial unsolicited inbound' },
      { label: 'Time to Close', value: '82 Days', context: 'From mandate kick-off to wire' },
      { label: 'Founder Dilution Saved', value: '14.2%', context: 'Preserved via cap table cleanup' }
    ],
    testimonial: {
      quote: 'GHC transformed our narrative from a hardware assembly shop to an institutional deep-tech asset. Their team did not just introduce funds; they redesigned our cap table, underwrote our numbers, and defended our valuation at every step.',
      author: 'A. Vardhan',
      role: 'Co-founder & CEO, Industrial AI Solutions'
    }
  },
  {
    id: 'omnichannel-consumer-expansion',
    title: 'D2C to Omni-Channel Wellness Brand',
    subtitle: 'Restructuring Working Capital & Unlocking ₹34 Cr Non-Dilutive & Strategic Growth Capital',
    sector: 'Consumer & Retail Tech',
    dealType: 'Strategic Structured Capital & CFO Mandate',
    pillar: 'grow',
    capitalSize: '₹34 Cr ($4.1M)',
    timeline: '90 Days Mandate',
    heroMetric: '+41%',
    heroLabel: 'EBITDA Margin Improvement',
    challenge: 'High top-line GMV growth was masked by severe channel margin bleed in offline retail and predatory 45-day distributor credit terms, creating an existential cash crunch.',
    situation: 'The founders were burning cash rapidly and about to accept heavy down-round dilution to survive the festive inventory cycle.',
    ghcIntervention: [
      'Deployed Fractional CFO team to execute SKU-level unit economic audit across 320 retail doors and quick-commerce channels.',
      'Eliminated 28 unprofitable SKUs and renegotiated distributor working capital credit cycles from 60 days down to 18 days.',
      'Restructured treasury and secured ₹20 Cr low-cost non-dilutive inventory credit lines from institutional financial institutions.',
      'Positioned remaining equity requirement for high-conviction consumer growth fund.'
    ],
    outcome: 'Turned operational cash-flow positive within 5 months. Raised ₹14 Cr growth equity at a premium valuation while preserving founder control, alongside ₹20 Cr optimized debt facilities.',
    metrics: [
      { label: 'Working Capital Unlocked', value: '₹20 Cr', context: 'Non-dilutive lines' },
      { label: 'EBITDA Margin Boost', value: '+41%', context: 'SKU rationalization' },
      { label: 'Cash Conversion Cycle', value: '-38 Days', context: 'Compressed to 22 days' },
      { label: 'Runway Extended', value: '34 Mos', context: 'Self-sustaining growth' }
    ],
    testimonial: {
      quote: 'GHC acted like co-founders with a Wall Street balance sheet mindset. They stopped our margin bleed before we took more capital, which doubled our valuation multiple.',
      author: 'S. Nambiar',
      role: 'Founder & Managing Director'
    }
  },
  {
    id: 'sme-ipo-engineering-infra',
    title: 'Advanced Precision Engineering & EPC',
    subtitle: 'From Family Enterprise to ₹110 Cr BSE SME IPO Listing with 24x Subscription',
    sector: 'Infrastructure & Precision Engineering',
    dealType: 'SME IPO & Governance Restructuring',
    pillar: 'scale',
    capitalSize: '₹110 Cr Market Cap',
    timeline: '7 Months to Listing',
    heroMetric: '24.2x',
    heroLabel: 'Institutional IPO Subscription',
    challenge: 'A 12-year-old profitable manufacturing business wanted public markets liquidity but possessed complex related-party transactions, unorganized book closures, and zero institutional governance framework.',
    situation: 'Merchant bankers were quoting heavy discounts due to messy promoter family holding structures and lack of Ind-AS financial restatements.',
    ghcIntervention: [
      'Orchestrated complete legal and financial restructuring: unified 3 operating entities under a clean public holding company.',
      'Appointed independent board directors, reconstituted statutory committees, and aligned ESG/statutory controls.',
      'Managed 3-year Ind-AS financial restatements and vetted draft red herring prospectus (DRHP) line by line.',
      'Curated institutional anchor book with prominent domestic mutual funds and boutique AIFs prior to public issue.'
    ],
    outcome: 'Successfully listed on BSE SME platform. The issue was oversubscribed 24.2x with ₹110 Cr market capitalization, unlocking substantial secondary wealth and creating permanent currency for future acquisitions.',
    metrics: [
      { label: 'Issue Oversubscription', value: '24.2x', context: 'Anchor & Public demand' },
      { label: 'Market Cap at Debut', value: '₹110 Cr', context: 'Top decile SME issue' },
      { label: 'Execution Time', value: '7 Months', context: 'Diagnostic to Bell Ringing' },
      { label: 'Institutional Anchor Book', value: '₹32 Cr', context: '100% committed pre-IPO' }
    ],
    testimonial: {
      quote: 'The transformation GHC brought to our board, books, and narrative gave public markets total confidence. They are the most disciplined capital architects we have ever worked with.',
      author: 'R. K. Mehra',
      role: 'Promoter & Chairman'
    }
  },
  {
    id: 'cross-border-ma-healthtech',
    title: 'HealthTech Diagnostics & SaaS Suite',
    subtitle: 'Strategic Sell-Side M&A Acquisition by US Healthcare Conglomerate',
    sector: 'Healthcare & Enterprise Software',
    dealType: 'Strategic Cross-Border M&A Exit',
    pillar: 'scale',
    capitalSize: '₹85 Cr ($10.2M)',
    timeline: '110 Days Execution',
    heroMetric: '₹85 Cr',
    heroLabel: 'All-Cash Enterprise Exit',
    challenge: 'A specialized diagnostics software company was approached by a multi-billion dollar US acquirer with an aggressive low-ball timeline and complex indemnity demands that exposed founders to post-closing liabilities.',
    situation: 'Founders lacked M&A transaction counsel and were risking significant earn-out deductions without clear escrow protection.',
    ghcIntervention: [
      'Established defensive synergy valuation model highlighting $18M cost savings for the acquirer in their international expansion.',
      'Introduced competitive tension by bringing a second European strategic bidder into an expedited diligence process.',
      'Engineered earn-out milestones tied to objective API uptime and pipeline retention rather than subjective revenue targets.',
      'Eliminated 7 contentious escrow holdbacks through structured representations & warranties insurance framework.'
    ],
    outcome: 'Closed ₹85 Cr all-cash acquisition with 85% paid upfront at closing and 15% escrow released within 12 months with zero indemnity leakage.',
    metrics: [
      { label: 'Transaction Value', value: '₹85 Cr', context: '100% Enterprise Value' },
      { label: 'Upfront Cash at Close', value: '85%', context: 'Zero earn-out clawback' },
      { label: 'Competitive Uplift', value: '+46%', context: 'Over initial term sheet' },
      { label: 'Closing Time', value: '110 Days', context: 'LOI to wire execution' }
    ]
  }
];
