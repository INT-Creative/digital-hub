/**
 * Service Packager Agent for INT Creative
 * 
 * Creates compelling service bundles that solve complete business problems,
 * increase average order value, and provide clear transformation paths for clients.
 */

class ServicePackager {
  constructor() {
    this.name = "service-packager";
    this.description = "Creates strategic service bundles that maximize value for clients and revenue for INT Creative";
    this.tools = ["Write", "Read", "MultiEdit", "Grep"];
    
    // Initialize package frameworks and bundling strategies
    this.packageData = {
      coreServices: this.initializeCoreServices(),
      packageTemplates: this.initializePackageTemplates(),
      bundlingStrategies: this.initializeBundlingStrategies(),
      clientJourneys: this.initializeClientJourneys(),
      createdPackages: []
    };
  }

  initializeCoreServices() {
    return {
      'website-development': {
        name: 'Website Development — Conversion Site Sprint',
        basePrice: 3500,
        deliveryTime: 7,
        coreValue: 'Professional online presence with lead generation',
        dependencies: [],
        synergies: ['digital-marketing', 'graphic-design'],
        complexity: 'medium',
        margin: 0.65
      },
      'digital-marketing': {
        name: 'Digital Marketing — Campaign Management',
        basePrice: 2000, // monthly
        setupFee: 1500,
        deliveryTime: 14,
        coreValue: 'Systematic lead generation and customer acquisition',
        dependencies: ['website-development'], // works better with good website
        synergies: ['marketing-automation'],
        complexity: 'high',
        margin: 0.55
      },
      'graphic-design': {
        name: 'Graphic Design — Professional Brand Identity',
        basePrice: 2500,
        deliveryTime: 9,
        coreValue: 'Professional credibility and brand recognition',
        dependencies: [],
        synergies: ['website-development', 'digital-marketing'],
        complexity: 'low',
        margin: 0.60
      },
      'marketing-automation': {
        name: 'Marketing Automation — Business Process Systems',
        basePrice: 3000,
        monthlyMaintenance: 500,
        deliveryTime: 12,
        coreValue: 'Scalable operations and lead nurturing',
        dependencies: ['digital-marketing'], // needs leads to nurture
        synergies: ['website-development'],
        complexity: 'high',
        margin: 0.55
      }
    };
  }

  initializePackageTemplates() {
    return {
      'digital_foundation': {
        name: 'Digital Foundation Package',
        description: 'Essential digital presence for new or struggling businesses',
        targetClient: 'Small businesses with no or poor digital presence',
        problemSolved: 'Looking unprofessional online and missing digital opportunities',
        transformation: 'From invisible online to professional digital presence',
        duration: '14 days',
        pricing: {
          strategy: 'bundle_discount',
          individualSum: 0,
          packagePrice: 0,
          savings: 0,
          paymentTerms: 'full_upfront'
        }
      },
      'growth_accelerator': {
        name: 'Growth Accelerator Package',
        description: 'Complete marketing system for growing businesses',
        targetClient: 'Established businesses ready to scale systematically',
        problemSolved: 'Inconsistent lead generation and manual growth processes',
        transformation: 'From sporadic growth to predictable business expansion',
        duration: '21 days',
        pricing: {
          strategy: 'value_based',
          individualSum: 0,
          packagePrice: 0,
          savings: 0,
          paymentTerms: 'split_payment'
        }
      },
      'market_dominator': {
        name: 'Market Dominator Package',
        description: 'Complete business transformation and automation system',
        targetClient: 'Ambitious businesses wanting to dominate their local market',
        problemSolved: 'Competing with larger companies and scaling limitations',
        transformation: 'From small local business to market leader',
        duration: '35 days',
        pricing: {
          strategy: 'premium_positioning',
          individualSum: 0,
          packagePrice: 0,
          savings: 0,
          paymentTerms: 'monthly_retainer'
        }
      },
      'rapid_launch': {
        name: 'Rapid Launch Package',
        description: 'Fast-track package for businesses needing immediate results',
        targetClient: 'New businesses or major pivots needing quick market entry',
        problemSolved: 'Time pressure and need for immediate professional presence',
        transformation: 'From idea to market-ready business in record time',
        duration: '10 days',
        pricing: {
          strategy: 'premium_speed',
          individualSum: 0,
          packagePrice: 0,
          savings: 0,
          paymentTerms: 'full_upfront'
        }
      }
    };
  }

  initializeBundlingStrategies() {
    return {
      'complementary_pairing': {
        description: 'Services that enhance each other\'s effectiveness',
        examples: ['Website + Digital Marketing', 'Brand Design + Website'],
        discount: 0.15, // 15% bundle discount
        reasoning: 'Combined services deliver better results than individual services'
      },
      'sequential_workflow': {
        description: 'Services delivered in logical business development sequence',
        examples: ['Brand → Website → Marketing → Automation'],
        discount: 0.20, // 20% discount for full sequence
        reasoning: 'Each step builds on the previous for maximum impact'
      },
      'problem_solution_bundles': {
        description: 'Complete solutions for specific business problems',
        examples: ['Lead Generation Bundle', 'Professional Credibility Bundle'],
        discount: 0.12, // 12% discount
        reasoning: 'Solves complete problem rather than addressing symptoms'
      },
      'speed_premium': {
        description: 'Premium pricing for accelerated delivery',
        examples: ['7-day Digital Presence', '14-day Marketing Launch'],
        premium: 0.25, // 25% premium for speed
        reasoning: 'Faster time-to-value justifies premium pricing'
      },
      'retainer_based': {
        description: 'Ongoing service combinations with monthly retainer',
        examples: ['Marketing + Automation Management', 'Brand + Content Creation'],
        discount: 0.10, // 10% monthly discount
        reasoning: 'Predictable revenue for agency, ongoing value for client'
      }
    };
  }

  initializeClientJourneys() {
    return {
      'startup_journey': {
        description: 'New business establishing market presence',
        stages: [
          { stage: 'foundation', needs: ['brand-identity', 'website'], urgency: 'high' },
          { stage: 'awareness', needs: ['digital-marketing'], urgency: 'high' },
          { stage: 'scaling', needs: ['automation'], urgency: 'medium' }
        ],
        duration: '6 months',
        totalValue: 15000
      },
      'transformation_journey': {
        description: 'Existing business modernizing operations',
        stages: [
          { stage: 'assessment', needs: ['audit', 'strategy'], urgency: 'medium' },
          { stage: 'optimization', needs: ['website-redesign', 'brand-refresh'], urgency: 'high' },
          { stage: 'automation', needs: ['marketing-automation', 'process-optimization'], urgency: 'medium' }
        ],
        duration: '4 months',
        totalValue: 12000
      },
      'growth_journey': {
        description: 'Successful business accelerating expansion',
        stages: [
          { stage: 'optimization', needs: ['marketing-optimization'], urgency: 'high' },
          { stage: 'automation', needs: ['advanced-automation'], urgency: 'high' },
          { stage: 'scaling', needs: ['system-integration'], urgency: 'medium' }
        ],
        duration: '3 months',
        totalValue: 18000
      }
    };
  }

  createPackage(packageKey, serviceKeys, customization = {}) {
    const template = this.packageData.packageTemplates[packageKey];
    const services = serviceKeys.map(key => this.packageData.coreServices[key]).filter(Boolean);
    
    if (!template || services.length === 0) {
      throw new Error('Invalid package template or services');
    }

    const packageData = {
      id: this.generatePackageId(),
      template: packageKey,
      services: serviceKeys,
      customization,
      ...this.calculatePackagePricing(template, services),
      ...this.calculatePackageTimeline(template, services),
      ...this.createPackageMarketing(template, services),
      created: new Date().toISOString()
    };

    this.packageData.createdPackages.push(packageData);
    return packageData;
  }

  generatePackageId() {
    return `pkg_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  }

  calculatePackagePricing(template, services) {
    const individualSum = services.reduce((sum, service) => {
      return sum + (service.basePrice || 0) + (service.setupFee || 0);
    }, 0);

    let packagePrice;
    let savings;
    let strategy = template.pricing.strategy;

    switch (strategy) {
      case 'bundle_discount':
        const discount = this.getBundleDiscount(services);
        packagePrice = Math.round(individualSum * (1 - discount));
        savings = individualSum - packagePrice;
        break;
        
      case 'value_based':
        packagePrice = Math.round(this.calculateValueBasedPrice(template, services));
        savings = Math.max(0, individualSum - packagePrice);
        break;
        
      case 'premium_positioning':
        const premium = 0.15; // 15% premium for comprehensive package
        packagePrice = Math.round(individualSum * (1 + premium));
        savings = 0; // No savings, but premium value
        break;
        
      case 'premium_speed':
        const speedPremium = 0.25; // 25% premium for speed
        packagePrice = Math.round(individualSum * (1 + speedPremium));
        savings = 0;
        break;
        
      default:
        packagePrice = individualSum;
        savings = 0;
    }

    return {
      pricing: {
        strategy,
        individualSum,
        packagePrice,
        savings,
        savingsPercentage: individualSum > 0 ? Math.round((savings / individualSum) * 100) : 0,
        paymentOptions: this.createPaymentOptions(packagePrice, template.pricing.paymentTerms)
      }
    };
  }

  getBundleDiscount(services) {
    // Calculate discount based on service synergies
    let baseDiscount = 0.10; // 10% base bundle discount
    
    // Add bonus discount for high-synergy combinations
    const synergyScore = this.calculateSynergyScore(services);
    const synergyBonus = synergyScore * 0.05; // Up to 5% bonus
    
    return Math.min(0.20, baseDiscount + synergyBonus); // Cap at 20%
  }

  calculateSynergyScore(services) {
    let score = 0;
    const serviceKeys = services.map(s => Object.keys(this.packageData.coreServices).find(key => 
      this.packageData.coreServices[key] === s));

    for (let i = 0; i < services.length; i++) {
      for (let j = i + 1; j < services.length; j++) {
        if (services[i].synergies.includes(serviceKeys[j]) || 
            services[j].synergies.includes(serviceKeys[i])) {
          score++;
        }
      }
    }

    return Math.min(1, score / services.length); // Normalize to 0-1
  }

  calculateValueBasedPrice(template, services) {
    // Calculate price based on expected client value rather than cost-plus
    const valueMultipliers = {
      'digital_foundation': 2.5,  // 2.5x cost for foundation value
      'growth_accelerator': 3.0,  // 3x cost for growth value
      'market_dominator': 4.0,    // 4x cost for market leadership value
      'rapid_launch': 3.5         // 3.5x cost for speed value
    };

    const totalCost = services.reduce((sum, service) => {
      return sum + (service.basePrice / (1 + service.margin));
    }, 0);

    const multiplier = valueMultipliers[template.name] || 2.5;
    return totalCost * multiplier;
  }

  createPaymentOptions(packagePrice, paymentTerms) {
    const options = {
      full_upfront: {
        description: 'Pay in full and save',
        amount: packagePrice,
        discount: 0.05, // 5% discount for full payment
        finalAmount: Math.round(packagePrice * 0.95)
      }
    };

    switch (paymentTerms) {
      case 'split_payment':
        options.split_payment = {
          description: 'Split into 2 payments',
          payments: [
            { amount: Math.round(packagePrice * 0.6), when: 'project_start' },
            { amount: Math.round(packagePrice * 0.4), when: 'project_completion' }
          ]
        };
        break;
        
      case 'monthly_retainer':
        const monthlyAmount = Math.round(packagePrice / 6); // 6-month term
        options.monthly_retainer = {
          description: '6-month retainer program',
          monthlyAmount,
          setupFee: Math.round(packagePrice * 0.3),
          totalAmount: Math.round(packagePrice * 1.1) // 10% premium for payment plan
        };
        break;
    }

    return options;
  }

  calculatePackageTimeline(template, services) {
    // Calculate delivery timeline based on service dependencies and parallelization
    const timeline = this.optimizeDeliverySchedule(services);
    
    return {
      timeline: {
        totalDuration: timeline.totalDays,
        deliverySchedule: timeline.schedule,
        criticalPath: timeline.criticalPath,
        milestones: timeline.milestones
      }
    };
  }

  optimizeDeliverySchedule(services) {
    // Create delivery schedule considering dependencies and parallel work
    const schedule = [];
    const completed = new Set();
    let currentDay = 0;

    // Sort services by dependencies (services with no dependencies first)
    const sortedServices = this.topologicalSort(services);
    
    for (const service of sortedServices) {
      const canStart = service.dependencies.every(dep => completed.has(dep));
      if (canStart) {
        const startDay = currentDay;
        const endDay = startDay + service.deliveryTime;
        
        schedule.push({
          service: service.name,
          startDay,
          endDay,
          duration: service.deliveryTime,
          dependencies: service.dependencies
        });
        
        completed.add(service.name);
        currentDay = Math.max(currentDay, endDay);
      }
    }

    return {
      totalDays: currentDay,
      schedule,
      criticalPath: this.findCriticalPath(schedule),
      milestones: this.createMilestones(schedule)
    };
  }

  topologicalSort(services) {
    // Simple topological sort for service dependencies
    const sorted = [];
    const visited = new Set();
    
    const visit = (service) => {
      if (visited.has(service)) return;
      visited.add(service);
      
      // Visit dependencies first
      service.dependencies.forEach(dep => {
        const depService = services.find(s => s.name.includes(dep));
        if (depService) visit(depService);
      });
      
      sorted.push(service);
    };

    services.forEach(visit);
    return sorted;
  }

  findCriticalPath(schedule) {
    // Find the longest path through the project
    return schedule
      .sort((a, b) => b.endDay - a.endDay)
      .slice(0, Math.ceil(schedule.length / 2))
      .map(item => item.service);
  }

  createMilestones(schedule) {
    const totalDuration = Math.max(...schedule.map(s => s.endDay));
    const milestones = [];

    // Create milestones at 25%, 50%, 75%, and 100% completion
    [0.25, 0.5, 0.75, 1.0].forEach(percentage => {
      const milestoneDay = Math.round(totalDuration * percentage);
      const completedServices = schedule
        .filter(s => s.endDay <= milestoneDay)
        .map(s => s.service);

      milestones.push({
        percentage: Math.round(percentage * 100),
        day: milestoneDay,
        completedServices,
        description: this.getMilestoneDescription(percentage, completedServices)
      });
    });

    return milestones;
  }

  getMilestoneDescription(percentage, services) {
    if (percentage === 0.25) return 'Foundation phase complete';
    if (percentage === 0.5) return 'Core deliverables ready';
    if (percentage === 0.75) return 'Integration and optimization phase';
    return 'Project complete and launched';
  }

  createPackageMarketing(template, services) {
    return {
      marketing: {
        headline: this.createPackageHeadline(template, services),
        subheadline: this.createPackageSubheadline(template, services),
        valueProposition: this.createPackageValueProp(template, services),
        features: this.createPackageFeatures(services),
        benefits: this.createPackageBenefits(template, services),
        socialProof: this.createSocialProof(template),
        urgency: this.createUrgencyMessage(template),
        guarantee: this.createPackageGuarantee(template)
      }
    };
  }

  createPackageHeadline(template, services) {
    const headlines = {
      'digital_foundation': 'Launch Your Professional Digital Presence in 14 Days',
      'growth_accelerator': 'Build a Predictable Customer Acquisition System in 21 Days',
      'market_dominator': 'Become the Dominant Local Business in Your Market',
      'rapid_launch': 'Go From Idea to Market-Ready Business in Just 10 Days'
    };

    return headlines[template.name] || `Transform Your Business with Our ${template.name}`;
  }

  createPackageSubheadline(template, services) {
    const serviceNames = services.map(s => s.name.split('—')[0].trim()).join(', ');
    return `Complete ${serviceNames.toLowerCase()} solution that ${template.transformation.toLowerCase()}`;
  }

  createPackageValueProp(template, services) {
    return {
      problem: template.problemSolved,
      solution: `Our ${template.name} includes ${services.length} integrated services`,
      outcome: template.transformation,
      proof: 'Proven system used by 50+ Northeast Ohio businesses'
    };
  }

  createPackageFeatures(services) {
    const allFeatures = [];
    
    services.forEach(service => {
      // Get key features for each service
      const features = this.getServiceFeatures(service);
      allFeatures.push(...features.map(f => ({
        feature: f,
        service: service.name.split('—')[0].trim()
      })));
    });

    return allFeatures;
  }

  getServiceFeatures(service) {
    const featureMap = {
      'Website Development': [
        'Mobile-responsive design',
        'Lead capture forms',
        'Google Analytics setup',
        'SEO optimization',
        'Social media integration'
      ],
      'Digital Marketing': [
        'Facebook/Instagram ad campaigns',
        'Landing page optimization',
        'Email automation sequences',
        'Performance tracking dashboard',
        'Monthly optimization reports'
      ],
      'Graphic Design': [
        'Professional logo design',
        'Complete brand identity',
        'Marketing materials',
        'Social media templates',
        'Brand guidelines document'
      ],
      'Marketing Automation': [
        'Lead scoring and routing',
        'Email nurture sequences',
        'CRM setup and training',
        'Zapier workflow automation',
        'Custom reporting dashboard'
      ]
    };

    const serviceName = service.name.split('—')[0].trim();
    return featureMap[serviceName] || [];
  }

  createPackageBenefits(template, services) {
    const benefits = [
      'Faster results than individual services',
      'Integrated approach for maximum impact',
      'Single point of contact and accountability',
      'Coordinated timeline and delivery',
      'Better value than purchasing separately'
    ];

    // Add template-specific benefits
    const templateBenefits = {
      'digital_foundation': ['Professional credibility from day one', 'Immediate lead generation capability'],
      'growth_accelerator': ['Predictable customer acquisition', 'Scalable growth systems'],
      'market_dominator': ['Competitive advantage in your market', 'Premium positioning'],
      'rapid_launch': ['Fastest time to market', 'Immediate revenue generation']
    };

    return [...benefits, ...(templateBenefits[template.name] || [])];
  }

  createSocialProof(template) {
    const proofElements = [
      '50+ successful package deliveries',
      '90% client satisfaction rate',
      'Average 3x ROI within 90 days',
      'Featured in Northeast Ohio Business Journal'
    ];

    return proofElements;
  }

  createUrgencyMessage(template) {
    const urgencyMessages = {
      'digital_foundation': 'Every day without professional presence costs you customers',
      'growth_accelerator': 'Competitors are capturing market share while you wait',
      'market_dominator': 'Limited availability - only 2 spots per month',
      'rapid_launch': 'Time-sensitive opportunities require immediate action'
    };

    return urgencyMessages[template.name] || 'Limited availability for comprehensive packages';
  }

  createPackageGuarantee(template) {
    return {
      type: 'results_guarantee',
      promise: 'See measurable business improvement within 60 days or we work for free until you do',
      terms: 'Client must implement recommendations and provide access to performance data'
    };
  }

  generatePackageProposal(packageId, clientInfo = {}) {
    const packageData = this.packageData.createdPackages.find(p => p.id === packageId);
    if (!packageData) throw new Error('Package not found');

    return {
      client: clientInfo,
      package: packageData,
      proposal: {
        executiveSummary: this.createExecutiveSummary(packageData, clientInfo),
        problemStatement: this.createProblemStatement(packageData, clientInfo),
        solutionOverview: this.createSolutionOverview(packageData),
        deliverables: this.createDeliverablesSection(packageData),
        timeline: this.createTimelineSection(packageData),
        investment: this.createInvestmentSection(packageData),
        nextSteps: this.createNextStepsSection(packageData),
        appendix: this.createAppendix(packageData)
      },
      generated: new Date().toISOString()
    };
  }

  createExecutiveSummary(packageData, clientInfo) {
    const template = this.packageData.packageTemplates[packageData.template];
    
    return {
      overview: `This proposal outlines the ${template.name} specifically designed for ${clientInfo.businessName || 'your business'}.`,
      transformation: template.transformation,
      timeline: `Complete transformation in ${packageData.timeline.totalDuration} days`,
      investment: `Total investment: $${packageData.pricing.packagePrice.toLocaleString()}`,
      savings: packageData.pricing.savings > 0 ? `Save $${packageData.pricing.savings.toLocaleString()} vs. individual services` : null
    };
  }

  createProblemStatement(packageData, clientInfo) {
    const template = this.packageData.packageTemplates[packageData.template];
    
    return {
      currentSituation: template.problemSolved,
      businessImpact: this.getBusinessImpact(template),
      urgency: template.name.includes('rapid') ? 'high' : 'medium',
      costOfInaction: this.calculateCostOfInaction(template)
    };
  }

  getBusinessImpact(template) {
    const impacts = {
      'digital_foundation': 'Losing customers to competitors with professional online presence',
      'growth_accelerator': 'Inconsistent revenue due to unpredictable lead generation',
      'market_dominator': 'Unable to compete effectively with larger, established businesses',
      'rapid_launch': 'Missing time-sensitive market opportunities'
    };

    return impacts[template.name] || 'Suboptimal business performance and growth';
  }

  calculateCostOfInaction(template) {
    const costs = {
      'digital_foundation': '$1,000+ monthly in lost opportunities',
      'growth_accelerator': '$5,000+ monthly in inefficient marketing spend',
      'market_dominator': '$10,000+ monthly in competitive disadvantage',
      'rapid_launch': '$15,000+ in missed market opportunity'
    };

    return costs[template.name] || 'Significant opportunity cost';
  }

  exportPackageData(format = 'json') {
    const exportData = {
      timestamp: new Date().toISOString(),
      packages: this.packageData.createdPackages,
      templates: this.packageData.packageTemplates,
      bundlingStrategies: this.packageData.bundlingStrategies,
      summary: this.generatePackageSummary()
    };

    if (format === 'csv') {
      return this.convertPackagesToCSV(exportData);
    }
    
    return JSON.stringify(exportData, null, 2);
  }

  generatePackageSummary() {
    const packages = this.packageData.createdPackages;
    
    return {
      totalPackages: packages.length,
      averagePrice: packages.reduce((sum, p) => sum + p.pricing.packagePrice, 0) / packages.length,
      mostPopularTemplate: this.getMostPopularTemplate(packages),
      totalSavingsOffered: packages.reduce((sum, p) => sum + p.pricing.savings, 0),
      averageDeliveryTime: packages.reduce((sum, p) => sum + p.timeline.totalDuration, 0) / packages.length
    };
  }

  getMostPopularTemplate(packages) {
    const templateCounts = {};
    packages.forEach(p => {
      templateCounts[p.template] = (templateCounts[p.template] || 0) + 1;
    });
    
    return Object.keys(templateCounts).reduce((a, b) => 
      templateCounts[a] > templateCounts[b] ? a : b, '');
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ServicePackager;
}

// Usage example
const servicePackager = new ServicePackager();

// Example package creation workflow
async function createBusinessPackages() {
  // 1. Create Digital Foundation Package
  const foundationPackage = servicePackager.createPackage(
    'digital_foundation',
    ['graphic-design', 'website-development'],
    { rushDelivery: false, clientSize: 'small' }
  );
  console.log('Digital Foundation Package:', foundationPackage);

  // 2. Create Growth Accelerator Package
  const growthPackage = servicePackager.createPackage(
    'growth_accelerator',
    ['website-development', 'digital-marketing', 'marketing-automation'],
    { clientSize: 'medium', hasExistingWebsite: false }
  );
  console.log('Growth Accelerator Package:', growthPackage);

  // 3. Create Market Dominator Package
  const dominatorPackage = servicePackager.createPackage(
    'market_dominator',
    ['graphic-design', 'website-development', 'digital-marketing', 'marketing-automation'],
    { clientSize: 'large', customRequirements: true }
  );
  console.log('Market Dominator Package:', dominatorPackage);

  // 4. Generate proposal for a specific package
  const proposal = servicePackager.generatePackageProposal(foundationPackage.id, {
    businessName: 'ABC Plumbing',
    industry: 'Home Services',
    currentChallenges: ['No website', 'Unprofessional brand', 'Low online visibility']
  });
  console.log('Package Proposal:', proposal);

  return {
    foundationPackage,
    growthPackage,
    dominatorPackage,
    proposal
  };
}

// Export the packager instance
if (typeof window !== 'undefined') {
  window.ServicePackager = servicePackager;
}