/**
 * End-to-End Portfolio System Tests
 * Cross-browser testing with Playwright
 */

import { test, expect } from '@playwright/test';

test.describe('Portfolio System E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to portfolio page
    await page.goto('/portfolio');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
  });

  test.describe('Portfolio Grid Rendering', () => {
    test('displays portfolio grid with all items', async ({ page }) => {
      // Wait for portfolio grid to load
      await page.waitForSelector('[data-portfolio-grid]');
      
      // Check that portfolio items are present
      const portfolioItems = await page.locator('[data-portfolio-item]').count();
      expect(portfolioItems).toBeGreaterThan(0);
      
      // Verify grid structure
      const grid = page.locator('[data-portfolio-grid]');
      await expect(grid).toBeVisible();
      
      // Check responsive classes
      await expect(grid).toHaveClass(/grid/);
      await expect(grid).toHaveClass(/md:grid-cols-2/);
      await expect(grid).toHaveClass(/lg:grid-cols-3/);
    });

    test('portfolio items have required elements', async ({ page }) => {
      const firstItem = page.locator('[data-portfolio-item]').first();
      
      // Check for image container
      await expect(firstItem.locator('.portfolio-image-container')).toBeVisible();
      
      // Check for title
      await expect(firstItem.locator('h3')).toBeVisible();
      
      // Check for description
      await expect(firstItem.locator('.line-clamp-3')).toBeVisible();
      
      // Check for key result section
      await expect(firstItem.locator('.result-metric')).toBeVisible();
      
      // Check for CTA button
      await expect(firstItem.locator('[data-portfolio-cta]')).toBeVisible();
    });

    test('legal disclaimer is prominently displayed', async ({ page }) => {
      // Check main disclaimer section
      const disclaimer = page.locator('[aria-labelledby="portfolio-disclaimer-title"]');
      await expect(disclaimer).toBeVisible();
      
      // Check disclaimer content
      await expect(disclaimer).toContainText('FICTIONAL');
      await expect(disclaimer).toContainText('demonstration purposes');
      await expect(disclaimer).toContainText('FTC Compliance');
      
      // Check individual portfolio item badges
      const badges = page.locator('.legal-disclaimer-badge');
      const badgeCount = await badges.count();
      expect(badgeCount).toBeGreaterThan(0);
      
      // Check first badge
      const firstBadge = badges.first();
      await expect(firstBadge).toBeVisible();
      await expect(firstBadge).toContainText('DEMO');
    });
  });

  test.describe('Image Loading and Performance', () => {
    test('images load correctly with responsive sources', async ({ page }) => {
      // Wait for first portfolio image to load
      const firstImage = page.locator('[data-portfolio-image]').first();
      await expect(firstImage).toBeVisible();
      
      // Check that image has src attribute
      const src = await firstImage.getAttribute('src');
      expect(src).toBeTruthy();
      expect(src).toContain('/images/portfolio/');
      
      // Check responsive attributes
      const sizes = await firstImage.getAttribute('sizes');
      expect(sizes).toContain('480px');
      expect(sizes).toContain('768px');
      
      // Verify image loads without error
      await page.waitForFunction(() => {
        const img = document.querySelector('[data-portfolio-image]');
        return img && img.complete && img.naturalWidth > 0;
      });
    });

    test('lazy loading works for below-fold images', async ({ page }) => {
      const allImages = page.locator('[data-portfolio-image]');
      const imageCount = await allImages.count();
      
      // Check loading attributes
      for (let i = 0; i < Math.min(imageCount, 6); i++) {
        const img = allImages.nth(i);
        const loading = await img.getAttribute('loading');
        
        if (i < 3) {
          expect(loading).toBe('eager'); // Above-fold images
        } else {
          expect(loading).toBe('lazy'); // Below-fold images
        }
      }
    });

    test('image fallback states work correctly', async ({ page }) => {
      // Test image error handling by intercepting requests
      await page.route('**/images/portfolio/test-error.jpg', route => {
        route.abort('failed');
      });
      
      // Add a test image with error scenario
      await page.evaluate(() => {
        const container = document.querySelector('[data-portfolio-grid]');
        const testItem = document.createElement('div');
        testItem.innerHTML = `
          <div class="portfolio-image-container" data-portfolio-slug="test-error">
            <img src="/images/portfolio/test-error.jpg" 
                 data-portfolio-image
                 onerror="this.style.display='none'; this.parentElement.nextElementSibling.style.display='flex';">
            <div class="portfolio-image-error" style="display: none;">
              <div>Error loading image</div>
            </div>
          </div>
        `;
        if (container) container.appendChild(testItem);
      });
      
      // Wait for error state to trigger
      await page.waitForTimeout(1000);
      
      // Check that error state is displayed
      const errorState = page.locator('.portfolio-image-error');
      await expect(errorState.first()).toBeVisible();
    });
  });

  test.describe('Responsive Design', () => {
    test('adapts layout for mobile viewport', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Wait for layout to adapt
      await page.waitForTimeout(500);
      
      // Check that grid adapts to single column
      const grid = page.locator('[data-portfolio-grid]');
      await expect(grid).toBeVisible();
      
      // Legal disclaimer should be visible
      const disclaimer = page.locator('[role="complementary"]');
      await expect(disclaimer).toBeVisible();
      
      // Portfolio items should be stacked vertically
      const items = page.locator('[data-portfolio-item]');
      const firstItem = items.first();
      const secondItem = items.nth(1);
      
      if (await secondItem.isVisible()) {
        const firstRect = await firstItem.boundingBox();
        const secondRect = await secondItem.boundingBox();
        
        // Second item should be below first item (vertical stacking)
        expect(secondRect.y).toBeGreaterThan(firstRect.y + firstRect.height / 2);
      }
    });

    test('uses tablet layout for medium screens', async ({ page }) => {
      // Set tablet viewport
      await page.setViewportSize({ width: 768, height: 1024 });
      
      await page.waitForTimeout(500);
      
      const grid = page.locator('[data-portfolio-grid]');
      await expect(grid).toBeVisible();
      
      // Should use 2-column layout on tablet
      const items = page.locator('[data-portfolio-item]').first();
      await expect(items).toBeVisible();
    });

    test('uses desktop layout for large screens', async ({ page }) => {
      // Set desktop viewport
      await page.setViewportSize({ width: 1920, height: 1080 });
      
      await page.waitForTimeout(500);
      
      const grid = page.locator('[data-portfolio-grid]');
      await expect(grid).toBeVisible();
      
      // Should use 3-column layout on desktop
      const items = page.locator('[data-portfolio-item]');
      const count = await items.count();
      
      if (count >= 3) {
        // Check that multiple items can fit horizontally
        const firstItem = items.first();
        const thirdItem = items.nth(2);
        
        const firstRect = await firstItem.boundingBox();
        const thirdRect = await thirdItem.boundingBox();
        
        // Third item should be roughly on same horizontal level as first
        const verticalDiff = Math.abs(thirdRect.y - firstRect.y);
        expect(verticalDiff).toBeLessThan(100); // Allow for small alignment differences
      }
    });
  });

  test.describe('Accessibility', () => {
    test('has proper heading hierarchy', async ({ page }) => {
      // Check for main heading
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
      
      // Check for section headings
      const h2 = page.locator('h2');
      await expect(h2.first()).toBeVisible();
      
      // Check for portfolio item titles
      const h3 = page.locator('[data-portfolio-item] h3');
      await expect(h3.first()).toBeVisible();
      
      // Verify heading content
      await expect(h2.first()).toContainText(/Portfolio|Demonstration/);
    });

    test('keyboard navigation works correctly', async ({ page }) => {
      // Start from top of page
      await page.keyboard.press('Tab');
      
      // Should be able to tab through interactive elements
      const focusedElement = page.locator(':focus');
      
      // Tab through portfolio items
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('Tab');
        const focused = await page.evaluate(() => document.activeElement?.tagName);
        
        if (focused === 'A' || focused === 'BUTTON') {
          // Should be able to activate with Enter
          await page.keyboard.press('Enter');
          await page.waitForTimeout(100); // Allow for any navigation
          break;
        }
      }
    });

    test('legal disclaimer badges are keyboard accessible', async ({ page }) => {
      const badge = page.locator('.legal-disclaimer-badge [role="button"]').first();
      
      if (await badge.isVisible()) {
        // Should be focusable
        await badge.focus();
        await expect(badge).toBeFocused();
        
        // Should have proper ARIA attributes
        const ariaLabel = await badge.getAttribute('aria-label');
        expect(ariaLabel).toContain('disclaimer');
        
        // Should be activatable with keyboard
        await page.keyboard.press('Enter');
        // Could check for tooltip or expanded state here
      }
    });

    test('has proper ARIA landmarks', async ({ page }) => {
      // Check for main content area
      const main = page.locator('main, [role="main"]');
      if (await main.count() > 0) {
        await expect(main.first()).toBeVisible();
      }
      
      // Check for complementary legal disclaimer
      const complementary = page.locator('[role="complementary"]');
      await expect(complementary).toBeVisible();
      
      // Check that it has proper labeling
      const ariaLabelledBy = await complementary.getAttribute('aria-labelledby');
      expect(ariaLabelledBy).toBeTruthy();
    });

    test('images have meaningful alt text', async ({ page }) => {
      const images = page.locator('[data-portfolio-image]');
      const imageCount = await images.count();
      
      for (let i = 0; i < Math.min(imageCount, 3); i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        
        expect(alt).toBeTruthy();
        expect(alt.length).toBeGreaterThan(20);
        expect(alt).toContain('transformation');
      }
    });
  });

  test.describe('Performance', () => {
    test('page loads within performance budget', async ({ page }) => {
      const startTime = Date.now();
      
      await page.goto('/portfolio');
      await page.waitForLoadState('networkidle');
      
      const loadTime = Date.now() - startTime;
      
      // Should load within 3 seconds
      expect(loadTime).toBeLessThan(3000);
    });

    test('Core Web Vitals are within acceptable ranges', async ({ page }) => {
      await page.goto('/portfolio');
      
      // Measure LCP (Largest Contentful Paint)
      const lcp = await page.evaluate(() => {
        return new Promise((resolve) => {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lcpEntry = entries[entries.length - 1];
            if (lcpEntry) {
              resolve(lcpEntry.renderTime || lcpEntry.loadTime);
            }
          });
          
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
          
          // Fallback timeout
          setTimeout(() => resolve(0), 5000);
        });
      });
      
      if (lcp > 0) {
        expect(lcp).toBeLessThan(2500); // LCP should be under 2.5s
      }
    });

    test('images optimize for different viewport sizes', async ({ page }) => {
      // Test mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      const mobileImg = page.locator('[data-portfolio-image]').first();
      const mobileSrc = await mobileImg.getAttribute('src');
      
      // Test desktop viewport
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      const desktopImg = page.locator('[data-portfolio-image]').first();
      const desktopSrc = await desktopImg.getAttribute('src');
      
      // Sources should be the same (base image), but responsive sources in picture element handle optimization
      expect(mobileSrc).toBeTruthy();
      expect(desktopSrc).toBeTruthy();
    });
  });

  test.describe('Interactive Features', () => {
    test('portfolio CTA buttons work correctly', async ({ page }) => {
      const firstCTA = page.locator('[data-portfolio-cta]').first();
      await expect(firstCTA).toBeVisible();
      
      // Get the href before clicking
      const href = await firstCTA.getAttribute('href');
      expect(href).toContain('/portfolio/');
      
      // Click should navigate to individual case study
      await firstCTA.click();
      
      // Should navigate to the specific portfolio item page
      await page.waitForURL(`**${href}`);
      
      // Should be on the case study page
      expect(page.url()).toContain('/portfolio/');
    });

    test('contact CTA in ready-to-start section works', async ({ page }) => {
      const contactCTA = page.locator('a[href="/contact"]');
      
      if (await contactCTA.count() > 0) {
        await expect(contactCTA.first()).toBeVisible();
        await expect(contactCTA.first()).toContainText(/Strategy Call|Contact/);
        
        // Click should navigate to contact page
        await contactCTA.first().click();
        await page.waitForURL('**/contact');
        expect(page.url()).toContain('/contact');
      }
    });

    test('legal disclaimer interactions work', async ({ page }) => {
      const badge = page.locator('.legal-disclaimer-badge [role="button"]').first();
      
      if (await badge.isVisible()) {
        // Hover should show tooltip (title attribute)
        const title = await badge.getAttribute('title');
        expect(title).toContain('demonstration case study');
        
        // Click might show additional disclaimer info
        await badge.click();
        await page.waitForTimeout(100);
      }
    });
  });

  test.describe('SEO and Meta Tags', () => {
    test('has proper page title and meta description', async ({ page }) => {
      await expect(page).toHaveTitle(/Portfolio.*INT Creative Hub/);
      
      // Check meta description
      const metaDescription = page.locator('meta[name="description"]');
      const description = await metaDescription.getAttribute('content');
      
      expect(description).toBeTruthy();
      expect(description.length).toBeGreaterThan(120);
      expect(description.length).toBeLessThan(160);
      expect(description).toContain('transformation');
    });

    test('has structured data markup', async ({ page }) => {
      // Check for JSON-LD structured data
      const structuredData = page.locator('script[type="application/ld+json"]');
      const count = await structuredData.count();
      
      expect(count).toBeGreaterThan(0);
      
      if (count > 0) {
        const content = await structuredData.first().textContent();
        const data = JSON.parse(content);
        
        expect(data['@context']).toBe('https://schema.org');
        expect(data['@type']).toBeTruthy();
      }
    });

    test('has proper Open Graph tags', async ({ page }) => {
      const ogTitle = page.locator('meta[property="og:title"]');
      const ogDescription = page.locator('meta[property="og:description"]');
      const ogImage = page.locator('meta[property="og:image"]');
      
      if (await ogTitle.count() > 0) {
        const title = await ogTitle.getAttribute('content');
        expect(title).toContain('Portfolio');
      }
      
      if (await ogDescription.count() > 0) {
        const description = await ogDescription.getAttribute('content');
        expect(description).toBeTruthy();
      }
      
      if (await ogImage.count() > 0) {
        const image = await ogImage.getAttribute('content');
        expect(image).toContain('http');
      }
    });
  });

  test.describe('Error Handling', () => {
    test('handles missing images gracefully', async ({ page }) => {
      // Mock network to fail some image requests
      await page.route('**/images/portfolio/nonexistent.jpg', route => {
        route.abort('failed');
      });
      
      await page.goto('/portfolio');
      await page.waitForLoadState('networkidle');
      
      // Page should still render properly
      const portfolioGrid = page.locator('[data-portfolio-grid]');
      await expect(portfolioGrid).toBeVisible();
      
      const portfolioItems = page.locator('[data-portfolio-item]');
      const count = await portfolioItems.count();
      expect(count).toBeGreaterThan(0);
    });

    test('handles JavaScript disabled scenario', async ({ page }) => {
      // Disable JavaScript
      await page.context().setExtraHTTPHeaders({});
      await page.addInitScript(() => {
        Object.defineProperty(window, 'IntersectionObserver', {
          value: undefined
        });
      });
      
      await page.goto('/portfolio');
      await page.waitForLoadState('domcontentloaded');
      
      // Portfolio should still be visible
      const portfolioGrid = page.locator('[data-portfolio-grid]');
      await expect(portfolioGrid).toBeVisible();
      
      // Images should still load (using eager loading as fallback)
      const firstImage = page.locator('[data-portfolio-image]').first();
      await expect(firstImage).toBeVisible();
    });
  });
});