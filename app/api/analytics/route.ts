import { NextResponse } from 'next/server'
import { delay } from '@/lib/delay'

export async function GET() {
  await delay()

  return NextResponse.json({
    data: [],
  })
}