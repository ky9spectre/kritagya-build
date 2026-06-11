import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  budget: z.enum(['starter', 'business', 'premium', 'custom']).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  honeypot: z.string().optional(),
  'g-recaptcha-response': z.string().min(1, 'reCAPTCHA verification required'),
});

export const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  budget: z.enum(['starter', 'business', 'premium', 'custom']).optional(),
  message: z.string().max(2000).optional(),
  honeypot: z.string().optional(),
  'g-recaptcha-response': z.string().min(1, 'reCAPTCHA verification required'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const updateLeadStatusSchema = z.object({
  status: z.enum(['NEW', 'CONTACTED', 'PROPOSAL', 'CLOSED']),
});

export const testimonialSchema = z.object({
  clientName: z.string().min(2).max(100),
  businessName: z.string().max(100).optional(),
  industry: z.string().max(100).optional(),
  quote: z.string().min(10).max(1000),
  rating: z.number().min(1).max(5),
  photoUrl: z.string().url().optional(),
});

export const caseStudySchema = z.object({
  title: z.string().min(2).max(200),
  slug: z.string().min(2).max(200).regex(/^[a-z0-9-]+$/),
  industry: z.string().min(2).max(100),
  problem: z.string().min(10).max(2000),
  solution: z.string().min(10).max(2000),
  result: z.string().min(10).max(2000),
  imageUrls: z.array(z.string().url()).min(1).max(10),
  techStack: z.array(z.string().min(1).max(50)).max(20),
  clientName: z.string().max(100).optional(),
  published: z.boolean().default(false),
});

export const blogPostSchema = z.object({
  title: z.string().min(2).max(200),
  slug: z.string().min(2).max(200).regex(/^[a-z0-9-]+$/),
  content: z.string().min(100),
  excerpt: z.string().min(10).max(500),
  tags: z.array(z.string().min(1).max(50)).max(10),
  coverImage: z.string().url().optional(),
  published: z.boolean().default(false),
  readingTime: z.number().min(1),
});