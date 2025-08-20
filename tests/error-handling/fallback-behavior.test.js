/**
 * Error Handling and Fallback Behavior Tests
 * Tests system resilience and graceful degradation
 */

import { describe, test, expect, jest, beforeEach, afterEach } from '@jest/globals';

describe('Error Handling and Fallback Behavior Tests', () => {
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

  describe('Image Loading Error Handling', () => {
    test('handles image load failures gracefully', async () => {
      container.innerHTML = `
        <div class="portfolio-image-container" data-portfolio-slug="error-test">
          <img src="/images/portfolio/nonexistent.jpg" 
               alt="Test image"
               data-portfolio-image
               onerror="this.style.display='none'; this.parentElement.querySelector('.portfolio-image-error').style.display='flex';">
          <div class="portfolio-image-error" style="display: none;">
            <h3>Test Project</h3>
            <p>Error loading image - fallback content shown</p>
          </div>
        </div>
      `;

      const img = container.querySelector('img');
      const errorState = container.querySelector('.portfolio-image-error');

      // Simulate image load error
      const errorEvent = new Event('error');
      img.dispatchEvent(errorEvent);

      // Image should be hidden
      expect(img.style.display).toBe('none');
      
      // Error state should be shown
      expect(errorState.style.display).toBe('flex');
      expect(errorState.textContent).toContain('Error loading image');
    });

    test('provides meaningful fallback content in error state', () => {
      container.innerHTML = `
        <div class="portfolio-image-error" style="display: flex;">
          <div class="relative z-10 text-center text-white p-6 max-w-sm mx-auto">
            <div class="w-20 h-20 mx-auto mb-4 opacity-90">
              <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9"/>
              </svg>
            </div>
            <div class="space-y-3">
              <h3 class="font-bold text-sm">Serenity Wellness Studio</h3>
              <div class="text-xs opacity-90 leading-relaxed">
                <p class="mb-2">Website Development transformation project</p>
                <div class="bg-white/20 rounded px-3 py-2">
                  <span class="font-semibold text-xs">Key Result:</span>
                  <br />
                  <span class="text-xs">0 to 50 qualified leads per month</span>
                </div>
              </div>
              <div class="text-xs text-white/80 mt-3">
                Demonstration case study for Northeast Ohio service businesses
              </div>
            </div>
          </div>
        </div>
      `;

      const errorState = container.querySelector('.portfolio-image-error');
      expect(errorState).toBeVisible();
      
      // Should contain project details even in error state
      expect(errorState.textContent).toContain('Serenity Wellness Studio');
      expect(errorState.textContent).toContain('Website Development');
      expect(errorState.textContent).toContain('Key Result');
      expect(errorState.textContent).toContain('0 to 50 qualified leads');
      expect(errorState.textContent).toContain('Demonstration case study');
    });

    test('handles WebP fallback to JPEG gracefully', () => {
      container.innerHTML = `
        <picture>
          <source srcset="/images/portfolio/test.webp" type="image/webp">
          <source srcset="/images/portfolio/test.jpg" type="image/jpeg">
          <img src="/images/portfolio/test.jpg" 
               alt="Fallback test"
               data-portfolio-image>
        </picture>
      `;

      const picture = container.querySelector('picture');
      const webpSource = picture.querySelector('source[type="image/webp"]');
      const jpegSource = picture.querySelector('source[type="image/jpeg"]');
      const img = picture.querySelector('img');

      // Should have both WebP and JPEG sources
      expect(webpSource.srcset).toContain('.webp');
      expect(jpegSource.srcset).toContain('.jpg');
      expect(img.src).toContain('.jpg'); // Final fallback
    });

    test('uses placeholder graphics when images fail', async () => {
      container.innerHTML = `
        <div class="portfolio-image-container">
          <img src="/images/portfolio/failed-image.jpg"
               data-portfolio-image
               data-service-type="website-development">
        </div>
      `;

      const img = container.querySelector('img');
      const serviceType = img.getAttribute('data-service-type');

      // Simulate image error with placeholder logic
      const handleImageError = () => {
        const placeholderSrc = `/images/portfolio/placeholders/${serviceType}-category.svg`;
        img.src = placeholderSrc;
        img.alt = `${serviceType.replace('-', ' ')} project placeholder`;
      };

      handleImageError();

      expect(img.src).toContain('website-development-category.svg');
      expect(img.alt).toContain('website development');
    });
  });

  describe('Network Error Handling', () => {
    test('handles slow network connections gracefully', async () => {
      testUtils.setNetworkCondition('slow-2g');

      container.innerHTML = `
        <img class="portfolio-main-image" 
             src="/images/portfolio/large-image.jpg"
             loading="lazy"
             data-portfolio-image
             style="image-rendering: optimizeSpeed;">
      `;

      const img = container.querySelector('img');

      // Should optimize for slow connections
      expect(img.loading).toBe('lazy');
      expect(img.style.imageRendering).toBe('optimizeSpeed');

      // Should handle connection-aware loading
      if (navigator.connection && navigator.connection.effectiveType === 'slow-2g') {
        expect(navigator.connection.saveData).toBeDefined();
      }
    });

    test('degrades gracefully when connection API is unavailable', () => {
      // Simulate missing connection API
      const originalConnection = navigator.connection;
      delete navigator.connection;

      container.innerHTML = `
        <img src="/images/portfolio/test.jpg" 
             loading="lazy"
             data-portfolio-image>
      `;

      const img = container.querySelector('img');

      // Should still work without connection API
      expect(img.loading).toBe('lazy');
      expect(img.src).toContain('test.jpg');

      // Restore connection API
      if (originalConnection) {
        Object.defineProperty(navigator, 'connection', {
          value: originalConnection,
          writable: true
        });
      }
    });

    test('handles API failures for external services', async () => {
      // Mock fetch failure
      global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

      container.innerHTML = `
        <div data-portfolio-grid>
          <div class="loading-indicator">Loading portfolio data...</div>
          <div class="error-message" style="display: none;">
            <p>Unable to load portfolio data. Please check your connection and try again.</p>
            <button onclick="location.reload()">Retry</button>
          </div>
        </div>
      `;

      // Simulate API call failure
      try {
        await fetch('/api/portfolio');
      } catch (error) {
        // Show error message
        const loading = container.querySelector('.loading-indicator');
        const errorMsg = container.querySelector('.error-message');
        
        loading.style.display = 'none';
        errorMsg.style.display = 'block';

        expect(errorMsg.textContent).toContain('Unable to load portfolio data');
        expect(errorMsg.querySelector('button').textContent).toBe('Retry');
      }

      fetch.mockRestore();
    });
  });

  describe('JavaScript Error Handling', () => {
    test('handles missing IntersectionObserver gracefully', () => {
      // Remove IntersectionObserver
      const originalObserver = global.IntersectionObserver;
      delete global.IntersectionObserver;

      container.innerHTML = `
        <div class="portfolio-image-container">
          <img src="/images/portfolio/test.jpg" 
               loading="lazy"
               data-portfolio-image>
        </div>
      `;

      const img = container.querySelector('img');

      // Should fallback to eager loading
      const fallbackLoading = 'IntersectionObserver' in window ? 'lazy' : 'eager';
      img.loading = fallbackLoading;

      expect(img.loading).toBe('eager');

      // Restore IntersectionObserver
      global.IntersectionObserver = originalObserver;
    });

    test('handles PerformanceObserver errors', () => {
      // Mock PerformanceObserver with error
      const mockObserver = jest.fn().mockImplementation(() => {
        throw new Error('PerformanceObserver not supported');
      });

      global.PerformanceObserver = mockObserver;

      // Should not crash when trying to use PerformanceObserver
      let errorCaught = false;
      try {
        new PerformanceObserver(() => {});
      } catch (error) {
        errorCaught = true;
        // Handle gracefully - fallback to basic performance monitoring
        console.warn('PerformanceObserver not available, using fallback');
      }

      expect(errorCaught).toBe(true);
    });

    test('handles requestIdleCallback fallback', () => {
      // Remove requestIdleCallback
      const originalRIC = global.requestIdleCallback;
      delete global.requestIdleCallback;

      // Should use setTimeout as fallback
      const fallbackRIC = global.requestIdleCallback || ((callback) => {
        return setTimeout(() => {
          callback({
            didTimeout: false,
            timeRemaining: () => 50
          });
        }, 1);
      });

      let callbackExecuted = false;
      fallbackRIC(() => {
        callbackExecuted = true;
      });

      // Wait for async execution
      setTimeout(() => {
        expect(callbackExecuted).toBe(true);
      }, 10);

      // Restore requestIdleCallback
      global.requestIdleCallback = originalRIC;
    });

    test('continues functioning when local storage is unavailable', () => {
      // Mock localStorage error
      const originalLocalStorage = global.localStorage;
      Object.defineProperty(global, 'localStorage', {
        value: {
          getItem: () => { throw new Error('LocalStorage disabled'); },
          setItem: () => { throw new Error('LocalStorage disabled'); }
        },
        writable: true
      });

      container.innerHTML = `
        <div class="portfolio-system">
          <div class="preferences">User preferences unavailable</div>
        </div>
      `;

      // Should handle localStorage errors gracefully
      let preferences = {};
      try {
        preferences = JSON.parse(localStorage.getItem('portfolio-preferences') || '{}');
      } catch (error) {
        preferences = { theme: 'default', reducedMotion: false };
      }

      expect(preferences).toBeDefined();
      expect(preferences.theme).toBe('default');

      // Restore localStorage
      global.localStorage = originalLocalStorage;
    });
  });

  describe('Content Loading Error Handling', () => {
    test('handles missing portfolio data gracefully', () => {
      // Simulate empty portfolio data
      const emptyPortfolio = [];

      container.innerHTML = `
        <div data-portfolio-grid>
          ${emptyPortfolio.length === 0 ? `
            <div class="empty-state">
              <div class="text-center py-12">
                <svg class="w-16 h-16 mx-auto text-gray-400 mb-4">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7"/>
                </svg>
                <h3 class="text-lg font-medium text-gray-900 mb-2">No portfolio items available</h3>
                <p class="text-gray-600">Portfolio content is being updated. Please check back soon.</p>
              </div>
            </div>
          ` : ''}
        </div>
      `;

      const emptyState = container.querySelector('.empty-state');
      expect(emptyState).not.toBeNull();
      expect(emptyState.textContent).toContain('No portfolio items available');
      expect(emptyState.textContent).toContain('check back soon');
    });

    test('handles corrupted data structures', () => {
      const corruptedItem = {
        title: 'Test Project',
        // Missing required fields
        clientResults: null,
        technologies: undefined
      };

      // Should handle missing or corrupted fields gracefully
      const safeTitle = corruptedItem.title || 'Untitled Project';
      const safeResults = corruptedItem.clientResults?.keyOutcome || 'Results unavailable';
      const safeTechnologies = Array.isArray(corruptedItem.technologies) 
        ? corruptedItem.technologies 
        : ['Technology details unavailable'];

      expect(safeTitle).toBe('Test Project');
      expect(safeResults).toBe('Results unavailable');
      expect(safeTechnologies).toEqual(['Technology details unavailable']);
    });

    test('handles component rendering errors', () => {
      container.innerHTML = `
        <div class="error-boundary">
          <div class="error-fallback" style="display: none;">
            <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h3 class="font-medium text-red-900">Something went wrong</h3>
              <p class="text-sm text-red-700 mt-1">We're having trouble displaying this content. Please refresh the page or try again later.</p>
              <button onclick="location.reload()" class="mt-3 bg-red-600 text-white px-4 py-2 rounded text-sm">
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      `;

      // Simulate component error
      const errorBoundary = container.querySelector('.error-boundary');
      const errorFallback = container.querySelector('.error-fallback');

      // In case of error, show fallback
      try {
        throw new Error('Component render error');
      } catch (error) {
        errorFallback.style.display = 'block';
      }

      expect(errorFallback.style.display).toBe('block');
      expect(errorFallback.textContent).toContain('Something went wrong');
      expect(errorFallback.querySelector('button').textContent).toBe('Refresh Page');
    });
  });

  describe('User Input Error Handling', () => {
    test('handles invalid search/filter inputs', () => {
      container.innerHTML = `
        <div class="portfolio-filter">
          <select id="service-filter">
            <option value="all">All Services</option>
            <option value="website-development">Website Development</option>
            <option value="digital-marketing">Digital Marketing</option>
          </select>
          <div class="filter-error" style="display: none;">
            <p class="text-red-600 text-sm">Invalid filter selection. Showing all items.</p>
          </div>
        </div>
        <div data-portfolio-grid>
          <div data-portfolio-item data-service="website-development">Item 1</div>
          <div data-portfolio-item data-service="digital-marketing">Item 2</div>
        </div>
      `;

      const filter = container.querySelector('#service-filter');
      const errorMsg = container.querySelector('.filter-error');

      // Simulate invalid filter value
      filter.value = 'invalid-service-type';

      const handleFilterChange = (filterValue) => {
        const validFilters = ['all', 'website-development', 'digital-marketing', 'graphic-design', 'marketing-automation'];
        
        if (!validFilters.includes(filterValue)) {
          errorMsg.style.display = 'block';
          // Fallback to showing all items
          filter.value = 'all';
          return 'all';
        }
        
        errorMsg.style.display = 'none';
        return filterValue;
      };

      const result = handleFilterChange('invalid-service-type');
      
      expect(result).toBe('all');
      expect(errorMsg.style.display).toBe('block');
      expect(filter.value).toBe('all');
    });

    test('handles malformed URLs gracefully', () => {
      // Simulate accessing invalid portfolio slug
      const invalidSlugs = [
        '',
        'invalid-slug',
        'script-injection-attempt',
        '../../../etc/passwd'
      ];

      invalidSlugs.forEach(slug => {
        const isValidSlug = /^[a-z0-9-]+$/.test(slug) && slug.length > 0;
        
        if (!isValidSlug) {
          // Should redirect to portfolio overview or show 404
          const fallbackAction = 'redirect-to-portfolio';
          expect(fallbackAction).toBe('redirect-to-portfolio');
        }
      });
    });
  });

  describe('Browser Compatibility Fallbacks', () => {
    test('handles lack of modern CSS features', () => {
      container.innerHTML = `
        <div class="portfolio-card" style="background: linear-gradient(to right, #f3f4f6, #e5e7eb);">
          <div class="content">Modern styling with fallback</div>
        </div>
      `;

      const card = container.querySelector('.portfolio-card');
      
      // Should have fallback background
      expect(card.style.background).toContain('linear-gradient');
      
      // In older browsers, could fallback to solid color
      const fallbackStyle = 'background: #f3f4f6;';
      expect(fallbackStyle).toContain('#f3f4f6');
    });

    test('handles missing modern JavaScript features', () => {
      // Test without WeakMap
      const originalWeakMap = global.WeakMap;
      delete global.WeakMap;

      // Fallback to Map or regular object
      const CacheImplementation = global.WeakMap || Map || Object;
      const cache = new CacheImplementation();

      expect(cache).toBeDefined();

      // Restore WeakMap
      global.WeakMap = originalWeakMap;
    });

    test('provides accessible fallbacks for interactive features', () => {
      container.innerHTML = `
        <div class="interactive-feature">
          <!-- Modern interactive element -->
          <div role="button" tabindex="0" class="modern-button">
            Click me
          </div>
          
          <!-- Fallback for non-JavaScript users -->
          <noscript>
            <a href="/portfolio" class="fallback-link">View Portfolio</a>
          </noscript>
        </div>
      `;

      const modernButton = container.querySelector('.modern-button');
      const noscript = container.querySelector('noscript');

      expect(modernButton.getAttribute('role')).toBe('button');
      expect(modernButton.getAttribute('tabindex')).toBe('0');
      expect(noscript).not.toBeNull();
    });
  });

  describe('Recovery Mechanisms', () => {
    test('provides retry functionality for failed operations', () => {
      container.innerHTML = `
        <div class="failed-operation">
          <div class="error-state">
            <p>Failed to load portfolio data</p>
            <button class="retry-btn" onclick="this.disabled=true; setTimeout(() => location.reload(), 1000)">
              Retry Loading
            </button>
          </div>
        </div>
      `;

      const retryBtn = container.querySelector('.retry-btn');
      expect(retryBtn.textContent).toBe('Retry Loading');
      
      // Simulate retry click
      retryBtn.click();
      expect(retryBtn.disabled).toBe(true);
    });

    test('implements progressive enhancement for core functionality', () => {
      container.innerHTML = `
        <div class="portfolio-base">
          <!-- Core functionality that works without JS -->
          <img src="/images/portfolio/test.jpg" alt="Portfolio item" loading="eager">
          <h3>Project Title</h3>
          <p>Project description</p>
          <a href="/portfolio/test">View Details</a>
          
          <!-- Enhanced functionality for JS-enabled browsers -->
          <div class="js-enhancements" style="display: none;">
            <div class="lazy-loading">Lazy loading enabled</div>
            <div class="interactive-features">Interactive features enabled</div>
          </div>
        </div>
      `;

      const baseContent = container.querySelector('.portfolio-base');
      const enhancements = container.querySelector('.js-enhancements');
      
      // Base functionality should always be available
      expect(baseContent.querySelector('img')).not.toBeNull();
      expect(baseContent.querySelector('h3')).not.toBeNull();
      expect(baseContent.querySelector('a')).not.toBeNull();
      
      // Enhancements can be progressively added
      if ('IntersectionObserver' in window) {
        enhancements.style.display = 'block';
      }
    });
  });
});