import { NextResponse } from 'next/server'

type Stat = {
  title: string
  value: string
  change: number
}

type ApiResponse<T> = {
  data: T
  meta?: {
    page: number
    totalPages: number
    totalItems: number
  }
  error?: string
}

export async function GET() {
  const data: Stat[] = [
    { title: 'Users', value: '1,240', change: 12 },
    { title: 'Revenue', value: '$8,540', change: -3 },
    { title: 'Sessions', value: '12,300', change: 8 },
    { title: 'Conversion', value: '3.2%', change: 1.2 },
  ]

  // simulate delay
  await new Promise((res) =>
    setTimeout(res, 200 + Math.random() * 600)
  )

  const response: ApiResponse<Stat[]> = {
    data,
  }

  return NextResponse.json(response)
}