'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple to-purple-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your project over a free discovery call. No commitment, just a conversation about how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="xl"
                className="bg-white text-purple hover:bg-gray-100 group shadow-xl"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="xl"
                className="border-white/30 text-white hover:bg-white/10"
              >
                View Our Services
              </Button>
            </Link>
          </div>
          <p className="text-purple-200 text-sm mt-6">
            Free 30-minute consultation · No obligation · Typically responds within 1 hour
          </p>
        </motion.div>
      </div>
    </section>
  );
}