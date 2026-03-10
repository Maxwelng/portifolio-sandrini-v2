'use client'
import { clients } from '@/data/content'
import { projects } from '@/data/projects'
import { useProjectOverlay } from '@/viewmodels/useProjectOverlay'
import { ProjectOverlay } from './ProjectOverlay'
import styles from './Clients.module.css'

export function Clients() {
  const vm = useProjectOverlay()

  return (
    <>
      <section className={styles.sec}>
        <div className={`rv ${styles.lbl}`}>Clientes</div>
        <div className={styles.grid}>
          {clients.map(c => {
            const project = c.projectId ? projects.find(p => p.id === c.projectId) : undefined
            return project ? (
              <button
                key={c.id}
                className={styles.item}
                onClick={() => vm.openProject(project)}
              >
                {c.name}
              </button>
            ) : (
              <div key={c.id} className={styles.item}>{c.name}</div>
            )
          })}
        </div>
      </section>
      <ProjectOverlay project={vm.activeProject} onClose={vm.closeProject} />
    </>
  )
}