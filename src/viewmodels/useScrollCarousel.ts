'use client'
import { useEffect, useRef, useState } from 'react'
import { slides } from '@/data/content'

const W_START = 60, W_END = 94, R_START = 20, R_END = 4

export interface CarouselViewModel {
  slides: typeof slides
  activeIndex: number
  outerRef: React.RefObject<HTMLDivElement>
  frameRef: React.RefObject<HTMLDivElement>
  progRef: React.RefObject<HTMLDivElement>
}

export function useScrollCarousel(): CarouselViewModel {
  const outerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const progRef  = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const outer = outerRef.current
    const frame = frameRef.current
    const prog  = progRef.current
    if (!outer || !frame || !prog) return

    const N = slides.length
    const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))

    const resize = () => { outer.style.height = window.innerHeight * (N + 0.6) + 'px' }
    resize()
    window.addEventListener('resize', resize)

    const onScroll = () => {
      const top = outer.getBoundingClientRect().top + window.scrollY
      const progress = clamp((window.scrollY - top) / (outer.offsetHeight - window.innerHeight), 0, 1)
      const e = 1 - Math.pow(1 - progress, 3)
      frame.style.width        = (W_START + (W_END - W_START) * e) + '%'
      frame.style.borderRadius = (R_START + (R_END - R_START) * e) + 'px'
      prog.style.width         = progress * 100 + '%'
      setActiveIndex(clamp(Math.floor(progress * N), 0, N - 1))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', resize) }
  }, [])

  return { slides, activeIndex, outerRef, frameRef, progRef }
}
