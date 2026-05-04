import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, Zap, Target, Award } from 'lucide-react'
import { projects } from '../data/projects'

const FALLBACK = {
  title: 'Project Case Study',
  summary: 'Selected work from Hadeed Ahmad.',
  description:
    'Explore a focused case study highlighting software engineering and product delivery skills.',
  technologies: ['React', 'JavaScript', 'UI/UX'],
  role: 'Software Engineer',
  duration: 'Available on request',
  team: '1+ developers',
  impact: 'Built to showcase practical product thinking and technical execution.',
  github: 'https://github.com/Hadeed711',
}

const ProjectDetailPage = () => {
  const { id } = useParams()
  const project = projects.find((p) => p.id === parseInt(id, 10)) || FALLBACK

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb + back nav */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <li>
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                to="/#projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 dark:text-white font-medium truncate max-w-xs">{project.title}</li>
          </ol>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </nav>

        <article className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 md:p-12">

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300">
                <Zap size={14} />
                Case Study
              </span>
              {project.tag && (
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${project.tagColor || 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>
                  <Code size={14} />
                  {project.tag}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              {project.summary}
            </p>

            {/* Stats grid */}
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

            {/* Content */}
            <div className="mt-10 space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-3">Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Impact</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.impact}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">Technologies</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-100 dark:border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:hadeedahmad711@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:from-blue-700 hover:to-violet-700 transition-all duration-200"
              >
                <Award size={18} />
                Contact Hadeed Ahmad
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-gray-700 text-white font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <Github size={18} />
                View on GitHub
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

export default ProjectDetailPage
