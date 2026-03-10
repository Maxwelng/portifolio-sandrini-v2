import { tickerItems } from '@/data/content'
import styles from './Ticker.module.css'

export function Ticker() {
  const all = [...tickerItems, ...tickerItems]
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {all.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
