import { useEffect } from 'react'
import { gsap, initGsap, prefersReducedMotion } from '../lib/gsap'

export function useScrollAnimations(enabled: boolean) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion()) return

    initGsap()

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal="up"]').forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal="stagger"]').forEach((container) => {
        const items = container.querySelectorAll('[data-stagger-item]')
        gsap.from(items, {
          y: 28,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 84%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    })

    return () => ctx.revert()
  }, [enabled])
}
