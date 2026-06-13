import { useEffect } from 'react'

/**
 * Mounted once. A single delegated pointer listener drives the 3D tilt and
 * cursor-following spotlight/edge for every `.fx-card` on the page (including
 * cards added later), so individual cards stay markup-only.
 */
const MAX_TILT = 5 // degrees

const CardFX = () => {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let current = null

    const reset = (card) => {
      card.style.setProperty('--rx', '0deg')
      card.style.setProperty('--ry', '0deg')
    }

    const onMove = (e) => {
      const card = e.target.closest?.('.fx-card')

      if (card !== current && current) {
        reset(current)
        current = null
      }
      if (!card) return
      current = card

      const r = card.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      const px = x / r.width
      const py = y / r.height

      card.style.setProperty('--mx', `${x}px`)
      card.style.setProperty('--my', `${y}px`)
      card.style.setProperty('--ry', `${((px - 0.5) * MAX_TILT).toFixed(2)}deg`)
      card.style.setProperty('--rx', `${((0.5 - py) * MAX_TILT).toFixed(2)}deg`)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])

  return null
}

export default CardFX
