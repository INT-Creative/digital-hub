// SEO Optimization Utilities for Portfolio System
// Comprehensive SEO tools for the INT Creative Hub portfolio

export interface PortfolioSEOData {
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  serviceType: string;
  industry: string;
  location: string;
  imageAlt: string;
  socialTitle: string;
  socialDescription: string;
}

// Generate SEO-optimized alt text for portfolio images
export function generatePortfolioImageAlt(
  projectTitle: string,
  serviceType: string,
  industry: string,
  keyResult: string
): string {
  const serviceTypeMap: Record<string, string> = {
    'website-development': 'website development',
    'digital-marketing': 'digital marketing',
    'graphic-design': 'graphic design and branding',
    'marketing-automation': 'marketing automation'
  };
  
  const readableService = serviceTypeMap[serviceType] || serviceType;
  const industryContext = industry ? ` for ${industry.toLowerCase()}` : '';
  
  return `${readableService} transformation project${industryContext} - ${projectTitle} case study showing ${keyResult} - demonstration portfolio for Northeast Ohio service businesses`;
}

// Generate SEO-friendly URLs with proper keyword targeting
export function generateSEOFriendlySlug(
  title: string,
  serviceType: string,
  location?: string
): string {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
    
  const locationSuffix = location ? `-${location.toLowerCase().replace(/\s+/g, '-')}` : '';
  const serviceSuffix = serviceType ? `-${serviceType}` : '';
  
  return `${baseSlug}${serviceSuffix}${locationSuffix}`.substring(0, 60);
}

// Generate comprehensive meta descriptions with local SEO
export function generatePortfolioMetaDescription(
  title: string,
  serviceType: string,
  industry: string,
  keyResult: string,
  location: string = 'Northeast Ohio'
): string {
  const serviceMap: Record<string, string> = {
    'website-development': 'Website development and lead generation system',
    'digital-marketing': 'Digital marketing and lead generation campaign',
    'graphic-design': 'Professional branding and graphic design',
    'marketing-automation': 'Marketing automation and workflow optimization'
  };
  
  const serviceDescription = serviceMap[serviceType] || 'Business transformation project';
  
  return `${serviceDescription} for ${title} ${industry ? `(${industry})` : ''} achieved ${keyResult}. See demonstration case study showing proven methodology for ${location} service business transformation. Fixed-fee consulting with measurable results.`.substring(0, 160);
}

// Generate keyword arrays for different service types
export function generateSEOKeywords(
  serviceType: string,
  industry: string,
  location: string = 'Northeast Ohio'
): string[] {
  const baseKeywords = [
    `service business transformation ${location}`,
    'professional service business consulting',
    'fixed fee business consulting',
    'local business growth strategy',
    `${location} business marketing`,
    'service business lead generation'
  ];
  
  const serviceKeywords: Record<string, string[]> = {
    'website-development': [
      'website development for service businesses',
      'professional service website design',
      'lead generation website development',
      'service business web design',
      'local business website development'
    ],
    'digital-marketing': [
      'digital marketing for service businesses',
      'local business marketing automation',
      'service business lead generation',
      'professional service marketing',
      'small business digital marketing'
    ],
    'graphic-design': [
      'professional service branding',
      'business identity design',
      'service business logo design',
      'professional branding consultation',
      'local business brand development'
    ],
    'marketing-automation': [
      'marketing automation for service businesses',
      'business process automation',
      'customer communication automation',
      'service business workflow automation',
      'automated marketing systems'
    ]
  };
  
  const industryKeywords: Record<string, string[]> = {
    'Health & Wellness': ['healthcare marketing', 'medical practice marketing', 'wellness business marketing'],
    'Legal Services': ['law firm marketing', 'attorney marketing', 'legal practice marketing'],
    'Professional Services': ['professional service marketing', 'consultant marketing', 'business services marketing'],
    'Home Services': ['home services marketing', 'contractor marketing', 'service contractor marketing'],
    'Automotive Services': ['auto repair marketing', 'automotive service marketing', 'car service marketing']
  };
  
  return [
    ...baseKeywords,
    ...(serviceKeywords[serviceType] || []),
    ...(industryKeywords[industry] || []),
    `${industry?.toLowerCase()} ${serviceType.replace('-', ' ')}`,
    `${location} ${industry?.toLowerCase()} marketing`
  ].filter(Boolean);
}

// Generate structured data for individual portfolio items
export function generatePortfolioItemSchema(
  title: string,
  description: string,
  serviceType: string,
  industry: string,
  keyResult: string,
  timeframe: string,
  slug: string,
  technologies: string[],
  completedDate?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://intcreative.co/portfolio/${slug}`,
    "name": `${title} - Service Business Transformation Case Study`,
    "alternateName": `${serviceType.replace('-', ' ')} project for ${title}`,
    "description": description,
    "url": `https://intcreative.co/portfolio/${slug}`,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "CollectionPage",
      "name": "Service Business Transformation Portfolio",
      "url": "https://intcreative.co/portfolio"
    },
    "creator": {
      "@type": "Person",
      "name": "Jacob Internicola",
      "jobTitle": "Business Transformation Consultant",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "INT Creative Hub",
        "url": "https://intcreative.co"
      }
    },
    "about": {
      "@type": "Service",
      "name": serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      "serviceType": "Business Transformation Consulting",
      "provider": {
        "@type": "LocalBusiness",
        "name": "INT Creative Hub"
      },
      "areaServed": "Northeast Ohio"
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Service Business Owners",
      "geographicArea": {
        "@type": "Place",
        "name": "Northeast Ohio"
      }
    },
    "mainEntity": {
      "@type": "CaseStudy",
      "name": `${title} Transformation Results`,
      "description": `Demonstration case study showing ${keyResult} achieved through ${serviceType.replace('-', ' ')} methodology`,
      "result": keyResult,
      "duration": timeframe,
      "methodology": `Proven ${serviceType.replace('-', ' ')} transformation process`,
      "tools": technologies,
      "industry": industry
    },
    "keywords": generateSEOKeywords(serviceType, industry).join(', '),
    "educationalLevel": "Professional",
    "educationalUse": "Methodology demonstration",
    "learningResourceType": "Case Study",
    ...(completedDate && {
      "dateCreated": completedDate,
      "datePublished": completedDate
    }),
    "publisher": {
      "@type": "LocalBusiness",
      "name": "INT Creative Hub",
      "url": "https://intcreative.co",
      "areaServed": "Northeast Ohio"
    },
    "license": "https://creativecommons.org/licenses/by-nc/4.0/",
    "usageInfo": "Educational demonstration of business transformation methodology. All client details are fictional for privacy protection.",
    "disclaimer": "This is a demonstration case study created for educational purposes. All client names, testimonials, and specific metrics are fictional to illustrate methodology while protecting client privacy."
  };
}

// Generate Open Graph tags optimized for portfolio sharing
export function generatePortfolioOGTags(
  title: string,
  description: string,
  serviceType: string,
  slug: string,
  keyResult: string,
  image?: string
): Record<string, string> {
  const socialTitle = `${title} Transformation | ${keyResult} | Northeast Ohio Business Consulting`;
  const socialDescription = `See how ${serviceType.replace('-', ' ')} methodology achieved ${keyResult}. Demonstration case study from Northeast Ohio service business transformation consultant.`;
  
  return {
    'og:title': socialTitle.substring(0, 60),
    'og:description': socialDescription.substring(0, 160),
    'og:type': 'article',
    'og:url': `https://intcreative.co/portfolio/${slug}`,
    'og:image': image || `/images/portfolio/social/${slug}-og.jpg`,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': generatePortfolioImageAlt(title, serviceType, '', keyResult),
    'og:site_name': 'INT Creative Hub',
    'og:locale': 'en_US',
    'article:author': 'Jacob Internicola',
    'article:section': 'Business Transformation',
    'article:tag': generateSEOKeywords(serviceType, '').slice(0, 5).join(','),
    'twitter:card': 'summary_large_image',
    'twitter:site': '@intcreative_co',
    'twitter:creator': '@jacobinternicola',
    'twitter:title': socialTitle.substring(0, 70),
    'twitter:description': socialDescription.substring(0, 200),
    'twitter:image': image || `/images/portfolio/social/${slug}-twitter.jpg`,
    'twitter:image:alt': generatePortfolioImageAlt(title, serviceType, '', keyResult),
    'linkedin:title': socialTitle.substring(0, 70),
    'linkedin:description': socialDescription.substring(0, 160),
    'linkedin:image': image || `/images/portfolio/social/${slug}-linkedin.jpg`
  };
}

// Generate local business schema with portfolio context
export function generateLocalBusinessPortfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://intcreative.co/#localbusiness",
    "name": "INT Creative Hub",
    "alternateName": "INT Creative LLC",
    "description": "Service business transformation consultant specializing in website development, digital marketing automation, and professional branding for Northeast Ohio businesses.",
    "url": "https://intcreative.co",
    "image": "https://intcreative.co/images/int-creative-office.jpg",
    "logo": "https://intcreative.co/images/logo-structured-data.png",
    "telephone": "+1-216-555-0123",
    "email": "jake@intcreative.co",
    "founder": {
      "@type": "Person",
      "name": "Jacob Internicola",
      "jobTitle": "Business Transformation Consultant",
      "alumniOf": "Business Administration",
      "knowsAbout": [
        "Website Development",
        "Digital Marketing",
        "Marketing Automation",
        "Service Business Operations",
        "Lead Generation"
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Cleveland",
        "containedInPlace": "Ohio"
      },
      {
        "@type": "City", 
        "name": "Akron",
        "containedInPlace": "Ohio"
      },
      {
        "@type": "City",
        "name": "Canton", 
        "containedInPlace": "Ohio"
      },
      {
        "@type": "City",
        "name": "Youngstown",
        "containedInPlace": "Ohio"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.4993",
        "longitude": "-81.6944"
      },
      "geoRadius": "100"
    },
    "priceRange": "$2500-$10000",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog", 
      "name": "Service Business Transformation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development for Service Businesses",
            "description": "Custom websites with lead generation, booking systems, and mobile optimization"
          },
          "price": "3500-6500",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Digital Marketing Automation",
            "description": "Lead generation campaigns, social media automation, and customer retention systems"
          },
          "price": "2500-8000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "28",
      "bestRating": "5",
      "worstRating": "4"
    },
    "sameAs": [
      "https://www.linkedin.com/in/jacobinternicola",
      "https://x.com/intcreative_co", 
      "https://www.facebook.com/profile.php?id=6157779911205"
    ]
  };
}

// Voice search optimization keywords
export function generateVoiceSearchKeywords(
  serviceType: string,
  location: string = 'Northeast Ohio'
): string[] {
  const questionWords = ['how to', 'what is', 'where can I find', 'who does', 'best way to'];
  const serviceMap: Record<string, string[]> = {
    'website-development': ['build a website', 'create a website', 'website development', 'web design'],
    'digital-marketing': ['digital marketing', 'online marketing', 'get more customers', 'lead generation'],
    'graphic-design': ['logo design', 'branding', 'graphic design', 'business identity'],
    'marketing-automation': ['automate marketing', 'marketing automation', 'customer management', 'CRM setup']
  };
  
  const services = serviceMap[serviceType] || ['business consulting'];
  const voiceKeywords: string[] = [];
  
  questionWords.forEach(question => {
    services.forEach(service => {
      voiceKeywords.push(`${question} ${service} ${location}`);
      voiceKeywords.push(`${question} ${service} for service businesses`);
      voiceKeywords.push(`${question} ${service} near me`);
    });
  });
  
  return voiceKeywords;
}

// Generate FAQ schema for portfolio pages
export function generatePortfolioFAQSchema(serviceType: string) {
  const faqMap: Record<string, Array<{question: string, answer: string}>> = {
    'website-development': [
      {
        question: "How long does website development for service businesses take?",
        answer: "Most service business websites are completed in 7-14 days using our proven methodology. This includes custom design, mobile optimization, lead generation forms, and basic SEO setup."
      },
      {
        question: "What's included in service business website development?",
        answer: "Our websites include mobile-responsive design, lead capture forms, appointment booking systems, service descriptions, contact integration, basic SEO optimization, and training on content management."
      },
      {
        question: "How much does a service business website cost?",
        answer: "Service business websites range from $3,500-$6,500 depending on complexity, integrations needed, and specific business requirements. All pricing is fixed-fee with no hourly billing."
      }
    ],
    'digital-marketing': [
      {
        question: "How quickly do digital marketing campaigns show results?",
        answer: "Most campaigns show initial results within 30-60 days, with significant improvements typically seen by 90 days. Timeline depends on market competition and campaign complexity."
      },
      {
        question: "What digital marketing services work best for service businesses?",
        answer: "Facebook and Google Ads, local SEO, automated email sequences, and social media management typically provide the best ROI for service businesses in Northeast Ohio."
      },
      {
        question: "How do you measure digital marketing success?",
        answer: "We track lead volume, cost per lead, conversion rates, customer lifetime value, and return on ad spend. All campaigns include detailed monthly reporting with clear metrics."
      }
    ]
  };
  
  const faqs = faqMap[serviceType] || faqMap['website-development'];
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}