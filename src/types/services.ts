/**
 * Service type definitions for INT Creative
 */

export interface ServiceFeature {
  text: string;
  highlight?: boolean;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  hook: string;
  outcomes: string[];
  deliverables: ServiceFeature[];
  process: Step[];
  duration?: string;
  packageTier?: 'starter' | 'plus' | 'premium' | 'custom';
  toolStack?: string[];
}

export interface Step {
  number: number;
  title: string;
  description: string;
  timeline?: string;
}

export interface PackageTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  bestFor: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: 'general' | 'pricing' | 'process' | 'technical';
}

export interface ServiceCTA {
  primary: {
    text: string;
    href: string;
  };
  helper: string;
}

export interface LocationInfo {
  headline: string;
  cities: string[];
  availability: string;
}

export interface ServicesData {
  hero: {
    title: string;
    subtitle: string;
    cta: ServiceCTA;
  };
  services: ServiceDetail[];
  packages?: PackageTier[];
  faqs: FAQ[];
  location: LocationInfo;
  globalCTA: ServiceCTA;
  promise: {
    title: string;
    text: string;
  };
}