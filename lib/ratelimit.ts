import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { env } from './env';

function getRedis(): Redis {
  const url = env.UPSTASH_REDIS_REST_URL;
  const token = env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error('Upstash Redis is not configured');
  }
  return new Redis({ url, token });
}

function getContactRateLimit(): Ratelimit {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(3, '1 h'),
    analytics: true,
    prefix: 'ratelimit:contact',
  });
}

function getLoginRateLimit(): Ratelimit {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(5, '15 m'),
    analytics: true,
    prefix: 'ratelimit:login',
  });
}

function getApiRateLimit(): Ratelimit {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(100, '1 m'),
    analytics: true,
    prefix: 'ratelimit:api',
  });
}

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
  const redis = getRedis();
  const key = `login:failed:${email}`;
  const count = await redis.incr(key);
  if (count === 1) {
    await redis.expire(key, 15 * 60);
  }
  return count;
}

export async function resetFailedLogin(email: string): Promise<void> {
  const redis = getRedis();
  await redis.del(`login:failed:${email}`);
}

export async function isLockedOut(email: string): Promise<boolean> {
  const redis = getRedis();
  const count = await redis.get(`login:failed:${email}`);
  return (count as number) >= 5;
}

export async function lockoutUser(email: string): Promise<void> {
  const redis = getRedis();
  await redis.set(`login:lockout:${email}`, '1', { ex: 15 * 60 });
}

export function getRateLimiter(type: 'contact' | 'login' | 'api'): Ratelimit {
  switch (type) {
    case 'contact':
      return getContactRateLimit();
    case 'login':
      return getLoginRateLimit();
    case 'api':
      return getApiRateLimit();
  }
}