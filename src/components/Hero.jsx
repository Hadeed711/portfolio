import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'
import profileImg from '../assets/profile.jpg'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ['Backend Developer', 'Data Scientist', 'ML Engineer', 'Full Stack Developer']

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length
      const fullText = words[current]

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  const stats = [
    { value: '3+', label: 'Years Coding' },
    { value: '10+', label: 'Projects' },
    { value: '5', label: 'Hackathons' },
  ]

  const socials = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/Hadeed711' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hadeed-ahmad-a15919277' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:hadeedahmad711@gmail.com' },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-violet-950/30" />
      <div className="absolute inset-0 pattern-dots" />

      {/* Hero-specific blobs */}
      <div
        className="absolute top-16 right-10 w-80 h-80 rounded-full blur-3xl opacity-40 dark:opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.5), transparent 70%)', animation: 'blob 10s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-16 left-10 w-72 h-72 rounded-full blur-3xl opacity-30 dark:opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5), transparent 70%)', animation: 'blob 14s ease-in-out infinite', animationDelay: '3s' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left Column ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Status badge */}
            <div className="flex justify-center lg:justify-start mb-6">
              <span className="section-badge">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold tracking-[0.2em] uppercase">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
                <span className="gradient-text">Hadeed</span>
                <br />
                <span className="text-gray-900 dark:text-white">Ahmad</span>
              </h1>

              {/* Typewriter */}
              <div className="h-10 flex items-center justify-center lg:justify-start gap-2 text-xl md:text-2xl">
                <span className="w-1 h-6 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200 font-medium">{text}</span>
                <span className="w-0.5 h-7 rounded-full bg-violet-500 animate-pulse flex-shrink-0" />
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
              CS undergraduate specializing in Machine Learning, Data Science, and Full-Stack Development.
              Participated in NASA Space Apps and IBM AI hackathons. Passionate about AI research.
            </p>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-3 mb-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-shimmer group flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-violet-700 shadow-lg hover:shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a
                href="/CV_Hadeed_Ahmad.pdf"
                download
                className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-gray-800/90 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-10">
              {stats.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold gradient-text">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5 whitespace-nowrap">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column — Profile Initials Card ── */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Animated gradient ring */}
              <div className="absolute -inset-2 gradient-ring rounded-3xl opacity-80 blur-[3px]" />

              {/* Profile card with image */}
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-indigo-700 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Hadeed Ahmad Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating stat badge — NSCT */}
              <div
                className="absolute -bottom-6 -left-10 px-4 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float"
                style={{ animationDelay: '0s' }}
              >
                <div className="text-2xl font-extrabold gradient-text">84.6<span className="text-base">th</span></div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">NSCT Percentile</div>
              </div>

              {/* Floating stat badge — hackathons */}
              <div
                className="absolute -top-6 -right-10 px-4 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float"
                style={{ animationDelay: '2s' }}
              >
                <div className="text-2xl font-extrabold gradient-text">5+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Hackathons</div>
              </div>

              {/* Accent dots */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-violet-500 rounded-full shadow-lg animate-float" style={{ animationDelay: '3s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown
          size={28}
          className="text-gray-400 cursor-pointer hover:text-blue-600 transition-colors duration-300"
          onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
    </section>
  )
}

export default Hero
