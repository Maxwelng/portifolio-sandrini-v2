// ─── MODEL: Domain Types ─────────────────────────────────────────
// Pure data shapes. Zero logic, zero side-effects.

export interface Service {
  id: string
  number: string
  name: string
  description: string
}

export interface Testimonial {
  id: string
  text: string
  author: string
  role: string
  initials: string
}

export interface Client {
  id: string
  name: string
}

export interface Slide {
  id: string
  background: string   // CSS gradient or url('/images/...')
  alt: string
}

export interface NavItem {
  label: string
  href: string
  number: string
}

export interface Stat {
  value: string
  label: string
}
