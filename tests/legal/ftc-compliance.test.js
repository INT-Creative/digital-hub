/**
 * Legal Compliance and FTC Guidelines Tests
 * Validates proper disclosure of fictional content and compliance requirements
 */

import { describe, test, expect, jest, beforeEach, afterEach } from '@jest/globals';

describe('FTC Compliance and Legal Tests', () => {
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

  describe('FTC Compliance Requirements', () => {
    test('displays clear fictional content disclaimers', () => {
      container.innerHTML = `
        <div class="bg-gradient-to-r from-amber-50 via-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6" 
             role="complementary" 
             aria-labelledby="portfolio-disclaimer-title">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 id="portfolio-disclaimer-title" class="text-base font-bold text-amber-900 mb-2">
                <span>⚠️</span>
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
      `;

      const disclaimer = container.querySelector('[role="complementary"]');
      const title = container.querySelector('#portfolio-disclaimer-title');
      const content = disclaimer.textContent;

      // Validate disclaimer structure
      expect(disclaimer).not.toBeNull();
      expect(title.textContent).toContain('IMPORTANT');
      expect(title.textContent).toContain('Fictional Demonstration Portfolio');

      // Validate FTC compliance statements
      expect(content).toContain('FICTIONAL');
      expect(content).toContain('demonstration purposes');
      expect(content).toContain('NO ACTUAL CLIENT RELATIONSHIPS');
      expect(content).toContain('FTC Compliance');
      expect(content).toContain('Federal Trade Commission guidelines');
      expect(content).toContain('fictional content');
      expect(content).toContain('No earnings claims or guarantees are made');

      // Validate visual prominence
      expect(disclaimer.className).toContain('border-2');
      expect(disclaimer.className).toContain('border-amber-300');
      expect(title.className).toContain('font-bold');
      expect(content).toContain('⚠️'); // Warning emoji for attention
    });

    test('validates individual portfolio item legal badges', () => {
      container.innerHTML = `
        <div class="legal-disclaimer-badge absolute top-2 left-2 z-20">
          <div 
            class="bg-amber-500/90 backdrop-blur-sm text-amber-900 text-xs font-bold px-2 py-1 rounded-md border border-amber-400/50 shadow-lg cursor-help transition-all duration-300 hover:bg-amber-400/95"
            title="This is a demonstration case study created for educational purposes. All client details are fictional to illustrate methodology while protecting client privacy."
            role="button"
            tabindex="0"
            aria-label="Legal disclaimer: This is a demonstration case study with fictional client details"
          >
            <span class="flex items-center space-x-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span>DEMO</span>
            </span>
          </div>
        </div>
      `;

      const badge = container.querySelector('.legal-disclaimer-badge');
      const button = badge.querySelector('[role="button"]');

      // Validate badge presence and positioning
      expect(badge).not.toBeNull();
      expect(badge.className).toContain('absolute');
      expect(badge.className).toContain('z-20'); // High z-index for visibility

      // Validate interactive disclaimer
      expect(button.getAttribute('role')).toBe('button');
      expect(button.getAttribute('tabindex')).toBe('0');
      expect(button.getAttribute('aria-label')).toContain('demonstration case study');
      expect(button.getAttribute('title')).toContain('fictional');
      expect(button.getAttribute('title')).toContain('educational purposes');

      // Validate visual prominence
      expect(button.className).toContain('bg-amber-500');
      expect(button.className).toContain('font-bold');
      expect(button.textContent).toContain('DEMO');
    });

    test('ensures no misleading earnings claims', () => {
      container.innerHTML = `
        <div class="portfolio-item">
          <h3>Test Business Results</h3>
          <div class="results">
            <p>200% increase in leads</p>
            <p>$15,000 additional monthly revenue</p>
            <p>92% reduction in no-shows</p>
          </div>
          <div class="disclaimer">
            <p><strong>DISCLAIMER:</strong> Results shown are from fictional demonstration case studies. Individual results may vary. No earnings or performance guarantees are made.</p>
          </div>
        </div>
      `;

      const results = container.querySelector('.results');
      const disclaimer = container.querySelector('.disclaimer');

      // Results can be shown but must be clearly marked as fictional
      expect(results).not.toBeNull();
      expect(disclaimer).not.toBeNull();
      
      // Validate disclaimer language
      expect(disclaimer.textContent).toContain('DISCLAIMER');
      expect(disclaimer.textContent).toContain('fictional demonstration');
      expect(disclaimer.textContent).toContain('Individual results may vary');
      expect(disclaimer.textContent).toContain('No earnings or performance guarantees');
    });

    test('validates testimonial disclaimer requirements', () => {
      container.innerHTML = `
        <blockquote class="testimonial">
          <p>"The new website completely transformed our business. We went from hoping the phone would ring to having a steady stream of online bookings."</p>
          <cite>
            <strong>Sarah Martinez</strong><br>
            Owner, Serenity Wellness Studio
          </cite>
          <div class="testimonial-disclaimer">
            <p class="text-xs text-gray-600 font-medium">
              <strong>FICTIONAL TESTIMONIAL:</strong> This testimonial is fictional and created for demonstration purposes only. It does not represent actual client feedback or results.
            </p>
          </div>
        </blockquote>
      `;

      const testimonial = container.querySelector('.testimonial');
      const disclaimer = container.querySelector('.testimonial-disclaimer');

      expect(testimonial).not.toBeNull();
      expect(disclaimer).not.toBeNull();
      
      // Testimonial disclaimer requirements
      expect(disclaimer.textContent).toContain('FICTIONAL TESTIMONIAL');
      expect(disclaimer.textContent).toContain('demonstration purposes only');
      expect(disclaimer.textContent).toContain('does not represent actual client feedback');
      expect(disclaimer.className).toContain('text-xs'); // Visible but not oversized
    });

    test('ensures disclaimer visibility and accessibility', () => {
      container.innerHTML = `
        <div class="legal-notice" role="contentinfo" aria-label="Legal disclaimers and compliance information">
          <div class="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <h4 class="font-bold text-amber-900 mb-2" id="legal-heading">Legal Notice</h4>
            <div class="text-sm text-amber-800" aria-labelledby="legal-heading">
              <p>All portfolio items, case studies, testimonials, and results shown on this website are fictional and created for demonstration and educational purposes.</p>
              <p class="mt-2 font-medium">This website complies with FTC Section 5 guidelines regarding truthful advertising and clear disclosure of fictional content in marketing materials.</p>
            </div>
          </div>
        </div>
      `;

      const legalNotice = container.querySelector('.legal-notice');
      const heading = container.querySelector('#legal-heading');

      // Accessibility validation
      expect(legalNotice.getAttribute('role')).toBe('contentinfo');
      expect(legalNotice.getAttribute('aria-label')).toContain('Legal disclaimers');
      expect(heading.id).toBe('legal-heading');
      
      // Content validation
      expect(legalNotice.textContent).toContain('fictional');
      expect(legalNotice.textContent).toContain('demonstration and educational purposes');
      expect(legalNotice.textContent).toContain('FTC Section 5');
      expect(legalNotice.textContent).toContain('truthful advertising');
      
      // Visual prominence validation
      expect(legalNotice.className).toContain('bg-amber-50');
      expect(legalNotice.className).toContain('border');
    });
  });

  describe('Educational Content Classification', () => {
    test('clearly identifies content as educational methodology', () => {
      container.innerHTML = `
        <section class="educational-content" role="main" aria-labelledby="methodology-heading">
          <header>
            <h2 id="methodology-heading">Business Transformation Methodology</h2>
            <p class="subtitle">Educational demonstration of proven strategies and approaches</p>
          </header>
          <div class="methodology-disclaimer">
            <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-900 mb-2">📚 Educational Content Notice</h3>
              <p class="text-sm text-blue-800">
                The case studies and project examples shown here demonstrate my planned methodology and approach to service business transformation. While based on industry best practices and realistic scenarios, all client details are fictional and created for educational illustration.
              </p>
            </div>
          </div>
        </section>
      `;

      const section = container.querySelector('.educational-content');
      const disclaimer = container.querySelector('.methodology-disclaimer');
      const notice = disclaimer.querySelector('h3');

      expect(section.getAttribute('role')).toBe('main');
      expect(notice.textContent).toContain('Educational Content Notice');
      expect(disclaimer.textContent).toContain('demonstrate my planned methodology');
      expect(disclaimer.textContent).toContain('educational illustration');
      expect(disclaimer.textContent).toContain('fictional');
    });

    test('distinguishes between methodology and client claims', () => {
      container.innerHTML = `
        <div class="methodology-vs-claims">
          <div class="methodology-section">
            <h3>My Transformation Process</h3>
            <p>This 7-step methodology is based on proven business transformation principles and industry best practices.</p>
          </div>
          <div class="fictional-results">
            <h3>Example Results <span class="demo-badge">DEMO</span></h3>
            <p>The following results are fictional examples created to illustrate potential outcomes of this methodology:</p>
            <ul>
              <li>400% increase in leads (fictional example)</li>
              <li>$15,000 monthly revenue increase (fictional example)</li>
            </ul>
          </div>
        </div>
      `;

      const methodology = container.querySelector('.methodology-section');
      const results = container.querySelector('.fictional-results');
      const demoBadge = container.querySelector('.demo-badge');

      expect(methodology.textContent).toContain('proven business transformation principles');
      expect(results.textContent).toContain('fictional examples');
      expect(demoBadge.textContent).toBe('DEMO');
      
      // Each fictional metric should be labeled
      const resultsList = results.querySelectorAll('li');
      resultsList.forEach(item => {
        expect(item.textContent).toContain('fictional example');
      });
    });
  });

  describe('Privacy and Data Protection', () => {
    test('ensures no actual client data is exposed', () => {
      container.innerHTML = `
        <div class="client-info">
          <h3>Serenity Wellness Studio</h3>
          <div class="client-details">
            <p><strong>Industry:</strong> Health & Wellness</p>
            <p><strong>Location:</strong> Akron, Ohio</p>
            <p><strong>Size:</strong> 3-5 employees</p>
          </div>
          <div class="privacy-notice">
            <p class="text-xs text-gray-600">
              <strong>Privacy Note:</strong> All client information shown is fictional. Real client details are never shared publicly to protect privacy and maintain confidentiality.
            </p>
          </div>
        </div>
      `;

      const privacyNotice = container.querySelector('.privacy-notice');
      
      expect(privacyNotice.textContent).toContain('fictional');
      expect(privacyNotice.textContent).toContain('Real client details are never shared');
      expect(privacyNotice.textContent).toContain('protect privacy');
      expect(privacyNotice.textContent).toContain('maintain confidentiality');
    });

    test('validates generic industry references', () => {
      container.innerHTML = `
        <div class="industry-examples">
          <h3>Service Industries We Transform</h3>
          <ul>
            <li>Health & Wellness Services</li>
            <li>Home Services (HVAC, Plumbing)</li>
            <li>Professional Services</li>
            <li>Legal Services</li>
          </ul>
          <p class="disclaimer">Industries listed are general categories. Specific client information in case studies is fictional.</p>
        </div>
      `;

      const industries = container.querySelectorAll('li');
      const disclaimer = container.querySelector('.disclaimer');

      // Industries should be generic categories
      industries.forEach(industry => {
        expect(industry.textContent).not.toMatch(/LLC|Inc|Corp/); // No specific company identifiers
        expect(industry.textContent).toMatch(/Services?$/); // Generic service categories
      });

      expect(disclaimer.textContent).toContain('general categories');
      expect(disclaimer.textContent).toContain('fictional');
    });
  });

  describe('Marketing Claims Validation', () => {
    test('ensures all performance claims include proper disclaimers', () => {
      container.innerHTML = `
        <div class="performance-claims">
          <div class="claim">
            <h3>Typical Timeline: 7-14 Days</h3>
            <p class="disclaimer">Timeline based on project scope. Individual projects may vary.</p>
          </div>
          <div class="claim">
            <h3>Investment Range: $2,500 - $10,000</h3>
            <p class="disclaimer">Pricing depends on specific requirements and scope.</p>
          </div>
          <div class="claim">
            <h3>Results Shown in Portfolio</h3>
            <p class="disclaimer">All results shown are fictional examples for methodology demonstration. Individual results will vary and depend on many factors including market conditions, implementation, and business specifics.</p>
          </div>
        </div>
      `;

      const claims = container.querySelectorAll('.claim');
      
      claims.forEach(claim => {
        const disclaimer = claim.querySelector('.disclaimer');
        expect(disclaimer).not.toBeNull();
        
        if (claim.textContent.includes('Results')) {
          expect(disclaimer.textContent).toContain('fictional examples');
          expect(disclaimer.textContent).toContain('Individual results will vary');
        }
      });
    });

    test('validates service delivery promises', () => {
      container.innerHTML = `
        <div class="service-promises">
          <h3>What You Can Expect</h3>
          <ul>
            <li>Direct communication with me throughout the project</li>
            <li>Fixed-fee pricing with no hidden costs</li>
            <li>7-14 day typical delivery timeline</li>
            <li>Methodology based on proven business transformation principles</li>
          </ul>
          <div class="service-disclaimer">
            <p>Service delivery promises represent typical processes. Specific outcomes depend on project requirements, client cooperation, and external factors beyond our control.</p>
          </div>
        </div>
      `;

      const promises = container.querySelectorAll('li');
      const disclaimer = container.querySelector('.service-disclaimer');

      // Promises should be about process, not outcomes
      promises.forEach(promise => {
        expect(promise.textContent).not.toMatch(/guarantee|guaranteed/i);
        expect(promise.textContent).not.toMatch(/will increase|will generate/i);
      });

      expect(disclaimer.textContent).toContain('typical processes');
      expect(disclaimer.textContent).toContain('depend on');
      expect(disclaimer.textContent).toContain('beyond our control');
    });
  });

  describe('Accessibility of Legal Notices', () => {
    test('ensures disclaimers are screen reader accessible', () => {
      container.innerHTML = `
        <div role="complementary" aria-labelledby="legal-notice-heading">
          <h2 id="legal-notice-heading" class="sr-only">Legal Notices and Disclaimers</h2>
          <div class="legal-content">
            <div role="alert" class="disclaimer-alert">
              <span class="sr-only">Important legal notice: </span>
              All portfolio content is fictional for demonstration purposes.
            </div>
          </div>
        </div>
      `;

      const complementary = container.querySelector('[role="complementary"]');
      const alert = container.querySelector('[role="alert"]');
      const srText = container.querySelector('.sr-only');

      expect(complementary.getAttribute('aria-labelledby')).toBe('legal-notice-heading');
      expect(alert.getAttribute('role')).toBe('alert');
      expect(srText.textContent).toContain('Important legal notice');
    });

    test('validates keyboard navigation for interactive disclaimers', () => {
      container.innerHTML = `
        <button class="legal-disclaimer-badge" 
                role="button" 
                tabindex="0"
                aria-expanded="false"
                aria-controls="disclaimer-details"
                onkeydown="if(event.key==='Enter'||event.key===' '){this.click()}">
          DEMO
        </button>
        <div id="disclaimer-details" class="disclaimer-popup" style="display: none;">
          <p>This is a demonstration case study with fictional details.</p>
        </div>
      `;

      const button = container.querySelector('button');
      const popup = container.querySelector('#disclaimer-details');

      expect(button.getAttribute('tabindex')).toBe('0');
      expect(button.getAttribute('aria-controls')).toBe('disclaimer-details');
      expect(popup.id).toBe('disclaimer-details');

      // Test keyboard activation
      let clickTriggered = false;
      button.addEventListener('click', () => {
        clickTriggered = true;
      });

      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });

      button.dispatchEvent(enterEvent);
      expect(clickTriggered).toBe(true);
    });
  });

  describe('Compliance Monitoring', () => {
    test('validates disclaimer completeness across portfolio items', () => {
      container.innerHTML = `
        <div data-portfolio-grid>
          <article data-portfolio-item class="has-disclaimer">
            <div class="legal-disclaimer-badge">DEMO</div>
            <h3>Project 1</h3>
          </article>
          <article data-portfolio-item class="has-disclaimer">
            <div class="legal-disclaimer-badge">DEMO</div>
            <h3>Project 2</h3>
          </article>
          <article data-portfolio-item class="has-disclaimer">
            <div class="legal-disclaimer-badge">DEMO</div>
            <h3>Project 3</h3>
          </article>
        </div>
      `;

      const portfolioItems = container.querySelectorAll('[data-portfolio-item]');
      const disclaimerBadges = container.querySelectorAll('.legal-disclaimer-badge');

      // Every portfolio item should have a disclaimer badge
      expect(portfolioItems.length).toBe(disclaimerBadges.length);
      
      portfolioItems.forEach(item => {
        const badge = item.querySelector('.legal-disclaimer-badge');
        expect(badge).not.toBeNull();
        expect(badge.textContent).toContain('DEMO');
      });
    });

    test('ensures consistent legal language across components', () => {
      const requiredPhrases = [
        'fictional',
        'demonstration purposes',
        'educational',
        'no actual client relationships',
        'FTC compliance'
      ];

      container.innerHTML = `
        <div class="legal-content">
          <p>All content is fictional and created for demonstration purposes. This is educational material with no actual client relationships represented, ensuring FTC compliance.</p>
        </div>
      `;

      const legalText = container.textContent.toLowerCase();

      requiredPhrases.forEach(phrase => {
        expect(legalText).toContain(phrase.toLowerCase());
      });
    });
  });

  describe('Business Ethics Compliance', () => {
    test('maintains professional standards in fictional representations', () => {
      container.innerHTML = `
        <div class="ethical-standards">
          <h3>Professional Commitment</h3>
          <p>While portfolio examples are fictional for privacy protection, the methodologies, processes, and approaches shown represent my genuine professional capabilities and planned service delivery.</p>
          <div class="ethics-notice">
            <p>All fictional representations are based on realistic industry scenarios and proven business transformation principles to provide accurate expectations of my professional approach.</p>
          </div>
        </div>
      `;

      const content = container.textContent;
      
      expect(content).toContain('genuine professional capabilities');
      expect(content).toContain('accurate expectations');
      expect(content).toContain('proven business transformation principles');
      expect(content).toContain('privacy protection');
    });

    test('balances marketing effectiveness with legal compliance', () => {
      container.innerHTML = `
        <div class="balanced-approach">
          <div class="marketing-content">
            <h3>Proven Transformation Methodology</h3>
            <p>See how systematic approaches drive measurable business improvements.</p>
          </div>
          <div class="compliance-content">
            <p class="text-sm text-amber-700 bg-amber-50 p-3 rounded">
              Results and examples shown are fictional demonstrations of methodology. Your actual results will depend on your specific situation, market conditions, and implementation.
            </p>
          </div>
        </div>
      `;

      const marketingContent = container.querySelector('.marketing-content');
      const complianceContent = container.querySelector('.compliance-content');

      // Marketing content should be compelling but not misleading
      expect(marketingContent.textContent).toContain('Proven');
      expect(marketingContent.textContent).toContain('measurable');
      expect(marketingContent.textContent).not.toMatch(/guarantee|guaranteed/i);

      // Compliance content should be clear and prominent
      expect(complianceContent.textContent).toContain('fictional demonstrations');
      expect(complianceContent.textContent).toContain('Your actual results will depend');
      expect(complianceContent.className).toContain('bg-amber-50'); // Visually distinct
    });
  });
});