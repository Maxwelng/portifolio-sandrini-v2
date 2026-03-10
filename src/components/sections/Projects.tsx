import styles from './Projects.module.css'

export function Projects() {
  return (
    <div className={styles.header} id="projetos">
      <div className={`rv ${styles.lbl}`}>Portfólio</div>
      <div className={styles.row}>
        <h2 className={`rv ${styles.h2}`}>
          Projetos<br /><em>Selecionados</em>
        </h2>
        <a href="#" className={`rv ${styles.all}`}>Ver todos</a>
      </div>
    </div>
  )
}
