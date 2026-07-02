import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'DataZenix',
      location: 'Remote',
      period: '1 Sep – 30 Sep 2025',
      type: 'Internship',
      typeColor: 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300',
      description:
        'Built and deployed machine learning models as part of a data science internship. Achieved 92% model accuracy — a 25% improvement over the baseline — across multiple real-world prediction tasks.',
      achievements: [
        'Improved prediction accuracy by 25% over baseline, achieving 92% accuracy',
        'Iris Flower Classification — multi-class classification model',
        'Unemployment Analysis — trend analysis & visualization',
        'Car Price Prediction — regression model with feature engineering',
        'Email Spam Detection — NLP-based binary classification',
        'Sales Prediction — time-series & regression analysis',
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    },
    {
      title: 'Admission Help Desk Officer',
      company: 'ITRCDB, University of Agriculture',
      location: 'Faisalabad, Pakistan',
      period: 'July – October 2023 & 2024',
      type: 'Part-time',
      typeColor: 'from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300',
      description:
        'Provided admission support and administrative assistance during two consecutive university admission cycles, managing applicant inquiries and creating visual documentation.',
      achievements: [
        'Maintained detailed records of applicant inquiries and resolutions',
        'Resolved complaints of new applicants to improve help desk efficiency',
        'Created custom layouts, documents, and visual designs for internal communications',
        'Contributed to smoother admission workflows for two academic years',
      ],
      technologies: ['MS Office', 'Adobe Photoshop', 'Adobe Illustrator', 'Documentation'],
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-badge">Career</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional roles and internships
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-4 sm:gap-5">
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-gray-400/70 to-transparent dark:from-gray-500/70" />
              )}

              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="text-white dark:text-gray-900" size={20} />
              </div>

              <div className="fx-card relative flex-1 bg-[#faf9f7] dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-lg border border-gray-400/80 dark:border-gray-500/70">
                <span className="v-rule" aria-hidden="true" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                  <div>
                    <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 font-semibold italic">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={13} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MapPin size={13} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <span className="stamp stamp--tilt text-amber-800/90 dark:text-amber-400/90 mb-4">
                  {exp.type}
                </span>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h5 className="v-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-gray-600 dark:text-gray-300 mb-2.5 flex items-center">
                    <TrendingUp size={13} className="mr-1.5 text-amber-700 dark:text-amber-500" />
                    Key Highlights
                  </h5>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                        <span className="w-1 h-1 bg-amber-700 dark:bg-amber-500 rotate-45 mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-300/90 dark:border-gray-600">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/40 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
