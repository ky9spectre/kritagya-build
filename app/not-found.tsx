import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-heading text-8xl font-bold text-navy dark:text-white mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button variant="navy" size="lg">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}