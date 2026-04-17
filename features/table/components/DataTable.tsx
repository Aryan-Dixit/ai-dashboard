'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input/Input'
import { Button } from '@/components/ui/button/Button'
import styles from './DataTable.module.css'

type SearchParams = {
  page?: string
  search?: string
  sort?: string
  order?: string
}

type User = {
  id: number
  name: string
  email: string
  role: string
  status: string
  createdAt: string
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

type Props = {
  searchParams: SearchParams
}

export const DataTable = ({ searchParams }: Props) => {
  const router = useRouter()
  const params = useSearchParams()

  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  const page = params.get('page') || '1'
  const search = params.get('search') || ''
  const sort = params.get('sort') || 'name'
  const order = params.get('order') || 'asc'

  const [searchInput, setSearchInput] = useState(search)

  const fetchData = async () => {
    setLoading(true)

    const res = await fetch(
      `/api/users?page=${page}&search=${search}&sort=${sort}&order=${order}`
    )

    const json: ApiResponse<User[]> = await res.json()
    setData(json.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [page, search, sort, order])

  const updateParams = (newParams: Record<string, string>) => {
    const url = new URLSearchParams(params.toString())

    Object.entries(newParams).forEach(([k, v]) => {
      url.set(k, v)
    })

    router.push(`?${url.toString()}`)
  }

  useEffect(() => {
    const t = setTimeout(() => {
      updateParams({ search: searchInput, page: '1' })
    }, 300)

    return () => clearTimeout(t)
  }, [searchInput])

  return (
    <div className={styles.wrapper}>
      {/* SEARCH */}
      <div className={styles.search}>
        <Input
          placeholder="Search users..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th
                onClick={() =>
                  updateParams({
                    sort: 'name',
                    order: order === 'asc' ? 'desc' : 'asc',
                  })
                }
              >
                Name {order === 'asc' ? '↑' : '↓'}
              </th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className={styles.skeletonRow}>
                  <td><div className={styles.skeletonBox} /></td>
                  <td><div className={styles.skeletonBox} /></td>
                  <td><div className={styles.skeletonBox} /></td>
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={3}>No results found</td>
              </tr>
            ) : (
              data.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className={styles.pagination}>
        <Button
          variant="secondary"
          disabled={Number(page) === 1}
          onClick={() =>
            updateParams({ page: String(Number(page) - 1) })
          }
        >
          Previous
        </Button>

        <span className={styles.page}>Page {page}</span>

        <Button
          variant="secondary"
          onClick={() =>
            updateParams({ page: String(Number(page) + 1) })
          }
        >
          Next
        </Button>
      </div>
    </div>
  )
}
