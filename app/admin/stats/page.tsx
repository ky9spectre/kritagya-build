'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Users, MessageSquare, Eye, TrendingUp } from 'lucide-react';

export default function AdminStatsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-dark/50">
      <header className="bg-white dark:bg-navy-dark border-b border-gray-200 dark:border-navy-light">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="text-sm text-gray-500 dark:text-gray-400 hover:text-navy dark:hover:text-white flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Link>
            <h1 className="text-xl font-heading font-bold text-navy dark:text-white">Analytics & Stats</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-navy dark:text-white mb-1">--</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Leads</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <MessageSquare className="h-8 w-8 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-navy dark:text-white mb-1">--</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Contact Submissions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Eye className="h-8 w-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-navy dark:text-white mb-1">6</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Blog Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-navy dark:text-white mb-1">--</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Lead Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['NEW', 'CONTACTED', 'PROPOSAL', 'CLOSED'].map((status) => (
                  <div key={status} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{status}</span>
                    <span className="text-sm font-semibold text-navy dark:text-white">--</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Activity data will appear here once the site starts receiving traffic and submissions.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}