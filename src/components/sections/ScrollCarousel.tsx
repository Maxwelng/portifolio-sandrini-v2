'use client'
import { useScrollCarousel } from '@/viewmodels/useScrollCarousel'
import styles from './ScrollCarousel.module.css'

export function ScrollCarousel() {
  const vm = useScrollCarousel()

  return (
    <div className={styles.outer} ref={vm.outerRef}>
      <div className={styles.sticky}>
        <div className={styles.frame} ref={vm.frameRef}>

          {vm.slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${i === vm.activeIndex ? styles.active : ''}`}
            >
              <div className={styles.bg} style={{ background: slide.background }} />
            </div>
          ))}

          <div className={styles.dots}>
            {vm.slides.map((_, i) => (
              <div
                key={i}
                className={`${styles.dot} ${i === vm.activeIndex ? styles.dotActive : ''}`}
              />
            ))}
          </div>

          <div className={styles.prog} ref={vm.progRef} />
        </div>
      </div>
    </div>
  )
}
