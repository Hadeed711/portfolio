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
  FaRocket,
  FaRobot,
  FaLaptopCode,
  FaAward,
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
} from 'react-icons/si'
import { useState } from 'react'
import hackathonIcon from '../assets/icons/hackathon_icon.png'
import mlIcon from '../assets/icons/ml_icon.png'
import devIcon from '../assets/icons/dev_icon.png'
import datascienceIcon from '../assets/icons/datascience_icon.png'
import achievementIcon from '../assets/icons/achievement_icon.png'

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
      color: 'from-blue-600 to-indigo-700',
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
      color: 'from-green-500 to-emerald-600',
      technologies: [
        { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
        { name: 'Django', icon: <SiDjango />, color: 'text-green-600' },
        { name: 'FastAPI', icon: <SiFastapi />, color: 'text-teal-500' },
        { name: 'PHP', icon: <SiPhp />, color: 'text-indigo-500' },
        { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-700' },
        { name: 'C', icon: <FaCode />, color: 'text-gray-600 dark:text-gray-300' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-600' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
        { name: 'SQL', icon: <FaDatabase />, color: 'text-gray-600 dark:text-gray-400' },
        { name: 'REST APIs', icon: <FaDatabase />, color: 'text-indigo-500' },
      ],
    },
    ml: {
      title: 'ML & Data Science',
      icon: <SiTensorflow className="text-2xl" />,
      color: 'from-orange-500 to-red-600',
      technologies: [
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
      color: 'from-purple-500 to-violet-600',
      technologies: [
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
      color: 'from-pink-500 to-rose-600',
      technologies: [
        { name: 'Photoshop', icon: <SiAdobephotoshop />, color: 'text-blue-600' },
        { name: 'Illustrator', icon: <SiAdobeillustrator />, color: 'text-orange-600' },
        { name: 'Anaconda', icon: <SiAnaconda />, color: 'text-green-600' },
        { name: 'Jupyter', icon: <SiJupyter />, color: 'text-orange-500' },
        { name: 'MATLAB', icon: <FaCode />, color: 'text-orange-500' },
      ],
    },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900/50 pattern-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">Who I Am</span>
          <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about building AI-powered solutions and data-driven applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Building AI-Driven Digital Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm a Computer Science undergraduate at the University of Agriculture, Faisalabad,
                specializing in Machine Learning, Data Science, and Full-Stack Development. I have
                hands-on experience building AI-driven applications deployed on cloud platforms.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I have participated in international hackathons including <strong className="text-blue-600 dark:text-blue-400">NASA Space Apps</strong> and{' '}
                <strong className="text-blue-600 dark:text-blue-400">IBM AI challenges</strong>, with a strong
                interest in AI research and graduate study. My stack spans Django/FastAPI backends,
                React frontends, and Python-based ML pipelines.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'University', value: 'UAF, Faisalabad' },
                { label: 'Degree', value: 'BS Computer Science' },
                { label: 'Expected', value: 'May 2026' },
                { label: 'Email', value: 'hadeedahmad711@gmail.com', small: true },
                { label: 'Phone', value: '+92 324 1669274' },
                { label: 'NSCT Percentile', value: '84.6th — Govt. Assessment' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className={`font-semibold text-gray-900 dark:text-white ${item.small ? 'text-xs' : 'text-sm'}`}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Skills & Expertise
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-4">
            {[
              {
                  icon: hackathonIcon,
                  title: 'International Hackathons',
                  desc: 'NASA Space Apps 2025, IBM Watson Hackathon, Code with KIRO — building real solutions for global challenges.',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: mlIcon,
                  title: 'AI & Machine Learning',
                  desc: 'Regression, Classification, Clustering, Neural Networks — achieving 92% accuracy on production ML models.',
                  color: 'from-violet-500 to-purple-600',
                },
                {
                  icon: devIcon,
                  title: 'Full Stack Projects',
                  desc: 'Delivered real client websites (Sundar Marbles) using React + Django, deployed on Vercel & Azure.',
                  color: 'from-green-500 to-emerald-600',
                },
                {
                  icon: datascienceIcon,
                  title: 'Data Science',
                  desc: 'EDA, Pandas, Scikit-learn, Streamlit dashboards — turning raw data into actionable insights.',
                  color: 'from-orange-500 to-amber-600',
                },
                {
                  icon: achievementIcon,
                  title: 'Competition Achievements',
                  desc: 'IAAC Silver Honour (top 8%), MIT² — #108 out of 533 teams worldwide.',
                  color: 'from-pink-500 to-rose-600',
                },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
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
                className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-600'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    activeCategory === key
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {category.technologies.length}
                </span>
              </button>
            ))}
          </div>

          {/* Active Category Technologies */}
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${techCategories[activeCategory].color}`}>
                <span className="text-white text-2xl">
                  {techCategories[activeCategory].icon}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                {techCategories[activeCategory].title}
              </h4>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {techCategories[activeCategory].technologies.map((tech) => (
                <div
                  key={`${activeCategory}-${tech.name}`}
                  className="group bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 hover:shadow-md transition-all duration-200 hover:-translate-y-1 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
                >
                  <div className="text-center">
                    <div className={`text-2xl mb-2 ${tech.color} group-hover:scale-110 transition-transform duration-200`}>
                      {tech.icon}
                    </div>
                    <h5 className="font-medium text-xs text-gray-900 dark:text-white">
                      {tech.name}
                    </h5>
                  </div>
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
