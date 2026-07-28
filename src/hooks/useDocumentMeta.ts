import { useEffect } from 'react'

interface DocumentMetaOptions {
  title: string
  description: string
  ogImage?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export function useDocumentMeta({ title, description, ogImage }: DocumentMetaOptions) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    if (ogImage) {
      upsertMeta('property', 'og:image', ogImage)
    }

    return () => {
      document.title = previousTitle
    }
  }, [title, description, ogImage])
}
