'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, GitBranch, Mail, ArrowRight, Code2, Server, Database, } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa6';
const projects = [
  {
    title: 'Pempek Web App',
    description: 'Website aplikasi katalog & pemesanan produk pempek dengan antarmuka yang ramah pengguna.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    status: 'Completed',
    liveUrl: 'https://pempek4sedulur.fadlcollection.my.id',
    githubUrl: 'https://github.com/Fadl-Ghazaly/pempek4sedulur',
  },
  {
    title: 'Menuku App',
    description: 'Aplikasi manajemen menu & pemesanan digital (menuku.fadlcollection.my.id).',
    tags: ['PHP', 'MySQL', 'Tailwind CSS'],
    status: 'Maintenance',
    // liveUrl: 'https://menuku.fadlcollection.my.id',
    // githubUrl: '#',
  },
  {
    title: 'Web SPMB',
    description: 'Sistem Informasi Penerimaan Santri/Siswa Baru Berbasis Web untuk mempermudah proses pendaftaran online.',
    tags: ['Laravel', 'MySQL', 'Tailwind CSS'],
    status: 'On Development',
    // liveUrl: '#',
    // githubUrl: '#',
  },
  {
    title: 'Tahfizh Web App',
    description: 'Platform pengelolaan data hafalan Al-Qur\'an, pemantauan progres santri, dan pencatatan nilai.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    status: 'On Development',
    // // liveUrl: '#',
    // githubUrl: '#',
  },
];

const skills = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', ], icon: Code2 },
  { category: 'Backend', items: ['PHP', 'Laravel', 'REST API', 'Node.js'], icon: Server },
  { category: 'Database & DevOps', items: ['MySQL', 'Git / GitHub Actions', 'FTP Deployment',], icon: Database },
];

export default function PortfolioContent() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen pt-24">

      <section id="about"className="max-w-6xl mx-auto px-6 py-12 md:py-20  min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-7/12"
        >
          <span className="inline-block text-blue-400 font-mono text-sm mb-4 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
            Full-Stack Developer
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Membangun Aplikasi Web yang <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Cepat, Terstruktur &amp; Scalable.
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed">
            Halo, saya Fadl Muhammad Ghazaly. Berfokus pada pengembangan end-to-end web dari arsitektur backend, manajemen database, hingga antarmuka frontend yang responsif.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-2 transition-all"
            >
              Lihat Proyek <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 font-medium transition-all"
            >
              Hubungi Saya
            </a>
          </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full md:w-5/12 flex justify-center items-center"
        >
          <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl p-1 bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-2xl shadow-blue-500/20 flex items-center justify-center">

          <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
            <Image
            src="/profile.png"
            alt="Profile Picture"
            fill
            priority
            sizes="(max-width: 768px) 256px, 320px"
            className="object-cover object-center hover:scale-105 transition-transform duration-500"
            />
            </div>
          </div>
        </motion.div>

        
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-blue-500">01.</span> Keahlian & Tech Stack
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-all"
              >
                <IconComponent className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

    {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-blue-500">02.</span> Proyek Pilihan
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* HEAD & STATUS BADGE */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.status === 'On Development' && (
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 whitespace-nowrap">
                      On Development
                    </span>
                  )}
                  {project.status === 'Maintenance' && (
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 whitespace-nowrap">
                      Maintenance
                    </span>
                  )}
                  {project.status === 'Completed' && (
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                      Active
                    </span>
                  )}
                </div>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION LINKS */}
              <div className="flex gap-4 pt-4 border-t border-slate-800/80">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white flex items-center gap-1.5 text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white flex items-center gap-1.5 text-sm font-medium transition-colors"
                >
                  <GitBranch className="w-4 h-4" /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Mulai Kolaborasi</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm">
          Saya siap untuk posisi pekerjaan penuh waktu, kontrak, atau proyek pengembangan web.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            <a
          href="mailto:fadlcollection29@gmail.com"
          className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex flex-col items-center gap-3 group"
          >
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-tranform">
             <Mail className="w-6 h-6" /> 
             </div>
             <div className="text-center">
             <div className="font-semibold text-white text-sm">Email</div>
             <div className="text-xs text-slate-400 mt-1">Kirim Pesan</div>
              </div>
         
        </a>
            <a
          href="https://wa.me/6285730182757"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex flex-col items-center gap-3 group"
          >
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-tranform">
             <FaWhatsapp className="w-6 h-6" /> 
             </div>
             <div className="text-center">
             <div className="font-semibold text-white text-sm">WhatsApp</div>
             <div className="text-xs text-slate-400 mt-1">Langsung</div>
              </div>
         
        </a>
            <a
          href="https://www.linkedin.com/in/fadl-muhammad/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex flex-col items-center gap-3 group"
          >
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-tranform">
             <FaLinkedin className="w-6 h-6" /> 
             </div>
             <div className="text-center">
             <div className="font-semibold text-white text-sm">LinkedIn</div>
             <div className="text-xs text-slate-400 mt-1">Profil Publik</div>
              </div>
         
        </a>
            <a
          href="https://www.instagram.com/fadlcollection"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex flex-col items-center gap-3 group"
          >
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-tranform">
             <FaInstagram className="w-6 h-6" /> 
             </div>
             <div className="text-center">
             <div className="font-semibold text-white text-sm">Instagram</div>
             <div className="text-xs text-slate-400 mt-1">Media Sosial</div>
              </div>
         
        </a>
        </div>
        
      </section>
    </main>
  );
}