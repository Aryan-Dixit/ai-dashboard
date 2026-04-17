'use client'

import styles from './Navbar.module.css'
import { useTheme } from '@/hooks/useTheme'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button/Button'

export function Navbar({
  onToggleSidebar,
}: {
  onToggleSidebar?: () => void
}) {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()

  const getPageName = () => {
    switch (pathname) {
      case '/':
        return 'Analytics'
      case '/users':
        return 'Users'
      case '/settings':
        return 'Settings'
      default:
        return ''
    }
  }

  return (
    <header className={styles.navbar}>
      {/* LEFT */}
      <div className={styles.left}>
        <button className={styles.hamburger} onClick={onToggleSidebar}>
          ☰
        </button>

        <nav className={styles.breadcrumb}>
          <span>Dashboard</span>
          <span className={styles.separator}>{'>'}</span>
          <span className={styles.current}>{getPageName()}</span>
        </nav>
      </div>

      {/* CENTER */}
      <div className={styles.center}>
        <input placeholder="Search..." className={styles.search} />
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <Button variant="secondary" size="sm" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </Button>

        {/* DROPDOWN */}
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>A</div>

          <div className={styles.dropdown}>
            <div className={styles.dropdownItem}>Aryan</div>
            <div className={styles.dropdownItem}>aryan@test.com</div>
            <div className={styles.divider} />
            <div className={styles.dropdownItem}>Settings</div>
            <div className={styles.dropdownItem}>Logout</div>
          </div>
        </div>
      </div>
    </header>
  )
}