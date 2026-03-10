'use client'
import { useScrollReveal } from '@/viewmodels/useScrollReveal'

// Headless view — mounts the scroll reveal observer
export function ScrollReveal() {
  useScrollReveal()
  return null
}
