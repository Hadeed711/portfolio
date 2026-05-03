import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect, useLayoutEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetailPage'
import BackgroundPattern from './components/BackgroundPattern'
import ScrollProgress from './components/ScrollProgress'
import profileImage from './assets/profile.jpg'

const siteName = 'Hadeed Ahmad'
const siteDescription =
  'Hadeed Ahmad is a software engineer, full-stack developer, backend developer, data scientist, and ML engineer building modern web apps, AI projects, and portfolio-ready solutions.'
const siteKeywords = [
  'Hadeed Ahmad',
  'Hadeed Ahmad portfolio',
  'software engineer',
  'full stack developer',
  'backend developer',
  'data scientist',
  'machine learning engineer',
  'ML engineer',
  'React developer',
  'Python developer',
  'Faisalabad Pakistan',
].join(', ')

const seoSelector = '[data-seo-managed="true"]'

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

const setJsonLd = (id, value) => {
  let element = document.head.querySelector(`script[data-seo-jsonld="${id}"]`)
  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.setAttribute('data-seo-managed', 'true')
    element.setAttribute('data-seo-jsonld', id)
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(value)
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

const SeoHead = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const isProjectPage = pathname.startsWith('/project/')
    const pageTitle = isProjectPage
      ? `${siteName} | Featured Project Case Study`
      : `${siteName} | Software Engineer & Full-Stack Developer`
    const pageDescription = isProjectPage
      ? 'Explore Hadeed Ahmad\'s selected project work, including full-stack, AI, and software engineering case studies.'
      : siteDescription
    const hasHttpOrigin = window.location.protocol === 'http:' || window.location.protocol === 'https:'
    const canonicalHref = hasHttpOrigin ? `${window.location.origin}${pathname}` : null
    const imageHref = hasHttpOrigin ? `${window.location.origin}${profileImage}` : profileImage

    document.title = pageTitle

    setMetaTag('name', 'description', pageDescription)
    setMetaTag('name', 'keywords', siteKeywords)
    setMetaTag('name', 'author', siteName)
    setMetaTag('name', 'robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1')
    setMetaTag('name', 'theme-color', '#0f172a')
    setMetaTag('property', 'og:title', pageTitle)
    setMetaTag('property', 'og:description', pageDescription)
    setMetaTag('property', 'og:type', isProjectPage ? 'article' : 'website')
    setMetaTag('property', 'og:image', imageHref)
    setMetaTag('property', 'og:image:alt', `${siteName} portfolio portrait`)
    setMetaTag('property', 'og:site_name', siteName)
    setMetaTag('property', 'og:locale', 'en_US')
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', pageTitle)
    setMetaTag('name', 'twitter:description', pageDescription)
    setMetaTag('name', 'twitter:image', imageHref)
    setLinkTag('canonical', canonicalHref)

    if (!isProjectPage) {
      setJsonLd('person', {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: siteName,
        jobTitle: 'Software Engineer',
        url: canonicalHref || '/',
        image: imageHref,
        email: 'hadeedahmad711@gmail.com',
        telephone: '+92 324 1669274',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Faisalabad',
          addressCountry: 'PK',
        },
        knowsAbout: [
          'Software Engineering',
          'Full-Stack Development',
          'Machine Learning',
          'Data Science',
          'Backend Development',
        ],
        sameAs: [
          'https://github.com/Hadeed711',
          'https://www.linkedin.com/in/hadeed-ahmad-a15919277',
        ],
      })

      setJsonLd('website', {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: `${siteName} Portfolio`,
        url: canonicalHref || '/',
        description: pageDescription,
        inLanguage: 'en-US',
        author: {
          '@type': 'Person',
          name: siteName,
        },
      })
    }

    return () => {
      document.querySelectorAll(seoSelector).forEach((element) => element.remove())
    }
  }, [pathname])

  return null
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <Router>
      <ScrollToTop />
      <SeoHead />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <BackgroundPattern />
        <ScrollProgress />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Education />
              <Projects />
              <Experience />
              <Achievements />
              <Contact />
            </main>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App