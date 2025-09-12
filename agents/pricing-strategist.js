/**
 * Pricing Strategist Agent for INT Creative
 * 
 * Optimizes pricing strategies through market testing, value analysis, and 
 * psychological pricing principles to maximize revenue and profit margins.
 */

class PricingStrategist {
  constructor() {
    this.name = "pricing-strategist";
    this.description = "Optimizes pricing strategies through market testing and value-based analysis";
    this.tools = ["Write", "Read", "MultiEdit", "WebSearch", "WebFetch"];
    
    // Initialize pricing frameworks and testing data
    this.pricingData = {
      services: this.initializeServicePricing(),
      testResults: [],
      marketBenchmarks: {},
      psychologyPrinciples: this.initializePricingPsychology(),
      valueMetrics: this.initializeValueMetrics()
    };
  }

  initializeServicePricing() {
    return {
      'website-development': {
        name: 'Website Development — Conversion Site Sprint',
        currentPricing: {
          basePrice: 3500,
          range: { min: 2500, max: 5000 },
          timeline: '7 days'
        },
        valueDrivers: [
          { driver: 'Speed to market', value: 'Launch in 7 days vs 4-6 weeks', weight: 0.25 },
          { driver: 'Conversion optimization', value: 'Built for leads, not just looks', weight: 0.30 },
          { driver: 'Mobile-first design', value: '60% of traffic optimized', weight: 0.20 },
          { driver: 'Analytics setup', value: 'Track ROI from day one', weight: 0.15 },
          { driver: 'Fixed price guarantee', value: 'No surprise costs', weight: 0.10 }
        ],
        costStructure: {
          directCosts: 200, // tools, hosting, etc
          laborHours: 20,
          hourlyRate: 125,
          totalCost: 2700,
          targetMargin: 0.65
        },
        competitorAnalysis: {
          agencies: { min: 8000, max: 25000, timeline: '6-12 weeks' },
          freelancers: { min: 1500, max: 4000, timeline: '2-6 weeks' },
          platforms: { min: 500, max: 2000, timeline: '1-4 weeks' }
        },
        testingResults: []
      },
      'digital-marketing': {
        name: 'Digital Marketing — Campaign Management',
        currentPricing: {
          setupFee: 1500,
          monthlyRetainer: 2000,
          adSpendManagement: 0.20 // 20% of ad spend
        },
        valueDrivers: [
          { driver: 'Lead cost reduction', value: '40% lower cost per lead', weight: 0.35 },
          { driver: 'Automation setup', value: '24/7 lead nurturing', weight: 0.25 },
          { driver: 'Performance tracking', value: 'Clear ROI metrics', weight: 0.20 },
          { driver: 'Local expertise', value: 'Northeast Ohio market knowledge', weight: 0.10 },
          { driver: 'Quick optimization', value: 'Weekly performance improvements', weight: 0.10 }
        ],
        costStructure: {
          setupCosts: 300,
          monthlyToolCosts: 200,
          laborHours: 15, // monthly
          hourlyRate: 125,
          totalMonthlyCost: 2075,
          targetMargin: 0.55
        },
        competitorAnalysis: {
          agencies: { setup: 5000, monthly: 4000, management: 0.15 },
          marketers: { setup: 1000, monthly: 1500, management: 0.25 },
          platforms: { setup: 0, monthly: 500, management: 0.30 }
        },
        testingResults: []
      },
      'graphic-design': {
        name: 'Graphic Design — Professional Brand Identity',
        currentPricing: {
          logoPackage: 1200,
          fullBrandIdentity: 2500,
          monthlyRetainer: 800
        },
        valueDrivers: [
          { driver: 'Professional credibility', value: 'Compete with larger companies', weight: 0.30 },
          { driver: 'Consistency system', value: 'Brand guidelines for scaling', weight: 0.25 },
          { driver: 'Marketing templates', value: '10 social media templates included', weight: 0.20 },
          { driver: 'Print-ready files', value: 'Business cards to billboards', weight: 0.15 },
          { driver: 'Fast turnaround', value: '9-day delivery guaranteed', weight: 0.10 }
        ],
        costStructure: {
          directCosts: 100, // software, stock imagery
          laborHours: 12,
          hourlyRate: 125,
          totalCost: 1600,
          targetMargin: 0.60
        },
        competitorAnalysis: {
          agencies: { logo: 3000, brand: 10000, monthly: 2000 },
          freelancers: { logo: 500, brand: 2000, monthly: 500 },
          platforms: { logo: 100, brand: 500, monthly: 200 }
        },
        testingResults: []
      },
      'marketing-automation': {
        name: 'Marketing Automation — Business Process Systems',
        currentPricing: {
          setupFee: 3000,
          monthlyMaintenance: 500,
          customWorkflow: 750 // per workflow
        },
        valueDrivers: [
          { driver: 'Time savings', value: '10+ hours saved weekly', weight: 0.40 },
          { driver: 'Revenue protection', value: 'Zero leads lost to poor follow-up', weight: 0.25 },
          { driver: 'Scalability', value: 'Grow without hiring more staff', weight: 0.20 },
          { driver: 'Error reduction', value: 'Eliminate manual mistakes', weight: 0.10 },
          { driver: 'Custom solutions', value: 'Built for your specific needs', weight: 0.05 }
        ],
        costStructure: {
          setupCosts: 500, // tools, integrations
          laborHours: 18,
          hourlyRate: 125,
          totalCost: 2750,
          targetMargin: 0.55
        },
        competitorAnalysis: {
          agencies: { setup: 10000, monthly: 2000, custom: 2000 },
          consultants: { setup: 5000, monthly: 1000, custom: 1500 },
          platforms: { setup: 1000, monthly: 300, custom: 500 }
        },
        testingResults: []
      }
    };
  }

  initializePricingPsychology() {
    return {
      anchoring: {
        principle: 'High anchor makes everything else seem reasonable',
        application: 'Lead with premium option first',
        examples: ['Premium at $5,000 makes $3,000 feel reasonable']
      },
      decoyEffect: {
        principle: 'Middle option makes premium more attractive',
        application: 'Three-tier pricing with strategic decoy',
        examples: ['Basic: $1,500, Standard: $2,800, Premium: $3,000']
      },
      lossAversion: {
        principle: 'Fear of losing more powerful than gaining',
        application: 'Emphasize what they lose by waiting',
        examples: ['Every day without leads costs you $200']
      },
      socialProof: {
        principle: 'Others\' choices influence decisions',
        application: 'Most popular option badging',
        examples: ['90% of our clients choose the Growth package']
      },
      scarcity: {
        principle: 'Limited availability increases perceived value',
        application: 'Limited availability or time sensitivity',
        examples: ['Only 3 website slots available this month']
      },
      bundling: {
        principle: 'Package pricing feels like better value',
        application: 'Bundle services for higher total value',
        examples: ['Website + Marketing = $4,500 (save $1,000)']
      }
    };
  }

  initializeValueMetrics() {
    return {
      'website-development': {
        timeToValue: '7 days to launch',
        quantifiableResults: ['3x lead increase', '50% lower bounce rate', '24/7 lead capture'],
        ROICalculation: 'If 1 additional lead per week = $500, website pays for itself in 7 weeks',
        competitiveAdvantage: '6x faster than agencies, same quality'
      },
      'digital-marketing': {
        timeToValue: '48 hours to first traffic',
        quantifiableResults: ['40% lower cost per lead', '200% more qualified leads', '15% conversion rate'],
        ROICalculation: 'Save $500/month on inefficient ads + generate 10 extra leads = $3,000 monthly value',
        competitiveAdvantage: 'Local market expertise + automation = better results'
      },
      'graphic-design': {
        timeToValue: '9 days to professional brand',
        quantifiableResults: ['Professional credibility', 'Consistent brand recognition', 'Marketing template library'],
        ROICalculation: 'Professional brand = 20% higher prices = $200+ extra per client',
        competitiveAdvantage: 'Fast turnaround + strategic brand thinking'
      },
      'marketing-automation': {
        timeToValue: '12 days to automated workflows',
        quantifiableResults: ['10+ hours saved weekly', '100% lead follow-up', 'Zero manual errors'],
        ROICalculation: '10 hours saved × $50/hour = $500/week = $26,000/year value',
        competitiveAdvantage: 'Custom solutions without enterprise complexity'
      }
    };
  }

  async testPricing(serviceKey, testScenario) {
    const service = this.pricingData.services[serviceKey];
    if (!service) throw new Error(`Service ${serviceKey} not found`);

    const test = {
      date: new Date().toISOString(),
      service: serviceKey,
      scenario: testScenario,
      results: {
        acceptanceRate: 0,
        objections: [],
        negotiatedPrice: 0,
        timeToDecision: 0,
        clientFeedback: ''
      }
    };

    // Simulate different testing scenarios
    switch (testScenario.type) {
      case 'price_increase':
        return this.testPriceIncrease(service, testScenario, test);
      case 'bundle_pricing':
        return this.testBundlePricing(service, testScenario, test);
      case 'value_positioning':
        return this.testValuePositioning(service, testScenario, test);
      case 'competitor_comparison':
        return this.testCompetitorComparison(service, testScenario, test);
      default:
        return this.testStandardPricing(service, testScenario, test);
    }
  }

  testPriceIncrease(service, scenario, test) {
    const currentPrice = service.currentPricing.basePrice || service.currentPricing.monthlyRetainer;
    const newPrice = scenario.newPrice;
    const increasePercent = ((newPrice - currentPrice) / currentPrice) * 100;

    test.results.priceIncrease = increasePercent;
    test.analysis = {
      riskLevel: increasePercent > 25 ? 'high' : increasePercent > 15 ? 'medium' : 'low',
      recommendedApproach: this.getIncreaseStrategy(increasePercent),
      expectedImpact: this.calculatePriceIncreaseImpact(service, increasePercent)
    };

    return test;
  }

  getIncreaseStrategy(increasePercent) {
    if (increasePercent > 25) {
      return {
        approach: 'gradual_implementation',
        timeline: '3 months',
        steps: [
          'Increase new client pricing immediately',
          'Communicate value improvements to existing clients',
          'Implement 15% increase in month 2 for existing clients',
          'Final 10% increase in month 3'
        ]
      };
    } else if (increasePercent > 15) {
      return {
        approach: 'two_phase_rollout',
        timeline: '2 months',
        steps: [
          'Increase new client pricing immediately',
          'Month 2: Implement for existing clients with value reinforcement'
        ]
      };
    } else {
      return {
        approach: 'immediate_implementation',
        timeline: '1 month',
        steps: [
          'Implement across all clients with value communication',
          'Focus messaging on increased value delivery'
        ]
      };
    }
  }

  calculatePriceIncreaseImpact(service, increasePercent) {
    const elasticity = this.estimatePriceElasticity(service);
    const demandChange = -(elasticity * (increasePercent / 100));
    const revenueChange = ((1 + increasePercent / 100) * (1 + demandChange)) - 1;

    return {
      demandChangePercent: demandChange * 100,
      revenueChangePercent: revenueChange * 100,
      breakEvenAcceptanceRate: 1 / (1 + increasePercent / 100),
      recommendation: revenueChange > 0 ? 'proceed' : 'reconsider'
    };
  }

  estimatePriceElasticity(service) {
    // Estimate based on service characteristics
    const factors = {
      'website-development': -1.2, // Somewhat elastic - alternatives exist
      'digital-marketing': -0.8,   // Less elastic - results-driven
      'graphic-design': -1.5,      // More elastic - many alternatives
      'marketing-automation': -0.6  // Least elastic - high switching costs
    };

    return factors[service.name] || -1.0;
  }

  async createPricingTiers(serviceKey, strategy = 'good_better_best') {
    const service = this.pricingData.services[serviceKey];
    if (!service) throw new Error(`Service ${serviceKey} not found`);

    const tiers = this.generateTierStructure(service, strategy);
    const analysis = this.analyzeTierStrategy(tiers);

    return {
      service: serviceKey,
      strategy,
      tiers,
      analysis,
      recommendations: this.getTierRecommendations(tiers, analysis)
    };
  }

  generateTierStructure(service, strategy) {
    const basePrice = service.currentPricing.basePrice || service.currentPricing.monthlyRetainer;
    
    switch (strategy) {
      case 'good_better_best':
        return this.createGoodBetterBest(service, basePrice);
      case 'freemium_premium':
        return this.createFreemiumPremium(service, basePrice);
      case 'value_based_tiers':
        return this.createValueBasedTiers(service, basePrice);
      default:
        return this.createGoodBetterBest(service, basePrice);
    }
  }

  createGoodBetterBest(service, basePrice) {
    const serviceName = service.name.split('—')[0].trim();
    
    return {
      starter: {
        name: `${serviceName} Starter`,
        price: Math.round(basePrice * 0.7),
        features: this.getStarterFeatures(service),
        positioning: 'Perfect for getting started',
        targetMargin: 0.50
      },
      professional: {
        name: `${serviceName} Professional`,
        price: basePrice,
        features: this.getProfessionalFeatures(service),
        positioning: 'Most popular choice', // Decoy effect
        targetMargin: 0.65,
        badge: 'MOST POPULAR'
      },
      premium: {
        name: `${serviceName} Premium`,
        price: Math.round(basePrice * 1.4),
        features: this.getPremiumFeatures(service),
        positioning: 'Maximum results and support',
        targetMargin: 0.75
      }
    };
  }

  getStarterFeatures(service) {
    // Return essential features for each service type
    const featureMap = {
      'website-development': [
        '3-page website',
        'Mobile responsive design',
        'Basic contact form',
        'Google Analytics setup',
        '30-day support'
      ],
      'digital-marketing': [
        'Facebook/Instagram ads setup',
        'Basic landing page',
        'Email automation (5 emails)',
        'Monthly performance report'
      ],
      'graphic-design': [
        'Logo design (2 concepts)',
        'Basic brand colors',
        'Business card design',
        'Social media template (5)'
      ],
      'marketing-automation': [
        'Lead capture automation',
        'Email follow-up sequence',
        'CRM setup and training',
        'Basic reporting dashboard'
      ]
    };

    return featureMap[Object.keys(this.pricingData.services).find(key => 
      this.pricingData.services[key] === service)] || [];
  }

  getProfessionalFeatures(service) {
    const starter = this.getStarterFeatures(service);
    const additionalFeatures = {
      'website-development': [
        '5-page website',
        'Advanced contact forms',
        'SEO optimization',
        'Social media integration',
        '90-day support'
      ],
      'digital-marketing': [
        'Multi-platform campaigns',
        'Custom landing pages (2)',
        'Advanced email automation',
        'A/B testing setup',
        'Bi-weekly optimization'
      ],
      'graphic-design': [
        'Complete brand identity',
        'Brand guidelines document',
        'Marketing materials (3)',
        'Social media templates (15)',
        'Print-ready files'
      ],
      'marketing-automation': [
        'Multi-step workflows (3)',
        'Advanced CRM customization',
        'Zapier integrations (5)',
        'Custom reporting',
        'Monthly optimization'
      ]
    };

    const serviceKey = Object.keys(this.pricingData.services).find(key => 
      this.pricingData.services[key] === service);
    
    return [...starter, ...additionalFeatures[serviceKey] || []];
  }

  getPremiumFeatures(service) {
    const professional = this.getProfessionalFeatures(service);
    const premiumAddons = {
      'website-development': [
        'Unlimited pages',
        'E-commerce capability',
        'Advanced analytics',
        'Priority support',
        '1-year maintenance included'
      ],
      'digital-marketing': [
        'Google Ads management',
        'Conversion optimization',
        'Weekly strategy calls',
        'Custom dashboard',
        'Dedicated account manager'
      ],
      'graphic-design': [
        'Video brand assets',
        'Advanced marketing suite',
        'Brand photography direction',
        'Ongoing design retainer',
        'Brand evolution strategy'
      ],
      'marketing-automation': [
        'Unlimited workflows',
        'Advanced integrations',
        'Custom app development',
        'Weekly optimization',
        'Dedicated automation specialist'
      ]
    };

    const serviceKey = Object.keys(this.pricingData.services).find(key => 
      this.pricingData.services[key] === service);
    
    return [...professional, ...premiumAddons[serviceKey] || []];
  }

  analyzeTierStrategy(tiers) {
    const analysis = {
      priceSpread: this.calculatePriceSpread(tiers),
      valuePerception: this.analyzeValuePerception(tiers),
      decoyEffectiveness: this.assessDecoyEffect(tiers),
      profitOptimization: this.analyzeProfitOptimization(tiers)
    };

    return analysis;
  }

  calculatePriceSpread(tiers) {
    const prices = Object.values(tiers).map(tier => tier.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    
    return {
      range: max - min,
      ratio: max / min,
      distribution: Object.fromEntries(
        Object.entries(tiers).map(([key, tier]) => [
          key, 
          ((tier.price - min) / (max - min) * 100).toFixed(1) + '%'
        ])
      )
    };
  }

  analyzeValuePerception(tiers) {
    return {
      starterValue: 'Entry point reduces friction',
      professionalValue: 'Sweet spot for most clients',
      premiumValue: 'Anchors professional as reasonable',
      recommendation: 'Ensure professional tier has clear value advantage over starter'
    };
  }

  assessDecoyEffect(tiers) {
    const professional = tiers.professional;
    const premium = tiers.premium;
    const priceRatio = professional.price / premium.price;
    
    return {
      effectiveness: priceRatio > 0.7 ? 'strong' : priceRatio > 0.6 ? 'moderate' : 'weak',
      recommendation: priceRatio > 0.7 
        ? 'Professional tier well-positioned as value choice'
        : 'Consider adjusting professional price or premium features',
      optimalRatio: '0.71 - 0.75 for maximum decoy effect'
    };
  }

  analyzeProfitOptimization(tiers) {
    const margins = Object.values(tiers).map(tier => tier.targetMargin);
    const avgMargin = margins.reduce((sum, margin) => sum + margin, 0) / margins.length;
    
    return {
      averageMargin: avgMargin,
      marginSpread: Math.max(...margins) - Math.min(...margins),
      recommendation: avgMargin > 0.6 
        ? 'Strong profit potential across tiers'
        : 'Consider cost optimization or price adjustment'
    };
  }

  generateValueProposition(serviceKey, tier = 'professional') {
    const service = this.pricingData.services[serviceKey];
    const valueMetrics = this.pricingData.valueMetrics[serviceKey];
    
    if (!service || !valueMetrics) return null;

    return {
      headline: this.createValueHeadline(service, valueMetrics),
      subheadline: this.createValueSubheadline(service, valueMetrics),
      bulletPoints: this.createValueBullets(service, valueMetrics),
      proofPoints: this.createProofPoints(service, valueMetrics),
      urgency: this.createUrgencyMessage(service, valueMetrics),
      guarantee: this.createGuarantee(service)
    };
  }

  createValueHeadline(service, metrics) {
    const headlines = {
      'website-development': `Get a Lead-Generating Website in ${metrics.timeToValue}`,
      'digital-marketing': `Cut Your Lead Costs by 40% While Doubling Your Pipeline`,
      'graphic-design': `Transform Your Brand from Amateur to Authority in ${metrics.timeToValue}`,
      'marketing-automation': `Save ${metrics.quantifiableResults[0]} and Never Miss Another Lead`
    };

    return headlines[Object.keys(this.pricingData.services).find(key => 
      this.pricingData.services[key] === service)] || '';
  }

  createValueSubheadline(service, metrics) {
    return `${metrics.competitiveAdvantage}. ${metrics.ROICalculation}`;
  }

  createValueBullets(service, metrics) {
    return metrics.quantifiableResults.map(result => ({
      point: result,
      elaboration: this.elaborateOnResult(result)
    }));
  }

  elaborateOnResult(result) {
    const elaborations = {
      '3x lead increase': 'Based on average client results within 30 days',
      '40% lower cost per lead': 'Through optimized targeting and automation',
      '10+ hours saved weekly': 'Eliminates manual, repetitive tasks',
      'Professional credibility': 'Compete with larger companies on equal footing'
    };

    return elaborations[result] || 'Proven results across our client base';
  }

  createProofPoints(service, metrics) {
    return [
      'Guaranteed delivery timeline or money back',
      '90% of clients see results within first month',
      'Northeast Ohio market expertise',
      'No long-term contracts required'
    ];
  }

  createUrgencyMessage(service, metrics) {
    const urgencyMessages = {
      'website-development': 'Every day without a professional website costs you potential customers',
      'digital-marketing': 'Inefficient ads are burning through your marketing budget right now',
      'graphic-design': 'Unprofessional branding is costing you premium pricing opportunities',
      'marketing-automation': 'Manual processes are limiting your business growth'
    };

    return urgencyMessages[Object.keys(this.pricingData.services).find(key => 
      this.pricingData.services[key] === service)] || '';
  }

  createGuarantee(service) {
    return {
      type: 'performance_guarantee',
      promise: 'If you don\'t see measurable results within 60 days, we\'ll work for free until you do',
      terms: 'Client must implement our recommendations and provide access to tracking data'
    };
  }

  async optimizePricingStrategy(serviceKey, marketData) {
    const service = this.pricingData.services[serviceKey];
    const currentPerformance = this.analyzeCurrentPricing(service, marketData);
    const opportunities = this.identifyPricingOpportunities(service, currentPerformance);
    const recommendations = this.generatePricingRecommendations(service, opportunities);

    return {
      service: serviceKey,
      currentPerformance,
      opportunities,
      recommendations,
      implementationPlan: this.createImplementationPlan(recommendations)
    };
  }

  analyzeCurrentPricing(service, marketData) {
    const metrics = {
      profitMargin: service.costStructure.targetMargin,
      marketPosition: this.determineMarketPosition(service),
      priceElasticity: this.estimatePriceElasticity(service),
      competitiveAdvantage: this.assessCompetitivePosition(service)
    };

    return {
      ...metrics,
      overallScore: this.calculatePricingScore(metrics),
      strengths: this.identifyPricingStrengths(metrics),
      weaknesses: this.identifyPricingWeaknesses(metrics)
    };
  }

  determineMarketPosition(service) {
    const basePrice = service.currentPricing.basePrice || service.currentPricing.monthlyRetainer;
    const competitors = service.competitorAnalysis;
    
    const avgAgencyPrice = (competitors.agencies.min + competitors.agencies.max) / 2;
    const avgFreelancerPrice = (competitors.freelancers.min + competitors.freelancers.max) / 2;
    
    if (basePrice > avgAgencyPrice) return 'premium';
    if (basePrice > avgFreelancerPrice) return 'mid_market';
    return 'value';
  }

  calculatePricingScore(metrics) {
    let score = 0;
    
    // Profit margin score (40% weight)
    if (metrics.profitMargin > 0.6) score += 40;
    else if (metrics.profitMargin > 0.4) score += 30;
    else if (metrics.profitMargin > 0.2) score += 20;
    else score += 10;
    
    // Market position score (30% weight)
    if (metrics.marketPosition === 'mid_market') score += 30;
    else if (metrics.marketPosition === 'premium') score += 25;
    else score += 20;
    
    // Competitive advantage score (30% weight)
    score += metrics.competitiveAdvantage * 30;
    
    return Math.min(100, score);
  }

  exportPricingAnalysis(format = 'json') {
    const analysis = {
      timestamp: new Date().toISOString(),
      services: this.pricingData.services,
      testResults: this.pricingData.testResults,
      marketBenchmarks: this.pricingData.marketBenchmarks,
      recommendations: this.generateOverallRecommendations()
    };

    if (format === 'csv') {
      return this.convertPricingToCSV(analysis);
    }
    
    return JSON.stringify(analysis, null, 2);
  }

  generateOverallRecommendations() {
    return [
      {
        priority: 'high',
        action: 'Implement tiered pricing for all services',
        impact: 'Increase average order value by 30-50%',
        timeline: '2 weeks'
      },
      {
        priority: 'high', 
        action: 'Test 15-20% price increases on new clients',
        impact: 'Validate market acceptance of higher pricing',
        timeline: '1 month'
      },
      {
        priority: 'medium',
        action: 'Create value-based pricing calculators',
        impact: 'Justify pricing through ROI demonstration',
        timeline: '3 weeks'
      },
      {
        priority: 'medium',
        action: 'Develop premium service bundles',
        impact: 'Capture clients willing to pay for convenience',
        timeline: '4 weeks'
      }
    ];
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PricingStrategist;
}

// Usage example
const pricingStrategist = new PricingStrategist();

// Example pricing optimization workflow
async function runPricingOptimization() {
  // 1. Create tiered pricing for website development
  const websiteTiers = await pricingStrategist.createPricingTiers('website-development', 'good_better_best');
  console.log('Website Pricing Tiers:', websiteTiers);

  // 2. Generate value proposition for digital marketing
  const marketingValue = pricingStrategist.generateValueProposition('digital-marketing', 'professional');
  console.log('Marketing Value Proposition:', marketingValue);

  // 3. Test price increase scenario
  const priceTest = await pricingStrategist.testPricing('graphic-design', {
    type: 'price_increase',
    newPrice: 3000,
    currentPrice: 2500
  });
  console.log('Price Increase Test:', priceTest);

  return {
    tiers: websiteTiers,
    valueProposition: marketingValue,
    priceTest
  };
}

// Export the strategist instance
if (typeof window !== 'undefined') {
  window.PricingStrategist = pricingStrategist;
}