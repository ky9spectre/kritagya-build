import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

function getEnvVar(key: string): string | undefined {
  try {
    return process.env[key];
  } catch {
    return undefined;
  }
}

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(32).optional(),
    NEXTAUTH_URL: z.string().url().optional(),
    RESEND_API_KEY: z.string().min(1).optional(),
    RECAPTCHA_SECRET_KEY: z.string().min(1).optional(),
    UPSTASH_REDIS_REST_URL: z.string().url().optional(),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(1).optional(),
    NEXT_PUBLIC_CALENDLY_URL: z.string().url().optional(),
    NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().min(1).optional(),
  },
  runtimeEnv: {
    DATABASE_URL: getEnvVar('DATABASE_URL'),
    NEXTAUTH_SECRET: getEnvVar('NEXTAUTH_SECRET'),
    NEXTAUTH_URL: getEnvVar('NEXTAUTH_URL'),
    RESEND_API_KEY: getEnvVar('RESEND_API_KEY'),
    RECAPTCHA_SECRET_KEY: getEnvVar('RECAPTCHA_SECRET_KEY'),
    UPSTASH_REDIS_REST_URL: getEnvVar('UPSTASH_REDIS_REST_URL'),
    UPSTASH_REDIS_REST_TOKEN: getEnvVar('UPSTASH_REDIS_REST_TOKEN'),
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: getEnvVar('NEXT_PUBLIC_RECAPTCHA_SITE_KEY'),
    NEXT_PUBLIC_CALENDLY_URL: getEnvVar('NEXT_PUBLIC_CALENDLY_URL'),
    NEXT_PUBLIC_WHATSAPP_NUMBER: getEnvVar('NEXT_PUBLIC_WHATSAPP_NUMBER'),
  },
  skipValidation: true,
});