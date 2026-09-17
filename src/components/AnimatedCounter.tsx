import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  delay?: number
}

export default function AnimatedCounter({ value, suffix = '', delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const reducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    if (reducedMotion) {
      setDisplay(value)
      return
    }

    const timeout = setTimeout(() => {
      const duration = 2000
      const start = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(eased * value))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, value, delay, reducedMotion])

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-white sm:text-4xl">
      {display}
      {suffix}
    </span>
  )
}
