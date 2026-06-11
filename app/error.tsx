'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-heading text-4xl font-bold text-navy dark:text-white mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <Button variant="navy" size="lg" onClick={reset}>
          Try Again
        </Button>
      </div>
    </div>
  );
}