export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white hover:bg-accent/90',
  secondary: 'bg-surface text-foreground border border-border hover:bg-surface-hover',
  ghost: 'text-foreground hover:bg-surface-hover',
  outline: 'border border-accent text-accent hover:bg-accent-soft',
}

const BASE_STYLES =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none'

export function buttonClasses(variant: ButtonVariant = 'primary', className = '') {
  return `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${className}`.trim()
}
