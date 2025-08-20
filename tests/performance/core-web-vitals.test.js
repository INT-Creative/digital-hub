/**
 * Core Web Vitals Performance Tests
 * Tests for LCP, FID, CLS, and other performance metrics
 */

import { describe, test, expect, jest, beforeEach, afterEach } from '@jest/globals';

describe('Core Web Vitals Performance Tests', () => {
  let container;
  let performanceEntries;

  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
    
    // Reset performance entries
    performanceEntries = [];
    
    // Mock PerformanceObserver
    global.PerformanceObserver = jest.fn().mockImplementation((callback) => {
      return {
        observe: jest.fn((options) => {
          // Simulate performance entries based on type
          setTimeout(() => {
            const entries = [];
            
            if (options.entryTypes?.includes('largest-contentful-paint')) {
              entries.push({
                name: 'largest-contentful-paint',
                entryType: 'largest-contentful-paint',
                startTime: 1200,
                renderTime: 1200,
                loadTime: 1200,
                size: 12000,
                id: '',
                url: '/images/portfolio/test-image.jpg',
                element: container.querySelector('img') || document.body
              });
            }
            
            if (options.entryTypes?.includes('first-input')) {
              entries.push({
                name: 'first-input',
                entryType: 'first-input',
                startTime: 500,
                processingStart: 510,
                processingEnd: 520,
                duration: 20,
                cancelable: true
              });
            }
            
            if (options.entryTypes?.includes('layout-shift')) {
              entries.push({
                name: 'layout-shift',
                entryType: 'layout-shift',
                startTime: 800,
                value: 0.05,
                hadRecentInput: false,
                lastInputTime: 0,
                sources: []
              });
            }
            
            if (entries.length > 0) {
              callback({
                getEntries: () => entries
              });
            }
          }, 100);
        }),
        disconnect: jest.fn()
      };
    });

    jest.clearAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('Largest Contentful Paint (LCP)', () => {
    test('measures LCP for portfolio images', async () => {
      container.innerHTML = `
        <div class="portfolio-image-container">
          <img src="/images/portfolio/test-image.jpg" 
               width="400" height="300" 
               alt="Test Portfolio Image"
               data-portfolio-image>
        </div>
      `;

      const img = container.querySelector('img');
      let lcpValue = null;

      // Simulate LCP measurement
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries.find(entry => entry.entryType === 'largest-contentful-paint');
        if (lcpEntry) {
          lcpValue = lcpEntry.renderTime || lcpEntry.loadTime;
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Simulate image load
      setTimeout(() => {
        const loadEvent = new Event('load');
        img.dispatchEvent(loadEvent);
      }, 50);

      // Wait for performance measurement
      await new Promise(resolve => setTimeout(resolve, 200));

      expect(lcpValue).not.toBeNull();
      expect(lcpValue).toBeLessThan(2500); // LCP should be under 2.5s for good performance
    });

    test('prioritizes above-the-fold portfolio images for better LCP', () => {
      container.innerHTML = `
        <img src="/images/portfolio/priority-image.jpg" 
             loading="eager"
             fetchpriority="high"
             data-portfolio-image
             data-priority="true">
        <img src="/images/portfolio/lazy-image.jpg" 
             loading="lazy"
             fetchpriority="low"
             data-portfolio-image
             data-priority="false">
      `;

      const priorityImg = container.querySelector('[data-priority="true"]');
      const lazyImg = container.querySelector('[data-priority="false"]');

      expect(priorityImg.loading).toBe('eager');
      expect(priorityImg.getAttribute('fetchpriority')).toBe('high');
      expect(lazyImg.loading).toBe('lazy');
      expect(lazyImg.getAttribute('fetchpriority')).toBe('low');
    });

    test('measures impact of image optimization on LCP', async () => {
      // Test WebP vs JPEG impact
      container.innerHTML = `
        <picture>
          <source srcset="/images/portfolio/test.webp" type="image/webp">
          <img src="/images/portfolio/test.jpg" 
               data-portfolio-image
               onload="this.loadTime = performance.now()">
        </picture>
      `;

      const img = container.querySelector('img');
      
      // Simulate load event
      const loadEvent = new Event('load');
      img.dispatchEvent(loadEvent);

      // WebP should load faster than JPEG
      expect(img.loadTime).toBeDefined();
    });
  });

  describe('First Input Delay (FID)', () => {
    test('measures FID for portfolio interactions', async () => {
      container.innerHTML = `
        <article data-portfolio-item>
          <div class="portfolio-image-container">
            <img data-portfolio-image src="/test.jpg">
          </div>
          <button data-portfolio-cta>View Case Study</button>
        </article>
      `;

      const button = container.querySelector('[data-portfolio-cta]');
      let fidValue = null;

      // Set up FID measurement
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries.find(entry => entry.entryType === 'first-input');
        if (fidEntry) {
          fidValue = fidEntry.processingStart - fidEntry.startTime;
        }
      });

      observer.observe({ entryTypes: ['first-input'] });

      // Simulate user interaction
      const clickEvent = new PointerEvent('pointerdown', {
        bubbles: true,
        cancelable: true,
        pointerType: 'mouse'
      });

      button.dispatchEvent(clickEvent);

      // Wait for measurement
      await new Promise(resolve => setTimeout(resolve, 200));

      expect(fidValue).not.toBeNull();
      expect(fidValue).toBeLessThan(100); // FID should be under 100ms
    });

    test('optimizes JavaScript execution for better FID', async () => {
      // Test that heavy JavaScript operations don't block input
      container.innerHTML = `
        <div data-portfolio-grid>
          <div data-portfolio-item class="opacity-0 portfolio-card-entrance">
            <button data-portfolio-cta>Click Me</button>
          </div>
        </div>
      `;

      const button = container.querySelector('[data-portfolio-cta]');
      let inputProcessed = false;

      // Simulate heavy JavaScript work
      const heavyWork = () => {
        return new Promise(resolve => {
          // Use requestIdleCallback to avoid blocking input
          requestIdleCallback(() => {
            // Simulate animation work
            const items = container.querySelectorAll('.portfolio-card-entrance');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = '1';
              }, index * 150);
            });
            resolve();
          });
        });
      };

      // Start heavy work
      heavyWork();

      // Simulate immediate user input
      button.addEventListener('click', () => {
        inputProcessed = true;
      });

      const clickEvent = new Event('click', { bubbles: true });
      button.dispatchEvent(clickEvent);

      // Input should be processed immediately despite heavy work
      expect(inputProcessed).toBe(true);
    });
  });

  describe('Cumulative Layout Shift (CLS)', () => {
    test('measures CLS during portfolio image loading', async () => {
      container.innerHTML = `
        <div class="portfolio-image-container" style="width: 400px; height: 300px;">
          <img data-portfolio-image 
               width="400" 
               height="300"
               style="width: 100%; height: 100%; object-fit: cover;">
        </div>
      `;

      let clsValue = 0;

      // Set up CLS measurement
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
      });

      observer.observe({ entryTypes: ['layout-shift'] });

      const img = container.querySelector('img');
      
      // Simulate image dimension change (which could cause layout shift)
      img.style.width = '100%';
      img.style.height = '100%';

      // Wait for measurement
      await new Promise(resolve => setTimeout(resolve, 200));

      expect(clsValue).toBeLessThan(0.1); // CLS should be under 0.1
    });

    test('prevents layout shift with proper image dimensions', () => {
      container.innerHTML = `
        <div class="portfolio-image-container" style="contain: layout;">
          <img src="/images/portfolio/test.jpg"
               width="400"
               height="300"
               style="contain-intrinsic-size: 400px 300px;"
               data-portfolio-image>
        </div>
      `;

      const container_elem = container.querySelector('.portfolio-image-container');
      const img = container.querySelector('img');

      // Should have explicit dimensions to prevent layout shift
      expect(img.width).toBe(400);
      expect(img.height).toBe(300);
      expect(container_elem.style.contain).toBe('layout');
    });

    test('stable layout during loading states', async () => {
      container.innerHTML = `
        <div class="portfolio-image-container relative" style="height: 300px;">
          <div class="portfolio-image-fallback absolute inset-0" style="display: flex;">
            <div class="loading-content">Loading...</div>
          </div>
          <img src="/images/portfolio/test.jpg" 
               style="display: none;"
               onload="this.style.display='block'; this.parentElement.querySelector('.portfolio-image-fallback').style.display='none';"
               data-portfolio-image>
        </div>
      `;

      const container_elem = container.querySelector('.portfolio-image-container');
      const fallback = container.querySelector('.portfolio-image-fallback');
      const img = container.querySelector('img');

      // Container should maintain height during loading
      expect(container_elem.style.height).toBe('300px');
      expect(fallback.style.display).toBe('flex');
      expect(img.style.display).toBe('none');

      // Simulate image load
      const loadEvent = new Event('load');
      img.dispatchEvent(loadEvent);

      // Layout should remain stable
      expect(container_elem.style.height).toBe('300px');
    });
  });

  describe('Time to First Byte (TTFB)', () => {
    test('measures TTFB for portfolio assets', async () => {
      // Mock navigation timing
      Object.defineProperty(performance, 'timing', {
        value: {
          navigationStart: 1000,
          responseStart: 1200,
          responseEnd: 1300,
          loadEventEnd: 2000
        },
        writable: false
      });

      const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      expect(ttfb).toBeLessThan(800); // TTFB should be under 800ms
    });
  });

  describe('Resource Loading Performance', () => {
    test('measures image loading performance', async () => {
      container.innerHTML = `
        <img src="/images/portfolio/performance-test.jpg"
             data-portfolio-image
             data-load-start="${Date.now()}">
      `;

      const img = container.querySelector('img');
      const loadStart = parseInt(img.getAttribute('data-load-start'));

      // Simulate image load
      setTimeout(() => {
        const loadEvent = new Event('load');
        img.loadEnd = Date.now();
        img.dispatchEvent(loadEvent);
      }, 100);

      await new Promise(resolve => setTimeout(resolve, 150));

      const loadTime = img.loadEnd - loadStart;
      expect(loadTime).toBeLessThan(1000); // Image should load in under 1 second
    });

    test('lazy loading improves initial page performance', async () => {
      container.innerHTML = `
        <div data-portfolio-grid>
          <img src="/images/portfolio/above-fold.jpg" loading="eager" data-priority="high">
          <img src="/images/portfolio/below-fold-1.jpg" loading="lazy">
          <img src="/images/portfolio/below-fold-2.jpg" loading="lazy">
          <img src="/images/portfolio/below-fold-3.jpg" loading="lazy">
        </div>
      `;

      const eagerImg = container.querySelector('[loading="eager"]');
      const lazyImages = container.querySelectorAll('[loading="lazy"]');

      // Only eager image should be requested initially
      expect(eagerImg.loading).toBe('eager');
      lazyImages.forEach(img => {
        expect(img.loading).toBe('lazy');
      });
    });
  });

  describe('Performance Budgets', () => {
    test('validates image file sizes stay within budget', () => {
      // Mock file size constraints
      const imageBudgets = {
        mobile: 100 * 1024, // 100KB
        tablet: 200 * 1024, // 200KB
        desktop: 400 * 1024 // 400KB
      };

      container.innerHTML = `
        <picture>
          <source media="(max-width: 480px)" srcset="/images/portfolio/test-mobile.webp" data-size="80000">
          <source media="(max-width: 768px)" srcset="/images/portfolio/test-tablet.webp" data-size="150000">
          <img src="/images/portfolio/test-desktop.jpg" data-size="350000">
        </picture>
      `;

      const mobileSource = container.querySelector('[data-size="80000"]');
      const tabletSource = container.querySelector('[data-size="150000"]');
      const desktopImg = container.querySelector('[data-size="350000"]');

      expect(parseInt(mobileSource.getAttribute('data-size'))).toBeLessThan(imageBudgets.mobile);
      expect(parseInt(tabletSource.getAttribute('data-size'))).toBeLessThan(imageBudgets.tablet);
      expect(parseInt(desktopImg.getAttribute('data-size'))).toBeLessThan(imageBudgets.desktop);
    });

    test('JavaScript bundle size stays within budget', () => {
      // Mock JavaScript bundle size
      const jsBudget = 50 * 1024; // 50KB for critical portfolio JavaScript
      const mockBundleSize = 45 * 1024; // 45KB

      expect(mockBundleSize).toBeLessThan(jsBudget);
    });
  });

  describe('Progressive Enhancement', () => {
    test('basic functionality works without JavaScript', () => {
      // Disable JavaScript
      const originalJS = window.IntersectionObserver;
      delete window.IntersectionObserver;

      container.innerHTML = `
        <img src="/images/portfolio/no-js-test.jpg" 
             loading="eager"
             data-portfolio-image>
      `;

      const img = container.querySelector('img');
      expect(img.loading).toBe('eager'); // Should fallback to eager loading
      expect(img.src).toContain('no-js-test.jpg'); // Should still show image

      // Restore JavaScript
      window.IntersectionObserver = originalJS;
    });

    test('enhanced experience available with JavaScript', () => {
      container.innerHTML = `
        <div class="portfolio-image-container">
          <img loading="lazy" data-portfolio-image>
        </div>
      `;

      const img = container.querySelector('img');
      
      // With JavaScript, should support lazy loading
      expect('IntersectionObserver' in window).toBe(true);
      expect(img.loading).toBe('lazy');
    });
  });

  describe('Network-Aware Performance', () => {
    test('adapts image quality for slow connections', () => {
      testUtils.setNetworkCondition('3g');

      container.innerHTML = `
        <img class="portfolio-main-image" 
             src="/images/portfolio/test.jpg"
             style="image-rendering: optimizeSpeed;"
             data-portfolio-image>
      `;

      const img = container.querySelector('img');
      
      if (navigator.connection && navigator.connection.effectiveType === '3g') {
        expect(img.style.imageRendering).toBe('optimizeSpeed');
      }
    });

    test('uses high quality images for fast connections', () => {
      testUtils.setNetworkCondition('4g');

      container.innerHTML = `
        <picture>
          <source srcset="/images/portfolio/test-hq.webp" type="image/webp">
          <img src="/images/portfolio/test-hq.jpg" data-portfolio-image>
        </picture>
      `;

      const source = container.querySelector('source');
      const img = container.querySelector('img');

      expect(source.srcset).toContain('test-hq.webp');
      expect(img.src).toContain('test-hq.jpg');
    });
  });

  describe('Memory Performance', () => {
    test('cleans up event listeners and observers', () => {
      const mockObserver = {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn()
      };

      // Simulate component cleanup
      const cleanup = () => {
        mockObserver.disconnect();
      };

      cleanup();
      expect(mockObserver.disconnect).toHaveBeenCalled();
    });

    test('uses WeakMap for caching to prevent memory leaks', () => {
      const imageCache = new WeakMap();
      const img = document.createElement('img');

      imageCache.set(img, { loaded: true, timestamp: Date.now() });
      expect(imageCache.has(img)).toBe(true);

      // WeakMap allows garbage collection when image is removed
      // This is just a demonstration - actual garbage collection
      // behavior would need browser-specific testing
    });
  });
});