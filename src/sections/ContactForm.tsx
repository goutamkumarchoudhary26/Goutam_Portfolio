import { CheckCircle2, Loader2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { Button } from '@components/ui/Button'
import { FORMSPREE_ENDPOINT } from '@data/siteConfig'
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '@lib/validation'

const EMPTY_VALUES: ContactFormValues = { name: '', email: '', message: '' }

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const isFormEnabled = Boolean(FORMSPREE_ENDPOINT)

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) throw new Error('Submission failed')

      setStatus('success')
      setValues(EMPTY_VALUES)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="text-accent" size={32} aria-hidden="true" />
        <p className="text-lg font-semibold text-foreground">Message sent.</p>
        <p className="text-sm text-muted">Thanks for reaching out — I'll get back to you soon.</p>
        <Button variant="secondary" onClick={() => setStatus('idle')} className="mt-2">
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {!isFormEnabled && (
        <p className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
          The contact form is being configured. In the meantime, please reach out by email.
        </p>
      )}

      <div>
        <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1 text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1 text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className="mt-1.5 w-full resize-none rounded-xl border border-border bg-surface px-4 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={!isFormEnabled || status === 'submitting'}
        icon={status === 'submitting' ? <Loader2 className="animate-spin" size={16} /> : undefined}
        className="w-full sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
