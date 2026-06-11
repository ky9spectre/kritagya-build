'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, RefreshCw } from 'lucide-react';

const statusColors: Record<string, 'warning' | 'info' | 'success' | 'default'> = {
  NEW: 'warning',
  CONTACTED: 'info',
  PROPOSAL: 'info',
  CLOSED: 'success',
};

const mockLeads = [
  { id: '1', name: 'Priya Sharma', email: 'priya@example.com', phone: '+91 98765 43210', budget: 'business', message: 'Looking for a complete website redesign for our e-commerce store.', status: 'NEW', source: 'contact', createdAt: '2024-03-15T10:30:00Z' },
  { id: '2', name: 'Rajesh Kumar', email: 'rajesh@example.com', phone: '+91 87654 32109', budget: 'premium', message: 'Need a custom healthcare portal with appointment scheduling.', status: 'CONTACTED', source: 'contact', createdAt: '2024-03-14T08:15:00Z' },
  { id: '3', name: 'Ananya Patel', email: 'ananya@example.com', budget: 'starter', message: 'Looking for a simple 5-page website for my new startup.', status: 'NEW', source: 'pricing', createdAt: '2024-03-13T14:45:00Z' },
];

export default function AdminLeadsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [leads, setLeads] = useState(mockLeads);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!session) return null;

  const filteredLeads = filter === 'ALL' ? leads : leads.filter((l) => l.status === filter);

  async function updateStatus(leadId: string, newStatus: string) {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-dark/50">
      <header className="bg-white dark:bg-navy-dark border-b border-gray-200 dark:border-navy-light">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="text-sm text-gray-500 dark:text-gray-400 hover:text-navy dark:hover:text-white flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Link>
            <h1 className="text-xl font-heading font-bold text-navy dark:text-white">Leads & Submissions</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Status</SelectItem>
                <SelectItem value="NEW">New</SelectItem>
                <SelectItem value="CONTACTED">Contacted</SelectItem>
                <SelectItem value="PROPOSAL">Proposal</SelectItem>
                <SelectItem value="CLOSED">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="ghost" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" /> Refresh
          </Button>
        </div>

        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <Card key={lead.id}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-navy dark:text-white">{lead.name}</h3>
                      <Badge variant={statusColors[lead.status] || 'default'}>{lead.status}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{lead.email}</span>
                      {lead.phone && <span>{lead.phone}</span>}
                      {lead.budget && <span className="capitalize">Budget: {lead.budget}</span>}
                      <span className="text-gray-400">{new Date(lead.createdAt).toLocaleDateString()}</span>
                    </div>
                    {lead.message && (
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{lead.message}</p>
                    )}
                  </div>
                  <Select value={lead.status} onValueChange={(v) => updateStatus(lead.id, v)}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NEW">New</SelectItem>
                      <SelectItem value="CONTACTED">Contacted</SelectItem>
                      <SelectItem value="PROPOSAL">Proposal</SelectItem>
                      <SelectItem value="CLOSED">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}