import type { ServicesData, ServiceDetail, FAQ } from '../types/services';

const websiteDevelopmentService: ServiceDetail = {
  id: 'website-development',
  slug: 'website-development',
  title: 'Website Development — Conversion Site Sprint',
  subtitle: '7-day turnaround',
  description: 'Launch a website that turns visitors into leads with fast, focused development.',
  hook: 'Your website should be your hardest-working salesperson. Get a conversion-focused site that turns traffic into revenue in just 7 days.',
  outcomes: [
    'Professional site live in 7 days',
    'Mobile-optimized for 60% of your traffic',
    'Clear messaging that speaks to your ideal customer',
    'Lead capture forms that actually convert',
    'Analytics to track every visitor action'
  ],
  deliverables: [
    { text: '1-3 page Webflow site with polished copy', highlight: true },
    { text: 'Mobile-first responsive design' },
    { text: 'Contact forms connected to your CRM' },
    { text: 'Google Analytics and conversion tracking' },
    { text: 'Basic SEO setup with meta tags' },
    { text: 'SSL certificate and hosting setup' }
  ],
  process: [
    {
      number: 1,
      title: 'Discovery Call',
      description: 'Understand your business, customers, and conversion goals',
      timeline: 'Day 1'
    },
    {
      number: 2,
      title: 'Content & Copy',
      description: 'Write conversion-focused copy that speaks to your audience',
      timeline: 'Day 2'
    },
    {
      number: 3,
      title: 'Design Mockup',
      description: 'Create visual design in Webflow with your brand elements',
      timeline: 'Day 3-4'
    },
    {
      number: 4,
      title: 'Build & Optimize',
      description: 'Develop responsive site with forms, tracking, and SEO',
      timeline: 'Day 5-6'
    },
    {
      number: 5,
      title: 'Launch',
      description: 'Go live, test everything, and provide training',
      timeline: 'Day 7'
    }
  ],
  duration: '7 days',
  packageTier: 'starter',
  toolStack: ['Webflow', 'Google Analytics', 'HubSpot Forms']
};

const digitalMarketingService: ServiceDetail = {
  id: 'digital-marketing',
  slug: 'digital-marketing',
  title: 'Digital Marketing — Campaign Management',
  description: 'Launch campaigns that turn clicks into customers with targeted advertising and automation.',
  hook: 'Turn social scrollers into paying customers. Get ads that actually work without the complexity or massive budgets, plus automated follow-up to nurture every lead.',
  outcomes: [
    'Qualified traffic to your website within 48 hours',
    'Lower cost per lead with tested ad variations',
    'Automated follow-up that never misses a prospect',
    'Clear data on what messaging and channels drive sales'
  ],
  deliverables: [
    { text: 'Facebook/Instagram ad campaigns with targeting setup', highlight: true },
    { text: 'Custom landing pages optimized for conversions' },
    { text: 'HubSpot CRM setup and lead scoring' },
    { text: 'Automated email sequences (5-7 emails)' },
    { text: 'Zapier automations for lead routing' },
    { text: 'Weekly performance reports with insights' }
  ],
  process: [
    {
      number: 1,
      title: 'Strategy Session',
      description: 'Define your ideal customer, campaign goals, and automation needs',
      timeline: 'Day 1'
    },
    {
      number: 2,
      title: 'Landing Page & CRM',
      description: 'Create focused pages and set up automated lead management',
      timeline: 'Day 2-3'
    },
    {
      number: 3,
      title: 'Ad Creation & Automation',
      description: 'Design ads and build follow-up sequences',
      timeline: 'Day 4-5'
    },
    {
      number: 4,
      title: 'Campaign Launch',
      description: 'Set up targeting, budgets, and automation workflows',
      timeline: 'Day 6'
    },
    {
      number: 5,
      title: 'Optimize',
      description: 'Monitor performance and adjust for better results',
      timeline: 'Ongoing'
    }
  ],
  packageTier: 'premium',
  toolStack: ['Meta Business Suite', 'HubSpot Free', 'Zapier', 'Webflow']
};

const graphicDesignService: ServiceDetail = {
  id: 'graphic-design',
  slug: 'graphic-design',
  title: 'Graphic Design — Professional Brand Identity',
  description: 'Professional brand visuals and marketing materials that make businesses look trustworthy and credible.',
  hook: 'First impressions matter. Get a cohesive brand identity that builds trust and stands out in your market, with marketing materials that actually help close deals instead of just filling space.',
  outcomes: [
    'Consistent professional brand across all touchpoints',
    'Marketing materials that build credibility and trust',
    'Social media templates for quick, on-brand content creation',
    'Brand guidelines to maintain consistency as you scale'
  ],
  deliverables: [
    { text: 'Complete logo suite (primary, secondary, mark, wordmark)', highlight: true },
    { text: 'Brand color palette with hex codes and usage guidelines' },
    { text: 'Typography system (primary and secondary fonts)' },
    { text: '10 social media templates (Instagram, Facebook, LinkedIn)' },
    { text: 'Business card and letterhead designs' },
    { text: 'Comprehensive brand guidelines document' }
  ],
  process: [
    {
      number: 1,
      title: 'Brand Discovery Session',
      description: 'Deep dive into your brand vision, values, and target market preferences',
      timeline: 'Day 1'
    },
    {
      number: 2,
      title: 'Concept Development',
      description: 'Create 3 distinct brand direction concepts with mood boards',
      timeline: 'Day 2-3'
    },
    {
      number: 3,
      title: 'Design Refinement',
      description: 'Perfect your chosen direction with detailed feedback incorporation',
      timeline: 'Day 4-5'
    },
    {
      number: 4,
      title: 'Asset Creation',
      description: 'Build complete suite of brand materials and templates',
      timeline: 'Day 6-8'
    },
    {
      number: 5,
      title: 'Delivery & Training',
      description: 'Provide all files, templates, and brand usage training',
      timeline: 'Day 9'
    }
  ],
  packageTier: 'starter',
  toolStack: ['Adobe Creative Suite', 'Canva Pro', 'Brand Strategy Framework']
};

const marketingAutomationService: ServiceDetail = {
  id: 'marketing-automation',
  slug: 'marketing-automation',
  title: 'Marketing Automation — Business Process Systems',
  description: 'Custom automation systems that eliminate repetitive tasks and streamline workflows.',
  hook: 'Escape daily manual tasks with custom automation that handles operations, customer service, and lead nurturing 24/7 while your team focuses on growth.',
  outcomes: [
    'Automated lead nurturing that never misses a prospect',
    'Streamlined client onboarding that saves 10+ hours per new customer',
    'Business processes that run themselves around the clock',
    'Clear workflows that scale with your team growth'
  ],
  deliverables: [
    { text: 'HubSpot CRM automation workflows (lead scoring, nurturing)', highlight: true },
    { text: 'Zapier integrations connecting your existing tools' },
    { text: 'Automated email sequences for different customer journeys' },
    { text: 'Client onboarding automation with task management' },
    { text: 'Appointment booking and reminder systems' },
    { text: 'Custom process documentation and training' }
  ],
  process: [
    {
      number: 1,
      title: 'Process Audit',
      description: 'Map your current workflows and identify automation opportunities',
      timeline: 'Day 1-2'
    },
    {
      number: 2,
      title: 'System Design',
      description: 'Create automation blueprints and tool integration plan',
      timeline: 'Day 3-4'
    },
    {
      number: 3,
      title: 'Build & Connect',
      description: 'Set up automations and integrate with existing systems',
      timeline: 'Day 5-8'
    },
    {
      number: 4,
      title: 'Test & Refine',
      description: 'Run test scenarios and optimize automation logic',
      timeline: 'Day 9-10'
    },
    {
      number: 5,
      title: 'Launch & Train',
      description: 'Go live with systems and train your team on management',
      timeline: 'Day 11-12'
    }
  ],
  packageTier: 'premium',
  toolStack: ['HubSpot', 'Zapier', 'Calendly', 'ActiveCampaign']
};

const faqs: FAQ[] = [
  {
    question: 'What makes you different from other agencies?',
    answer: 'I focus on practical, measurable results for service businesses. No jargon, no fluff — just systems that work. I use proven tools like Webflow for websites, HubSpot Free for CRM, and Zapier for automation to keep costs low and results high.',
    category: 'general'
  },
  {
    question: 'How quickly can I see results?',
    answer: 'Websites go live in 7 days. Automation systems start working immediately. Ad campaigns can drive traffic within 48 hours. Most clients see meaningful improvements in lead flow within 30 days.',
    category: 'general'
  },
  {
    question: 'What\'s your service area?',
    answer: 'I work with service businesses across the United States through proven remote processes. Based in Northeast Ohio, I serve clients nationwide with the same quality and attention. Northeast Ohio clients enjoy the added benefit of optional in-person meetings when beneficial.',
    category: 'general'
  },
  {
    question: 'What if I need something not listed in your services?',
    answer: 'I offer custom solutions tailored to your specific needs. Schedule a quick call and I\'ll create a custom scope with a fixed quote. No surprises, just clear pricing for exactly what you need.',
    category: 'pricing'
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No contracts required. Most of my services are project-based with clear deliverables and timelines. For ongoing services like ad management, I work month-to-month so you\'re never locked in.',
    category: 'pricing'
  },
  {
    question: 'What happens after the project is complete?',
    answer: 'You own everything I create. I provide training and documentation so you can manage it yourself, or we can discuss ongoing support options. Many clients start with a project then move to monthly support.',
    category: 'process'
  },
  {
    question: 'Can you work with my existing website/tools?',
    answer: 'Absolutely. I can optimize your current setup or build from scratch. During my discovery call, I\'ll assess what you have and recommend the most cost-effective path forward.',
    category: 'technical'
  },
  {
    question: 'How do you keep costs manageable for small businesses?',
    answer: 'I use free and low-cost tools whenever possible (HubSpot Free, Canva, Zapier starter plans). My fixed-price projects mean no surprise bills. I focus on high-ROI activities that directly impact your revenue.',
    category: 'pricing'
  }
];

export const servicesData: ServicesData = {
  hero: {
    title: 'Simple, effective services for growing businesses',
    subtitle: 'Get a website that converts, automations that work, and tracking that matters.',
    cta: {
      primary: {
        text: 'Book a 15-min plan call',
        href: '/contact'
      },
      helper: 'Custom scope, fixed quote after a quick call.'
    }
  },
  services: [
    websiteDevelopmentService,
    digitalMarketingService,
    graphicDesignService,
    marketingAutomationService
  ],
  faqs,
  location: {
    headline: 'Serving Nationwide',
    cities: ['Remote delivery', 'Northeast Ohio local support'],
    availability: 'working with clients across the United States'
  },
  globalCTA: {
    primary: {
      text: 'Get Started',
      href: '/contact'
    },
    helper: 'Custom scope, fixed quote after a quick call.'
  },
  promise: {
    title: 'My Promise',
    text: 'If I miss the agreed timeline, you get a project credit. Simple as that.'
  }
};