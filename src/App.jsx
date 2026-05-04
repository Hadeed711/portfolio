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
import { projects as allProjects } from './data/projects'

const SITE_URL = 'https://hadeedahmad.vercel.app'
const SITE_NAME = 'Hadeed Ahmad'
const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const OG_IMAGE_ALT = 'Hadeed Ahmad — Software Engineer & Full-Stack Developer'

const BASE_DESCRIPTION =
  'Hadeed Ahmad — Full-Stack Developer, Data Scientist & ML Engineer. CS undergraduate at UAF. NASA Space Apps & IBM Watson hackathon participant. Available for opportunities.'

const BASE_KEYWORDS =
  'Hadeed Ahmad, Hadeed Ahmad portfolio, software engineer, full stack developer, backend developer, data scientist, machine learning engineer, ML engineer, React developer, Python developer, Django developer, Faisalabad Pakistan, UAF'

const setMeta = (attr, value, content) => {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${value}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, value)
    el.setAttribute('data-seo', 'true')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const setLink = (rel, href) => {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"][data-seo]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    el.setAttribute('data-seo', 'true')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const setJsonLd = (id, schema) => {
  let el = document.head.querySelector(`script[data-seo-ld="${id}"]`)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-seo', 'true')
    el.setAttribute('data-seo-ld', id)
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(schema)
}

const removeDynamicSeo = () => {
  document.querySelectorAll('[data-seo="true"]').forEach((el) => el.remove())
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
    const projectMatch = pathname.match(/^\/project\/(\d+)$/)
    const projectId = projectMatch ? parseInt(projectMatch[1], 10) : null
    const project = projectId ? allProjects.find((p) => p.id === projectId) : null

    const pageUrl = `${SITE_URL}${pathname}`

    let title, description, ogType

    if (project) {
      title = `${project.title} | Hadeed Ahmad`
      description = `${project.summary} — A project by Hadeed Ahmad, Full-Stack Developer & ML Engineer.`
      ogType = 'article'
    } else {
      title = `${SITE_NAME} | Software Engineer & Full-Stack Developer`
      description = BASE_DESCRIPTION
      ogType = 'website'
    }

    document.title = title

    // ─── Primary ───
    setMeta('name', 'description', description)
    setMeta('name', 'keywords', BASE_KEYWORDS)
    setMeta('name', 'author', SITE_NAME)
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

    // ─── Open Graph ───
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:url', pageUrl)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:locale', 'en_US')
    setMeta('property', 'og:image', OG_IMAGE)
    setMeta('property', 'og:image:secure_url', OG_IMAGE)
    setMeta('property', 'og:image:type', 'image/jpeg')
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:image:alt', OG_IMAGE_ALT)

    // ─── Twitter ───
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', OG_IMAGE)
    setMeta('name', 'twitter:image:alt', OG_IMAGE_ALT)

    // ─── Canonical ───
    setLink('canonical', pageUrl)

    // ─── JSON-LD: Homepage ───
    if (!project) {
      setJsonLd('person', {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: SITE_NAME,
        givenName: 'Hadeed',
        familyName: 'Ahmad',
        jobTitle: 'Software Engineer',
        description:
          'CS undergraduate at the University of Agriculture Faisalabad, specializing in Machine Learning, Data Science, and Full-Stack Development.',
        url: SITE_URL,
        image: OG_IMAGE,
        email: 'hadeedahmad711@gmail.com',
        telephone: '+92 324 1669274',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Faisalabad',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'The University of Agriculture, Faisalabad',
          sameAs: 'https://uaf.edu.pk',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'DataZenix',
          description: 'Remote Data Science Internship',
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Advanced Data Analytics Professional Certificate',
            credentialCategory: 'Professional Certificate',
            recognizedBy: { '@type': 'Organization', name: 'Google via Coursera' },
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Getting Started with Python',
            credentialCategory: 'Certificate',
            recognizedBy: { '@type': 'Organization', name: 'University of Michigan via Coursera' },
          },
        ],
        award: [
          'IAAC Silver Award — Top 8%',
          'MIT² Hackathon — #108 of 533',
          'NASA Space Apps Challenge 2025 Participant',
          'IBM Watson Hackathon 2025 Participant',
          'KIRO Hackathon 2025 Participant',
          'NSCT — 84.6th Percentile',
        ],
        knowsAbout: [
          'Software Engineering',
          'Full-Stack Development',
          'Machine Learning',
          'Data Science',
          'Backend Development',
          'React',
          'Django',
          'Python',
          'PostgreSQL',
          'Artificial Intelligence',
        ],
        sameAs: [
          'https://github.com/Hadeed711',
          'https://www.linkedin.com/in/hadeed-ahmad-a15919277',
        ],
      })

      setJsonLd('website', {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: `${SITE_NAME} Portfolio`,
        url: SITE_URL,
        description,
        inLanguage: 'en-US',
        author: { '@type': 'Person', '@id': `${SITE_URL}/#person` },
      })

      setJsonLd('breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
        ],
      })
    }

    // ─── JSON-LD: Project page ───
    if (project) {
      setJsonLd('software', {
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        name: project.title,
        description: project.description,
        url: pageUrl,
        codeRepository: project.github,
        programmingLanguage: project.technologies,
        author: {
          '@type': 'Person',
          '@id': `${SITE_URL}/#person`,
          name: SITE_NAME,
        },
      })

      setJsonLd('breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${SITE_URL}/#projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: pageUrl,
          },
        ],
      })
    }

    return removeDynamicSeo
  }, [pathname])

  return null
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return next
    })
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
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Education />
                <Projects />
                <Experience />
                <Achievements />
                <Contact />
              </main>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
