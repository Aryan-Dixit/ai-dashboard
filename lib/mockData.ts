export type User = {
  id: number
  name: string
  email: string
  role: 'Admin' | 'User'
  status: 'Active' | 'Inactive'
  createdAt: string
}

export const USERS: User[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@test.com`,
  role: i % 2 === 0 ? 'Admin' : 'User',
  status: i % 3 === 0 ? 'Inactive' : 'Active',
  createdAt: `2024-01-${(i % 30) + 1}`,
}))