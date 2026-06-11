'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark dark:from-navy-dark dark:to-black">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-purple/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="h-4 w-4 text-purple-light" />
            <span className="text-sm font-medium text-purple-light">Award-Winning Web Design Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            We Build Websites That <span className="text-purple-light">Grow Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            From concept to launch, we craft stunning, high-performance websites that drive real results. 
            Strategic design. Clean code. Proven growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button variant="purple" size="xl" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="xl" className="border-gray-600 text-white hover:bg-white/10">
                View Our Work
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { label: 'Projects Delivered', value: '150+' },
              { label: 'Happy Clients', value: '98%' },
              { label: 'Avg. Rating', value: '4.9/5' },
              { label: 'Years Experience', value: '8+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}