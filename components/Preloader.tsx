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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050811] text-white select-none pointer-events-none"
        >
          {/* Glowing Orb Animation */}
          <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            <div className="absolute inset-0 rounded-full bg-[#00F0FF]/20 blur-2xl animate-pulse-glow" />
            <div className="absolute w-20 h-20 rounded-full border border-[#00F0FF]/40 animate-spin-slow" />
            <div className="absolute w-12 h-12 rounded-full border border-[#0088FF]/60 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '6s' }} />
            <div className="w-6 h-6 rounded-full bg-[#00F0FF] shadow-[0_0_20px_#00F0FF] animate-ping" />
          </div>

          {/* Logo & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center flex flex-col items-center gap-2"
          >
            <h1 className="text-2xl md:text-3xl font-black tracking-widest text-white">
              Fadl<span className="text-[#00F0FF] drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">Collection</span>
            </h1>
            <p className="text-xs font-mono text-[#0088FF] tracking-widest uppercase">
              INITIALIZING CYBERNETIC PROTOCOL...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
