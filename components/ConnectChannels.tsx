'use client'

import { motion } from 'framer-motion'
import Tilt from './Tilt'

const channels = [
  {
    title: 'GITHUB',
    desc: 'Explore my open-source repositories, Laravel packages, and full-stack projects.',
    icon: 'fab fa-github',
    url: 'https://github.com/Fadl-Ghazaly',
  },
  {
    title: 'INSTAGRAM',
    desc: 'Behind the scenes, tech snapshots, and daily student developer moments.',
    icon: 'fab fa-instagram',
    url: 'https://www.instagram.com/fadlcollection',
  },
  {
    title: 'LINKEDIN',
    desc: 'Professional network, career milestones, and industry connections.',
    icon: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/in/fadl-collection-82619a426',
  },
]

export default function ConnectChannels() {
  return (
    <section className="relative py-24 bg-[#07040D]">
      <div className="section-container">
        
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-3">
            SOCIAL MATRIX &amp; NETWORKS
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            CONNECT CHANNELS.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Tilt maxTilt={8} className="h-full">
                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl bg-[#0F091A] border border-purple-500/30 p-8 flex flex-col justify-between h-full group hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 block"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-purple-950/50 border border-purple-500/50 flex items-center justify-center text-2xl text-purple-300 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                      <i className={ch.icon} />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors">
                      {ch.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-purple-400 font-mono">
                    <span>VISIT CHANNEL</span>
                    <i className="fas fa-arrow-right" />
                  </div>
                </a>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-600 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
            <a
              href="https://saweria.co/fadlcollection"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#07040D] text-white hover:bg-[#0F091A] transition-colors"
            >
              <span className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <i className="fas fa-coffee" />
              </span>
              <div className="text-left">
                <div className="text-xs font-mono text-purple-400">SATU GELAS KOPI</div>
                <div className="text-sm font-bold">Support My Open Source Work</div>
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
