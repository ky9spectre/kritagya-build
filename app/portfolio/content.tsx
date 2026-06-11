'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowUpRight, Quote, ExternalLink } from 'lucide-react';

const industries = ['All', 'E-commerce', 'Healthcare', 'SaaS', 'Education', 'Finance', 'Real Estate'];

const caseStudies = [
  {
    id: 1,
    title: 'ShopVibe — E-commerce Platform',
    slug: 'shopvibe-ecommerce',
    industry: 'E-commerce',
    problem: 'ShopVibe, a growing fashion retailer, was struggling with a slow, outdated e-commerce platform that had a 3.2% conversion rate and high cart abandonment. The site wasn\'t mobile-optimized and had poor SEO rankings.',
    solution: 'We built a custom Next.js e-commerce platform with server-side rendering, optimized checkout flow, and integrated Stripe payments. Implemented a headless CMS for easy product management, added search with Algolia, and created a responsive mobile-first design system.',
    result: 'Conversion rate increased from 3.2% to 9.8%. Page load time reduced from 6.2s to 1.1s. Mobile traffic grew by 200%. Monthly revenue increased by 187%. SEO rankings improved to top 3 for key terms.',
    imageUrl: '/placeholder-case.svg',
    techStack: ['Next.js', 'Stripe', 'Algolia', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
    clientName: 'Priya Sharma',
    clientQuote: 'Agency transformed our online store completely. Our sales tripled within three months of launch.',
    screenshots: ['/placeholder-case.svg', '/placeholder-case.svg'],
  },
  {
    id: 2,
    title: 'MediCare — Healthcare Portal',
    slug: 'medicare-healthcare',
    industry: 'Healthcare',
    problem: 'MediCare Health needed a comprehensive patient portal to replace their manual appointment system. Patients faced long wait times, and administrative staff was overwhelmed with phone calls.',
    solution: 'Developed a full-featured patient portal with appointment scheduling, video consultations, prescription management, and secure messaging. Built with React and Node.js, featuring real-time notifications and EHR integration.',
    result: 'Appointment bookings increased by 200%. Patient satisfaction scores improved from 3.2 to 4.8/5. Administrative workload reduced by 60%. No-show rate dropped from 15% to 3%.',
    imageUrl: '/placeholder-case.svg',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Socket.io', 'Docker'],
    clientName: 'Rajesh Kumar',
    clientQuote: 'The patient portal they built is incredible. Appointment bookings are up 200% and satisfaction scores have never been higher.',
    screenshots: ['/placeholder-case.svg', '/placeholder-case.svg'],
  },
  {
    id: 3,
    title: 'GreenLeaf — Sustainability Brand',
    slug: 'greenleaf-sustainability',
    industry: 'Education',
    problem: 'GreenLeaf, a sustainability startup, needed a brand identity and website that communicated their mission. They had no online presence and needed to establish credibility quickly.',
    solution: 'Created a complete brand identity including logo, color palette, and typography. Built a WordPress site with custom theme, integrating a blog, resource library, and donation system with environmental impact tracker.',
    result: 'Organic traffic grew to 50,000 visitors/month in 6 months. Received 200+ newsletter sign-ups within the first month. Donations increased by 340% through the integrated platform.',
    imageUrl: '/placeholder-case.svg',
    techStack: ['WordPress', 'PHP', 'MySQL', 'SASS', 'Mailchimp', 'Stripe'],
    clientName: 'Ananya Patel',
    clientQuote: 'Working with Agency was a dream. They captured our brand essence perfectly and built a website that truly reflects our values.',
    screenshots: ['/placeholder-case.svg', '/placeholder-case.svg'],
  },
  {
    id: 4,
    title: 'TechFlow — B2B SaaS Platform',
    slug: 'techflow-saas',
    industry: 'SaaS',
    problem: 'TechFlow needed a modern SaaS platform for their project management tool. The existing MVP had a dated UI, poor performance, and a complex onboarding flow causing 40% drop-off.',
    solution: 'Redesigned the entire platform with a focus on user experience. Built with Next.js and implemented a streamlined onboarding wizard, real-time collaboration features, and interactive dashboards.',
    result: 'User onboarding completion improved from 60% to 95%. User retention increased by 70%. Page load time reduced by 80%. Secured Series A funding within 6 months of launch.',
    imageUrl: '/placeholder-case.svg',
    techStack: ['Next.js', 'TypeScript', 'GraphQL', 'Redis', 'AWS', 'Figma'],
    clientName: 'Vikram Singh',
    clientQuote: 'From initial consultation to final launch, Agency was professional, responsive, and creative. Our platform has never performed better.',
    screenshots: ['/placeholder-case.svg', '/placeholder-case.svg'],
  },
  {
    id: 5,
    title: 'Bloom Cosmetics — E-commerce Redesign',
    slug: 'bloom-cosmetics',
    industry: 'E-commerce',
    problem: 'Bloom Cosmetics had a slow, unresponsive Shopify store with a 2.8% mobile conversion rate. The brand wanted a premium experience that reflected their luxury positioning.',
    solution: 'Custom Shopify theme development with enhanced product pages, virtual try-on integration, personalized recommendations, and optimized checkout. Added subscription functionality for recurring orders.',
    result: 'Mobile conversion rate increased from 2.8% to 5.6%. Average order value increased by 45%. Customer lifetime value grew by 60%. Site speed improved by 300%.',
    imageUrl: '/placeholder-case.svg',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'Shopify Plus', 'Klaviyo', 'Loox'],
    clientName: 'Neha Gupta',
    clientQuote: 'Our e-commerce site is beautiful and fast. Agency optimized everything for mobile and our mobile conversion rate doubled.',
    screenshots: ['/placeholder-case.svg', '/placeholder-case.svg'],
  },
  {
    id: 6,
    title: 'Prime Properties — Real Estate Portal',
    slug: 'prime-properties',
    industry: 'Real Estate',
    problem: 'Prime Properties needed a modern real estate portal to replace their static website. They required advanced property search, virtual tours, and an integrated CRM.',
    solution: 'Built a comprehensive real estate platform with map-based search, 3D virtual tours, mortgage calculator, and agent dashboard. Integrated with MLS data for real-time property listings.',
    result: 'Property inquiries increased by 180%. Average time on site increased from 1.5 to 5.2 minutes. Lead quality improved by 60%. Agent productivity increased by 40%.',
    imageUrl: '/placeholder-case.svg',
    techStack: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Three.js', 'AWS'],
    clientName: 'Amit Patel',
    clientQuote: 'The portal Agency built has completely transformed how our clients find properties. It\'s become our biggest competitive advantage.',
    screenshots: ['/placeholder-case.svg', '/placeholder-case.svg'],
  },
];

export function PortfolioContent() {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  const filteredStudies = activeIndustry === 'All'
    ? caseStudies
    : caseStudies.filter((cs) => cs.industry === activeIndustry);

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Real projects, real results. Explore how we&apos;ve helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeIndustry === industry
                    ? 'bg-purple text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-navy-dark text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-light'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card
                      className="cursor-pointer group hover:shadow-xl transition-all duration-300 h-full"
                      onClick={() => setSelectedCase(study)}
                    >
                      <div className="relative h-48 bg-gray-100 dark:bg-navy-light overflow-hidden rounded-t-lg">
                        <Image
                          src={study.imageUrl}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
                          <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8" />
                        </div>
                      </div>
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">{study.industry}</Badge>
                        <CardTitle className="text-lg font-heading text-navy dark:text-white">{study.title}</CardTitle>
                        <CardDescription>{study.result.substring(0, 100)}...</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1.5">
                          {study.techStack.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                          {study.techStack.length > 4 && (
                            <Badge variant="outline" className="text-xs">+{study.techStack.length - 4}</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    {selectedCase && (
                      <>
                        <DialogHeader>
                          <Badge variant="secondary" className="w-fit mb-2">{selectedCase.industry}</Badge>
                          <DialogTitle className="text-2xl font-heading">{selectedCase.title}</DialogTitle>
                          <DialogDescription className="text-base">
                            Client: {selectedCase.clientName}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-8">
                          <div>
                            <h3 className="font-semibold text-lg text-red-600 mb-2">The Problem</h3>
                            <p className="text-gray-700 dark:text-gray-300">{selectedCase.problem}</p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-lg text-blue-600 mb-2">Our Solution</h3>
                            <p className="text-gray-700 dark:text-gray-300">{selectedCase.solution}</p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-lg text-green-600 mb-2">The Result</h3>
                            <p className="text-gray-700 dark:text-gray-300">{selectedCase.result}</p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-lg mb-3">Screenshots</h3>
                            <div className="grid grid-cols-2 gap-4">
                              {selectedCase.screenshots.map((img, i) => (
                                <div key={i} className="relative h-40 rounded-lg overflow-hidden bg-gray-100 dark:bg-navy-light">
                                  <Image
                                    src={img}
                                    alt={`${selectedCase.title} screenshot ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="font-semibold text-lg mb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedCase.techStack.map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                          </div>

                          <div className="bg-purple/5 rounded-lg p-6 border border-purple/20">
                            <Quote className="h-8 w-8 text-purple/40 mb-2" />
                            <p className="text-lg italic text-gray-700 dark:text-gray-200 mb-4">
                              &ldquo;{selectedCase.clientQuote}&rdquo;
                            </p>
                            <p className="font-semibold text-navy dark:text-white">— {selectedCase.clientName}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}