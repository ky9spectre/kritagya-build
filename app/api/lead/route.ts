import { NextRequest, NextResponse } from 'next/server';
import { leadSchema } from '@/lib/validations';
import { db } from '@/lib/db';
import { sendLeadNotification } from '@/lib/email';
import { verifyRecaptcha } from '@/lib/recaptcha';

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    if (origin && host && !origin.includes(host)) {
      return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
    }

    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

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

    await db.lead.create({
      data: { name, email, phone: phone || null, budget: budget || null, message: message || null, status: 'NEW', source: 'pricing' },
    });

    await sendLeadNotification({ name, email, phone, budget });

    return NextResponse.json({ success: true, message: 'Lead captured successfully!' });
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}