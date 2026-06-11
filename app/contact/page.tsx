import { Metadata } from 'next';
import { ContactContent } from './content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Agency. Book a free discovery call, send us a message, or reach out on WhatsApp. We respond within 1 hour.',
  openGraph: {
    title: 'Contact | Agency',
    description: 'Get in touch with Agency.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}