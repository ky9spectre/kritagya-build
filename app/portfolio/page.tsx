import { Metadata } from 'next';
import { PortfolioContent } from './content';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of successful web design and development projects. See how we help businesses grow with custom websites.',
  openGraph: {
    title: 'Portfolio | Agency',
    description: 'Explore our portfolio of successful projects.',
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}