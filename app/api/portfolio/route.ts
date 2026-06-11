import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 3600;

const caseStudies = [
  {
    id: '1',
    title: 'ShopVibe — E-commerce Platform',
    slug: 'shopvibe-ecommerce',
    industry: 'E-commerce',
    problem: 'Slow, outdated platform with 3.2% conversion rate and high cart abandonment.',
    solution: 'Custom Next.js platform with optimized checkout, headless CMS, and Algolia search.',
    result: 'Conversion rate increased to 9.8%. Page load time reduced from 6.2s to 1.1s. Revenue up 187%.',
    imageUrls: ['/placeholder-case.svg'],
    techStack: ['Next.js', 'Stripe', 'Algolia', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
    clientName: 'Priya Sharma',
    published: true,
  },
  {
    id: '2',
    title: 'MediCare — Healthcare Portal',
    slug: 'medicare-healthcare',
    industry: 'Healthcare',
    problem: 'Manual appointment system with long wait times and overwhelmed staff.',
    solution: 'Full patient portal with scheduling, video consultations, and EHR integration.',
    result: 'Appointments up 200%. Satisfaction from 3.2 to 4.8/5. Admin workload reduced 60%.',
    imageUrls: ['/placeholder-case.svg'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Socket.io', 'Docker'],
    clientName: 'Rajesh Kumar',
    published: true,
  },
  {
    id: '3',
    title: 'GreenLeaf — Sustainability Brand',
    slug: 'greenleaf-sustainability',
    industry: 'Education',
    problem: 'No online presence. Needed brand identity and website to establish credibility.',
    solution: 'Complete brand identity with WordPress site, blog, and donation system.',
    result: '50k monthly visitors in 6 months. 200+ newsletter sign-ups. Donations up 340%.',
    imageUrls: ['/placeholder-case.svg'],
    techStack: ['WordPress', 'PHP', 'MySQL', 'SASS', 'Mailchimp', 'Stripe'],
    clientName: 'Ananya Patel',
    published: true,
  },
];

export async function GET() {
  const published = caseStudies.filter((cs) => cs.published);
  return NextResponse.json(published);
}