import { headers } from 'next/headers'
import { DashboardLayout } from '@/components/layout/dashboard/DashboardLayout'
import { StatsCard } from '@/features/dashboard/components/StatsCard'
import { DataTable } from '@/features/table/components/DataTable'
import { Toasts } from '@/components/ui/toast/Toast'

async function getStats() {
  const headersList = await headers() // ✅ FIX
  const host = headersList.get('host')

  const protocol =
    process.env.NODE_ENV === 'development' ? 'http' : 'https'

  const res = await fetch(`${protocol}://${host}/api/stats`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch stats')
  }

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
      {/* Stats Grid */}
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

      {/* CSS Toast System */}
      <Toasts />

      {/* Data Table */}
      <DataTable searchParams={searchParams} />
    </DashboardLayout>
  )
}
