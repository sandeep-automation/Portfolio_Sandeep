import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const reducedMotion = useReducedMotion()
  const [progress, setProgress] = useState(8)

  useEffect(() => {
    let alive = true
    const start = performance.now()
    const minMs = reducedMotion ? 280 : 900

    const tick = window.setInterval(() => {
      setProgress((value) => Math.min(value + 7, 92))
    }, 90)

    const wait = Math.max(0, minMs - (performance.now() - start))
    const finish = window.setTimeout(() => {
      if (!alive) return
      window.clearInterval(tick)
      setProgress(100)
      window.setTimeout(onComplete, reducedMotion ? 80 : 280)
    }, wait)

    return () => {
      alive = false
      window.clearInterval(tick)
      window.clearTimeout(finish)
    }
  }, [onComplete, reducedMotion])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <p className="display text-5xl text-ink sm:text-6xl">{personalInfo.logo}</p>
      <p className="mt-6 text-[11px] tracking-[0.32em] text-muted uppercase">Loading experience...</p>
      <div className="mt-10 h-px w-40 overflow-hidden bg-line">
        <motion.div className="h-full bg-ink" animate={{ width: `${progress}%` }} />
      </div>
    </motion.div>
  )
}
