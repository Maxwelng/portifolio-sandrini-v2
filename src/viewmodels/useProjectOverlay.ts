'use client'
import { useState, useCallback } from 'react'
import type { Project } from '@/types'

export interface ProjectOverlayViewModel {
  activeProject: Project | null
  openProject: (project: Project) => void
  closeProject: () => void
}

export function useProjectOverlay(): ProjectOverlayViewModel {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const openProject = useCallback((project: Project) => {
    setActiveProject(project)
  }, [])

  const closeProject = useCallback(() => {
    setActiveProject(null)
  }, [])

  return { activeProject, openProject, closeProject }
}
