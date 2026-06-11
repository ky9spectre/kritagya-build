import { Resend } from 'resend';
import { env } from './env';

const resend = new Resend(env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  budget?: string;
  message: string;
}): Promise<void> {
  await resend.emails.send({
    from: 'Contact Form <contact@yourdomain.com>',
    to: ['hello@yourdomain.com'],
    subject: `New Contact: ${data.name} (${data.budget || 'No budget specified'})`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  });
}

export async function sendLeadNotification(data: {
  name: string;
  email: string;
  phone?: string;
  budget?: string;
}): Promise<void> {
  await resend.emails.send({
    from: 'Leads <leads@yourdomain.com>',
    to: ['sales@yourdomain.com'],
    subject: `New Lead: ${data.name} - ${data.budget || 'Custom'}`,
    html: `
      <h2>New Lead from Pricing Page</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
    `,
  });
}

export async function sendConfirmationEmail(email: string, name: string): Promise<void> {
  await resend.emails.send({
    from: 'Agency <noreply@yourdomain.com>',
    to: [email],
    subject: 'Thanks for reaching out!',
    html: `
      <h2>Hi ${name},</h2>
      <p>Thanks for contacting us! We've received your message and will get back to you within 24 hours.</p>
      <p>In the meantime, feel free to check out our <a href="${env.NEXT_PUBLIC_CALENDLY_URL}">Calendly</a> to book a discovery call.</p>
      <br>
      <p>Best regards,<br>The Agency Team</p>
    `,
  });
}