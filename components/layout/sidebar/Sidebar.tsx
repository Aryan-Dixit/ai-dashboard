'use client'

import styles from './Sidebar.module.css'
import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Sidebar({
  collapsed,
  mobileOpen,
  onClose,
}: {
  collapsed: boolean
  mobileOpen: boolean
  onClose: () => void
}) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        styles.sidebar,
        collapsed && styles.collapsed,
        mobileOpen && styles.mobileOpen
      )}
    >
      <div className={styles.logo}>
        {collapsed ? 'AI' : 'AI Dashboard'}
      </div>

      <nav className={styles.nav}>
        <Link
          href="/"
          className={cn(styles.item, pathname === '/' && styles.active)}
          onClick={onClose}
        >
          <span>📊</span>
          {!collapsed && <span>Analytics</span>}
        </Link>

        <Link
          href="/users"
          className={cn(styles.item, pathname === '/users' && styles.active)}
          onClick={onClose}
        >
          <span>👥</span>
          {!collapsed && <span>Users</span>}
        </Link>

        <Link
          href="/settings"
          className={cn(styles.item, pathname === '/settings' && styles.active)}
          onClick={onClose}
        >
          <span>⚙️</span>
          {!collapsed && <span>Settings</span>}
        </Link>
      </nav>
    </aside>
  )
}