export interface MockCompany {
  id: string;
  companyName: string;
  industry: string;
  companySize: string;
  projectType: string;
  duration: string;
  challenge: string;
  solution: string;
  features: string[];
  results: {
    [key: string]: string;
  };
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  mockupUrl: string;
  liveUrl: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface WebsiteDevelopmentPortfolio {
  title: string;
  description: string;
  showcases: MockCompany[];
}