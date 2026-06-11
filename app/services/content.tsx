'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Globe, Palette, Search, ShoppingCart, Settings, Code } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Custom, conversion-focused designs that capture your brand essence.',
    features: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive Design', 'Brand Identity'],
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Clean, performant code using modern frameworks and best practices.',
    features: ['Next.js & React', 'Node.js Backend', 'API Development', 'Database Design', 'Performance Optimization', 'Progressive Web Apps'],
  },
  {
    icon: Search,
    title: 'SEO & Marketing',
    description: 'Data-driven strategies to improve visibility and drive organic traffic.',
    features: ['Technical SEO', 'Content Strategy', 'Keyword Research', 'Analytics Setup', 'Conversion Optimization', 'Local SEO'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Full-featured online stores that convert visitors into customers.',
    features: ['Shopify Development', 'WooCommerce', 'Custom Checkout', 'Payment Integration', 'Inventory Management', 'Multi-vendor Support'],
  },
  {
    icon: Globe,
    title: 'Brand Strategy',
    description: 'Comprehensive brand development for memorable digital experiences.',
    features: ['Brand Identity', 'Visual Guidelines', 'Content Strategy', 'Social Media', 'Email Marketing', 'Digital Strategy'],
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Ongoing support to keep your website secure, fast, and up-to-date.',
    features: ['24/7 Monitoring', 'Security Updates', 'Backup Management', 'Performance Tuning', 'Content Updates', 'Technical Support'],
  },
];

const packages = [
  {
    name: 'Starter',
    price: '₹15,000 - ₹30,000',
    timeline: '2-3 weeks',
    features: ['5 responsive pages', 'Mobile-first design', 'Basic SEO', 'Contact form', '1 revision round', '1 month hosting'],
    popular: false,
  },
  {
    name: 'Business',
    price: '₹35,000 - ₹75,000',
    timeline: '4-6 weeks',
    features: ['10 responsive pages', 'Custom UI/UX', 'Advanced SEO', 'CMS integration', 'Blog setup', 'Analytics', '3 revision rounds', '3 months hosting'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹80,000 - ₹2,00,000',
    timeline: '8-12 weeks',
    features: ['Unlimited pages', 'Custom web app', 'Premium design system', 'Complete SEO', 'E-commerce', 'API integrations', 'Unlimited revisions', '6 months hosting', 'Dedicated PM'],
    popular: false,
  },
];

const addons = [
  { name: 'Additional Page', price: '₹3,000/page' },
  { name: 'E-commerce Integration', price: '₹15,000' },
  { name: 'Custom API Development', price: '₹10,000+', description: 'Per endpoint' },
  { name: 'Content Writing (per page)', price: '₹1,500' },
  { name: 'Social Media Integration', price: '₹5,000' },
  { name: 'Priority Support', price: '₹5,000/month' },
  { name: 'Monthly SEO Retainer', price: '₹8,000/month' },
  { name: 'Performance Audit', price: '₹7,000' },
];

export function ServicesContent() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end web solutions tailored to your business needs. From design to deployment and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center mb-4 group-hover:bg-purple/20 transition-colors">
                      <service.icon className="h-6 w-6 text-purple" />
                    </div>
                    <CardTitle className="text-xl font-heading text-navy dark:text-white">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-navy-dark/50" id="pricing">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Fixed-price packages with no hidden costs. Transparent, predictable, and scalable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`relative h-full flex flex-col ${pkg.popular ? 'border-purple ring-2 ring-purple/20 shadow-xl scale-105' : 'hover:shadow-lg'} transition-all`}>
                  {pkg.popular && (
                    <Badge variant="purple" className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading text-navy dark:text-white">{pkg.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-navy dark:text-white">{pkg.price}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit mt-2">
                      Timeline: {pkg.timeline}
                    </Badge>
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
                      <Button variant={pkg.popular ? 'purple' : 'navy'} className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
              Add-On Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Enhance your package with these optional add-ons.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {addons.map((addon) => (
                <Card key={addon.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-navy dark:text-white">{addon.name}</h3>
                      {addon.description && (
                        <p className="text-xs text-gray-500">{addon.description}</p>
                      )}
                    </div>
                    <span className="text-sm font-bold text-purple whitespace-nowrap ml-2">{addon.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Need something custom? We offer tailored solutions for unique requirements.
            </p>
            <Link href="/contact">
              <Button variant="navy" size="lg">
                Get a Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}