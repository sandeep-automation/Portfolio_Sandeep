import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, initGsap, prefersReducedMotion, ScrollTrigger } from '../lib/gsap'

let lenis: Lenis | null = null

export function scrollToId(id: string) {
  const target = document.getElementById(id.replace('#', ''))
  if (!target) return
  if (lenis) {
    lenis.scrollTo(target, { offset: -8, duration: 1.2 })
    return
  }
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function useLenis(enabled: boolean) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion()) return

    initGsap()

    lenis = new Lenis({
      duration: 1.15,
      lerp: 0.09,
      smoothWheel: true,
      autoRaf: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => {
      lenis?.raf(time * 1000)
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis?.destroy()
      lenis = null
    }
  }, [enabled])
}
