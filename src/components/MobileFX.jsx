import { useEffect } from 'react'

/**
 * Touch-only enhancements (replaces the desktop custom cursor on phones/tablets):
 *  - tags <html> with `is-touch` so CSS can scope mobile-only effects
 *  - reveals `.fx-card` and `[data-reveal]` blocks as they scroll into view,
 *    with a gentle per-row stagger
 *  - a tap-glow on cards (handled in CSS via .fx-card:active)
 *
 * Everything is gated behind a coarse-pointer check, so the laptop experience
 * is never touched. A safety timer guarantees content is never left hidden.
 */
const MobileFX = () => {
  useEffect(() => {
    const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    if (!coarse) return

    const root = document.documentElement
    root.classList.add('is-touch')

    const els = Array.from(document.querySelectorAll('.fx-card, [data-reveal]'))

    // stagger items that share the same parent (rows/grids)
    const counts = new Map()
    els.forEach((el) => {
      el.classList.add('reveal')
      const parent = el.parentElement
      const i = counts.get(parent) || 0
      counts.set(parent, i + 1)
      el.style.transitionDelay = `${Math.min(i, 6) * 70}ms`
    })

    let io
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-in')
              io.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      )
      els.forEach((el) => io.observe(el))
    } else {
      els.forEach((el) => el.classList.add('reveal-in'))
    }

    // safety net — never leave content hidden if something goes wrong
    const safety = setTimeout(() => {
      els.forEach((el) => el.classList.add('reveal-in'))
    }, 2500)

    return () => {
      clearTimeout(safety)
      io?.disconnect()
      root.classList.remove('is-touch')
    }
  }, [])

  return null
}

export default MobileFX
