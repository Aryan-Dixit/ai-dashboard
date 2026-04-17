export interface CardProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  variant?: 'default' | 'elevated'
  className?: string
}