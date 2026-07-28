import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  label: string
}

export function IconButton({ children, label, className = '', ...rest }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
