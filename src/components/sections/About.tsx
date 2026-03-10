import { stats } from '@/data/content'
import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.sec} id="sobre">
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={`rv ${styles.lbl}`}>Sobre</div>
          <h2 className={`rv ${styles.h2}`}>
            Design com<br /><em>intenção</em><br /><strong>e alma.</strong>
          </h2>
          <p className={`rv ${styles.p}`}>
            Sou Sandrini Espindula Maciel, designer gráfica com mais de 9 anos de
            experiência criando marcas que comunicam com clareza, rigor e beleza.
          </p>
          <p className={`rv ${styles.p}`}>
            Acredito que o bom design parte de uma escuta profunda — dos valores,
            do contexto e das pessoas que a marca precisa tocar.
          </p>
          <div className={styles.stats}>
            {stats.map((s, i) => (
              <div key={i} className="rv">
                <div className={styles.statN}>{s.value}</div>
                <div className={styles.statL}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={`rv ${styles.imgCol}`}>
          <span className={styles.mono}>SEM</span>
          <div className={styles.badge}>
            <q>Design é a ponte entre intenção e impacto.</q>
            <cite>— Sandrini E. Maciel</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
