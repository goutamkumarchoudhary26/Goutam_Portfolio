import type { HTMLAttributes, ReactNode } from 'react'

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  id?: string
  narrow?: boolean
}

export function SectionContainer({
  children,
  id,
  narrow = false,
  className = '',
  ...rest
}: SectionContainerProps) {
  const widthClass = narrow ? 'max-w-3xl' : 'max-w-6xl'

  return (
    <section
      id={id}
      className={`mx-auto w-full ${widthClass} scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 ${className}`}
      {...rest}
    >
      {children}
    </section>
  )
}
