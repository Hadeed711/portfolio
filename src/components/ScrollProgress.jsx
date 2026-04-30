import { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      const clampedProgress = Math.min(Math.max(currentProgress, 0), 100)
      
      setScrollProgress(clampedProgress)
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial calculation
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="h-[3px] bg-gray-200/20 dark:bg-gray-800/20">
        <div
          className="h-full transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4)',
            boxShadow: '0 0 8px rgba(139, 92, 246, 0.5)',
          }}
        />
      </div>
    </div>
  )
}

export default ScrollProgress