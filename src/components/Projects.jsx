import { useState, useRef, useEffect, useCallback } from 'react'
import { ExternalLink, Github, Eye, Code, Zap, Brain, Rocket, ChevronLeft, ChevronRight } from 'lucide-react'
import ImageModal from './ImageModal'
import { projects } from '../data/projects'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [zoomedImage, setZoomedImage] = useState(null)

  // ── Archive-drawer coverflow for the Other Projects slider ──
  const flowRef = useRef(null)
  const flowRaf = useRef(0)
  const [flowIdx, setFlowIdx] = useState(0)

  const updateFlow = useCallback(() => {
    const track = flowRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const center = rect.left + rect.width / 2
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let best = 0
    let bestDist = Infinity
    Array.from(track.children).forEach((card, i) => {
      const r = card.getBoundingClientRect()
      const dist = r.left + r.width / 2 - center
      if (Math.abs(dist) < bestDist) {
        bestDist = Math.abs(dist)
        best = i
      }
      if (reduced) {
        card.style.transform = ''
        card.style.opacity = ''
        return
      }
      // -1 … 1 relative offset from the track centre
      const t = Math.max(-1, Math.min(1, dist / rect.width))
      card.style.transform = `perspective(900px) rotateY(${(-t * 16).toFixed(2)}deg) scale(${(1 - Math.abs(t) * 0.1).toFixed(3)})`
      card.style.opacity = (1 - Math.abs(t) * 0.35).toFixed(3)
      card.style.zIndex = String(100 - Math.round(Math.abs(t) * 50))
    })
    setFlowIdx(best)
  }, [])

  const onFlowScroll = () => {
    cancelAnimationFrame(flowRaf.current)
    flowRaf.current = requestAnimationFrame(updateFlow)
  }

  useEffect(() => {
    // reset to the first card when the filter changes, then lay out the flow
    flowRef.current?.scrollTo({ left: 0 })
    updateFlow()
    window.addEventListener('resize', updateFlow)
    return () => {
      window.removeEventListener('resize', updateFlow)
      cancelAnimationFrame(flowRaf.current)
    }
  }, [updateFlow, filter])

  const scrollFlow = (dir) => {
    const track = flowRef.current
    if (!track || !track.children.length) return
    const step = track.children[0].getBoundingClientRect().width + 24
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Eye size={15} /> },
    { id: 'fullstack', name: 'Full Stack', icon: <Code size={15} /> },
    { id: 'data-science', name: 'Data Science', icon: <Zap size={15} /> },
    { id: 'ml', name: 'Machine Learning', icon: <Brain size={15} /> },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const filteredOther =
    filter === 'all' ? otherProjects : otherProjects.filter((p) => p.category === filter)

  const filteredFeatured =
    filter === 'all' ? featuredProjects : featuredProjects.filter((p) => p.category === filter)

  const serial = (id) => `No. ${String(id).padStart(2, '0')}`

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-badge">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-world solutions — from client websites to NASA hackathon submissions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-md border v-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gray-900 text-gray-50 border-gray-900 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-100 shadow-md'
                  : 'bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 border-gray-400/70 dark:border-gray-600 hover:border-gray-700 dark:hover:border-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {filteredFeatured.length > 0 && (
          <div className="mb-16">
            <h3 className="flex items-center gap-3 mb-8">
              <Rocket size={22} className="text-amber-700 dark:text-amber-500 flex-shrink-0" />
              <span className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                Featured Projects
              </span>
              <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-gray-400/70 to-transparent dark:from-gray-600" />
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredFeatured.map((project) => (
                <div
                  key={project.id}
                  className="fx-card group relative bg-[#faf9f7] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-400/80 dark:border-gray-500/70"
                >
                  <span className="v-rule" aria-hidden="true" />

                  <div className="p-5 sm:p-6">
                    {/* Plate header — serial number + stamp */}
                    <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-gray-300/90 dark:border-gray-600">
                      <span className="v-mono text-[11px] tracking-[0.22em] uppercase text-gray-500 dark:text-gray-400">
                        {serial(project.id)}
                      </span>
                      <span className="stamp stamp--tilt text-amber-800/90 dark:text-amber-400/90">
                        {project.tag}
                      </span>
                    </div>

                    {/* Matted photograph */}
                    <div
                      className={`relative rounded-md overflow-hidden border border-gray-400/70 dark:border-gray-500/70 bg-gradient-to-br ${project.gradient} ${project.image ? 'cursor-pointer' : ''}`}
                      onClick={() => project.image && setZoomedImage(project.image)}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="v-photo w-full h-48 sm:h-52 object-cover"
                        />
                      ) : (
                        <div className="h-48 sm:h-52 flex items-center justify-center relative">
                          <span className="absolute text-8xl opacity-15 select-none">{project.emoji}</span>
                          <span className="text-6xl">{project.emoji}</span>
                        </div>
                      )}
                    </div>

                    {/* Title & description */}
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-5 mb-2 leading-snug">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Ledger stats */}
                    {project.stats && (
                      <div className="grid grid-cols-3 divide-x divide-gray-300/90 dark:divide-gray-600 border-y border-gray-300/90 dark:border-gray-600 mb-4">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="px-2 py-2.5 text-center">
                            <div className="font-display font-bold text-[13px] text-gray-800 dark:text-gray-100 leading-snug">
                              {value}
                            </div>
                            <div className="v-mono text-[9px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 mt-1">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Typeset technology line */}
                    <p className="v-mono text-[10px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                      {project.technologies.join(' · ')}
                    </p>

                    {/* Colophon footer */}
                    <div className="flex items-center justify-between pt-3 border-t-[3px] border-double border-gray-400/70 dark:border-gray-500/70">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 v-mono text-[11px] uppercase tracking-[0.18em] text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors duration-300"
                      >
                        <Github size={14} />
                        View on GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 v-mono text-[11px] uppercase tracking-[0.18em] text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors duration-300"
                        >
                          Live
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects — archive-drawer coverflow slider */}
        {filteredOther.length > 0 && (
          <div>
            <h3 className="flex items-center gap-3 mb-8">
              <span className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                {filter === 'all' ? 'Other Projects' : 'Projects'}
              </span>
              <span className="flex-1 h-px bg-gradient-to-r from-gray-400/70 to-transparent dark:from-gray-600" />
              <span className="hidden sm:inline v-mono text-[10px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 flex-shrink-0">
                Plate {String(flowIdx + 1).padStart(2, '0')} / {String(filteredOther.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button
                  onClick={() => scrollFlow(-1)}
                  disabled={flowIdx === 0}
                  aria-label="Previous project"
                  className={`p-2 rounded-md border transition-all duration-200 ${
                    flowIdx > 0
                      ? 'border-gray-400/80 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-amber-700 dark:hover:border-amber-500 hover:text-amber-800 dark:hover:text-amber-400'
                      : 'border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={() => scrollFlow(1)}
                  disabled={flowIdx >= filteredOther.length - 1}
                  aria-label="Next project"
                  className={`p-2 rounded-md border transition-all duration-200 ${
                    flowIdx < filteredOther.length - 1
                      ? 'border-gray-400/80 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-amber-700 dark:hover:border-amber-500 hover:text-amber-800 dark:hover:text-amber-400'
                      : 'border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </h3>

            <div
              ref={flowRef}
              onScroll={onFlowScroll}
              className="cert-slider flex gap-6 overflow-x-auto pt-2 pb-5 px-2 sm:px-6"
              style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredOther.map((project) => (
                <div
                  key={project.id}
                  style={{ scrollSnapAlign: 'center', willChange: 'transform, opacity' }}
                  className="group relative flex-shrink-0 w-[78vw] max-w-[20rem] sm:w-80 bg-[#faf9f7] dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-400/80 dark:border-gray-500/70 hover:shadow-xl transition-shadow duration-300"
                >
                  <span className="v-rule" aria-hidden="true" />

                  <div className="p-4 sm:p-5">
                    {/* Plate header */}
                    <div className="flex items-center justify-between gap-2 pb-2.5 mb-3.5 border-b border-gray-300/90 dark:border-gray-600">
                      <span className="v-mono text-[10px] tracking-[0.22em] uppercase text-gray-500 dark:text-gray-400">
                        {serial(project.id)}
                      </span>
                      <span className="stamp text-amber-800/90 dark:text-amber-400/90">
                        {project.tag}
                      </span>
                    </div>

                    {/* Matted photograph */}
                    <div
                      className={`relative rounded-md overflow-hidden border border-gray-400/70 dark:border-gray-500/70 bg-gradient-to-br ${project.gradient} ${project.image ? 'cursor-pointer' : ''}`}
                      onClick={() => project.image && setZoomedImage(project.image)}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="v-photo w-full h-32 object-cover"
                        />
                      ) : (
                        <div className="h-32 flex items-center justify-center">
                          <span className="text-4xl">{project.emoji}</span>
                        </div>
                      )}
                    </div>

                    <h4 className="font-display text-base font-bold text-gray-900 dark:text-white mt-4 mb-2 leading-snug">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="v-mono text-[9px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                      {project.technologies.slice(0, 5).join(' · ')}
                      {project.technologies.length > 5 && ` · +${project.technologies.length - 5}`}
                    </p>

                    <div className="pt-2.5 border-t border-gray-300/90 dark:border-gray-600">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 v-mono text-[10px] uppercase tracking-[0.18em] text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors duration-300"
                      >
                        <Github size={13} />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageModal
        image={zoomedImage}
        alt="Project Preview"
        isOpen={!!zoomedImage}
        onClose={() => setZoomedImage(null)}
      />
    </section>
  )
}

export default Projects
