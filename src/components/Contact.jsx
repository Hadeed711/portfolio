import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react'

const Contact = () => {
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
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Faisalabad, Pakistan',
      href: null,
      color: 'from-violet-500 to-purple-600',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 group hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                        {info.label}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
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

          {/* Right Column — Email CTA */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Send Me a Message
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
              Click below to open your email client with a pre-filled message. I typically
              respond within 24 hours.
            </p>

            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30">
                <Mail className="text-white" size={32} />
              </div>

              <a
                href="mailto:hadeedahmad711@gmail.com?subject=Opportunity%20for%20Hadeed%20Ahmad&body=Hi%20Hadeed%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0A"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-violet-700 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Send size={18} />
                Send an Email
              </a>

              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                or copy: <span className="text-blue-600 dark:text-blue-400 font-medium">hadeedahmad711@gmail.com</span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-5 mt-4">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
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
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-indigo-600/10 dark:from-blue-500/10 dark:via-violet-500/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to Build Something Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
              Whether it's an AI project, a web application, or an exciting hackathon — I'm in.
            </p>
            <a
              href="mailto:hadeedahmad711@gmail.com?subject=Let's%20Build%20Something"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-violet-700 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
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
