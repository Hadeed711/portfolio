import {
  FaReact,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCloud,
  FaCode,
  FaBrain,
  FaEye,
  FaChartBar,
  FaRobot,
  FaLock,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import {
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiVercel,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiAdobeillustrator,
  SiVite,
  SiFastapi,
  SiStreamlit,
  SiAdobephotoshop,
  SiTableau,
  SiAnaconda,
  SiRailway,
  SiTypescript,
  SiPhp,
  SiWordpress,
  SiTensorflow,
  SiCplusplus,
  SiOpencv,
  SiDocker,
  SiGithubactions,
} from 'react-icons/si'
import { useState } from 'react'
import ProfileFrame from './ProfileFrame'
import profileImg from '../assets/profile.jpg'

const About = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skills = [
    { name: 'Frontend Development', level: 85 },
    { name: 'Backend Development (Django/FastAPI)', level: 82 },
    { name: 'Data Science & EDA', level: 88 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Graphic Designing', level: 75 },
  ]

  const techCategories = {
    frontend: {
      title: 'Frontend',
      icon: <FaReact className="text-2xl" />,
      technologies: [
        { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500' },
        { name: 'Vite', icon: <SiVite />, color: 'text-yellow-500' },
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
        { name: 'WordPress', icon: <SiWordpress />, color: 'text-blue-700' },
      ],
    },
    backend: {
      title: 'Backend',
      icon: <SiDjango className="text-2xl" />,
      technologies: [
        { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
        { name: 'Django', icon: <SiDjango />, color: 'text-green-600' },
        { name: 'FastAPI', icon: <SiFastapi />, color: 'text-teal-500' },
        { name: 'PHP', icon: <SiPhp />, color: 'text-indigo-500' },
        { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-700' },
        { name: 'C', icon: <FaCode />, color: 'text-gray-600 dark:text-gray-300' },
        { name: 'JWT Auth', icon: <FaLock />, color: 'text-rose-500' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-600' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
        { name: 'MS SQL', icon: <FaDatabase />, color: 'text-red-600' },
        { name: 'SQL', icon: <FaDatabase />, color: 'text-gray-600 dark:text-gray-400' },
        { name: 'REST APIs', icon: <FaDatabase />, color: 'text-indigo-500' },
      ],
    },
    ml: {
      title: 'ML & Data Science',
      icon: <SiTensorflow className="text-2xl" />,
      technologies: [
        { name: 'Agentic AI', icon: <FaRobot />, color: 'text-violet-600' },
        { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-600' },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, color: 'text-orange-500' },
        { name: 'YOLO', icon: <FaEye />, color: 'text-green-600' },
        { name: 'OpenCV', icon: <SiOpencv />, color: 'text-blue-500' },
        { name: 'Keras', icon: <FaBrain />, color: 'text-red-600' },
        { name: 'Pandas', icon: <SiPandas />, color: 'text-blue-600' },
        { name: 'NumPy', icon: <SiNumpy />, color: 'text-blue-500' },
        { name: 'SciPy', icon: <FaCode />, color: 'text-blue-700' },
        { name: 'Seaborn', icon: <FaChartBar />, color: 'text-teal-500' },
        { name: 'Streamlit', icon: <SiStreamlit />, color: 'text-red-500' },
        { name: 'Tableau', icon: <SiTableau />, color: 'text-blue-700' },
        { name: 'Jupyter', icon: <SiJupyter />, color: 'text-orange-500' },
      ],
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: <SiVercel className="text-2xl" />,
      technologies: [
        { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
        { name: 'CI/CD Pipelines', icon: <SiGithubactions />, color: 'text-indigo-500' },
        { name: 'Vercel', icon: <SiVercel />, color: 'text-gray-900 dark:text-white' },
        { name: 'Azure', icon: <FaCloud />, color: 'text-blue-600' },
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
        { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-900 dark:text-white' },
        { name: 'Railway', icon: <SiRailway />, color: 'text-purple-500' },
        { name: 'Streamlit Cloud', icon: <SiStreamlit />, color: 'text-red-400' },
      ],
    },
    design: {
      title: 'Design & Tools',
      icon: <SiAdobeillustrator className="text-2xl" />,
      technologies: [
        { name: 'Photoshop', icon: <SiAdobephotoshop />, color: 'text-blue-600' },
        { name: 'Illustrator', icon: <SiAdobeillustrator />, color: 'text-orange-600' },
        { name: 'Anaconda', icon: <SiAnaconda />, color: 'text-green-600' },
        { name: 'Jupyter', icon: <SiJupyter />, color: 'text-orange-500' },
        { name: 'MATLAB', icon: <FaCode />, color: 'text-orange-500' },
      ],
    },
  }

  const facts = [
    { label: 'University', value: 'The University of Agriculture, Faisalabad' },
    { label: 'Degree', value: 'BS Computer Science' },
    { label: 'Expected', value: 'May 2026' },
    { label: 'Email', value: 'hadeedahmad711@gmail.com' },
    { label: 'Phone', value: '+92 324 1669274' },
    { label: 'NSCT Percentile', value: '84.6th — Govt. Assessment' },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-900/50 pattern-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-badge">Who I Am</span>
          <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about building AI-powered solutions and data-driven applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12 sm:mb-16">
          {/* Left Column - Content */}
          <div data-reveal className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Building AI-Driven Digital Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm a Computer Science undergraduate at the University of Agriculture, Faisalabad,
                specializing in Machine Learning, Data Science, and Full-Stack Development. I have
                hands-on experience building AI-driven applications deployed on cloud platforms.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I have participated in international hackathons including <strong className="text-amber-800 dark:text-amber-400">NASA Space Apps</strong> and{' '}
                <strong className="text-amber-800 dark:text-amber-400">IBM AI challenges</strong>, with a strong
                interest in AI research and graduate study. My stack spans Django/FastAPI backends,
                React frontends, and Python-based ML pipelines.
              </p>
            </div>

            {/* Profile picture — mobile only, sits right after the description */}
            <div className="lg:hidden flex justify-center">
              <ProfileFrame
                src={profileImg}
                alt="Hadeed Ahmad"
                sizeClass="w-56 h-56 sm:w-64 sm:h-64"
              />
            </div>

            {/* Personal record — index card */}
            <div className="relative bg-[#faf9f7] dark:bg-gray-800 rounded-xl shadow-lg border border-gray-400/80 dark:border-gray-500/70 p-4 sm:p-5">
              <span className="v-rule" aria-hidden="true" />
              <div className="flex items-center justify-between gap-3 pb-3 mb-1 border-b border-gray-300/90 dark:border-gray-600">
                <span className="v-mono text-[10px] tracking-[0.22em] uppercase text-gray-500 dark:text-gray-400">
                  Index — Personal Record
                </span>
                <span className="stamp stamp--tilt text-amber-800/90 dark:text-amber-400/90">
                  <FaMapMarkerAlt size={9} />
                  Faisalabad, PK
                </span>
              </div>
              <dl className="divide-y divide-gray-300/70 dark:divide-gray-600/70">
                {facts.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="v-mono text-[10px] uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400 flex-shrink-0">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white text-right break-all">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Proficiency index */}
            <div>
              <h4 className="flex items-center gap-3 mb-5">
                <span className="font-display text-xl font-bold text-gray-900 dark:text-white">
                  Skills & Expertise
                </span>
                <span className="flex-1 h-px bg-gradient-to-r from-gray-400/70 to-transparent dark:from-gray-600" />
              </h4>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="v-mono text-[10px] tracking-[0.14em] text-gray-500 dark:text-gray-400 flex-shrink-0">
                        {skill.level} / 100
                      </span>
                    </div>
                    {/* segmented ink scale — filled blocks out of ten, bronze tip */}
                    <div className="flex gap-[3px]" role="img" aria-label={`${skill.name}: ${skill.level} out of 100`}>
                      {Array.from({ length: 10 }, (_, i) => {
                        const filled = Math.round(skill.level / 10)
                        const isTip = i === filled - 1
                        return (
                          <span
                            key={i}
                            className={`h-[7px] flex-1 rounded-[1px] ${
                              i < filled
                                ? isTip
                                  ? 'bg-amber-700 dark:bg-amber-500'
                                  : 'bg-gray-800 dark:bg-gray-200'
                                : 'border border-gray-400/60 dark:border-gray-600'
                            }`}
                          />
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile picture (desktop only) */}
          <div data-reveal className="hidden lg:flex justify-center lg:justify-end">
            <ProfileFrame
              src={profileImg}
              alt="Hadeed Ahmad"
              sizeClass="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
            />
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold gradient-text mb-4">
              Technologies & Expertise
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive skill set across the modern development stack
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.entries(techCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-md border v-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gray-900 text-gray-50 border-gray-900 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-100 shadow-md'
                    : 'bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 border-gray-400/70 dark:border-gray-600 hover:border-gray-700 dark:hover:border-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="text-sm">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
                <span className="opacity-60">{category.technologies.length}</span>
              </button>
            ))}
          </div>

          {/* Active Category — catalogue plate */}
          <div data-reveal className="relative bg-[#faf9f7] dark:bg-gray-800 rounded-xl p-5 sm:p-8 shadow-lg border border-gray-400/80 dark:border-gray-500/70">
            <span className="v-rule" aria-hidden="true" />

            <div className="flex items-center justify-between gap-3 pb-4 mb-6 border-b border-gray-300/90 dark:border-gray-600">
              <span className="flex items-center gap-3 min-w-0">
                <span className="text-amber-700 dark:text-amber-500 flex-shrink-0">
                  {techCategories[activeCategory].icon}
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
                  {techCategories[activeCategory].title}
                </span>
              </span>
              <span className="v-mono text-[10px] tracking-[0.22em] uppercase text-gray-500 dark:text-gray-400 flex-shrink-0">
                {techCategories[activeCategory].technologies.length} entries
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {techCategories[activeCategory].technologies.map((tech, i) => (
                <div
                  key={`${activeCategory}-${tech.name}`}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/40 hover:border-amber-700/70 dark:hover:border-amber-500/70 transition-colors duration-300"
                >
                  <span className="v-mono text-[9px] text-gray-400 dark:text-gray-500 flex-shrink-0 w-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-lg flex-shrink-0 ${tech.color}`}>{tech.icon}</span>
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
