import { clients } from '@/data/content'
import styles from './Clients.module.css'

export function Clients() {
  return (
    <section className={styles.sec}>
      <div className={`rv ${styles.lbl}`}>Clientes</div>
      <div className={styles.grid}>
        {clients.map(c => (
          <div key={c.id} className={styles.item}>{c.name}</div>
        ))}
      </div>
    </section>
  )
}
