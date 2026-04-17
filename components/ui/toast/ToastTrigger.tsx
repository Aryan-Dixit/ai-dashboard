'use client'

export function ToastTrigger() {
  const showToast = (id: string) => {
    // Set hash
    window.location.hash = id

    // Clear hash after animation (3.5s)
    setTimeout(() => {
      if (window.location.hash === `#${id}`) {
        history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    }, 3500)
  }

  return (
    <div style={{ marginBottom: 'var(--space-lg)' }}>
      <button onClick={() => showToast('toast-success')}>
        Show Success
      </button>
      {' | '}
      <button onClick={() => showToast('toast-error')}>
        Show Error
      </button>
      {' | '}
      <button onClick={() => showToast('toast-info')}>
        Show Info
      </button>
    </div>
  )
}