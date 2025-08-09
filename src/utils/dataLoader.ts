import mockCompaniesData from '../data/mockCompanies.json';
import type { WebsiteDevelopmentPortfolio, MockCompany } from '../types/portfolio';

/**
 * Get all website development portfolio data
 */
export function getWebsiteDevelopmentPortfolio(): WebsiteDevelopmentPortfolio {
  return mockCompaniesData.websiteDevelopment as WebsiteDevelopmentPortfolio;
}

/**
 * Get a specific mock company by ID
 */
export function getMockCompanyById(id: string): MockCompany | undefined {
  const portfolio = getWebsiteDevelopmentPortfolio();
  return portfolio.showcases.find(company => company.id === id);
}

/**
 * Get featured mock companies (first 3)
 */
export function getFeaturedMockCompanies(): MockCompany[] {
  const portfolio = getWebsiteDevelopmentPortfolio();
  return portfolio.showcases.slice(0, 3);
}

/**
 * Get mock companies by industry
 */
export function getMockCompaniesByIndustry(industry: string): MockCompany[] {
  const portfolio = getWebsiteDevelopmentPortfolio();
  return portfolio.showcases.filter(
    company => company.industry.toLowerCase() === industry.toLowerCase()
  );
}

/**
 * Get random mock companies for showcase
 */
export function getRandomMockCompanies(count: number = 3): MockCompany[] {
  const portfolio = getWebsiteDevelopmentPortfolio();
  const shuffled = [...portfolio.showcases].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}