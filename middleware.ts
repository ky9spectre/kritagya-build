import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith('/api/admin')) {
      const origin = req.headers.get('origin') || '';
      const host = req.headers.get('host') || '';
      if (origin && !origin.includes(host)) {
        return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
          return !!token;
        }
        return true;
      },
    },
    pages: {
      signIn: '/login',
    },
  }
);

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};