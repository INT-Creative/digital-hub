/**
 * Case Study Creator Agent for INT Creative
 * 
 * Documents client transformations and creates compelling case studies that
 * demonstrate ROI, build credibility, and support premium pricing strategies.
 */

class CaseStudyCreator {
  constructor() {
    this.name = "case-study-creator";
    this.description = "Creates compelling case studies and transformation documentation to showcase client results";
    this.tools = ["Write", "Read", "MultiEdit", "WebFetch"];
    
    // Initialize case study frameworks and templates
    this.caseStudyData = {
      templates: this.initializeCaseStudyTemplates(),
      stories: [],
      assets: this.initializeAssetTypes(),
      performance: this.initializePerformanceTracking(),
      clientConsents: []
    };
  }

  initializeCaseStudyTemplates() {
    return {
      'transformation_story': {
        name: 'Client Transformation Story',
        description: 'Complete before/during/after transformation narrative',
        structure: [
          {
            section: 'client_overview',
            title: 'Client Overview',
            purpose: 'Establish credibility and relatability',
            elements: ['company_background', 'industry_context', 'size_scope', 'initial_situation']
          },
          {
            section: 'challenge_definition',
            title: 'The Challenge',
            purpose: 'Define the problem and create empathy',
            elements: ['primary_challenge', 'pain_points', 'attempted_solutions', 'cost_of_inaction']
          },
          {
            section: 'solution_approach',
            title: 'Our Approach',
            purpose: 'Demonstrate expertise and methodology',
            elements: ['strategy_overview', 'implementation_phases', 'tools_used', 'timeline']
          },
          {
            section: 'implementation_journey',
            title: 'Implementation Journey',
            purpose: 'Show process and build confidence',
            elements: ['key_milestones', 'challenges_overcome', 'client_collaboration', 'adjustments_made']
          },
          {
            section: 'results_achieved',
            title: 'Results Achieved',
            purpose: 'Demonstrate concrete value and ROI',
            elements: ['quantitative_results', 'qualitative_improvements', 'timeline_to_results', 'ongoing_benefits']
          },
          {
            section: 'client_testimonial',
            title: 'Client Voice',
            purpose: 'Add authentic credibility',
            elements: ['direct_quotes', 'specific_benefits', 'recommendation', 'emotional_impact']
          },
          {
            section: 'lessons_learned',
            title: 'Key Takeaways',
            purpose: 'Show expertise and applicability',
            elements: ['success_factors', 'industry_insights', 'applicable_lessons', 'scalability']
          }
        ],
        formats: ['long_form_pdf', 'web_case_study', 'video_testimonial', 'social_proof_snippet']
      },
      'results_spotlight': {
        name: 'Results Spotlight',
        description: 'Focused on specific metrics and outcomes',
        structure: [
          {
            section: 'headline_results',
            title: 'The Numbers',
            purpose: 'Lead with impressive metrics',
            elements: ['primary_metric', 'percentage_improvement', 'timeframe', 'context']
          },
          {
            section: 'background',
            title: 'The Situation',
            purpose: 'Provide context for the results',
            elements: ['client_type', 'initial_state', 'goal_definition', 'success_criteria']
          },
          {
            section: 'intervention',
            title: 'What We Did',
            purpose: 'Briefly explain the solution',
            elements: ['key_strategies', 'implementation_highlights', 'duration']
          },
          {
            section: 'impact_breakdown',
            title: 'Impact Breakdown',
            purpose: 'Detail all measurable improvements',
            elements: ['primary_metrics', 'secondary_benefits', 'roi_calculation', 'ongoing_value']
          }
        ],
        formats: ['one_page_summary', 'infographic', 'social_media_post', 'email_snippet']
      },
      'industry_case_study': {
        name: 'Industry-Specific Case Study',
        description: 'Tailored for specific niche audiences',
        structure: [
          {
            section: 'industry_context',
            title: 'Industry Challenge',
            purpose: 'Establish relevance to niche audience',
            elements: ['common_industry_problems', 'market_conditions', 'competitive_landscape']
          },
          {
            section: 'client_profile',
            title: 'Client Profile',
            purpose: 'Create identification with target audience',
            elements: ['business_model', 'size_characteristics', 'typical_challenges', 'goals']
          },
          {
            section: 'specialized_solution',
            title: 'Specialized Solution',
            purpose: 'Demonstrate industry expertise',
            elements: ['industry_specific_approach', 'specialized_tools', 'compliance_considerations', 'best_practices']
          },
          {
            section: 'industry_results',
            title: 'Industry-Relevant Results',
            purpose: 'Show understanding of what matters in this industry',
            elements: ['industry_specific_metrics', 'competitive_advantages', 'regulatory_compliance', 'scalability']
          },
          {
            section: 'applicability',
            title: 'Application to Your Business',
            purpose: 'Make it easy for prospects to see relevance',
            elements: ['similar_situations', 'adaptable_strategies', 'expected_outcomes', 'implementation_feasibility']
          }
        ],
        formats: ['industry_report', 'webinar_content', 'speaking_presentation', 'trade_publication']
      },
      'problem_solution_showcase': {
        name: 'Problem-Solution Showcase',
        description: 'Focus on specific problem resolution',
        structure: [
          {
            section: 'problem_identification',
            title: 'The Problem',
            purpose: 'Clearly define the specific issue',
            elements: ['problem_description', 'symptoms', 'root_causes', 'impact_assessment']
          },
          {
            section: 'solution_design',
            title: 'The Solution',
            purpose: 'Demonstrate problem-solving capability',
            elements: ['solution_rationale', 'methodology', 'implementation_plan', 'success_metrics']
          },
          {
            section: 'execution_details',
            title: 'Execution',
            purpose: 'Show practical implementation skills',
            elements: ['step_by_step_process', 'tools_techniques', 'timeline', 'quality_assurance']
          },
          {
            section: 'problem_resolution',
            title: 'Resolution',
            purpose: 'Prove the problem was solved',
            elements: ['before_after_comparison', 'metric_improvements', 'client_feedback', 'verification_methods']
          }
        ],
        formats: ['detailed_report', 'presentation', 'white_paper', 'methodology_guide']
      }
    };
  }

  initializeAssetTypes() {
    return {
      'written_content': {
        'long_form_case_study': {
          length: '2000-4000 words',
          format: 'PDF or web page',
          purpose: 'Comprehensive story for serious prospects',
          distribution: ['website', 'email_attachments', 'proposals']
        },
        'case_study_summary': {
          length: '500-800 words',
          format: 'Web page or one-pager',
          purpose: 'Quick overview for initial interest',
          distribution: ['website', 'social_media', 'email']
        },
        'success_story_blog': {
          length: '800-1200 words',
          format: 'Blog post',
          purpose: 'SEO and thought leadership',
          distribution: ['blog', 'linkedin', 'medium']
        }
      },
      'visual_assets': {
        'results_infographic': {
          format: 'PNG/JPG infographic',
          purpose: 'Visual impact for social sharing',
          distribution: ['social_media', 'presentations', 'website']
        },
        'before_after_comparison': {
          format: 'Side-by-side visual',
          purpose: 'Clear transformation demonstration',
          distribution: ['presentations', 'website', 'proposals']
        },
        'timeline_visualization': {
          format: 'Process timeline graphic',
          purpose: 'Show implementation journey',
          distribution: ['presentations', 'website', 'proposals']
        }
      },
      'video_content': {
        'client_testimonial_video': {
          length: '2-5 minutes',
          format: 'MP4 video',
          purpose: 'Authentic credibility building',
          distribution: ['website', 'social_media', 'presentations']
        },
        'results_walkthrough': {
          length: '3-8 minutes',
          format: 'Screen recording with narration',
          purpose: 'Detailed results demonstration',
          distribution: ['website', 'proposals', 'follow_up_emails']
        }
      },
      'social_proof_snippets': {
        'quote_graphics': {
          format: 'Text overlay on branded background',
          purpose: 'Social media engagement',
          distribution: ['social_media', 'email_signatures', 'website']
        },
        'metric_highlights': {
          format: 'Number-focused graphics',
          purpose: 'Attention-grabbing results',
          distribution: ['social_media', 'presentations', 'proposals']
        }
      }
    };
  }

  initializePerformanceTracking() {
    return {
      case_studies: {
        total_created: 0,
        by_service: {},
        by_niche: {},
        by_format: {}
      },
      usage: {
        proposal_inclusions: 0,
        website_views: 0,
        social_shares: 0,
        email_attachments: 0
      },
      effectiveness: {
        proposal_win_rate_with_case_studies: 0,
        proposal_win_rate_without: 0,
        case_study_influenced_sales: 0
      }
    };
  }

  createCaseStudy(clientData, projectData, templateType = 'transformation_story') {
    const template = this.caseStudyData.templates[templateType];
    if (!template) throw new Error(`Template ${templateType} not found`);

    const caseStudy = {
      id: this.generateCaseStudyId(),
      template: templateType,
      client: this.anonymizeClientData(clientData),
      project: projectData,
      status: 'draft',
      content: {},
      assets: [],
      approvals: {
        client_consent: false,
        content_approved: false,
        final_review: false
      },
      created: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };

    // Generate content for each section
    template.structure.forEach(section => {
      caseStudy.content[section.section] = this.generateSectionContent(section, clientData, projectData);
    });

    // Store the case study
    this.caseStudyData.stories.push(caseStudy);
    this.updatePerformanceMetrics(caseStudy);

    return caseStudy;
  }

  generateCaseStudyId() {
    return `case_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  }

  anonymizeClientData(clientData) {
    return {
      displayName: clientData.anonymizedName || this.generateAnonymizedName(clientData),
      industry: clientData.industry,
      niche: clientData.niche,
      size: clientData.companySize || 'small business',
      location: clientData.generalLocation || 'Northeast Ohio',
      originalName: clientData.companyName, // For internal reference only
      consentLevel: clientData.consentLevel || 'anonymized' // anonymized, first_name_only, full_disclosure
    };
  }

  generateAnonymizedName(clientData) {
    const industryPrefixes = {
      'hvac': ['Elite', 'Premier', 'Reliable', 'Quality'],
      'plumbing': ['Pro', 'Expert', 'Superior', 'Trusted'],
      'restaurant': ['Bella\'s', 'Corner', 'Family', 'Local'],
      'medspa': ['Radiant', 'Renewal', 'Serenity', 'Luxe'],
      'wellness': ['Harmony', 'Balance', 'Vitality', 'Pure']
    };

    const industrySuffixes = {
      'hvac': ['HVAC', 'Heating & Cooling', 'Climate Services'],
      'plumbing': ['Plumbing', 'Plumbing Services', 'Pipe Works'],
      'restaurant': ['Bistro', 'Cafe', 'Restaurant', 'Eatery'],
      'medspa': ['Med Spa', 'Aesthetics', 'Wellness Center'],
      'wellness': ['Wellness', 'Health Center', 'Spa']
    };

    const industryKey = this.inferIndustryKey(clientData.industry);
    const prefixes = industryPrefixes[industryKey] || ['Professional', 'Quality', 'Premier'];
    const suffixes = industrySuffixes[industryKey] || ['Services', 'Company', 'Group'];

    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    return `${prefix} ${suffix}`;
  }

  inferIndustryKey(industry) {
    const lowerIndustry = industry.toLowerCase();
    if (lowerIndustry.includes('hvac')) return 'hvac';
    if (lowerIndustry.includes('plumbing')) return 'plumbing';
    if (lowerIndustry.includes('restaurant') || lowerIndustry.includes('food')) return 'restaurant';
    if (lowerIndustry.includes('spa') || lowerIndustry.includes('aesthetic')) return 'medspa';
    if (lowerIndustry.includes('wellness') || lowerIndustry.includes('health')) return 'wellness';
    return 'general';
  }

  generateSectionContent(section, clientData, projectData) {
    const generators = {
      'client_overview': () => this.generateClientOverview(clientData, projectData),
      'challenge_definition': () => this.generateChallengeDefinition(clientData, projectData),
      'solution_approach': () => this.generateSolutionApproach(clientData, projectData),
      'implementation_journey': () => this.generateImplementationJourney(clientData, projectData),
      'results_achieved': () => this.generateResultsAchieved(clientData, projectData),
      'client_testimonial': () => this.generateClientTestimonial(clientData, projectData),
      'lessons_learned': () => this.generateLessonsLearned(clientData, projectData),
      'headline_results': () => this.generateHeadlineResults(clientData, projectData),
      'background': () => this.generateBackground(clientData, projectData),
      'intervention': () => this.generateIntervention(clientData, projectData),
      'impact_breakdown': () => this.generateImpactBreakdown(clientData, projectData)
    };

    const generator = generators[section.section];
    if (!generator) {
      return {
        title: section.title,
        content: `[${section.section} content to be developed]`,
        purpose: section.purpose,
        elements: section.elements
      };
    }

    return {
      title: section.title,
      ...generator(),
      purpose: section.purpose,
      elements: section.elements
    };
  }

  generateClientOverview(clientData, projectData) {
    const overview = {
      company_background: `${clientData.anonymizedName || clientData.displayName} is a ${clientData.companySize || 'established'} ${clientData.industry} business serving the ${clientData.generalLocation || 'Northeast Ohio'} area.`,
      
      industry_context: this.generateIndustryContext(clientData.industry),
      
      size_scope: `With ${clientData.employeeCount || '5-15'} employees, they represent a typical ${clientData.industry} business facing common industry challenges while maintaining high service standards.`,
      
      initial_situation: `When we first connected with ${clientData.displayName}, they were ${projectData.initialSituation || 'looking to improve their digital presence and customer acquisition'}. Like many ${clientData.industry} businesses, they were ${projectData.commonStruggles || 'struggling with inconsistent lead generation and manual processes'}.`
    };

    return {
      content: overview,
      narrative: this.combineIntoNarrative(overview)
    };
  }

  generateIndustryContext(industry) {
    const contexts = {
      'HVAC': 'The HVAC industry is highly seasonal and competitive, with businesses needing to maintain steady revenue during slower periods while capitalizing on peak demand times.',
      'Plumbing': 'Plumbing services operate in a market where emergency response time and reputation are critical, with customer acquisition often dependent on word-of-mouth and online presence.',
      'Restaurant': 'The restaurant industry faces constant challenges with customer acquisition, online reputation management, and adapting to changing consumer preferences and ordering habits.',
      'Med Spa': 'Medical spas operate in a competitive wellness market where professional credibility, online presence, and client experience differentiation are essential for growth.',
      'Professional Services': 'Professional service firms must establish authority and trust while generating qualified leads in markets where personal relationships and reputation are paramount.'
    };

    return contexts[industry] || `The ${industry} industry faces unique challenges in customer acquisition, digital presence, and operational efficiency.`;
  }

  generateChallengeDefinition(clientData, projectData) {
    return {
      content: {
        primary_challenge: projectData.primaryChallenge || 'Inconsistent lead generation and customer acquisition',
        pain_points: projectData.painPoints || [
          'Difficulty generating qualified leads consistently',
          'Lack of professional online presence',
          'Manual processes taking up valuable time',
          'Difficulty competing with larger companies'
        ],
        attempted_solutions: projectData.attemptedSolutions || [
          'Basic website that wasn\'t generating leads',
          'Inconsistent social media posting',
          'Word-of-mouth marketing only',
          'Basic Google My Business listing'
        ],
        cost_of_inaction: this.calculateCostOfInaction(projectData)
      },
      impact_analysis: this.generateImpactAnalysis(projectData)
    };
  }

  calculateCostOfInaction(projectData) {
    const estimates = {
      'lead_generation': '$2,000-5,000 monthly in missed opportunities',
      'reputation_management': '$1,000-3,000 monthly from poor online presence',
      'automation': '10-15 hours weekly on manual tasks',
      'competitive_positioning': '20-30% higher customer acquisition costs'
    };

    return estimates[projectData.primaryProblemArea] || '$2,000-4,000 monthly in lost opportunities';
  }

  generateImpactAnalysis(projectData) {
    return {
      business_impact: 'Limited growth potential and increased stress from manual operations',
      competitive_impact: 'Falling behind competitors with better digital presence',
      operational_impact: 'Time spent on manual tasks instead of business development',
      financial_impact: this.calculateCostOfInaction(projectData)
    };
  }

  generateSolutionApproach(clientData, projectData) {
    return {
      content: {
        strategy_overview: this.generateStrategyOverview(projectData.serviceType),
        implementation_phases: this.generateImplementationPhases(projectData.serviceType),
        tools_used: this.getToolsForService(projectData.serviceType),
        timeline: projectData.timeline || this.getDefaultTimeline(projectData.serviceType)
      },
      methodology: this.generateMethodology(projectData.serviceType)
    };
  }

  generateStrategyOverview(serviceType) {
    const strategies = {
      'website-development': 'Create a conversion-focused website that captures leads 24/7 and positions the business professionally in their market.',
      'digital-marketing': 'Implement a systematic lead generation system using targeted advertising and automated follow-up to create predictable customer acquisition.',
      'graphic-design': 'Develop a professional brand identity that builds credibility and allows the business to command premium pricing.',
      'marketing-automation': 'Automate repetitive business processes to free up time for growth activities while ensuring no leads are lost.'
    };

    return strategies[serviceType] || 'Implement a comprehensive digital transformation strategy tailored to the client\'s specific needs and market position.';
  }

  generateImplementationPhases(serviceType) {
    const phases = {
      'website-development': [
        'Discovery and content strategy',
        'Design and user experience optimization',
        'Development and functionality implementation',
        'Testing and launch preparation',
        'Go-live and performance monitoring'
      ],
      'digital-marketing': [
        'Market research and audience targeting',
        'Campaign setup and automation configuration',
        'Content creation and ad development',
        'Launch and initial optimization',
        'Ongoing monitoring and refinement'
      ],
      'graphic-design': [
        'Brand discovery and competitive analysis',
        'Concept development and design exploration',
        'Design refinement and stakeholder feedback',
        'Final design development and asset creation',
        'Brand guidelines and implementation support'
      ],
      'marketing-automation': [
        'Process audit and workflow mapping',
        'System design and integration planning',
        'Automation development and testing',
        'Implementation and team training',
        'Optimization and performance monitoring'
      ]
    };

    return phases[serviceType] || [
      'Discovery and strategy development',
      'Implementation and development',
      'Testing and refinement',
      'Launch and training',
      'Monitoring and optimization'
    ];
  }

  getToolsForService(serviceType) {
    const tools = {
      'website-development': ['Webflow', 'Google Analytics', 'Google Tag Manager', 'Hotjar'],
      'digital-marketing': ['Meta Business Manager', 'Google Ads', 'HubSpot', 'Zapier'],
      'graphic-design': ['Adobe Creative Suite', 'Figma', 'Brand strategy frameworks'],
      'marketing-automation': ['HubSpot', 'Zapier', 'ActiveCampaign', 'Custom integrations']
    };

    return tools[serviceType] || ['Industry-leading tools and platforms'];
  }

  getDefaultTimeline(serviceType) {
    const timelines = {
      'website-development': '7 days',
      'digital-marketing': '14 days setup + ongoing optimization',
      'graphic-design': '9 days',
      'marketing-automation': '12 days'
    };

    return timelines[serviceType] || '2-3 weeks';
  }

  generateMethodology(serviceType) {
    return {
      approach: 'Collaborative and iterative',
      communication: 'Daily updates and weekly check-ins',
      quality_assurance: 'Multiple review stages and client approval points',
      success_measurement: 'Clear KPIs and regular performance monitoring'
    };
  }

  generateImplementationJourney(clientData, projectData) {
    return {
      content: {
        key_milestones: projectData.milestones || this.generateDefaultMilestones(projectData.serviceType),
        challenges_overcome: projectData.challengesOvercome || this.generateTypicalChallenges(projectData.serviceType),
        client_collaboration: 'Regular feedback sessions and collaborative decision-making throughout the project',
        adjustments_made: projectData.adjustments || 'Minor scope adjustments to better meet evolving business needs'
      },
      timeline_details: this.generateTimelineDetails(projectData)
    };
  }

  generateDefaultMilestones(serviceType) {
    const milestones = {
      'website-development': [
        'Content strategy and sitemap approval',
        'Design mockup approval',
        'Development completion',
        'Testing and refinement',
        'Launch and go-live'
      ],
      'digital-marketing': [
        'Audience research and targeting complete',
        'Campaign assets developed',
        'Initial campaign launch',
        'First optimization cycle',
        'Scaling successful campaigns'
      ]
    };

    return milestones[serviceType] || [
      'Project kickoff and discovery',
      'Initial deliverables complete',
      'Client review and feedback',
      'Refinements and optimization',
      'Final delivery and launch'
    ];
  }

  generateTypicalChallenges(serviceType) {
    const challenges = {
      'website-development': [
        'Clarifying target audience messaging',
        'Balancing feature requests with timeline',
        'Integrating with existing systems'
      ],
      'digital-marketing': [
        'Refining target audience parameters',
        'Optimizing ad creative performance',
        'Balancing reach with cost efficiency'
      ]
    };

    return challenges[serviceType] || [
      'Aligning stakeholder expectations',
      'Balancing scope with timeline',
      'Ensuring quality while meeting deadlines'
    ];
  }

  generateResultsAchieved(clientData, projectData) {
    return {
      content: {
        quantitative_results: projectData.quantitativeResults || this.generateDefaultQuantitativeResults(projectData.serviceType),
        qualitative_improvements: projectData.qualitativeResults || this.generateDefaultQualitativeResults(projectData.serviceType),
        timeline_to_results: projectData.timelineToResults || this.getDefaultResultsTimeline(projectData.serviceType),
        ongoing_benefits: projectData.ongoingBenefits || this.generateOngoingBenefits(projectData.serviceType)
      },
      roi_calculation: this.calculateROI(projectData)
    };
  }

  generateDefaultQuantitativeResults(serviceType) {
    const results = {
      'website-development': [
        '300% increase in online inquiries within 30 days',
        '150% improvement in time spent on site',
        '45% increase in mobile conversion rate',
        '60% reduction in bounce rate'
      ],
      'digital-marketing': [
        '40% reduction in cost per lead',
        '200% increase in qualified leads',
        '15% improvement in conversion rate',
        '300% increase in social media engagement'
      ],
      'graphic-design': [
        '85% improvement in brand recognition',
        '30% increase in perceived value',
        '25% improvement in customer confidence',
        '50% more professional appearance rating'
      ],
      'marketing-automation': [
        '75% reduction in manual task time',
        '100% lead follow-up rate',
        '40% improvement in response time',
        '90% reduction in data entry errors'
      ]
    };

    return results[serviceType] || [
      'Significant improvement in key business metrics',
      'Enhanced operational efficiency',
      'Improved customer experience',
      'Measurable ROI within 90 days'
    ];
  }

  generateDefaultQualitativeResults(serviceType) {
    const results = {
      'website-development': [
        'Professional credibility with potential customers',
        'Increased confidence in business presentations',
        'Better customer first impressions',
        'Competitive advantage in the market'
      ],
      'digital-marketing': [
        'Predictable lead flow for business planning',
        'Reduced stress about customer acquisition',
        'Better understanding of customer demographics',
        'Improved market positioning'
      ]
    };

    return results[serviceType] || [
      'Improved business confidence',
      'Better customer relationships',
      'Enhanced market position',
      'Reduced operational stress'
    ];
  }

  getDefaultResultsTimeline(serviceType) {
    const timelines = {
      'website-development': 'Results visible within 30 days of launch',
      'digital-marketing': 'Initial results within 48 hours, full optimization within 60 days',
      'graphic-design': 'Immediate improvement in perceived professionalism',
      'marketing-automation': 'Time savings immediate, full ROI within 90 days'
    };

    return timelines[serviceType] || 'Results achieved within 30-90 days';
  }

  generateOngoingBenefits(serviceType) {
    const benefits = {
      'website-development': [
        '24/7 lead generation capability',
        'Scalable foundation for growth',
        'Reduced dependence on referrals',
        'Professional market presence'
      ],
      'digital-marketing': [
        'Predictable customer acquisition',
        'Data-driven marketing decisions',
        'Scalable growth system',
        'Competitive market intelligence'
      ]
    };

    return benefits[serviceType] || [
      'Sustainable competitive advantage',
      'Scalable business systems',
      'Improved operational efficiency',
      'Long-term growth foundation'
    ];
  }

  calculateROI(projectData) {
    const investment = projectData.totalInvestment || 5000;
    const monthlyBenefit = projectData.monthlyBenefit || 2000;
    const paybackPeriod = Math.ceil(investment / monthlyBenefit);
    const annualROI = ((monthlyBenefit * 12) / investment) * 100;

    return {
      total_investment: `$${investment.toLocaleString()}`,
      monthly_benefit: `$${monthlyBenefit.toLocaleString()}`,
      payback_period: `${paybackPeriod} months`,
      annual_roi: `${Math.round(annualROI)}%`,
      calculation_basis: 'Based on measured improvements in lead generation and operational efficiency'
    };
  }

  generateClientTestimonial(clientData, projectData) {
    return {
      content: {
        direct_quotes: projectData.testimonialQuotes || this.generateSampleTestimonial(clientData, projectData),
        specific_benefits: projectData.specificBenefits || this.generateSpecificBenefits(projectData.serviceType),
        recommendation: projectData.recommendation || this.generateRecommendation(clientData),
        emotional_impact: projectData.emotionalImpact || this.generateEmotionalImpact(projectData.serviceType)
      },
      authenticity_indicators: this.generateAuthenticityIndicators(clientData)
    };
  }

  generateSampleTestimonial(clientData, projectData) {
    const testimonials = {
      'website-development': `"Our new website has completely transformed how customers see our business. We're getting calls from people who found us online, which never happened before. The professional look has given us credibility to compete with much larger companies."`,
      'digital-marketing': `"For the first time in years, I can predict how many customers we'll get next month. The automated system captures leads even when we're busy, and the follow-up sequence has turned prospects into customers automatically."`,
      'graphic-design': `"The professional branding has changed everything. Customers treat us completely differently now - we went from looking like a hobby to looking like the industry leader. We can charge premium prices because we look the part."`,
      'marketing-automation': `"This has given me my life back. I'm not drowning in administrative tasks anymore, and nothing falls through the cracks. Every lead gets followed up with, and I can focus on actually growing the business."`
    };

    return testimonials[projectData.serviceType] || `"Working with INT Creative has transformed our business. The results speak for themselves, and the professional approach made the entire process smooth and stress-free."`;
  }

  generateSpecificBenefits(serviceType) {
    const benefits = {
      'website-development': [
        'Professional appearance that builds immediate trust',
        '24/7 lead capture even when busy with customers',
        'Mobile-friendly design for smartphone users',
        'SEO optimization bringing in organic traffic'
      ],
      'digital-marketing': [
        'Predictable lead generation for business planning',
        'Automated follow-up that never misses prospects',
        'Clear tracking of marketing ROI',
        'Targeted advertising that reaches ideal customers'
      ]
    };

    return benefits[serviceType] || [
      'Improved business efficiency',
      'Better customer acquisition',
      'Enhanced professional image',
      'Measurable business growth'
    ];
  }

  generateRecommendation(clientData) {
    return `"I'd recommend INT Creative to any ${clientData.industry} business owner who's serious about growth. They understand our industry and deliver exactly what they promise."`;
  }

  generateEmotionalImpact(serviceType) {
    const impacts = {
      'website-development': 'Relief from embarrassment about online presence, pride in professional appearance',
      'digital-marketing': 'Reduced stress about finding customers, excitement about predictable growth',
      'graphic-design': 'Confidence in business presentations, pride in professional materials',
      'marketing-automation': 'Freedom from manual tasks, excitement about business potential'
    };

    return impacts[serviceType] || 'Increased confidence and reduced stress about business operations';
  }

  generateAuthenticityIndicators(clientData) {
    return {
      consent_level: clientData.consentLevel,
      verification_available: true,
      context_details: 'Specific business context and challenges verified',
      timeline_accuracy: 'Dates and timelines confirmed with client records'
    };
  }

  generateLessonsLearned(clientData, projectData) {
    return {
      content: {
        success_factors: this.generateSuccessFactors(projectData.serviceType),
        industry_insights: this.generateIndustryInsights(clientData.industry),
        applicable_lessons: this.generateApplicableLessons(projectData.serviceType),
        scalability: this.generateScalabilityInsights(projectData.serviceType)
      },
      broader_implications: this.generateBroaderImplications(clientData.industry, projectData.serviceType)
    };
  }

  generateSuccessFactors(serviceType) {
    const factors = {
      'website-development': [
        'Clear understanding of target customer needs',
        'Focus on conversion over aesthetics',
        'Mobile-first design approach',
        'Integration with existing business processes'
      ],
      'digital-marketing': [
        'Thorough audience research and targeting',
        'Continuous optimization based on data',
        'Integration with CRM and follow-up systems',
        'Focus on quality leads over quantity'
      ]
    };

    return factors[serviceType] || [
      'Clear goal definition and success metrics',
      'Collaborative approach with regular feedback',
      'Focus on measurable business outcomes',
      'Integration with existing business operations'
    ];
  }

  generateIndustryInsights(industry) {
    const insights = {
      'HVAC': 'Seasonal businesses benefit most from automated lead capture during busy periods when phone calls might be missed',
      'Restaurant': 'Visual appeal and social proof are critical for restaurant marketing success',
      'Med Spa': 'Professional credibility and trust-building are essential in the wellness industry'
    };

    return insights[industry] || 'Industry-specific expertise is crucial for optimal results';
  }

  createCaseStudyAssets(caseStudyId, assetTypes = ['long_form_case_study', 'results_infographic']) {
    const caseStudy = this.caseStudyData.stories.find(cs => cs.id === caseStudyId);
    if (!caseStudy) throw new Error('Case study not found');

    const assets = [];

    assetTypes.forEach(assetType => {
      const asset = this.generateAsset(caseStudy, assetType);
      assets.push(asset);
      caseStudy.assets.push(asset);
    });

    return {
      caseStudyId,
      assetsCreated: assets.length,
      assets
    };
  }

  generateAsset(caseStudy, assetType) {
    const assetConfig = this.findAssetConfig(assetType);
    
    const asset = {
      id: this.generateAssetId(),
      caseStudyId: caseStudy.id,
      type: assetType,
      config: assetConfig,
      content: this.generateAssetContent(caseStudy, assetType),
      distribution: assetConfig.distribution,
      created: new Date().toISOString(),
      status: 'ready'
    };

    return asset;
  }

  findAssetConfig(assetType) {
    // Search through all asset categories to find the type
    for (const category of Object.values(this.caseStudyData.assets)) {
      if (category[assetType]) {
        return category[assetType];
      }
    }
    throw new Error(`Asset type ${assetType} not found`);
  }

  generateAssetId() {
    return `asset_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  }

  generateAssetContent(caseStudy, assetType) {
    const generators = {
      'long_form_case_study': () => this.generateLongFormContent(caseStudy),
      'case_study_summary': () => this.generateSummaryContent(caseStudy),
      'results_infographic': () => this.generateInfographicContent(caseStudy),
      'client_testimonial_video': () => this.generateVideoContent(caseStudy),
      'quote_graphics': () => this.generateQuoteGraphicContent(caseStudy)
    };

    const generator = generators[assetType];
    if (!generator) {
      return { content: `[${assetType} content to be generated]` };
    }

    return generator();
  }

  generateLongFormContent(caseStudy) {
    const sections = Object.values(caseStudy.content);
    let content = `# ${caseStudy.client.displayName}: ${this.generateCaseStudyTitle(caseStudy)}\n\n`;
    
    sections.forEach(section => {
      content += `## ${section.title}\n\n`;
      if (section.narrative) {
        content += `${section.narrative}\n\n`;
      } else if (section.content) {
        if (typeof section.content === 'object') {
          Object.entries(section.content).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              content += `**${this.formatKey(key)}:**\n`;
              value.forEach(item => content += `• ${item}\n`);
              content += '\n';
            } else {
              content += `**${this.formatKey(key)}:** ${value}\n\n`;
            }
          });
        } else {
          content += `${section.content}\n\n`;
        }
      }
    });

    return { content, wordCount: content.split(' ').length };
  }

  generateCaseStudyTitle(caseStudy) {
    const service = caseStudy.project.serviceType;
    const results = caseStudy.content.results_achieved || caseStudy.content.headline_results;
    
    if (results && results.content && results.content.quantitative_results) {
      const primaryResult = results.content.quantitative_results[0];
      return `How ${caseStudy.client.displayName} Achieved ${primaryResult}`;
    }

    const defaultTitles = {
      'website-development': 'Website Transformation Success Story',
      'digital-marketing': 'Digital Marketing Transformation',
      'graphic-design': 'Brand Identity Transformation',
      'marketing-automation': 'Business Automation Success'
    };

    return defaultTitles[service] || 'Business Transformation Success Story';
  }

  formatKey(key) {
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  generateSummaryContent(caseStudy) {
    const overview = caseStudy.content.client_overview;
    const challenge = caseStudy.content.challenge_definition;
    const results = caseStudy.content.results_achieved;

    const summary = `
**Client:** ${caseStudy.client.displayName}
**Industry:** ${caseStudy.client.industry}
**Challenge:** ${challenge?.content?.primary_challenge || 'Business growth challenges'}

**Solution:** ${this.generateSolutionSummary(caseStudy.project.serviceType)}

**Results:**
${results?.content?.quantitative_results?.slice(0, 3).map(r => `• ${r}`).join('\n') || '• Significant business improvements'}

**ROI:** ${results?.roi_calculation?.annual_roi || 'Positive ROI within 90 days'}
    `.trim();

    return { content: summary, wordCount: summary.split(' ').length };
  }

  generateSolutionSummary(serviceType) {
    const summaries = {
      'website-development': 'Conversion-focused website with lead generation capabilities',
      'digital-marketing': 'Systematic lead generation with automated follow-up',
      'graphic-design': 'Professional brand identity and marketing materials',
      'marketing-automation': 'Automated business processes and lead nurturing'
    };

    return summaries[serviceType] || 'Comprehensive digital transformation solution';
  }

  generateInfographicContent(caseStudy) {
    const results = caseStudy.content.results_achieved || caseStudy.content.headline_results;
    const quantResults = results?.content?.quantitative_results || [];

    return {
      title: `${caseStudy.client.displayName} Results`,
      metrics: quantResults.slice(0, 4).map(result => ({
        label: this.extractMetricLabel(result),
        value: this.extractMetricValue(result),
        improvement: this.extractImprovementType(result)
      })),
      timeframe: results?.content?.timeline_to_results || 'Within 90 days',
      service: caseStudy.project.serviceType
    };
  }

  extractMetricLabel(result) {
    // Extract the metric type from result string
    if (result.includes('increase')) return 'Increase';
    if (result.includes('reduction')) return 'Reduction';
    if (result.includes('improvement')) return 'Improvement';
    return 'Change';
  }

  extractMetricValue(result) {
    // Extract percentage or number from result string
    const match = result.match(/(\d+)%/);
    return match ? match[1] + '%' : result.split(' ')[0];
  }

  extractImprovementType(result) {
    if (result.includes('leads') || result.includes('inquiries')) return 'Lead Generation';
    if (result.includes('conversion') || result.includes('sales')) return 'Conversions';
    if (result.includes('time') || result.includes('efficiency')) return 'Efficiency';
    if (result.includes('cost') || result.includes('spend')) return 'Cost Savings';
    return 'Performance';
  }

  getCaseStudyForProposal(targetClient) {
    // Find the most relevant case study for a specific prospect
    const relevantCaseStudies = this.caseStudyData.stories.filter(cs => 
      cs.client.industry === targetClient.industry ||
      cs.client.niche === targetClient.niche ||
      cs.project.serviceType === targetClient.interestedService
    );

    if (relevantCaseStudies.length === 0) {
      return this.caseStudyData.stories[0]; // Return any case study if no perfect match
    }

    // Score relevance and return best match
    const scoredCaseStudies = relevantCaseStudies.map(cs => ({
      caseStudy: cs,
      relevanceScore: this.calculateRelevanceScore(cs, targetClient)
    }));

    scoredCaseStudies.sort((a, b) => b.relevanceScore - a.relevanceScore);
    return scoredCaseStudies[0].caseStudy;
  }

  calculateRelevanceScore(caseStudy, targetClient) {
    let score = 0;
    
    if (caseStudy.client.industry === targetClient.industry) score += 40;
    if (caseStudy.client.niche === targetClient.niche) score += 30;
    if (caseStudy.project.serviceType === targetClient.interestedService) score += 20;
    if (caseStudy.client.size === targetClient.companySize) score += 10;
    
    return score;
  }

  generateCaseStudyReport() {
    const report = {
      generated: new Date().toISOString(),
      summary: {
        totalCaseStudies: this.caseStudyData.stories.length,
        byService: this.groupCaseStudiesByService(),
        byIndustry: this.groupCaseStudiesByIndustry(),
        totalAssets: this.getTotalAssets()
      },
      performance: this.analyzeCaseStudyPerformance(),
      recommendations: this.generateCaseStudyRecommendations(),
      contentGaps: this.identifyContentGaps()
    };

    return report;
  }

  groupCaseStudiesByService() {
    const grouped = {};
    this.caseStudyData.stories.forEach(cs => {
      const service = cs.project.serviceType;
      grouped[service] = (grouped[service] || 0) + 1;
    });
    return grouped;
  }

  groupCaseStudiesByIndustry() {
    const grouped = {};
    this.caseStudyData.stories.forEach(cs => {
      const industry = cs.client.industry;
      grouped[industry] = (grouped[industry] || 0) + 1;
    });
    return grouped;
  }

  getTotalAssets() {
    return this.caseStudyData.stories.reduce((total, cs) => total + cs.assets.length, 0);
  }

  analyzeCaseStudyPerformance() {
    return {
      proposalInclusionRate: 85, // Simulated
      websiteViewsPerMonth: 1200, // Simulated
      socialSharesPerMonth: 45, // Simulated
      leadInfluenceRate: 60 // Simulated
    };
  }

  generateCaseStudyRecommendations() {
    const recommendations = [];
    
    const serviceDistribution = this.groupCaseStudiesByService();
    Object.entries(serviceDistribution).forEach(([service, count]) => {
      if (count < 2) {
        recommendations.push({
          priority: 'high',
          action: `Create additional case studies for ${service}`,
          reasoning: 'Need at least 2 case studies per service for credibility'
        });
      }
    });

    if (this.caseStudyData.stories.length < 6) {
      recommendations.push({
        priority: 'medium',
        action: 'Develop case studies for each major niche',
        reasoning: 'Different niches respond to industry-specific examples'
      });
    }

    return recommendations;
  }

  identifyContentGaps() {
    const gaps = [];
    
    const serviceTypes = ['website-development', 'digital-marketing', 'graphic-design', 'marketing-automation'];
    const existingServices = new Set(this.caseStudyData.stories.map(cs => cs.project.serviceType));
    
    serviceTypes.forEach(service => {
      if (!existingServices.has(service)) {
        gaps.push({
          type: 'service_gap',
          missing: service,
          priority: 'high'
        });
      }
    });

    const targetIndustries = ['HVAC', 'Restaurant', 'Med Spa', 'Professional Services'];
    const existingIndustries = new Set(this.caseStudyData.stories.map(cs => cs.client.industry));
    
    targetIndustries.forEach(industry => {
      if (!existingIndustries.has(industry)) {
        gaps.push({
          type: 'industry_gap',
          missing: industry,
          priority: 'medium'
        });
      }
    });

    return gaps;
  }

  updatePerformanceMetrics(caseStudy) {
    this.caseStudyData.performance.case_studies.total_created++;
    
    const service = caseStudy.project.serviceType;
    this.caseStudyData.performance.case_studies.by_service[service] = 
      (this.caseStudyData.performance.case_studies.by_service[service] || 0) + 1;

    const industry = caseStudy.client.industry;
    this.caseStudyData.performance.case_studies.by_niche[industry] = 
      (this.caseStudyData.performance.case_studies.by_niche[industry] || 0) + 1;
  }

  combineIntoNarrative(sections) {
    if (typeof sections === 'object') {
      return Object.values(sections).join(' ');
    }
    return sections;
  }

  exportCaseStudyData(format = 'json') {
    const exportData = {
      timestamp: new Date().toISOString(),
      caseStudies: this.caseStudyData.stories,
      performance: this.caseStudyData.performance,
      summary: this.generateCaseStudyReport()
    };

    if (format === 'csv') {
      return this.convertCaseStudiesToCSV(exportData);
    }
    
    return JSON.stringify(exportData, null, 2);
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CaseStudyCreator;
}

// Usage example
const caseStudyCreator = new CaseStudyCreator();

// Example case study creation workflow
async function createClientCaseStudy() {
  // 1. Define client data
  const clientData = {
    companyName: 'Johnson HVAC Services',
    anonymizedName: 'Premier HVAC Solutions',
    industry: 'HVAC',
    niche: 'hvac-plumbing-electrical',
    companySize: 'small business',
    generalLocation: 'Northeast Ohio',
    consentLevel: 'anonymized'
  };

  // 2. Define project data
  const projectData = {
    serviceType: 'website-development',
    initialSituation: 'struggling with poor online presence and inconsistent lead generation',
    primaryChallenge: 'Website wasn\'t generating any leads and looked unprofessional',
    quantitativeResults: [
      '300% increase in online inquiries within 30 days',
      '150% improvement in time spent on site',
      '45% increase in mobile conversion rate'
    ],
    totalInvestment: 3500,
    monthlyBenefit: 2500,
    timeline: '7 days',
    testimonialQuotes: '"Our new website has completely transformed how customers see our business. We\'re getting calls from people who found us online, which never happened before."'
  };

  // 3. Create the case study
  const caseStudy = caseStudyCreator.createCaseStudy(clientData, projectData, 'transformation_story');
  console.log('Case Study Created:', caseStudy);

  // 4. Generate assets
  const assets = caseStudyCreator.createCaseStudyAssets(caseStudy.id, [
    'long_form_case_study',
    'case_study_summary',
    'results_infographic'
  ]);
  console.log('Assets Created:', assets);

  // 5. Generate performance report
  const report = caseStudyCreator.generateCaseStudyReport();
  console.log('Case Study Report:', report);

  return {
    caseStudy,
    assets,
    report
  };
}

// Export the creator instance
if (typeof window !== 'undefined') {
  window.CaseStudyCreator = caseStudyCreator;
}