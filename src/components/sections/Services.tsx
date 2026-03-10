import { services } from '@/data/services'
import styles from './Services.module.css'

export function Services() {
  return (
    <section className={styles.sec} id="servicos">
      <div className={`rv ${styles.lbl}`}>O que faço</div>
      <h2 className={`rv ${styles.h2}`}>Serviços</h2>
      <div className={styles.grid}>
        {services.map(svc => (
          <article key={svc.id} className={`rv ${styles.item}`}>
            <div className={styles.num}>{svc.number}</div>
            <h3 className={styles.name}>{svc.name}</h3>
            <p className={styles.desc}>{svc.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
