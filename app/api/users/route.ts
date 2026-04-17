import { NextRequest, NextResponse } from 'next/server'
import { USERS } from '@/lib/mockData'
import { delay } from '@/lib/delay'
import { ApiResponse } from '@/types/api'

export async function GET(req: NextRequest) {
  await delay()

  const { searchParams } = req.nextUrl

  const page = Number(searchParams.get('page') || 1)
  const limit = Number(searchParams.get('limit') || 10)
  const search = searchParams.get('search')?.toLowerCase() || ''
  const sort = searchParams.get('sort') || 'name'
  const order = searchParams.get('order') || 'asc'

  let filtered = USERS.filter((u) =>
    u.name.toLowerCase().includes(search)
  )

  filtered.sort((a: any, b: any) => {
    const valA = a[sort]
    const valB = b[sort]

    if (valA < valB) return order === 'asc' ? -1 : 1
    if (valA > valB) return order === 'asc' ? 1 : -1
    return 0
  })

  const totalItems = filtered.length
  const totalPages = Math.ceil(totalItems / limit)

  const start = (page - 1) * limit
  const paginated = filtered.slice(start, start + limit)

  const res: ApiResponse<typeof paginated> = {
    data: paginated,
    meta: { page, totalPages, totalItems },
  }

  return NextResponse.json(res)
}