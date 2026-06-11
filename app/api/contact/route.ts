import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';
import { db } from '@/lib/db';
import { checkRateLimit, contactRateLimit } from '@/lib/ratelimit';
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email';
import { verifyRecaptcha } from '@/lib/recaptcha';

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    if (origin && host && !origin.includes(host)) {
      return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
    }

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const rateLimitResult = await checkRateLimit(contactRateLimit, ip);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'X-RateLimit-Limit': String(rateLimitResult.limit), 'X-RateLimit-Remaining': String(rateLimitResult.remaining) } }
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, budget, message, honeypot } = parsed.data;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const recaptchaValid = await verifyRecaptcha(parsed.data['g-recaptcha-response']);
    if (!recaptchaValid) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    await db.contactSubmission.create({
      data: { name, email, subject: budget || 'General Inquiry', message },
    });

    await db.lead.create({
      data: { name, email, phone: phone || null, budget: budget || null, message, status: 'NEW', source: 'contact' },
    });

    await sendContactEmail({ name, email, phone, budget, message });
    await sendConfirmationEmail(email, name);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}