'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    business: 'ShopVibe',
    quote: 'Agency transformed our online store completely. Our sales tripled within three months of launch. Their team understood our vision perfectly and delivered beyond expectations.',
    rating: 5,
    role: 'CEO, ShopVibe',
  },
  {
    name: 'Rajesh Kumar',
    business: 'MediCare Health',
    quote: 'The patient portal they built for us is incredible. Appointment bookings are up 200% and patient satisfaction scores have never been higher. Truly professional work.',
    rating: 5,
    role: 'Director, MediCare Health',
  },
  {
    name: 'Ananya Patel',
    business: 'GreenLeaf',
    quote: 'Working with Agency was a dream. They captured our brand essence perfectly and built a website that truly reflects our values. Highly recommended for any business.',
    rating: 5,
    role: 'Founder, GreenLeaf',
  },
  {
    name: 'Vikram Singh',
    business: 'TechFlow',
    quote: 'From the initial consultation to the final launch, Agency was professional, responsive, and creative. Our B2B platform has never performed better. 10/10 experience.',
    rating: 5,
    role: 'CTO, TechFlow',
  },
  {
    name: 'Neha Gupta',
    business: 'Bloom Cosmetics',
    quote: 'Our e-commerce site is beautiful and fast. Agency optimized everything for mobile and our mobile conversion rate doubled. The team is incredibly talented.',
    rating: 4,
    role: 'Marketing Head, Bloom Cosmetics',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gray-50 dark:bg-navy-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what our clients have to say.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-0 shadow-lg bg-white dark:bg-navy-dark/80">
              <CardContent className="p-8 md:p-12">
                <div className="flex mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center text-purple font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-navy dark:text-white">{testimonials[current].name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonials[current].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white dark:bg-navy-dark border border-gray-200 dark:border-navy-light hover:bg-gray-50 dark:hover:bg-navy-light transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current
                      ? 'bg-purple w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white dark:bg-navy-dark border border-gray-200 dark:border-navy-light hover:bg-gray-50 dark:hover:bg-navy-light transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}