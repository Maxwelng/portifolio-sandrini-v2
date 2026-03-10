import styles from './Footer.module.css'
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Sandrini Espindula Maciel</div>
      <nav className={styles.links}>
        <a href="#">Instagram</a>
        <a href="#">Behance</a>
        <a href="#">LinkedIn</a>
      </nav>
      <p className={styles.copy}>2025 Sandrini Espindula Maciel.</p>
    </footer>
  )
}
