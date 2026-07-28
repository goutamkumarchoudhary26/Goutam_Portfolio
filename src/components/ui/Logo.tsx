interface LogoProps {
  showName?: boolean
  className?: string
}

export function Logo({ showName = true, className = '' }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary font-mono text-sm font-bold text-white shadow-sm">
        GK
      </span>
      {showName && (
        <span className="font-mono text-base font-semibold tracking-tight text-foreground">
          Goutam Kumar
        </span>
      )}
    </span>
  )
}
