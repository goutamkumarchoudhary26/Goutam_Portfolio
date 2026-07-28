import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export function Badge({ children, icon, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted ${className}`}
    >
      {icon}
      {children}
    </span>
  )
}
