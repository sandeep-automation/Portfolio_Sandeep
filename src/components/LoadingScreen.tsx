import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface LoadingScreenProps {
  onComplete: () => void
}

const STATUS = [
  'Compiling coverage',
  'Sharding the suite',
  'Cutting flakiness',
  'Giving hours back',
]

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const reducedMotion = useReducedMotion()
  const [progress, setProgress] = useState(8)
  const [statusIndex, setStatusIndex] = useState(0)

  useEffect(() => {
    let alive = true
    const start = performance.now()
    const minMs = reducedMotion ? 280 : 2200

    const tick = window.setInterval(() => {
      setProgress((value) => Math.min(value + 6, 92))
    }, 120)

    const statusTick = window.setInterval(() => {
      setStatusIndex((index) => (index + 1) % STATUS.length)
    }, 700)

    const wait = Math.max(0, minMs - (performance.now() - start))
    const finish = window.setTimeout(() => {
      if (!alive) return
      window.clearInterval(tick)
      window.clearInterval(statusTick)
      setProgress(100)
      window.setTimeout(onComplete, reducedMotion ? 80 : 280)
    }, wait)

    return () => {
      alive = false
      window.clearInterval(tick)
      window.clearInterval(statusTick)
      window.clearTimeout(finish)
    }
  }, [onComplete, reducedMotion])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-void px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 90% 55% at 85% -8%, rgba(88, 118, 255, 0.22), transparent 58%)',
        }}
      />

      <p className="relative text-[10px] tracking-[0.36em] text-muted uppercase">Quality before the first click</p>
      <p className="display relative mt-5 max-w-md text-center text-3xl leading-tight text-ink sm:text-4xl">
        Proof before the product
      </p>

      <div className="relative mt-8 h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={STATUS[statusIndex]}
            className="text-[11px] tracking-[0.32em] text-ink/80 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45 }}
          >
            {STATUS[statusIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="relative mt-10 flex w-52 items-center gap-4">
        <div className="h-px flex-1 overflow-hidden bg-line">
          <motion.div className="h-full bg-ink" animate={{ width: `${progress}%` }} />
        </div>
        <span className="w-8 text-right text-[10px] tracking-[0.18em] text-muted">
          {String(progress).padStart(2, '0')}
        </span>
      </div>
    </motion.div>
  )
}
