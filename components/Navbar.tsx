'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#services', label: 'SERVICES' },
  { href: '#projects', label: 'PROJECT' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#about', label: 'ABOUT' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#07040D]/95 backdrop-blur-md border-b border-purple-500/30 shadow-[0_4px_30px_rgba(168,85,247,0.15)]"
    >
      <div className="section-container flex items-center justify-between h-20">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/50 flex items-center justify-center text-purple-400 font-black text-sm shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            FC
          </div>
          <span className="font-black text-lg tracking-wider text-white">
            Fadl<span className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">Collection</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono tracking-widest text-zinc-400 hover:text-purple-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/6285730182757"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:opacity-90 transition-opacity"
          >
            CONSULTASI GRATIS
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-purple-400 p-2"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#07040D]/95 backdrop-blur-lg border-b border-purple-500/30 px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-widest text-zinc-300 hover:text-purple-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6285730182757"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-center text-xs font-bold uppercase tracking-wider"
            >
              CONSULTASI GRATIS
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
