import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.tag}>Designer Gráfica — Brasil</p>
      <h1 className={styles.h1}>
        Design que transforma <strong>marcas.</strong>
      </h1>
      <div className={styles.row}>
        <p className={styles.desc}>
          Identidades visuais construídas com propósito, rigor tipográfico
          e sensibilidade estética. Do conceito à entrega.
        </p>
        <div className={styles.scroll} aria-hidden="true">
          <div className={styles.line} />
          Rolar
        </div>
      </div>
    </section>
  )
}
