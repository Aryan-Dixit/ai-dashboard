import styles from './StatsCard.module.css'

type Props = {
  title: string
  value: string
  change: number
}

export function StatsCard({ title, value, change }: Props) {
  const isPositive = change >= 0

  return (
    <div className={styles.card}>
      <div className={styles.icon}>📊</div>

      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>

        <div
          className={
            isPositive ? styles.changePositive : styles.changeNegative
          }
        >
          {isPositive ? '↑' : '↓'} {Math.abs(change)}%
        </div>
      </div>
    </div>
  )
}