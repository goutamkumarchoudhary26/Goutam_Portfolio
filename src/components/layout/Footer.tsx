import { Mail } from 'lucide-react'

import { GithubIcon, LinkedinIcon } from '@components/ui/BrandIcons'
import { Logo } from '@components/ui/Logo'
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '@data/siteConfig'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Logo />
          <p className="text-sm text-muted">
            Lead UI React Developer — building scalable interfaces and intelligent products.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Send an email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
