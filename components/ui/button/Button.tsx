import styles from './Button.module.css'
import { cn } from '@/lib/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  icon?: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading,
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        styles[size]
      )}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? <span className={styles.spinner} /> : icon}
      {!loading && children}
    </button>
  )
}