'use client'
import { useEffect, useRef } from 'react'
import type { Project } from '@/types'
import styles from './ProjectOverlay.module.css'

interface Props {
  project: Project | null
  onClose: () => void
}

export function ProjectOverlay({ project, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)

  // Lock body scroll while open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      // Scroll overlay to top on each open
      overlayRef.current?.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!project) return null

  const isLight = project.textColor !== 'dark'
  const isHeroImage = project.heroBackground.trim().startsWith('url(')
  const heroStyle = isHeroImage
    ? {
        backgroundColor: project.color,
        backgroundImage: project.heroBackground,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' as const,
      }
    : { background: project.heroBackground }

  return (
    <div
      className={`${styles.overlay} ${project ? styles.open : ''}`}
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      {/* ── CLOSE BUTTON ───────────────────────── */}
      <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar">
        <span /><span />
      </button>

      {/* ── HERO ───────────────────────────────── */}
      <div
        className={styles.hero}
        style={heroStyle}
      >
        <div className={`${styles.heroInner} ${isLight ? styles.light : styles.dark}`}>
          <div className={styles.heroMeta}>
            <span className={styles.heroIndex}>{project.index}</span>
            <span className={styles.heroCat}>{project.category}</span>
          </div>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <p className={styles.heroDesc}>{project.description}</p>
          <div className={styles.heroScroll} aria-hidden="true">
            <span className={styles.heroScrollLine} />
            Scroll
          </div>
        </div>
      </div>

      {/* ── BODY ───────────────────────────────── */}
      <div className={styles.body}>

        {/* Info row */}
        <div className={styles.infoRow}>
          <div className={styles.infoItem}>
            <div className={styles.infoLabel}>Cliente</div>
            <div className={styles.infoValue}>{project.client}</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoLabel}>Categoria</div>
            <div className={styles.infoValue}>{project.category}</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoLabel}>Ano</div>
            <div className={styles.infoValue}>{project.year}</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoLabel}>Serviços</div>
            <div className={styles.infoValue}>
              {project.services.join(', ')}
            </div>
          </div>
        </div>

        {/* Long description */}
        <div className={styles.textBlock}>
          <p className={styles.longDesc}>{project.longDescription}</p>
        </div>

        {/* Image grid */}
        <div className={styles.imageGrid}>
          {project.images.map((img, i) => (
            <div
              key={i}
              className={`${styles.imageItem} ${styles.full}`}
            >
              {(() => {
                const isImage = img.src.trim().startsWith('url(')

                if (isImage) {
                  const imagePath = img.src.trim().slice(5, -2)

                  return (
                    <figure className={styles.imageFigure}>
                      <img
                        className={styles.imageMedia}
                        src={imagePath}
                        alt={img.alt}
                      />
                    </figure>
                  )
                }

                return (
                  <div
                    className={styles.imagePlaceholder}
                    style={{ background: img.src }}
                    role="img"
                    aria-label={img.alt}
                  />
                )
              })()}
            </div>
          ))}
        </div>

        {/* Next project teaser */}
        <div className={styles.nextRow}>
          <span className={styles.nextLabel}>Próximo projeto</span>
          <button className={styles.nextBtn} onClick={onClose}>
            Ver todos os projetos <span aria-hidden="true">→</span>
          </button>
        </div>

      </div>
    </div>
  )
}
