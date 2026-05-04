import { useState } from 'react'
import { ExternalLink, Github, Eye, Code, Zap, Brain, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageModal from './ImageModal'
import { projects } from '../data/projects'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [zoomedImage, setZoomedImage] = useState(null)

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Eye size={18} /> },
    { id: 'fullstack', name: 'Full Stack', icon: <Code size={18} /> },
    { id: 'data-science', name: 'Data Science', icon: <Zap size={18} /> },
    { id: 'ml', name: 'Machine Learning', icon: <Brain size={18} /> },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const filteredOther =
    filter === 'all' ? otherProjects : otherProjects.filter((p) => p.category === filter)

  const filteredFeatured =
    filter === 'all' ? featuredProjects : featuredProjects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-world solutions — from client websites to NASA hackathon submissions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
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
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
              <Rocket size={24} className="text-blue-500" />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredFeatured.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Project Image or Gradient banner */}
                  <div 
                    className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden ${project.image ? 'cursor-pointer' : ''}`}
                    onClick={() => project.image && setZoomedImage(project.image)}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="text-7xl opacity-20 select-none">{project.emoji}</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl">{project.emoji}</span>
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <Github className="text-white" size={18} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <ExternalLink className="text-white" size={18} />
                        </a>
                      )}
                    </div>

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.tagColor}`}>
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stats */}
                    {project.stats && (
                      <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-xs font-bold text-blue-600 dark:text-blue-400 leading-snug">
                              {value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 capitalize mt-0.5">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors duration-300"
                      >
                        <Github size={15} />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {filteredOther.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              {filter === 'all' ? 'Other Projects' : 'Projects'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOther.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Image or Gradient banner */}
                  <div 
                    className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden ${project.image ? 'cursor-pointer' : ''}`}
                    onClick={() => project.image && setZoomedImage(project.image)}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl">{project.emoji}</span>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${project.tagColor}`}>
                        {project.tag}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <Github className="text-white" size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="text-base font-bold mb-2 text-gray-900 dark:text-white leading-snug">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
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
