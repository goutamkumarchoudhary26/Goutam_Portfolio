import { Mail, MapPin } from 'lucide-react'

import { SectionContainer } from '@components/layout/SectionContainer'
import { GithubIcon, LinkedinIcon } from '@components/ui/BrandIcons'
import { RevealOnScroll } from '@components/ui/RevealOnScroll'
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION } from '@data/siteConfig'
import { slideInLeft, slideInRight } from '@lib/motion'
import { ContactForm } from '@sections/ContactForm'

export function ContactSection() {
  return (
    <SectionContainer id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll variants={slideInLeft}>
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's Build Something Meaningful.
          </h2>
          <p className="mt-4 max-w-md text-base text-muted">
            Whether you are building a scalable frontend, an AI-powered product, or a complex
            data-driven application, I would love to connect.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-accent"
              >
                <Mail size={18} aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-accent"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-accent"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-foreground">
              <MapPin size={18} aria-hidden="true" />
              {LOCATION}
            </li>
          </ul>
        </RevealOnScroll>

        <RevealOnScroll variants={slideInRight}>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </SectionContainer>
  )
}
