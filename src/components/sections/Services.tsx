import { services } from '@/data/services'
import styles from './Services.module.css'

export function Services() {
  return (
    <section className={styles.sec} id="servicos">
      <div className={`rv ${styles.lbl}`}>O que faço</div>
      <h2 className={`rv ${styles.h2}`}>Serviços</h2>
      <div className={styles.grid}>
        {services.map(service => (
          <article key={service.id} className={`rv ${styles.item}`}>
            <div className={styles.num}>{service.number}</div>
            <h3 className={styles.name}>{service.name}</h3>
            <p className={styles.desc}>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
