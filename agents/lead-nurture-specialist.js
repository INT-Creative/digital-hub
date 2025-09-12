/**
 * Lead Nurture Specialist Agent for INT Creative
 * 
 * Maintains long-term relationships with prospects through value-driven content,
 * strategic touchpoints, and automated nurture sequences that convert over time.
 */

class LeadNurtureSpecialist {
  constructor() {
    this.name = "lead-nurture-specialist";
    this.description = "Maintains long-term prospect relationships through strategic nurture sequences and value-driven content";
    this.tools = ["Write", "Read", "MultiEdit", "WebSearch"];
    
    // Initialize nurture frameworks and tracking systems
    this.nurtureData = {
      sequences: this.initializeNurtureSequences(),
      contentLibrary: this.initializeContentLibrary(),
      touchpointStrategies: this.initializeTouchpointStrategies(),
      leads: [],
      campaigns: [],
      performance: this.initializePerformanceTracking()
    };
  }

  initializeNurtureSequences() {
    return {
      'discovery_call_no_show': {
        name: 'Discovery Call No-Show Recovery',
        description: 'Re-engage prospects who missed their discovery call',
        triggerEvent: 'missed_discovery_call',
        duration: 14, // days
        touchpoints: [
          {
            day: 0,
            type: 'email',
            subject: 'Missed you today - {firstName}',
            content: `Hi {firstName},

I was looking forward to our call today about {primaryChallenge} for {businessName}.

I know things come up in business (trust me, I get it!).

Would you like to reschedule? I have a few spots open this week:
• Tuesday at 2pm
• Wednesday at 10am  
• Thursday at 3pm

If none of these work, just reply with a better time.

In the meantime, I've attached a quick case study of how we helped {similarBusiness} solve {similarProblem} - thought you might find it interesting.

Best,
[Your name]`,
            attachments: ['case_study_relevant_to_niche'],
            followUp: true
          },
          {
            day: 3,
            type: 'email',
            subject: 'Quick resource for {businessName}',
            content: `Hi {firstName},

No worries if you've been busy - I know how it is running {businessName}.

I came across this article and thought of our conversation about {specificChallenge}: "{relevantArticleTitle}"

It covers exactly what we discussed about {specificProblem} and has some quick wins you can implement right away.

[Link to article]

Hope it's helpful!

PS: If you ever want to chat about {primaryChallenge}, I'm just an email away.`,
            valueType: 'educational_content'
          },
          {
            day: 7,
            type: 'linkedin_message',
            content: `Hey {firstName}, saw your recent post about {recentActivity}. 

How's {businessName} doing? 

If you ever want to revisit that conversation about {primaryChallenge}, I'm here. 

In the meantime, thought you might find this useful: [relevant resource]`,
            socialSignal: true
          },
          {
            day: 14,
            type: 'email',
            subject: 'Last note about {primaryChallenge}',
            content: `Hi {firstName},

This is my last note about {primaryChallenge} for {businessName}.

I don't want to be pushy, but I also don't want you to miss out if this could help your business.

Here's what other {nicheType} businesses have said about working with us:

"{testimonialQuote}" - {clientName}, {clientBusiness}

If you change your mind, you know where to find me.

Otherwise, I'll add you to my monthly newsletter with helpful {nicheType} tips and we'll leave it at that.

Wishing you continued success,
[Your name]

P.S. The offer to chat is always open if circumstances change.`,
            finalTouch: true,
            moveToNurture: 'monthly_newsletter'
          }
        ]
      },
      'proposal_not_accepted': {
        name: 'Proposal Follow-Up Sequence',
        description: 'Nurture prospects who received a proposal but haven\'t decided',
        triggerEvent: 'proposal_not_accepted_48h',
        duration: 30, // days
        touchpoints: [
          {
            day: 0,
            type: 'email',
            subject: 'Quick question about the {serviceType} proposal',
            content: `Hi {firstName},

Hope you had a chance to review the {serviceType} proposal for {businessName}.

I'm curious - what questions do you have?

Sometimes it helps to walk through the proposal together. Would a quick 15-minute call be useful?

I'm free:
• Tomorrow at {timeSlot1}
• {dayAfterTomorrow} at {timeSlot2}

If not, no problem. What information would be most helpful as you make your decision?

Best,
[Your name]`,
            callToAction: 'schedule_call_or_ask_questions'
          },
          {
            day: 5,
            type: 'email',
            subject: 'Case study: How {similarClient} got {specificResult}',
            content: `Hi {firstName},

I was thinking about {businessName} and remembered this case study that's very similar to your situation.

{similarClient} was dealing with {similarChallenge} and here's what happened when we implemented the {serviceType}:

• {result1}
• {result2}  
• {result3}

The total ROI was {roiAmount} within {timeframe}.

Here's the detailed case study: [link]

Thought this might help as you evaluate your options.

Any questions about how this would apply to {businessName}?`,
            socialProof: true,
            valueType: 'case_study'
          },
          {
            day: 10,
            type: 'email',
            subject: 'Alternative approach for {businessName}',
            content: `Hi {firstName},

Been thinking about {businessName} and wondering if the scope of our initial proposal was too broad.

What if we started smaller?

Instead of the full {serviceType}, we could begin with just {smallerScope} to prove the concept.

This would be ${reducedPrice} instead of ${originalPrice} and take only {reducedTimeframe} instead of {originalTimeframe}.

If it works well (and I'm confident it will), we can expand from there.

Would a smaller pilot make more sense for {businessName} right now?`,
            alternativeOffer: true,
            reducedRisk: true
          },
          {
            day: 20,
            type: 'email',
            subject: 'Timing question for {businessName}',
            content: `Hi {firstName},

I don't want to be a pest, but I also don't want {businessName} to miss out if this could help.

I'm curious about timing. Is this something you'd want to revisit:
• Next quarter?
• When business slows down?
• When you have more budget available?
• Never (be honest, I can handle it 😊)

Just helps me know whether to stay in touch or close the loop.

Either way, I'll keep sending helpful {nicheType} tips in my monthly newsletter.

Best,
[Your name]`,
            timingQualification: true
          },
          {
            day: 30,
            type: 'email',
            subject: 'Quarterly check-in for {businessName}',
            content: `Hi {firstName},

How's {businessName} doing?

I know you decided to hold off on the {serviceType} project for now, but wanted to check in and see how things are going.

Are you still dealing with {originalChallenge}? 

If so, I've learned some new approaches that might be a better fit. Always happy to brainstorm solutions.

If not, even better! I'd love to hear what ended up working for you.

Either way, hope business is thriving.

Best,
[Your name]

P.S. I've attached our latest guide on {relevantTopic} - no strings attached, just thought it might be useful.`,
            relationshipMaintenance: true,
            moveToNurture: 'quarterly_checkin'
          }
        ]
      },
      'interested_but_not_ready': {
        name: 'Educational Nurture Sequence',
        description: 'Educate and warm up interested prospects over time',
        triggerEvent: 'interested_but_timing_issues',
        duration: 90, // days
        touchpoints: [
          {
            day: 0,
            type: 'email',
            subject: 'Great meeting you, {firstName}',
            content: `Hi {firstName},

Really enjoyed our conversation about {businessName} and {discussedTopic}.

I completely understand that now isn't the right time for {serviceType}. When you're ready, I'll be here.

In the meantime, I'd love to stay helpful. I'll send you occasional tips and insights specifically for {nicheType} businesses.

Here's something to get started: "{resourceTitle}" - {resourceDescription}

[Resource link]

Feel free to reach out anytime if you have questions about {specificArea}.

Best,
[Your name]`,
            relationshipStart: true,
            valueType: 'educational_resource'
          },
          {
            day: 7,
            type: 'email',
            subject: '{nicheType} Tip: {tipTitle}',
            content: `Hi {firstName},

Quick tip for {businessName}:

{tipTitle}

{tipDescription}

This typically takes about {implementationTime} to implement and most {nicheType} businesses see {expectedOutcome}.

Here's exactly how to do it:
{stepByStepInstructions}

Let me know if you try this and how it works out!

Best,
[Your name]

P.S. Got this tip from working with {anonymousClientExample} - they saw {specificResult} in just {timeframe}.`,
            valueType: 'actionable_tip',
            implementable: true
          },
          {
            day: 14,
            type: 'email',
            subject: 'Mistake I see {nicheType} businesses making',
            content: `Hi {firstName},

I've been working with {nicheType} businesses for {experienceLength}, and there's one mistake I see over and over:

{commonMistake}

The problem is {whyItsBad}.

Here's what to do instead:

{solution}

This simple change can {potentialImprovement}.

Are you seeing this issue with {businessName}?

Best,
[Your name]`,
            valueType: 'mistake_avoidance',
            authorityBuilding: true
          },
          {
            day: 21,
            type: 'email',
            subject: 'Case study: {caseStudyTitle}',
            content: `Hi {firstName},

Thought you'd find this interesting:

{clientName} runs a {clientType} business in {location} and was struggling with {challenge}.

Here's what we did and the results:

BEFORE:
• {beforeMetric1}
• {beforeMetric2}
• {beforeMetric3}

WHAT WE DID:
{implementationSummary}

AFTER (in {timeframe}):
• {afterMetric1}
• {afterMetric2}
• {afterMetric3}

The total ROI was {roiCalculation}.

Full case study here: [link]

Similar situation to {businessName}?

Best,
[Your name]`,
            valueType: 'detailed_case_study',
            socialProof: true
          },
          {
            day: 35,
            type: 'email',
            subject: 'Industry trend affecting {nicheType} businesses',
            content: `Hi {firstName},

Heads up about something affecting {nicheType} businesses:

{industryTrend}

Why this matters for {businessName}:
{relevanceToClient}

What successful {nicheType} businesses are doing:
{adaptationStrategy}

Want to chat about how this might affect {businessName}? Happy to brainstorm strategies.

Best,
[Your name]`,
            valueType: 'industry_insight',
            consultativeApproach: true
          },
          {
            day: 50,
            type: 'email',
            subject: 'Quick check-in on {businessName}',
            content: `Hi {firstName},

How's {businessName} doing?

Curious if you've had a chance to implement any of the strategies we've discussed:
• {previousTip1}
• {previousTip2}
• {previousTip3}

Any questions about making these work for your situation?

Also, how are things going with {originalChallenge}? Still an issue or have you found solutions?

Always happy to brainstorm if helpful.

Best,
[Your name]`,
            engagementCheck: true,
            relationshipMaintenance: true
          },
          {
            day: 70,
            type: 'email',
            subject: 'Tool recommendation for {businessName}',
            content: `Hi {firstName},

Found a tool that might be perfect for {businessName}:

{toolName} - {toolDescription}

It helps with {specificProblem} and costs only ${toolPrice}/month.

Here's how {anonymousClient} is using it:
{useCase}

They're seeing {results}.

Worth checking out: [tool link]

(No affiliation, just think it's genuinely useful for {nicheType} businesses)

Best,
[Your name]`,
            valueType: 'tool_recommendation',
            helpfulResource: true
          },
          {
            day: 90,
            type: 'email',
            subject: 'Quarterly business check-in',
            content: `Hi {firstName},

It's been about 3 months since we first connected about {businessName}.

How are things going? Has anything changed with {originalChallenge}?

I'd love to hear what's working well and what challenges you're facing as we head into {nextQuarter}.

If you ever want to chat about {serviceArea} strategies, I'm always happy to brainstorm.

Otherwise, I'll keep sending occasional helpful tips and insights.

Hope business is thriving!

Best,
[Your name]

P.S. Our latest resource guide covers {currentTopic} - happy to share if relevant.`,
            quarterlyReview: true,
            relationshipMaintenance: true,
            moveToNurture: 'quarterly_checkin'
          }
        ]
      },
      'monthly_newsletter': {
        name: 'Monthly Value Newsletter',
        description: 'Monthly touchpoint with valuable insights for all nurture leads',
        triggerEvent: 'moved_to_long_term_nurture',
        frequency: 'monthly',
        touchpoints: [
          {
            type: 'email',
            subject: '{monthName} Tips for {nicheType} Businesses',
            content: `Hi {firstName},

Hope {businessName} is off to a great start this {monthName}!

This month's insights for {nicheType} businesses:

🎯 STRATEGY SPOTLIGHT: {strategyTitle}
{strategyDescription}

📊 METRIC THAT MATTERS: {metricName}
{whyItMatters}

🛠️ TOOL RECOMMENDATION: {toolName}
{toolBenefit}

📚 WORTH READING: {articleTitle}
{articleSummary}

💡 QUICK WIN: {quickWinTitle}
{implementationSteps}

As always, reply if you have questions or want to chat about any of these topics.

Best,
[Your name]

P.S. Know another {nicheType} business owner who might find this useful? Feel free to forward!`,
            unsubscribeOption: true,
            forwardable: true
          }
        ]
      }
    };
  }

  initializeContentLibrary() {
    return {
      'educational_resources': {
        'hvac-guide-lead-generation': {
          title: 'The Complete Guide to Lead Generation for HVAC Companies',
          description: 'Step-by-step guide to generating more HVAC leads online',
          format: 'PDF guide',
          pages: 25,
          topics: ['Google My Business', 'Online Reviews', 'Website Optimization', 'Social Media'],
          targetNiche: 'hvac-plumbing-electrical'
        },
        'restaurant-social-media-calendar': {
          title: '30-Day Social Media Calendar for Restaurants',
          description: 'Ready-to-use social media posts for restaurants',
          format: 'Excel template',
          items: 30,
          topics: ['Food Photography', 'Customer Features', 'Behind the Scenes', 'Promotions'],
          targetNiche: 'restaurants-bars'
        },
        'medspa-booking-optimization': {
          title: 'How to Reduce No-Shows by 40% (Med Spa Guide)',
          description: 'Proven strategies to improve appointment attendance',
          format: 'PDF guide',
          pages: 15,
          topics: ['Booking Process', 'Reminders', 'Policies', 'Communication'],
          targetNiche: 'med-spas-wellness'
        }
      },
      'case_studies': {
        'hvac-300-percent-increase': {
          title: 'How Johnson HVAC Increased Leads 300% in 60 Days',
          client: 'Johnson HVAC (anonymized)',
          challenge: 'Seasonal business, inconsistent lead flow',
          solution: 'Website optimization + Google Ads + automation',
          results: {
            leadIncrease: '300%',
            costReduction: '40%',
            timeframe: '60 days',
            roi: '$15,000 additional revenue monthly'
          },
          targetNiche: 'hvac-plumbing-electrical'
        },
        'restaurant-review-turnaround': {
          title: 'How Bella\'s Bistro Improved Their Online Reputation',
          client: 'Bella\'s Bistro (anonymized)',
          challenge: 'Poor online reviews, declining reservations',
          solution: 'Review management + social media + customer service training',
          results: {
            ratingImprovement: '2.1 to 4.6 stars',
            reservationIncrease: '150%',
            timeframe: '90 days'
          },
          targetNiche: 'restaurants-bars'
        }
      },
      'quick_tips': {
        'google-my-business-optimization': {
          title: '5-Minute GMB Optimization That Gets More Calls',
          steps: [
            'Add recent high-quality photos',
            'Update business hours for holidays',
            'Respond to recent reviews',
            'Create a weekly post',
            'Add relevant Q&A'
          ],
          expectedOutcome: '20-30% more profile views',
          implementationTime: '5 minutes',
          applicableNiches: ['all']
        },
        'email-signature-marketing': {
          title: 'Turn Your Email Signature Into a Lead Generator',
          steps: [
            'Add your best customer testimonial',
            'Include current promotion or offer',
            'Link to your latest case study',
            'Add social media links',
            'Include professional headshot'
          ],
          expectedOutcome: '2-3 extra leads monthly',
          implementationTime: '10 minutes',
          applicableNiches: ['all']
        }
      },
      'industry_insights': {
        'local-seo-algorithm-update': {
          title: 'Google\'s Latest Local SEO Update: What It Means for Service Businesses',
          summary: 'Google prioritizes businesses with consistent NAP data and recent reviews',
          impact: 'Businesses with outdated listings seeing 30% traffic drops',
          actionSteps: [
            'Audit all directory listings',
            'Encourage recent customer reviews',
            'Update Google My Business weekly'
          ],
          relevantNiches: ['hvac-plumbing-electrical', 'med-spas-wellness', 'professional-services']
        },
        'social-media-trends-restaurants': {
          title: 'TikTok Food Trends Driving Restaurant Revenue',
          summary: 'Restaurants using TikTok trends seeing 25% increase in young customers',
          impact: 'Businesses not on TikTok missing younger demographic',
          actionSteps: [
            'Create TikTok business account',
            'Follow food trend hashtags',
            'Post behind-the-scenes content'
          ],
          relevantNiches: ['restaurants-bars']
        }
      }
    };
  }

  initializeTouchpointStrategies() {
    return {
      'value_first': {
        description: 'Lead with valuable content before any sales message',
        principles: [
          'Always provide actionable insights',
          'Make content implementable immediately',
          'Tailor to specific niche challenges',
          'Include social proof when relevant'
        ],
        frequency: 'Weekly for first month, bi-weekly after',
        conversion_timing: 'After 3-4 value touches'
      },
      'problem_focused': {
        description: 'Address specific business problems and solutions',
        principles: [
          'Reference original conversation pain points',
          'Show understanding of their situation',
          'Provide incremental solutions',
          'Build trust through expertise'
        ],
        frequency: 'Every 10-14 days',
        conversion_timing: 'When new problems arise'
      },
      'relationship_maintenance': {
        description: 'Keep relationship warm without being salesy',
        principles: [
          'Personal check-ins on business progress',
          'Industry trend updates',
          'Helpful tool recommendations',
          'Seasonal business advice'
        ],
        frequency: 'Monthly to quarterly',
        conversion_timing: 'When circumstances change'
      },
      'social_proof_building': {
        description: 'Gradually build confidence through success stories',
        principles: [
          'Share relevant case studies',
          'Mention similar client successes',
          'Include industry recognition',
          'Show growing client base'
        ],
        frequency: 'Interspersed with other content',
        conversion_timing: 'When considering similar solutions'
      }
    };
  }

  initializePerformanceTracking() {
    return {
      sequences: {
        totalActive: 0,
        completionRates: {},
        conversionRates: {},
        engagementRates: {}
      },
      content: {
        mostEngaging: {},
        downloadRates: {},
        shareRates: {}
      },
      leads: {
        totalNurtured: 0,
        convertedToSales: 0,
        averageNurtureTime: 0,
        touchpointsToConversion: 0
      },
      campaigns: {
        emailOpenRates: {},
        clickThroughRates: {},
        responseRates: {}
      }
    };
  }

  addLeadToNurture(leadData, sequenceType = 'interested_but_not_ready') {
    const lead = {
      id: this.generateLeadId(),
      ...leadData,
      nurtureSequence: sequenceType,
      status: 'active',
      currentTouchpoint: 0,
      interactions: [],
      conversionReadiness: this.assessConversionReadiness(leadData),
      addedToNurture: new Date().toISOString(),
      lastTouch: null,
      nextScheduledTouch: this.calculateNextTouchDate(sequenceType, 0)
    };

    this.nurtureData.leads.push(lead);
    this.scheduleNurtureSequence(lead);

    return lead;
  }

  generateLeadId() {
    return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  }

  assessConversionReadiness(leadData) {
    let score = 0;
    
    // Budget indicators
    if (leadData.budgetRange && leadData.budgetRange >= 2500) score += 30;
    else if (leadData.budgetRange && leadData.budgetRange >= 1000) score += 20;
    else if (leadData.budgetDiscussed) score += 10;
    
    // Timeline indicators
    if (leadData.timeline === 'immediate') score += 25;
    else if (leadData.timeline === 'within_3_months') score += 20;
    else if (leadData.timeline === 'within_6_months') score += 15;
    else if (leadData.timeline === 'someday') score += 5;
    
    // Problem urgency
    if (leadData.problemUrgency === 'critical') score += 25;
    else if (leadData.problemUrgency === 'important') score += 15;
    else if (leadData.problemUrgency === 'nice_to_have') score += 5;
    
    // Decision maker status
    if (leadData.decisionMaker === 'sole') score += 15;
    else if (leadData.decisionMaker === 'primary') score += 10;
    else if (leadData.decisionMaker === 'influencer') score += 5;
    
    // Engagement level
    if (leadData.engagementLevel === 'high') score += 5;
    else if (leadData.engagementLevel === 'medium') score += 3;

    return {
      score,
      level: this.getReadinessLevel(score),
      factors: this.getReadinessFactors(leadData, score)
    };
  }

  getReadinessLevel(score) {
    if (score >= 70) return 'hot';
    if (score >= 50) return 'warm';
    if (score >= 30) return 'lukewarm';
    return 'cold';
  }

  getReadinessFactors(leadData, score) {
    const factors = {
      strengths: [],
      concerns: [],
      recommendations: []
    };

    if (leadData.budgetRange >= 2500) {
      factors.strengths.push('Budget qualified');
    } else {
      factors.concerns.push('Budget uncertainty');
      factors.recommendations.push('Focus on ROI demonstration');
    }

    if (leadData.timeline === 'someday') {
      factors.concerns.push('No urgency');
      factors.recommendations.push('Build urgency through industry trends');
    }

    if (leadData.decisionMaker !== 'sole') {
      factors.concerns.push('Multiple decision makers');
      factors.recommendations.push('Identify and engage all stakeholders');
    }

    return factors;
  }

  scheduleNurtureSequence(lead) {
    const sequence = this.nurtureData.sequences[lead.nurtureSequence];
    if (!sequence) throw new Error(`Sequence ${lead.nurtureSequence} not found`);

    const schedule = sequence.touchpoints.map((touchpoint, index) => {
      const scheduledDate = this.calculateTouchDate(touchpoint.day || index * 7);
      
      return {
        leadId: lead.id,
        touchpointIndex: index,
        type: touchpoint.type,
        scheduledDate,
        content: this.personalizeTouchpointContent(touchpoint, lead),
        status: 'scheduled',
        deliveryAttempts: 0
      };
    });

    // Store schedule for processing
    lead.scheduledTouchpoints = schedule;
    return schedule;
  }

  calculateTouchDate(dayOffset) {
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);
    return date.toISOString();
  }

  calculateNextTouchDate(sequenceType, touchpointIndex) {
    const sequence = this.nurtureData.sequences[sequenceType];
    if (!sequence || !sequence.touchpoints[touchpointIndex]) return null;

    const touchpoint = sequence.touchpoints[touchpointIndex];
    return this.calculateTouchDate(touchpoint.day || touchpointIndex * 7);
  }

  personalizeTouchpointContent(touchpoint, lead) {
    const content = { ...touchpoint };
    
    // Personalize content based on lead data
    const personalizations = {
      firstName: lead.firstName || lead.contactName?.split(' ')[0] || 'there',
      businessName: lead.company || lead.businessName || 'your business',
      primaryChallenge: lead.primaryChallenge || 'business growth challenges',
      nicheType: this.getNicheDisplayName(lead.niche),
      specificChallenge: lead.specificChallenge || 'operational efficiency',
      similarBusiness: this.getSimilarBusinessExample(lead.niche),
      similarProblem: lead.primaryChallenge || 'similar challenges',
      serviceType: this.inferServiceNeed(lead),
      originalChallenge: lead.originalChallenge || lead.primaryChallenge || 'the challenges we discussed'
    };

    // Replace placeholders in content
    ['subject', 'content'].forEach(field => {
      if (content[field]) {
        Object.entries(personalizations).forEach(([key, value]) => {
          content[field] = content[field].replace(new RegExp(`{${key}}`, 'g'), value);
        });
      }
    });

    // Add dynamic content based on lead's niche and interests
    content.relevantResource = this.selectRelevantResource(lead);
    content.caseStudy = this.selectRelevantCaseStudy(lead);
    content.tip = this.selectRelevantTip(lead);

    return content;
  }

  getNicheDisplayName(niche) {
    const displayNames = {
      'hvac-plumbing-electrical': 'home service',
      'med-spas-wellness': 'wellness',
      'restaurants-bars': 'restaurant',
      'professional-services': 'professional service'
    };
    return displayNames[niche] || 'service';
  }

  getSimilarBusinessExample(niche) {
    const examples = {
      'hvac-plumbing-electrical': 'another HVAC company',
      'med-spas-wellness': 'a wellness center',
      'restaurants-bars': 'a local restaurant',
      'professional-services': 'a law firm'
    };
    return examples[niche] || 'another business';
  }

  inferServiceNeed(lead) {
    if (lead.interestedServices) return lead.interestedServices[0];
    if (lead.primaryChallenge?.includes('website')) return 'website development';
    if (lead.primaryChallenge?.includes('leads')) return 'digital marketing';
    if (lead.primaryChallenge?.includes('brand')) return 'graphic design';
    return 'digital marketing';
  }

  selectRelevantResource(lead) {
    const resources = this.nurtureData.contentLibrary.educational_resources;
    
    // Find resources matching lead's niche
    const nicheResources = Object.values(resources).filter(r => 
      r.targetNiche === lead.niche || r.targetNiche === 'all'
    );
    
    if (nicheResources.length > 0) {
      return nicheResources[Math.floor(Math.random() * nicheResources.length)];
    }
    
    return Object.values(resources)[0]; // Fallback
  }

  selectRelevantCaseStudy(lead) {
    const caseStudies = this.nurtureData.contentLibrary.case_studies;
    
    // Find case studies matching lead's niche
    const nicheCaseStudies = Object.values(caseStudies).filter(cs => 
      cs.targetNiche === lead.niche
    );
    
    if (nicheCaseStudies.length > 0) {
      return nicheCaseStudies[Math.floor(Math.random() * nicheCaseStudies.length)];
    }
    
    return Object.values(caseStudies)[0]; // Fallback
  }

  selectRelevantTip(lead) {
    const tips = this.nurtureData.contentLibrary.quick_tips;
    
    // Find tips applicable to lead's niche
    const applicableTips = Object.values(tips).filter(tip => 
      tip.applicableNiches.includes(lead.niche) || tip.applicableNiches.includes('all')
    );
    
    if (applicableTips.length > 0) {
      return applicableTips[Math.floor(Math.random() * applicableTips.length)];
    }
    
    return Object.values(tips)[0]; // Fallback
  }

  processDueNurtureTouchpoints() {
    const now = new Date().toISOString();
    const dueLeads = this.nurtureData.leads.filter(lead => 
      lead.status === 'active' && 
      lead.nextScheduledTouch && 
      lead.nextScheduledTouch <= now
    );

    const results = [];
    
    dueLeads.forEach(lead => {
      try {
        const result = this.executeTouchpoint(lead);
        results.push(result);
      } catch (error) {
        console.error(`Error processing touchpoint for lead ${lead.id}:`, error);
        results.push({
          leadId: lead.id,
          status: 'error',
          error: error.message
        });
      }
    });

    return {
      processedCount: results.length,
      successful: results.filter(r => r.status === 'sent').length,
      failed: results.filter(r => r.status === 'error').length,
      results
    };
  }

  executeTouchpoint(lead) {
    const sequence = this.nurtureData.sequences[lead.nurtureSequence];
    const touchpoint = sequence.touchpoints[lead.currentTouchpoint];
    
    if (!touchpoint) {
      // Sequence completed
      return this.completeNurtureSequence(lead);
    }

    // Simulate sending the touchpoint
    const touchpointResult = this.sendNurtureTouchpoint(lead, touchpoint);
    
    // Record the interaction
    lead.interactions.push({
      touchpointIndex: lead.currentTouchpoint,
      type: touchpoint.type,
      sentDate: new Date().toISOString(),
      content: touchpointResult.content,
      delivered: touchpointResult.delivered,
      opened: false, // Would be updated by tracking
      responded: false // Would be updated by tracking
    });

    // Update lead status
    lead.lastTouch = new Date().toISOString();
    lead.currentTouchpoint++;
    
    // Calculate next touchpoint date
    if (lead.currentTouchpoint < sequence.touchpoints.length) {
      const nextTouchpoint = sequence.touchpoints[lead.currentTouchpoint];
      lead.nextScheduledTouch = this.calculateTouchDate(nextTouchpoint.day || (lead.currentTouchpoint * 7));
    } else {
      lead.nextScheduledTouch = null;
    }

    // Update performance metrics
    this.updateNurtureMetrics(lead, touchpoint, touchpointResult);

    return {
      leadId: lead.id,
      touchpointIndex: lead.currentTouchpoint - 1,
      type: touchpoint.type,
      status: touchpointResult.delivered ? 'sent' : 'failed',
      nextTouchDate: lead.nextScheduledTouch
    };
  }

  sendNurtureTouchpoint(lead, touchpoint) {
    // Simulate sending based on touchpoint type
    const deliveryRates = {
      'email': 0.95,
      'linkedin_message': 0.90,
      'phone_call': 0.75,
      'direct_mail': 0.98
    };

    const delivered = Math.random() < (deliveryRates[touchpoint.type] || 0.90);
    
    return {
      delivered,
      content: this.personalizeTouchpointContent(touchpoint, lead),
      timestamp: new Date().toISOString(),
      platform: touchpoint.type
    };
  }

  completeNurtureSequence(lead) {
    lead.status = 'sequence_completed';
    lead.completedDate = new Date().toISOString();
    
    // Determine next steps based on sequence type
    const nextAction = this.determinePostSequenceAction(lead);
    lead.nextAction = nextAction;

    // Update performance metrics
    this.nurtureData.performance.sequences.totalActive--;
    
    return {
      leadId: lead.id,
      status: 'sequence_completed',
      nextAction,
      totalTouchpoints: lead.interactions.length,
      sequenceDuration: this.calculateSequenceDuration(lead)
    };
  }

  determinePostSequenceAction(lead) {
    const engagement = this.calculateEngagementScore(lead);
    
    if (engagement.score >= 70) {
      return {
        type: 'sales_reengagement',
        reasoning: 'High engagement indicates renewed interest',
        recommendedApproach: 'Direct outreach with new proposal'
      };
    } else if (engagement.score >= 40) {
      return {
        type: 'monthly_newsletter',
        reasoning: 'Moderate engagement, maintain relationship',
        recommendedApproach: 'Monthly value-based content'
      };
    } else {
      return {
        type: 'quarterly_checkin',
        reasoning: 'Low engagement, minimal touch approach',
        recommendedApproach: 'Quarterly business check-ins'
      };
    }
  }

  calculateEngagementScore(lead) {
    let score = 0;
    let totalPossible = 0;
    
    lead.interactions.forEach(interaction => {
      totalPossible += 10; // Base score for delivery
      if (interaction.delivered) score += 10;
      
      totalPossible += 20; // Possible score for opening
      if (interaction.opened) score += 20;
      
      totalPossible += 30; // Possible score for response
      if (interaction.responded) score += 30;
    });

    const engagementPercentage = totalPossible > 0 ? (score / totalPossible) * 100 : 0;
    
    return {
      score: engagementPercentage,
      totalInteractions: lead.interactions.length,
      responsiveInteractions: lead.interactions.filter(i => i.responded).length,
      openedInteractions: lead.interactions.filter(i => i.opened).length
    };
  }

  recordEngagement(leadId, interactionType, engagementData) {
    const lead = this.nurtureData.leads.find(l => l.id === leadId);
    if (!lead) throw new Error('Lead not found');

    // Find the relevant interaction
    const interaction = lead.interactions.find(i => 
      i.touchpointIndex === engagementData.touchpointIndex ||
      i.sentDate === engagementData.sentDate
    );

    if (interaction) {
      // Update engagement data
      switch (interactionType) {
        case 'email_opened':
          interaction.opened = true;
          interaction.openedDate = new Date().toISOString();
          break;
        case 'email_clicked':
          interaction.clicked = true;
          interaction.clickedDate = new Date().toISOString();
          interaction.clickedLinks = engagementData.links || [];
          break;
        case 'responded':
          interaction.responded = true;
          interaction.responseDate = new Date().toISOString();
          interaction.responseContent = engagementData.content;
          break;
        case 'social_engagement':
          interaction.socialEngagement = engagementData.engagementType;
          interaction.socialEngagementDate = new Date().toISOString();
          break;
      }

      // Update lead's conversion readiness based on engagement
      this.updateConversionReadiness(lead, interactionType, engagementData);
    }

    return interaction;
  }

  updateConversionReadiness(lead, interactionType, engagementData) {
    const currentReadiness = lead.conversionReadiness;
    let scoreChange = 0;

    switch (interactionType) {
      case 'email_opened':
        scoreChange = 2;
        break;
      case 'email_clicked':
        scoreChange = 5;
        break;
      case 'responded':
        scoreChange = 15;
        break;
      case 'social_engagement':
        scoreChange = 3;
        break;
    }

    currentReadiness.score = Math.min(100, currentReadiness.score + scoreChange);
    currentReadiness.level = this.getReadinessLevel(currentReadiness.score);
    currentReadiness.lastUpdated = new Date().toISOString();

    // If readiness crosses threshold, trigger sales alert
    if (currentReadiness.score >= 70 && currentReadiness.level !== 'hot') {
      this.triggerSalesAlert(lead, 'high_engagement');
    }
  }

  triggerSalesAlert(lead, alertType) {
    const alert = {
      id: this.generateAlertId(),
      leadId: lead.id,
      type: alertType,
      lead: lead,
      message: this.generateAlertMessage(lead, alertType),
      urgency: this.getAlertUrgency(alertType),
      recommendedAction: this.getRecommendedAction(lead, alertType),
      created: new Date().toISOString(),
      status: 'active'
    };

    // Store alert (in real implementation, would notify sales team)
    return alert;
  }

  generateAlertId() {
    return `alert_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  }

  generateAlertMessage(lead, alertType) {
    const messages = {
      'high_engagement': `${lead.firstName || 'Lead'} at ${lead.company || 'unknown company'} is showing high engagement with nurture content. Consider direct outreach.`,
      'response_received': `${lead.firstName || 'Lead'} responded to nurture email. Ready for sales conversation.`,
      'sequence_completed': `${lead.firstName || 'Lead'} completed nurture sequence with good engagement. Time for sales follow-up.`
    };

    return messages[alertType] || 'Lead requires sales attention';
  }

  getAlertUrgency(alertType) {
    const urgencyLevels = {
      'high_engagement': 'medium',
      'response_received': 'high',
      'sequence_completed': 'low'
    };

    return urgencyLevels[alertType] || 'medium';
  }

  getRecommendedAction(lead, alertType) {
    const actions = {
      'high_engagement': `Call ${lead.firstName} to discuss their current challenges and see if timing has changed`,
      'response_received': `Respond to ${lead.firstName}'s email within 4 hours and suggest a brief call`,
      'sequence_completed': `Send personalized check-in email to ${lead.firstName} about their business progress`
    };

    return actions[alertType] || 'Review lead and determine appropriate outreach';
  }

  generateNurtureReport(timeframe = 'monthly') {
    const report = {
      timeframe,
      generated: new Date().toISOString(),
      summary: this.generateNurtureSummary(),
      sequencePerformance: this.analyzeSequencePerformance(),
      contentPerformance: this.analyzeContentPerformance(),
      leadProgression: this.analyzeLeadProgression(),
      conversionAnalysis: this.analyzeNurtureConversions(),
      recommendations: this.generateNurtureRecommendations()
    };

    return report;
  }

  generateNurtureSummary() {
    const leads = this.nurtureData.leads;
    const activeLeads = leads.filter(l => l.status === 'active');
    
    return {
      totalLeads: leads.length,
      activeInNurture: activeLeads.length,
      completedSequences: leads.filter(l => l.status === 'sequence_completed').length,
      convertedToSales: leads.filter(l => l.status === 'converted').length,
      averageSequenceLength: this.calculateAverageSequenceLength(),
      averageEngagementRate: this.calculateAverageEngagementRate()
    };
  }

  analyzeSequencePerformance() {
    const sequenceStats = {};
    
    Object.keys(this.nurtureData.sequences).forEach(sequenceType => {
      const leadsInSequence = this.nurtureData.leads.filter(l => l.nurtureSequence === sequenceType);
      const completedSequences = leadsInSequence.filter(l => l.status === 'sequence_completed');
      
      sequenceStats[sequenceType] = {
        totalLeads: leadsInSequence.length,
        completionRate: leadsInSequence.length > 0 ? (completedSequences.length / leadsInSequence.length) * 100 : 0,
        averageEngagement: this.calculateSequenceEngagement(leadsInSequence),
        conversionRate: this.calculateSequenceConversionRate(leadsInSequence)
      };
    });

    return sequenceStats;
  }

  analyzeContentPerformance() {
    const contentStats = {
      mostEngagingContent: this.findMostEngagingContent(),
      highestConvertingContent: this.findHighestConvertingContent(),
      contentByType: this.analyzeContentByType()
    };

    return contentStats;
  }

  findMostEngagingContent() {
    // Analyze which content gets most opens, clicks, responses
    const contentEngagement = {};
    
    this.nurtureData.leads.forEach(lead => {
      lead.interactions.forEach(interaction => {
        const contentId = interaction.content?.id || 'unknown';
        if (!contentEngagement[contentId]) {
          contentEngagement[contentId] = {
            opens: 0,
            clicks: 0,
            responses: 0,
            total: 0
          };
        }
        
        contentEngagement[contentId].total++;
        if (interaction.opened) contentEngagement[contentId].opens++;
        if (interaction.clicked) contentEngagement[contentId].clicks++;
        if (interaction.responded) contentEngagement[contentId].responses++;
      });
    });

    // Sort by engagement score
    const sortedContent = Object.entries(contentEngagement)
      .map(([id, stats]) => ({
        id,
        ...stats,
        engagementScore: (stats.opens + stats.clicks * 2 + stats.responses * 3) / stats.total
      }))
      .sort((a, b) => b.engagementScore - a.engagementScore);

    return sortedContent.slice(0, 5); // Top 5
  }

  generateNurtureRecommendations() {
    const recommendations = [];
    
    // Analyze sequence performance and suggest improvements
    const sequencePerf = this.analyzeSequencePerformance();
    Object.entries(sequencePerf).forEach(([sequence, stats]) => {
      if (stats.completionRate < 60) {
        recommendations.push({
          area: 'sequence_optimization',
          sequence,
          issue: 'Low completion rate',
          recommendation: 'Review sequence length and content relevance',
          priority: 'high'
        });
      }
      
      if (stats.averageEngagement < 30) {
        recommendations.push({
          area: 'content_improvement',
          sequence,
          issue: 'Low engagement rate',
          recommendation: 'Test more personalized and value-driven content',
          priority: 'medium'
        });
      }
    });

    // Analyze conversion patterns
    const conversionAnalysis = this.analyzeNurtureConversions();
    if (conversionAnalysis.conversionRate < 10) {
      recommendations.push({
        area: 'conversion_optimization',
        issue: 'Low nurture-to-sales conversion',
        recommendation: 'Implement better lead scoring and sales handoff triggers',
        priority: 'high'
      });
    }

    return recommendations;
  }

  exportNurtureData(format = 'json') {
    const exportData = {
      timestamp: new Date().toISOString(),
      leads: this.nurtureData.leads,
      performance: this.nurtureData.performance,
      sequences: Object.keys(this.nurtureData.sequences),
      summary: this.generateNurtureReport()
    };

    if (format === 'csv') {
      return this.convertNurtureToCSV(exportData);
    }
    
    return JSON.stringify(exportData, null, 2);
  }

  // Helper methods for calculations
  calculateAverageSequenceLength() {
    const completedLeads = this.nurtureData.leads.filter(l => l.status === 'sequence_completed');
    if (completedLeads.length === 0) return 0;
    
    const totalDays = completedLeads.reduce((sum, lead) => {
      const start = new Date(lead.addedToNurture);
      const end = new Date(lead.completedDate);
      return sum + Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    }, 0);

    return Math.round(totalDays / completedLeads.length);
  }

  calculateAverageEngagementRate() {
    const allInteractions = this.nurtureData.leads.flatMap(l => l.interactions);
    if (allInteractions.length === 0) return 0;
    
    const engagedInteractions = allInteractions.filter(i => i.opened || i.clicked || i.responded);
    return Math.round((engagedInteractions.length / allInteractions.length) * 100);
  }

  calculateSequenceEngagement(leads) {
    const allInteractions = leads.flatMap(l => l.interactions);
    if (allInteractions.length === 0) return 0;
    
    const engagedInteractions = allInteractions.filter(i => i.opened || i.clicked || i.responded);
    return Math.round((engagedInteractions.length / allInteractions.length) * 100);
  }

  calculateSequenceConversionRate(leads) {
    if (leads.length === 0) return 0;
    const convertedLeads = leads.filter(l => l.status === 'converted');
    return Math.round((convertedLeads.length / leads.length) * 100);
  }

  analyzeLeadProgression() {
    // Analyze how leads move through readiness levels
    const progression = {
      cold_to_warm: 0,
      warm_to_hot: 0,
      readiness_improvement: 0
    };

    this.nurtureData.leads.forEach(lead => {
      // This would track readiness changes over time
      // For now, simulate based on interaction count
      if (lead.interactions.length >= 3) progression.readiness_improvement++;
    });

    return progression;
  }

  analyzeNurtureConversions() {
    const convertedLeads = this.nurtureData.leads.filter(l => l.status === 'converted');
    const totalLeads = this.nurtureData.leads.length;
    
    return {
      totalConverted: convertedLeads.length,
      conversionRate: totalLeads > 0 ? (convertedLeads.length / totalLeads) * 100 : 0,
      averageTimeToConversion: this.calculateAverageTimeToConversion(convertedLeads),
      averageTouchpointsToConversion: this.calculateAverageTouchpointsToConversion(convertedLeads)
    };
  }

  calculateAverageTimeToConversion(convertedLeads) {
    if (convertedLeads.length === 0) return 0;
    
    const totalDays = convertedLeads.reduce((sum, lead) => {
      const start = new Date(lead.addedToNurture);
      const conversion = new Date(lead.conversionDate || lead.completedDate);
      return sum + Math.ceil((conversion - start) / (1000 * 60 * 60 * 24));
    }, 0);

    return Math.round(totalDays / convertedLeads.length);
  }

  calculateAverageTouchpointsToConversion(convertedLeads) {
    if (convertedLeads.length === 0) return 0;
    
    const totalTouchpoints = convertedLeads.reduce((sum, lead) => sum + lead.interactions.length, 0);
    return Math.round(totalTouchpoints / convertedLeads.length);
  }

  analyzeContentByType() {
    const contentTypes = ['educational_resources', 'case_studies', 'quick_tips', 'industry_insights'];
    const analysis = {};

    contentTypes.forEach(type => {
      analysis[type] = {
        totalSent: 0,
        totalEngaged: 0,
        engagementRate: 0
      };
    });

    // This would analyze actual content performance
    // For now, return structure for implementation

    return analysis;
  }

  updateNurtureMetrics(lead, touchpoint, result) {
    // Update performance tracking based on touchpoint execution
    this.nurtureData.performance.leads.totalNurtured = this.nurtureData.leads.length;
    
    // Update sequence-specific metrics
    const sequenceType = lead.nurtureSequence;
    if (!this.nurtureData.performance.sequences.engagementRates[sequenceType]) {
      this.nurtureData.performance.sequences.engagementRates[sequenceType] = [];
    }
    
    // Track delivery success
    if (result.delivered) {
      this.nurtureData.performance.sequences.engagementRates[sequenceType].push(1);
    } else {
      this.nurtureData.performance.sequences.engagementRates[sequenceType].push(0);
    }
  }

  calculateSequenceDuration(lead) {
    const start = new Date(lead.addedToNurture);
    const end = new Date(lead.completedDate || new Date());
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LeadNurtureSpecialist;
}

// Usage example
const leadNurtureSpecialist = new LeadNurtureSpecialist();

// Example lead nurturing workflow
async function runNurtureWorkflow() {
  // 1. Add a lead to nurture sequence
  const leadData = {
    firstName: 'Sarah',
    lastName: 'Johnson',
    company: 'Johnson Wellness Center',
    niche: 'med-spas-wellness',
    primaryChallenge: 'inconsistent client bookings',
    budgetRange: 3000,
    timeline: 'within_6_months',
    decisionMaker: 'sole',
    engagementLevel: 'medium'
  };

  const nurturedLead = leadNurtureSpecialist.addLeadToNurture(leadData, 'interested_but_not_ready');
  console.log('Lead Added to Nurture:', nurturedLead);

  // 2. Process due touchpoints
  const touchpointResults = leadNurtureSpecialist.processDueNurtureTouchpoints();
  console.log('Touchpoint Processing:', touchpointResults);

  // 3. Record engagement
  const engagement = leadNurtureSpecialist.recordEngagement(nurturedLead.id, 'email_opened', {
    touchpointIndex: 0,
    openedDate: new Date().toISOString()
  });
  console.log('Engagement Recorded:', engagement);

  // 4. Generate nurture report
  const nurtureReport = leadNurtureSpecialist.generateNurtureReport('monthly');
  console.log('Nurture Report:', nurtureReport);

  return {
    nurturedLead,
    touchpointResults,
    engagement,
    nurtureReport
  };
}

// Export the specialist instance
if (typeof window !== 'undefined') {
  window.LeadNurtureSpecialist = leadNurtureSpecialist;
}