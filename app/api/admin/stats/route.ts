import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [leadCounts, totalLeads, contactCount, totalContacts] = await Promise.all([
      db.lead.groupBy({
        by: ['status'],
        _count: { status: true },
      }),
      db.lead.count(),
      db.contactSubmission.groupBy({
        by: ['read'],
        _count: { read: true },
      }),
      db.contactSubmission.count(),
    ]);

    const stats = {
      leads: {
        total: totalLeads,
        byStatus: Object.fromEntries(
          leadCounts.map((item: { status: string; _count: { status: number } }) => [item.status, item._count.status])
        ),
      },
      contacts: {
        total: totalContacts,
        unread: contactCount.find((c: { read: boolean; _count: { read: number } }) => !c.read)?._count.read || 0,
      },
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Admin stats API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}