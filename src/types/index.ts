// ─────────────────────────────────────────────────────────
// MODEL — Domain Types
// Pure data shapes. Zero logic, zero side-effects.
// ─────────────────────────────────────────────────────────

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
  projectId?: string
}

export interface Slide {
  id: string
  background: string   // CSS gradient string or url('/images/...')
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

// ─── PROJECT (case study) ──────────────────────────────────
export interface ProjectImage {
  src: string
  alt: string
  span?: 'full' | 'half'
}

export interface Project {
  id: string
  index: string
  title: string
  client: string
  category: string
  year: string
  description: string
  longDescription: string
  services: string[]
  heroBackground: string
  images: ProjectImage[]
  color: string
  textColor?: 'light' | 'dark'
  showInProjects?: boolean
}
