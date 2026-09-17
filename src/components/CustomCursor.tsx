import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    const label = labelRef.current
    if (!el || !label) return

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!canHover.matches || prefersReducedMotion()) return

    document.documentElement.classList.add('has-custom-cursor')
    el.classList.add('is-on')

    const move = (event: PointerEvent) => {
      el.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
      el.classList.add('is-visible')
    }

    const hover = (event: PointerEvent) => {
      const node = (event.target as Element | null)?.closest('a, button, [data-cursor]')
      const target = node instanceof HTMLElement ? node : null
      const kind = target?.dataset.cursor
      el.dataset.state = kind === 'view' || kind === 'explore' ? kind : target ? 'hover' : 'default'
      label.textContent = kind === 'view' ? 'VIEW' : kind === 'explore' ? 'EXPLORE' : ''
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', hover)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      el.classList.remove('is-on', 'is-visible')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', hover)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      data-state="default"
      aria-hidden="true"
    >
      <span ref={labelRef} className="custom-cursor-label" />
    </div>
  )
}
