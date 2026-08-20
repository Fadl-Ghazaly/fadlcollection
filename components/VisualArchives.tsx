'use client'

import { motion } from 'framer-motion'
import Tilt from './Tilt'

const archives = [
  {
    title: 'STREET VENDOR SCAN QR',
    category: 'MENUQU DEPLOYMENT',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    title: 'CYBER CAR SIMULATION',
    category: 'THREE.JS / EXPERIMENT',
    span: 'col-span-1',
  },
  {
    title: 'CAMPUS CODE SESSION',
    category: 'POLITEKNIK IDN',
    span: 'col-span-1',
  },
  {
    title: 'CULINARY E-COMMERCE',
    category: 'SYSTEM ARCHITECTURE',
    span: 'col-span-1 md:col-span-2',
  },
]

export default function VisualArchives() {
  return (
    <section id="gallery" className="relative py-24 bg-[#050811]">
      <div className="section-container">
        
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] mb-3">
            MOMENTS, PROJECTS &amp; TECHNICAL MILESTONES
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            VISUAL ARCHIVES.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0088FF] mx-auto rounded-full mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {archives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={item.span || 'col-span-1'}
            >
              <Tilt maxTilt={6} className="h-full">
                <div className="relative rounded-2xl overflow-hidden bg-[#0B0F19] border border-[#0088FF]/30 group h-72 flex flex-col justify-end p-6 shadow-[0_0_20px_rgba(0,136,255,0.1)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/40 to-transparent z-10" />
                  
                  <div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-500 opacity-40">
                    <div className="w-full h-full flex items-center justify-center text-zinc-700 font-mono text-xs">
                      [ARCHIVE_IMAGE_{i + 1}]
                    </div>
                  </div>

                  <div className="relative z-20">
                    <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
