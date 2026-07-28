import { Link } from 'react-router-dom'

import { buttonClasses } from '@lib/buttonStyles'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold text-foreground">Page not found</h1>
      <p className="max-w-md text-muted">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className={buttonClasses('primary', 'mt-2')}>
        Back to home
      </Link>
    </div>
  )
}
