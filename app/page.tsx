import { HeroSection } from '@/components/sections/hero';
import { ServicesPreview } from '@/components/sections/services-preview';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { Testimonials } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta';
import { OrganizationJsonLd, LocalBusinessJsonLd } from '@/components/json-ld';

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <HeroSection />
      <ServicesPreview />
      <PortfolioGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}