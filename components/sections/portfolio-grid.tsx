'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'ShopVibe — E-commerce Platform',
    industry: 'E-commerce',
    description: 'A modern e-commerce platform with 3x conversion rate improvement.',
    image: '/placeholder-case.svg',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
  },
  {
    title: 'MediCare — Healthcare Portal',
    industry: 'Healthcare',
    description: 'Patient portal with appointment scheduling and telemedicine.',
    image: '/placeholder-case.svg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'GreenLeaf — Sustainability Brand',
    industry: 'Sustainability',
    description: 'Brand identity and website for an eco-friendly startup.',
    image: '/placeholder-case.svg',
    tags: ['WordPress', 'PHP', 'SASS'],
  },
];

export function PortfolioGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Our Recent Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each project is a partnership. See how we helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 bg-gray-100 dark:bg-navy-light overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                  <CardTitle className="text-xl font-heading text-navy dark:text-white">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-base">{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href="/portfolio">
                    <Button variant="ghost" className="group p-0 h-auto text-purple hover:text-purple-dark">
                      View Case Study
                      <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <Button variant="navy" size="lg">
              View All Case Studies
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}