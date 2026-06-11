import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the team behind Agency. A passionate group of designers, developers, and strategists dedicated to building websites that grow your business.',
  openGraph: {
    title: 'About | Agency',
    description: 'Meet the team behind Agency.',
  },
};

export default function AboutPage() {
  const team = [
    {
      name: 'Arun Mehta',
      role: 'CEO & Sales',
      initials: 'AM',
      bio: 'With 15+ years in digital strategy and business development, Arun leads our client relationships and ensures every project delivers measurable ROI.',
      color: 'bg-blue-500',
    },
    {
      name: 'Riya Kapoor',
      role: 'Design Director',
      initials: 'RK',
      bio: 'Award-winning designer with a passion for creating beautiful, conversion-focused interfaces. Riya has designed for Fortune 500 companies and startups alike.',
      color: 'bg-purple-500',
    },
    {
      name: 'Vikram Joshi',
      role: 'Lead Developer',
      initials: 'VJ',
      bio: 'Full-stack engineer specializing in Next.js, React, and scalable architectures. Vikram builds performant, accessible web applications that stand the test of time.',
      color: 'bg-navy',
    },
    {
      name: 'Sneha Patel',
      role: 'Marketing & Growth',
      initials: 'SP',
      bio: 'Data-driven marketing strategist focused on SEO, content, and conversion optimization. Sneha turns websites into growth engines.',
      color: 'bg-green-500',
    },
  ];

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">About Agency</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We&apos;re a small but mighty team of designers, developers, and strategists on a mission to help businesses thrive online.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy dark:text-white mb-6">Our Story</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2018 in Mumbai, Agency started as a two-person team with a simple belief: great websites should be accessible to every business. What began as freelance projects for local businesses has grown into a full-service digital agency serving clients across India and globally.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Over the years, we&apos;ve completed 150+ projects across e-commerce, healthcare, SaaS, education, and more. Our approach is rooted in collaboration, transparency, and a relentless focus on results.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, our team of 4 brings together expertise in design, development, marketing, and strategy. We&apos;re proud to have helped businesses of all sizes — from ambitious startups to established enterprises — build websites that truly grow their business.
              </p>
            </div>
          </div>

          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white text-center mb-12">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className={`w-32 h-32 rounded-full ${member.color} mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg transition-transform group-hover:scale-105`}>
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-1">{member.name}</h3>
                <p className="text-purple font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-navy-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-navy dark:text-white mb-2">8+</div>
              <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy dark:text-white mb-2">150+</div>
              <p className="text-gray-600 dark:text-gray-400">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy dark:text-white mb-2">98%</div>
              <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}