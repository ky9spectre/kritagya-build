import { Metadata } from 'next';
import { AdminDashboard } from '@/components/admin/dashboard';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  robots: 'noindex, nofollow',
};

export default function AdminPage() {
  return <AdminDashboard />;
}