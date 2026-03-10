import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Sandrini Espindula Maciel®</div>
      <nav className={styles.links}>
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
      <p className={styles.copy}>&copy; 2025 Sandrini Espindula Maciel.</p>
    </footer>
  )
}
