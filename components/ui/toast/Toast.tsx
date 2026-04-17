'use client'

import { useState } from 'react'
import styles from './Toast.module.css'
import { Button } from '@/components/ui/button/Button'

type ToastType = 'success' | 'error' | 'info'

export function Toasts() {
  const [toasts, setToasts] = useState<
    { id: number; type: ToastType; message: string }[]
  >([])

  const showToast = (type: ToastType, message: string) => {
    const id = Date.now()

    setToasts((prev) => [...prev, { id, type, message }])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  return (
    <div>
      <div style={{ marginBottom: 'var(--space-lg)' }}>
        <Button onClick={() => showToast('success', 'Success! Action completed.')}>
          Show Success
        </Button>{' '}
        <Button onClick={() => showToast('error', 'Error occurred.')}>
          Show Error
        </Button>{' '}
        <Button onClick={() => showToast('info', 'Info message.')}>
          Show Info
        </Button>
      </div>

      <div className={styles.container}>
        {toasts.map((toast) => (
          <div key={toast.id} className={`${styles.toast} ${styles[toast.type]}`}>
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  )
}