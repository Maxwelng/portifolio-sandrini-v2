'use client'
import { projects } from '@/data/projects'
import { useProjectOverlay } from '@/viewmodels/useProjectOverlay'
import { ProjectOverlay } from './ProjectOverlay'
import styles from './Projects.module.css'

export function Projects() {
  const vm = useProjectOverlay()
  const visibleProjects = projects.filter(project => project.showInProjects !== false)
  const getCardBackground = (heroBackground: string, color: string) => {
    const isImageBackground = heroBackground.trim().startsWith('url(')

    return {
      isImageBackground,
      style: isImageBackground
        ? {
            backgroundColor: color,
            backgroundImage: heroBackground,
          }
        : { background: heroBackground },
    }
  }
  const shouldContainCardImage = (projectId: string) =>
    projectId === 'coletivo-norte' || projectId === 'núcleo'

  return (
    <>
      <section id="projetos">

        {/* ── HEADER ─────────────────────────── */}
        <div className={styles.header}>
          <div className={`rv ${styles.lbl}`}>Portfólio</div>
          <div className={styles.row}>
            <h2 className={`rv ${styles.h2}`}>
              Projetos<br /><em>Selecionados</em>
            </h2>
            <button
              className={`rv ${styles.all}`}
              onClick={() => vm.openProject(visibleProjects[0])}
            >
              Ver todos
            </button>
          </div>
        </div>

        {/* ── PROJECT GRID ───────────────────── */}
        <div className={styles.grid}>
          {visibleProjects.map((project, i) => {
            const cardBackground = getCardBackground(project.heroBackground, project.color)

            return (
            <button
              key={project.id}
              className={`${styles.card} ${i === 0 || i === 1 ? styles.cardLarge : styles.cardSmall} rv`}
              onClick={() => vm.openProject(project)}
              aria-label={`Ver case study: ${project.title}`}
            >
              {/* Background */}
              <div
                className={`${styles.cardBg} ${cardBackground.isImageBackground ? (shouldContainCardImage(project.id) ? styles.cardBgContain : styles.cardBgCover) : ''}`}
                style={cardBackground.style}
              />

              {/* Hover overlay */}
              <div className={styles.cardOverlay} />

              {/* Content */}
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardIndex}>{project.index}</span>
                  <span className={styles.cardCat}>{project.category}</span>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <span className={styles.cardCta}>
                  Ver case <span aria-hidden="true">→</span>
                </span>
              </div>

              {/* Year tag */}
              <div className={styles.cardYear}>{project.year}</div>
            </button>
            )
          })}
        </div>

      </section>

      {/* ── OVERLAY ────────────────────────── */}
      <ProjectOverlay
        project={vm.activeProject}
        onClose={vm.closeProject}
      />
    </>
  )
}
