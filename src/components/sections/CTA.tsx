import styles from './CTA.module.css'

export function CTA() {
  return (
    <section className={styles.sec} id="contato">
      <div className={`rv ${styles.lbl}`}>Contato</div>
      <h2 className={`rv ${styles.h2}`}>
        Vamos criar<br /><em>juntas?</em>
      </h2>
      <a
        href="mailto:oi@sandrinimaciel.design"
        className={`rv ${styles.btn}`}
      >
        Iniciar um projeto <span aria-hidden="true">→</span>
      </a>
    </section>
  )
}
