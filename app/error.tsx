'use client'

export default function Error({ error }: any) {
  return <p>Error: {error.message}</p>
}