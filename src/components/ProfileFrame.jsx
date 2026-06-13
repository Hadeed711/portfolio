import { useRef } from 'react'

/**
 * Profile photo with an offset silver line and a dotted pattern behind it.
 * The photo and the silver line move *independently* on hover — the line tilts
 * harder, drifts toward the cursor, and eases on a slower curve, so it visibly
 * parallaxes against the image instead of moving as one rigid plane.
 */
const ProfileFrame = ({ src, alt, sizeClass = 'w-64 h-64 sm:w-72 sm:h-72' }) => {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height

    // image: gentle tilt
    el.style.setProperty('--rx', `${((0.5 - py) * 8).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${((px - 0.5) * 8).toFixed(2)}deg`)

    // silver line: stronger tilt + drift toward the cursor (parallax)
    el.style.setProperty('--lrx', `${((0.5 - py) * 15).toFixed(2)}deg`)
    el.style.setProperty('--lry', `${((px - 0.5) * 15).toFixed(2)}deg`)
    el.style.setProperty('--lx', `${((px - 0.5) * 14).toFixed(1)}px`)
    el.style.setProperty('--ly', `${((py - 0.5) * 14).toFixed(1)}px`)

    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    ;['--rx', '--ry', '--lrx', '--lry'].forEach((v) => el.style.setProperty(v, '0deg'))
    el.style.setProperty('--lx', '0px')
    el.style.setProperty('--ly', '0px')
  }

  return (
    <div className="profile-frame" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="profile-frame__pattern" />
      <div className="profile-frame__ring" />
      <div className="profile-frame__tilt">
        <div className={`profile-frame__img ${sizeClass}`}>
          <img src={src} alt={alt} />
        </div>
      </div>
      <div className="profile-frame__sheen" />
    </div>
  )
}

export default ProfileFrame
