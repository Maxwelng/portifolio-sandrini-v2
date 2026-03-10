'use client'
import { useScrollCarousel } from '@/viewmodels/useScrollCarousel'
import { cn } from '@/lib/utils'
import styles from './ScrollCarousel.module.css'

// View: receives all scroll state from ViewModel, renders only
export function ScrollCarousel() {
  const vm = useScrollCarousel()

  return (
    <div className={styles.outer} ref={vm.outerRef}>
      <div className={styles.sticky}>
        <div className={styles.frame} ref={vm.frameRef}>

          {vm.slides.map((slide, i) => (
            <div
              key={slide.id}
              className={cn(styles.slide, i === vm.activeIndex && styles.active)}
              role="img"
              aria-label={slide.alt}
            >
              <div className={styles.bg} style={{ background: slide.background }} />
            </div>
          ))}

          <div className={styles.dots} aria-hidden="true">
            {vm.slides.map((_, i) => (
              <div
                key={i}
                className={cn(styles.dot, i === vm.activeIndex && styles.dotActive)}
              />
            ))}
          </div>

          <div className={styles.prog} ref={vm.progRef} />
        </div>
      </div>
    </div>
  )
}
