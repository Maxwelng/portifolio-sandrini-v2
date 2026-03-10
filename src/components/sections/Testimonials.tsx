import { testimonials } from '@/data/content'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return (
    <section className={styles.sec}>
      <div className={`rv ${styles.lbl}`}>Depoimentos</div>
      <h2 className={`rv ${styles.h2}`}>O que dizem<br /><em>os clientes</em></h2>
      <div className={styles.grid}>
        {testimonials.map(t => (
          <article key={t.id} className={`rv ${styles.card}`}>
            <div className={styles.quoteIcon}>&#8220;</div>
            <blockquote className={styles.text}>{t.text}</blockquote>
            <div className={styles.who}>
              <div className={styles.av}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.author}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
