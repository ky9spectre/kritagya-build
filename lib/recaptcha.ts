import { env } from './env';

export async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: 'POST',
      }
    );
    const data = await response.json();
    return data.success && data.score >= 0.5;
  } catch {
    return false;
  }
}