import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { env } from './env';

const redis = new Redis({
  url: env.UPSTASH_REDIS_REST_URL,
  token: env.UPSTASH_REDIS_REST_TOKEN,
});

export const contactRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '1 h'),
  analytics: true,
  prefix: 'ratelimit:contact',
});

export const loginRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '15 m'),
  analytics: true,
  prefix: 'ratelimit:login',
});

export const apiRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, '1 m'),
  analytics: true,
  prefix: 'ratelimit:api',
});

export async function checkRateLimit(
  rateLimit: Ratelimit,
  identifier: string
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  const result = await rateLimit.limit(identifier);
  return {
    success: result.success,
    limit: result.limit,
    remaining: result.remaining,
    reset: result.reset,
  };
}

export async function incrementFailedLogin(email: string): Promise<number> {
  const key = `login:failed:${email}`;
  const count = await redis.incr(key);
  if (count === 1) {
    await redis.expire(key, 15 * 60);
  }
  return count;
}

export async function resetFailedLogin(email: string): Promise<void> {
  await redis.del(`login:failed:${email}`);
}

export async function isLockedOut(email: string): Promise<boolean> {
  const count = await redis.get(`login:failed:${email}`);
  return (count as number) >= 5;
}

export async function lockoutUser(email: string): Promise<void> {
  await redis.set(`login:lockout:${email}`, '1', { ex: 15 * 60 });
}