import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights and tips on web design, development, SEO, and digital marketing from the Agency team.',
  openGraph: {
    title: 'Blog | Agency',
    description: 'Insights and tips on web design, development, and digital marketing.',
  },
};

const blogPosts = [
  {
    title: 'How to Choose the Right Tech Stack for Your Web Project',
    slug: 'choose-right-tech-stack',
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
    excerpt: 'SEO doesn\'t have to be complicated. This comprehensive guide covers everything small businesses in India need to know about ranking higher on Google.',
    tags: ['SEO', 'Digital Marketing', 'Small Business'],
    coverImage: '/placeholder-blog.svg',
    publishedAt: '2024-03-10',
    readingTime: 12,
    author: 'Sneha Patel',
  },
  {
    title: 'Why Your Business Needs a Responsive Website in 2024',
    slug: 'responsive-website-importance',
    excerpt: 'With mobile traffic accounting for over 60% of web visits, having a responsive website is no longer optional. Here\'s why it matters for your business.',
    tags: ['Web Design', 'Mobile', 'UX'],
    coverImage: '/placeholder-blog.svg',
    publishedAt: '2024-03-05',
    readingTime: 6,
    author: 'Riya Kapoor',
  },
  {
    title: 'E-commerce Trends to Watch in India: 2024 Edition',
    slug: 'ecommerce-trends-india-2024',
    excerpt: 'The Indian e-commerce market is booming. Stay ahead of the competition with these key trends that will shape online shopping in 2024.',
    tags: ['E-commerce', 'Trends', 'India'],
    coverImage: '/placeholder-blog.svg',
    publishedAt: '2024-02-28',
    readingTime: 10,
    author: 'Arun Mehta',
  },
  {
    title: 'Next.js vs WordPress: Which One Should You Choose?',
    slug: 'nextjs-vs-wordpress',
    excerpt: 'Both Next.js and WordPress are powerful platforms, but they serve different needs. Compare their strengths to find the perfect fit for your project.',
    tags: ['Next.js', 'WordPress', 'Comparison'],
    coverImage: '/placeholder-blog.svg',
    publishedAt: '2024-02-20',
    readingTime: 9,
    author: 'Vikram Joshi',
  },
  {
    title: 'The Psychology of Color in Web Design',
    slug: 'color-psychology-web-design',
    excerpt: 'Colors evoke emotions and drive decisions. Learn how to use color psychology effectively in your website design to boost conversions.',
    tags: ['Web Design', 'Psychology', 'UX'],
    coverImage: '/placeholder-blog.svg',
    publishedAt: '2024-02-15',
    readingTime: 7,
    author: 'Riya Kapoor',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, tips, and guides on web design, development, SEO, and digital marketing.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 bg-gray-100 dark:bg-navy-light overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg font-heading text-navy dark:text-white group-hover:text-purple transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.publishedAt}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readingTime} min read
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center mt-3 text-xs text-gray-400">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}