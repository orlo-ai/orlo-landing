interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
}

interface WebsiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  publisher: {
    '@type': string;
    name: string;
  };
}

interface SoftwareApplicationSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    '@type': string;
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    ratingCount: string;
  };
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Orlo',
    url: 'https://orlo.cc',
    logo: 'https://orlo.cc/img/orlo-logo.png',
    description: 'Rebuild your life, not just your schedule. Orlo helps you manage time through intelligent boundaries and decision fatigue reduction.',
    sameAs: [
      'https://twitter.com/orlo',
      'https://linkedin.com/company/orlo',
      'https://github.com/orlo',
    ],
  };
}

export function generateWebsiteSchema(): WebsiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Orlo - AI-Powered Time Management Assistant',
    url: 'https://orlo.cc',
    description: 'Rebuild your life, not just your schedule. Orlo helps you manage time through intelligent boundaries and decision fatigue reduction.',
    publisher: {
      '@type': 'Organization',
      name: 'Orlo',
    },
  };
}

export function generateSoftwareApplicationSchema(): SoftwareApplicationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Orlo',
    description: 'AI-powered time management assistant that helps rebuild your life through intelligent time boundaries and decision fatigue reduction.',
    url: 'https://orlo.cc',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}