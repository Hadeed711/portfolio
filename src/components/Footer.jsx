import { Heart, Github, Linkedin, Mail, ArrowUp, Phone, MapPin, ExternalLink } from 'lucide-react'
import { SiFiverr } from 'react-icons/si'

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: 'https://github.com/Hadeed711',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={18} />,
      href: 'https://www.linkedin.com/in/hadeed-ahmad-a15919277',
      label: 'LinkedIn',
    },
    {
      icon: <SiFiverr size={18} />,
      href: 'https://www.fiverr.com/s/Zm7LWPR',
      label: 'Fiverr',
    },
    {
      icon: <Mail size={18} />,
      href: 'mailto:hadeedahmad711@gmail.com',
      label: 'Email',
    },
    {
      icon: <Phone size={18} />,
      href: 'tel:+923241669274',
      label: 'Phone',
    },
  ]

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Engraved double rule — bronze */}
      <div className="border-t-[3px] border-double border-amber-700/50" />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-14 grid md:grid-cols-3 gap-10 border-b border-gray-800">

          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-extrabold text-gray-100">
              Hadeed Ahmad
            </span>
            <p className="v-mono mt-2 text-[10px] uppercase tracking-[0.2em] text-amber-500/80">
              Est. 2022 · Faisalabad
            </p>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              CS Undergraduate · Full Stack Developer · Data Scientist & ML Engineer
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-500">
              <MapPin size={12} />
              Faisalabad, Pakistan
            </div>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="v-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400 font-medium">Available for opportunities</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-md border border-gray-700 bg-gray-900 text-gray-400 hover:text-amber-400 hover:border-amber-600/60 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <h4 className="v-mono text-[11px] font-semibold text-gray-200 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
              Navigation
              <span className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-amber-500 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="v-mono text-[11px] font-semibold text-gray-200 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
              Get in Touch
              <span className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hadeedahmad711@gmail.com"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 group"
              >
                <Mail size={14} className="flex-shrink-0 text-gray-600 group-hover:text-amber-400 transition-colors duration-200" />
                hadeedahmad711@gmail.com
              </a>
              <a
                href="tel:+923241669274"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 group"
              >
                <Phone size={14} className="flex-shrink-0 text-gray-600 group-hover:text-amber-400 transition-colors duration-200" />
                +92 324 1669274
              </a>
              <a
                href="https://github.com/Hadeed711"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 group"
              >
                <Github size={14} className="flex-shrink-0 text-gray-600 group-hover:text-amber-400 transition-colors duration-200" />
                github.com/Hadeed711
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
              <a
                href="https://www.fiverr.com/s/Zm7LWPR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 group"
              >
                <SiFiverr size={14} className="flex-shrink-0 text-gray-600 group-hover:text-amber-400 transition-colors duration-200" />
                Hire me on Fiverr
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            </div>

            {/* CV download — inverted letterpress on dark */}
            <a
              href="/CV_Hadeed_Ahmad.pdf"
              download
              className="btn-shimmer inline-flex items-center gap-2 mt-6 px-4 py-2.5 bg-gray-100 text-gray-900 rounded-lg text-sm font-semibold hover:bg-white transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom bar — colophon */}
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="v-mono text-[10px] uppercase tracking-[0.14em] text-gray-600 flex items-center gap-1.5">
            © 2025 Hadeed Ahmad · Built with
            <Heart size={11} className="text-amber-600" />
            React + Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="v-mono flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-gray-600 hover:text-amber-400 transition-colors duration-200"
          >
            <ArrowUp size={13} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
