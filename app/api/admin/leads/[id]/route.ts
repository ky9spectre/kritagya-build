import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { updateLeadStatusSchema } from '@/lib/validations';
import { db } from '@/lib/db';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    if (origin && host && !origin.includes(host)) {
      return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
    }

    const body = await request.json();
    const parsed = updateLeadStatusSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { status } = parsed.data;

    const lead = await db.lead.update({
      where: { id: params.id },
      data: { status },
    });

    await db.auditLog.create({
      data: {
        adminId: session.user.id,
        action: 'UPDATE_LEAD_STATUS',
        target: `Lead:${params.id}`,
        details: `Status changed to ${status}`,
      },
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error('Admin leads API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}