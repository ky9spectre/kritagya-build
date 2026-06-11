import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const db = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  const adminPassword = await bcrypt.hash('admin123!@#', 12);

  await db.adminUser.upsert({
    where: { email: 'admin@agency.com' },
    update: {},
    create: {
      email: 'admin@agency.com',
      passwordHash: adminPassword,
      name: 'Admin',
    },
  });

  const testimonials = [
    {
      clientName: 'Priya Sharma',
      businessName: 'ShopVibe',
      industry: 'E-commerce',
      quote: 'Agency transformed our online store completely. Our sales tripled within three months of launch. Their team understood our vision perfectly and delivered beyond expectations.',
      rating: 5,
      approved: true,
    },
    {
      clientName: 'Rajesh Kumar',
      businessName: 'MediCare Health',
      industry: 'Healthcare',
      quote: 'The patient portal they built for us is incredible. Appointment bookings are up 200% and patient satisfaction scores have never been higher.',
      rating: 5,
      approved: true,
    },
    {
      clientName: 'Ananya Patel',
      businessName: 'GreenLeaf',
      industry: 'Sustainability',
      quote: 'Working with Agency was a dream. They captured our brand essence perfectly and built a website that truly reflects our values.',
      rating: 5,
      approved: true,
    },
    {
      clientName: 'Vikram Singh',
      businessName: 'TechFlow',
      industry: 'SaaS',
      quote: 'From consultation to launch, Agency was professional, responsive, and creative. Our B2B platform has never performed better.',
      rating: 5,
      approved: true,
    },
    {
      clientName: 'Neha Gupta',
      businessName: 'Bloom Cosmetics',
      industry: 'E-commerce',
      quote: 'Our e-commerce site is beautiful and fast. Agency optimized everything for mobile and our mobile conversion rate doubled.',
      rating: 4,
      approved: true,
    },
  ];

  for (const testimonial of testimonials) {
    await db.testimonial.create({ data: testimonial });
  }

  const caseStudies = [
    {
      title: 'ShopVibe — E-commerce Platform',
      slug: 'shopvibe-ecommerce',
      industry: 'E-commerce',
      problem: 'ShopVibe, a growing fashion retailer, was struggling with a slow, outdated e-commerce platform that had a 3.2% conversion rate and high cart abandonment.',
      solution: 'Built a custom Next.js e-commerce platform with server-side rendering, optimized checkout flow, and integrated Stripe payments.',
      result: 'Conversion rate increased from 3.2% to 9.8%. Page load time reduced from 6.2s to 1.1s. Monthly revenue increased by 187%.',
      imageUrls: ['/placeholder-case.svg'],
      techStack: ['Next.js', 'Stripe', 'Algolia', 'Tailwind CSS', 'PostgreSQL'],
      clientName: 'Priya Sharma',
      published: true,
    },
    {
      title: 'MediCare — Healthcare Portal',
      slug: 'medicare-healthcare',
      industry: 'Healthcare',
      problem: 'MediCare Health needed a comprehensive patient portal to replace their manual appointment system.',
      solution: 'Developed a full-featured patient portal with appointment scheduling, video consultations, and secure messaging.',
      result: 'Appointment bookings increased by 200%. Patient satisfaction improved from 3.2 to 4.8/5. Administrative workload reduced by 60%.',
      imageUrls: ['/placeholder-case.svg'],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Socket.io'],
      clientName: 'Rajesh Kumar',
      published: true,
    },
    {
      title: 'GreenLeaf — Sustainability Brand',
      slug: 'greenleaf-sustainability',
      industry: 'Education',
      problem: 'GreenLeaf needed a brand identity and website that communicated their sustainability mission.',
      solution: 'Created complete brand identity with a WordPress site, blog, resource library, and donation system.',
      result: 'Organic traffic grew to 50,000 visitors/month. Donations increased by 340%.',
      imageUrls: ['/placeholder-case.svg'],
      techStack: ['WordPress', 'PHP', 'MySQL', 'SASS', 'Mailchimp'],
      clientName: 'Ananya Patel',
      published: true,
    },
  ];

  for (const study of caseStudies) {
    await db.caseStudy.create({ data: study });
  }

  console.log('✅ Database seeded successfully!');
  console.log('   Admin credentials: admin@agency.com / admin123!@#');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
