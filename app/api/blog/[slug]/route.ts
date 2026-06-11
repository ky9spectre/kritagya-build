import { NextResponse } from 'next/server';

const blogPosts = [
  {
    title: 'How to Choose the Right Tech Stack for Your Web Project',
    slug: 'choose-right-tech-stack',
    content: 'Choosing the right technology stack is one of the most critical decisions in web development...',
    excerpt: 'Choosing the right technology stack is one of the most critical decisions in web development.',
    tags: ['Web Development', 'Tech Stack'],
    coverImage: '/placeholder-blog.svg',
    published: true,
    publishedAt: '2024-03-15',
    readingTime: 8,
  },
  {
    title: 'The Ultimate Guide to SEO for Small Businesses in India',
    slug: 'seo-guide-small-businesses',
    content: 'Search engine optimization is essential for small businesses in India...',
    excerpt: 'A comprehensive guide covering everything small businesses need to know about SEO.',
    tags: ['SEO', 'Digital Marketing'],
    coverImage: '/placeholder-blog.svg',
    published: true,
    publishedAt: '2024-03-10',
    readingTime: 12,
  },
];

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug && p.published);

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
    },
  });
}