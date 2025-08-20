/**
 * Case Study type definitions for INT Creative
 */

export interface CaseStudyData {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  category: string;
  serviceType: string;
  description: string;
  clientResults: {
    timeframe: string;
    metric: string;
    keyOutcome: string;
  };
  technologies: string[];
  challenges: string[];
  solutions: string[];
  liveUrl?: string;
  completedDate: string;
  // Extended case study data
  clientInfo: {
    name: string;
    industry: string;
    size: string;
    location: string;
  };
  projectScope: {
    duration: string;
    budget: string;
    teamSize: string;
  };
  beforeAfterMetrics: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  processSteps: {
    phase: string;
    title: string;
    description: string;
    deliverables: string[];
    timeline: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  nextSteps?: string[];
}