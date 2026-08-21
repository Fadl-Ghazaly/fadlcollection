'use client'

import { motion } from 'framer-motion'
import Tilt from './Tilt'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Pill tags */}
            <div className="flex flex-wrap gap-2">
              {['TALL STACK', 'LARAVEL 11', 'NEXT.JS 14', 'FULL-STACK'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/40 text-purple-300 text-xs font-mono tracking-wider shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
              WELCOME TO MY
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                PORTFOLIO
              </span>
            </h1>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">
              CRAFTING SCALABLE &amp; HIGH-PERFORMANCE DIGITAL EXPERIENCES. Mahasiswa Rekayasa Perangkat Lunak (TRPL) di Politeknik IDN, berpengalaman membangun arsitektur Laravel yang tangguh dan antarmuka Next.js yang interaktif.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>EXPLORE WORKS</span>
                <i className="fas fa-arrow-right text-xs" />
              </a>
              <a
                href="https://wa.me/6285730182757"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#0F091A] border border-purple-500/50 text-white font-bold text-xs uppercase tracking-wider hover:bg-purple-950/40 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-purple-400" />
                <span>CONTACT ME</span>
              </a>
            </div>

          </motion.div>

          {/* Right: HUD Profile Picture Frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-sm">
              {/* HUD Header tag */}
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-purple-400 tracking-widest px-2">
                <span>AGENT_PROFILE // ####</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  SECURE
                </span>
              </div>

              {/* Cyber frame */}
              <Tilt maxTilt={8} className="w-full">
                <div className="relative p-3 rounded-2xl bg-[#0F091A] border-2 border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.25)]">
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-500" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-purple-500" />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-purple-500" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500" />

                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900">
                    <img
                      src="/profile.png"
                      alt="Fadl Muhammad Ghazaly"
                      className="w-full h-full object-cover filter contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07040D] via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="mt-3 text-center">
                    <h3 className="text-white font-bold text-sm tracking-wide">Fadl Muhammad Ghazaly</h3>
                    <p className="text-[11px] font-mono text-purple-300">FULL-STACK DEVELOPER</p>
                  </div>
                </div>
              </Tilt>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
