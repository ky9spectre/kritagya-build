'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Users, FileText, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react';

export function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-navy dark:text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) return null;

  const stats = [
    { label: 'New Leads', value: '--', href: '/admin/leads', icon: Users, color: 'text-blue-500' },
    { label: 'Contact Submissions', value: '--', href: '/admin/leads', icon: MessageSquare, color: 'text-purple-500' },
    { label: 'Blog Posts', value: '6', href: '/admin/stats', icon: FileText, color: 'text-green-500' },
    { label: 'Conversion Rate', value: '--', href: '/admin/stats', icon: TrendingUp, color: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-dark/50">
      <header className="bg-white dark:bg-navy-dark border-b border-gray-200 dark:border-navy-light">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-navy dark:hover:text-white">
              ← Back to Site
            </Link>
            <h1 className="text-xl font-heading font-bold text-navy dark:text-white">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 dark:text-gray-300">{session.user?.email}</span>
            <Button variant="ghost" size="sm" onClick={() => signOut({ callbackUrl: '/login' })}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <Link key={stat.label} href={stat.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold text-navy dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/leads">
                <Button variant="outline" className="w-full justify-between">
                  View New Leads
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="w-full justify-between">
                  View Blog Posts
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
              <CardDescription>Latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Activity log will appear here as leads and submissions come in.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}