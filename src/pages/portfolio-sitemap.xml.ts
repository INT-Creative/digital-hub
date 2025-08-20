// Dedicated Portfolio Sitemap with Enhanced Image SEO
// Optimized for portfolio image indexing and local SEO

import type { APIRoute } from 'astro';
import { portfolioData } from '../data/portfolio';
import { generateSEOKeywords } from '../utils/seo-optimization';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString() || 'https://intcreative.co';
  
  // Group portfolio items by service type for better organization
  const portfolioByService = portfolioData.reduce((acc, item) => {
    if (!acc[item.serviceType]) {
      acc[item.serviceType] = [];
    }
    acc[item.serviceType].push(item);
    return acc;
  }, {} as Record<string, typeof portfolioData>);
  
  const portfolioPages = portfolioData.map(item => {
    const keywords = generateSEOKeywords(item.serviceType, item.clientInfo.industry);
    const isFeatured = ['wellness-studio-transformation', 'hvac-lead-generation', 'law-firm-rebrand', 'dental-practice-automation', 'fitness-studio-complete-transformation'].includes(item.id);
    
    return {
      url: `portfolio/${item.slug}/`,
      lastmod: item.completedDate || '2024-08-20',
      changefreq: 'monthly' as const,
      priority: isFeatured ? '0.9' : '0.7',
      images: [
        {
          loc: `${baseUrl}images/portfolio/${item.slug}-desktop.jpg`,
          caption: `${item.title} - ${item.category} transformation case study for ${item.clientInfo.industry} in ${item.clientInfo.location}. Demonstration showing ${item.clientResults.keyOutcome} achieved through proven ${item.serviceType.replace('-', ' ')} methodology.`,
          title: `${item.title} ${item.category} Transformation | ${item.clientResults.keyOutcome}`,
          license: 'https://creativecommons.org/licenses/by-nc/4.0/',
          geoLocation: item.clientInfo.location.includes('Ohio') ? item.clientInfo.location : `${item.clientInfo.location}, Ohio`
        },
        {
          loc: `${baseUrl}images/portfolio/${item.slug}-tablet.jpg`,
          caption: `Mobile-optimized view of ${item.title} ${item.category} project results`,
          title: `${item.title} Mobile Case Study View`,
          license: 'https://creativecommons.org/licenses/by-nc/4.0/'
        },
        {
          loc: `${baseUrl}images/portfolio/${item.slug}-mobile.jpg`,
          caption: `Thumbnail view of ${item.title} transformation project`,
          title: `${item.title} Project Thumbnail`,
          license: 'https://creativecommons.org/licenses/by-nc/4.0/'
        }
      ],
      // Additional portfolio-specific metadata
      serviceType: item.serviceType,
      industry: item.clientInfo.industry,
      location: item.clientInfo.location,
      keywords: keywords.join(', '),
      transformationMetric: item.clientResults.metric,
      timeframe: item.clientResults.timeframe,
      technologies: item.technologies.slice(0, 5).join(', ')
    };
  });
  
  const portfolioSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:geo="http://www.google.com/geo/schemas/sitemap/1.0"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
  <!-- Portfolio Main Page -->
  <url>
    <loc>${baseUrl}portfolio/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}images/portfolio-hero-northeast-ohio.jpg</image:loc>
      <image:caption>Service business transformation portfolio for Northeast Ohio - Website development, digital marketing, and automation case studies</image:caption>
      <image:title>Northeast Ohio Service Business Transformation Portfolio</image:title>
      <image:license>https://creativecommons.org/licenses/by-nc/4.0/</image:license>
    </image:image>
    <geo:geo>
      <geo:format>kml</geo:format>
    </geo:geo>
  </url>
  
  <!-- Portfolio Filter Pages -->
  ${Object.keys(portfolioByService).map(serviceType => `
  <url>
    <loc>${baseUrl}portfolio/?filter=${serviceType}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  
  <!-- Individual Portfolio Case Studies -->
  ${portfolioPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile />
    ${page.images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:caption><![CDATA[${img.caption}]]></image:caption>
      <image:title><![CDATA[${img.title}]]></image:title>
      <image:license>${img.license}</image:license>
      ${img.geoLocation ? `<image:geo_location>${img.geoLocation}</image:geo_location>` : ''}
    </image:image>`).join('')}
    ${page.location.includes('Ohio') ? `
    <geo:geo>
      <geo:format>kml</geo:format>
    </geo:geo>` : ''}
  </url>`).join('')}
  
  <!-- Service-Specific Portfolio Collections -->
  ${Object.entries(portfolioByService).map(([serviceType, items]) => `
  <!-- ${serviceType.replace('-', ' ').toUpperCase()} COLLECTION -->
  <url>
    <loc>${baseUrl}portfolio/services/${serviceType}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <image:image>
      <image:loc>${baseUrl}images/portfolio/collections/${serviceType}-collection.jpg</image:loc>
      <image:caption>Collection of ${serviceType.replace('-', ' ')} transformation projects for Northeast Ohio service businesses</image:caption>
      <image:title>${serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Portfolio Collection</image:title>
      <image:license>https://creativecommons.org/licenses/by-nc/4.0/</image:license>
    </image:image>
  </url>`).join('')}
  
  <!-- Industry-Specific Collections -->
  ${Array.from(new Set(portfolioData.map(item => item.clientInfo.industry))).map(industry => `
  <url>
    <loc>${baseUrl}portfolio/industry/${industry.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <image:image>
      <image:loc>${baseUrl}images/portfolio/industries/${industry.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}-industry.jpg</image:loc>
      <image:caption>${industry} transformation case studies - Service business consulting for Northeast Ohio</image:caption>
      <image:title>${industry} Business Transformation Portfolio</image:title>
      <image:license>https://creativecommons.org/licenses/by-nc/4.0/</image:license>
    </image:image>
  </url>`).join('')}
  
</urlset>`;

  return new Response(portfolioSitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'noindex',
      'X-Portfolio-Generated': new Date().toISOString(),
      'X-Total-Projects': portfolioData.length.toString(),
      'X-Service-Types': Object.keys(portfolioByService).length.toString()
    }
  });
};