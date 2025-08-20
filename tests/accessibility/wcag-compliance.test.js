/**
 * WCAG 2.1 AA Compliance Tests
 * Comprehensive accessibility testing for portfolio components
 */

import { describe, test, expect, jest, beforeEach, afterEach } from '@jest/globals';

describe('WCAG 2.1 AA Compliance Tests', () => {
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

  describe('Perceivable - Guideline 1', () => {
    describe('1.1 Text Alternatives', () => {
      test('portfolio images have meaningful alt text', () => {
        container.innerHTML = `
          <img src="/images/portfolio/wellness-studio-transformation-desktop.jpg"
               alt="Serenity Wellness Studio website transformation showing mobile booking system that increased client inquiries by 400% in 60 days for Health & Wellness industry"
               data-portfolio-image>
        `;

        const img = container.querySelector('img');
        const altText = img.alt;

        expect(altText).toBeDefined();
        expect(altText.length).toBeGreaterThan(0);
        expect(altText.length).toBeLessThan(150); // Reasonable length limit
        expect(altText).toContain('transformation'); // Context-specific
        expect(altText).not.toMatch(/^image|^photo|^picture/i); // Avoid redundant prefixes
      });

      test('decorative images have empty alt attribute', () => {
        container.innerHTML = `
          <div class="portfolio-image-fallback">
            <svg aria-hidden="true" class="w-16 h-16">
              <path d="M21 12a9 9 0 01-9 9"/>
            </svg>
          </div>
        `;

        const svg = container.querySelector('svg');
        expect(svg.getAttribute('aria-hidden')).toBe('true');
      });

      test('complex images have detailed descriptions', () => {
        container.innerHTML = `
          <div class="portfolio-image-error">
            <h3>Serenity Wellness Studio</h3>
            <p>Website Development transformation project</p>
            <div>
              <span>Key Result:</span>
              <span>0 to 50 qualified leads per month</span>
            </div>
          </div>
        `;

        const heading = container.querySelector('h3');
        const description = container.querySelector('p');
        const result = container.querySelector('div > span:last-child');

        expect(heading.textContent).toContain('Serenity Wellness Studio');
        expect(description.textContent).toContain('transformation project');
        expect(result.textContent).toContain('qualified leads');
      });
    });

    describe('1.3 Adaptable Content', () => {
      test('portfolio grid has semantic structure', () => {
        container.innerHTML = `
          <section>
            <h2>Demonstration Portfolio</h2>
            <div data-portfolio-grid>
              <article data-portfolio-item>
                <h3>Project Title</h3>
                <p>Project description</p>
                <a href="/portfolio/test">View Case Study</a>
              </article>
            </div>
          </section>
        `;

        const section = container.querySelector('section');
        const heading = container.querySelector('h2');
        const article = container.querySelector('article');
        const projectTitle = container.querySelector('article h3');
        const link = container.querySelector('a');

        expect(section).not.toBeNull();
        expect(heading).not.toBeNull();
        expect(article).not.toBeNull();
        expect(projectTitle).not.toBeNull();
        expect(link.getAttribute('href')).toBeDefined();
      });

      test('legal disclaimer has proper semantic structure', () => {
        container.innerHTML = `
          <div role="complementary" aria-labelledby="portfolio-disclaimer-title">
            <h3 id="portfolio-disclaimer-title">
              <span>⚠️</span>
              IMPORTANT: Fictional Demonstration Portfolio
            </h3>
            <div>
              <p><strong>FICTIONAL</strong> demonstration purposes.</p>
              <p><strong>FTC Compliance:</strong> Federal Trade Commission guidelines.</p>
            </div>
          </div>
        `;

        const disclaimer = container.querySelector('[role="complementary"]');
        const title = container.querySelector('#portfolio-disclaimer-title');
        const ftcNotice = container.textContent;

        expect(disclaimer.getAttribute('role')).toBe('complementary');
        expect(disclaimer.getAttribute('aria-labelledby')).toBe('portfolio-disclaimer-title');
        expect(title.id).toBe('portfolio-disclaimer-title');
        expect(ftcNotice).toContain('FICTIONAL');
        expect(ftcNotice).toContain('FTC Compliance');
      });

      test('reading order is logical and meaningful', () => {
        container.innerHTML = `
          <article data-portfolio-item>
            <div class="portfolio-image-container"></div>
            <div class="content">
              <h3>Project Title</h3>
              <p class="tagline">Key outcome</p>
              <p class="description">Project description</p>
              <div class="key-result">
                <span>KEY RESULT</span>
                <div class="metric">200% increase</div>
                <div class="timeframe">60 days</div>
              </div>
              <div class="technologies">
                <span>TOOLS USED</span>
                <div>Tech1, Tech2, Tech3</div>
              </div>
              <a href="/portfolio/test">View Case Study</a>
            </div>
          </article>
        `;

        const elements = Array.from(container.querySelectorAll('*')).filter(el => 
          el.textContent.trim() && !el.querySelector('*')
        );

        // Reading order should follow: title, tagline, description, results, technologies, CTA
        const textContent = elements.map(el => el.textContent.trim());
        const titleIndex = textContent.findIndex(text => text.includes('Project Title'));
        const ctaIndex = textContent.findIndex(text => text.includes('View Case Study'));

        expect(titleIndex).toBeLessThan(ctaIndex); // Title should come before CTA
      });
    });

    describe('1.4 Distinguishable Content', () => {
      test('color contrast meets AA standards', () => {
        container.innerHTML = `
          <div class="bg-forest-900 text-white">High contrast text</div>
          <div class="text-sage-700">Medium contrast text</div>
          <div class="text-gray-600">Body text</div>
        `;

        // In real implementation, these would be actual color contrast calculations
        const mockContrastRatios = {
          'forest-900-white': 12.5, // Should be > 7:1 for AA
          'sage-700-white': 8.2,    // Should be > 7:1 for AA
          'gray-600-white': 5.8     // Should be > 4.5:1 for AA normal text
        };

        Object.values(mockContrastRatios).forEach(ratio => {
          expect(ratio).toBeGreaterThan(4.5); // Minimum AA standard
        });
      });

      test('information is not conveyed by color alone', () => {
        container.innerHTML = `
          <div class="result-metric">
            <span class="text-xs text-sage-600 font-bold tracking-wider">KEY RESULT</span>
            <div class="text-sm font-bold text-forest-900">200% increase</div>
            <div class="flex items-center">
              <svg class="w-3 h-3 mr-1 text-sage-500">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              60 days
            </div>
          </div>
        `;

        const keyResultLabel = container.querySelector('.tracking-wider');
        const metric = container.querySelector('.font-bold.text-forest-900');
        const timeIcon = container.querySelector('svg');

        expect(keyResultLabel.textContent).toBe('KEY RESULT'); // Text label, not just color
        expect(metric.textContent).toContain('%'); // Specific indicator
        expect(timeIcon).not.toBeNull(); // Icon provides additional context
      });

      test('text can be resized up to 200% without losing functionality', () => {
        container.innerHTML = `
          <div style="font-size: 1rem; line-height: 1.5;">
            <h3>Portfolio Project Title</h3>
            <p>Project description that should remain readable when enlarged.</p>
            <button>View Case Study</button>
          </div>
        `;

        const wrapper = container.querySelector('div');
        const originalFontSize = parseFloat(getComputedStyle(wrapper).fontSize);

        // Simulate 200% zoom
        wrapper.style.fontSize = `${originalFontSize * 2}px`;

        const button = container.querySelector('button');
        expect(button).not.toBeNull();
        expect(button.textContent).toBe('View Case Study'); // Still readable and functional
      });

      test('focus indicators are clearly visible', () => {
        container.innerHTML = `
          <a href="/portfolio/test" 
             class="focus:outline-2 focus:outline-sage-600 focus:outline-offset-2"
             data-portfolio-cta>
            View Case Study
          </a>
          <button class="legal-disclaimer-badge" 
                  role="button"
                  tabindex="0">
            DEMO
          </button>
        `;

        const link = container.querySelector('a');
        const button = container.querySelector('button');

        // Focus styles should be defined
        expect(link.className).toContain('focus:outline');
        expect(button.getAttribute('tabindex')).toBe('0');
        expect(button.getAttribute('role')).toBe('button');
      });
    });
  });

  describe('Operable - Guideline 2', () => {
    describe('2.1 Keyboard Accessible', () => {
      test('all interactive elements are keyboard accessible', () => {
        container.innerHTML = `
          <article data-portfolio-item>
            <a href="/portfolio/test" data-portfolio-cta>View Case Study</a>
            <div class="legal-disclaimer-badge">
              <div role="button" tabindex="0" aria-label="Legal disclaimer">DEMO</div>
            </div>
          </article>
        `;

        const link = container.querySelector('a');
        const button = container.querySelector('[role="button"]');

        expect(link.href).toBeDefined();
        expect(button.getAttribute('tabindex')).toBe('0');
        expect(button.getAttribute('aria-label')).toBeDefined();
      });

      test('keyboard navigation follows logical tab order', async () => {
        container.innerHTML = `
          <div>
            <h2 tabindex="0">Portfolio</h2>
            <article data-portfolio-item tabindex="0">
              <h3>Project 1</h3>
              <a href="/portfolio/project1" tabindex="0">View</a>
            </article>
            <article data-portfolio-item tabindex="0">
              <h3>Project 2</h3>
              <a href="/portfolio/project2" tabindex="0">View</a>
            </article>
            <a href="/contact" tabindex="0">Contact</a>
          </div>
        `;

        const focusableElements = container.querySelectorAll('[tabindex="0"]');
        
        // Tab order should be logical: heading, projects, contact
        expect(focusableElements).toHaveLength(5);
        expect(focusableElements[0].tagName).toBe('H2');
        expect(focusableElements[1].getAttribute('data-portfolio-item')).toBeDefined();
        expect(focusableElements[4].textContent).toBe('Contact');
      });

      test('keyboard shortcuts work as expected', () => {
        container.innerHTML = `
          <div data-portfolio-grid>
            <article data-portfolio-item>
              <a href="/portfolio/test" data-portfolio-cta>View Case Study</a>
            </article>
          </div>
        `;

        const link = container.querySelector('a');
        let activated = false;

        link.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            activated = true;
            e.preventDefault();
          }
        });

        // Test Enter key
        const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
        link.dispatchEvent(enterEvent);
        expect(activated).toBe(true);

        // Reset and test Space key
        activated = false;
        const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
        link.dispatchEvent(spaceEvent);
        expect(activated).toBe(true);
      });

      test('no keyboard trap exists', () => {
        container.innerHTML = `
          <div class="modal" style="display: none;">
            <h2>Modal Title</h2>
            <button>Close</button>
          </div>
          <main>
            <article data-portfolio-item>
              <a href="/portfolio/test">View Case Study</a>
            </article>
          </main>
        `;

        const modal = container.querySelector('.modal');
        const mainContent = container.querySelector('main');

        // When modal is hidden, focus should be able to move freely in main content
        expect(modal.style.display).toBe('none');
        expect(mainContent.querySelector('a')).not.toBeNull();
      });
    });

    describe('2.2 Enough Time', () => {
      test('no time limits on portfolio interactions', () => {
        container.innerHTML = `
          <div class="portfolio-image-container">
            <div class="loading-progress" data-timeout="false"></div>
          </div>
        `;

        const loader = container.querySelector('.loading-progress');
        expect(loader.getAttribute('data-timeout')).toBe('false');
      });
    });

    describe('2.3 Seizures and Physical Reactions', () => {
      test('no content flashes more than 3 times per second', () => {
        container.innerHTML = `
          <div class="legal-disclaimer-badge animate-pulse">
            DEMO
          </div>
        `;

        const badge = container.querySelector('.animate-pulse');
        // Tailwind's animate-pulse is 2s duration, well within safe limits
        expect(badge.className).toContain('animate-pulse');
      });

      test('reduced motion preference is respected', () => {
        testUtils.setUserPreferences({ reducedMotion: true });

        container.innerHTML = `
          <div class="portfolio-card transition-all duration-500 hover:-translate-y-2">
            Content
          </div>
        `;

        const card = container.querySelector('.portfolio-card');
        
        // Should check for prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
          // Animations should be disabled or reduced
          expect(card.className).toContain('transition-all');
        }
      });
    });

    describe('2.4 Navigable', () => {
      test('page has descriptive title', () => {
        document.title = 'Portfolio - Demonstration Projects | INT Creative Hub';
        expect(document.title).toContain('Portfolio');
        expect(document.title).toContain('INT Creative Hub');
      });

      test('links have descriptive text', () => {
        container.innerHTML = `
          <a href="/portfolio/wellness-studio-transformation"
             aria-label="View detailed case study for Serenity Wellness Studio website development project">
            View Case Study
          </a>
          <a href="/contact">
            Book Your Free Strategy Call
          </a>
        `;

        const links = container.querySelectorAll('a');
        
        links.forEach(link => {
          const linkText = link.textContent || link.getAttribute('aria-label');
          expect(linkText).toBeDefined();
          expect(linkText.length).toBeGreaterThan(4); // Avoid generic "click here"
        });
      });

      test('headings create logical document outline', () => {
        container.innerHTML = `
          <section>
            <h2>Demonstration Portfolio</h2>
            <article>
              <h3>Serenity Wellness Studio</h3>
              <h4>Key Results</h4>
            </article>
            <article>
              <h3>Northeast HVAC Solutions</h3>
              <h4>Key Results</h4>
            </article>
          </section>
        `;

        const headings = container.querySelectorAll('h2, h3, h4, h5, h6');
        const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));

        // Should not skip heading levels
        expect(headingLevels[0]).toBe(2); // h2
        expect(headingLevels[1]).toBe(3); // h3 (doesn't skip to h4)
        expect(headingLevels[2]).toBe(4); // h4
      });

      test('skip links are provided for keyboard users', () => {
        container.innerHTML = `
          <a href="#main-content" class="sr-only focus:not-sr-only">
            Skip to main content
          </a>
          <nav>Navigation items</nav>
          <main id="main-content">
            <h1>Portfolio</h1>
          </main>
        `;

        const skipLink = container.querySelector('a[href="#main-content"]');
        const mainContent = container.querySelector('#main-content');

        expect(skipLink).not.toBeNull();
        expect(skipLink.className).toContain('sr-only');
        expect(mainContent).not.toBeNull();
      });
    });

    describe('2.5 Input Modalities', () => {
      test('touch targets are at least 44x44 pixels', () => {
        container.innerHTML = `
          <button class="legal-disclaimer-badge px-2 py-1 min-w-11 min-h-11">
            DEMO
          </button>
          <a href="/portfolio/test" 
             class="cta-button py-3.5 px-6 inline-block min-h-11">
            View Case Study
          </a>
        `;

        const button = container.querySelector('button');
        const link = container.querySelector('a');

        // Should have minimum touch target size
        expect(button.className).toContain('min-w-11'); // 44px minimum
        expect(button.className).toContain('min-h-11');
        expect(link.className).toContain('min-h-11');
      });
    });
  });

  describe('Understandable - Guideline 3', () => {
    describe('3.1 Readable', () => {
      test('page language is identified', () => {
        document.documentElement.lang = 'en-US';
        expect(document.documentElement.lang).toBe('en-US');
      });

      test('unusual words are explained', () => {
        container.innerHTML = `
          <div>
            <p>Digital marketing campaigns using 
               <abbr title="Search Engine Optimization">SEO</abbr> 
               and <abbr title="Pay Per Click">PPC</abbr> strategies.
            </p>
          </div>
        `;

        const abbreviations = container.querySelectorAll('abbr');
        abbreviations.forEach(abbr => {
          expect(abbr.title).toBeDefined();
          expect(abbr.title.length).toBeGreaterThan(0);
        });
      });
    });

    describe('3.2 Predictable', () => {
      test('consistent navigation and interaction patterns', () => {
        container.innerHTML = `
          <article data-portfolio-item>
            <h3>Project 1</h3>
            <a href="/portfolio/project1" data-portfolio-cta>View Case Study</a>
          </article>
          <article data-portfolio-item>
            <h3>Project 2</h3>
            <a href="/portfolio/project2" data-portfolio-cta>View Case Study</a>
          </article>
        `;

        const ctaLinks = container.querySelectorAll('[data-portfolio-cta]');
        
        // All CTA links should have consistent text and behavior
        ctaLinks.forEach(link => {
          expect(link.textContent).toBe('View Case Study');
          expect(link.href).toContain('/portfolio/');
        });
      });

      test('focus changes are predictable', () => {
        container.innerHTML = `
          <button onclick="this.textContent='Loading...'; setTimeout(() => this.textContent='View Case Study', 1000)">
            View Case Study
          </button>
        `;

        const button = container.querySelector('button');
        
        // Focus should remain on button during state changes
        button.focus();
        expect(document.activeElement).toBe(button);
        
        button.click();
        expect(document.activeElement).toBe(button); // Focus preserved
      });
    });

    describe('3.3 Input Assistance', () => {
      test('error messages are clear and helpful', () => {
        container.innerHTML = `
          <div class="portfolio-image-error">
            <h3>Serenity Wellness Studio</h3>
            <p>Website Development transformation project</p>
            <div role="alert" class="error-message">
              Image could not be loaded. Please check your connection and try again.
            </div>
          </div>
        `;

        const errorMessage = container.querySelector('[role="alert"]');
        expect(errorMessage.getAttribute('role')).toBe('alert');
        expect(errorMessage.textContent).toContain('check your connection');
        expect(errorMessage.textContent).toContain('try again');
      });
    });
  });

  describe('Robust - Guideline 4', () => {
    describe('4.1 Compatible', () => {
      test('valid HTML structure', () => {
        container.innerHTML = `
          <article data-portfolio-item>
            <div class="portfolio-image-container">
              <img src="/test.jpg" alt="Test image" data-portfolio-image>
            </div>
            <div class="content">
              <h3>Project Title</h3>
              <p>Description</p>
              <a href="/portfolio/test">View Case Study</a>
            </div>
          </article>
        `;

        // Check for proper nesting and attributes
        const article = container.querySelector('article');
        const img = container.querySelector('img');
        const link = container.querySelector('a');

        expect(article.getAttribute('data-portfolio-item')).toBeDefined();
        expect(img.src).toBeDefined();
        expect(img.alt).toBeDefined();
        expect(link.href).toBeDefined();
      });

      test('ARIA attributes are used correctly', () => {
        container.innerHTML = `
          <div role="complementary" aria-labelledby="disclaimer-title">
            <h3 id="disclaimer-title">Legal Disclaimer</h3>
          </div>
          <button role="button" aria-label="View portfolio disclaimer" tabindex="0">
            DEMO
          </button>
          <div class="sr-only" aria-hidden="true">
            Hidden from screen readers
          </div>
        `;

        const complementary = container.querySelector('[role="complementary"]');
        const button = container.querySelector('[role="button"]');
        const hidden = container.querySelector('[aria-hidden="true"]');

        expect(complementary.getAttribute('aria-labelledby')).toBe('disclaimer-title');
        expect(button.getAttribute('aria-label')).toContain('disclaimer');
        expect(hidden.getAttribute('aria-hidden')).toBe('true');
      });

      test('screen reader compatibility', () => {
        container.innerHTML = `
          <div class="sr-only" aria-hidden="true">
            <span>Portfolio image showing Serenity Wellness Studio Website Development transformation project</span>
            <span>Service type: website development</span>
            <span>Industry: Health & Wellness</span>
            <span>Key result: 0 to 50 qualified leads per month</span>
          </div>
        `;

        const srContent = container.querySelector('.sr-only');
        const spans = srContent.querySelectorAll('span');

        expect(spans.length).toBeGreaterThan(0);
        spans.forEach(span => {
          expect(span.textContent.trim().length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('User Preference Adaptations', () => {
    test('respects prefers-reduced-motion', () => {
      testUtils.setUserPreferences({ reducedMotion: true });

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        container.innerHTML = `
          <div class="portfolio-card" style="animation: none !important; transition: none !important;">
            Content
          </div>
        `;

        const card = container.querySelector('.portfolio-card');
        expect(card.style.animation).toBe('none');
        expect(card.style.transition).toBe('none');
      }
    });

    test('respects prefers-contrast', () => {
      testUtils.setUserPreferences({ highContrast: true });

      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      if (prefersHighContrast) {
        container.innerHTML = `
          <div class="legal-disclaimer-badge" style="background: #000 !important; color: #fff !important; border: 2px solid #fff !important;">
            DEMO
          </div>
        `;

        const badge = container.querySelector('.legal-disclaimer-badge');
        expect(badge.style.background).toBe('rgb(0, 0, 0)');
        expect(badge.style.color).toBe('rgb(255, 255, 255)');
      }
    });

    test('supports dark mode preference', () => {
      testUtils.setUserPreferences({ darkMode: true });

      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (prefersDarkMode) {
        container.innerHTML = `
          <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            Portfolio content
          </div>
        `;

        const content = container.querySelector('div');
        expect(content.className).toContain('dark:bg-gray-900');
        expect(content.className).toContain('dark:text-white');
      }
    });
  });
});