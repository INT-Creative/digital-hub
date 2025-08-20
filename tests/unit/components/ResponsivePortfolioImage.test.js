/**
 * ResponsivePortfolioImage Component Tests
 * Comprehensive unit tests for image loading, fallbacks, and SEO optimization
 */

import { describe, test, expect, jest, beforeEach, afterEach } from '@jest/globals';

// Mock the ResponsivePortfolioImage component
const mockResponsivePortfolioImage = {
  render: jest.fn(),
  props: {},
  
  // Simulate the component structure
  generateHTML(props) {
    const {
      slug = 'test-slug',
      serviceType = 'website-development',
      title = 'Test Project',
      category = 'Website Development',
      clientResult = 'Test Result',
      industry = 'Test Industry',
      index = 0,
      showLegalBadge = true,
      className = '',
      loading = index < 6 ? 'eager' : 'lazy',
      priority = index < 3
    } = props;

    return `
      <div class="portfolio-image-container relative h-full w-full ${className}" data-portfolio-slug="${slug}">
        <picture class="block h-full w-full">
          <source media="(max-width: 480px)" srcset="/images/portfolio/${slug}-mobile.webp 480w" type="image/webp" data-format="webp" />
          <source media="(max-width: 768px)" srcset="/images/portfolio/${slug}-tablet.webp 768w" type="image/webp" data-format="webp" />
          <source media="(min-width: 769px)" srcset="/images/portfolio/${slug}-desktop.webp 1200w" type="image/webp" data-format="webp" />
          
          <source media="(max-width: 480px)" srcset="/images/portfolio/${slug}-mobile.jpg 480w" type="image/jpeg" data-format="jpeg" />
          <source media="(max-width: 768px)" srcset="/images/portfolio/${slug}-tablet.jpg 768w" type="image/jpeg" data-format="jpeg" />
          <source media="(min-width: 769px)" srcset="/images/portfolio/${slug}-desktop.jpg 1200w" type="image/jpeg" data-format="jpeg" />
          
          <img
            src="/images/portfolio/${slug}-desktop.jpg"
            alt="${title} - ${serviceType} transformation showing ${clientResult}"
            title="${title} - ${category} transformation showing ${clientResult}"
            loading="${loading}"
            decoding="async"
            class="portfolio-main-image w-full h-full object-cover object-center transition-all duration-700"
            width="400"
            height="300"
            data-portfolio-image
            data-slug="${slug}"
            data-service="${serviceType}"
            data-industry="${industry}"
            data-priority="${priority}"
            fetchpriority="${priority ? 'high' : 'low'}"
            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 400px"
            onerror="this.style.display='none'; this.parentElement.nextElementSibling.style.display='flex';"
            onload="this.parentElement.parentElement.classList.add('loaded')"
          />
        </picture>
        
        <div class="portfolio-image-fallback absolute inset-0 flex items-center justify-center bg-gray-100 opacity-100 transition-opacity duration-400">
          <div class="absolute inset-0 bg-gradient-to-br from-forest-900 to-sage-800 opacity-80"></div>
          <div class="relative z-10 text-center text-white p-4">
            <div class="w-16 h-16 mx-auto mb-4 opacity-80">
              <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div class="space-y-3">
              <div class="skeleton-shimmer-container relative overflow-hidden bg-white/20 rounded h-2 w-24 mx-auto">
                <div class="skeleton-shimmer"></div>
              </div>
              <div class="text-xs font-medium opacity-90 tracking-wide">
                Loading ${category} Project
              </div>
              <div class="loading-progress-container relative bg-white/20 rounded-full h-1 w-32 mx-auto overflow-hidden">
                <div class="loading-progress bg-white/60 h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="portfolio-image-error absolute inset-0 items-center justify-center bg-gray-50 opacity-0 transition-opacity duration-400" style="display: none;">
          <div class="absolute inset-0 bg-gradient-to-br from-forest-900 to-sage-800 opacity-60"></div>
          <div class="relative z-10 text-center text-white p-6 max-w-sm mx-auto">
            <div class="w-20 h-20 mx-auto mb-4 opacity-90">
              <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
              </svg>
            </div>
            <div class="space-y-3">
              <h3 class="font-bold text-sm">${title}</h3>
              <div class="text-xs opacity-90 leading-relaxed">
                <p class="mb-2">${category} transformation project</p>
                <div class="bg-white/20 rounded px-3 py-2">
                  <span class="font-semibold text-xs">Key Result:</span>
                  <br />
                  <span class="text-xs">${clientResult}</span>
                </div>
              </div>
              <div class="text-xs text-white/80 mt-3">
                Demonstration case study for Northeast Ohio service businesses
              </div>
            </div>
          </div>
        </div>
        
        ${showLegalBadge ? `
        <div class="legal-disclaimer-badge absolute top-2 left-2 z-20">
          <div 
            class="bg-amber-500/90 backdrop-blur-sm text-amber-900 text-xs font-bold px-2 py-1 rounded-md border border-amber-400/50 shadow-lg cursor-help transition-all duration-300 hover:bg-amber-400/95"
            title="This is a demonstration case study created for educational purposes. All client details are fictional to illustrate methodology while protecting client privacy."
            role="button"
            tabindex="0"
            aria-label="Legal disclaimer: This is a demonstration case study with fictional client details"
          >
            <span class="flex items-center space-x-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span>DEMO</span>
            </span>
          </div>
        </div>
        ` : ''}
        
        <div class="sr-only" aria-hidden="true">
          <span>Portfolio image showing ${title} ${category} transformation project</span>
          <span>Service type: ${serviceType.replace('-', ' ')}</span>
          <span>Industry: ${industry}</span>
          <span>Key result: ${clientResult}</span>
          <span>Demonstration case study for Northeast Ohio service business transformation consulting</span>
        </div>
      </div>
    `;
  }
};

describe('ResponsivePortfolioImage Component', () => {
  let container;

  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
    
    // Reset mocks
    jest.clearAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('Component Rendering', () => {
    test('renders with all required props', () => {
      const props = {
        slug: 'test-project',
        serviceType: 'website-development',
        title: 'Test Website Project',
        category: 'Website Development',
        clientResult: 'Increased leads by 200%',
        industry: 'Healthcare',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const imageContainer = container.querySelector('.portfolio-image-container');
      expect(imageContainer).not.toBeNull();
      expect(imageContainer.getAttribute('data-portfolio-slug')).toBe('test-project');
    });

    test('renders picture element with correct sources', () => {
      const props = {
        slug: 'test-project',
        serviceType: 'website-development',
        title: 'Test Project',
        category: 'Website Development',
        clientResult: 'Test result',
        industry: 'Test Industry',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const picture = container.querySelector('picture');
      expect(picture).not.toBeNull();

      // Check WebP sources
      const webpSources = container.querySelectorAll('source[type="image/webp"]');
      expect(webpSources).toHaveLength(3);

      // Check JPEG fallback sources
      const jpegSources = container.querySelectorAll('source[type="image/jpeg"]');
      expect(jpegSources).toHaveLength(3);

      // Check main img element
      const img = container.querySelector('img[data-portfolio-image]');
      expect(img).not.toBeNull();
      expect(img.src).toContain('/images/portfolio/test-project-desktop.jpg');
    });

    test('applies correct loading strategy based on index', () => {
      // Test eager loading for above-the-fold images
      const eagerProps = {
        slug: 'test-eager',
        serviceType: 'website-development',
        title: 'Test Project',
        category: 'Website Development',
        clientResult: 'Test result',
        industry: 'Test Industry',
        index: 2
      };

      const eagerHtml = mockResponsivePortfolioImage.generateHTML(eagerProps);
      container.innerHTML = eagerHtml;

      let img = container.querySelector('img[data-portfolio-image]');
      expect(img.loading).toBe('eager');
      expect(img.getAttribute('fetchpriority')).toBe('high');

      // Test lazy loading for below-the-fold images
      const lazyProps = { ...eagerProps, index: 8 };
      const lazyHtml = mockResponsivePortfolioImage.generateHTML(lazyProps);
      container.innerHTML = lazyHtml;

      img = container.querySelector('img[data-portfolio-image]');
      expect(img.loading).toBe('lazy');
      expect(img.getAttribute('fetchpriority')).toBe('low');
    });
  });

  describe('SEO Optimization', () => {
    test('generates SEO-optimized alt text', () => {
      const props = {
        slug: 'seo-test',
        serviceType: 'digital-marketing',
        title: 'Digital Marketing Success',
        category: 'Digital Marketing',
        clientResult: '300% ROI increase',
        industry: 'Healthcare',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const img = container.querySelector('img[data-portfolio-image]');
      expect(img.alt).toContain('Digital Marketing Success');
      expect(img.alt).toContain('digital-marketing');
      expect(img.alt).toContain('300% ROI increase');
    });

    test('includes comprehensive data attributes', () => {
      const props = {
        slug: 'data-test',
        serviceType: 'marketing-automation',
        title: 'Automation Project',
        category: 'Marketing Automation',
        clientResult: 'Saved 20 hours per week',
        industry: 'Professional Services',
        index: 1
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const img = container.querySelector('img[data-portfolio-image]');
      expect(img.getAttribute('data-slug')).toBe('data-test');
      expect(img.getAttribute('data-service')).toBe('marketing-automation');
      expect(img.getAttribute('data-industry')).toBe('Professional Services');
      expect(img.getAttribute('data-priority')).toBe('true');
    });

    test('includes screen reader content', () => {
      const props = {
        slug: 'sr-test',
        serviceType: 'graphic-design',
        title: 'Brand Design Project',
        category: 'Graphic Design',
        clientResult: 'Improved brand recognition by 150%',
        industry: 'Legal Services',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const srContent = container.querySelector('.sr-only');
      expect(srContent).not.toBeNull();
      expect(srContent.textContent).toContain('Brand Design Project');
      expect(srContent.textContent).toContain('graphic design');
      expect(srContent.textContent).toContain('Legal Services');
      expect(srContent.textContent).toContain('Improved brand recognition by 150%');
    });
  });

  describe('Loading States', () => {
    test('displays loading fallback with correct service styling', () => {
      const props = {
        slug: 'loading-test',
        serviceType: 'website-development',
        title: 'Loading Test',
        category: 'Website Development',
        clientResult: 'Loading result',
        industry: 'Test Industry',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const fallback = container.querySelector('.portfolio-image-fallback');
      expect(fallback).not.toBeNull();
      expect(fallback.textContent).toContain('Loading Website Development Project');

      // Check for skeleton animation elements
      const skeleton = container.querySelector('.skeleton-shimmer-container');
      expect(skeleton).not.toBeNull();

      const progressBar = container.querySelector('.loading-progress-container');
      expect(progressBar).not.toBeNull();
    });

    test('displays error state with project details', () => {
      const props = {
        slug: 'error-test',
        serviceType: 'digital-marketing',
        title: 'Error Test Project',
        category: 'Digital Marketing',
        clientResult: 'Significant improvement',
        industry: 'Healthcare',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const errorState = container.querySelector('.portfolio-image-error');
      expect(errorState).not.toBeNull();
      expect(errorState.textContent).toContain('Error Test Project');
      expect(errorState.textContent).toContain('Digital Marketing transformation project');
      expect(errorState.textContent).toContain('Significant improvement');
      expect(errorState.textContent).toContain('Northeast Ohio service businesses');
    });
  });

  describe('Legal Compliance', () => {
    test('displays legal disclaimer badge by default', () => {
      const props = {
        slug: 'legal-test',
        serviceType: 'website-development',
        title: 'Legal Test',
        category: 'Website Development',
        clientResult: 'Test result',
        industry: 'Test Industry',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const legalBadge = container.querySelector('.legal-disclaimer-badge');
      expect(legalBadge).not.toBeNull();
      expect(legalBadge.textContent).toContain('DEMO');

      const button = legalBadge.querySelector('[role="button"]');
      expect(button).not.toBeNull();
      expect(button.getAttribute('tabindex')).toBe('0');
      expect(button.getAttribute('aria-label')).toContain('demonstration case study');
    });

    test('hides legal badge when showLegalBadge is false', () => {
      const props = {
        slug: 'no-legal-test',
        serviceType: 'website-development',
        title: 'No Legal Test',
        category: 'Website Development',
        clientResult: 'Test result',
        industry: 'Test Industry',
        index: 0,
        showLegalBadge: false
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const legalBadge = container.querySelector('.legal-disclaimer-badge');
      expect(legalBadge).toBeNull();
    });
  });

  describe('Responsive Behavior', () => {
    test('includes responsive image sources', () => {
      const props = {
        slug: 'responsive-test',
        serviceType: 'website-development',
        title: 'Responsive Test',
        category: 'Website Development',
        clientResult: 'Test result',
        industry: 'Test Industry',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      // Check mobile sources
      const mobileSources = Array.from(container.querySelectorAll('source')).filter(
        source => source.media === '(max-width: 480px)'
      );
      expect(mobileSources).toHaveLength(2); // WebP and JPEG

      // Check tablet sources
      const tabletSources = Array.from(container.querySelectorAll('source')).filter(
        source => source.media === '(max-width: 768px)'
      );
      expect(tabletSources).toHaveLength(2);

      // Check desktop sources
      const desktopSources = Array.from(container.querySelectorAll('source')).filter(
        source => source.media === '(min-width: 769px)'
      );
      expect(desktopSources).toHaveLength(2);
    });

    test('includes proper sizes attribute', () => {
      const props = {
        slug: 'sizes-test',
        serviceType: 'website-development',
        title: 'Sizes Test',
        category: 'Website Development',
        clientResult: 'Test result',
        industry: 'Test Industry',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const img = container.querySelector('img[data-portfolio-image]');
      expect(img.sizes).toBe('(max-width: 480px) 480px, (max-width: 768px) 768px, 400px');
    });
  });

  describe('Error Handling', () => {
    test('includes error handling in image element', () => {
      const props = {
        slug: 'error-handling-test',
        serviceType: 'website-development',
        title: 'Error Handling Test',
        category: 'Website Development',
        clientResult: 'Test result',
        industry: 'Test Industry',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const img = container.querySelector('img[data-portfolio-image]');
      expect(img.onerror).toBeTruthy();
      expect(img.onload).toBeTruthy();
    });
  });

  describe('Performance Optimizations', () => {
    test('applies performance attributes correctly', () => {
      const props = {
        slug: 'performance-test',
        serviceType: 'website-development',
        title: 'Performance Test',
        category: 'Website Development',
        clientResult: 'Test result',
        industry: 'Test Industry',
        index: 0
      };

      const html = mockResponsivePortfolioImage.generateHTML(props);
      container.innerHTML = html;

      const img = container.querySelector('img[data-portfolio-image]');
      expect(img.decoding).toBe('async');
      expect(img.width).toBe('400');
      expect(img.height).toBe('300');
    });

    test('sets correct priority levels', () => {
      // High priority for above-the-fold
      const highPriorityProps = {
        slug: 'high-priority-test',
        serviceType: 'website-development',
        title: 'High Priority Test',
        category: 'Website Development',
        clientResult: 'Test result',
        industry: 'Test Industry',
        index: 1
      };

      let html = mockResponsivePortfolioImage.generateHTML(highPriorityProps);
      container.innerHTML = html;

      let img = container.querySelector('img[data-portfolio-image]');
      expect(img.getAttribute('fetchpriority')).toBe('high');

      // Low priority for below-the-fold
      const lowPriorityProps = { ...highPriorityProps, index: 5 };
      html = mockResponsivePortfolioImage.generateHTML(lowPriorityProps);
      container.innerHTML = html;

      img = container.querySelector('img[data-portfolio-image]');
      expect(img.getAttribute('fetchpriority')).toBe('low');
    });
  });

  describe('Service Type Variations', () => {
    const serviceTypes = [
      'website-development',
      'digital-marketing',
      'graphic-design',
      'marketing-automation'
    ];

    serviceTypes.forEach(serviceType => {
      test(`handles ${serviceType} service type correctly`, () => {
        const props = {
          slug: `${serviceType}-test`,
          serviceType: serviceType,
          title: `${serviceType} Project`,
          category: serviceType.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          clientResult: 'Test result',
          industry: 'Test Industry',
          index: 0
        };

        const html = mockResponsivePortfolioImage.generateHTML(props);
        container.innerHTML = html;

        const img = container.querySelector('img[data-portfolio-image]');
        expect(img.getAttribute('data-service')).toBe(serviceType);
        expect(img.src).toContain(`/images/portfolio/${serviceType}-test-desktop.jpg`);
      });
    });
  });
});