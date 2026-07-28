import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  glass?: boolean
}

export function Card({ children, glass = false, className = '', ...rest }: CardProps) {
  const glassStyles = glass ? 'backdrop-blur-md bg-surface/70' : 'bg-surface'

  return (
    <div
      className={`rounded-2xl border border-border ${glassStyles} p-6 shadow-sm ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
