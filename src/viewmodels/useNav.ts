'use client'
import { useState, useEffect, useCallback } from 'react'
import { navItems } from '@/data/content'
import type { NavItem } from '@/types'

export interface NavViewModel {
  items: NavItem[]
  isScrolled: boolean
  isMobileOpen: boolean
  toggleMobile: () => void
  closeMobile: () => void
}

export function useNav(): NavViewModel {
  const [isScrolled, setIsScrolled]     = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMobile = useCallback(() => setIsMobileOpen(v => !v), [])
  const closeMobile  = useCallback(() => setIsMobileOpen(false), [])

  return { items: navItems, isScrolled, isMobileOpen, toggleMobile, closeMobile }
}
