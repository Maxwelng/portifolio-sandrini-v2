'use client'
import { useNav } from '@/viewmodels/useNav'
import styles from './Navbar.module.css'

export function Navbar() {
  const vm = useNav()
  return (
    <>
      <div className={[styles.mob, vm.isMobileOpen ? styles.open : ''].join(' ')}>
        {vm.items.map(item => (
          <a key={item.href} href={item.href} onClick={vm.closeMobile}>{item.label}</a>
        ))}
      </div>
      <nav className={[styles.nav, vm.isScrolled ? styles.scrolled : ''].join(' ')}>
        <a href="#" className={styles.logo}>Sandrini Espindula Maciel</a>
        <ul className={styles.list}>
          {vm.items.map(item => (
            <li key={item.href}><a href={item.href}><span className={styles.num}>({item.number})</span>{item.label}</a></li>
          ))}
        </ul>
        <button className={styles.ham} onClick={vm.toggleMobile} aria-label="Menu">
          <span style={{ transform: vm.isMobileOpen ? 'rotate(45deg) translate(4px,4px)' : '' }} />
          <span style={{ opacity: vm.isMobileOpen ? 0 : 1 }} />
          <span style={{ transform: vm.isMobileOpen ? 'rotate(-45deg) translate(4px,-4px)' : '' }} />
        </button>
      </nav>
      <div className={styles.pill}>
        <a href="#" className={styles.pillLogo}>Sandrini</a>
        <div className={styles.sep} />
        <ul className={styles.pillLinks}>
          {vm.items.slice(0,3).map(item => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
        <a href="#contato" className={styles.pillCta}>Falar comigo</a>
      </div>
    </>
  )
}
