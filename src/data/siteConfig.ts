export const SITE_NAME = 'Goutam Kumar'
export const SITE_ROLE = 'Lead UI React Developer'

export const CONTACT_EMAIL = 'goutamkumarchoudhary26@gmail.com'
export const LOCATION = 'Bangalore, India'

// Placeholder — replace with real profile URL when available.
export const LINKEDIN_URL = 'https://linkedin.com/in/goutam-kumar'
export const GITHUB_URL = 'https://github.com/goutamkumarchoudhary26'

// Resume download is gated on this env var being set (see README) so the
// button never renders a dead link before a real PDF is published.
export const RESUME_URL = import.meta.env.VITE_RESUME_URL ?? ''

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID ?? ''
export const FORMSPREE_ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : ''
