import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, Github, Linkedin, MapPin, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import { SiFiverr } from 'react-icons/si'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'hadeedahmad711@gmail.com',
      href: 'mailto:hadeedahmad711@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone size={22} />,
      label: 'Phone',
      value: '+92 324 1669274',
      href: 'tel:+923241669274',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Github size={22} />,
      label: 'GitHub',
      value: 'github.com/Hadeed711',
      href: 'https://github.com/Hadeed711',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: <Linkedin size={22} />,
      label: 'LinkedIn',
      value: 'hadeed-ahmad-a15919277',
      href: 'https://www.linkedin.com/in/hadeed-ahmad-a15919277',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <SiFiverr size={22} />,
      label: 'Fiverr',
      value: 'Hire me on Fiverr',
      href: 'https://www.fiverr.com/s/Zm7LWPR',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Faisalabad, Pakistan',
      href: null,
      color: 'from-violet-500 to-purple-600',
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-badge">Let's Talk</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Open to internships, collaborations, AI projects, and freelance opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a Computer Science undergraduate passionate about Machine Learning,
                Data Science, and Full-Stack Development. I'm always open to exploring
                new opportunities — whether it's a research project, internship, freelance
                work, or hackathon collaboration.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) =>
                info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="fx-card flex items-center gap-4 p-4 bg-[#faf9f7] dark:bg-gray-800 rounded-lg shadow-md border border-gray-400/70 dark:border-gray-500/70 group"
                  >
                    <div className="p-3 rounded-md bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="v-mono text-[9px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-[0.18em]">
                        {info.label}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors duration-300 text-sm break-all">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="fx-card flex items-center gap-4 p-4 bg-[#faf9f7] dark:bg-gray-800 rounded-lg shadow-md border border-gray-400/70 dark:border-gray-500/70"
                  >
                    <div className="p-3 rounded-md bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900">
                      {info.icon}
                    </div>
                    <div>
                      <div className="v-mono text-[9px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-[0.18em]">
                        {info.label}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {info.value}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-green-700 dark:text-green-300">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400">
                Open to internships, ML research roles, freelance projects, and hackathon
                collaborations. Graduating May 2026.
              </p>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div data-reveal className="relative bg-[#faf9f7] dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-xl border border-gray-400/80 dark:border-gray-500/70">
            <span className="v-rule" aria-hidden="true" />
            <h3 className="font-display text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Send Me a Message
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              Fill in the form below and it'll land straight in my inbox. I typically respond
              within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div>
                <label htmlFor="name" className="v-mono text-[9px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-1.5 w-full px-4 py-3 bg-white/70 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-amber-700 dark:focus:border-amber-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="v-mono text-[9px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-1.5 w-full px-4 py-3 bg-white/70 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-amber-700 dark:focus:border-amber-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="v-mono text-[9px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about the opportunity or project..."
                  className="mt-1.5 w-full px-4 py-3 bg-white/70 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-amber-700 dark:focus:border-amber-500 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 dark:bg-gray-100 text-gray-50 dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-white shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                  <CheckCircle2 size={16} />
                  Message sent — thanks for reaching out, I'll reply soon.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-medium">
                  <XCircle size={16} />
                  Something went wrong — please email me directly at hadeedahmad711@gmail.com.
                </p>
              )}
            </form>

            <div className="border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/40 rounded-lg p-5 mt-4">
              <h5 className="v-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-gray-600 dark:text-gray-300 mb-3">
                What I'm Looking For
              </h5>
              <ul className="space-y-2">
                {[
                  'Data Science / ML internships',
                  'Backend development roles (Django, FastAPI)',
                  'Research collaborations in AI',
                  'Hackathon teammates',
                  'Freelance full-stack projects',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-1 h-1 bg-amber-700 dark:bg-amber-500 rotate-45 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center mt-12 sm:mt-16">
          <div data-reveal className="relative bg-[#faf9f7] dark:bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-400/80 dark:border-gray-500/70 shadow-lg">
            <span className="v-rule" aria-hidden="true" />
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to Build Something Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
              Whether it's an AI project, a web application, or an exciting hackathon — I'm in.
            </p>
            <a
              href="mailto:hadeedahmad711@gmail.com?subject=Let's%20Build%20Something"
              className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-100 text-gray-50 dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-white shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Send size={18} />
              Let's Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
