import { Metadata } from 'next';
import { ServicesContent } from './content';
import { ServiceJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive web design and development services. From startups to enterprise, we build websites that grow your business.',
  keywords: ['web design services', 'web development', 'SEO', 'e-commerce', 'web application'],
  openGraph: {
    title: 'Services | Agency',
    description: 'Comprehensive web design and development services.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceJsonLd />
      <ServicesContent />
    </>
  );
}