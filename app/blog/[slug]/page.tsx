import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { escapeHtml } from '@/lib/utils';

const blogPosts = [
  {
    title: 'How to Choose the Right Tech Stack for Your Web Project',
    slug: 'choose-right-tech-stack',
    content: `
Choosing the right technology stack is one of the most critical decisions in web development. The tech stack you choose will impact your project's performance, scalability, maintenance costs, and development speed.

## What is a Tech Stack?

A tech stack is the combination of programming languages, frameworks, libraries, and tools used to build a web application. It typically includes a frontend framework, a backend framework, a database, and various supporting services.

## Key Factors to Consider

### Project Requirements
Start by understanding what your project needs. A simple landing page has different requirements than a complex SaaS platform.

### Team Expertise
Choose technologies your team knows well. Learning a new stack can significantly slow down development.

### Performance Needs
For high-traffic applications, prioritize performance-optimized frameworks like Next.js or Remix.

### Scalability
Consider future growth. Will your application need to handle 100 users or 1 million?

## Popular Tech Stacks

### Next.js + TypeScript + Prisma + PostgreSQL
Modern, full-stack JavaScript application with excellent developer experience and performance.

### WordPress + PHP + MySQL
Ideal for content-heavy sites and blogs. Easy to manage with a visual editor.

### React + Node.js + MongoDB
Flexible stack for custom applications. Great for real-time features.

## Making the Decision

Evaluate each option against your specific needs. Don't choose a stack because it's popular - choose it because it's right for your project.
    `,
    excerpt: 'Choosing the right technology stack is one of the most critical decisions in web development. Learn how to evaluate options and make the best choice for your project.',
    tags: ['Web Development', 'Tech Stack', 'Best Practices'],
    coverImage: '/placeholder-blog.svg',
    publishedAt: '2024-03-15',
    readingTime: 8,
    author: 'Vikram Joshi',
  },
  {
    title: 'The Ultimate Guide to SEO for Small Businesses in India',
    slug: 'seo-guide-small-businesses',
    content: `
Search engine optimization (SEO) is essential for small businesses in India looking to attract local customers. With the right strategy, you can compete with larger companies and appear at the top of search results.

## Why SEO Matters for Small Businesses

Most customers start their buying journey with a Google search. If your business doesn't appear in the top results, you're missing out on valuable leads.

## On-Page SEO Basics

### Title Tags
Include your primary keyword in the title tag. Keep it under 60 characters.

### Meta Descriptions
Write compelling descriptions that encourage clicks. Include a call to action.

### Header Tags
Use H1, H2, and H3 tags to structure your content. Include keywords naturally.

### Image Alt Text
Describe your images for accessibility and SEO benefits.

## Local SEO for Indian Businesses

### Google Business Profile
Claim and optimize your Google Business Profile. This is crucial for local searches.

### Local Keywords
Target location-specific keywords like "web designer in Mumbai" or "best restaurant in Delhi."

### Local Citations
Ensure your business name, address, and phone number are consistent across the web.

## Technical SEO

### Mobile Optimization
Google uses mobile-first indexing. Ensure your site works perfectly on mobile devices.

### Site Speed
Page speed is a ranking factor. Optimize images, use caching, and choose a fast hosting provider.

### SSL Certificate
Secure your site with HTTPS. It's a ranking factor and builds trust with visitors.

## Content Strategy

Create valuable content that answers your customers' questions. Blog posts, guides, and FAQs help establish authority and attract organic traffic.
    `,
    excerpt: `SEO doesn't have to be complicated. This comprehensive guide covers everything small businesses in India need to know about ranking higher on Google.`,
    tags: ['SEO', 'Digital Marketing', 'Small Business'],
    coverImage: '/placeholder-blog.svg',
    publishedAt: '2024-03-10',
    readingTime: 12,
    author: 'Sneha Patel',
  },
  {
    title: 'Why Your Business Needs a Responsive Website in 2024',
    slug: 'responsive-website-importance',
    content: `
With mobile traffic accounting for over 60% of web visits worldwide, having a responsive website is no longer optional. It's a necessity for any business that wants to succeed online.

## What is Responsive Design?

Responsive web design ensures your website looks and functions perfectly on all devices - desktops, tablets, and smartphones. It automatically adjusts layout, images, and navigation based on screen size.

## The Mobile-First Reality

### Mobile Traffic Dominance
Over 60% of web traffic comes from mobile devices. This number continues to grow each year.

### Google Mobile-First Indexing
Google primarily uses the mobile version of your site for indexing and ranking.

### User Behavior
Most users will leave a site if it doesn't load properly on their phone within 3 seconds.

## Benefits of Responsive Design

### Better User Experience
A responsive site provides a consistent experience across all devices.

### Improved SEO
Google rewards mobile-friendly websites with higher rankings.

### Cost Effective
One responsive site costs less to maintain than separate desktop and mobile versions.

### Higher Conversion Rates
Mobile-optimized sites see significantly higher conversion rates.

## Key Elements of Responsive Design

### Fluid Grids
Use relative units like percentages instead of fixed pixel values.

### Flexible Images
Ensure images scale properly and load quickly on all devices.

### CSS Media Queries
Use media queries to apply different styles based on screen size.

### Touch-Friendly Navigation
Design navigation elements that are easy to tap with a finger.

## Getting Started

If your website isn't responsive, it's time for an upgrade. Modern frameworks like Tailwind CSS make responsive design easier than ever.
    `,
    excerpt: `With mobile traffic accounting for over 60% of web visits, having a responsive website is no longer optional. Here's why it matters for your business.`,
    tags: ['Web Design', 'Mobile', 'UX'],
    coverImage: '/placeholder-blog.svg',
    publishedAt: '2024-03-05',
    readingTime: 6,
    author: 'Riya Kapoor',
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Agency Blog`,
      description: post.excerpt,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  function renderContent(text: string) {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-navy dark:text-white mt-8 mb-4">{escapeHtml(line.replace('## ', ''))}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-bold text-navy dark:text-white mt-6 mb-3">{escapeHtml(line.replace('### ', ''))}</h3>;
      }
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\*[：:]?\s*(.+)/);
        if (match) {
          return (
            <div key={i} className="ml-4 mb-3">
              <strong className="text-navy dark:text-white">{escapeHtml(match[1])}</strong>
              <span className="text-gray-700 dark:text-gray-300">: {escapeHtml(match[2])}</span>
            </div>
          );
        }
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="ml-6 text-gray-700 dark:text-gray-300 mb-1 list-disc">{escapeHtml(line.replace('- ', ''))}</li>;
      }
      if (line.trim() === '') {
        return <div key={i} className="h-4" />;
      }
      return <p key={i} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{escapeHtml(line)}</p>;
    });
  }

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-0">{tag}</Badge>
              ))}
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm">
              <span className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.publishedAt}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {post.coverImage && (
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            )}
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {renderContent(post.content)}
            </article>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-navy-light">
              <Link href="/blog">
                <Button variant="ghost" className="text-navy dark:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  More Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}