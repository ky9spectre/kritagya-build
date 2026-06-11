'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const budgetOptions = [
  { value: 'starter', label: 'Starter (₹15k - ₹30k)' },
  { value: 'business', label: 'Business (₹35k - ₹75k)' },
  { value: 'premium', label: 'Premium (₹80k - ₹2L)' },
  { value: 'custom', label: 'Custom Budget' },
];

export function ContactContent() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      budget: formData.get('budget'),
      message: formData.get('message'),
      honeypot: formData.get('website'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error || 'Something went wrong. Please try again.',
        });
        return;
      }

      toast({
        variant: 'success',
        title: 'Message Sent!',
        description: 'Thanks for reaching out! We\'ll get back to you within 24 hours.',
      });
      formRef.current?.reset();
    } catch {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Network error. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Let&apos;s Talk</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? Fill out the form below and we&apos;ll get back to you within 1 hour.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-navy dark:text-white mb-6">Send Us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="hidden" aria-hidden="true">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">Name *</Label>
                    <Input id="name" name="name" required minLength={2} maxLength={100} placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <Label htmlFor="budget" className="mb-2 block">Budget Range</Label>
                    <Select name="budget">
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block">Message *</Label>
                  <Textarea id="message" name="message" required minLength={10} maxLength={2000} className="min-h-[150px]" placeholder="Tell us about your project..." />
                </div>

                <Button type="submit" variant="navy" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h3 className="font-heading text-xl font-bold text-navy dark:text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-purple mt-0.5" />
                      <div>
                        <p className="font-medium text-navy dark:text-white">Email</p>
                        <a href="mailto:hello@agency.com" className="text-gray-600 dark:text-gray-300 hover:text-purple transition-colors">
                          hello@agency.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-purple mt-0.5" />
                      <div>
                        <p className="font-medium text-navy dark:text-white">Phone</p>
                        <a href="tel:+919876543210" className="text-gray-600 dark:text-gray-300 hover:text-purple transition-colors">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-purple mt-0.5" />
                      <div>
                        <p className="font-medium text-navy dark:text-white">Location</p>
                        <p className="text-gray-600 dark:text-gray-300">Mumbai, Maharashtra, India</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="h-5 w-5 text-purple mt-0.5" />
                      <div>
                        <p className="font-medium text-navy dark:text-white">Business Hours</p>
                        <p className="text-gray-600 dark:text-gray-300">Mon-Fri: 9 AM - 6 PM IST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy dark:text-white mb-4">Prefer WhatsApp?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Get a faster response. Chat with us directly on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20there!%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="purple" className="w-full group">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy dark:text-white mb-4">Book a Discovery Call</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Schedule a free 30-minute consultation to discuss your project.
                  </p>
                  <Link
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="navy" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}