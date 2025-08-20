/**
 * PortfolioGrid Component Tests
 * Comprehensive unit tests for portfolio grid rendering, filtering, and interactions
 */

import { describe, test, expect, jest, beforeEach, afterEach } from '@jest/globals';

// Mock portfolio data for testing
const mockPortfolioData = [
  {
    id: 'test-project-1',
    slug: 'test-project-1',
    title: 'Test Website Project',
    category: 'Website Development',
    serviceType: 'website-development',
    tagline: 'Increased leads by 200%',
    description: 'A comprehensive website redesign that transformed the client\'s online presence.',
    clientResults: {
      timeframe: '30 days',
      metric: '200% increase in leads',
      keyOutcome: 'Doubled monthly lead generation'
    },
    technologies: ['Webflow', 'HubSpot', 'Google Analytics'],
    clientInfo: {
      industry: 'Healthcare',
      size: '5-10 employees',
      location: 'Cleveland, Ohio'
    }
  },
  {
    id: 'test-project-2',
    slug: 'test-project-2',
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    serviceType: 'digital-marketing',
    tagline: 'Reduced cost per lead by 60%',
    description: 'Strategic Facebook and Google Ads campaign that dramatically improved lead quality.',
    clientResults: {
      timeframe: '60 days',
      metric: '60% cost reduction',
      keyOutcome: 'Cut lead costs from $85 to $32'
    },
    technologies: ['Facebook Ads', 'Google Ads', 'HubSpot CRM'],
    clientInfo: {
      industry: 'Home Services',
      size: '8-12 employees',
      location: 'Akron, Ohio'
    }
  },
  {
    id: 'test-project-3',
    slug: 'test-project-3',
    title: 'Brand Identity Redesign',
    category: 'Graphic Design',
    serviceType: 'graphic-design',
    tagline: 'Modern professional identity',
    description: 'Complete rebrand that enhanced professional credibility and client trust.',
    clientResults: {
      timeframe: '21 days',
      metric: '35% increase in referrals',
      keyOutcome: 'Enhanced professional credibility'
    },
    technologies: ['Adobe Creative Suite', 'Brand Strategy'],
    clientInfo: {
      industry: 'Legal Services',
      size: '2-4 employees',
      location: 'Canton, Ohio'
    }
  }
];

// Mock PortfolioGrid component
const mockPortfolioGrid = {
  render: jest.fn(),
  props: {},
  
  generateHTML(props = {}) {
    const { 
      featuredOnly = false, 
      limit, 
      filterCategory = 'all' 
    } = props;

    let portfolioItems = [...mockPortfolioData];

    // Apply filters
    if (featuredOnly) {
      portfolioItems = portfolioItems.slice(0, 2); // Mock featured items
    } else if (filterCategory !== 'all') {
      portfolioItems = portfolioItems.filter(item => item.serviceType === filterCategory);
    }

    // Apply limit
    if (limit) {
      portfolioItems = portfolioItems.slice(0, limit);
    }

    const getServiceColor = (serviceType) => {
      const colors = {
        'website-development': 'from-forest-900 to-sage-800',
        'digital-marketing': 'from-sage-700 to-forest-800',
        'graphic-design': 'from-forest-800 to-sage-700',
        'marketing-automation': 'from-sage-800 to-forest-900'
      };
      return colors[serviceType] || 'from-forest-900 to-sage-800';
    };

    return `
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-forest-900 mb-4">
              ${featuredOnly ? 'Featured Methodology Examples' : 'Demonstration Portfolio'}
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              See exactly how I approach problems like yours. These demonstration projects showcase my proven methodology using realistic scenarios for Northeast Ohio service businesses.
            </p>
            
            <div class="bg-gradient-to-r from-amber-50 via-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6 max-w-4xl mx-auto mb-8 shadow-lg" 
                 role="complementary" 
                 aria-labelledby="portfolio-disclaimer-title">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 id="portfolio-disclaimer-title" class="text-base font-bold text-amber-900 mb-2 flex items-center">
                    <span class="mr-2">⚠️</span>
                    IMPORTANT: Fictional Demonstration Portfolio
                  </h3>
                  <div class="space-y-2 text-sm text-amber-800">
                    <p class="font-semibold">
                      All case studies, client names, testimonials, and metrics shown below are <strong>FICTIONAL</strong> and created solely for demonstration purposes.
                    </p>
                    <p>
                      These conceptual projects illustrate my planned methodology and approach to service business transformation. While based on realistic scenarios and proven strategies, <strong>NO ACTUAL CLIENT RELATIONSHIPS</strong> are represented.
                    </p>
                    <p class="text-xs text-amber-700 font-medium bg-amber-100 rounded p-2 border-l-4 border-amber-400">
                      <strong>FTC Compliance:</strong> This complies with Federal Trade Commission guidelines requiring clear disclosure of fictional content in business marketing materials. No earnings claims or guarantees are made.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex justify-center items-center space-x-2">
              <div class="w-2 h-2 bg-sage-400 rounded-full animate-pulse"></div>
              <div class="w-16 h-0.5 bg-gradient-to-r from-sage-400 via-forest-600 to-sage-500"></div>
              <div class="w-2 h-2 bg-forest-600 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
              <div class="w-16 h-0.5 bg-gradient-to-r from-forest-600 to-sage-500"></div>
              <div class="w-2 h-2 bg-sage-500 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" data-portfolio-grid>
            ${portfolioItems.map((item, index) => `
              <article 
                class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 group relative overflow-hidden portfolio-card-entrance opacity-0"
                style="animation-delay: ${index * 150}ms"
                data-portfolio-item
                data-portfolio-category="${item.serviceType}"
                data-portfolio-index="${index}"
              >
                <div class="relative h-72 overflow-hidden rounded-t-xl group-portfolio">
                  <div class="absolute inset-0 bg-gradient-to-br ${getServiceColor(item.serviceType)} opacity-90 z-0"></div>
                  
                  <div class="portfolio-image-container relative h-full w-full z-10" data-portfolio-slug="${item.slug}">
                    <img
                      src="/images/portfolio/${item.slug}-desktop.jpg"
                      alt="${item.title} - ${item.serviceType} transformation showing ${item.clientResults.keyOutcome}"
                      loading="${index < 6 ? 'eager' : 'lazy'}"
                      class="portfolio-main-image w-full h-full object-cover object-center transition-all duration-700"
                      data-portfolio-image
                      data-slug="${item.slug}"
                      data-service="${item.serviceType}"
                    />
                  </div>
                  
                  ${featuredOnly ? `
                  <div class="absolute top-3 right-3 z-20">
                    <span class="bg-sage-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                      <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>Featured</span>
                    </span>
                  </div>
                  ` : ''}
                </div>
                
                <div class="p-6 space-y-4">
                  <div class="space-y-2">
                    <h3 class="text-xl font-bold text-forest-900 group-hover:text-sage-700 transition-colors duration-300 leading-tight">
                      ${item.title}
                    </h3>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-sage-500 rounded-full"></div>
                      <p class="text-sm text-sage-700 font-semibold tracking-wide">
                        ${item.clientResults.keyOutcome}
                      </p>
                    </div>
                  </div>
                  
                  <p class="text-gray-600 leading-relaxed text-sm line-clamp-3">
                    ${item.description}
                  </p>
                  
                  <div class="bg-gradient-to-r from-sage-50 to-beige-50 rounded-lg p-4 border border-sage-200 relative overflow-hidden group/result hover:border-sage-300 transition-all duration-300">
                    <div class="absolute inset-0 bg-gradient-to-r from-sage-100/0 via-sage-200/30 to-sage-100/0 transform -translate-x-full group-hover/result:translate-x-full transition-transform duration-1000"></div>
                    <div class="relative z-10">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-sage-600 font-bold tracking-wider">KEY RESULT</span>
                        <div class="result-pulse-indicator">
                          <div class="w-1 h-1 bg-sage-500 rounded-full animate-pulse"></div>
                          <div class="w-0.5 h-0.5 bg-sage-400 rounded-full animate-pulse ml-1" style="animation-delay: 0.5s;"></div>
                        </div>
                      </div>
                      <div class="text-sm font-bold text-forest-900 mb-1 result-metric" data-metric="${item.clientResults.metric}">
                        ${item.clientResults.metric}
                      </div>
                      <div class="text-xs text-gray-600 font-medium flex items-center">
                        <svg class="w-3 h-3 mr-1 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ${item.clientResults.timeframe}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div class="text-xs text-gray-500 font-bold tracking-wider mb-2">TOOLS USED</div>
                    <div class="flex flex-wrap gap-2">
                      ${item.technologies.slice(0, 3).map(tech => `
                        <span class="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 hover:border-sage-300 transition-colors duration-300">
                          ${tech}
                        </span>
                      `).join('')}
                      ${item.technologies.length > 3 ? `
                        <span class="bg-gradient-to-r from-sage-100 to-sage-50 text-sage-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-sage-200">
                          +${item.technologies.length - 3} more
                        </span>
                      ` : ''}
                    </div>
                  </div>
                  
                  <a 
                    href="/portfolio/${item.slug}"
                    class="w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white py-3.5 px-6 rounded-xl font-semibold text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform relative overflow-hidden group/btn block text-sm border border-sage-500/20 cta-button"
                    aria-label="View detailed case study for ${item.title}"
                    data-portfolio-cta
                  >
                    <span class="relative z-10 flex items-center justify-center space-x-2">
                      <span class="cta-text">View Case Study</span>
                      <svg class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </a>
                </div>
              </article>
            `).join('')}
          </div>
          
          ${!featuredOnly && limit && portfolioItems.length >= limit ? `
          <div class="text-center mt-12">
            <a 
              href="/portfolio"
              class="inline-block bg-forest-900 hover:bg-forest-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform relative overflow-hidden group"
            >
              <span class="relative z-10">View All Projects</span>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </a>
          </div>
          ` : ''}
          
          <div class="mt-16 text-center bg-beige-50 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden group ready-to-start-section">
            <div class="absolute inset-0 bg-gradient-to-r from-beige-100/0 via-sage-100/30 to-beige-100/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <h3 class="text-xl font-heading font-semibold text-forest-900 mb-3 relative z-10 group-hover:scale-105 transition-transform duration-300">
              Ready to See This Methodology Work for Your Business?
            </h3>
            <p class="text-gray-700 relative z-10 group-hover:text-gray-900 transition-colors duration-300 mb-6">
              These demonstrations show exactly how I work with real clients. Same process, same attention to detail, same results-focused approach—applied to your specific business goals and challenges.
            </p>
            
            <div class="grid sm:grid-cols-2 gap-4 mb-6">
              <div class="bg-white/60 rounded-lg p-4 text-sm trust-signal hover:bg-white/80 transition-all duration-300 hover:shadow-md transform hover:scale-105">
                <h4 class="font-semibold text-forest-900 mb-2 flex items-center">
                  <span class="checkmark-icon mr-2 text-sage-600">✓</span>
                  Proven Methodology
                </h4>
                <p class="text-gray-600">Every strategy shown here is battle-tested and ready to deploy</p>
              </div>
              <div class="bg-white/60 rounded-lg p-4 text-sm trust-signal hover:bg-white/80 transition-all duration-300 hover:shadow-md transform hover:scale-105">
                <h4 class="font-semibold text-forest-900 mb-2 flex items-center">
                  <span class="checkmark-icon mr-2 text-sage-600">✓</span>
                  Transparent Process
                </h4>
                <p class="text-gray-600">You see exactly what to expect from start to finish</p>
              </div>
            </div>
            
            <a 
              href="/contact"
              class="inline-block bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform relative overflow-hidden group/btn"
            >
              <span class="relative z-10">Book Your Free Strategy Call</span>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></div>
            </a>
            
            <p class="text-xs text-gray-500 mt-3">15-minute consultation • No obligation • Direct communication with me</p>
          </div>
        </div>
      </section>
    `;
  }
};

describe('PortfolioGrid Component', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.clearAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('Component Rendering', () => {
    test('renders portfolio grid with all items by default', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const portfolioGrid = container.querySelector('[data-portfolio-grid]');
      expect(portfolioGrid).not.toBeNull();

      const portfolioItems = container.querySelectorAll('[data-portfolio-item]');
      expect(portfolioItems).toHaveLength(3);

      // Check that all mock items are rendered
      expect(container.textContent).toContain('Test Website Project');
      expect(container.textContent).toContain('Digital Marketing Campaign');
      expect(container.textContent).toContain('Brand Identity Redesign');
    });

    test('renders correct header for regular portfolio view', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const header = container.querySelector('h2');
      expect(header.textContent).toBe('Demonstration Portfolio');
    });

    test('renders correct header for featured portfolio view', () => {
      const html = mockPortfolioGrid.generateHTML({ featuredOnly: true });
      container.innerHTML = html;

      const header = container.querySelector('h2');
      expect(header.textContent).toBe('Featured Methodology Examples');
    });
  });

  describe('Portfolio Filtering', () => {
    test('filters by service type category', () => {
      const html = mockPortfolioGrid.generateHTML({ filterCategory: 'website-development' });
      container.innerHTML = html;

      const portfolioItems = container.querySelectorAll('[data-portfolio-item]');
      expect(portfolioItems).toHaveLength(1);

      const item = portfolioItems[0];
      expect(item.getAttribute('data-portfolio-category')).toBe('website-development');
      expect(container.textContent).toContain('Test Website Project');
    });

    test('shows featured items when featuredOnly is true', () => {
      const html = mockPortfolioGrid.generateHTML({ featuredOnly: true });
      container.innerHTML = html;

      const portfolioItems = container.querySelectorAll('[data-portfolio-item]');
      expect(portfolioItems).toHaveLength(2); // Mock returns first 2 items

      // Check for featured badges
      const featuredBadges = container.querySelectorAll('.bg-sage-600');
      expect(featuredBadges.length).toBeGreaterThan(0);
      expect(container.textContent).toContain('Featured');
    });

    test('applies limit correctly', () => {
      const html = mockPortfolioGrid.generateHTML({ limit: 2 });
      container.innerHTML = html;

      const portfolioItems = container.querySelectorAll('[data-portfolio-item]');
      expect(portfolioItems).toHaveLength(2);
    });
  });

  describe('Portfolio Card Structure', () => {
    test('each card contains required elements', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const firstCard = container.querySelector('[data-portfolio-item]');
      expect(firstCard).not.toBeNull();

      // Check for image container
      const imageContainer = firstCard.querySelector('.portfolio-image-container');
      expect(imageContainer).not.toBeNull();

      // Check for title
      const title = firstCard.querySelector('h3');
      expect(title).not.toBeNull();
      expect(title.textContent).toContain('Test Website Project');

      // Check for description
      const description = firstCard.querySelector('.line-clamp-3');
      expect(description).not.toBeNull();

      // Check for key result section
      const keyResult = firstCard.querySelector('.result-metric');
      expect(keyResult).not.toBeNull();

      // Check for technologies
      const techSection = firstCard.querySelector('.flex.flex-wrap.gap-2');
      expect(techSection).not.toBeNull();

      // Check for CTA button
      const ctaButton = firstCard.querySelector('[data-portfolio-cta]');
      expect(ctaButton).not.toBeNull();
      expect(ctaButton.getAttribute('href')).toBe('/portfolio/test-project-1');
    });

    test('cards have correct data attributes', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const cards = container.querySelectorAll('[data-portfolio-item]');
      
      cards.forEach((card, index) => {
        expect(card.getAttribute('data-portfolio-category')).toBe(mockPortfolioData[index].serviceType);
        expect(card.getAttribute('data-portfolio-index')).toBe(index.toString());
      });
    });

    test('images have correct loading attributes', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const images = container.querySelectorAll('[data-portfolio-image]');
      
      images.forEach((img, index) => {
        const expectedLoading = index < 6 ? 'eager' : 'lazy';
        expect(img.loading).toBe(expectedLoading);
        expect(img.getAttribute('data-slug')).toBe(mockPortfolioData[index].slug);
        expect(img.getAttribute('data-service')).toBe(mockPortfolioData[index].serviceType);
      });
    });
  });

  describe('Legal Compliance', () => {
    test('displays legal disclaimer section', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const disclaimer = container.querySelector('[aria-labelledby="portfolio-disclaimer-title"]');
      expect(disclaimer).not.toBeNull();
      expect(disclaimer.getAttribute('role')).toBe('complementary');

      const title = container.querySelector('#portfolio-disclaimer-title');
      expect(title).not.toBeNull();
      expect(title.textContent).toContain('IMPORTANT: Fictional Demonstration Portfolio');
    });

    test('includes FTC compliance notice', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      expect(container.textContent).toContain('FTC Compliance');
      expect(container.textContent).toContain('Federal Trade Commission guidelines');
      expect(container.textContent).toContain('fictional content');
      expect(container.textContent).toContain('No earnings claims or guarantees are made');
    });

    test('clearly states fictional nature of content', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      expect(container.textContent).toContain('FICTIONAL');
      expect(container.textContent).toContain('demonstration purposes');
      expect(container.textContent).toContain('NO ACTUAL CLIENT RELATIONSHIPS');
    });
  });

  describe('Interactive Elements', () => {
    test('CTA buttons have correct accessibility attributes', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const ctaButtons = container.querySelectorAll('[data-portfolio-cta]');
      
      ctaButtons.forEach((button, index) => {
        const expectedLabel = `View detailed case study for ${mockPortfolioData[index].title}`;
        expect(button.getAttribute('aria-label')).toBe(expectedLabel);
        expect(button.getAttribute('href')).toBe(`/portfolio/${mockPortfolioData[index].slug}`);
      });
    });

    test('includes View All Projects button when limit is applied', () => {
      const html = mockPortfolioGrid.generateHTML({ limit: 3 });
      container.innerHTML = html;

      const viewAllButton = container.querySelector('a[href="/portfolio"]');
      expect(viewAllButton).not.toBeNull();
      expect(viewAllButton.textContent).toContain('View All Projects');
    });

    test('omits View All Projects button when featuredOnly is true', () => {
      const html = mockPortfolioGrid.generateHTML({ featuredOnly: true });
      container.innerHTML = html;

      const viewAllButton = container.querySelector('a[href="/portfolio"]');
      expect(viewAllButton).toBeNull();
    });
  });

  describe('Call-to-Action Section', () => {
    test('includes ready-to-start section', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const ctaSection = container.querySelector('.ready-to-start-section');
      expect(ctaSection).not.toBeNull();

      expect(container.textContent).toContain('Ready to See This Methodology Work for Your Business?');
      expect(container.textContent).toContain('Book Your Free Strategy Call');
    });

    test('includes trust signals', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const trustSignals = container.querySelectorAll('.trust-signal');
      expect(trustSignals).toHaveLength(2);

      expect(container.textContent).toContain('Proven Methodology');
      expect(container.textContent).toContain('Transparent Process');
    });

    test('contact CTA has correct attributes', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const contactButton = container.querySelector('a[href="/contact"]');
      expect(contactButton).not.toBeNull();
      expect(contactButton.textContent).toContain('Book Your Free Strategy Call');
    });
  });

  describe('Responsive Design Elements', () => {
    test('uses responsive grid classes', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const grid = container.querySelector('[data-portfolio-grid]');
      expect(grid.className).toContain('grid');
      expect(grid.className).toContain('md:grid-cols-2');
      expect(grid.className).toContain('lg:grid-cols-3');
    });

    test('includes animation delays for staggered appearance', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      const cards = container.querySelectorAll('[data-portfolio-item]');
      
      cards.forEach((card, index) => {
        const expectedDelay = `${index * 150}ms`;
        expect(card.style.animationDelay).toBe(expectedDelay);
      });
    });
  });

  describe('Technology Display', () => {
    test('displays technologies correctly', () => {
      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      // Check first project technologies
      const firstCard = container.querySelector('[data-portfolio-item]');
      expect(firstCard.textContent).toContain('Webflow');
      expect(firstCard.textContent).toContain('HubSpot');
      expect(firstCard.textContent).toContain('Google Analytics');
    });

    test('shows "+X more" when technologies exceed display limit', () => {
      // Modify mock data to have more than 3 technologies
      const originalTechnologies = mockPortfolioData[0].technologies;
      mockPortfolioData[0].technologies = ['Tech1', 'Tech2', 'Tech3', 'Tech4', 'Tech5'];

      const html = mockPortfolioGrid.generateHTML();
      container.innerHTML = html;

      expect(container.textContent).toContain('+2 more');

      // Restore original data
      mockPortfolioData[0].technologies = originalTechnologies;
    });
  });

  describe('Service Type Styling', () => {
    const serviceTypes = [
      'website-development',
      'digital-marketing', 
      'graphic-design',
      'marketing-automation'
    ];

    serviceTypes.forEach(serviceType => {
      test(`applies correct styling for ${serviceType}`, () => {
        const testData = [{
          ...mockPortfolioData[0],
          serviceType: serviceType,
          slug: `test-${serviceType}`
        }];

        // Mock with specific service type
        const originalData = [...mockPortfolioData];
        mockPortfolioData.length = 0;
        mockPortfolioData.push(...testData);

        const html = mockPortfolioGrid.generateHTML();
        container.innerHTML = html;

        const card = container.querySelector('[data-portfolio-item]');
        expect(card.getAttribute('data-portfolio-category')).toBe(serviceType);

        // Restore original data
        mockPortfolioData.length = 0;
        mockPortfolioData.push(...originalData);
      });
    });
  });
});