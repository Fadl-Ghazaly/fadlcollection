'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tilt from './Tilt'

const projectsData = [
  {
    id: 'menuku',
    title: 'MenuKu Resto Platform',
    category: 'FLUTTER / LARAVEL API STACK',
    icon: 'fas fa-utensils',
    description: 'Platform restoran digital terpadu terintegrasi Flutter mobile app & dashboard web merchant Laravel dengan gateway pembayaran Midtrans (QRIS/E-Wallet).',
    url: 'https://menuku.fadlcollection.my.id/',
    tech: ['Flutter', 'Laravel 11', 'MySQL', 'Midtrans API', 'Tailwind CSS'],
  },
  {
    id: 'tahfizh',
    title: 'Tahfizh Pesantren App',
    category: 'LARAVEL / DATABASE SYSTEM',
    icon: 'fas fa-book-open',
    description: 'Sistem manajemen hafalan Al-Qur\'an digital pesantren dengan laporan PDF otomatis dan analitik Chart.js untuk wali santri.',
    tech: ['Laravel 11', 'MySQL', 'Bootstrap', 'Chart.js', 'PDF Export'],
  },
  {
    id: 'ecommerce',
    title: 'Next-Gen E-Commerce & IoT Solution',
    category: 'UPCOMING PROJECT',
    icon: 'fas fa-store',
    status: 'Coming Soon',
    description: 'Solusi e-commerce mutakhir yang diintegrasikan dengan perangkat IoT untuk otomasi manajemen inventori dan pemesanan cerdas.',
    tech: ['Next.js 14', 'Laravel 11', 'IoT Hardware', 'MySQL'],
  },
]

const certificatesData = [
  {
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    id: 'JLX15VR45Z72',
    icon: 'fas fa-robot',
    url: 'https://www.dicoding.com/certificates/JLX15VR45Z72',
  },
  {
    title: 'Basic Web Programming',
    issuer: 'Dicoding Indonesia',
    id: 'DICODING-WEB-01',
    icon: 'fas fa-code',
    url: 'https://www.dicoding.com',
  },
  {
    title: 'CS101: Introduction to Programming I',
    issuer: 'Saylor Academy',
    id: '5734517381FG',
    icon: 'fas fa-graduation-cap',
    url: 'https://www.saylor.org',
  },
  {
    title: 'CS105: Introduction to Python',
    issuer: 'Saylor Academy',
    id: '4674524998FG',
    icon: 'fab fa-python',
    url: 'https://www.saylor.org',
  },
  {
    title: 'CS102: Introduction to Computer Science II',
    issuer: 'Saylor Academy',
    id: '2657446369FG',
    icon: 'fas fa-laptop-code',
    url: 'https://www.saylor.org',
  },
]

const techStackData = [
  {
    category: 'FRONTEND DESIGNER',
    skills: [
      { name: 'Next.js 14', icon: 'fas fa-bolt', level: 'Advanced' },
      { name: 'React.js', icon: 'fab fa-react', level: 'Advanced' },
      { name: 'Tailwind CSS', icon: 'fas fa-wind', level: 'Expert' },
      { name: 'JavaScript (ES6+)', icon: 'fab fa-js', level: 'Expert' },
      { name: 'HTML5 / CSS3', icon: 'fab fa-html5', level: 'Expert' },
      { name: 'Responsive UI', icon: 'fas fa-mobile-alt', level: 'Expert' },
    ],
  },
  {
    category: 'BACKEND ARCHITECTURE',
    skills: [
      { name: 'Laravel 11', icon: 'fab fa-laravel', level: 'Expert' },
      { name: 'PHP 8.x', icon: 'fab fa-php', level: 'Expert' },
      { name: 'RESTful API', icon: 'fas fa-network-wired', level: 'Expert' },
      { name: 'Sanctum / Auth', icon: 'fas fa-shield-alt', level: 'Advanced' },
      { name: 'MySQL Database', icon: 'fas fa-database', level: 'Advanced' },
    ],
  },
  {
    category: 'TOOLS & DEPLOYMENT',
    skills: [
      { name: 'Git & GitHub', icon: 'fab fa-git-alt', level: 'Advanced' },
      { name: 'Postman', icon: 'fas fa-paper-plane', level: 'Advanced' },
      { name: 'VS Code', icon: 'fas fa-code', level: 'Expert' },
      { name: 'Laragon', icon: 'fas fa-server', level: 'Advanced' },
      { name: 'Hostdata.id (FTP)', icon: 'fas fa-cloud-upload-alt', level: 'Advanced' },
    ],
  },
]

export default function MultiTabShowcase() {
  const [activeTab, setActiveTab] = useState<'PROJECTS' | 'CERTIFICATES' | 'TECH STACK'>('PROJECTS')

  return (
    <section id="projects" className="relative py-24 bg-[#050811]/60">
      <div className="section-container">
        
        {/* Tab Navigation Buttons */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-full bg-[#0B0F19] border border-[#0088FF]/30 shadow-[0_0_30px_rgba(0,136,255,0.15)]">
            {(['PROJECTS', 'CERTIFICATES', 'TECH STACK'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                suppressHydrationWarning
                className={`relative px-8 py-3 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-[#050811] bg-gradient-to-r from-[#00F0FF] to-[#0088FF] shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <AnimatePresence mode="wait">
          
          {/* PROJECTS TAB */}
          {activeTab === 'PROJECTS' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projectsData.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Tilt maxTilt={8} className="h-full">
                    <div className="h-full rounded-2xl bg-[#0B0F19]/90 border border-[#0088FF]/30 p-6 flex flex-col justify-between hover:border-[#00F0FF]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#0088FF]/10 border border-[#0088FF]/30 flex items-center justify-center text-[#00F0FF]">
                            <i className={project.icon} />
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0088FF]/10 text-[#00F0FF] border border-[#0088FF]/20">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00F0FF] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tech.map(t => (
                            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
                              {t}
                            </span>
                          ))}
                        </div>

                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-[#00F0FF] hover:underline"
                          >
                            <span>LIVE PREVIEW</span>
                            <i className="fas fa-external-link-alt text-[10px]" />
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-amber-400">
                            🚧 {project.status || 'IN DEVELOPMENT'}
                          </span>
                        )}
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CERTIFICATES TAB */}
          {activeTab === 'CERTIFICATES' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {certificatesData.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Tilt maxTilt={8} className="h-full">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-full rounded-2xl bg-[#0B0F19]/90 border border-[#0088FF]/30 p-6 flex flex-col justify-between hover:border-[#00F0FF]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group block"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#0088FF]/10 border border-[#0088FF]/30 flex items-center justify-center text-[#00F0FF] mb-4">
                          <i className={cert.icon} />
                        </div>
                        <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#00F0FF] transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-zinc-400 text-xs">{cert.issuer}</p>
                        {cert.id && (
                          <p className="text-zinc-500 font-mono text-[11px] mt-2">
                            Credential ID: {cert.id}
                          </p>
                        )}
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#00F0FF]">
                        <span>VERIFY CREDENTIAL</span>
                        <i className="fas fa-arrow-right" />
                      </div>
                    </a>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* TECH STACK TAB */}
          {activeTab === 'TECH STACK' && (
            <motion.div
              key="tech-stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-12 max-w-4xl mx-auto"
            >
              {techStackData.map((group) => (
                <div key={group.category} className="rounded-2xl bg-[#0B0F19]/90 border border-[#0088FF]/30 p-8">
                  <h3 className="text-sm font-mono tracking-widest text-[#00F0FF] mb-6 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                    {group.category}
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {group.skills.map(skill => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#00F0FF]/40 transition-all"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#0088FF]/10 flex items-center justify-center text-[#00F0FF]">
                          <i className={skill.icon} />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold">{skill.name}</div>
                          <div className="text-[10px] text-zinc-500 font-mono">{skill.level}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  )
}
