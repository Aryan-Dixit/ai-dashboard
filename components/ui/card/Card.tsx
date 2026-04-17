import styles from './Card.module.css'
import { cn } from '@/lib/utils/cn'
import { CardProps } from './types'

export function Card({
  children,
  header,
  footer,
  variant = 'default',
  className,
}: CardProps) {
  return (
    <div className={cn(styles.card, styles[variant], className)}>
      {header && <div className={styles.header}>{header}</div>}

      <div className={styles.body}>{children}</div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}