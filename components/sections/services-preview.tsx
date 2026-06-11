'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    price: '₹15,000 - ₹30,000',
    description: 'Perfect for startups and small businesses looking to establish their online presence.',
    features: [
      '5-page responsive website',
      'Mobile-first design',
      'Basic SEO setup',
      'Contact form integration',
      '1 round of revisions',
      '1 month hosting included',
    ],
    highlighted: false,
  },
  {
    name: 'Business',
    price: '₹35,000 - ₹75,000',
    description: 'Ideal for growing businesses that need a powerful digital presence.',
    features: [
      '10-page responsive website',
      'Custom UI/UX design',
      'Advanced SEO optimization',
      'CMS integration (WordPress/Next.js)',
      'Blog setup',
      'Social media integration',
      'Analytics setup',
      '3 rounds of revisions',
      '3 months hosting included',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium',
    price: '₹80,000 - ₹2,00,000',
    description: 'For established businesses and enterprises requiring a full digital experience.',
    features: [
      'Unlimited pages',
      'Custom web application',
      'Premium UI/UX design system',
      'Complete SEO strategy',
      'E-commerce integration',
      'API integrations',
      'Performance optimization',
      'Priority support',
      'Unlimited revisions',
      '6 months hosting included',
      'Dedicated project manager',
    ],
    highlighted: false,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-navy-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Transparent Pricing, Exceptional Value
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the package that fits your needs. All plans include our signature quality and support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col ${pkg.highlighted ? 'border-purple ring-2 ring-purple/20 shadow-xl' : 'hover:shadow-lg'} transition-shadow`}>
                {pkg.badge && (
                  <Badge variant="purple" className="absolute -top-3 left-1/2 -translate-x-1/2 text-sm px-4 py-1">
                    {pkg.badge}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-navy dark:text-white">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-navy dark:text-white">{pkg.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?plan=${pkg.name.toLowerCase()}`}>
                    <Button variant={pkg.highlighted ? 'purple' : 'navy'} className="w-full">
                      Get Started
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
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Need a custom solution? We offer tailored packages for enterprise needs.
          </p>
          <Link href="/services">
            <Button variant="ghost" className="text-navy dark:text-white hover:text-purple">
              View Full Services & Pricing →
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}