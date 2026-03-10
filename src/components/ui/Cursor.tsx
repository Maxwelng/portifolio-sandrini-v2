'use client'
import { useCursor } from '@/viewmodels/useCursor'
import styles from './Cursor.module.css'

// Pure view — no logic, delegates to useCursor ViewModel
export function Cursor() {
  useCursor()
  return (
    <>
      <div id="cur" className={styles.dot} />
      <div id="fol" className={styles.ring} />
    </>
  )
}
