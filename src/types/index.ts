export type StrategicPillarId = 'build' | 'grow' | 'raise' | 'scale';

export interface StrategicDeliverable {
  title: string;
  description: string;
  keyOutputs: string[];
  timeline: string;
  metricImpact: string;
}

export interface StrategicPillar {
  id: StrategicPillarId;
  code: string;
  title: string;
  subtitle: string;
  overview: string;
  founderPainPoint: string;
  strategicAdvantage: string;
  deliverables: StrategicDeliverable[];
  accentColor: string;
  tags: string[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  context: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  sector: string;
  dealType: string;
  pillar: StrategicPillarId;
  capitalSize: string;
  timeline: string;
  heroMetric: string;
  heroLabel: string;
  challenge: string;
  situation: string;
  ghcIntervention: string[];
  outcome: string;
  metrics: CaseStudyMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface DealSignal {
  id: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  summary: string;
  keyTakeaways: string[];
  tag: string;
}

export interface ProofMetric {
  numeric: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface MandateFormState {
  founderName: string;
  companyName: string;
  email: string;
  phone: string;
  annualRevenue: string;
  primaryObjective: string;
  capitalRequirement: string;
  timeline: string;
  notes: string;
}
