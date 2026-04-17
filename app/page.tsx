import { DashboardLayout } from '@/components/layout/dashboard/DashboardLayout'
import { StatsCard } from '@/features/dashboard/components/StatsCard'
import { DataTable } from '@/features/table/components/DataTable'
import { Toasts } from '@/components/ui/toast/Toast'

async function getStats() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stats`, {
    cache: 'no-store',
  })
  return res.json()
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: {
    page?: string
    search?: string
    sort?: string
    order?: string
  }
}) {
    const statsRes = await getStats()

  return (
    <DashboardLayout>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-lg)',
          marginBottom: 'var(--space-xl)',
        }}
      >
        {statsRes.data.map((s: any) => (
          <StatsCard key={s.title} {...s} />
        ))}
      </div>

      <Toasts />

      <DataTable searchParams={searchParams} />
    </DashboardLayout>
  )
}
