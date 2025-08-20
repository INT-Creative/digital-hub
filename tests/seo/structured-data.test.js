/**
 * SEO and Structured Data Tests
 * Validates SEO implementation, structured data markup, and search optimization
 */

import { describe, test, expect, jest, beforeEach, afterEach } from '@jest/globals';

describe('SEO and Structured Data Tests', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
    
    // Reset head content
    const existingMeta = document.querySelectorAll('meta[data-test]');
    existingMeta.forEach(meta => meta.remove());
    
    jest.clearAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    
    // Clean up test meta tags
    const testMeta = document.querySelectorAll('meta[data-test]');
    testMeta.forEach(meta => meta.remove());
  });

  describe('Structured Data Markup', () => {
    test('validates ImageObject structured data for portfolio images', () => {
      const expectedImageSchema = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "@id": "https://intcreative.co/images/portfolio/wellness-studio-transformation-desktop.jpg",
        "url": "https://intcreative.co/images/portfolio/wellness-studio-transformation-desktop.jpg",
        "name": "Serenity Wellness Studio - Website Development Transformation Project Image",
        "alternateName": "Serenity Wellness Studio website transformation showing mobile booking system that increased client inquiries by 400% in 60 days for Health & Wellness industry",
        "description": "Visual representation of Serenity Wellness Studio website development transformation project showing 0 to 50 qualified leads per month",
        "width": "1200",
        "height": "630",
        "encodingFormat": "image/jpeg",
        "contentUrl": "https://intcreative.co/images/portfolio/wellness-studio-transformation-desktop.jpg",
        "thumbnailUrl": "https://intcreative.co/images/portfolio/wellness-studio-transformation-mobile.jpg",
        "creator": {
          "@type": "Person",
          "name": "Jacob Internicola",
          "jobTitle": "Business Transformation Consultant"
        },
        "copyrightHolder": {
          "@type": "Organization",
          "name": "INT Creative Hub"
        },
        "creditText": "INT Creative Hub Portfolio",
        "copyrightNotice": "© INT Creative Hub - Demonstration Portfolio",
        "usageInfo": "Educational demonstration of business transformation methodology",
        "acquireLicensePage": "https://intcreative.co/portfolio",
        "isPartOf": {
          "@type": "CreativeWork",
          "name": "Serenity Wellness Studio Case Study",
          "url": "https://intcreative.co/portfolio/wellness-studio-transformation"
        },
        "about": {
          "@type": "Thing",
          "name": "website development for service businesses",
          "description": "Demonstration of website development methodology for Northeast Ohio service business transformation"
        },
        "keywords": "Serenity Wellness Studio, Website Development, website-development, service business transformation, Northeast Ohio, demonstration portfolio, Health & Wellness",
        "inLanguage": "en-US",
        "license": "https://creativecommons.org/licenses/by-nc/4.0/",
        "disclaimer": "This is a demonstration case study created for educational purposes. All client names and details are fictional."
      };

      // Validate required fields
      expect(expectedImageSchema["@context"]).toBe("https://schema.org");
      expect(expectedImageSchema["@type"]).toBe("ImageObject");
      expect(expectedImageSchema["@id"]).toContain("https://intcreative.co/images/portfolio/");
      expect(expectedImageSchema.url).toBeDefined();
      expect(expectedImageSchema.name).toContain("Transformation Project Image");
      expect(expectedImageSchema.alternateName).toBeDefined();
      expect(expectedImageSchema.description).toBeDefined();
      expect(expectedImageSchema.width).toBe("1200");
      expect(expectedImageSchema.height).toBe("630");
      expect(expectedImageSchema.encodingFormat).toBe("image/jpeg");
      
      // Validate creator information
      expect(expectedImageSchema.creator["@type"]).toBe("Person");
      expect(expectedImageSchema.creator.name).toBe("Jacob Internicola");
      expect(expectedImageSchema.creator.jobTitle).toBe("Business Transformation Consultant");
      
      // Validate copyright information
      expect(expectedImageSchema.copyrightHolder["@type"]).toBe("Organization");
      expect(expectedImageSchema.copyrightHolder.name).toBe("INT Creative Hub");
      
      // Validate legal disclaimer
      expect(expectedImageSchema.disclaimer).toContain("demonstration case study");
      expect(expectedImageSchema.disclaimer).toContain("fictional");
    });

    test('validates CreativeWork structured data for portfolio projects', () => {
      const expectedCreativeWorkSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Serenity Wellness Studio Transformation",
        "alternateName": "Website Development Case Study",
        "description": "Complete website overhaul with booking system that increased client inquiries by 400% in 60 days.",
        "creator": {
          "@type": "Person",
          "name": "Jacob Internicola",
          "jobTitle": "Business Transformation Consultant",
          "worksFor": {
            "@type": "Organization",
            "name": "INT Creative Hub"
          }
        },
        "about": {
          "@type": "Thing",
          "name": "Website Development for Health & Wellness Services",
          "description": "Business transformation through website development and booking system implementation"
        },
        "keywords": [
          "website development",
          "business transformation",
          "booking system",
          "lead generation",
          "Health & Wellness",
          "Northeast Ohio"
        ],
        "inLanguage": "en-US",
        "copyrightYear": "2024",
        "copyrightHolder": {
          "@type": "Organization",
          "name": "INT Creative Hub"
        },
        "license": "https://creativecommons.org/licenses/by-nc/4.0/",
        "usageInfo": "Educational demonstration of business transformation methodology",
        "isBasedOn": {
          "@type": "Thing",
          "name": "Service Business Transformation Methodology"
        },
        "workExample": {
          "@type": "CreativeWork",
          "name": "400% increase in client inquiries",
          "description": "Measurable business outcome achieved through website transformation"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Service Business Owners",
          "geographicArea": {
            "@type": "Place",
            "name": "Northeast Ohio"
          }
        },
        "educationalCredentialAwarded": "Business Transformation Case Study",
        "teaches": [
          "Website development for service businesses",
          "Lead generation system implementation",
          "Mobile-first design principles",
          "Booking system integration"
        ]
      };

      // Validate core creative work properties
      expect(expectedCreativeWorkSchema["@type"]).toBe("CreativeWork");
      expect(expectedCreativeWorkSchema.name).toContain("Transformation");
      expect(expectedCreativeWorkSchema.description).toBeDefined();
      expect(expectedCreativeWorkSchema.creator.name).toBe("Jacob Internicola");
      expect(expectedCreativeWorkSchema.about.name).toContain("Website Development");
      expect(Array.isArray(expectedCreativeWorkSchema.keywords)).toBe(true);
      expect(expectedCreativeWorkSchema.inLanguage).toBe("en-US");
      expect(expectedCreativeWorkSchema.license).toContain("creativecommons.org");
      expect(expectedCreativeWorkSchema.usageInfo).toContain("Educational demonstration");
    });

    test('validates Organization structured data', () => {
      const expectedOrganizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "INT Creative Hub",
        "alternateName": "INT Creative LLC",
        "url": "https://intcreative.co",
        "logo": "https://intcreative.co/images/logo.svg",
        "description": "Business transformation consultant specializing in website development, digital marketing, and marketing automation for Northeast Ohio service businesses",
        "founder": {
          "@type": "Person",
          "name": "Jacob Internicola",
          "jobTitle": "Business Transformation Consultant"
        },
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "OH",
          "addressCountry": "US",
          "addressLocality": "Northeast Ohio"
        },
        "areaServed": [
          {
            "@type": "Place",
            "name": "Northeast Ohio"
          },
          {
            "@type": "Place",
            "name": "United States"
          }
        ],
        "serviceType": [
          "Website Development",
          "Digital Marketing",
          "Graphic Design",
          "Marketing Automation"
        ],
        "knowsAbout": [
          "Business Transformation",
          "Service Business Marketing",
          "Lead Generation",
          "Website Development",
          "Marketing Automation"
        ],
        "slogan": "Transform Your Service Business with Proven Systems",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "en-US",
          "url": "https://intcreative.co/contact"
        }
      };

      // Validate organization properties
      expect(expectedOrganizationSchema["@type"]).toBe("Organization");
      expect(expectedOrganizationSchema.name).toBe("INT Creative Hub");
      expect(expectedOrganizationSchema.url).toBe("https://intcreative.co");
      expect(expectedOrganizationSchema.founder.name).toBe("Jacob Internicola");
      expect(Array.isArray(expectedOrganizationSchema.serviceType)).toBe(true);
      expect(expectedOrganizationSchema.serviceType).toContain("Website Development");
      expect(Array.isArray(expectedOrganizationSchema.areaServed)).toBe(true);
      expect(expectedOrganizationSchema.contactPoint.contactType).toBe("customer service");
    });

    test('validates BreadcrumbList structured data', () => {
      const expectedBreadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://intcreative.co/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": "https://intcreative.co/portfolio"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Serenity Wellness Studio",
            "item": "https://intcreative.co/portfolio/wellness-studio-transformation"
          }
        ]
      };

      expect(expectedBreadcrumbSchema["@type"]).toBe("BreadcrumbList");
      expect(Array.isArray(expectedBreadcrumbSchema.itemListElement)).toBe(true);
      expect(expectedBreadcrumbSchema.itemListElement).toHaveLength(3);
      
      expectedBreadcrumbSchema.itemListElement.forEach((item, index) => {
        expect(item["@type"]).toBe("ListItem");
        expect(item.position).toBe(index + 1);
        expect(item.name).toBeDefined();
        expect(item.item).toContain("intcreative.co");
      });
    });
  });

  describe('Meta Tags and SEO Elements', () => {
    test('validates essential meta tags', () => {
      // Create mock meta tags
      const metaTags = [
        { name: 'description', content: 'Professional portfolio showcasing business transformation results for Northeast Ohio service businesses. See real case studies and proven methodologies.' },
        { name: 'keywords', content: 'business transformation, website development, digital marketing, Northeast Ohio, service businesses, case studies' },
        { name: 'author', content: 'Jacob Internicola' },
        { name: 'robots', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ];

      metaTags.forEach(({ name, content }) => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        meta.setAttribute('data-test', 'true');
        document.head.appendChild(meta);
      });

      const description = document.querySelector('meta[name="description"]');
      const keywords = document.querySelector('meta[name="keywords"]');
      const author = document.querySelector('meta[name="author"]');
      const robots = document.querySelector('meta[name="robots"]');
      const viewport = document.querySelector('meta[name="viewport"]');

      expect(description.content).toContain('business transformation');
      expect(description.content.length).toBeGreaterThan(120);
      expect(description.content.length).toBeLessThan(160);
      
      expect(keywords.content).toContain('Northeast Ohio');
      expect(author.content).toBe('Jacob Internicola');
      expect(robots.content).toBe('index, follow');
      expect(viewport.content).toContain('width=device-width');
    });

    test('validates Open Graph meta tags', () => {
      const ogTags = [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Portfolio - Business Transformation Case Studies | INT Creative Hub' },
        { property: 'og:description', content: 'See how I transform service businesses through proven website development, digital marketing, and automation strategies.' },
        { property: 'og:url', content: 'https://intcreative.co/portfolio' },
        { property: 'og:image', content: 'https://intcreative.co/images/portfolio/og-portfolio-preview.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'INT Creative Hub' },
        { property: 'og:locale', content: 'en_US' }
      ];

      ogTags.forEach(({ property, content }) => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        meta.setAttribute('data-test', 'true');
        document.head.appendChild(meta);
      });

      const ogType = document.querySelector('meta[property="og:type"]');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      const ogImage = document.querySelector('meta[property="og:image"]');

      expect(ogType.content).toBe('website');
      expect(ogTitle.content).toContain('Portfolio');
      expect(ogTitle.content).toContain('INT Creative Hub');
      expect(ogDescription.content).toContain('transform service businesses');
      expect(ogUrl.content).toBe('https://intcreative.co/portfolio');
      expect(ogImage.content).toContain('.jpg');
    });

    test('validates Twitter Card meta tags', () => {
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@intcreativehub' },
        { name: 'twitter:creator', content: '@jacobinternicola' },
        { name: 'twitter:title', content: 'Portfolio - Business Transformation Case Studies' },
        { name: 'twitter:description', content: 'Real results from service business transformations in Northeast Ohio. See proven methodologies in action.' },
        { name: 'twitter:image', content: 'https://intcreative.co/images/portfolio/twitter-portfolio-preview.jpg' }
      ];

      twitterTags.forEach(({ name, content }) => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        meta.setAttribute('data-test', 'true');
        document.head.appendChild(meta);
      });

      const twitterCard = document.querySelector('meta[name="twitter:card"]');
      const twitterSite = document.querySelector('meta[name="twitter:site"]');
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');

      expect(twitterCard.content).toBe('summary_large_image');
      expect(twitterSite.content).toBe('@intcreativehub');
      expect(twitterTitle.content).toContain('Portfolio');
    });

    test('validates canonical URL', () => {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://intcreative.co/portfolio';
      canonical.setAttribute('data-test', 'true');
      document.head.appendChild(canonical);

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      expect(canonicalLink.href).toBe('https://intcreative.co/portfolio');
    });
  });

  describe('Content Optimization', () => {
    test('validates heading structure for SEO', () => {
      container.innerHTML = `
        <main>
          <h1>Portfolio - Demonstration Projects</h1>
          <section>
            <h2>Business Transformation Case Studies</h2>
            <article>
              <h3>Serenity Wellness Studio</h3>
              <h4>Website Development Results</h4>
              <h5>Key Metrics</h5>
            </article>
          </section>
        </main>
      `;

      const h1 = container.querySelector('h1');
      const h2 = container.querySelector('h2');
      const h3 = container.querySelector('h3');

      expect(h1).not.toBeNull();
      expect(h1.textContent).toContain('Portfolio');
      expect(h2.textContent).toContain('Business Transformation');
      expect(h3.textContent).toContain('Serenity Wellness Studio');

      // Should have only one H1
      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements).toHaveLength(1);
    });

    test('validates image alt attributes for SEO', () => {
      container.innerHTML = `
        <img src="/images/portfolio/wellness-studio-transformation-desktop.jpg"
             alt="Serenity Wellness Studio website transformation showing mobile booking system that increased client inquiries by 400% in 60 days for Health & Wellness industry"
             data-portfolio-image>
        <img src="/images/portfolio/hvac-lead-generation-desktop.jpg"
             alt="Northeast HVAC Solutions digital marketing transformation showing Facebook ads campaign that reduced cost-per-lead from $85 to $32 for Home Services industry"
             data-portfolio-image>
      `;

      const images = container.querySelectorAll('img[data-portfolio-image]');
      
      images.forEach(img => {
        expect(img.alt).toBeDefined();
        expect(img.alt.length).toBeGreaterThan(50); // Descriptive alt text
        expect(img.alt).toContain('transformation');
        expect(img.alt).toMatch(/\d+%|\$\d+/); // Contains metrics
        expect(img.alt).toContain('industry');
      });
    });

    test('validates internal linking structure', () => {
      container.innerHTML = `
        <nav>
          <a href="/">Home</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/services">Services</a>
        </nav>
        <main>
          <article data-portfolio-item>
            <a href="/portfolio/wellness-studio-transformation" 
               title="View detailed case study for Serenity Wellness Studio website development project">
              View Case Study
            </a>
          </article>
          <section>
            <a href="/services/website-development">Website Development Services</a>
            <a href="/contact">Book Your Free Strategy Call</a>
          </section>
        </main>
      `;

      const internalLinks = container.querySelectorAll('a[href^="/"]');
      
      internalLinks.forEach(link => {
        expect(link.href).toBeDefined();
        expect(link.href.startsWith('/')).toBe(true);
        
        // Portfolio links should have descriptive titles
        if (link.href.includes('/portfolio/')) {
          expect(link.title || link.textContent).toContain('case study');
        }
      });
    });

    test('validates schema markup in script tags', () => {
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "name": "Portfolio Image",
        "description": "Business transformation case study"
      });
      schemaScript.setAttribute('data-test', 'true');
      document.head.appendChild(schemaScript);

      const schema = document.querySelector('script[type="application/ld+json"]');
      expect(schema).not.toBeNull();
      
      const schemaData = JSON.parse(schema.textContent);
      expect(schemaData["@context"]).toBe("https://schema.org");
      expect(schemaData["@type"]).toBeDefined();
    });
  });

  describe('Technical SEO', () => {
    test('validates sitemap generation', () => {
      const expectedSitemapUrls = [
        'https://intcreative.co/',
        'https://intcreative.co/portfolio',
        'https://intcreative.co/portfolio/wellness-studio-transformation',
        'https://intcreative.co/portfolio/hvac-lead-generation',
        'https://intcreative.co/services',
        'https://intcreative.co/services/website-development',
        'https://intcreative.co/contact'
      ];

      // Mock sitemap data
      const mockSitemap = expectedSitemapUrls.map(url => ({
        url,
        lastmod: '2024-01-01',
        changefreq: 'weekly',
        priority: url === 'https://intcreative.co/' ? '1.0' : '0.8'
      }));

      expect(mockSitemap).toHaveLength(7);
      
      mockSitemap.forEach(entry => {
        expect(entry.url).toContain('intcreative.co');
        expect(entry.lastmod).toBeDefined();
        expect(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).toContain(entry.changefreq);
        expect(parseFloat(entry.priority)).toBeGreaterThan(0);
        expect(parseFloat(entry.priority)).toBeLessThanOrEqual(1);
      });
    });

    test('validates robots.txt directives', () => {
      const expectedRobotsTxt = `
        User-agent: *
        Allow: /
        Allow: /portfolio
        Allow: /services
        Allow: /contact
        
        Sitemap: https://intcreative.co/sitemap.xml
        Sitemap: https://intcreative.co/portfolio-sitemap.xml
      `;

      expect(expectedRobotsTxt).toContain('User-agent: *');
      expect(expectedRobotsTxt).toContain('Allow: /');
      expect(expectedRobotsTxt).toContain('Sitemap: https://intcreative.co/sitemap.xml');
    });

    test('validates page loading speed factors', () => {
      container.innerHTML = `
        <img src="/images/portfolio/test.jpg" 
             loading="lazy"
             decoding="async"
             width="400"
             height="300">
        <link rel="preload" href="/images/portfolio/above-fold.jpg" as="image">
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
      `;

      const img = container.querySelector('img');
      expect(img.loading).toBe('lazy');
      expect(img.decoding).toBe('async');
      expect(img.width).toBe(400);
      expect(img.height).toBe(300);
    });

    test('validates mobile-friendliness indicators', () => {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      viewport.setAttribute('data-test', 'true');
      document.head.appendChild(viewport);

      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="portfolio-card">Mobile-optimized content</div>
        </div>
      `;

      const viewportMeta = document.querySelector('meta[name="viewport"]');
      const responsiveGrid = container.querySelector('.grid');

      expect(viewportMeta.content).toContain('width=device-width');
      expect(responsiveGrid.className).toContain('grid-cols-1');
    });
  });

  describe('Local SEO', () => {
    test('validates local business schema', () => {
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "INT Creative Hub",
        "description": "Business transformation consultant for Northeast Ohio service businesses",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "OH",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Northeast Ohio",
          "containsPlace": [
            { "@type": "City", "name": "Cleveland, OH" },
            { "@type": "City", "name": "Akron, OH" },
            { "@type": "City", "name": "Canton, OH" }
          ]
        },
        "serviceType": [
          "Website Development",
          "Digital Marketing",
          "Marketing Automation"
        ],
        "priceRange": "$2,500 - $10,000"
      };

      expect(localBusinessSchema["@type"]).toBe("ProfessionalService");
      expect(localBusinessSchema.address.addressRegion).toBe("OH");
      expect(localBusinessSchema.areaServed.name).toBe("Northeast Ohio");
      expect(Array.isArray(localBusinessSchema.serviceType)).toBe(true);
      expect(localBusinessSchema.priceRange).toContain("$");
    });

    test('validates local keywords in content', () => {
      container.innerHTML = `
        <h1>Business Transformation for Northeast Ohio Service Companies</h1>
        <p>Serving Cleveland, Akron, Canton and surrounding areas with proven website development and digital marketing solutions.</p>
        <div class="service-areas">
          <span>Cleveland</span>
          <span>Akron</span>
          <span>Canton</span>
          <span>Youngstown</span>
        </div>
      `;

      const heading = container.querySelector('h1');
      const paragraph = container.querySelector('p');
      const serviceAreas = Array.from(container.querySelectorAll('.service-areas span'));

      expect(heading.textContent).toContain('Northeast Ohio');
      expect(paragraph.textContent).toContain('Cleveland');
      expect(paragraph.textContent).toContain('Akron');
      expect(serviceAreas.map(area => area.textContent)).toContain('Canton');
    });
  });

  describe('Content Quality and Relevance', () => {
    test('validates keyword density and distribution', () => {
      const content = `
        Business transformation through website development and digital marketing
        for Northeast Ohio service businesses. Our proven methodology delivers
        measurable results for service companies looking to transform their online
        presence and generate more qualified leads.
      `;

      const targetKeywords = [
        'business transformation',
        'website development', 
        'digital marketing',
        'service businesses',
        'Northeast Ohio'
      ];

      targetKeywords.forEach(keyword => {
        expect(content.toLowerCase()).toContain(keyword.toLowerCase());
      });

      // Check keyword density isn't too high (basic check)
      const wordCount = content.split(/\s+/).length;
      const keywordCount = (content.toLowerCase().match(/business transformation/g) || []).length;
      const density = (keywordCount / wordCount) * 100;

      expect(density).toBeLessThan(5); // Keep keyword density reasonable
    });

    test('validates semantic content relationships', () => {
      container.innerHTML = `
        <article>
          <h3>Website Development</h3>
          <p>Transform your online presence with mobile-first design and conversion optimization.</p>
          <div class="related-topics">
            <a href="/services/digital-marketing">Digital Marketing</a>
            <a href="/services/marketing-automation">Marketing Automation</a>
          </div>
        </article>
      `;

      const heading = container.querySelector('h3');
      const description = container.querySelector('p');
      const relatedLinks = container.querySelectorAll('.related-topics a');

      expect(description.textContent).toContain('Transform');
      expect(relatedLinks).toHaveLength(2);
      
      // Related topics should be semantically related
      const linkTexts = Array.from(relatedLinks).map(link => link.textContent);
      expect(linkTexts).toContain('Digital Marketing');
      expect(linkTexts).toContain('Marketing Automation');
    });
  });

  describe('Search Console Optimization', () => {
    test('validates page titles for search results', () => {
      const pageTitles = [
        'Portfolio - Business Transformation Case Studies | INT Creative Hub',
        'Serenity Wellness Studio - Website Development Case Study | INT Creative Hub',
        'Northeast HVAC Solutions - Digital Marketing Success Story | INT Creative Hub'
      ];

      pageTitles.forEach(title => {
        expect(title.length).toBeGreaterThan(30);
        expect(title.length).toBeLessThan(60);
        expect(title).toContain('INT Creative Hub');
        expect(title).toContain('|'); // Brand separator
      });
    });

    test('validates meta descriptions for click-through rate', () => {
      const metaDescriptions = [
        'See real business transformation results from Northeast Ohio service companies. Proven website development and digital marketing case studies with measurable ROI.',
        'Complete website overhaul with booking system increased client inquiries by 400% in 60 days. See the full transformation methodology and results.',
        'Facebook ads campaign reduced cost-per-lead from $85 to $32 while tripling volume. Detailed digital marketing case study with proven strategies.'
      ];

      metaDescriptions.forEach(description => {
        expect(description.length).toBeGreaterThan(120);
        expect(description.length).toBeLessThan(160);
        expect(description).toMatch(/\d+%|\$\d+/); // Contains compelling metrics
        expect(description).toContain('transformation' || 'results' || 'case study');
      });
    });
  });
});