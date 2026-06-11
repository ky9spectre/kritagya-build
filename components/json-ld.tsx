import Script from 'next/script';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Agency',
  url: 'https://agency.com',
  logo: 'https://agency.com/logo.svg',
  description: 'Award-winning web design agency building websites that grow your business.',
  foundingDate: '2018',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-98765-43210',
    contactType: 'sales',
    email: 'hello@agency.com',
  },
  sameAs: [
    'https://facebook.com/agency',
    'https://twitter.com/agency',
    'https://linkedin.com/company/agency',
    'https://instagram.com/agency',
  ],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Agency',
  image: 'https://agency.com/logo.svg',
  '@id': 'https://agency.com',
  url: 'https://agency.com',
  telephone: '+91-98765-43210',
  email: 'hello@agency.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Business Park, Andheri East',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400093',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.076,
    longitude: 72.8777,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '₹15,000 - ₹2,00,000',
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'Organization',
    name: 'Agency',
  },
  name: 'Web Design & Development Services',
  description: 'Professional web design, development, SEO, and e-commerce services.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Package',
      price: '15000',
      priceCurrency: 'INR',
      description: '5-page responsive website for startups',
    },
    {
      '@type': 'Offer',
      name: 'Business Package',
      price: '35000',
      priceCurrency: 'INR',
      description: '10-page website with CMS and SEO',
    },
    {
      '@type': 'Offer',
      name: 'Premium Package',
      price: '80000',
      priceCurrency: 'INR',
      description: 'Custom web application with full support',
    },
  ],
};

export function OrganizationJsonLd() {
  return (
    <Script
      id="json-ld-organization"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <Script
      id="json-ld-local-business"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
    />
  );
}

export function ServiceJsonLd() {
  return (
    <Script
      id="json-ld-service"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
    />
  );
}