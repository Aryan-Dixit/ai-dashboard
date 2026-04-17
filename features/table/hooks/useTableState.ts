'use client'

import { useSearchParams, useRouter } from 'next/navigation'

export function useTableState() {
  const params = useSearchParams()
  const router = useRouter()

  const page = Number(params.get('page') || 1)
  const sort = params.get('sort') || 'name'
  const order = params.get('order') || 'asc'
  const search = params.get('search') || ''

  const update = (newParams: Record<string, string | number>) => {
    const url = new URL(window.location.href)

    Object.entries(newParams).forEach(([key, value]) => {
      url.searchParams.set(key, String(value))
    })

    router.push(url.pathname + '?' + url.searchParams.toString())
  }

  return {
    page,
    sort,
    order,
    search,
    update,
  }
}