import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, Zap, Target, Award } from 'lucide-react'

const projects = {
  1: {
    title: 'E-Commerce Platform',
    summary: 'A scalable e-commerce experience with secure payments, inventory management, and an admin dashboard.',
    description:
      'Built for performance and conversion, this project combines a clean storefront, operational tooling, and secure checkout flows.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    role: 'Full Stack Developer & Team Lead',
    duration: '6 months',
    team: '4 developers',
    impact: 'Optimized for fast browsing, reliable checkout, and mobile-first shopping.',
  },
  2: {
    title: 'AI Task Manager',
    summary: 'An AI-assisted productivity app with prioritization, natural language input, and analytics.',
    description:
      'Focuses on task intelligence, collaboration, and automation to help teams organize work more effectively.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Node.js', 'PostgreSQL'],
    role: 'Frontend Lead & AI Integration',
    duration: '4 months',
    team: '3 developers',
    impact: 'Designed to improve task completion, visibility, and planning accuracy.',
  },
  3: {
    title: 'Weather Dashboard',
    summary: 'Interactive weather analytics with visual forecasts, location data, and responsive charts.',
    description:
      'A polished dashboard that turns weather data into a fast, readable, and useful daily planning tool.',
    technologies: ['Vue.js', 'Chart.js', 'Weather API', 'PWA'],
    role: 'Frontend Developer',
    duration: '3 months',
    team: '2 developers',
    impact: 'Built for quick insights, clear visualizations, and reliable user experience.',
  },
  4: {
    title: 'Social Media API',
    summary: 'A RESTful API with authentication, realtime features, and scalable backend patterns.',
    description:
      'Designed for performance and security with clear endpoints, messaging support, and robust request handling.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Socket.io'],
    role: 'Backend Lead Developer',
    duration: '5 months',
    team: '3 developers',
    impact: 'Focused on low latency, secure access control, and dependable scaling.',
  },
  5: {
    title: 'Portfolio Website',
    summary: 'A modern portfolio with motion, dark mode, responsive layouts, and strong personal branding.',
    description:
      'This website is the public-facing portfolio for Hadeed Ahmad, built to present engineering work clearly and professionally.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    role: 'Full Stack Developer & Designer',
    duration: '2 months',
    team: '1 developer',
    impact: 'Built to perform well in search, support sharing previews, and convert visitors into contacts.',
  },
  6: {
    title: 'Blockchain Voting',
    summary: 'A decentralized voting concept built on blockchain for transparent election workflows.',
    description:
      'Combines smart contract automation, security controls, and an accessible voter interface.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    role: 'Blockchain Developer & Smart Contract Architect',
    duration: '8 months',
    team: '4 developers',
    impact: 'Built around immutability, auditability, and user trust.',
  },
}

const ProjectDetailPage = () => {
  const { id } = useParams()
  const project = projects[id] || {
    title: 'Project Case Study',
    summary: 'Selected work from Hadeed Ahmad.',
    description: 'Explore a focused case study highlighting software engineering and product delivery skills.',
    technologies: ['React', 'JavaScript', 'UI/UX'],
    role: 'Software Engineer',
    duration: 'Available on request',
    team: '1+ developers',
    impact: 'Built to showcase practical product thinking and technical execution.',
  }

  useEffect(() => {
    const hasHttpOrigin = window.location.protocol === 'http:' || window.location.protocol === 'https:'
    const pageTitle = `${project.title} | Hadeed Ahmad`
    const pageDescription = `${project.summary} ${project.description}`
    const canonicalHref = hasHttpOrigin ? `${window.location.origin}/project/${id}` : null

    const setMetaTag = (attributeName, value, content) => {
      if (!content) return

      let element = document.head.querySelector(`meta[${attributeName}="${value}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attributeName, value)
        element.setAttribute('data-seo-managed', 'true')
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    const setLinkTag = (rel, href) => {
      if (!href) return

      let element = document.head.querySelector(`link[rel="${rel}"]`)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        element.setAttribute('data-seo-managed', 'true')
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }

    document.title = pageTitle
    setMetaTag('name', 'description', pageDescription)
    setMetaTag('property', 'og:title', pageTitle)
    setMetaTag('property', 'og:description', pageDescription)
    setMetaTag('property', 'og:type', 'article')
    setMetaTag('property', 'og:image', '/favicon.png')
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', pageTitle)
    setMetaTag('name', 'twitter:description', pageDescription)
    setMetaTag('name', 'twitter:image', '/favicon.png')
    setLinkTag('canonical', canonicalHref)

    return () => {
      document.querySelectorAll('[data-seo-managed="true"]').forEach((element) => element.remove())
    }
  }, [id, project])

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <section className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-6 text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300">
                <Zap size={14} />
                Case Study
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <Code size={14} />
                Hadeed Ahmad
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              {project.summary}
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-10">
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-700/60 p-5 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar size={16} />
                  Duration
                </div>
                <div className="text-lg font-bold">{project.duration}</div>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-700/60 p-5 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  <Users size={16} />
                  Team
                </div>
                <div className="text-lg font-bold">{project.team}</div>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-700/60 p-5 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  <Target size={16} />
                  Role
                </div>
                <div className="text-lg font-bold">{project.role}</div>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3">Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Impact</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.impact}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-100 dark:border-blue-500/20"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:hadeedahmad711@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:from-blue-700 hover:to-violet-700 transition-all duration-200"
              >
                <Award size={18} />
                Contact Hadeed Ahmad
              </a>
              <a
                href="https://github.com/Hadeed711"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-gray-700 text-white font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <Github size={18} />
                GitHub
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProjectDetailPage
