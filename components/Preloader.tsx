'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07040D] text-white select-none pointer-events-none"
        >
          {/* Glowing Orb Animation */}
          <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            <div className="absolute inset-0 rounded-full bg-[#A855F7]/25 blur-2xl animate-pulse-glow" />
            <div className="absolute w-20 h-20 rounded-full border border-[#A855F7]/40 animate-spin-slow" />
            <div className="absolute w-12 h-12 rounded-full border border-[#D946EF]/60 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '6s' }} />
            <div className="w-6 h-6 rounded-full bg-[#D946EF] shadow-[0_0_25px_#D946EF] animate-ping" />
          </div>

          {/* Logo & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center flex flex-col items-center gap-2"
          >
            <h1 className="text-2xl md:text-3xl font-black tracking-widest text-white">
              Fadl<span className="text-[#D946EF] drop-shadow-[0_0_15px_rgba(217,70,239,0.7)]">Collection</span>
            </h1>
            <p className="text-xs font-mono text-purple-400/80 tracking-widest uppercase">
              INITIALIZING CYBERNETIC PROTOCOL...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
