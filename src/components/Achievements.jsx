import { useRef, useState, useEffect } from 'react'
import { Trophy, Medal, Star, Award, Globe, ClipboardList, Camera, ChevronLeft, ChevronRight } from 'lucide-react'
import ImageModal from './ImageModal'
import iaacImg from '../assets/iaac_img.png'
import mitImg from '../assets/mit_img.jfif'
import nasaImg from '../assets/nasa_img.png'
import ibmImg from '../assets/ibmcloud_img.png'
import kiroImg from '../assets/kiro_img.png'
import advGoogleImg from '../assets/advanalyticsgoogle_img.png'
import pythonImg from '../assets/python_img.png'
import webdevImg from '../assets/webdev_img.png'
import reactImg from '../assets/reactapps_img.png'
import neuralNetImg from '../assets/neuralnetwork_img.png'
import ibmCloudImg from '../assets/ibmcloud_img.png'

const ImgPlaceholder = ({ label = 'Image', aspect = 'aspect-[4/3]' }) => (
  <div className={`w-full ${aspect} bg-gray-100 dark:bg-gray-700/60 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-600 select-none`}>
    <Camera size={20} className="text-gray-300 dark:text-gray-500 mb-1.5" />
    <p className="text-xs text-gray-300 dark:text-gray-500 font-medium">{label}</p>
  </div>
)

const CertImage = ({ src, alt = 'Certificate' }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-full object-cover rounded-lg"
  />
)

const Achievements = () => {
  const certSliderRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)
  const [zoomedImage, setZoomedImage] = useState(null)

  const updateNav = () => {
    const el = certSliderRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 0)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2)
  }

  useEffect(() => { updateNav() }, [])

  const scroll = (dir) => {
    certSliderRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }
  const hackathons = [
    {
      title: 'IAAC — International Astronomy & Astrophysics Competition',
      result: 'Final Round — Silver Honour',
      detail: 'Secured 16/20 points. Ranked in the top 8% among all global participants.',
      icon: '🥈',
      color: 'from-yellow-400 to-amber-500',
      ring: 'border-yellow-400',
      year: '2024',
      image: iaacImg,
    },
    {
      title: 'MIT² — Massachusetts Institute of Technology',
      result: '#108 out of 533 Teams Worldwide',
      detail: 'Achieved 550/900 points and ranked 108 among 533 competing teams globally.',
      icon: '🏛️',
      color: 'from-red-500 to-rose-600',
      ring: 'border-red-500',
      year: '2024',
      image: mitImg,
    },
    {
      title: 'NASA Space App Challenge 2025',
      result: 'International Participant',
      detail: 'Built ExoLume — exoplanet detection app using ML with NASA datasets. Presented to U.S.-based judges.',
      icon: '🚀',
      color: 'from-blue-600 to-indigo-700',
      ring: 'border-blue-500',
      year: '2025',
      image: nasaImg,
    },
    {
      title: 'IBM Watson Urban AI Hackathon 2025',
      result: 'AI Urban Planning Solution',
      detail: 'AI-powered city planning box detecting urban hotspots within 10 km² with budget-aware suggestions.',
      icon: '🏙️',
      color: 'from-violet-500 to-purple-700',
      ring: 'border-violet-500',
      year: '2025',
      image: ibmImg,
    },
    {
      title: 'Code with KIRO Hackathon 2025',
      result: 'Space Learning App',
      detail: 'Built Astroplay — interactive space learning app with 3D planet renders, quizzes, and data visualizations.',
      icon: '🌌',
      color: 'from-cyan-500 to-teal-600',
      ring: 'border-cyan-500',
      year: '2025',
      image: kiroImg,
    },
  ]

  const certifications = [
    {
      name: 'Advanced Data Analyst',
      issuer: 'Google — Coursera',
      date: 'Feb 06, 2025',
      color: 'from-blue-500 to-cyan-500',
      icon: '📊',
      image: advGoogleImg,
    },
    {
      name: 'Getting Started with Python',
      issuer: 'University of Michigan — Coursera',
      date: 'Feb 06, 2025',
      color: 'from-violet-500 to-indigo-600',
      icon: '🐍',
      image: pythonImg,
    },
    {
      name: 'Web Development Fundamentals',
      issuer: 'SoloLearn',
      date: '2024',
      color: 'from-orange-400 to-red-500',
      icon: '🌐',
      image: webdevImg,
    },
    {
      name: 'Build React Applications',
      issuer: 'Meta — Coursera',
      date: '2024',
      color: 'from-blue-400 to-cyan-500',
      icon: '⚛️',
      image: reactImg,
    },
    {
      name: 'Neural Networks and Deep Learning',
      issuer: 'DeepLearning.AI — Coursera',
      date: '2024',
      color: 'from-emerald-500 to-teal-600',
      icon: '🧠',
      image: neuralNetImg,
    },
    {
      name: 'IBM Cloud Computing Fundamentals',
      issuer: 'IBM — Coursera',
      date: '2024',
      color: 'from-blue-600 to-indigo-700',
      icon: '☁️',
      image: ibmCloudImg,
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-badge">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Achievements & Awards
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            International hackathons, competitions, and professional certifications
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {[
            { value: '5', label: 'Hackathons', icon: <Trophy size={20} />, color: 'from-blue-500 to-violet-600' },
            { value: 'Top 8%', label: 'IAAC Global', icon: <Medal size={20} />, color: 'from-yellow-500 to-amber-600' },
            { value: '#108', label: 'MIT² / 533 Teams', icon: <Globe size={20} />, color: 'from-red-500 to-rose-600' },
            { value: '6', label: 'Certifications', icon: <Award size={20} />, color: 'from-green-500 to-emerald-600' },
            { value: '84.6th', label: 'NSCT Percentile', icon: <ClipboardList size={20} />, color: 'from-teal-500 to-cyan-600' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-3`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hackathons Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Trophy className="text-blue-500" size={26} />
            Hackathons & Competitions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((h, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border-2 ${h.ring} hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-br ${h.color} p-5`}>
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{h.icon}</span>
                    <span className="text-white/80 text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">
                      {h.year}
                    </span>
                  </div>
                  <div className="mt-3 text-white font-bold text-sm leading-snug">
                    {h.result}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2 leading-snug">
                    {h.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {h.detail}
                  </p>

                  {/* Certificate / result image placeholder */}
                  {h.image ? (
                    <img
                      src={h.image}
                      alt={`${h.title} certificate`}
                      className="w-full aspect-[16/9] object-cover rounded-lg cursor-pointer"
                      onClick={() => setZoomedImage(h.image)}
                    />
                  ) : (
                    <ImgPlaceholder label="Certificate / Result" aspect="aspect-[16/9]" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Slider */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Star className="text-violet-500" size={26} />
            Courses & Certifications
          </h3>

          {/* Slider wrapper */}
          <div className="relative">
            {/* Left button */}
            <button
              onClick={() => scroll(-1)}
              disabled={!canLeft}
              aria-label="Previous"
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-2.5 rounded-full bg-white dark:bg-gray-800 border shadow-md transition-all duration-200
                ${canLeft
                  ? 'border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'
                  : 'border-gray-100 dark:border-gray-800 opacity-30 cursor-not-allowed'}`}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Track */}
            <div
              ref={certSliderRef}
              onScroll={updateNav}
              className="cert-slider flex gap-5 overflow-x-auto pb-3"
              style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className={`relative bg-gradient-to-br ${cert.color} p-4`}>
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full aspect-[4/3] object-cover rounded-lg cursor-pointer"
                        onClick={() => setZoomedImage(cert.image)}
                      />
                    ) : (
                      <ImgPlaceholder label="Certificate Image" aspect="aspect-[4/3]" />
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right button */}
            <button
              onClick={() => scroll(1)}
              disabled={!canRight}
              aria-label="Next"
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-2.5 rounded-full bg-white dark:bg-gray-800 border shadow-md transition-all duration-200
                ${canRight
                  ? 'border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'
                  : 'border-gray-100 dark:border-gray-800 opacity-30 cursor-not-allowed'}`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Government Standardized Test */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <ClipboardList className="text-teal-500" size={26} />
            Standardized Assessment
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Government of Pakistan</p>
                <h4 className="text-white text-xl font-bold leading-snug">
                  NSCT — National Skills Competitive Test
                </h4>
                <p className="text-white/70 text-sm mt-1">Apr 04, 2026 &nbsp;·&nbsp; Score: 59 / 100</p>
              </div>
              <div className="text-center sm:text-right flex-shrink-0">
                <div className="text-5xl font-extrabold text-white leading-none">84.6</div>
                <div className="text-white/80 text-sm font-semibold mt-1">Percentile</div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">Subject-wise breakdown</p>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                {[
                  { subject: 'Operating System', obtained: 2, total: 5 },
                  { subject: 'Software Engineering', obtained: 8, total: 10 },
                  { subject: 'Data Structures & Algorithms', obtained: 2, total: 10 },
                  { subject: 'Computer Networks & Cloud', obtained: 6, total: 10 },
                  { subject: 'Programming', obtained: 5, total: 10 },
                  { subject: 'Database', obtained: 7, total: 10 },
                  { subject: 'Problem Solving / Analytics', obtained: 13, total: 20 },
                  { subject: 'Cyber Security', obtained: 4, total: 5 },
                  { subject: 'Web Development Basics', obtained: 7, total: 10 },
                  { subject: 'AI / ML & Data Analytics', obtained: 5, total: 10 },
                ].map((row) => (
                  <div key={row.subject} className="flex items-center justify-between gap-3">
                    <span className="text-xs text-gray-600 dark:text-gray-400 truncate">{row.subject}</span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-20 bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"
                          style={{ width: `${(row.obtained / row.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 w-10 text-right">
                        {row.obtained}/{row.total}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ImageModal 
        image={zoomedImage} 
        alt="Certification/Achievement"
        isOpen={!!zoomedImage}
        onClose={() => setZoomedImage(null)}
      />
    </section>
  )
}

export default Achievements
