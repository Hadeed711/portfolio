import { useRef, useState, useEffect } from 'react'
import { Trophy, Medal, Star, Award, Globe, ClipboardList, Camera, ChevronLeft, ChevronRight } from 'lucide-react'
import ImageModal from './ImageModal'
import iaacImg from '../assets/iaac_img.png'
import mitImg from '../assets/mit_img.jfif'
import nasaImg from '../assets/nasa_img.png'
import ibmHackImg from '../assets/ibm_hack.png'
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
      year: '2024',
      image: iaacImg,
    },
    {
      title: 'MIT² — Massachusetts Institute of Technology',
      result: '#108 out of 533 Teams Worldwide',
      detail: 'Achieved 550/900 points and ranked 108 among 533 competing teams globally.',
      icon: '🏛️',
      year: '2024',
      image: mitImg,
    },
    {
      title: 'NASA Space App Challenge 2025',
      result: 'International Participant',
      detail: 'Built ExoLume — exoplanet detection app using ML with NASA datasets. Presented to U.S.-based judges.',
      icon: '🚀',
      year: '2025',
      image: nasaImg,
    },
    {
      title: 'IBM Watson Urban AI Hackathon 2025',
      result: 'AI Urban Planning Solution',
      detail: 'AI-powered city planning box detecting urban hotspots within 10 km² with budget-aware suggestions.',
      icon: '🏙️',
      year: '2025',
      image: ibmHackImg,
    },
    {
      title: 'Code with KIRO Hackathon 2025',
      result: 'Space Learning App',
      detail: 'Built Astroplay — interactive space learning app with 3D planet renders, quizzes, and data visualizations.',
      icon: '🌌',
      year: '2025',
      image: kiroImg,
    },
  ]

  const certifications = [
    {
      name: 'Advanced Data Analyst',
      issuer: 'Google — Coursera',
      date: 'Feb 06, 2025',
      image: advGoogleImg,
    },
    {
      name: 'Getting Started with Python',
      issuer: 'University of Michigan — Coursera',
      date: 'Feb 06, 2025',
      image: pythonImg,
    },
    {
      name: 'Web Development Fundamentals',
      issuer: 'SoloLearn',
      date: '2024',
      image: webdevImg,
    },
    {
      name: 'Build React Applications',
      issuer: 'Meta — Coursera',
      date: '2024',
      image: reactImg,
    },
    {
      name: 'Neural Networks and Deep Learning',
      issuer: 'DeepLearning.AI — Coursera',
      date: '2024',
      image: neuralNetImg,
    },
    {
      name: 'IBM Cloud Computing Fundamentals',
      issuer: 'IBM — Coursera',
      date: '2024',
      image: ibmCloudImg,
    },
  ]

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-white dark:bg-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-badge">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Achievements & Awards
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            International hackathons, competitions, and professional certifications
          </p>
        </div>

        {/* Stats Ledger */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 sm:mb-16">
          {[
            { value: '5', label: 'Hackathons', icon: <Trophy size={18} /> },
            { value: 'Top 8%', label: 'IAAC Global', icon: <Medal size={18} /> },
            { value: '#108', label: 'MIT² / 533 Teams', icon: <Globe size={18} /> },
            { value: '6', label: 'Certifications', icon: <Award size={18} /> },
            { value: '84.6th', label: 'NSCT Percentile', icon: <ClipboardList size={18} /> },
          ].map((stat) => (
            <div
              key={stat.label}
              className="fx-card relative bg-[#faf9f7] dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-400/70 dark:border-gray-500/70 text-center"
            >
              <span className="v-rule" aria-hidden="true" />
              <div className="flex justify-center text-amber-700/90 dark:text-amber-400/90 mb-2.5">
                {stat.icon}
              </div>
              <div className="font-display text-2xl font-extrabold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="v-mono text-[9px] uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400 mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hackathons Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="flex items-center gap-3 mb-8">
            <Trophy className="text-amber-700 dark:text-amber-500 flex-shrink-0" size={24} />
            <span className="font-display text-2xl font-bold text-gray-900 dark:text-white">
              Hackathons & Competitions
            </span>
            <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-gray-400/70 to-transparent dark:from-gray-600" />
          </h3>
          <div
            className="cert-slider flex gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {hackathons.map((h, index) => (
              <div
                key={index}
                style={{ scrollSnapAlign: 'start' }}
                className="fx-card group relative flex-shrink-0 w-[82%] sm:w-80 md:w-auto bg-[#faf9f7] dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-400/80 dark:border-gray-500/70"
              >
                <span className="v-rule" aria-hidden="true" />

                <div className="p-5">
                  {/* Plate header — emblem + year stamp */}
                  <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-gray-300/90 dark:border-gray-600">
                    <span className="text-xl select-none">{h.icon}</span>
                    <span className="stamp stamp--tilt text-amber-800/90 dark:text-amber-400/90">
                      {h.year}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-gray-900 dark:text-white text-sm mb-1.5 leading-snug">
                    {h.title}
                  </h4>
                  <p className="text-xs italic text-gray-700 dark:text-gray-300 mb-2">
                    {h.result}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {h.detail}
                  </p>

                  {/* Matted certificate photograph */}
                  {h.image ? (
                    <div
                      className="rounded-md overflow-hidden border border-gray-400/70 dark:border-gray-500/70 cursor-pointer"
                      onClick={() => setZoomedImage(h.image)}
                    >
                      <img
                        src={h.image}
                        alt={`${h.title} certificate`}
                        className="v-photo w-full aspect-[16/9] object-cover"
                      />
                    </div>
                  ) : (
                    <ImgPlaceholder label="Certificate / Result" aspect="aspect-[16/9]" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Slider */}
        <div data-reveal className="mb-12 sm:mb-16">
          <h3 className="flex items-center gap-3 mb-8">
            <Star className="text-amber-700 dark:text-amber-500 flex-shrink-0" size={24} />
            <span className="font-display text-2xl font-bold text-gray-900 dark:text-white">
              Courses & Certifications
            </span>
            <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-gray-400/70 to-transparent dark:from-gray-600" />
          </h3>

          {/* Slider wrapper */}
          <div className="relative">
            {/* Left button */}
            <button
              onClick={() => scroll(-1)}
              disabled={!canLeft}
              aria-label="Previous"
              className={`hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-2.5 rounded-full bg-white dark:bg-gray-800 border shadow-md transition-all duration-200
                ${canLeft
                  ? 'border-gray-300 dark:border-gray-600 hover:border-amber-700 dark:hover:border-amber-500 hover:text-amber-800 dark:hover:text-amber-400 cursor-pointer'
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
                  className="group relative flex-shrink-0 w-64 bg-[#faf9f7] dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-400/80 dark:border-gray-500/70 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <span className="v-rule" aria-hidden="true" />

                  {/* Matted certificate */}
                  <div className="p-4 pb-0">
                    {cert.image ? (
                      <div
                        className="rounded-md overflow-hidden border border-gray-400/70 dark:border-gray-500/70 cursor-pointer"
                        onClick={() => setZoomedImage(cert.image)}
                      >
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="v-photo w-full aspect-[4/3] object-cover"
                        />
                      </div>
                    ) : (
                      <ImgPlaceholder label="Certificate Image" aspect="aspect-[4/3]" />
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-display font-bold text-gray-900 dark:text-white text-sm mb-1.5 leading-snug">
                      {cert.name}
                    </h4>
                    <p className="v-mono text-[9px] uppercase tracking-[0.14em] text-amber-800/90 dark:text-amber-400/90 mb-1">
                      {cert.issuer}
                    </p>
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
              className={`hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-2.5 rounded-full bg-white dark:bg-gray-800 border shadow-md transition-all duration-200
                ${canRight
                  ? 'border-gray-300 dark:border-gray-600 hover:border-amber-700 dark:hover:border-amber-500 hover:text-amber-800 dark:hover:text-amber-400 cursor-pointer'
                  : 'border-gray-100 dark:border-gray-800 opacity-30 cursor-not-allowed'}`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Government Standardized Test */}
        <div>
          <h3 className="flex items-center gap-3 mb-8">
            <ClipboardList className="text-amber-700 dark:text-amber-500 flex-shrink-0" size={24} />
            <span className="font-display text-2xl font-bold text-gray-900 dark:text-white">
              Standardized Assessment
            </span>
            <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-gray-400/70 to-transparent dark:from-gray-600" />
          </h3>
          <div data-reveal className="relative bg-[#faf9f7] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-400/80 dark:border-gray-500/70">
            <div className="bg-gray-900 dark:bg-gray-950 border-b-[3px] border-double border-amber-700/60 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="min-w-0">
                <p className="v-mono text-amber-400/80 text-[10px] font-semibold uppercase tracking-[0.22em] mb-1.5">Government of Pakistan</p>
                <h4 className="font-display text-white text-lg sm:text-xl font-bold leading-snug">
                  NSCT — National Skills Competitive Test
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">Apr 04, 2026 &nbsp;·&nbsp; Score: 59 / 100</p>
              </div>
              <div className="flex items-end gap-2 sm:flex-col sm:items-end sm:text-right flex-shrink-0">
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-amber-400 leading-none">84.6</div>
                <div className="v-mono text-gray-400 text-[10px] uppercase tracking-[0.18em] font-semibold sm:mt-1.5">Percentile</div>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <p className="v-mono text-[10px] uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400 font-medium mb-4">Subject-wise breakdown</p>
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
                    <span className="text-xs text-gray-600 dark:text-gray-400 truncate min-w-0 flex-1">{row.subject}</span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-14 sm:w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-amber-700 to-amber-500"
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
