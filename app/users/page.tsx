import { DashboardLayout } from '@/components/layout/dashboard/DashboardLayout'
import { DataTable } from '@/features/table/components/DataTable'

export default function UsersPage({
  searchParams,
}: {
  searchParams: {
    page?: string
    search?: string
    sort?: string
    order?: string
  }
}) {
  return (
    <DashboardLayout>
      <h1 style={{ marginBottom: 'var(--space-lg)' }}>Users</h1>

      <p style={{ marginBottom: 'var(--space-md)' }}>
        Manage and view all users in the system.
      </p>

      <DataTable searchParams={searchParams} />
    </DashboardLayout>
  )
}