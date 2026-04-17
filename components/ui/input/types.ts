import { InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps
    extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'prefix'
  > {
  label?: string   
  error?: string
  helperText?: string
  prefix?: ReactNode
  suffix?: ReactNode
  maxLength?: number
}