'use client'
import { useCursor } from '@/viewmodels/useCursor'
import styles from './Cursor.module.css'

export function Cursor() {
  useCursor()
  return (
    <>
      <div id="cur" className={styles.dot} />
      <div id="fol" className={styles.ring} />
    </>
  )
}
