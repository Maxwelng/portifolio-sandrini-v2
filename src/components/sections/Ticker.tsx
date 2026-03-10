import { tickerItems } from '@/data/content'
import styles from './Ticker.module.css'

export function Ticker() {
  const doubled = [...tickerItems, ...tickerItems]
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
