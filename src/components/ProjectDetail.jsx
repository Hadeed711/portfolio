import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, Zap, Target, Award } from 'lucide-react'

const ProjectDetail = () => {
  const { id } = useParams()

  // Mock project data - in a real app, this would come from an API or state management
  const projects = {
    1: {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      longDescription: `This e-commerce platform represents a complete solution for online retail businesses. Built from the ground up with scalability and performance in mind, it handles everything from product catalog management to order processing and customer support.

      The platform features a responsive design that works seamlessly across all devices, ensuring customers can shop comfortably whether they're on desktop, tablet, or mobile. The admin dashboard provides comprehensive analytics and management tools, allowing business owners to track sales, manage inventory, and understand customer behavior.

      Security was a top priority throughout development, with implementation of industry-standard encryption, secure payment processing through Stripe, and comprehensive data protection measures.`,
      image: 'https://via.placeholder.com/800x500/3B82F6/FFFFFF?text=E-Commerce+Platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io', 'Redis', 'AWS S3', 'JWT'],
      github: 'https://github.com',
      live: 'https://demo.com',
      duration: '6 months',
      team: '4 developers',
      role: 'Full Stack Developer & Team Lead',
      client: 'RetailCorp Inc.',
      features: [
        'Real-time inventory management',
        'Secure payment processing with Stripe',
        'Advanced search and filtering',
        'Order tracking and notifications',
        'Admin dashboard with analytics',
        'Multi-vendor support',
        'Responsive design',
        'SEO optimization'
      ],
      challenges: [
        {
          title: 'Real-time Inventory Sync',
          description: 'Implemented WebSocket connections to ensure inventory updates across all user sessions instantly.',
          solution: 'Used Socket.io with Redis for scalable real-time communication.'
        },
        {
          title: 'Payment Security',
          description: 'Ensuring PCI compliance and secure payment processing.',
          solution: 'Integrated Stripe with proper tokenization and implemented additional security layers.'
        },
        {
          title: 'Performance Optimization',
          description: 'Handling large product catalogs with fast search and filtering.',
          solution: 'Implemented database indexing, caching strategies, and lazy loading.'
        }
      ],
      results: [
        { metric: 'Page Load Time', value: '< 2 seconds', improvement: '60% faster' },
        { metric: 'User Engagement', value: '85% increase', improvement: 'vs previous platform' },
        { metric: 'Conversion Rate', value: '12.5%', improvement: '3x improvement' },
        { metric: 'Mobile Traffic', value: '65%', improvement: 'mobile-first design' }
      ],
      gallery: [
        'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Homepage',
        'https://via.placeholder.com/600x400/1E40AF/FFFFFF?text=Product+Page',
        'https://via.placeholder.com/600x400/2563EB/FFFFFF?text=Shopping+Cart',
        'https://via.placeholder.com/600x400/1D4ED8/FFFFFF?text=Admin+Dashboard'
      ]
    },
    2: {
      title: 'AI Task Manager',
      description: 'Smart task management application with AI-powered prioritization and natural language processing capabilities.',
      longDescription: `The AI Task Manager revolutionizes how teams and individuals organize their work. By leveraging artificial intelligence and natural language processing, it automatically categorizes tasks, suggests priorities, and helps users focus on what matters most.

      The application learns from user behavior and preferences to provide increasingly accurate suggestions over time. It integrates with popular productivity tools and provides intelligent insights about work patterns and productivity trends.

      Built with a focus on user experience, the interface is clean and intuitive while hiding the complexity of the AI algorithms working behind the scenes.`,
      image: 'https://via.placeholder.com/800x500/8B5CF6/FFFFFF?text=AI+Task+Manager',
      technologies: ['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Python', 'TensorFlow'],
      github: 'https://github.com',
      live: 'https://demo.com',
      duration: '4 months',
      team: '3 developers',
      role: 'Frontend Lead & AI Integration',
      client: 'ProductivityPro',
      features: [
        'AI-powered task prioritization',
        'Natural language task creation',
        'Smart deadline suggestions',
        'Productivity analytics',
        'Team collaboration tools',
        'Integration with popular apps',
        'Voice task input',
        'Automated progress tracking'
      ],
      challenges: [
        {
          title: 'AI Model Integration',
          description: 'Integrating OpenAI API while maintaining fast response times.',
          solution: 'Implemented caching strategies and optimized API calls with batch processing.'
        },
        {
          title: 'Real-time Collaboration',
          description: 'Enabling seamless real-time collaboration between team members.',
          solution: 'Built custom WebSocket implementation with conflict resolution algorithms.'
        },
        {
          title: 'Data Privacy',
          description: 'Ensuring user data privacy while leveraging AI capabilities.',
          solution: 'Implemented local processing where possible and encrypted all AI API communications.'
        }
      ],
      results: [
        { metric: 'Task Completion Rate', value: '94%', improvement: '40% increase' },
        { metric: 'User Productivity', value: '35% boost', improvement: 'measured via analytics' },
        { metric: 'AI Accuracy', value: '92%', improvement: 'priority predictions' },
        { metric: 'User Retention', value: '88%', improvement: 'monthly active users' }
      ],
      gallery: [
        'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Dashboard',
        'https://via.placeholder.com/600x400/7C3AED/FFFFFF?text=AI+Suggestions',
        'https://via.placeholder.com/600x400/6D28D9/FFFFFF?text=Analytics',
        'https://via.placeholder.com/600x400/5B21B6/FFFFFF?text=Team+View'
      ]
    },
    3: {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with interactive maps and detailed forecasts.',
      longDescription: `A comprehensive weather dashboard that provides real-time weather information with stunning visualizations. The application features interactive maps, detailed forecasts, and historical weather data analysis.

      Built with modern web technologies, it offers a seamless user experience across all devices. The dashboard includes advanced features like weather alerts, location-based forecasts, and customizable widgets for different weather metrics.

      The application integrates multiple weather APIs to provide the most accurate and up-to-date information, with fallback systems to ensure reliability.`,
      image: 'https://via.placeholder.com/800x500/10B981/FFFFFF?text=Weather+Dashboard',
      technologies: ['Vue.js', 'Chart.js', 'Weather API', 'CSS3', 'JavaScript', 'Mapbox', 'PWA'],
      github: 'https://github.com',
      live: 'https://demo.com',
      duration: '3 months',
      team: '2 developers',
      role: 'Frontend Developer',
      client: 'WeatherTech Solutions',
      features: [
        'Real-time weather data',
        'Interactive weather maps',
        '7-day detailed forecasts',
        'Weather alerts and notifications',
        'Historical data analysis',
        'Location-based services',
        'Customizable dashboard',
        'Progressive Web App'
      ],
      challenges: [
        {
          title: 'Data Visualization',
          description: 'Creating intuitive and beautiful charts for complex weather data.',
          solution: 'Implemented custom Chart.js configurations with responsive design patterns.'
        },
        {
          title: 'API Rate Limiting',
          description: 'Managing multiple weather API calls efficiently.',
          solution: 'Built intelligent caching system and API request optimization.'
        }
      ],
      results: [
        { metric: 'User Engagement', value: '78%', improvement: 'daily active users' },
        { metric: 'Load Time', value: '1.2s', improvement: 'average page load' },
        { metric: 'Accuracy', value: '96%', improvement: 'forecast precision' }
      ],
      gallery: [
        'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Main+Dashboard',
        'https://via.placeholder.com/600x400/059669/FFFFFF?text=Weather+Maps',
        'https://via.placeholder.com/600x400/047857/FFFFFF?text=Forecast+View',
        'https://via.placeholder.com/600x400/065F46/FFFFFF?text=Analytics'
      ]
    },
    4: {
      title: 'Social Media API',
      description: 'RESTful API for social media platform with authentication and real-time features.',
      longDescription: `A robust and scalable RESTful API designed for social media platforms. Built with Node.js and Express, it provides comprehensive endpoints for user management, content creation, social interactions, and real-time messaging.

      The API follows REST principles and includes advanced features like rate limiting, caching, and comprehensive error handling. It's designed to handle high traffic loads with horizontal scaling capabilities.

      Security is implemented at multiple levels including JWT authentication, input validation, and protection against common vulnerabilities like SQL injection and XSS attacks.`,
      image: 'https://via.placeholder.com/800x500/F59E0B/FFFFFF?text=Social+API',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Redis', 'Socket.io', 'Docker', 'AWS'],
      github: 'https://github.com',
      live: 'https://demo.com',
      duration: '5 months',
      team: '3 developers',
      role: 'Backend Lead Developer',
      client: 'SocialConnect Inc.',
      features: [
        'User authentication & authorization',
        'Content management system',
        'Real-time messaging',
        'Social interactions (likes, comments)',
        'File upload handling',
        'Rate limiting & security',
        'Comprehensive API documentation',
        'Automated testing suite'
      ],
      challenges: [
        {
          title: 'Scalability',
          description: 'Designing API to handle millions of requests per day.',
          solution: 'Implemented microservices architecture with load balancing and caching.'
        },
        {
          title: 'Real-time Features',
          description: 'Adding real-time capabilities to RESTful architecture.',
          solution: 'Integrated WebSocket connections with proper fallback mechanisms.'
        }
      ],
      results: [
        { metric: 'Response Time', value: '< 100ms', improvement: 'average API response' },
        { metric: 'Uptime', value: '99.9%', improvement: 'service availability' },
        { metric: 'Throughput', value: '10K req/s', improvement: 'peak handling capacity' }
      ],
      gallery: [
        'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=API+Documentation',
        'https://via.placeholder.com/600x400/D97706/FFFFFF?text=Database+Schema',
        'https://via.placeholder.com/600x400/B45309/FFFFFF?text=Performance+Metrics',
        'https://via.placeholder.com/600x400/92400E/FFFFFF?text=Security+Features'
      ]
    },
    5: {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern animations and dark mode.',
      longDescription: `A modern, responsive portfolio website showcasing creative design and smooth animations. Built with React and styled with Tailwind CSS, it features a clean, professional design that adapts beautifully to all screen sizes.

      The website includes advanced features like dark mode toggle, smooth scrolling navigation, and interactive elements that enhance user engagement. Performance optimization ensures fast loading times and smooth animations.

      The design focuses on showcasing work effectively while maintaining excellent user experience and accessibility standards.`,
      image: 'https://via.placeholder.com/800x500/EF4444/FFFFFF?text=Portfolio+Site',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'JavaScript', 'CSS3'],
      github: 'https://github.com',
      live: 'https://demo.com',
      duration: '2 months',
      team: '1 developer',
      role: 'Full Stack Developer & Designer',
      client: 'Personal Project',
      features: [
        'Responsive design',
        'Dark/Light mode toggle',
        'Smooth animations',
        'Interactive elements',
        'SEO optimization',
        'Fast loading times',
        'Accessibility compliant',
        'Modern UI/UX'
      ],
      challenges: [
        {
          title: 'Performance Optimization',
          description: 'Ensuring fast load times while maintaining rich animations.',
          solution: 'Implemented lazy loading, code splitting, and optimized asset delivery.'
        },
        {
          title: 'Cross-browser Compatibility',
          description: 'Ensuring consistent experience across all browsers.',
          solution: 'Used modern CSS with proper fallbacks and extensive testing.'
        }
      ],
      results: [
        { metric: 'Performance Score', value: '98/100', improvement: 'Lighthouse score' },
        { metric: 'Load Time', value: '1.1s', improvement: 'first contentful paint' },
        { metric: 'Accessibility', value: '100/100', improvement: 'WCAG compliance' }
      ],
      gallery: [
        'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Homepage',
        'https://via.placeholder.com/600x400/DC2626/FFFFFF?text=Projects+Section',
        'https://via.placeholder.com/600x400/B91C1C/FFFFFF?text=About+Page',
        'https://via.placeholder.com/600x400/991B1B/FFFFFF?text=Contact+Form'
      ]
    },
    6: {
      title: 'Blockchain Voting',
      description: 'Decentralized voting system built on blockchain for transparent elections.',
      longDescription: `A revolutionary decentralized voting system built on blockchain technology to ensure transparent, secure, and tamper-proof elections. The system leverages smart contracts to automate the voting process while maintaining complete transparency and auditability.

      Built on Ethereum blockchain, it provides a user-friendly interface for voters while ensuring the integrity of the electoral process. The system includes features for voter registration, ballot creation, and real-time result tracking.

      Security and transparency are at the core of this system, with all votes recorded immutably on the blockchain and publicly verifiable while maintaining voter privacy.`,
      image: 'https://via.placeholder.com/800x500/6366F1/FFFFFF?text=Blockchain+Voting',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'Truffle', 'MetaMask', 'IPFS'],
      github: 'https://github.com',
      live: 'https://demo.com',
      duration: '8 months',
      team: '4 developers',
      role: 'Blockchain Developer & Smart Contract Architect',
      client: 'Democratic Tech Foundation',
      features: [
        'Decentralized voting system',
        'Smart contract automation',
        'Voter privacy protection',
        'Real-time result tracking',
        'Immutable vote records',
        'Multi-signature security',
        'IPFS integration',
        'MetaMask integration'
      ],
      challenges: [
        {
          title: 'Scalability',
          description: 'Handling large-scale elections on blockchain.',
          solution: 'Implemented layer 2 solutions and optimized smart contract gas usage.'
        },
        {
          title: 'User Experience',
          description: 'Making blockchain technology accessible to average users.',
          solution: 'Created intuitive UI with guided wallet setup and transaction flows.'
        },
        {
          title: 'Security Auditing',
          description: 'Ensuring smart contract security for critical voting operations.',
          solution: 'Conducted multiple security audits and implemented formal verification.'
        }
      ],
      results: [
        { metric: 'Transaction Cost', value: '$0.02', improvement: 'per vote cast' },
        { metric: 'Security Score', value: '100%', improvement: 'audit compliance' },
        { metric: 'Transparency', value: '100%', improvement: 'publicly verifiable' },
        { metric: 'Voter Turnout', value: '89%', improvement: 'in pilot elections' }
      ],
      gallery: [
        'https://via.placeholder.com/600x400/6366F1/FFFFFF?text=Voting+Interface',
        'https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Smart+Contracts',
        'https://via.placeholder.com/600x400/4338CA/FFFFFF?text=Results+Dashboard',
        'https://via.placeholder.com/600x400/3730A3/FFFFFF?text=Blockchain+Explorer'
      ]
    }
  }

  const project = projects[id]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link 
            to="/"
            className="text-primary-500 hover:text-primary-600 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              
              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Calendar size={16} />
                  <span className="text-sm">{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Users size={16} />
                  <span className="text-sm">{project.team}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <a
                  href={project.live}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Project Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Zap className="mr-2 text-primary-500" size={24} />
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="mr-2 text-accent-500" size={24} />
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {challenge.description}
                    </p>
                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg p-4">
                      <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                        Solution: 
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 ml-1">
                        {challenge.solution}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="mr-2 text-green-500" size={24} />
                Results & Impact
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      {result.metric}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      {result.improvement}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Project Info
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Role:</span>
                  <span className="ml-2 text-gray-900 dark:text-white font-medium">
                    {project.role}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Client:</span>
                  <span className="ml-2 text-gray-900 dark:text-white font-medium">
                    {project.client}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                  <span className="ml-2 text-gray-900 dark:text-white font-medium">
                    {project.duration}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Team Size:</span>
                  <span className="ml-2 text-gray-900 dark:text-white font-medium">
                    {project.team}
                  </span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Code className="mr-2 text-primary-500" size={20} />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Gallery
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {project.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="flex space-x-4">
            <a
              href={project.github}
              className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
            <a
              href={project.live}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail