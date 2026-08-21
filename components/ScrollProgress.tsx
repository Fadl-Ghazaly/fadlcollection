'use client'

import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0
      setScrollWidth(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-600 z-[999] transition-all duration-75 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
      style={{ width: `${scrollWidth}%` }}
    />
  )
}
