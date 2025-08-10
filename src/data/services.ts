import type { ServicesData, ServiceDetail, FAQ } from '../types/services';

const automationService: ServiceDetail = {
  id: 'automation',
  slug: 'automation',
  title: 'Automation — Follow-Up Engine',
  description: 'Set up systems that nurture leads automatically while you focus on delivery.',
  hook: 'Stop losing leads to slow follow-up. Automated systems respond instantly, nurture consistently, and convert more prospects into paying customers.',
  outcomes: [
    'Never miss another lead with instant response systems',
    'Convert 30% more prospects with consistent follow-up',
    'Save 10+ hours per week on manual tasks',
    'Track every interaction in one central system'
  ],
  deliverables: [
    { text: 'HubSpot Free CRM setup and configuration', highlight: true },
    { text: 'Missed-call text-back automation via Zapier' },
    { text: 'Welcome email sequence (5 emails)' },
    { text: 'Lead scoring and pipeline setup' },
    { text: 'Basic reporting dashboard' },
    { text: 'Team training and documentation' }
  ],
  process: [
    {
      number: 1,
      title: 'Audit Current Process',
      description: 'Map your existing lead flow and identify gaps where prospects fall through',
      timeline: 'Day 1'
    },
    {
      number: 2,
      title: 'System Design',
      description: 'Design automated workflows that match your business process',
      timeline: 'Day 2-3'
    },
    {
      number: 3,
      title: 'Build & Configure',
      description: 'Set up HubSpot CRM, connect Zapier automations, and create email templates',
      timeline: 'Day 4-7'
    },
    {
      number: 4,
      title: 'Test & Refine',
      description: 'Run test leads through the system and refine based on results',
      timeline: 'Day 8-9'
    },
    {
      number: 5,
      title: 'Launch & Train',
      description: 'Go live with your automation and train your team on the new system',
      timeline: 'Day 10'
    }
  ],
  packageTier: 'plus',
  toolStack: ['HubSpot Free', 'Zapier', 'SMS Gateway']
};

const websiteDesignService: ServiceDetail = {
  id: 'website-design',
  slug: 'website-design',
  title: 'Web Design — Conversion Site Sprint',
  subtitle: '7-day turnaround',
  description: 'Fast, focused website development that converts visitors into leads.',
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

const graphicDesignService: ServiceDetail = {
  id: 'graphic-design',
  slug: 'graphic-design',
  title: 'Digital Design — Brand Starter Kit',
  description: 'Essential brand assets to look professional across all channels.',
  hook: 'First impressions matter. Get a cohesive brand identity that builds trust and stands out in your market.',
  outcomes: [
    'Consistent brand across all touchpoints',
    'Professional look that builds credibility',
    'Social media templates for quick content creation',
    'Brand guidelines to maintain consistency as you grow'
  ],
  deliverables: [
    { text: 'Logo with 3 variations (full, mark, wordmark)', highlight: true },
    { text: 'Color palette with hex codes and usage guide' },
    { text: 'Typography selection (2-3 fonts)' },
    { text: '5 social media templates (Canva editable)' },
    { text: 'Email signature design' },
    { text: 'One-page brand guidelines PDF' }
  ],
  process: [
    {
      number: 1,
      title: 'Brand Discovery',
      description: 'Explore your vision, values, and visual preferences',
      timeline: 'Day 1'
    },
    {
      number: 2,
      title: 'Concept Development',
      description: 'Create 3 distinct brand directions to choose from',
      timeline: 'Day 2-3'
    },
    {
      number: 3,
      title: 'Refinement',
      description: 'Perfect your chosen direction based on feedback',
      timeline: 'Day 4-5'
    },
    {
      number: 4,
      title: 'Asset Creation',
      description: 'Build out full suite of brand materials',
      timeline: 'Day 6-7'
    },
    {
      number: 5,
      title: 'Delivery',
      description: 'Provide all files and usage documentation',
      timeline: 'Day 8'
    }
  ],
  packageTier: 'starter',
  toolStack: ['Adobe Creative Suite', 'Canva Pro', 'Brand Guidelines Template']
};

const socialMediaService: ServiceDetail = {
  id: 'social-media',
  slug: 'social-media',
  title: 'Social Media — Ad Starter Package',
  subtitle: 'Optional add-on',
  description: 'Simple, trackable ads that bring qualified traffic to your site.',
  hook: 'Turn social scrollers into paying customers. Get ads that actually work without the complexity or massive budgets.',
  outcomes: [
    'Qualified traffic to your website within 48 hours',
    'Lower cost per lead with tested ad variations',
    'Retargeting to stay top-of-mind with prospects',
    'Clear data on what messaging resonates'
  ],
  deliverables: [
    { text: 'Facebook/Instagram pixel setup and verification', highlight: true },
    { text: '1 dedicated landing page optimized for conversions' },
    { text: '3 ad creative variations for testing' },
    { text: 'Audience targeting based on your ideal customer' },
    { text: 'Retargeting campaign for website visitors' },
    { text: 'Weekly performance reports with insights' }
  ],
  process: [
    {
      number: 1,
      title: 'Strategy Session',
      description: 'Define your ideal customer and campaign goals',
      timeline: 'Day 1'
    },
    {
      number: 2,
      title: 'Landing Page',
      description: 'Create focused page designed to convert ad traffic',
      timeline: 'Day 2-3'
    },
    {
      number: 3,
      title: 'Ad Creation',
      description: 'Design and write ads that stop the scroll',
      timeline: 'Day 4-5'
    },
    {
      number: 4,
      title: 'Campaign Launch',
      description: 'Set up targeting, budgets, and go live',
      timeline: 'Day 6'
    },
    {
      number: 5,
      title: 'Optimize',
      description: 'Monitor performance and adjust for better results',
      timeline: 'Ongoing'
    }
  ],
  packageTier: 'custom',
  toolStack: ['Meta Business Suite', 'Webflow', 'Google Analytics']
};

const faqs: FAQ[] = [
  {
    question: 'What makes you different from other agencies?',
    answer: 'We focus on practical, measurable results for small businesses. No jargon, no fluff — just systems that work. We use proven tools like Webflow for websites, HubSpot Free for CRM, and Zapier for automation to keep costs low and results high.',
    category: 'general'
  },
  {
    question: 'How quickly can we see results?',
    answer: 'Websites go live in 7 days. Automation systems start working immediately. Ad campaigns can drive traffic within 48 hours. Most clients see meaningful improvements in lead flow within 30 days.',
    category: 'general'
  },
  {
    question: 'Do you work with businesses outside Northeast Ohio?',
    answer: 'Yes! While we\'re based in Northeast Ohio (Cleveland • Akron • Canton), we work with clients nationwide. Local clients benefit from in-person strategy sessions, but all our services are delivered effectively remotely.',
    category: 'general'
  },
  {
    question: 'What if I need something not listed in your services?',
    answer: 'We offer custom solutions tailored to your specific needs. Schedule a quick call and we\'ll create a custom scope with a fixed quote. No surprises, just clear pricing for exactly what you need.',
    category: 'pricing'
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No contracts required. Most of our services are project-based with clear deliverables and timelines. For ongoing services like ad management, we work month-to-month so you\'re never locked in.',
    category: 'pricing'
  },
  {
    question: 'What happens after the project is complete?',
    answer: 'You own everything we create. We provide training and documentation so you can manage it yourself, or we can discuss ongoing support options. Many clients start with a project then move to monthly support.',
    category: 'process'
  },
  {
    question: 'Can you work with my existing website/tools?',
    answer: 'Absolutely. We can optimize your current setup or build from scratch. During our discovery call, we\'ll assess what you have and recommend the most cost-effective path forward.',
    category: 'technical'
  },
  {
    question: 'How do you keep costs manageable for small businesses?',
    answer: 'We use free and low-cost tools whenever possible (HubSpot Free, Canva, Zapier starter plans). Our fixed-price projects mean no surprise bills. We focus on high-ROI activities that directly impact your revenue.',
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
    automationService,
    websiteDesignService,
    graphicDesignService,
    socialMediaService
  ],
  faqs,
  location: {
    headline: 'Based in Northeast Ohio',
    cities: ['Cleveland', 'Akron', 'Canton'],
    availability: 'working locally and remotely'
  },
  globalCTA: {
    primary: {
      text: 'Get Started',
      href: '/contact'
    },
    helper: 'Custom scope, fixed quote after a quick call.'
  },
  promise: {
    title: 'Our Promise',
    text: 'If we miss the agreed timeline, you get a project credit. Simple as that.'
  }
};