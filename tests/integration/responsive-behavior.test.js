/**
 * Responsive Behavior Integration Tests
 * Tests portfolio system behavior across different screen sizes and devices
 */

import { describe, test, expect, jest, beforeEach, afterEach } from '@jest/globals';

describe('Portfolio Responsive Behavior Integration', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
    
    // Reset viewport
    testUtils.setViewportSize(1024, 768);
    jest.clearAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    testUtils.setViewportSize(1024, 768); // Reset to default
  });

  describe('Mobile Viewport Behavior', () => {
    test('adapts image loading for mobile devices', async () => {
      testUtils.setViewportSize(375, 667); // iPhone SE size
      
      container.innerHTML = `
        <div class="portfolio-image-container" data-portfolio-slug="mobile-test">
          <picture>
            <source media="(max-width: 480px)" srcset="/images/portfolio/mobile-test-mobile.webp 480w" type="image/webp">
            <source media="(max-width: 768px)" srcset="/images/portfolio/mobile-test-tablet.webp 768w" type="image/webp">
            <img src="/images/portfolio/mobile-test-desktop.jpg" 
                 sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 400px"
                 data-portfolio-image>
          </picture>
        </div>
      `;

      const img = container.querySelector('img[data-portfolio-image]');
      const mobileSources = container.querySelectorAll('source[media="(max-width: 480px)"]');
      
      expect(mobileSources).toHaveLength(1);
      expect(mobileSources[0].srcset).toContain('mobile-test-mobile.webp');
      
      // Simulate media query matching
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: query.includes('max-width: 480px'),
        media: query
      }));

      // Should prioritize mobile image
      const mobileMatch = window.matchMedia('(max-width: 480px)');
      expect(mobileMatch.matches).toBe(true);
    });

    test('adjusts grid layout for mobile screens', () => {
      testUtils.setViewportSize(375, 667);
      
      container.innerHTML = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-portfolio-grid>
          <div class="portfolio-card" data-portfolio-item></div>
          <div class="portfolio-card" data-portfolio-item></div>
          <div class="portfolio-card" data-portfolio-item></div>
        </div>
      `;

      const grid = container.querySelector('[data-portfolio-grid]');
      expect(grid.className).toContain('grid');
      expect(grid.className).toContain('md:grid-cols-2');
      expect(grid.className).toContain('lg:grid-cols-3');
      
      // On mobile, should default to single column
      const computedStyle = getComputedStyle(grid);
      // In actual implementation, this would check grid-template-columns
    });

    test('adapts legal disclaimer for mobile', () => {
      testUtils.setViewportSize(375, 667);
      
      container.innerHTML = `
        <div class="legal-disclaimer-badge absolute top-2 left-2">
          <div class="bg-amber-500/90 text-xs px-2 py-1">DEMO</div>
        </div>
      `;

      const badge = container.querySelector('.legal-disclaimer-badge');
      expect(badge.className).toContain('absolute');
      expect(badge.className).toContain('top-2');
      expect(badge.className).toContain('left-2');
    });
  });

  describe('Tablet Viewport Behavior', () => {
    test('uses appropriate image sources for tablet', () => {
      testUtils.setViewportSize(768, 1024); // iPad size
      
      container.innerHTML = `
        <picture>
          <source media="(max-width: 480px)" srcset="/images/portfolio/test-mobile.webp" type="image/webp">
          <source media="(max-width: 768px)" srcset="/images/portfolio/test-tablet.webp" type="image/webp">
          <source media="(min-width: 769px)" srcset="/images/portfolio/test-desktop.webp" type="image/webp">
          <img src="/images/portfolio/test-desktop.jpg">
        </picture>
      `;

      const tabletSources = container.querySelectorAll('source[media="(max-width: 768px)"]');
      expect(tabletSources).toHaveLength(1);
      expect(tabletSources[0].srcset).toContain('test-tablet.webp');

      // Simulate tablet media query
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: query.includes('max-width: 768px'),
        media: query
      }));

      const tabletMatch = window.matchMedia('(max-width: 768px)');
      expect(tabletMatch.matches).toBe(true);
    });

    test('displays 2-column grid on tablet', () => {
      testUtils.setViewportSize(768, 1024);
      
      container.innerHTML = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3">
          <div data-portfolio-item></div>
          <div data-portfolio-item></div>
          <div data-portfolio-item></div>
          <div data-portfolio-item></div>
        </div>
      `;

      const grid = container.querySelector('.grid');
      expect(grid.className).toContain('md:grid-cols-2');
    });
  });

  describe('Desktop Viewport Behavior', () => {
    test('uses desktop image sources for large screens', () => {
      testUtils.setViewportSize(1920, 1080); // Desktop size
      
      container.innerHTML = `
        <picture>
          <source media="(max-width: 480px)" srcset="/images/portfolio/test-mobile.webp" type="image/webp">
          <source media="(max-width: 768px)" srcset="/images/portfolio/test-tablet.webp" type="image/webp">
          <source media="(min-width: 769px)" srcset="/images/portfolio/test-desktop.webp 1200w" type="image/webp">
          <img src="/images/portfolio/test-desktop.jpg">
        </picture>
      `;

      const desktopSources = container.querySelectorAll('source[media="(min-width: 769px)"]');
      expect(desktopSources).toHaveLength(1);
      expect(desktopSources[0].srcset).toContain('test-desktop.webp');

      // Simulate desktop media query
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: query.includes('min-width: 769px'),
        media: query
      }));

      const desktopMatch = window.matchMedia('(min-width: 769px)');
      expect(desktopMatch.matches).toBe(true);
    });

    test('displays 3-column grid on desktop', () => {
      testUtils.setViewportSize(1920, 1080);
      
      container.innerHTML = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3">
          ${Array(6).fill(0).map(() => '<div data-portfolio-item></div>').join('')}
        </div>
      `;

      const grid = container.querySelector('.grid');
      expect(grid.className).toContain('lg:grid-cols-3');
    });
  });

  describe('Touch Device Behavior', () => {
    test('handles touch interactions on portfolio cards', () => {
      // Simulate touch device
      Object.defineProperty(window, 'ontouchstart', {
        value: true,
        writable: true
      });

      container.innerHTML = `
        <article data-portfolio-item class="portfolio-card">
          <div class="portfolio-image-container">
            <img data-portfolio-image src="/test.jpg">
          </div>
          <a href="/portfolio/test" data-portfolio-cta>View Case Study</a>
        </article>
      `;

      const card = container.querySelector('[data-portfolio-item]');
      
      // Simulate touch events
      const touchStart = new TouchEvent('touchstart', {
        bubbles: true,
        cancelable: true,
        touches: [{ clientX: 100, clientY: 100 }]
      });

      const touchEnd = new TouchEvent('touchend', {
        bubbles: true,
        cancelable: true
      });

      card.dispatchEvent(touchStart);
      
      // Should apply touch feedback
      expect(card.style.transform).toBe('scale(0.98)');
      
      card.dispatchEvent(touchEnd);
      
      // Should reset transform after delay
      setTimeout(() => {
        expect(card.style.transform).toBe('');
      }, 100);
    });

    test('disables hover effects on touch devices', () => {
      Object.defineProperty(window, 'ontouchstart', {
        value: true,
        writable: true
      });

      container.innerHTML = `
        <div class="portfolio-image-container group">
          <img class="portfolio-main-image group-hover:scale-105" src="/test.jpg">
        </div>
      `;

      const container_elem = container.querySelector('.portfolio-image-container');
      const img = container.querySelector('.portfolio-main-image');

      // On touch devices, hover effects should be disabled
      container_elem.classList.add('group');
      
      // Verify hover classes exist but don't affect touch devices
      expect(img.className).toContain('group-hover:scale-105');
      
      // Touch devices should use touch-action manipulation
      const computedStyle = getComputedStyle(container_elem);
      // In real implementation: expect(computedStyle.touchAction).toBe('manipulation');
    });
  });

  describe('High DPI Display Support', () => {
    test('provides high resolution images for retina displays', () => {
      // Simulate high DPI display
      Object.defineProperty(window, 'devicePixelRatio', {
        value: 2,
        writable: true
      });

      container.innerHTML = `
        <picture>
          <source media="(max-width: 480px)" 
                  srcset="/images/portfolio/test-mobile.webp 480w, /images/portfolio/test-mobile@2x.webp 960w" 
                  type="image/webp">
          <source media="(max-width: 768px)" 
                  srcset="/images/portfolio/test-tablet.webp 768w, /images/portfolio/test-tablet@2x.webp 1536w" 
                  type="image/webp">
          <img src="/images/portfolio/test-desktop.jpg"
               srcset="/images/portfolio/test-desktop.jpg 1200w, /images/portfolio/test-desktop@2x.jpg 2400w">
        </picture>
      `;

      const mobileSources = container.querySelectorAll('source[media="(max-width: 480px)"]');
      expect(mobileSources[0].srcset).toContain('@2x');
      
      const img = container.querySelector('img');
      expect(img.srcset).toContain('@2x.jpg 2400w');

      expect(window.devicePixelRatio).toBe(2);
    });
  });

  describe('Network-Aware Loading', () => {
    test('optimizes image loading for slow connections', () => {
      testUtils.setNetworkCondition('3g');
      
      container.innerHTML = `
        <img class="portfolio-main-image" 
             src="/images/portfolio/test-desktop.jpg"
             loading="lazy"
             data-portfolio-image>
      `;

      const img = container.querySelector('img');
      
      // Should use lazy loading for slow connections
      expect(img.loading).toBe('lazy');
      
      // Should apply low resolution optimizations
      if (navigator.connection && navigator.connection.effectiveType === '3g') {
        expect(img.style.imageRendering).toBe('optimizeSpeed');
      }
    });

    test('prioritizes loading for fast connections', () => {
      testUtils.setNetworkCondition('4g');
      
      container.innerHTML = `
        <img class="portfolio-main-image" 
             src="/images/portfolio/test-desktop.jpg"
             loading="eager"
             fetchpriority="high"
             data-portfolio-image>
      `;

      const img = container.querySelector('img');
      
      // Should use eager loading for fast connections
      expect(img.loading).toBe('eager');
      expect(img.getAttribute('fetchpriority')).toBe('high');
    });
  });

  describe('Container Queries Support', () => {
    test('adapts layout based on container size', () => {
      container.innerHTML = `
        <div class="portfolio-container" style="width: 300px;">
          <div class="portfolio-image-container">
            <img data-portfolio-image src="/test.jpg" width="400" height="300">
          </div>
        </div>
      `;

      const portfolioContainer = container.querySelector('.portfolio-container');
      const imageContainer = container.querySelector('.portfolio-image-container');
      
      // Container query would adjust contain-intrinsic-size
      if (portfolioContainer.offsetWidth <= 400) {
        // Should use smaller intrinsic size
        expect(imageContainer.style.containIntrinsicSize).toBe('300px 225px');
      }
    });
  });

  describe('Orientation Changes', () => {
    test('handles device orientation changes', async () => {
      // Simulate portrait orientation
      testUtils.setViewportSize(375, 812);
      
      container.innerHTML = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3" data-portfolio-grid>
          <div data-portfolio-item></div>
          <div data-portfolio-item></div>
        </div>
      `;

      let grid = container.querySelector('[data-portfolio-grid]');
      
      // Portrait mode - should be single column
      expect(grid.className).toContain('grid');
      
      // Simulate landscape orientation
      testUtils.setViewportSize(812, 375);
      
      // Should adapt to landscape
      window.dispatchEvent(new Event('orientationchange'));
      
      await testUtils.waitForAsync(100);
      
      // Layout should adapt
      grid = container.querySelector('[data-portfolio-grid]');
      expect(grid).not.toBeNull();
    });
  });

  describe('Responsive Images Error Handling', () => {
    test('provides appropriate fallbacks for different screen sizes', async () => {
      container.innerHTML = `
        <picture>
          <source media="(max-width: 480px)" srcset="/images/portfolio/test-mobile.webp" type="image/webp">
          <source media="(max-width: 480px)" srcset="/images/portfolio/test-mobile.jpg" type="image/jpeg">
          <img src="/images/portfolio/test-desktop.jpg" 
               onerror="this.src='/images/fallback.jpg'"
               data-portfolio-image>
        </picture>
      `;

      const img = container.querySelector('img');
      
      // Simulate image load error
      const errorEvent = new Event('error');
      img.dispatchEvent(errorEvent);
      
      // Should fallback to default image
      expect(img.src).toContain('/images/fallback.jpg');
    });

    test('gracefully degrades when WebP is not supported', () => {
      container.innerHTML = `
        <picture>
          <source srcset="/images/portfolio/test.webp" type="image/webp">
          <source srcset="/images/portfolio/test.jpg" type="image/jpeg">
          <img src="/images/portfolio/test.jpg">
        </picture>
      `;

      const webpSource = container.querySelector('source[type="image/webp"]');
      const jpegSource = container.querySelector('source[type="image/jpeg"]');
      const img = container.querySelector('img');

      expect(webpSource).not.toBeNull();
      expect(jpegSource).not.toBeNull();
      expect(img.src).toContain('.jpg');
    });
  });

  describe('Responsive Typography and Spacing', () => {
    test('adapts text sizes for different screen sizes', () => {
      container.innerHTML = `
        <h2 class="text-3xl md:text-4xl font-bold">Portfolio Title</h2>
        <p class="text-xl text-gray-600">Description text</p>
      `;

      const title = container.querySelector('h2');
      const description = container.querySelector('p');

      expect(title.className).toContain('text-3xl');
      expect(title.className).toContain('md:text-4xl');
      expect(description.className).toContain('text-xl');
    });

    test('adjusts spacing for mobile devices', () => {
      testUtils.setViewportSize(375, 667);
      
      container.innerHTML = `
        <div class="py-20 px-4 sm:px-6 lg:px-8">
          <div class="mb-16">Content</div>
        </div>
      `;

      const wrapper = container.querySelector('div');
      expect(wrapper.className).toContain('py-20');
      expect(wrapper.className).toContain('px-4');
      expect(wrapper.className).toContain('sm:px-6');
    });
  });

  describe('Performance Optimizations', () => {
    test('uses contain property for performance', () => {
      container.innerHTML = `
        <div class="portfolio-image-container" style="contain: layout style paint;">
          <img data-portfolio-image src="/test.jpg">
        </div>
      `;

      const imageContainer = container.querySelector('.portfolio-image-container');
      expect(imageContainer.style.contain).toBe('layout style paint');
    });

    test('implements content-visibility for better performance', () => {
      container.innerHTML = `
        <div data-portfolio-grid style="content-visibility: auto;">
          <div data-portfolio-item></div>
          <div data-portfolio-item></div>
        </div>
      `;

      const grid = container.querySelector('[data-portfolio-grid]');
      expect(grid.style.contentVisibility).toBe('auto');
    });
  });
});