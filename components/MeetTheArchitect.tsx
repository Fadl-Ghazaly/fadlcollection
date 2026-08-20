'use client'

import { motion } from 'framer-motion'
import Tilt from './Tilt'

export default function MeetTheArchitect() {
  return (
    <section id="about" className="relative py-24 bg-[#050811]">
      <div className="section-container">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left — Cybernetic Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-sm">
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-[#00F0FF] tracking-widest px-2">
                <span>AGENT_PROFILE // ARCHITECT</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                  ACTIVE
                </span>
              </div>

              <div className="relative p-3 rounded-2xl bg-[#0B0F19] border-2 border-[#0088FF]/40 shadow-[0_0_40px_rgba(0,136,255,0.2)]">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#00F0FF]" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#00F0FF]" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#00F0FF]" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#00F0FF]" />

                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900">
                  <img
                    src="/profile.png"
                    alt="Fadl Muhammad Ghazaly"
                    className="w-full h-full object-cover filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-80" />
                </div>

                <div className="mt-3 text-center">
                  <h4 className="text-white font-bold text-sm tracking-wide">Fadl Muhammad Ghazaly</h4>
                  <p className="text-[11px] font-mono text-zinc-400">MAHASISWA TRPL · POLITEKNIK IDN</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Bio & Stat Counters */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-[#00F0FF] mb-3">
                SYSTEM ARCHITECT &amp; DEVELOPER
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                MEET THE ARCHITECT.
              </h2>
              <blockquote className="text-zinc-300 text-sm md:text-base leading-relaxed italic border-l-2 border-[#00F0FF] pl-4 mb-6 bg-[#0B0F19]/60 p-4 rounded-r-xl">
                &ldquo;I don't just write code. I design scalable digital ecosystems, bridging robust Laravel backends with modern interactive frontends.&rdquo;
              </blockquote>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Sebagai pengembang Full-Stack, saya percaya bahwa interaktifitas adalah kunci dari pengalaman pengguna modern. Fokus utama pada TALL stack, memastikan setiap baris kode berkontribusi optimal pada sistem.
              </p>
            </div>

            {/* 3 Key Stat Counters */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#0088FF]/20">
              <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#0088FF]/30 text-center">
                <div className="text-2xl md:text-3xl font-black text-[#00F0FF]">5+</div>
                <div className="text-[10px] md:text-xs font-mono text-zinc-400 mt-1 uppercase">Deployments</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#0088FF]/30 text-center">
                <div className="text-2xl md:text-3xl font-black text-[#00F0FF]">100%</div>
                <div className="text-[10px] md:text-xs font-mono text-zinc-400 mt-1 uppercase">Clean Code</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#0088FF]/30 text-center">
                <div className="text-2xl md:text-3xl font-black text-[#00F0FF]">12+</div>
                <div className="text-[10px] md:text-xs font-mono text-zinc-400 mt-1 uppercase">Months Focus</div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
