# Agency Website

A full-stack web design agency website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, PostgreSQL with Prisma ORM, and NextAuth.js.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js with JWT
- **Email:** Resend
- **Rate Limiting:** Upstash Redis
- **Animations:** Framer Motion
- **CMS:** MDX-powered blog
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Upstash Redis instance
- Resend API key
- Google reCAPTCHA keys

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | NextAuth secret (min 32 chars) |
| `NEXTAUTH_URL` | Application URL |
| `RESEND_API_KEY` | Resend transactional email API key |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v3 site key |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA v3 secret key |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly scheduling URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp business number |

### Installation

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Seed database
npm run db:seed

# Start development server
npm run dev
```

### Admin Access

After seeding, you can log in at `/login` with:
- **Email:** admin@agency.com
- **Password:** admin123!@#

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API route handlers
│   ├── admin/             # Protected admin pages
│   ├── blog/              # Blog list and posts
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── about/             # About page
│   └── login/             # Admin login
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page section components
│   └── admin/            # Admin-specific components
├── lib/                   # Utilities and configurations
│   ├── auth.ts           # NextAuth configuration
│   ├── db.ts             # Prisma client
│   ├── env.ts            # Environment validation
│   ├── validations.ts    # Zod schemas
│   ├── email.ts          # Email sending
│   ├── ratelimit.ts      # Rate limiting
│   └── utils.ts          # Utility functions
├── prisma/               # Database schema and seed
└── content/              # Blog content (MDX)
```

## Features

### Pages
- **Home** — Hero, pricing, portfolio grid, testimonials, CTA
- **Services** — Full service breakdown, pricing, add-ons
- **Portfolio** — Filterable case studies with details
- **About** — Team bios, agency story, stats
- **Contact** — Form with validation, WhatsApp, Calendly
- **Blog** — MDX-powered blog with categories
- **Admin** — Protected dashboard for lead management

### Security
- Zod validation on all API inputs
- HTTP security headers (CSP, HSTS, etc.)
- CSRF protection via SameSite cookies and Origin verification
- Rate limiting with Upstash Redis
- reCAPTCHA v3 on forms
- Honeypot spam protection
- bcrypt (rounds=12) password hashing
- JWT with 1-hour expiry
- Admin route protection via middleware
- Login lockout after 5 failed attempts
- Audit logging for all admin actions
- Parameterized Prisma queries only

### SEO & Performance
- `generateMetadata()` on all pages
- JSON-LD structured data
- `next-sitemap` for sitemap.xml
- ISR (revalidate: 3600) on portfolio and blog
- `next/image` with WebP, lazy loading, blur placeholders
- `next/font` with zero layout shift
- Mobile-first responsive design
- Dark mode via `next-themes`
- Framer Motion animations

## Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Environment Variables on Vercel

Add all variables from `.env.example` to your Vercel project settings.

## Scripts

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run ESLint
npm run typecheck     # Run TypeScript check
npm run db:generate   # Generate Prisma client
npm run db:push       # Push schema to database
npm run db:studio     # Open Prisma Studio
npm run db:seed       # Seed database
```
