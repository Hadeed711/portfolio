import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'The University of Agriculture, Faisalabad',
      location: 'Faisalabad, Pakistan',
      period: 'September 2022 – May 2026',
      gpa: '3.34 / 4.00',
      badge: 'In Progress',
      badgeColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      description:
        'Specializing in Artificial Intelligence, Machine Learning, and Software Engineering. Active participant in international hackathons and AI competitions.',
      coursework: [
        'Data Structures & Algorithms',
        'Object Oriented Programming',
        'Operating Systems',
        'Database Systems',
        'Computer Networks',
        'Software Engineering',
        'Artificial Intelligence',
        'Machine Learning',
        'Web Technologies',
        'Digital Signal Processing',
      ],
    },
    {
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Punjab College Faisalabad',
      location: 'Faisalabad, Pakistan',
      period: '2020 – 2022',
      marks: '1001 / 1100',
      badge: 'Completed',
      badgeColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      description:
        'Studied Computer Science, Statistics, and Mathematics at the pre-engineering level. Secured 1001/1100 marks — under BISE Faisalabad, Punjab.',
      coursework: [
        'Computer Science',
        'Statistics',
        'Mathematics',
        'Physics',
        'English',
        'Urdu',
      ],
    },
  ]

  return (
    <section id="education" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-badge">My Background</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey in technology and computer science
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-5">
              {/* Timeline dot */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-white dark:text-gray-900 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                {index < education.length - 1 && (
                  <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-500 min-h-[2rem]" />
                )}
              </div>

              {/* Card */}
              <div data-reveal className="relative flex-1 min-w-0 bg-[#faf9f7] dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-400/80 dark:border-gray-500/70">
                <span className="v-rule" aria-hidden="true" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                  <h4 className="font-display text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                    <Calendar size={14} className="mr-1" />
                    {edu.period}
                  </div>
                </div>

                <div className="flex items-center text-gray-800 dark:text-gray-200 mb-4 gap-1 flex-wrap">
                  <MapPin size={15} className="flex-shrink-0 text-amber-700 dark:text-amber-500" />
                  <span className="font-semibold">{edu.institution}</span>
                  <span className="text-gray-400 mx-1">·</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{edu.location}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {edu.gpa && (
                    <span className="stamp text-amber-800/90 dark:text-amber-400/90">
                      <Award size={11} />
                      GPA: {edu.gpa}
                    </span>
                  )}
                  {edu.marks && (
                    <span className="stamp text-amber-800/90 dark:text-amber-400/90">
                      <Award size={11} />
                      {edu.marks} marks
                    </span>
                  )}
                  {edu.rank && (
                    <span className="stamp text-amber-800/90 dark:text-amber-400/90">
                      🏅 {edu.rank}
                    </span>
                  )}
                  <span className="stamp text-gray-600 dark:text-gray-300">
                    {edu.badge}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed">
                  {edu.description}
                </p>

                <div className="pt-4 border-t border-gray-300/90 dark:border-gray-600">
                  <h5 className="v-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-gray-600 dark:text-gray-300 mb-3 flex items-center gap-2">
                    <BookOpen size={13} />
                    Core Subjects
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/40 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
