/**
 * Market Validator Agent for INT Creative
 * 
 * Executes systematic market validation testing based on the niche testing framework
 * and service validation playbook to identify highest-traction services and niches.
 */

class MarketValidator {
  constructor() {
    this.name = "market-validator";
    this.description = "Executes systematic niche testing and service validation to identify market opportunities";
    this.tools = ["WebSearch", "WebFetch", "Write", "Read", "MultiEdit", "Grep"];
    
    // Initialize validation tracking
    this.testingData = {
      niches: this.initializeNiches(),
      services: this.initializeServices(),
      outreachMetrics: this.initializeOutreachTracking(),
      validationResults: []
    };
  }

  initializeNiches() {
    return {
      'hvac-plumbing-electrical': {
        name: 'Local Service Businesses (HVAC, Plumbing, Electrical)',
        tier: 1,
        hypothesis: 'High need for automation and lead generation',
        targetClients: 50,
        metrics: {
          connectionRate: 0,
          responseRate: 0,
          interestRate: 0,
          outreachSent: 0,
          connections: 0,
          responses: 0,
          auditsRequested: 0
        },
        painPoints: [],
        testService: 'automated quote request system',
        successCriteria: '3+ clients at $2,000/month'
      },
      'med-spas-wellness': {
        name: 'Med Spas & Wellness Centers',
        tier: 1,
        hypothesis: 'Need professional digital presence and booking automation',
        targetClients: 30,
        metrics: {
          connectionRate: 0,
          responseRate: 0,
          interestRate: 0,
          outreachSent: 0,
          connections: 0,
          responses: 0,
          auditsRequested: 0
        },
        painPoints: [],
        testService: 'Instagram management + booking system',
        successCriteria: '2+ clients at $3,000/month'
      },
      'restaurants-bars': {
        name: 'Restaurants & Bars',
        tier: 2,
        hypothesis: 'Need social media and review management',
        targetClients: 40,
        metrics: {
          connectionRate: 0,
          responseRate: 0,
          interestRate: 0,
          outreachSent: 0,
          connections: 0,
          responses: 0,
          auditsRequested: 0
        },
        painPoints: [],
        testService: 'Social content calendar + review response system',
        successCriteria: '5+ clients at $1,000/month'
      },
      'professional-services': {
        name: 'Professional Services (Law, Accounting)',
        tier: 2,
        hypothesis: 'Need authority building and lead nurturing',
        targetClients: 25,
        metrics: {
          connectionRate: 0,
          responseRate: 0,
          interestRate: 0,
          outreachSent: 0,
          connections: 0,
          responses: 0,
          auditsRequested: 0
        },
        painPoints: [],
        testService: 'Blog content + email automation',
        successCriteria: '2+ clients at $2,500/month'
      },
      'ecommerce': {
        name: 'E-commerce Stores',
        tier: 3,
        hypothesis: 'Need conversion optimization and email automation',
        targetClients: 20,
        metrics: {
          connectionRate: 0,
          responseRate: 0,
          interestRate: 0,
          outreachSent: 0,
          connections: 0,
          responses: 0,
          auditsRequested: 0
        },
        painPoints: [],
        testService: 'Abandoned cart sequences + product page optimization',
        successCriteria: '1+ client at $5,000/month'
      }
    };
  }

  initializeServices() {
    return {
      'website-development': {
        name: 'Website Development — Conversion Site Sprint',
        hypothesis: 'Small businesses need websites that convert visitors to leads',
        pricingRange: '$2,500-$5,000',
        timeline: '7 days',
        testCases: [],
        validationStatus: 'pending',
        metrics: {
          timeToDeliver: 0,
          clientSatisfaction: 0,
          conversionImprovement: 0,
          profitMargin: 0
        }
      },
      'digital-marketing': {
        name: 'Digital Marketing — Campaign Management',
        hypothesis: 'Businesses waste money on ads without clear ROI tracking',
        pricingRange: '$1,500-$3,000/month',
        timeline: '14 days setup',
        testCases: [],
        validationStatus: 'pending',
        metrics: {
          timeToDeliver: 0,
          clientSatisfaction: 0,
          leadCostReduction: 0,
          profitMargin: 0
        }
      },
      'graphic-design': {
        name: 'Graphic Design — Professional Brand Identity',
        hypothesis: 'Professional design increases perceived value and trust',
        pricingRange: '$500-$1,500',
        timeline: '9 days',
        testCases: [],
        validationStatus: 'pending',
        metrics: {
          timeToDeliver: 0,
          clientSatisfaction: 0,
          brandRecognitionImprovement: 0,
          profitMargin: 0
        }
      },
      'marketing-automation': {
        name: 'Marketing Automation — Business Process Systems',
        hypothesis: 'Small businesses waste 10+ hours/week on repetitive tasks',
        pricingRange: '$1,500-$5,000',
        timeline: '12 days',
        testCases: [],
        validationStatus: 'pending',
        metrics: {
          timeToDeliver: 0,
          clientSatisfaction: 0,
          timeSavings: 0,
          profitMargin: 0
        }
      }
    };
  }

  initializeOutreachTracking() {
    return {
      weekly: {
        targetOutreaches: 50,
        actualOutreaches: 0,
        platforms: ['LinkedIn', 'Email', 'Cold Calls'],
        bestPerformingPlatform: null,
        avgResponseTime: 0
      },
      monthly: {
        totalOutreaches: 0,
        totalResponses: 0,
        totalAudits: 0,
        bestPerformingNiche: null,
        conversionToClient: 0
      }
    };
  }

  async validateNiche(nicheKey, outreachData) {
    const niche = this.testingData.niches[nicheKey];
    if (!niche) throw new Error(`Niche ${nicheKey} not found`);

    // Update metrics based on outreach data
    niche.metrics.outreachSent += outreachData.sent || 0;
    niche.metrics.connections += outreachData.connections || 0;
    niche.metrics.responses += outreachData.responses || 0;
    niche.metrics.auditsRequested += outreachData.audits || 0;

    // Calculate rates
    niche.metrics.connectionRate = niche.metrics.outreachSent > 0 ? 
      (niche.metrics.connections / niche.metrics.outreachSent) * 100 : 0;
    niche.metrics.responseRate = niche.metrics.connections > 0 ? 
      (niche.metrics.responses / niche.metrics.connections) * 100 : 0;
    niche.metrics.interestRate = niche.metrics.responses > 0 ? 
      (niche.metrics.auditsRequested / niche.metrics.responses) * 100 : 0;

    // Analyze performance
    const performance = this.analyzeNichePerformance(niche);
    
    return {
      niche: nicheKey,
      performance,
      recommendation: this.generateNicheRecommendation(niche, performance),
      nextActions: this.getNextActionsForNiche(niche, performance)
    };
  }

  analyzeNichePerformance(niche) {
    const { connectionRate, responseRate, interestRate } = niche.metrics;
    
    let score = 0;
    let status = 'red';
    
    // Scoring based on framework targets
    if (connectionRate >= 30) score += 3;
    else if (connectionRate >= 20) score += 2;
    else if (connectionRate >= 10) score += 1;
    
    if (responseRate >= 20) score += 3;
    else if (responseRate >= 15) score += 2;
    else if (responseRate >= 10) score += 1;
    
    if (interestRate >= 10) score += 4;
    else if (interestRate >= 7) score += 2;
    else if (interestRate >= 5) score += 1;
    
    // Determine status
    if (score >= 8) status = 'green';
    else if (score >= 5) status = 'yellow';
    
    return {
      score,
      status,
      connectionRate,
      responseRate,
      interestRate,
      details: {
        connectionPerformance: connectionRate >= 30 ? 'excellent' : connectionRate >= 20 ? 'good' : 'needs improvement',
        responsePerformance: responseRate >= 20 ? 'excellent' : responseRate >= 15 ? 'good' : 'needs improvement',
        interestPerformance: interestRate >= 10 ? 'excellent' : interestRate >= 7 ? 'good' : 'needs improvement'
      }
    };
  }

  generateNicheRecommendation(niche, performance) {
    switch (performance.status) {
      case 'green':
        return {
          action: 'scale',
          reasoning: 'Strong market traction - increase outreach volume and move to paid service testing',
          priority: 'high'
        };
      case 'yellow':
        return {
          action: 'iterate',
          reasoning: 'Moderate traction - refine messaging and test different value propositions',
          priority: 'medium'
        };
      case 'red':
        return {
          action: 'pivot_or_pause',
          reasoning: 'Low traction - consider different messaging, different niche segment, or pause testing',
          priority: 'low'
        };
    }
  }

  getNextActionsForNiche(niche, performance) {
    const actions = [];
    
    if (performance.connectionRate < 20) {
      actions.push('Revise outreach messaging for higher connection rates');
      actions.push('Test different LinkedIn/email subject lines');
    }
    
    if (performance.responseRate < 15) {
      actions.push('Improve value proposition in initial messages');
      actions.push('Add social proof or local case studies');
    }
    
    if (performance.interestRate < 7) {
      actions.push('Create more compelling free audit offer');
      actions.push('Test different lead magnets (guides, templates, etc.)');
    }
    
    if (performance.status === 'green') {
      actions.push('Begin paid service testing with interested prospects');
      actions.push('Create niche-specific case studies');
      actions.push('Develop specialized service packages for this niche');
    }
    
    return actions;
  }

  async validateService(serviceKey, testData) {
    const service = this.testingData.services[serviceKey];
    if (!service) throw new Error(`Service ${serviceKey} not found`);

    // Create test case record
    const testCase = {
      date: new Date().toISOString(),
      client: testData.client || 'Test Client',
      niche: testData.niche || 'unknown',
      timeInvested: testData.timeInvested || 0,
      clientSatisfaction: testData.clientSatisfaction || 0,
      resultsAchieved: testData.resultsAchieved || [],
      priceTested: testData.priceTested || 0,
      profitMargin: testData.profitMargin || 0,
      feedback: testData.feedback || '',
      recommendation: null
    };

    // Calculate service performance metrics
    service.testCases.push(testCase);
    this.updateServiceMetrics(service);
    
    // Generate validation recommendation
    const validation = this.analyzeServiceValidation(service);
    testCase.recommendation = validation.recommendation;
    
    return {
      service: serviceKey,
      testCase,
      validation,
      nextSteps: this.getServiceNextSteps(service, validation)
    };
  }

  updateServiceMetrics(service) {
    if (service.testCases.length === 0) return;
    
    const cases = service.testCases;
    service.metrics.timeToDeliver = cases.reduce((sum, c) => sum + c.timeInvested, 0) / cases.length;
    service.metrics.clientSatisfaction = cases.reduce((sum, c) => sum + c.clientSatisfaction, 0) / cases.length;
    service.metrics.profitMargin = cases.reduce((sum, c) => sum + c.profitMargin, 0) / cases.length;
  }

  analyzeServiceValidation(service) {
    const metrics = service.metrics;
    const testCases = service.testCases;
    
    let score = 0;
    let status = 'red';
    
    // Scoring criteria from service validation playbook
    if (metrics.clientSatisfaction >= 9) score += 4;
    else if (metrics.clientSatisfaction >= 7) score += 2;
    else if (metrics.clientSatisfaction >= 5) score += 1;
    
    if (metrics.profitMargin >= 60) score += 4;
    else if (metrics.profitMargin >= 40) score += 2;
    else if (metrics.profitMargin >= 20) score += 1;
    
    // Check for pricing acceptance
    const paidClients = testCases.filter(tc => tc.priceTested > 0);
    if (paidClients.length >= 3) score += 3;
    else if (paidClients.length >= 1) score += 1;
    
    // Determine validation status
    if (score >= 9) status = 'green';
    else if (score >= 5) status = 'yellow';
    
    return {
      score,
      status,
      metrics,
      testCaseCount: testCases.length,
      recommendation: this.getServiceRecommendation(status, metrics)
    };
  }

  getServiceRecommendation(status, metrics) {
    switch (status) {
      case 'green':
        return {
          action: 'scale',
          reasoning: 'Service shows strong validation - ready for full market launch',
          confidence: 'high'
        };
      case 'yellow':
        return {
          action: 'iterate',
          reasoning: 'Service needs refinement before scaling',
          confidence: 'medium'
        };
      case 'red':
        return {
          action: 'major_revision',
          reasoning: 'Service requires significant changes or discontinuation',
          confidence: 'low'
        };
    }
  }

  getServiceNextSteps(service, validation) {
    const steps = [];
    
    if (validation.status === 'green') {
      steps.push('Create standardized service delivery process');
      steps.push('Develop marketing materials and case studies');
      steps.push('Set official pricing and packages');
      steps.push('Begin full market rollout');
    } else if (validation.status === 'yellow') {
      steps.push('Conduct 2-3 more test deliveries');
      steps.push('Refine service based on client feedback');
      steps.push('Optimize delivery time and profitability');
      steps.push('Test different pricing points');
    } else {
      steps.push('Analyze fundamental service-market fit');
      steps.push('Consider major service modifications');
      steps.push('Test with different niche or positioning');
      steps.push('Evaluate discontinuation vs. pivot');
    }
    
    return steps;
  }

  generateWeeklyReport() {
    const report = {
      date: new Date().toISOString(),
      summary: {
        totalOutreaches: 0,
        totalResponses: 0,
        totalAudits: 0,
        bestPerformingNiche: null,
        servicesValidated: 0
      },
      nichePerformance: {},
      serviceValidation: {},
      recommendations: [],
      nextWeekPriorities: []
    };

    // Compile niche performance
    let bestNiche = null;
    let bestScore = 0;
    
    Object.entries(this.testingData.niches).forEach(([key, niche]) => {
      const performance = this.analyzeNichePerformance(niche);
      report.nichePerformance[key] = performance;
      report.summary.totalOutreaches += niche.metrics.outreachSent;
      report.summary.totalResponses += niche.metrics.responses;
      report.summary.totalAudits += niche.metrics.auditsRequested;
      
      if (performance.score > bestScore) {
        bestScore = performance.score;
        bestNiche = key;
      }
    });
    
    report.summary.bestPerformingNiche = bestNiche;

    // Compile service validation
    Object.entries(this.testingData.services).forEach(([key, service]) => {
      if (service.testCases.length > 0) {
        const validation = this.analyzeServiceValidation(service);
        report.serviceValidation[key] = validation;
        report.summary.servicesValidated++;
      }
    });

    // Generate recommendations
    report.recommendations = this.generateWeeklyRecommendations(report);
    report.nextWeekPriorities = this.generateNextWeekPriorities(report);

    return report;
  }

  generateWeeklyRecommendations(report) {
    const recommendations = [];
    
    // Niche recommendations
    const greenNiches = Object.entries(report.nichePerformance)
      .filter(([key, perf]) => perf.status === 'green');
    
    if (greenNiches.length > 0) {
      recommendations.push({
        type: 'niche',
        priority: 'high',
        action: `Scale outreach in ${greenNiches.map(([key]) => key).join(', ')} - showing strong traction`,
        expected_outcome: 'Increased qualified leads and faster path to revenue'
      });
    }

    const redNiches = Object.entries(report.nichePerformance)
      .filter(([key, perf]) => perf.status === 'red');
    
    if (redNiches.length > 0) {
      recommendations.push({
        type: 'niche',
        priority: 'medium',
        action: `Revise messaging or pause testing for ${redNiches.map(([key]) => key).join(', ')}`,
        expected_outcome: 'Improved resource allocation and higher ROI on outreach efforts'
      });
    }

    // Service recommendations
    const validatedServices = Object.entries(report.serviceValidation)
      .filter(([key, val]) => val.status === 'green');
    
    if (validatedServices.length > 0) {
      recommendations.push({
        type: 'service',
        priority: 'high',
        action: `Begin full market launch for ${validatedServices.map(([key]) => key).join(', ')}`,
        expected_outcome: 'Scalable revenue streams with proven market fit'
      });
    }

    return recommendations;
  }

  generateNextWeekPriorities(report) {
    const priorities = [];
    
    // Always include outreach targets
    priorities.push({
      category: 'outreach',
      task: 'Complete 50+ new prospect outreaches',
      target: 'Focus on best-performing niches'
    });

    // Include service testing if needed
    const servicesNeedingValidation = Object.entries(this.testingData.services)
      .filter(([key, service]) => service.testCases.length < 3);
    
    if (servicesNeedingValidation.length > 0) {
      priorities.push({
        category: 'validation',
        task: `Complete service validation tests for ${servicesNeedingValidation.length} services`,
        target: 'Deliver 1-2 test services to gather data'
      });
    }

    // Include follow-ups
    priorities.push({
      category: 'follow_up',
      task: 'Follow up with all audit requests from previous week',
      target: 'Convert audits to paid discovery calls'
    });

    return priorities;
  }

  async exportValidationData(format = 'json') {
    const exportData = {
      timestamp: new Date().toISOString(),
      summary: this.generateWeeklyReport(),
      rawData: {
        niches: this.testingData.niches,
        services: this.testingData.services,
        outreachMetrics: this.testingData.outreachMetrics
      }
    };

    if (format === 'csv') {
      return this.convertToCSV(exportData);
    }
    
    return JSON.stringify(exportData, null, 2);
  }

  convertToCSV(data) {
    // Convert niche performance to CSV format
    const nicheRows = Object.entries(data.rawData.niches).map(([key, niche]) => {
      return [
        key,
        niche.name,
        niche.metrics.outreachSent,
        niche.metrics.connections,
        niche.metrics.responses,
        niche.metrics.auditsRequested,
        niche.metrics.connectionRate.toFixed(2),
        niche.metrics.responseRate.toFixed(2),
        niche.metrics.interestRate.toFixed(2)
      ].join(',');
    });

    const csvContent = [
      'Niche,Name,Outreach Sent,Connections,Responses,Audits,Connection Rate %,Response Rate %,Interest Rate %',
      ...nicheRows
    ].join('\n');

    return csvContent;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MarketValidator;
}

// Usage example and initialization
const validator = new MarketValidator();

// Example validation workflow
async function runValidationCycle() {
  // 1. Record outreach results
  const hvacOutreach = {
    sent: 25,
    connections: 8,
    responses: 3,
    audits: 1
  };
  
  const hvacValidation = await validator.validateNiche('hvac-plumbing-electrical', hvacOutreach);
  console.log('HVAC Niche Validation:', hvacValidation);

  // 2. Record service test results
  const websiteTest = {
    client: 'HVAC Company A',
    niche: 'hvac-plumbing-electrical',
    timeInvested: 16,
    clientSatisfaction: 9,
    resultsAchieved: ['3x lead increase', 'mobile-optimized site'],
    priceTested: 3500,
    profitMargin: 65,
    feedback: 'Exceeded expectations, ready to refer others'
  };
  
  const serviceValidation = await validator.validateService('website-development', websiteTest);
  console.log('Website Service Validation:', serviceValidation);

  // 3. Generate weekly report
  const weeklyReport = validator.generateWeeklyReport();
  console.log('Weekly Validation Report:', weeklyReport);

  return {
    nicheValidation: hvacValidation,
    serviceValidation,
    weeklyReport
  };
}

// Export the validator instance for immediate use
if (typeof window !== 'undefined') {
  window.MarketValidator = validator;
}