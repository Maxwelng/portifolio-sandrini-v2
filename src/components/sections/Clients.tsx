import { clients } from '@/data/content'
import styles from './Clients.module.css'

export function Clients() {
  return (
    <section className={styles.sec}>
      <div className={`rv ${styles.lbl}`}>Clientes</div>
      <div className={styles.grid}>
        {clients.map(client => (
          <div key={client.id} className={styles.item}>{client.name}</div>
        ))}
      </div>
    </section>
  )
}
