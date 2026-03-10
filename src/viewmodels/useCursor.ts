'use client'
import { useEffect } from 'react'
export function useCursor() {
  useEffect(() => {
    const cur = document.getElementById('cur')
    const fol = document.getElementById('fol')
    if (!cur || !fol) return
    let mx = 0, my = 0, fx = 0, fy = 0, raf = 0
    const onMove = (e: { clientX: number; clientY: number }) => { mx = e.clientX; my = e.clientY }
    const loop = () => {
      cur.style.left = mx + 'px'; cur.style.top = my + 'px'
      fx += (mx - fx) * 0.1; fy += (my - fy) * 0.1
      fol.style.left = fx + 'px'; fol.style.top = fy + 'px'
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    const expand = () => fol.classList.add('expanded')
    const shrink = () => fol.classList.remove('expanded')
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })
    document.addEventListener('mousemove', onMove)
    return () => { cancelAnimationFrame(raf); document.removeEventListener('mousemove', onMove) }
  }, [])
}
