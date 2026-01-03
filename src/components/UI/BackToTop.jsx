'use client'

import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-lg border border-[#18f2e5] bg-secondary text-[#18f2e5] transition-all duration-300 hover:-translate-y-1 hover:bg-[#18f2e5] hover:text-[#0a192f] cursor-pointer ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'
      }`}
      aria-label="Back to Top">
      <ArrowUp className="h-6 w-6" />
    </button>
  )
}

export default BackToTop
