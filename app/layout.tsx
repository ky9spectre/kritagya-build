import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agency.com'),
  title: {
    default: 'Agency | We Build Websites That Grow Your Business',
    template: '%s | Agency',
  },
  description: 'Award-winning web design agency. We build websites that grow your business. Custom design, development, SEO, and digital strategy.',
  keywords: ['web design', 'web development', 'SEO', 'digital agency', 'website design', 'ecommerce'],
  authors: [{ name: 'Agency' }],
  creator: 'Agency',
  publisher: 'Agency',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agency.com',
    siteName: 'Agency',
    title: 'Agency | We Build Websites That Grow Your Business',
    description: 'Award-winning web design agency. We build websites that grow your business.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agency - Web Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency | We Build Websites That Grow Your Business',
    description: 'Award-winning web design agency. We build websites that grow your business.',
    images: ['/og-image.jpg'],
    creator: '@agency',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1f5e' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://api.resend.com" />
      </head>
      <body className={`${inter.variable} ${headingFont.variable} font-sans antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}