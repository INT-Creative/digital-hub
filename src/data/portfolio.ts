import type { CaseStudyData } from '../types/caseStudy';
import { generatePortfolioMetaDescription, generateSEOKeywords } from '../utils/seo-optimization';

// **DEMONSTRATION PORTFOLIO - LEGAL DISCLAIMER**
// 
// IMPORTANT: All case studies, client names, testimonials, metrics, and business details 
// contained in this portfolio are FICTIONAL and created solely for demonstration purposes.
//
// These conceptual projects illustrate INT Creative's methodology and approach to 
// service business transformation. While based on realistic industry scenarios and 
// proven strategies, NO ACTUAL CLIENT RELATIONSHIPS are represented.
//
// All testimonials are fictional. All metrics and outcomes are hypothetical examples 
// of potential results. No earnings claims or guarantees are made.
//
// INT Creative is in pre-launch phase. This demonstration portfolio showcases 
// our planned service delivery approach for educational and marketing purposes only.
//
// This complies with FTC guidelines requiring clear disclosure of fictional content 
// in business marketing materials.

// Complete portfolio data with full case study details
export const portfolioData: CaseStudyData[] = [
  {
    id: 'wellness-studio-transformation',
    slug: 'wellness-studio-transformation',
    title: 'Serenity Wellness Studio',
    category: 'Website Development',
    serviceType: 'website-development',
    tagline: 'From 0 to 50 leads/month',
    description: 'Complete website overhaul with booking system that increased client inquiries by 400% in 60 days.',
    clientResults: {
      timeframe: '60 days',
      metric: '400% increase in leads',
      keyOutcome: '0 to 50 qualified leads per month'
    },
    technologies: ['Webflow', 'Calendly', 'HubSpot Forms', 'Google Analytics', 'Zapier'],
    challenges: [
      'Outdated website with no mobile optimization',
      'No online booking system forcing phone-only scheduling',
      'Unclear service descriptions confusing potential clients',
      'No lead capture or follow-up system'
    ],
    solutions: [
      'Complete mobile-first website redesign in Webflow',
      'Integrated Calendly booking system with automated confirmations',
      'Clear service descriptions with pricing transparency',
      'HubSpot lead capture forms with automated email sequences'
    ],
    liveUrl: 'https://serenitywellnessstudio.com',
    completedDate: '2024-08-15',
    clientInfo: {
      name: 'Serenity Wellness Studio',
      industry: 'Health & Wellness',
      size: '3-5 employees',
      location: 'Akron, Ohio'
    },
    projectScope: {
      duration: '7 days',
      budget: '$4,500',
      teamSize: '1 developer + designer'
    },
    beforeAfterMetrics: [
      {
        metric: 'Monthly Website Leads',
        before: '0 leads',
        after: '50+ leads',
        improvement: '∞% increase'
      },
      {
        metric: 'Online Bookings',
        before: '0% online',
        after: '75% online',
        improvement: '75% automation'
      },
      {
        metric: 'Mobile Traffic Conversion',
        before: '1.2%',
        after: '8.7%',
        improvement: '625% improvement'
      }
    ],
    processSteps: [
      {
        phase: 'Discovery',
        title: 'Business & Customer Analysis',
        description: 'Deep dive into services, target clients, and booking challenges to understand the root problems.',
        deliverables: [
          'Customer journey mapping',
          'Service offering analysis',
          'Competitor booking system review',
          'Technical requirements document'
        ],
        timeline: 'Day 1'
      },
      {
        phase: 'Strategy',
        title: 'Site Architecture & Content Plan',
        description: 'Designed user flow from discovery to booking with clear service descriptions and pricing.',
        deliverables: [
          'Site map and user flow design',
          'Content strategy for each service',
          'Booking system integration plan',
          'Lead capture strategy'
        ],
        timeline: 'Day 2'
      },
      {
        phase: 'Design',
        title: 'Visual Design & Mobile Optimization',
        description: 'Created calming, professional design that builds trust and guides users to book appointments.',
        deliverables: [
          'Mobile-first responsive design',
          'Brand-aligned visual hierarchy',
          'Service page templates',
          'Booking flow wireframes'
        ],
        timeline: 'Day 3-4'
      },
      {
        phase: 'Development',
        title: 'Webflow Build & Integration',
        description: 'Built responsive site with integrated booking, forms, and analytics tracking.',
        deliverables: [
          'Webflow site development',
          'Calendly booking integration',
          'HubSpot form connections',
          'Google Analytics setup'
        ],
        timeline: 'Day 5-6'
      },
      {
        phase: 'Launch',
        title: 'Go Live & Training',
        description: 'Launched site, tested all systems, and trained team on managing bookings and leads.',
        deliverables: [
          'Site launch and testing',
          'Team training documentation',
          'Lead management workflow',
          '30-day optimization plan'
        ],
        timeline: 'Day 7'
      }
    ],
    testimonial: {
      quote: "The new website completely transformed our business. We went from hoping the phone would ring to having a steady stream of online bookings. The mobile design is beautiful and the booking system just works perfectly.",
      author: "Sarah Martinez",
      position: "Owner",
      company: "Serenity Wellness Studio"
    },
    nextSteps: [
      'Email marketing automation for client retention',
      'Social media integration for increased visibility',
      'Advanced analytics for service optimization'
    ]
  },
  {
    id: 'hvac-lead-generation',
    slug: 'hvac-lead-generation',
    title: 'Northeast HVAC Solutions',
    category: 'Digital Marketing',
    serviceType: 'digital-marketing',
    tagline: 'Cut lead cost by 60%',
    description: 'Facebook ads and automation system that reduced cost-per-lead from $85 to $32 while tripling volume.',
    clientResults: {
      timeframe: '90 days',
      metric: '60% reduction in cost-per-lead',
      keyOutcome: '$85 to $32 cost per qualified lead'
    },
    technologies: ['Meta Business Suite', 'HubSpot CRM', 'Zapier', 'Webflow', 'Google Analytics'],
    challenges: [
      'High cost-per-lead ($85) making advertising unprofitable',
      'Unqualified leads wasting sales team time',
      'No systematic lead follow-up or nurturing',
      'Seasonal demand fluctuations affecting cash flow'
    ],
    solutions: [
      'Targeted Facebook ads with service-specific messaging',
      'Lead qualification forms to filter prospects',
      'Automated email and SMS follow-up sequences',
      'HubSpot CRM integration for better lead management'
    ],
    liveUrl: 'https://northeasthvacsolutions.com',
    completedDate: '2024-07-22',
    clientInfo: {
      name: 'Northeast HVAC Solutions',
      industry: 'Home Services',
      size: '8-12 employees',
      location: 'Cleveland, Ohio'
    },
    projectScope: {
      duration: '90 days (campaign setup + optimization)',
      budget: '$5,000 setup + $2,500/month ad spend',
      teamSize: '1 marketing specialist'
    },
    beforeAfterMetrics: [
      {
        metric: 'Cost Per Lead',
        before: '$85',
        after: '$32',
        improvement: '62% reduction'
      },
      {
        metric: 'Monthly Qualified Leads',
        before: '15 leads',
        after: '65 leads',
        improvement: '333% increase'
      },
      {
        metric: 'Lead-to-Customer Rate',
        before: '12%',
        after: '28%',
        improvement: '133% improvement'
      }
    ],
    processSteps: [
      {
        phase: 'Analysis',
        title: 'Current Marketing Audit',
        description: 'Analyzed existing advertising performance, customer data, and seasonal patterns.',
        deliverables: [
          'Marketing performance audit',
          'Customer persona development',
          'Competitive ad analysis',
          'Seasonal demand mapping'
        ],
        timeline: 'Week 1'
      },
      {
        phase: 'Strategy',
        title: 'Campaign Architecture Design',
        description: 'Built targeted campaign structure with service-specific ad sets and landing pages.',
        deliverables: [
          'Campaign structure blueprint',
          'Audience targeting strategy',
          'Ad creative concepts',
          'Landing page wireframes'
        ],
        timeline: 'Week 2'
      },
      {
        phase: 'Creation',
        title: 'Ads & Landing Pages',
        description: 'Created high-converting ads and landing pages for each major service category.',
        deliverables: [
          'Facebook ad campaigns (heating, cooling, maintenance)',
          'Service-specific landing pages',
          'Lead qualification forms',
          'CRM integration setup'
        ],
        timeline: 'Week 3-4'
      },
      {
        phase: 'Launch',
        title: 'Campaign Deployment',
        description: 'Launched campaigns with careful budget allocation and tracking setup.',
        deliverables: [
          'Campaign launch and monitoring',
          'Conversion tracking setup',
          'Automated lead routing',
          'Daily performance dashboards'
        ],
        timeline: 'Week 5'
      },
      {
        phase: 'Optimization',
        title: 'Performance Improvement',
        description: 'Continuous testing and optimization to reduce costs and improve lead quality.',
        deliverables: [
          'A/B testing of ad creatives',
          'Audience refinement',
          'Bid strategy optimization',
          'Monthly performance reports'
        ],
        timeline: 'Week 6-12'
      }
    ],
    testimonial: {
      quote: "These campaigns completely changed our business. We're getting more leads than we can handle, and they're actually good leads that turn into customers. The automation saves us hours every week.",
      author: "Mike Thompson",
      position: "Owner",
      company: "Northeast HVAC Solutions"
    },
    nextSteps: [
      'Expand to Google Ads for additional lead volume',
      'Implement retargeting campaigns for website visitors',
      'Add seasonal campaign automation'
    ]
  },
  {
    id: 'law-firm-rebrand',
    slug: 'law-firm-rebrand',
    title: 'Thompson Legal Group',
    category: 'Graphic Design',
    serviceType: 'graphic-design',
    tagline: 'Modern professional identity',
    description: 'Complete rebrand for family law practice that increased referrals and built trust with younger clients.',
    clientResults: {
      timeframe: '30 days',
      metric: '35% increase in referrals',
      keyOutcome: 'Enhanced professional credibility'
    },
    technologies: ['Adobe Creative Suite', 'Brand Strategy Framework', 'Canva Pro'],
    challenges: [
      'Outdated visual identity from 1990s looking unprofessional',
      'Inconsistent branding across all materials and locations',
      'Low referral rates from other professionals',
      'Difficulty connecting with younger divorce and custody clients'
    ],
    solutions: [
      'Modern, trustworthy logo design with professional color palette',
      'Comprehensive brand guidelines ensuring consistency',
      'Professional business cards and letterhead redesign',
      'Social media templates for client education content'
    ],
    completedDate: '2024-06-10',
    clientInfo: {
      name: 'Thompson Legal Group',
      industry: 'Legal Services',
      size: '2-4 employees',
      location: 'Canton, Ohio'
    },
    projectScope: {
      duration: '14 days',
      budget: '$2,800',
      teamSize: '1 brand designer'
    },
    beforeAfterMetrics: [
      {
        metric: 'Professional Referrals',
        before: '2 per month',
        after: '8 per month',
        improvement: '300% increase'
      },
      {
        metric: 'Brand Consistency Score',
        before: '25%',
        after: '95%',
        improvement: '280% improvement'
      },
      {
        metric: 'Client Age Demographics',
        before: '45+ avg age',
        after: '35+ avg age',
        improvement: '10 years younger'
      }
    ],
    processSteps: [
      {
        phase: 'Discovery',
        title: 'Brand Values & Vision Workshop',
        description: 'Deep dive session to understand firm values, target clients, and competitive positioning.',
        deliverables: [
          'Brand values definition',
          'Target client personas',
          'Competitive analysis',
          'Brand positioning statement'
        ],
        timeline: 'Day 1'
      },
      {
        phase: 'Exploration',
        title: 'Concept Development',
        description: 'Created three distinct brand direction concepts with different visual approaches.',
        deliverables: [
          '3 logo concept directions',
          'Color palette explorations',
          'Typography recommendations',
          'Mood boards for each concept'
        ],
        timeline: 'Day 2-4'
      },
      {
        phase: 'Refinement',
        title: 'Selected Concept Development',
        description: 'Refined chosen concept based on feedback and applied across all brand touchpoints.',
        deliverables: [
          'Final logo suite (primary, secondary, mark)',
          'Complete color system',
          'Typography hierarchy',
          'Logo usage guidelines'
        ],
        timeline: 'Day 5-7'
      },
      {
        phase: 'Application',
        title: 'Brand Collateral Design',
        description: 'Applied new brand to all business materials and created templates for consistency.',
        deliverables: [
          'Business card design',
          'Letterhead and envelope design',
          'Social media templates',
          'Email signature design'
        ],
        timeline: 'Day 8-10'
      },
      {
        phase: 'Documentation',
        title: 'Brand Guidelines & Delivery',
        description: 'Created comprehensive brand guidelines and delivered all assets in multiple formats.',
        deliverables: [
          'Brand guidelines document',
          'Logo files in all formats',
          'Business card print files',
          'Template library access'
        ],
        timeline: 'Day 11-14'
      }
    ],
    testimonial: {
      quote: "The rebrand was exactly what we needed. We look like a modern, trustworthy firm now, and I've noticed more referrals from other attorneys. Clients comment on how professional everything looks.",
      author: "Jennifer Thompson",
      position: "Managing Partner",
      company: "Thompson Legal Group"
    },
    nextSteps: [
      'Website redesign using new brand identity',
      'Professional photography for team and office',
      'Marketing materials for client education'
    ]
  },
  {
    id: 'dental-practice-automation',
    slug: 'dental-practice-automation',
    title: 'Bright Smile Dental',
    category: 'Marketing Automation',
    serviceType: 'marketing-automation',
    tagline: '15 hours/week saved',
    description: 'Automated appointment reminders and follow-up system that eliminated manual admin work.',
    clientResults: {
      timeframe: '21 days',
      metric: '15 hours per week saved',
      keyOutcome: '92% reduction in no-shows'
    },
    technologies: ['HubSpot', 'Calendly', 'Zapier', 'Twilio SMS', 'Google Workspace'],
    challenges: [
      'High no-show rates (30%) causing revenue loss',
      'Manual appointment reminders taking 15 hours/week',
      'Poor patient follow-up after treatments',
      'Inconsistent communication across team members'
    ],
    solutions: [
      'Automated SMS and email appointment reminders',
      'Post-treatment follow-up sequences',
      'Automated review request system',
      'Centralized patient communication hub'
    ],
    completedDate: '2024-05-18',
    clientInfo: {
      name: 'Bright Smile Dental',
      industry: 'Healthcare',
      size: '5-8 employees',
      location: 'Youngstown, Ohio'
    },
    projectScope: {
      duration: '21 days',
      budget: '$3,200',
      teamSize: '1 automation specialist'
    },
    beforeAfterMetrics: [
      {
        metric: 'No-Show Rate',
        before: '30%',
        after: '8%',
        improvement: '73% reduction'
      },
      {
        metric: 'Admin Time per Week',
        before: '15 hours',
        after: '2 hours',
        improvement: '87% time savings'
      },
      {
        metric: 'Patient Reviews per Month',
        before: '3 reviews',
        after: '15 reviews',
        improvement: '400% increase'
      }
    ],
    processSteps: [
      {
        phase: 'Assessment',
        title: 'Current Process Mapping',
        description: 'Documented all manual processes and identified automation opportunities.',
        deliverables: [
          'Current workflow documentation',
          'Time tracking analysis',
          'Pain point identification',
          'Automation priority matrix'
        ],
        timeline: 'Day 1-3'
      },
      {
        phase: 'Design',
        title: 'Automation Architecture',
        description: 'Designed automated workflows for appointments, follow-ups, and reviews.',
        deliverables: [
          'Automation workflow diagrams',
          'Message template library',
          'Integration requirements',
          'Success metrics definition'
        ],
        timeline: 'Day 4-6'
      },
      {
        phase: 'Implementation',
        title: 'System Setup & Integration',
        description: 'Built all automation workflows and integrated with existing practice management software.',
        deliverables: [
          'HubSpot CRM configuration',
          'Zapier automation setup',
          'SMS reminder workflows',
          'Email sequence creation'
        ],
        timeline: 'Day 7-14'
      },
      {
        phase: 'Testing',
        title: 'Quality Assurance & Refinement',
        description: 'Tested all automations and refined messaging based on initial patient responses.',
        deliverables: [
          'End-to-end testing completion',
          'Message optimization',
          'Error handling setup',
          'Performance monitoring'
        ],
        timeline: 'Day 15-18'
      },
      {
        phase: 'Training',
        title: 'Team Training & Handoff',
        description: 'Trained staff on new systems and provided documentation for ongoing management.',
        deliverables: [
          'Staff training sessions',
          'System administration guide',
          'Troubleshooting documentation',
          'Performance dashboard setup'
        ],
        timeline: 'Day 19-21'
      }
    ],
    testimonial: {
      quote: "This automation system has been a game-changer. Our no-shows dropped dramatically, and our front desk staff can focus on patients instead of making reminder calls all day. It just works.",
      author: "Dr. Patricia Lewis",
      position: "Practice Owner",
      company: "Bright Smile Dental"
    },
    nextSteps: [
      'Patient reactivation campaigns for lapsed patients',
      'Automated insurance verification workflows',
      'Referral tracking and reward automation'
    ]
  },
  {
    id: 'restaurant-delivery-site',
    slug: 'restaurant-delivery-site',
    title: 'Mama Rosa\'s Kitchen',
    category: 'Website Development',
    serviceType: 'website-development',
    tagline: '200% online order increase',
    description: 'Fast-loading menu site with online ordering that doubled delivery revenue during slow season.',
    clientResults: {
      timeframe: '14 days',
      metric: '200% increase in online orders',
      keyOutcome: '$15,000 additional monthly revenue'
    },
    technologies: ['Webflow', 'DoorDash API', 'Google Analytics', 'Square POS Integration'],
    challenges: [
      'No online ordering system losing customers to competitors',
      'Slow, outdated website frustrating mobile users',
      'Poor menu presentation making food look unappetizing',
      'No integration with existing POS system'
    ],
    solutions: [
      'Fast-loading, mobile-optimized menu website',
      'Integrated online ordering with DoorDash and pickup options',
      'Professional food photography and appealing descriptions',
      'Square POS integration for seamless order management'
    ],
    completedDate: '2024-04-25',
    clientInfo: {
      name: 'Mama Rosa\'s Kitchen',
      industry: 'Restaurant & Food Service',
      size: '3-6 employees',
      location: 'Warren, Ohio'
    },
    projectScope: {
      duration: '7 days',
      budget: '$3,500',
      teamSize: '1 developer + food photographer'
    },
    beforeAfterMetrics: [
      {
        metric: 'Online Orders per Month',
        before: '45 orders',
        after: '135 orders',
        improvement: '200% increase'
      },
      {
        metric: 'Mobile Conversion Rate',
        before: '2.1%',
        after: '12.8%',
        improvement: '510% improvement'
      },
      {
        metric: 'Average Order Value',
        before: '$28',
        after: '$35',
        improvement: '25% increase'
      }
    ],
    processSteps: [
      {
        phase: 'Planning',
        title: 'Menu Strategy & Photography',
        description: 'Organized menu for online presentation and conducted professional food photography.',
        deliverables: [
          'Menu categorization and pricing',
          'Professional food photography',
          'Item descriptions optimization',
          'Online ordering flow design'
        ],
        timeline: 'Day 1-2'
      },
      {
        phase: 'Development',
        title: 'Site Build & Integration',
        description: 'Built fast-loading site with integrated ordering and POS connection.',
        deliverables: [
          'Mobile-first website development',
          'DoorDash ordering integration',
          'Square POS connection',
          'Menu management system'
        ],
        timeline: 'Day 3-5'
      },
      {
        phase: 'Optimization',
        title: 'Speed & SEO Enhancement',
        description: 'Optimized site speed and local SEO for maximum visibility and performance.',
        deliverables: [
          'Site speed optimization',
          'Local SEO setup',
          'Google My Business integration',
          'Analytics and tracking'
        ],
        timeline: 'Day 6'
      },
      {
        phase: 'Launch',
        title: 'Go Live & Training',
        description: 'Launched site and trained staff on order management and menu updates.',
        deliverables: [
          'Site launch and testing',
          'Staff training on order system',
          'Menu update procedures',
          'Performance monitoring setup'
        ],
        timeline: 'Day 7'
      }
    ],
    testimonial: {
      quote: "The new website completely transformed our delivery business. Orders started coming in immediately, and customers love how easy it is to browse our menu and place orders from their phones.",
      author: "Rosa Marcelli",
      position: "Owner",
      company: "Mama Rosa's Kitchen"
    },
    nextSteps: [
      'Email marketing for customer retention',
      'Loyalty program implementation',
      'Social media integration for promotional campaigns'
    ]
  },
  {
    id: 'landscaping-seasonal-automation',
    slug: 'landscaping-seasonal-automation',
    title: 'Green Valley Landscaping',
    category: 'Marketing Automation',
    serviceType: 'marketing-automation',
    tagline: '80% seasonal prep automation',
    description: 'Automated seasonal service reminders and upselling system that increased revenue 45% during transition periods.',
    clientResults: {
      timeframe: '45 days',
      metric: '45% revenue increase in seasonal transitions',
      keyOutcome: '80% automation of seasonal prep communications'
    },
    technologies: ['HubSpot', 'Zapier', 'Twilio SMS', 'Google Calendar', 'Weather API'],
    challenges: [
      'Manual tracking of 400+ seasonal service customers',
      'Missed opportunities for spring/fall prep upsells',
      'Inconsistent communication timing causing customer loss',
      'Staff overwhelmed managing seasonal transition logistics'
    ],
    solutions: [
      'Weather-triggered automated service reminders',
      'Seasonal upsell campaigns based on service history',
      'Automated crew scheduling and customer notifications',
      'Customer preference tracking for service timing'
    ],
    completedDate: '2024-08-01',
    clientInfo: {
      name: 'Green Valley Landscaping',
      industry: 'Landscaping & Lawn Care',
      size: '12-15 employees',
      location: 'Medina, Ohio'
    },
    projectScope: {
      duration: '45 days',
      budget: '$4,200',
      teamSize: '1 automation specialist'
    },
    beforeAfterMetrics: [
      {
        metric: 'Seasonal Prep Bookings',
        before: '60% of eligible customers',
        after: '87% of eligible customers',
        improvement: '45% increase in participation'
      },
      {
        metric: 'Admin Time for Seasonal Prep',
        before: '25 hours/week',
        after: '5 hours/week',
        improvement: '80% time reduction'
      },
      {
        metric: 'Upsell Revenue per Season',
        before: '$18,000',
        after: '$32,000',
        improvement: '78% revenue increase'
      }
    ],
    processSteps: [
      {
        phase: 'Analysis',
        title: 'Seasonal Service Mapping',
        description: 'Analyzed seasonal patterns, customer preferences, and optimal timing for different services.',
        deliverables: [
          'Customer service history analysis',
          'Seasonal timing optimization',
          'Weather pattern integration plan',
          'Upsell opportunity identification'
        ],
        timeline: 'Week 1'
      },
      {
        phase: 'Design',
        title: 'Automation Workflow Architecture',
        description: 'Designed intelligent workflows triggered by weather, calendar, and customer behavior.',
        deliverables: [
          'Weather-triggered reminder system',
          'Customer segmentation strategy',
          'Upsell campaign sequences',
          'Crew scheduling automation'
        ],
        timeline: 'Week 2'
      },
      {
        phase: 'Implementation',
        title: 'System Build & Integration',
        description: 'Built automation systems and integrated with existing CRM and scheduling tools.',
        deliverables: [
          'HubSpot workflow configuration',
          'Weather API integration',
          'SMS automation setup',
          'Calendar system connections'
        ],
        timeline: 'Week 3-5'
      },
      {
        phase: 'Testing',
        title: 'Seasonal Simulation & Refinement',
        description: 'Tested systems with historical data and refined timing and messaging.',
        deliverables: [
          'Historical data testing',
          'Message optimization',
          'Timing adjustment',
          'Error handling setup'
        ],
        timeline: 'Week 6'
      },
      {
        phase: 'Launch',
        title: 'Go Live & Staff Training',
        description: 'Launched automation for fall season and trained team on system management.',
        deliverables: [
          'Fall season campaign launch',
          'Staff training on overrides',
          'Performance monitoring setup',
          'Customer feedback collection'
        ],
        timeline: 'Week 7'
      }
    ],
    testimonial: {
      quote: "This system is incredible. It knows when to remind customers about leaf cleanup before we even think about it. Our booking rate for seasonal services has never been higher, and my office staff actually has time to focus on new customer calls.",
      author: "Mark Stevens",
      position: "Owner",
      company: "Green Valley Landscaping"
    },
    nextSteps: [
      'Customer lifetime value tracking automation',
      'Referral program automation',
      'Equipment maintenance scheduling integration'
    ]
  },
  {
    id: 'accounting-firm-rebrand',
    slug: 'accounting-firm-rebrand',
    title: 'Precision Tax & Accounting',
    category: 'Graphic Design',
    serviceType: 'graphic-design',
    tagline: 'Modern trust-building identity',
    description: 'Complete rebrand that helped local CPA firm attract younger business clients and increase average client value.',
    clientResults: {
      timeframe: '21 days',
      metric: '40% increase in business clients under 40',
      keyOutcome: '25% increase in average client retainer'
    },
    technologies: ['Adobe Creative Suite', 'Brand Strategy Framework', 'Canva Pro', 'Typography Research'],
    challenges: [
      'Dated visual identity driving away younger entrepreneurs',
      'Inconsistent materials across three office locations',
      'Generic accounting firm appearance lacking differentiation',
      'Low perceived value leading to price-shopping clients'
    ],
    solutions: [
      'Modern, approachable brand identity with professional credibility',
      'Comprehensive brand system for multi-location consistency',
      'Unique positioning as "Growth Partner" vs traditional accountant',
      'Premium visual presentation supporting higher-value positioning'
    ],
    completedDate: '2024-07-08',
    clientInfo: {
      name: 'Precision Tax & Accounting',
      industry: 'Professional Services',
      size: '8-12 employees',
      location: 'Akron, Ohio'
    },
    projectScope: {
      duration: '21 days',
      budget: '$3,400',
      teamSize: '1 brand designer + strategist'
    },
    beforeAfterMetrics: [
      {
        metric: 'Client Age Distribution (Under 40)',
        before: '25%',
        after: '35%',
        improvement: '40% increase in younger clients'
      },
      {
        metric: 'Average Monthly Retainer',
        before: '$320',
        after: '$400',
        improvement: '25% value increase'
      },
      {
        metric: 'Brand Consistency Score',
        before: '30%',
        after: '95%',
        improvement: '217% improvement'
      }
    ],
    processSteps: [
      {
        phase: 'Discovery',
        title: 'Market Position & Values Definition',
        description: 'Analyzed target market shift and defined differentiated positioning strategy.',
        deliverables: [
          'Target market analysis',
          'Competitive landscape review',
          'Brand values workshop',
          'Positioning statement development'
        ],
        timeline: 'Day 1-2'
      },
      {
        phase: 'Strategy',
        title: 'Visual Identity Concepts',
        description: 'Created three distinct brand approaches balancing professionalism with approachability.',
        deliverables: [
          '3 logo concept directions',
          'Color psychology analysis',
          'Typography pairing options',
          'Visual style explorations'
        ],
        timeline: 'Day 3-6'
      },
      {
        phase: 'Development',
        title: 'Brand System Creation',
        description: 'Developed complete visual system with detailed usage guidelines.',
        deliverables: [
          'Final logo suite and variations',
          'Color system with applications',
          'Typography hierarchy',
          'Icon system development'
        ],
        timeline: 'Day 7-12'
      },
      {
        phase: 'Application',
        title: 'Collateral Design & Templates',
        description: 'Applied brand to all business materials and created templates for consistency.',
        deliverables: [
          'Business card and letterhead design',
          'Proposal and invoice templates',
          'Social media template library',
          'Signage design for three locations'
        ],
        timeline: 'Day 13-18'
      },
      {
        phase: 'Implementation',
        title: 'Guidelines & Training Delivery',
        description: 'Delivered comprehensive brand guidelines and trained staff on consistent application.',
        deliverables: [
          'Brand guidelines document',
          'Template library with instructions',
          'Staff training on brand usage',
          'Vendor specification sheets'
        ],
        timeline: 'Day 19-21'
      }
    ],
    testimonial: {
      quote: "The rebrand completely changed how prospects perceive our firm. We're attracting the type of growth-oriented business clients we want to work with, and they're willing to pay for our expertise rather than shopping on price.",
      author: "Lisa Chen, CPA",
      position: "Managing Partner",
      company: "Precision Tax & Accounting"
    },
    nextSteps: [
      'Website redesign with new brand identity',
      'Marketing automation for client onboarding',
      'Thought leadership content strategy'
    ]
  },
  {
    id: 'auto-repair-digital-presence',
    slug: 'auto-repair-digital-presence',
    title: 'Summit Auto Repair',
    category: 'Website Development',
    serviceType: 'website-development',
    tagline: 'From phone-only to digital-first',
    description: 'Mobile-optimized website with appointment booking that increased new customer acquisition by 150%.',
    clientResults: {
      timeframe: '10 days',
      metric: '150% increase in new customers',
      keyOutcome: '70% of bookings now online vs phone'
    },
    technologies: ['Webflow', 'Calendly Pro', 'Google My Business API', 'Zapier', 'Twilio SMS'],
    challenges: [
      'Phone-only booking system limiting after-hours customer acquisition',
      'No online presence hurting credibility with younger car owners',
      'Difficulty explaining complex services and pricing over phone',
      'Lost customers to competitors with better online presence'
    ],
    solutions: [
      'Professional website with service explanations and transparent pricing',
      'Online appointment booking with service-specific time slots',
      'Mobile-first design for smartphone-using customers',
      'Automated appointment confirmations and reminder system'
    ],
    completedDate: '2024-06-22',
    clientInfo: {
      name: 'Summit Auto Repair',
      industry: 'Automotive Services',
      size: '4-6 employees',
      location: 'Barberton, Ohio'
    },
    projectScope: {
      duration: '10 days',
      budget: '$3,800',
      teamSize: '1 developer + copywriter'
    },
    beforeAfterMetrics: [
      {
        metric: 'New Customers per Month',
        before: '25 customers',
        after: '62 customers',
        improvement: '148% increase'
      },
      {
        metric: 'After-Hours Bookings',
        before: '0%',
        after: '35%',
        improvement: 'New revenue stream'
      },
      {
        metric: 'Customer Age (Under 35)',
        before: '20%',
        after: '45%',
        improvement: '125% increase in younger customers'
      }
    ],
    processSteps: [
      {
        phase: 'Research',
        title: 'Service Analysis & Customer Journey',
        description: 'Analyzed all services, pricing, and mapped ideal customer booking experience.',
        deliverables: [
          'Service catalog organization',
          'Pricing structure analysis',
          'Customer persona development',
          'Booking flow optimization'
        ],
        timeline: 'Day 1-2'
      },
      {
        phase: 'Content',
        title: 'Service Descriptions & Trust Building',
        description: 'Created clear service explanations and trust-building content for skeptical car owners.',
        deliverables: [
          'Service page copywriting',
          'FAQ development for common concerns',
          'Trust signal integration',
          'Local SEO content creation'
        ],
        timeline: 'Day 3-4'
      },
      {
        phase: 'Design',
        title: 'Mobile-First Visual Design',
        description: 'Designed professional, trustworthy site optimized for mobile browsing and booking.',
        deliverables: [
          'Mobile-responsive design system',
          'Service page layouts',
          'Booking interface design',
          'Trust element placement'
        ],
        timeline: 'Day 5-6'
      },
      {
        phase: 'Development',
        title: 'Site Build & Booking Integration',
        description: 'Built Webflow site with integrated booking system and automated communications.',
        deliverables: [
          'Webflow site development',
          'Calendly booking integration',
          'SMS reminder automation',
          'Google Analytics setup'
        ],
        timeline: 'Day 7-9'
      },
      {
        phase: 'Launch',
        title: 'Go Live & Staff Training',
        description: 'Launched site and trained staff on managing online bookings and customer communications.',
        deliverables: [
          'Site launch and testing',
          'Staff training on booking management',
          'Customer communication workflows',
          'Performance tracking setup'
        ],
        timeline: 'Day 10'
      }
    ],
    testimonial: {
      quote: "Having a real website completely changed our business. Customers can see exactly what we do and book appointments when it's convenient for them. We're getting customers we never would have reached before.",
      author: "Tony Rodriguez",
      position: "Owner",
      company: "Summit Auto Repair"
    },
    nextSteps: [
      'Customer review automation system',
      'Email marketing for maintenance reminders',
      'Digital service history tracking'
    ]
  },
  {
    id: 'plumbing-emergency-ads',
    slug: 'plumbing-emergency-ads',
    title: 'Rapid Response Plumbing',
    category: 'Digital Marketing',
    serviceType: 'digital-marketing',
    tagline: '24/7 emergency lead generation',
    description: 'Google Ads strategy targeting emergency plumbing situations that increased after-hours revenue by 180%.',
    clientResults: {
      timeframe: '60 days',
      metric: '180% increase in after-hours revenue',
      keyOutcome: 'Dominant position in emergency search results'
    },
    technologies: ['Google Ads', 'Google My Business', 'CallRail', 'HubSpot CRM', 'Landing Page Builder'],
    challenges: [
      'Low visibility for emergency plumbing searches',
      'Losing high-value emergency calls to larger competitors',
      'No tracking of ad performance or call quality',
      'Inconsistent lead flow causing staffing challenges'
    ],
    solutions: [
      'Emergency-focused Google Ads with 24/7 optimization',
      'Location-based targeting for immediate service area',
      'Call tracking and lead scoring for quality measurement',
      'Landing pages optimized for urgent conversion'
    ],
    completedDate: '2024-05-30',
    clientInfo: {
      name: 'Rapid Response Plumbing',
      industry: 'Home Services',
      size: '6-8 employees',
      location: 'Toledo, Ohio'
    },
    projectScope: {
      duration: '60 days',
      budget: '$3,500 setup + $1,800/month ad spend',
      teamSize: '1 PPC specialist'
    },
    beforeAfterMetrics: [
      {
        metric: 'Emergency Call Volume',
        before: '12 calls/month',
        after: '45 calls/month',
        improvement: '275% increase'
      },
      {
        metric: 'After-Hours Revenue',
        before: '$8,500/month',
        after: '$24,000/month',
        improvement: '182% increase'
      },
      {
        metric: 'Cost Per Emergency Lead',
        before: 'No tracking',
        after: '$28 per lead',
        improvement: 'Measurable ROI'
      }
    ],
    processSteps: [
      {
        phase: 'Research',
        title: 'Emergency Search Behavior Analysis',
        description: 'Analyzed how people search for emergency plumbing and competitive landscape.',
        deliverables: [
          'Emergency keyword research',
          'Competitor ad analysis',
          'Local search pattern study',
          'Customer urgency mapping'
        ],
        timeline: 'Week 1'
      },
      {
        phase: 'Strategy',
        title: 'Campaign Architecture Design',
        description: 'Designed ad campaigns optimized for emergency situations and immediate response.',
        deliverables: [
          'Campaign structure blueprint',
          'Emergency-focused ad copy',
          'Location targeting strategy',
          'Bid strategy for urgent keywords'
        ],
        timeline: 'Week 2'
      },
      {
        phase: 'Creation',
        title: 'Ads & Landing Pages',
        description: 'Created urgency-driven ads and landing pages designed for immediate conversion.',
        deliverables: [
          'Google Ads campaign setup',
          'Emergency landing pages',
          'Call tracking implementation',
          'Mobile optimization'
        ],
        timeline: 'Week 3-4'
      },
      {
        phase: 'Launch',
        title: 'Campaign Deployment & Monitoring',
        description: 'Launched campaigns with 24/7 monitoring for emergency situations.',
        deliverables: [
          'Campaign launch and testing',
          '24/7 performance monitoring',
          'Emergency response tracking',
          'Initial optimization'
        ],
        timeline: 'Week 5'
      },
      {
        phase: 'Optimization',
        title: 'Performance Enhancement',
        description: 'Continuous optimization based on call quality, conversion rates, and seasonal patterns.',
        deliverables: [
          'Daily bid adjustments',
          'Ad copy testing',
          'Landing page optimization',
          'Seasonal strategy adjustments'
        ],
        timeline: 'Week 6-8'
      }
    ],
    testimonial: {
      quote: "These ads transformed our emergency business. We're now the first call people make when they have a plumbing emergency, and our after-hours revenue has almost tripled. The system just works.",
      author: "Jim Walsh",
      position: "Owner",
      company: "Rapid Response Plumbing"
    },
    nextSteps: [
      'Seasonal campaign automation',
      'Customer retention campaigns',
      'Preventive maintenance lead generation'
    ]
  },
  {
    id: 'consulting-lead-funnel',
    slug: 'consulting-lead-funnel',
    title: 'Strategic Business Advisors',
    category: 'Digital Marketing',
    serviceType: 'digital-marketing',
    tagline: 'Premium lead pipeline',
    description: 'LinkedIn and content strategy that generated 25 qualified leads for $5,000+ consulting projects.',
    clientResults: {
      timeframe: '120 days',
      metric: '25 qualified enterprise leads',
      keyOutcome: '$125,000 in new business pipeline'
    },
    technologies: ['LinkedIn Sales Navigator', 'HubSpot CRM', 'Content Calendar Tools', 'Zapier'],
    challenges: [
      'Inconsistent lead flow creating feast-or-famine cycles',
      'Low-value prospects wasting time on discovery calls',
      'Time-intensive manual prospecting efforts',
      'No systematic approach to content marketing'
    ],
    solutions: [
      'Strategic LinkedIn content calendar for thought leadership',
      'Targeted outreach to decision-makers in mid-market companies',
      'Lead qualification system filtering for $5K+ project potential',
      'Automated follow-up sequences for different prospect types'
    ],
    completedDate: '2024-03-12',
    clientInfo: {
      name: 'Strategic Business Advisors',
      industry: 'Business Consulting',
      size: '1-2 employees',
      location: 'Columbus, Ohio'
    },
    projectScope: {
      duration: '120 days',
      budget: '$4,500',
      teamSize: '1 marketing strategist'
    },
    beforeAfterMetrics: [
      {
        metric: 'Qualified Monthly Leads',
        before: '3 leads',
        after: '8 leads',
        improvement: '167% increase'
      },
      {
        metric: 'Average Project Value',
        before: '$2,800',
        after: '$8,200',
        improvement: '193% increase'
      },
      {
        metric: 'LinkedIn Connections',
        before: '340',
        after: '1,250',
        improvement: '268% growth'
      }
    ],
    processSteps: [
      {
        phase: 'Strategy',
        title: 'Ideal Client Definition & Content Plan',
        description: 'Defined target market and created content strategy for thought leadership positioning.',
        deliverables: [
          'Ideal client profile development',
          'LinkedIn content calendar',
          'Thought leadership topics',
          'Engagement strategy framework'
        ],
        timeline: 'Week 1-2'
      },
      {
        phase: 'Content Creation',
        title: 'Thought Leadership Content Development',
        description: 'Created valuable content demonstrating expertise and attracting ideal prospects.',
        deliverables: [
          '3x weekly LinkedIn posts',
          'Industry insight articles',
          'Case study content',
          'Video content strategy'
        ],
        timeline: 'Week 3-8'
      },
      {
        phase: 'Outreach',
        title: 'Strategic Connection Building',
        description: 'Systematic outreach to ideal prospects with personalized messaging.',
        deliverables: [
          'Prospect list development',
          'Personalized connection requests',
          'Follow-up message sequences',
          'Relationship nurturing workflows'
        ],
        timeline: 'Week 4-16'
      },
      {
        phase: 'Optimization',
        title: 'Performance Analysis & Refinement',
        description: 'Analyzed results and optimized approach for better lead quality and conversion.',
        deliverables: [
          'Performance analytics review',
          'Content optimization',
          'Outreach message refinement',
          'Lead qualification improvement'
        ],
        timeline: 'Week 12-16'
      }
    ],
    testimonial: {
      quote: "This approach completely changed my business development. I went from chasing small projects to having enterprise clients reach out to me. The content strategy positioned me as the expert in my field.",
      author: "David Chen",
      position: "Principal Consultant",
      company: "Strategic Business Advisors"
    },
    nextSteps: [
      'Speaking opportunity development',
      'Partnership strategy with complementary firms',
      'Podcast and webinar content expansion'
    ]
  },
  {
    id: 'veterinary-clinic-automation',
    slug: 'veterinary-clinic-automation',
    title: 'Caring Paws Veterinary Clinic',
    category: 'Marketing Automation',
    serviceType: 'marketing-automation',
    tagline: 'Automated patient care communication',
    description: 'Comprehensive automation system for appointment reminders, post-visit follow-ups, and vaccination reminders.',
    clientResults: {
      timeframe: '30 days',
      metric: '40% reduction in missed appointments',
      keyOutcome: '18 hours/week saved on manual communications'
    },
    technologies: ['HubSpot', 'Zapier', 'Twilio SMS', 'Calendly', 'Veterinary Practice Management Software'],
    challenges: [
      'High no-show rate (25%) for routine appointments',
      'Manual vaccination reminder calls taking 18 hours/week',
      'Poor post-visit follow-up causing client retention issues',
      'Inconsistent communication across multiple veterinarians'
    ],
    solutions: [
      'Automated appointment reminders via SMS and email',
      'Post-visit care instruction automation with pet-specific details',
      'Vaccination and wellness reminder system based on pet records',
      'Emergency protocol automation for after-hours situations'
    ],
    completedDate: '2024-04-12',
    clientInfo: {
      name: 'Caring Paws Veterinary Clinic',
      industry: 'Veterinary Services',
      size: '8-12 employees',
      location: 'Strongsville, Ohio'
    },
    projectScope: {
      duration: '30 days',
      budget: '$4,800',
      teamSize: '1 automation specialist + veterinary consultant'
    },
    beforeAfterMetrics: [
      {
        metric: 'Appointment No-Show Rate',
        before: '25%',
        after: '8%',
        improvement: '68% reduction'
      },
      {
        metric: 'Staff Time on Reminders',
        before: '18 hours/week',
        after: '3 hours/week',
        improvement: '83% time savings'
      },
      {
        metric: 'Vaccination Compliance',
        before: '60%',
        after: '85%',
        improvement: '42% improvement'
      }
    ],
    processSteps: [
      {
        phase: 'Assessment',
        title: 'Current Process Documentation',
        description: 'Mapped all patient communication touchpoints and identified automation opportunities.',
        deliverables: [
          'Communication workflow audit',
          'Pet record system analysis',
          'Staff time tracking study',
          'Client communication preferences survey'
        ],
        timeline: 'Week 1'
      },
      {
        phase: 'Design',
        title: 'Automation Workflow Architecture',
        description: 'Designed pet-specific communication workflows for different service types and urgency levels.',
        deliverables: [
          'Pet lifecycle communication map',
          'Service-specific automation workflows',
          'Emergency protocol design',
          'Staff override procedures'
        ],
        timeline: 'Week 2'
      },
      {
        phase: 'Implementation',
        title: 'System Integration & Setup',
        description: 'Integrated automation with existing practice management software and communication channels.',
        deliverables: [
          'Practice management software integration',
          'HubSpot workflow configuration',
          'SMS and email automation setup',
          'Calendar system connections'
        ],
        timeline: 'Week 3'
      },
      {
        phase: 'Training',
        title: 'Staff Training & Go-Live',
        description: 'Trained veterinary staff on new systems and launched automation with monitoring.',
        deliverables: [
          'Veterinarian training on overrides',
          'Front desk automation training',
          'Emergency protocol implementation',
          'Performance monitoring setup'
        ],
        timeline: 'Week 4'
      }
    ],
    testimonial: {
      quote: "This automation system has been a game-changer for our practice. We're providing better care with automated follow-ups, and our staff can focus on the animals instead of making reminder calls all day.",
      author: "Dr. Sarah Kim, DVM",
      position: "Practice Owner",
      company: "Caring Paws Veterinary Clinic"
    },
    nextSteps: [
      'Pet health record automation',
      'Client education content automation',
      'Inventory management integration'
    ]
  },
  {
    id: 'fitness-studio-complete-transformation',
    slug: 'fitness-studio-complete-transformation',
    title: 'Iron Will Fitness Studio',
    category: 'Digital Marketing',
    serviceType: 'digital-marketing',
    tagline: 'Complete digital transformation',
    description: 'Full digital makeover including website, social media automation, and lead generation that doubled membership.',
    clientResults: {
      timeframe: '90 days',
      metric: '100% increase in new memberships',
      keyOutcome: 'From 85 to 170 active members'
    },
    technologies: ['Webflow', 'Instagram Business', 'Facebook Ads', 'HubSpot', 'Zapier', 'Calendly'],
    challenges: [
      'Outdated website driving potential members to competitors',
      'No social media presence limiting reach to younger demographics',
      'Manual membership sales process creating bottlenecks',
      'No systematic approach to member retention and referrals'
    ],
    solutions: [
      'Modern website with class scheduling and membership signup',
      'Automated social media content showcasing member transformations',
      'Facebook and Instagram ads targeting fitness beginners',
      'Member onboarding and retention automation workflows'
    ],
    completedDate: '2024-03-28',
    clientInfo: {
      name: 'Iron Will Fitness Studio',
      industry: 'Fitness & Wellness',
      size: '4-7 employees',
      location: 'Westlake, Ohio'
    },
    projectScope: {
      duration: '90 days',
      budget: '$6,500 + $1,200/month ad spend',
      teamSize: '1 digital marketing specialist + designer'
    },
    beforeAfterMetrics: [
      {
        metric: 'Active Memberships',
        before: '85 members',
        after: '170 members',
        improvement: '100% increase'
      },
      {
        metric: 'Monthly New Signups',
        before: '8 new members',
        after: '25 new members',
        improvement: '213% increase'
      },
      {
        metric: 'Social Media Engagement',
        before: '150 followers, 2% engagement',
        after: '850 followers, 8% engagement',
        improvement: '467% follower growth, 300% engagement'
      }
    ],
    processSteps: [
      {
        phase: 'Strategy',
        title: 'Market Analysis & Brand Positioning',
        description: 'Analyzed local fitness market and positioned studio for beginner-friendly transformation focus.',
        deliverables: [
          'Competitive landscape analysis',
          'Target member persona development',
          'Brand messaging refinement',
          'Content strategy framework'
        ],
        timeline: 'Week 1-2'
      },
      {
        phase: 'Website',
        title: 'Professional Site & Booking System',
        description: 'Built modern website with class scheduling, membership options, and member testimonials.',
        deliverables: [
          'Mobile-responsive website design',
          'Class scheduling integration',
          'Membership signup automation',
          'Member success story showcase'
        ],
        timeline: 'Week 3-5'
      },
      {
        phase: 'Social Media',
        title: 'Content Creation & Automation',
        description: 'Established social media presence with automated content featuring member transformations.',
        deliverables: [
          'Instagram and Facebook business setup',
          'Content calendar automation',
          'Member transformation content strategy',
          'Social media management workflows'
        ],
        timeline: 'Week 6-8'
      },
      {
        phase: 'Advertising',
        title: 'Targeted Lead Generation Campaigns',
        description: 'Launched Facebook and Instagram ads targeting fitness beginners and busy professionals.',
        deliverables: [
          'Facebook ads campaign structure',
          'Instagram story ad campaigns',
          'Lead magnet development (free trial)',
          'Conversion tracking setup'
        ],
        timeline: 'Week 9-10'
      },
      {
        phase: 'Optimization',
        title: 'Performance Analysis & Scaling',
        description: 'Analyzed results and optimized campaigns for better member acquisition and retention.',
        deliverables: [
          'Campaign performance analysis',
          'Website conversion optimization',
          'Social media engagement optimization',
          'Member retention workflow enhancement'
        ],
        timeline: 'Week 11-12'
      }
    ],
    testimonial: {
      quote: "The transformation has been incredible. We went from struggling to fill classes to having waiting lists. The automated systems handle so much that I can focus on what I love - helping people get fit and healthy.",
      author: "Marcus Johnson",
      position: "Owner & Head Trainer",
      company: "Iron Will Fitness Studio"
    },
    nextSteps: [
      'Member mobile app development',
      'Nutrition coaching automation',
      'Corporate wellness program marketing'
    ]
  }
];

// Helper functions for filtering and organizing portfolio data
export const getPortfolioByCategory = (category: string) => {
  if (category === 'all') return portfolioData;
  // Filter by serviceType, not category (category is for display)
  return portfolioData.filter(item => item.serviceType === category);
};

export const getFeaturedPortfolio = (limit?: number) => {
  const featured = portfolioData.filter(item => 
    ['wellness-studio-transformation', 'hvac-lead-generation', 'law-firm-rebrand', 'dental-practice-automation', 'fitness-studio-complete-transformation'].includes(item.id)
  );
  return limit ? featured.slice(0, limit) : featured;
};

export const getPortfolioBySlug = (slug: string) => {
  return portfolioData.find(item => item.slug === slug);
};

export const getRelatedPortfolio = (currentSlug: string, limit: number = 3) => {
  const current = getPortfolioBySlug(currentSlug);
  if (!current) return [];
  
  // Get other projects from same service type, then any others
  const sameService = portfolioData.filter(item => 
    item.slug !== currentSlug && item.serviceType === current.serviceType
  );
  const others = portfolioData.filter(item => 
    item.slug !== currentSlug && item.serviceType !== current.serviceType
  );
  
  return [...sameService, ...others].slice(0, limit);
};

// Portfolio statistics for overview pages
export const getPortfolioStats = () => {
  const total = portfolioData.length;
  // Count by display category for stats
  const byCategory = portfolioData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Count by service type for filtering
  const byServiceType = portfolioData.reduce((acc, item) => {
    acc[item.serviceType] = (acc[item.serviceType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const avgResults = {
    avgTimeToResults: '45 days',
    avgRevenueIncrease: '156%',
    avgTimesSaved: '12 hours/week',
    totalClientRevenue: '$2.8M+'
  };
  
  return {
    total,
    byCategory,
    byServiceType,
    featured: getFeaturedPortfolio().length,
    metrics: avgResults
  };
};

// Helper to get industry-specific portfolio items
export const getPortfolioByIndustry = (industry: string) => {
  return portfolioData.filter(item => 
    item.clientInfo.industry.toLowerCase().includes(industry.toLowerCase())
  );
};

// Helper to get portfolio items by service type
export const getPortfolioByService = (serviceType: string) => {
  return portfolioData.filter(item => item.serviceType === serviceType);
};

// Get most impressive results for homepage highlights
export const getTopResults = () => {
  return [
    {
      client: 'Northeast HVAC Solutions',
      result: '62% reduction in cost-per-lead',
      industry: 'Home Services'
    },
    {
      client: 'Mama Rosa\'s Kitchen',
      result: '200% increase in online orders',
      industry: 'Restaurant'
    },
    {
      client: 'Iron Will Fitness Studio',
      result: '100% increase in memberships',
      industry: 'Fitness'
    },
    {
      client: 'Bright Smile Dental',
      result: '87% reduction in admin time',
      industry: 'Healthcare'
    }
  ];
};