import styles from './Input.module.css'
import { cn } from '@/lib/utils/cn'
import { InputProps } from './types'
import { useId } from 'react'

export function Input({
  label,
  error,
  helperText,
  prefix,
  suffix,
  maxLength,
  value,
  ...props
}: InputProps) {
  const id = useId()
const hasValue = String(value ?? '').length > 0

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(
          styles.container,
          error && styles.error,
          props.readOnly && styles.readonly,
          props.disabled && styles.disabled
        )}
      >
        {prefix && <span className={styles.prefix}>{prefix}</span>}

        <input
          id={id}
          className={styles.input}
          value={value ?? ''}
          maxLength={maxLength}
          {...props}
        />

        {label &&(<label
          htmlFor={id}
          className={cn(
            styles.label,
            hasValue && styles.labelActive
          )}
        >
          {label}
        </label>)}

        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>

      <div className={styles.meta}>
        {error ? (
          <span className={styles.errorText}>{error}</span>
        ) : (
          helperText && <span>{helperText}</span>
        )}

        {maxLength && (
          <span className={styles.counter}>
            {String(value || '').length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  )
}