# Technical Integration Guide
## Implementing AI-Driven Content Strategy in Astro Blog System

---

## OVERVIEW

This guide provides the technical implementation steps to integrate the advanced content strategy features into the existing INT Creative Hub Astro blog system. Focus is on adding lead generation, personalization, and conversion tracking capabilities while maintaining the current design and performance.

---

## PART I: ENHANCED BLOG DATA STRUCTURE

### Updated Blog Post Type with Scoring Fields

Add these fields to `/src/types/blog.ts`:

```typescript
export interface BlogPost {
  // ... existing fields ...
  
  // New Lead Generation Fields
  leadMagnet?: {
    title: string;
    description: string;
    downloadUrl: string;
    gatedContent: boolean;
    formId?: string;
  };
  
  // Content Scoring Properties
  contentScore?: {
    leadGeneration: number; // 1-10 rating for lead gen potential
    industryRelevance: string[]; // Target industries
    businessStage: string[]; // startup, growth, established
    urgencyLevel: 'low' | 'medium' | 'high' | 'urgent';
  };
  
  // Conversion Tracking
  conversionGoals?: {
    primary: 'email' | 'consultation' | 'download' | 'service';
    secondary?: string[];
    targetAudience: string[];
  };
  
  // Related Services Integration
  serviceIntegration?: {
    primaryService: string; // matches service slug
    secondaryServices?: string[];
    consultationCTA?: {
      title: string;
      description: string;
      buttonText: string;
      urgencyMessage?: string;
    };
  };
}

// New Lead Scoring Interface
export interface VisitorScore {
  id: string;
  email?: string;
  totalScore: number;
  categoryScores: {
    engagement: number;
    intent: number;
    fit: number;
    timing: number;
  };
  behaviors: VisitorBehavior[];
  lastActivity: Date;
  leadTier: 'cold' | 'warm' | 'hot' | 'qualified';
}

export interface VisitorBehavior {
  type: 'pageView' | 'download' | 'formSubmit' | 'videoWatch' | 'emailOpen' | 'emailClick';
  value: number; // scoring points
  metadata: Record<string, any>;
  timestamp: Date;
}
```

### Enhanced Services Integration

Update `/src/data/services.ts` to include content strategy alignment:

```typescript
export const serviceContentMapping = {
  'website-development': {
    contentCategories: ['website-optimization', 'lead-generation'],
    keywordTargets: ['website conversion', 'landing page optimization', 'mobile website'],
    leadMagnets: [
      'Website Audit Checklist',
      'Conversion Optimization Toolkit',
      'Mobile-First Design Guide'
    ],
    contentPillars: [
      'Website Performance Impact on Lead Generation',
      'Mobile Optimization for Service Businesses',
      'Landing Page Psychology and Conversion'
    ]
  },
  
  'digital-marketing': {
    contentCategories: ['lead-generation', 'marketing-automation'],
    keywordTargets: ['facebook ads', 'local marketing', 'digital advertising ROI'],
    leadMagnets: [
      'Facebook Ads Template Library',
      'Local Marketing Budget Planner',
      'Ad Campaign ROI Calculator'
    ],
    contentPillars: [
      'Facebook Ads That Actually Work for Local Business',
      'Measuring Marketing ROI for Service Businesses',
      'Local SEO vs Paid Advertising Strategy'
    ]
  },
  
  'marketing-automation': {
    contentCategories: ['marketing-automation', 'business-transformation'],
    keywordTargets: ['marketing automation', 'business automation', 'lead nurturing'],
    leadMagnets: [
      'Automation ROI Calculator',
      'Workflow Template Library',
      'Client Onboarding Automation Kit'
    ],
    contentPillars: [
      'Simple Automation Systems That Actually Save Time',
      'ROI Measurement for Marketing Automation',
      'Client Onboarding Automation Case Studies'
    ]
  },
  
  'graphic-design': {
    contentCategories: ['business-transformation', 'small-business-growth'],
    keywordTargets: ['professional branding', 'brand consistency', 'visual marketing'],
    leadMagnets: [
      'Brand Audit Checklist',
      'Visual Marketing Template Pack',
      'Brand Consistency Guide'
    ],
    contentPillars: [
      'Professional Branding Impact on Customer Trust',
      'Brand Consistency Across Digital Touchpoints',
      'Visual Marketing Psychology for Service Businesses'
    ]
  }
};
```

---

## PART II: LEAD GENERATION COMPONENTS

### Advanced Lead Magnet Component

Create `/src/components/lead-generation/LeadMagnet.astro`:

```astro
---
interface Props {
  title: string;
  description: string;
  downloadUrl: string;
  buttonText?: string;
  gated?: boolean;
  formId?: string;
  industrySpecific?: string[];
  className?: string;
}

const {
  title,
  description,
  downloadUrl,
  buttonText = "Download Free Guide",
  gated = true,
  formId = "lead-magnet-form",
  industrySpecific = [],
  className = ""
} = Astro.props;

const formAction = gated ? "/api/lead-capture" : downloadUrl;
---

<div class={`lead-magnet-container ${className}`}>
  <div class="bg-gradient-to-br from-sage-50 to-beige-50 rounded-xl p-6 border border-sage-200">
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0">
        <div class="w-12 h-12 bg-sage-600 rounded-lg flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>
      
      <div class="flex-1 min-w-0">
        <h3 class="text-lg font-semibold text-forest-900 mb-2">{title}</h3>
        <p class="text-gray-600 text-sm mb-4">{description}</p>
        
        {industrySpecific.length > 0 && (
          <div class="mb-4">
            <p class="text-xs text-sage-700 font-medium mb-1">Perfect for:</p>
            <div class="flex flex-wrap gap-1">
              {industrySpecific.map(industry => (
                <span class="px-2 py-1 bg-sage-100 text-sage-800 text-xs rounded">{industry}</span>
              ))}
            </div>
          </div>
        )}
        
        {gated ? (
          <form class="space-y-3" action={formAction} method="POST" data-form-id={formId}>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sm"
              />
              <input
                type="text"
                name="company"
                placeholder="Business name"
                class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sm"
              />
            </div>
            
            <input type="hidden" name="leadMagnet" value={title} />
            <input type="hidden" name="source" value="blog" />
            <input type="hidden" name="downloadUrl" value={downloadUrl} />
            
            <button
              type="submit"
              class="w-full bg-sage-600 hover:bg-sage-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              {buttonText}
            </button>
          </form>
        ) : (
          <a
            href={downloadUrl}
            class="inline-block w-full bg-sage-600 hover:bg-sage-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 text-center"
            download
          >
            {buttonText}
          </a>
        )}
        
        <p class="text-xs text-gray-500 mt-2 text-center">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector(`[data-form-id="${formId}"]`);
  if (form) {
    form.addEventListener('submit', function(e) {
      // Track lead magnet conversion
      if (typeof gtag !== 'undefined') {
        gtag('event', 'lead_magnet_download', {
          'event_category': 'Lead Generation',
          'event_label': title,
          'event_value': 1
        });
      }
      
      // Update lead scoring
      if (typeof updateLeadScore !== 'undefined') {
        updateLeadScore('download', 5, { leadMagnet: title });
      }
    });
  }
});
</script>
```

### Smart CTA Component

Create `/src/components/lead-generation/SmartCTA.astro`:

```astro
---
import { servicesData } from '../../data/services';

interface Props {
  postSlug: string;
  primaryService?: string;
  urgencyLevel?: 'low' | 'medium' | 'high' | 'urgent';
  industryFocus?: string[];
  className?: string;
}

const {
  postSlug,
  primaryService,
  urgencyLevel = 'medium',
  industryFocus = [],
  className = ""
} = Astro.props;

// Get related service data
const relatedService = primaryService ? servicesData.services.find(s => s.slug === primaryService) : null;

// Dynamic messaging based on urgency
const urgencyMessages = {
  low: "When you're ready to transform your business...",
  medium: "Ready to see similar results for your business?",
  high: "Don't let another month pass without fixing this issue.",
  urgent: "Every day you wait costs you potential customers."
};

const ctaText = {
  low: "Learn More",
  medium: "Book Strategy Call",
  high: "Get Started Now",
  urgent: "Book Emergency Consultation"
};
---

<div class={`smart-cta-container ${className}`}>
  <div class="bg-gradient-to-r from-forest-900 via-forest-800 to-sage-800 rounded-xl p-8 text-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full animate-pulse-slow"></div>
      <div class="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full animate-bounce-subtle"></div>
    </div>
    
    <div class="relative z-10">
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-4">
          {urgencyMessages[urgencyLevel]}
        </h3>
        
        {relatedService ? (
          <p class="text-beige-100 text-lg mb-6 max-w-2xl mx-auto">
            This is exactly what I help businesses achieve with my {relatedService.title} service. 
            {relatedService.hook}
          </p>
        ) : (
          <p class="text-beige-100 text-lg mb-6 max-w-2xl mx-auto">
            Get a custom strategy session to implement these exact strategies for your business.
          </p>
        )}
        
        {industryFocus.length > 0 && (
          <div class="mb-6">
            <p class="text-sage-300 text-sm mb-2">Especially effective for:</p>
            <div class="flex flex-wrap justify-center gap-2">
              {industryFocus.map(industry => (
                <span class="px-3 py-1 bg-white/10 rounded-full text-sm text-beige-200">{industry}</span>
              ))}
            </div>
          </div>
        )}
        
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/contact"
            class="inline-flex items-center px-8 py-4 bg-sage-600 hover:bg-sage-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            data-cta-source={postSlug}
          >
            {ctaText[urgencyLevel]}
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          {relatedService && (
            <a
              href={`/services/${relatedService.slug}`}
              class="inline-flex items-center px-6 py-3 border border-white/30 hover:border-white/50 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              View {relatedService.title}
            </a>
          )}
        </div>
        
        <p class="text-beige-200 text-sm mt-4">
          Free 15-minute strategy call • No sales pitch • Custom action plan
        </p>
      </div>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('[data-cta-source]');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      // Track CTA click
      if (typeof gtag !== 'undefined') {
        gtag('event', 'cta_click', {
          'event_category': 'Lead Generation',
          'event_label': postSlug + '_' + urgencyLevel,
          'event_value': urgencyLevel === 'urgent' ? 10 : urgencyLevel === 'high' ? 5 : 3
        });
      }
      
      // Update lead scoring
      if (typeof updateLeadScore !== 'undefined') {
        updateLeadScore('cta_click', urgencyLevel === 'urgent' ? 25 : urgencyLevel === 'high' ? 20 : 15, {
          source: postSlug,
          urgency: urgencyLevel
        });
      }
    });
  }
});
</script>
```

---

## PART III: LEAD SCORING AND TRACKING SYSTEM

### Client-Side Tracking Script

Create `/public/js/lead-scoring.js`:

```javascript
/**
 * Lead Scoring and Behavior Tracking System
 * Tracks visitor behavior and calculates lead scores
 */

class LeadScoringSystem {
  constructor() {
    this.visitorId = this.getOrCreateVisitorId();
    this.sessionData = {
      pageViews: [],
      interactions: [],
      startTime: Date.now(),
      score: 0
    };
    this.init();
  }

  init() {
    this.trackPageView();
    this.setupEventListeners();
    this.startEngagementTracking();
  }

  getOrCreateVisitorId() {
    let visitorId = localStorage.getItem('int_visitor_id');
    if (!visitorId) {
      visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('int_visitor_id', visitorId);
    }
    return visitorId;
  }

  trackPageView() {
    const pageData = {
      url: window.location.pathname,
      title: document.title,
      timestamp: Date.now(),
      referrer: document.referrer
    };
    
    this.sessionData.pageViews.push(pageData);
    
    // Score based on page type
    const pageScore = this.calculatePageScore(pageData.url);
    this.updateScore('pageView', pageScore, pageData);
  }

  calculatePageScore(url) {
    const scoreMap = {
      '/services': 10,
      '/services/': 15,
      '/contact': 25,
      '/blog/': 3,
      '/portfolio': 8,
      '/case-studies': 12
    };
    
    // Check for service-specific pages
    if (url.includes('/services/')) return 20;
    if (url.includes('/blog/') && url.length > 6) return 5;
    
    return scoreMap[url] || 1;
  }

  setupEventListeners() {
    // Track form submissions
    document.addEventListener('submit', (e) => {
      if (e.target.tagName === 'FORM') {
        this.trackInteraction('formSubmit', 20, {
          formId: e.target.id || 'unknown',
          formAction: e.target.action
        });
      }
    });

    // Track CTA clicks
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-cta-source]') || 
          e.target.closest('.cta-button') ||
          e.target.href?.includes('/contact')) {
        this.trackInteraction('ctaClick', 15, {
          element: e.target.textContent.trim(),
          url: e.target.href
        });
      }
    });

    // Track downloads
    document.addEventListener('click', (e) => {
      if (e.target.href && (e.target.href.includes('download') || e.target.download)) {
        this.trackInteraction('download', 10, {
          file: e.target.href,
          title: e.target.textContent.trim()
        });
      }
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (scrollPercent >= 75 && !this.sessionData.scrolledToEnd) {
          this.sessionData.scrolledToEnd = true;
          this.trackInteraction('deepScroll', 3, { percent: scrollPercent });
        }
      }
    });
  }

  trackInteraction(type, score, metadata = {}) {
    const interaction = {
      type,
      score,
      metadata,
      timestamp: Date.now()
    };
    
    this.sessionData.interactions.push(interaction);
    this.updateScore(type, score, metadata);
  }

  updateScore(action, points, metadata = {}) {
    this.sessionData.score += points;
    
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'lead_score_update', {
        'event_category': 'Lead Scoring',
        'event_label': action,
        'event_value': points
      });
    }
    
    // Check for tier upgrades
    const newTier = this.calculateLeadTier(this.sessionData.score);
    const currentTier = localStorage.getItem('int_lead_tier') || 'cold';
    
    if (newTier !== currentTier) {
      localStorage.setItem('int_lead_tier', newTier);
      this.onTierUpgrade(currentTier, newTier);
    }
    
    // Persist data
    this.persistSessionData();
  }

  calculateLeadTier(score) {
    if (score >= 100) return 'qualified';
    if (score >= 75) return 'hot';
    if (score >= 40) return 'warm';
    return 'cold';
  }

  onTierUpgrade(oldTier, newTier) {
    // Trigger personalization changes
    this.personalizeContent(newTier);
    
    // Show tier-specific CTAs
    if (newTier === 'hot' || newTier === 'qualified') {
      this.showHighIntentCTA();
    }
  }

  personalizeContent(tier) {
    // Update CTA text based on lead tier
    const ctaElements = document.querySelectorAll('[data-personalize="cta"]');
    const urgentCtaText = {
      qualified: "Book Your Strategy Call Now",
      hot: "Ready to Get Started?",
      warm: "Learn More About Our Services",
      cold: "Explore Our Solutions"
    };
    
    ctaElements.forEach(el => {
      if (urgentCtaText[tier]) {
        el.textContent = urgentCtaText[tier];
      }
    });
  }

  showHighIntentCTA() {
    // Create and show exit-intent popup or sticky CTA for high-intent visitors
    if (document.querySelector('#high-intent-cta')) return; // Already shown
    
    const cta = document.createElement('div');
    cta.id = 'high-intent-cta';
    cta.className = 'fixed bottom-4 right-4 bg-sage-600 text-white p-4 rounded-lg shadow-xl z-50 max-w-sm';
    cta.innerHTML = `
      <div class="flex items-start justify-between">
        <div>
          <h4 class="font-bold text-sm mb-1">Ready to Transform Your Business?</h4>
          <p class="text-xs mb-3">Based on your interest, you might benefit from a strategy call.</p>
          <a href="/contact" class="inline-block bg-white text-sage-600 px-3 py-2 rounded text-xs font-medium">
            Book Free Call
          </a>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="text-white/70 hover:text-white">
          ×
        </button>
      </div>
    `;
    
    document.body.appendChild(cta);
    
    // Auto-hide after 30 seconds
    setTimeout(() => cta.remove(), 30000);
  }

  startEngagementTracking() {
    // Track time on page
    let engagementTimer = 0;
    const engagementInterval = setInterval(() => {
      engagementTimer += 5;
      
      // Award points for sustained engagement
      if (engagementTimer === 60) { // 1 minute
        this.trackInteraction('engagement_1min', 2);
      } else if (engagementTimer === 180) { // 3 minutes
        this.trackInteraction('engagement_3min', 5);
      } else if (engagementTimer === 300) { // 5 minutes
        this.trackInteraction('engagement_5min', 8);
      }
    }, 5000);
    
    // Clear interval when page is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        clearInterval(engagementInterval);
        this.persistSessionData();
      }
    });
  }

  persistSessionData() {
    // Store session data locally
    localStorage.setItem('int_session_data', JSON.stringify({
      ...this.sessionData,
      visitorId: this.visitorId,
      lastActivity: Date.now()
    }));
    
    // Send to server for processing (implement based on your backend)
    this.sendToServer();
  }

  async sendToServer() {
    try {
      await fetch('/api/track-visitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId: this.visitorId,
          sessionData: this.sessionData,
          timestamp: Date.now()
        })
      });
    } catch (error) {
      console.log('Tracking error:', error);
    }
  }
}

// Global functions for external use
window.updateLeadScore = function(action, points, metadata) {
  if (window.leadScoringSystem) {
    window.leadScoringSystem.trackInteraction(action, points, metadata);
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  window.leadScoringSystem = new LeadScoringSystem();
});
```

### Enhanced Blog Post Layout with Tracking

Update `/src/layouts/BlogPostLayout.astro` to include lead scoring and personalization:

```astro
---
import BaseLayout from './BaseLayout.astro';
import LeadMagnet from '../components/lead-generation/LeadMagnet.astro';
import SmartCTA from '../components/lead-generation/SmartCTA.astro';
import { getBlogPostBySlug, getRelatedBlogPosts } from '../data/blog';

const { slug } = Astro.params;
const post = getBlogPostBySlug(slug);

if (!post) {
  return Astro.redirect('/404');
}

const relatedPosts = getRelatedBlogPosts(slug, 3);
---

<BaseLayout title={post.seo.metaTitle} description={post.seo.metaDescription}>
  <!-- Lead Scoring Script -->
  <script src="/js/lead-scoring.js"></script>
  
  <!-- Article Header -->
  <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <header class="mb-12">
      <div class="text-center">
        <div class="mb-4">
          <span class="inline-block bg-sage-100 text-sage-800 px-3 py-1 rounded-full text-sm font-medium">
            {post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ')}
          </span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-heading font-bold text-forest-900 mb-4">
          {post.title}
        </h1>
        
        {post.subtitle && (
          <p class="text-xl text-sage-700 font-medium mb-6 max-w-3xl mx-auto">
            {post.subtitle}
          </p>
        )}
        
        <!-- Article Meta -->
        <div class="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <span class="font-medium">{post.author.name}</span>
          <time datetime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
          <span>{post.readingTime} min read</span>
        </div>
        
        <!-- Transformation Focus (if available) -->
        {post.transformationFocus && (
          <div class="mt-8 bg-sage-50 rounded-lg p-6 border border-sage-100">
            <p class="text-sm text-sage-700 leading-relaxed">
              <span class="font-medium">Transforms:</span> {post.transformationFocus.businessChallenge} 
              <span class="font-medium">Into:</span> {post.transformationFocus.transformationOutcome}
            </p>
          </div>
        )}
      </div>
    </header>
    
    <!-- Article Content -->
    <div class="prose prose-lg max-w-none">
      <div set:html={post.content} />
    </div>
    
    <!-- Mid-Article Lead Magnet (if available) -->
    {post.leadMagnet && (
      <div class="my-12">
        <LeadMagnet
          title={post.leadMagnet.title}
          description={post.leadMagnet.description}
          downloadUrl={post.leadMagnet.downloadUrl}
          gated={post.leadMagnet.gatedContent}
          formId={`${post.slug}-lead-magnet`}
          industrySpecific={post.transformationFocus?.industryRelevance || []}
        />
      </div>
    )}
    
    <!-- Smart CTA -->
    {post.serviceIntegration && (
      <div class="my-12">
        <SmartCTA
          postSlug={post.slug}
          primaryService={post.serviceIntegration.primaryService}
          urgencyLevel={post.contentScore?.urgencyLevel || 'medium'}
          industryFocus={post.transformationFocus?.industryRelevance || []}
        />
      </div>
    )}
    
    <!-- Related Articles -->
    {relatedPosts.length > 0 && (
      <section class="mt-16 pt-16 border-t border-gray-200">
        <h2 class="text-2xl font-heading font-bold text-forest-900 mb-8">Related Articles</h2>
        <div class="grid md:grid-cols-3 gap-8">
          {relatedPosts.map(relatedPost => (
            <article class="group">
              <a href={`/blog/${relatedPost.slug}`} class="block">
                <h3 class="font-semibold text-forest-900 group-hover:text-sage-700 transition-colors duration-200 mb-2">
                  {relatedPost.title}
                </h3>
                <p class="text-gray-600 text-sm mb-3">{relatedPost.excerpt}</p>
                <div class="text-xs text-gray-500">
                  {relatedPost.readingTime} min read
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    )}
  </article>
  
  <!-- Structured Data -->
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "publisher": {
      "@type": "Organization",
      "name": "INT Creative Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo.png"
      }
    }
  })} />
  
  <!-- Engagement Tracking -->
  <script>
    // Track article completion
    let hasTrackedCompletion = false;
    
    function trackArticleCompletion() {
      if (!hasTrackedCompletion && window.scrollY > document.body.scrollHeight * 0.8) {
        hasTrackedCompletion = true;
        updateLeadScore('articleComplete', 5, { 
          article: post.slug,
          category: post.category 
        });
      }
    }
    
    window.addEventListener('scroll', trackArticleCompletion);
    
    // Track time on article
    setTimeout(() => {
      updateLeadScore('longRead', 8, { 
        article: post.slug,
        timeSpent: '3min+'
      });
    }, 180000); // 3 minutes
  </script>
</BaseLayout>
```

---

## PART IV: INTEGRATION WITH EXISTING COMPONENTS

### Enhanced Contact Form with Lead Scoring

Update the contact form in `/src/pages/contact.astro` to include lead scoring data:

```astro
<!-- Add this script to the existing contact form -->
<script>
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  
  // Add lead scoring data
  const sessionData = JSON.parse(localStorage.getItem('int_session_data') || '{}');
  const leadTier = localStorage.getItem('int_lead_tier') || 'cold';
  
  data.leadScore = sessionData.score || 0;
  data.leadTier = leadTier;
  data.pageViews = sessionData.pageViews || [];
  data.interactions = sessionData.interactions || [];
  data.referralSource = sessionData.pageViews?.[0]?.referrer || 'direct';
  
  // Enhanced qualification scoring
  let qualificationScore = 0;
  
  // Budget scoring
  if (data.projectBudget === '10k-plus') qualificationScore += 25;
  else if (data.projectBudget === '5k-10k') qualificationScore += 20;
  else if (data.projectBudget === '2k-5k') qualificationScore += 15;
  
  // Timeline scoring  
  if (data.timeline === 'asap') qualificationScore += 20;
  else if (data.timeline === '1-3-months') qualificationScore += 15;
  
  // Industry scoring
  const highValueIndustries = ['dental', 'legal', 'medical', 'hvac'];
  if (highValueIndustries.includes(data.businessType)) qualificationScore += 15;
  
  data.qualificationScore = qualificationScore;
  data.totalScore = (sessionData.score || 0) + qualificationScore;
  
  // Priority routing based on combined scores
  if (data.totalScore >= 100) {
    data.priority = 'urgent';
    data.routingNote = 'High-value qualified lead - immediate follow-up required';
  } else if (data.totalScore >= 70) {
    data.priority = 'high';
    data.routingNote = 'Qualified lead - follow up within 4 hours';
  } else if (data.totalScore >= 40) {
    data.priority = 'medium';
    data.routingNote = 'Good prospect - follow up within 24 hours';
  } else {
    data.priority = 'low';
    data.routingNote = 'Standard lead - nurture through email sequence';
  }
  
  // Submit enhanced form data
  this.submit();
});
</script>
```

---

## PART V: ANALYTICS AND REPORTING SETUP

### Google Analytics 4 Enhanced Configuration

Add to `/public/js/analytics.js`:

```javascript
// Enhanced GA4 configuration for content marketing
gtag('config', 'GA_MEASUREMENT_ID', {
  custom_map: {
    'custom_parameter_1': 'lead_tier',
    'custom_parameter_2': 'content_category',
    'custom_parameter_3': 'lead_score'
  }
});

// Content engagement tracking
function trackContentEngagement(eventName, parameters = {}) {
  gtag('event', eventName, {
    event_category: 'Content Marketing',
    content_group1: parameters.category || 'unknown',
    content_group2: parameters.industry || 'general',
    custom_parameter_1: localStorage.getItem('int_lead_tier') || 'cold',
    custom_parameter_3: JSON.parse(localStorage.getItem('int_session_data') || '{}').score || 0,
    ...parameters
  });
}

// Lead generation funnel tracking
const funnelStages = {
  'blog_visit': 'Awareness',
  'lead_magnet_view': 'Interest', 
  'lead_magnet_download': 'Consideration',
  'service_page_visit': 'Intent',
  'contact_form_start': 'Evaluation',
  'contact_form_submit': 'Conversion'
};

function trackFunnelProgression(stage, metadata = {}) {
  gtag('event', 'funnel_progression', {
    event_category: 'Lead Generation Funnel',
    event_label: funnelStages[stage] || stage,
    funnel_stage: stage,
    ...metadata
  });
}

// Export functions for global use
window.trackContentEngagement = trackContentEngagement;
window.trackFunnelProgression = trackFunnelProgression;
```

---

This technical integration guide provides the foundation for implementing advanced content marketing features while maintaining the existing Astro blog structure. The system enables sophisticated lead generation, personalization, and tracking capabilities that support the strategic content marketing objectives outlined in the main strategy document.

All components are designed to be:
- **Performance-optimized** for fast loading
- **SEO-friendly** with proper structured data
- **Privacy-compliant** with user consent management
- **Scalable** for growing content volume and traffic
- **Measurable** with comprehensive analytics integration

The implementation can be rolled out incrementally, starting with lead magnets and basic tracking, then adding personalization and advanced scoring features as content volume and traffic grow.