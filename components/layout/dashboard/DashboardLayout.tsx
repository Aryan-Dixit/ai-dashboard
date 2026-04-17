'use client'

import { useState } from 'react'
import styles from './DashboardLayout.module.css'
import { Sidebar } from '../sidebar/Sidebar'
import { Navbar } from '../navbar/Navbar'

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className={styles.container}>
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {mobileOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div className={styles.main}>
        <Navbar onToggleSidebar={() => setMobileOpen(true)} />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  )
}