import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * Fixed bottom-right button that scrolls to top. Its circular border doubles as
 * a scroll-progress indicator — the silver arc fills as the page scrolls.
 */
const SIZE = 52
const STROKE = 2.5
const R = (SIZE - STROKE) / 2
const CIRC = 2 * Math.PI * R

const ScrollToTopButton = () => {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? window.scrollY / total : 0
      setProgress(Math.min(Math.max(pct, 0), 1))
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`group fixed bottom-6 right-6 z-50 grid place-items-center rounded-full
        bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-xl
        border border-slate-200/70 dark:border-slate-600/50
        transition-all duration-300 hover:scale-105
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      style={{ width: SIZE, height: SIZE }}
    >
      {/* progress ring */}
      <svg
        className="absolute inset-0 -rotate-90"
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          className="text-slate-200/60 dark:text-slate-700/60"
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          fill="none"
          stroke="url(#scrollGrad)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC * (1 - progress)}
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
        <defs>
          <linearGradient id="scrollGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
      </svg>

      <ArrowUp
        size={20}
        className="text-slate-600 dark:text-slate-200 transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  )
}

export default ScrollToTopButton
