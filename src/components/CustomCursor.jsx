import { useEffect, useRef, useState } from 'react'

/**
 * A custom pointer made of two parts:
 *  - a small dot that tracks the mouse 1:1
 *  - a ring that trails with easing and stretches along the direction of
 *    travel (velocity-based squash/stretch) for a fluid, comet-like feel.
 * The ring blooms over interactive elements and collapses into a caret bar
 * over editable text. Disabled on touch / coarse pointers.
 */
const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  // Only enable on devices that have a mouse/trackpad (laptops, PCs, even
  // touch-laptops). Pure touch devices (phones/tablets) get nothing rendered.
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(any-pointer: fine)').matches
  )

  useEffect(() => {
    if (!enabled) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let px = mx
    let py = my
    let raf = 0
    let visible = false

    const reveal = () => {
      if (visible) return
      visible = true
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      reveal()
    }

    const onOver = (e) => {
      const t = e.target
      if (!t || !t.closest) return
      const interactive = t.closest('a, button, [role="button"], label, .fx-card, [data-cursor="link"]')
      const editable = t.closest('input, textarea, select, [contenteditable="true"], [data-cursor="text"]')
      ring.classList.toggle('is-hover', !!interactive && !editable)
      ring.classList.toggle('is-text', !!editable)
      dot.classList.toggle('is-hidden', !!editable)
    }

    const onLeave = () => {
      visible = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    const loop = () => {
      rx += (mx - rx) * 0.2
      ry += (my - ry) * 0.2

      const dx = rx - px
      const dy = ry - py
      px = rx
      py = ry

      const vel = Math.min(Math.hypot(dx, dy), 22)
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI
      const stretch = 1 + vel / 24
      const squash = 1 - vel / 42

      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) rotate(${angle}deg) scale(var(--s, 1))`
      ring.style.setProperty('--sx', stretch.toFixed(3))
      ring.style.setProperty('--sy', squash.toFixed(3))

      raf = requestAnimationFrame(loop)
    }

    dot.style.opacity = '0'
    ring.style.opacity = '0'
    document.documentElement.classList.add('has-custom-cursor')
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    window.addEventListener('blur', onLeave)
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('blur', onLeave)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span />
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}

export default CustomCursor
