import { useState, useEffect, useRef } from 'react'

const LINES = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Hadeed Ahmad — Software Engineer' },
  { type: 'cmd', text: 'cat stack.json' },
  { type: 'arr', text: '["React", "Django", "FastAPI", "Python"]' },
  { type: 'cmd', text: 'run --focus' },
  { type: 'out', text: 'Backend · Data Science · Machine Learning' },
  { type: 'cmd', text: 'hackathons --count' },
  { type: 'out', text: 'NASA · IBM · KIRO · IAAC · MIT²  →  5 events' },
  { type: 'cmd', text: 'status' },
  { type: 'ok', text: '● Available for opportunities' },
]

const COLORS = {
  cmd: 'text-slate-100',
  out: 'text-slate-400',
  arr: 'text-amber-300/90',
  ok: 'text-emerald-400',
}

const Prompt = ({ type }) =>
  type === 'cmd' ? (
    <span className="text-emerald-400/90 mr-2 select-none">$</span>
  ) : (
    <span className="text-slate-600 mr-2 select-none">›</span>
  )

const CodeWindow = () => {
  const [done, setDone] = useState([])
  const [active, setActive] = useState({ type: 'cmd', text: '' })
  const timer = useRef(null)

  useEffect(() => {
    let i = 0
    let n = 0
    let completed = []

    const tick = () => {
      if (i >= LINES.length) {
        timer.current = setTimeout(() => {
          completed = []
          i = 0
          n = 0
          setDone([])
          setActive({ type: 'cmd', text: '' })
          tick()
        }, 2800)
        return
      }

      const line = LINES[i]
      if (n <= line.text.length) {
        setActive({ type: line.type, text: line.text.slice(0, n) })
        n += 1
        timer.current = setTimeout(tick, line.type === 'cmd' ? 52 : 20)
      } else {
        completed = [...completed, line]
        setDone(completed)
        setActive({ type: 'cmd', text: '' })
        i += 1
        n = 0
        timer.current = setTimeout(tick, 360)
      }
    }

    tick()
    return () => clearTimeout(timer.current)
  }, [])

  return (
    <div className="relative w-full max-w-md">
      <div className="code-window relative z-10 rounded-2xl overflow-hidden">
        <div className="code-window__scan" />

        {/* title bar */}
        <div className="code-window__bar flex items-center gap-2 px-4 py-3">
          <span className="w-3 h-3 rounded-full bg-rose-400/90" />
          <span className="w-3 h-3 rounded-full bg-amber-400/90" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
          <span className="ml-3 text-xs text-slate-400 tracking-wide">hadeed@portfolio: ~</span>
        </div>

        {/* body */}
        <div className="px-5 py-5 text-[13px] leading-7 min-h-[15rem]">
          {done.map((line, idx) => (
            <div key={idx} className="flex">
              <Prompt type={line.type} />
              <span className={COLORS[line.type]}>{line.text}</span>
            </div>
          ))}
          <div className="flex">
            <Prompt type={active.type} />
            <span className={COLORS[active.type]}>{active.text}</span>
            <span className="caret-blink ml-0.5 -mb-0.5 w-[8px] h-[18px] bg-slate-300/80 inline-block" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeWindow
