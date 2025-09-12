/**
 * Sales Converter Agent for INT Creative
 * 
 * Systematically converts prospects into paying clients using proven sales frameworks,
 * objection handling, and value-based selling specifically designed for service businesses.
 */

class SalesConverter {
  constructor() {
    this.name = "sales-converter";
    this.description = "Converts prospects into paying clients through systematic sales processes and proven frameworks";
    this.tools = ["Write", "Read", "MultiEdit"];
    
    // Initialize sales frameworks and conversion tracking
    this.salesData = {
      frameworks: this.initializeSalesFrameworks(),
      objectionHandling: this.initializeObjectionHandling(),
      valuePropositions: this.initializeValuePropositions(),
      conversations: [],
      conversions: [],
      performance: this.initializePerformanceTracking()
    };
  }

  initializeSalesFrameworks() {
    return {
      'discovery_call': {
        name: 'Discovery Call Framework',
        duration: '30 minutes',
        objective: 'Understand client needs and qualify budget/timeline',
        stages: [
          {
            stage: 'rapport_building',
            duration: 5,
            objective: 'Build trust and connection',
            script: `Thanks for taking the time to speak with me today, {firstName}. I saw your {industry} business online and was impressed by {specific_compliment}.

Before we dive in, I'd love to know a bit about you - how long have you been running {businessName}?`,
            questions: [
              'How long have you been in business?',
              'What got you started in this industry?',
              'What do you enjoy most about the business?'
            ]
          },
          {
            stage: 'current_situation',
            duration: 10,
            objective: 'Understand their current challenges and situation',
            script: `I'd love to understand your current situation better. When it comes to {specific_area}, what's working well for you right now?`,
            questions: [
              'How are you currently generating leads/customers?',
              'What\'s your biggest challenge in growing the business?',
              'How much time do you spend on marketing/admin tasks?',
              'What\'s your current monthly marketing budget?',
              'Have you worked with any marketing companies before?'
            ]
          },
          {
            stage: 'pain_amplification',
            duration: 8,
            objective: 'Amplify pain points and consequences of inaction',
            script: `That sounds frustrating. Help me understand - if you don\'t solve this {specific_problem}, what happens to your business over the next 6 months?`,
            questions: [
              'What happens if this problem continues?',
              'How much revenue do you think you\'re losing?',
              'How is this affecting your stress levels/work-life balance?',
              'What have you tried to fix this before?'
            ]
          },
          {
            stage: 'solution_preview',
            duration: 5,
            objective: 'Present solution framework without details',
            script: `Based on what you\'ve shared, I think I can help. We\'ve worked with other {industry} businesses facing similar challenges.

The approach is typically a {service_type} that focuses on {primary_outcome}. 

Most clients see {specific_result} within {timeframe}.

Does that sound like something that would be valuable for {businessName}?`
          },
          {
            stage: 'next_steps',
            duration: 2,
            objective: 'Schedule proposal presentation or close',
            script: `Great! I\'d like to put together a specific proposal for {businessName}. 

I can have this ready by {date}. Would you prefer to meet in person or over Zoom to go through it?`
          }
        ],
        success_criteria: [
          'Client admits to having the problem',
          'Budget range is qualified ($2,500+ available)',
          'Timeline is qualified (ready to start within 60 days)',
          'Decision maker is identified',
          'Next meeting is scheduled'
        ]
      },
      'proposal_presentation': {
        name: 'Proposal Presentation Framework',
        duration: '45-60 minutes',
        objective: 'Present solution and close the sale',
        stages: [
          {
            stage: 'recap_discovery',
            duration: 10,
            objective: 'Confirm understanding of their situation',
            script: `Thanks for making time today, {firstName}. 

Before I show you what I\'ve put together, let me confirm I understood your situation correctly:

- Your main challenge is {primary_challenge}
- You\'re currently {current_situation}
- Your goal is to {desired_outcome}
- You mentioned wanting to get started {timeline}

Did I get that right?`
          },
          {
            stage: 'solution_overview',
            duration: 15,
            objective: 'Present the recommended solution',
            script: `Perfect. Based on our conversation, I\'ve designed a {service_name} specifically for {businessName}.

Here\'s how this works:

[Present solution with visuals/examples]

The outcome for you is {transformation_promise}.`
          },
          {
            stage: 'social_proof',
            duration: 10,
            objective: 'Build confidence with case studies',
            script: `Let me show you what happened when we did this for {similar_client}:

[Share specific case study with metrics]

They went from {before_state} to {after_state} in {timeframe}.`
          },
          {
            stage: 'pricing_presentation',
            duration: 8,
            objective: 'Present investment and justify value',
            script: `Now, for the investment. Most {service_type} projects like this typically run $8,000 to $15,000.

For {businessName}, based on your specific needs, the investment is ${price}.

Given that you mentioned {pain_point} is costing you approximately ${cost_calculation} per month, this should pay for itself within {payback_period}.

How does that sound?`
          },
          {
            stage: 'objection_handling',
            duration: 10,
            objective: 'Address concerns and move toward close',
            script: `I can see you\'re thinking this through. What questions do you have?`
          },
          {
            stage: 'closing',
            duration: 5,
            objective: 'Get commitment and next steps',
            script: `Based on everything we\'ve discussed, are you ready to move forward with this?`
          }
        ],
        closing_techniques: [
          'assumptive_close',
          'alternative_choice_close',
          'urgency_close',
          'summary_close'
        ]
      },
      'follow_up_sequence': {
        name: 'Follow-up Framework',
        objective: 'Re-engage prospects who didn\'t close initially',
        sequence: [
          {
            timing: 'same_day',
            method: 'email',
            purpose: 'thank_you_and_recap',
            template: 'Thanks again for your time today. As discussed, I\'ve attached the proposal for {service_name}...'
          },
          {
            timing: '3_days',
            method: 'email',
            purpose: 'value_reinforcement',
            template: 'Hi {firstName}, I was thinking about our conversation and wanted to share this case study...'
          },
          {
            timing: '1_week',
            method: 'phone',
            purpose: 'check_in_and_address_concerns',
            template: 'Just wanted to check in and see if you had any questions about the proposal...'
          },
          {
            timing: '2_weeks',
            method: 'email',
            purpose: 'time_sensitive_offer',
            template: 'I wanted to reach out one more time before we close our calendar for this month...'
          },
          {
            timing: '1_month',
            method: 'email',
            purpose: 'helpful_resource',
            template: 'Even if the timing isn\'t right for us to work together, I wanted to share this resource...'
          }
        ]
      }
    };
  }

  initializeObjectionHandling() {
    return {
      'price_objections': {
        'too_expensive': {
          objection: 'It\'s too expensive / I can\'t afford it',
          responses: [
            {
              technique: 'break_down_cost',
              response: `I understand that ${price} feels like a big investment. Let me break this down differently:

This works out to about ${daily_cost} per day over the next year.

You mentioned you\'re losing about ${monthly_loss} per month due to {problem}. So in reality, this pays for itself in {payback_months}, and then puts an extra ${monthly_roi} in your pocket every month after that.

When you look at it that way, can you see how this actually saves you money?`
            },
            {
              technique: 'cost_of_inaction',
              response: `I hear you on the investment. Let me ask you this - what\'s it costing you NOT to solve this problem?

You mentioned losing ${estimated_loss} per month. Over the next 12 months, that\'s ${annual_loss}.

So the real question is: can you afford NOT to fix this?`
            },
            {
              technique: 'payment_options',
              response: `I understand cash flow is important. We have a few options:

1. Pay in full and save 5% (${discounted_price})
2. Split into two payments: 60% to start, 40% on completion
3. For established businesses, we can discuss a payment plan

Which option works better for your cash flow?`
            }
          ]
        },
        'need_to_think': {
          objection: 'I need to think about it',
          responses: [
            {
              technique: 'specific_concerns',
              response: `Of course, this is an important decision. Help me understand - what specifically would you like to think through?

Is it the investment, the timeline, or something about the approach?`
            },
            {
              technique: 'timeline_qualification',
              response: `That makes sense. When you say you need to think about it, are we talking about a few days, or is this something you\'d revisit next quarter?

The reason I ask is that we only take on 4 new clients per month, and we\'re already booking into {next_month}.`
            },
            {
              technique: 'decision_process',
              response: `I understand. Walk me through your decision-making process. 

Who else needs to be involved in this decision? And what information would help you move forward with confidence?`
            }
          ]
        },
        'spouse_consultation': {
          objection: 'I need to talk to my spouse/partner',
          responses: [
            {
              technique: 'include_decision_maker',
              response: `That\'s completely understandable - this affects your whole family. 

Would it make sense to have a quick call with both of you together? I\'d be happy to explain how this works and answer any questions they might have.

When would be a good time for a 15-minute conversation with both of you?`
            },
            {
              technique: 'arm_with_information',
              response: `I totally get that. What questions do you think they\'ll have?

Let me give you some talking points that might help. The main thing to emphasize is that this should generate ${roi_estimate} additional revenue within ${timeframe}, while freeing up ${time_savings} hours of your time each week.`
            }
          ]
        },
        'timing_concerns': {
          objection: 'Now isn\'t a good time',
          responses: [
            {
              technique: 'timing_never_perfect',
              response: `I understand timing is always a challenge in business. Can I ask - when would be the perfect time?

The thing is, every month you wait is another ${monthly_loss} walking out the door. Sometimes the best time to plant a tree was 20 years ago, but the second best time is today.

What would need to change for the timing to feel right?`
            },
            {
              technique: 'seasonal_advantages',
              response: `Actually, starting now might be perfect timing. Here\'s why:

We can get everything set up during your slower period, so when your busy season hits, you\'ll have all these systems working for you.

Most of our best clients start during their \'off season\' for exactly this reason.`
            }
          ]
        },
        'diy_objection': {
          objection: 'I can do this myself / My nephew can do it',
          responses: [
            {
              technique: 'opportunity_cost',
              response: `I appreciate that you\'re hands-on with your business - that\'s what makes you successful.

Let me ask you this: how much is your time worth per hour? If it\'s ${hourly_rate}, and this takes you 40 hours to learn and implement (which is conservative), that\'s ${opportunity_cost} in lost income.

Plus, I\'ve been doing this for ${years} years and have worked with ${client_count} businesses. How long do you think it would take you to get the same results?`
            },
            {
              technique: 'specialization_value',
              response: `You absolutely could learn to do this. Just like I could probably learn to {their_profession}.

But here\'s the thing - you didn\'t build your business by doing everything yourself. You hired specialists for {examples}.

This is the same principle. While you\'re learning marketing, your competitors who hired specialists are capturing market share.

Doesn\'t it make more sense to focus on what you do best while I handle what I do best?`
            }
          ]
        }
      },
      'trust_objections': {
        'previous_bad_experience': {
          objection: 'I\'ve been burned by marketing companies before',
          responses: [
            {
              technique: 'acknowledge_and_differentiate',
              response: `I\'m sorry to hear that. Unfortunately, there are some companies in this industry that over-promise and under-deliver.

Can you tell me what happened? I want to make sure we don\'t repeat those mistakes.

Here\'s how we\'re different: [specific differentiators]

And we guarantee our work - if you don\'t see {specific_results} within {timeframe}, we\'ll work for free until you do.`
            },
            {
              technique: 'transparency_approach',
              response: `I totally understand that concern. Bad experiences make you cautious, which is actually smart.

Here\'s what I suggest: let\'s start with our discovery audit for ${audit_price}. This gives you a detailed analysis of your current situation and specific recommendations.

If you love it, we can discuss the full implementation. If not, you\'ve only invested ${audit_price} and you\'ll have a roadmap you can use however you want.

Does that feel like a safer way to test the waters?`
            }
          ]
        }
      }
    };
  }

  initializeValuePropositions() {
    return {
      'website-development': {
        primary_value: 'Professional website that generates leads 24/7',
        proof_points: [
          'Average client sees 3x increase in online inquiries',
          'Mobile-optimized for 60% of your traffic',
          'Complete in 7 days vs 4-6 weeks with agencies'
        ],
        roi_calculation: 'If this generates just 2 extra customers per month at ${avg_customer_value} each, it pays for itself in ${payback_months} months',
        urgency_factors: [
          'Every day without professional presence loses customers to competitors',
          'Only 3 website slots available this month',
          'Price increases 15% next quarter'
        ]
      },
      'digital-marketing': {
        primary_value: 'Predictable customer acquisition system',
        proof_points: [
          '40% reduction in cost per lead on average',
          '200% increase in qualified leads',
          'Automated follow-up converts 15% of prospects'
        ],
        roi_calculation: 'Current ad spend: ${current_spend}/month. We typically reduce cost per lead by 40% while doubling volume. That\'s ${roi_estimate} extra profit monthly',
        urgency_factors: [
          'Competitors are capturing market share while you wait',
          'Ad costs increase 10-15% annually',
          'Q4 is prime time for lead generation'
        ]
      },
      'graphic-design': {
        primary_value: 'Professional brand that commands premium pricing',
        proof_points: [
          'Professional branding allows 20-30% higher pricing',
          'Complete brand identity in 9 days',
          'Consistent brand recognition across all touchpoints'
        ],
        roi_calculation: 'If professional branding allows you to charge 20% more per customer, that\'s ${price_increase} extra per customer. With ${monthly_customers} customers per month, you make an extra ${monthly_increase}',
        urgency_factors: [
          'First impressions happen once',
          'Customers judge credibility within 7 seconds',
          'Inconsistent branding confuses customers'
        ]
      },
      'marketing-automation': {
        primary_value: 'Business scales without hiring more staff',
        proof_points: [
          'Save 10+ hours per week on manual tasks',
          '100% lead follow-up rate (zero leads lost)',
          'Automated systems work 24/7/365'
        ],
        roi_calculation: '10 hours saved per week × ${hourly_value} × 52 weeks = ${annual_savings} in time savings. Plus zero lost leads = ${additional_revenue} extra revenue',
        urgency_factors: [
          'Manual processes limit growth potential',
          'Every missed follow-up is lost revenue',
          'Automation complexity increases over time'
        ]
      }
    };
  }

  initializePerformanceTracking() {
    return {
      calls: {
        discovery_calls: 0,
        proposals_presented: 0,
        closed_deals: 0,
        discovery_to_proposal_rate: 0,
        proposal_to_close_rate: 0,
        overall_conversion_rate: 0
      },
      revenue: {
        total_closed: 0,
        average_deal_size: 0,
        monthly_recurring: 0,
        pipeline_value: 0
      },
      objections: {
        most_common: {},
        conversion_by_objection: {},
        objection_resolution_rate: 0
      },
      follow_up: {
        follow_ups_sent: 0,
        follow_up_responses: 0,
        follow_up_conversions: 0
      }
    };
  }

  createSalesConversation(prospectData, callType = 'discovery_call') {
    const conversation = {
      id: this.generateConversationId(),
      prospect: prospectData,
      callType,
      framework: this.salesData.frameworks[callType],
      stage: 'scheduled',
      startTime: null,
      endTime: null,
      notes: [],
      objections: [],
      outcomes: {},
      nextSteps: [],
      created: new Date().toISOString()
    };

    this.salesData.conversations.push(conversation);
    return conversation;
  }

  generateConversationId() {
    return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  }

  startSalesCall(conversationId) {
    const conversation = this.salesData.conversations.find(c => c.id === conversationId);
    if (!conversation) throw new Error('Conversation not found');

    conversation.stage = 'in_progress';
    conversation.startTime = new Date().toISOString();
    conversation.currentFrameworkStage = 0;

    return {
      conversationId,
      framework: conversation.framework,
      currentStage: conversation.framework.stages[0],
      script: this.personalizeScript(conversation.framework.stages[0].script, conversation.prospect),
      suggestedQuestions: conversation.framework.stages[0].questions
    };
  }

  personalizeScript(script, prospect) {
    const replacements = {
      firstName: prospect.firstName || prospect.contactName?.split(' ')[0] || 'there',
      businessName: prospect.company || prospect.businessName || 'your business',
      industry: prospect.industry || 'your industry',
      specific_compliment: this.generateCompliment(prospect),
      specific_area: this.inferProblemArea(prospect)
    };

    let personalizedScript = script;
    Object.entries(replacements).forEach(([key, value]) => {
      personalizedScript = personalizedScript.replace(new RegExp(`{${key}}`, 'g'), value);
    });

    return personalizedScript;
  }

  generateCompliment(prospect) {
    const compliments = [
      'your professional online presence',
      'the quality of your work',
      'your customer reviews',
      'your local reputation',
      'your business growth'
    ];
    return compliments[Math.floor(Math.random() * compliments.length)];
  }

  inferProblemArea(prospect) {
    if (prospect.industry?.includes('HVAC')) return 'lead generation and customer acquisition';
    if (prospect.industry?.includes('restaurant')) return 'customer flow and online ordering';
    if (prospect.industry?.includes('spa')) return 'client acquisition and booking management';
    return 'business growth and marketing';
  }

  advanceCallStage(conversationId, stageNotes, outcomes = {}) {
    const conversation = this.salesData.conversations.find(c => c.id === conversationId);
    if (!conversation) throw new Error('Conversation not found');

    // Record notes for current stage
    const currentStage = conversation.framework.stages[conversation.currentFrameworkStage];
    conversation.notes.push({
      stage: currentStage.stage,
      notes: stageNotes,
      outcomes,
      timestamp: new Date().toISOString()
    });

    // Advance to next stage
    conversation.currentFrameworkStage++;
    
    if (conversation.currentFrameworkStage >= conversation.framework.stages.length) {
      return this.completeSalesCall(conversationId);
    }

    const nextStage = conversation.framework.stages[conversation.currentFrameworkStage];
    return {
      conversationId,
      currentStage: nextStage,
      script: this.personalizeScript(nextStage.script, conversation.prospect),
      suggestedQuestions: nextStage.questions,
      progress: (conversation.currentFrameworkStage / conversation.framework.stages.length) * 100
    };
  }

  handleObjection(conversationId, objectionType, objectionText) {
    const conversation = this.salesData.conversations.find(c => c.id === conversationId);
    if (!conversation) throw new Error('Conversation not found');

    // Record the objection
    const objection = {
      type: objectionType,
      text: objectionText,
      stage: conversation.framework.stages[conversation.currentFrameworkStage].stage,
      timestamp: new Date().toISOString()
    };

    conversation.objections.push(objection);

    // Get appropriate response
    const objectionData = this.salesData.objectionHandling[objectionType.split('_')[0] + '_objections'][objectionType];
    if (!objectionData) {
      return {
        error: 'Objection type not found',
        suggestion: 'Use active listening and ask clarifying questions'
      };
    }

    // Select best response based on context
    const response = this.selectBestObjectionResponse(objectionData, conversation);

    return {
      objection,
      response: this.personalizeObjectionResponse(response, conversation),
      followUpQuestions: this.generateFollowUpQuestions(objectionType),
      nextSteps: this.getObjectionNextSteps(objectionType)
    };
  }

  selectBestObjectionResponse(objectionData, conversation) {
    // For now, return the first response (could be enhanced with ML)
    return objectionData.responses[0];
  }

  personalizeObjectionResponse(response, conversation) {
    const prospect = conversation.prospect;
    const service = this.inferPrimaryService(prospect);
    const valueData = this.salesData.valuePropositions[service];

    const replacements = {
      price: '$3,500', // Default price - should be dynamic
      daily_cost: '$9.59', // Calculated from price
      monthly_loss: '$2,000', // Estimated based on industry
      payback_months: '2',
      monthly_roi: '$5,000',
      estimated_loss: '$2,000',
      annual_loss: '$24,000',
      discounted_price: '$3,325',
      next_month: this.getNextMonth(),
      roi_estimate: '$5,000',
      timeframe: '90 days',
      time_savings: '10',
      hourly_rate: '$75',
      opportunity_cost: '$3,000',
      years: '5',
      client_count: '50+',
      their_profession: this.inferProfession(prospect),
      examples: 'accounting, legal services, equipment maintenance'
    };

    let personalizedResponse = response.response;
    Object.entries(replacements).forEach(([key, value]) => {
      personalizedResponse = personalizedResponse.replace(new RegExp(`\\$\\{${key}\\}`, 'g'), value);
    });

    return {
      technique: response.technique,
      response: personalizedResponse,
      tone: 'confident and consultative'
    };
  }

  generateFollowUpQuestions(objectionType) {
    const questions = {
      'too_expensive': [
        'What budget range were you thinking?',
        'How much are you currently spending on marketing?',
        'What would solving this problem be worth to you?'
      ],
      'need_to_think': [
        'What specific concerns can I address?',
        'What information would help you decide?',
        'When would you like to revisit this?'
      ],
      'timing_concerns': [
        'What would make the timing better?',
        'What\'s your ideal start date?',
        'What happens if you wait?'
      ]
    };

    return questions[objectionType] || [
      'Help me understand your concerns better',
      'What would need to change for this to make sense?',
      'What questions can I answer for you?'
    ];
  }

  getObjectionNextSteps(objectionType) {
    const nextSteps = {
      'too_expensive': [
        'Present payment options',
        'Calculate specific ROI for their business',
        'Offer smaller scope trial project'
      ],
      'need_to_think': [
        'Schedule follow-up call',
        'Send additional case studies',
        'Provide references to call'
      ],
      'timing_concerns': [
        'Propose phased implementation',
        'Offer to hold pricing for 30 days',
        'Schedule quarterly check-in'
      ]
    };

    return nextSteps[objectionType] || [
      'Active listening',
      'Ask clarifying questions',
      'Provide relevant case study'
    ];
  }

  completeSalesCall(conversationId) {
    const conversation = this.salesData.conversations.find(c => c.id === conversationId);
    if (!conversation) throw new Error('Conversation not found');

    conversation.stage = 'completed';
    conversation.endTime = new Date().toISOString();
    conversation.duration = this.calculateCallDuration(conversation.startTime, conversation.endTime);

    // Analyze call performance
    const performance = this.analyzeCallPerformance(conversation);
    conversation.performance = performance;

    // Update overall performance metrics
    this.updateSalesMetrics(conversation);

    return {
      conversationId,
      performance,
      recommendations: this.generateCallRecommendations(conversation),
      nextSteps: this.determineNextSteps(conversation)
    };
  }

  analyzeCallPerformance(conversation) {
    const analysis = {
      completedStages: conversation.notes.length,
      totalStages: conversation.framework.stages.length,
      completionRate: (conversation.notes.length / conversation.framework.stages.length) * 100,
      objectionCount: conversation.objections.length,
      duration: conversation.duration,
      successCriteriaMet: this.evaluateSuccessCriteria(conversation)
    };

    // Score the call
    let score = 0;
    if (analysis.completionRate > 80) score += 30;
    else if (analysis.completionRate > 60) score += 20;
    else score += 10;

    if (analysis.objectionCount <= 2) score += 20;
    else if (analysis.objectionCount <= 4) score += 10;

    if (analysis.successCriteriaMet >= 3) score += 30;
    else if (analysis.successCriteriaMet >= 2) score += 20;
    else score += 10;

    analysis.overallScore = score;
    analysis.grade = this.getCallGrade(score);

    return analysis;
  }

  evaluateSuccessCriteria(conversation) {
    const criteria = conversation.framework.success_criteria;
    let metCriteria = 0;

    // This would be enhanced with actual note analysis
    // For now, simulate based on call completion and objections
    if (conversation.notes.length >= 3) metCriteria++; // Problem admission
    if (conversation.objections.some(o => o.type.includes('price'))) metCriteria++; // Budget discussed
    if (conversation.notes.length === conversation.framework.stages.length) metCriteria++; // Timeline discussed
    if (conversation.notes.length >= 4) metCriteria++; // Decision maker identified
    if (conversation.stage === 'completed') metCriteria++; // Call completed

    return metCriteria;
  }

  getCallGrade(score) {
    if (score >= 70) return 'A';
    if (score >= 60) return 'B';
    if (score >= 50) return 'C';
    return 'D';
  }

  generateCallRecommendations(conversation) {
    const recommendations = [];
    const performance = conversation.performance;

    if (performance.completionRate < 80) {
      recommendations.push({
        area: 'call_management',
        issue: 'Call did not complete all framework stages',
        recommendation: 'Better time management and agenda control needed',
        priority: 'high'
      });
    }

    if (conversation.objections.length > 3) {
      recommendations.push({
        area: 'objection_prevention',
        issue: 'High number of objections encountered',
        recommendation: 'Improve value demonstration and qualification in discovery',
        priority: 'medium'
      });
    }

    if (performance.successCriteriaMet < 3) {
      recommendations.push({
        area: 'qualification',
        issue: 'Insufficient qualification achieved',
        recommendation: 'Ask more probing questions in discovery phase',
        priority: 'high'
      });
    }

    return recommendations;
  }

  determineNextSteps(conversation) {
    const nextSteps = [];
    const performance = conversation.performance;

    if (performance.overallScore >= 70) {
      nextSteps.push({
        action: 'schedule_proposal_presentation',
        timeline: 'within_48_hours',
        priority: 'high'
      });
    } else if (performance.overallScore >= 50) {
      nextSteps.push({
        action: 'send_follow_up_email_with_resources',
        timeline: 'same_day',
        priority: 'medium'
      });
      nextSteps.push({
        action: 'schedule_follow_up_call',
        timeline: 'within_1_week',
        priority: 'medium'
      });
    } else {
      nextSteps.push({
        action: 'add_to_nurture_sequence',
        timeline: 'immediately',
        priority: 'low'
      });
    }

    return nextSteps;
  }

  createProposal(conversationId, servicePackage, customizations = {}) {
    const conversation = this.salesData.conversations.find(c => c.id === conversationId);
    if (!conversation) throw new Error('Conversation not found');

    const proposal = {
      id: this.generateProposalId(),
      conversationId,
      prospect: conversation.prospect,
      servicePackage,
      customizations,
      pricing: this.calculateProposalPricing(servicePackage, customizations),
      timeline: this.createProposalTimeline(servicePackage),
      terms: this.createProposalTerms(),
      presentation: this.createPresentationFramework(conversation, servicePackage),
      status: 'draft',
      created: new Date().toISOString()
    };

    return proposal;
  }

  generateProposalId() {
    return `prop_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  }

  calculateProposalPricing(servicePackage, customizations) {
    // This would integrate with the pricing-strategist agent
    const basePricing = {
      'website-development': 3500,
      'digital-marketing': 2000,
      'graphic-design': 2500,
      'marketing-automation': 3000
    };

    let totalPrice = basePricing[servicePackage] || 3500;
    
    // Apply customizations
    if (customizations.rushDelivery) totalPrice *= 1.25;
    if (customizations.additionalPages) totalPrice += customizations.additionalPages * 250;
    if (customizations.customIntegrations) totalPrice += 500;

    return {
      basePrice: basePricing[servicePackage],
      customizations: totalPrice - basePricing[servicePackage],
      totalPrice,
      paymentOptions: this.createPaymentOptions(totalPrice)
    };
  }

  createPaymentOptions(totalPrice) {
    return {
      'full_payment': {
        amount: Math.round(totalPrice * 0.95), // 5% discount
        description: 'Pay in full and save 5%'
      },
      'split_payment': {
        deposit: Math.round(totalPrice * 0.6),
        final: Math.round(totalPrice * 0.4),
        description: '60% to start, 40% on completion'
      },
      'monthly_plan': {
        monthly: Math.round(totalPrice / 6),
        description: '6-month payment plan'
      }
    };
  }

  executeFollowUpSequence(conversationId, sequenceType = 'standard') {
    const conversation = this.salesData.conversations.find(c => c.id === conversationId);
    if (!conversation) throw new Error('Conversation not found');

    const sequence = this.salesData.frameworks.follow_up_sequence.sequence;
    const followUpPlan = [];

    sequence.forEach(step => {
      const followUp = {
        conversationId,
        step: step.timing,
        method: step.method,
        purpose: step.purpose,
        template: this.personalizeFollowUpTemplate(step.template, conversation),
        scheduledDate: this.calculateFollowUpDate(step.timing),
        status: 'scheduled'
      };

      followUpPlan.push(followUp);
    });

    return {
      conversationId,
      sequenceType,
      totalSteps: followUpPlan.length,
      followUpPlan
    };
  }

  personalizeFollowUpTemplate(template, conversation) {
    const replacements = {
      firstName: conversation.prospect.firstName || 'there',
      service_name: this.inferPrimaryService(conversation.prospect)
    };

    let personalizedTemplate = template;
    Object.entries(replacements).forEach(([key, value]) => {
      personalizedTemplate = personalizedTemplate.replace(new RegExp(`{${key}}`, 'g'), value);
    });

    return personalizedTemplate;
  }

  calculateFollowUpDate(timing) {
    const now = new Date();
    switch (timing) {
      case 'same_day': return new Date(now);
      case '3_days': return new Date(now.setDate(now.getDate() + 3));
      case '1_week': return new Date(now.setDate(now.getDate() + 7));
      case '2_weeks': return new Date(now.setDate(now.getDate() + 14));
      case '1_month': return new Date(now.setMonth(now.getMonth() + 1));
      default: return new Date(now.setDate(now.getDate() + 1));
    }
  }

  recordConversion(conversationId, conversionData) {
    const conversation = this.salesData.conversations.find(c => c.id === conversationId);
    if (!conversation) throw new Error('Conversation not found');

    const conversion = {
      id: this.generateConversionId(),
      conversationId,
      prospect: conversation.prospect,
      service: conversionData.service,
      package: conversionData.package,
      dealValue: conversionData.dealValue,
      conversionDate: new Date().toISOString(),
      salesCycle: this.calculateSalesCycle(conversation),
      touchpoints: this.calculateTouchpoints(conversation),
      objections: conversation.objections,
      winningFactors: conversionData.winningFactors
    };

    this.salesData.conversions.push(conversion);
    this.updateConversionMetrics(conversion);

    return conversion;
  }

  generateConversionId() {
    return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  }

  calculateSalesCycle(conversation) {
    const start = new Date(conversation.created);
    const end = new Date();
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Days
  }

  generateSalesReport(timeframe = 'monthly') {
    const report = {
      timeframe,
      generated: new Date().toISOString(),
      performance: this.compileSalesPerformance(),
      conversions: this.analyzeConversions(),
      objections: this.analyzeObjections(),
      recommendations: this.generateSalesRecommendations(),
      forecasting: this.generateSalesForecast()
    };

    return report;
  }

  compileSalesPerformance() {
    const perf = this.salesData.performance;
    return {
      callMetrics: {
        discoveryCallsHeld: perf.calls.discovery_calls,
        proposalsPresented: perf.calls.proposals_presented,
        dealsClosedee: perf.calls.closed_deals,
        discoveryToProposalRate: perf.calls.discovery_to_proposal_rate,
        proposalToCloseRate: perf.calls.proposal_to_close_rate,
        overallConversionRate: perf.calls.overall_conversion_rate
      },
      revenueMetrics: {
        totalRevenue: perf.revenue.total_closed,
        averageDealSize: perf.revenue.average_deal_size,
        monthlyRecurring: perf.revenue.monthly_recurring,
        pipelineValue: perf.revenue.pipeline_value
      }
    };
  }

  // Helper methods
  inferPrimaryService(prospect) {
    if (prospect.industry?.includes('HVAC')) return 'website-development';
    if (prospect.industry?.includes('restaurant')) return 'digital-marketing';
    if (prospect.industry?.includes('spa')) return 'graphic-design';
    return 'website-development';
  }

  inferProfession(prospect) {
    if (prospect.industry?.includes('HVAC')) return 'HVAC repair';
    if (prospect.industry?.includes('restaurant')) return 'restaurant management';
    if (prospect.industry?.includes('spa')) return 'wellness services';
    return 'your profession';
  }

  getNextMonth() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    return months[nextMonth.getMonth()];
  }

  calculateCallDuration(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    return Math.round((end - start) / (1000 * 60)); // Minutes
  }

  updateSalesMetrics(conversation) {
    this.salesData.performance.calls.discovery_calls++;
    // Additional metric updates would go here
  }

  updateConversionMetrics(conversion) {
    this.salesData.performance.calls.closed_deals++;
    this.salesData.performance.revenue.total_closed += conversion.dealValue;
    this.salesData.performance.revenue.average_deal_size = 
      this.salesData.performance.revenue.total_closed / this.salesData.performance.calls.closed_deals;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SalesConverter;
}

// Usage example
const salesConverter = new SalesConverter();

// Example sales conversion workflow
async function runSalesProcess() {
  // 1. Create sales conversation for a prospect
  const prospect = {
    firstName: 'Mike',
    lastName: 'Johnson',
    company: 'Johnson HVAC Services',
    industry: 'HVAC contractor',
    phone: '(440) 555-0123',
    email: 'mike@johnsonhvac.com'
  };

  const conversation = salesConverter.createSalesConversation(prospect, 'discovery_call');
  console.log('Sales Conversation Created:', conversation);

  // 2. Start the discovery call
  const callStart = salesConverter.startSalesCall(conversation.id);
  console.log('Call Started:', callStart);

  // 3. Handle an objection during the call
  const objectionResponse = salesConverter.handleObjection(
    conversation.id, 
    'too_expensive', 
    'This seems like a lot of money for a small business'
  );
  console.log('Objection Handled:', objectionResponse);

  // 4. Complete the call
  const callCompletion = salesConverter.completeSalesCall(conversation.id);
  console.log('Call Completed:', callCompletion);

  // 5. Generate sales report
  const salesReport = salesConverter.generateSalesReport('weekly');
  console.log('Sales Report:', salesReport);

  return {
    conversation,
    callStart,
    objectionResponse,
    callCompletion,
    salesReport
  };
}

// Export the converter instance
if (typeof window !== 'undefined') {
  window.SalesConverter = salesConverter;
}