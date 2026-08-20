import Preloader from '@/components/Preloader'
import CanvasBackground from '@/components/CanvasBackground'
import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MeetTheArchitect from '@/components/MeetTheArchitect'
import MultiTabShowcase from '@/components/MultiTabShowcase'
import VisualArchives from '@/components/VisualArchives'
import WebServices from '@/components/WebServices'
import ConnectChannels from '@/components/ConnectChannels'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050811] text-[#e4e4e7] overflow-x-hidden selection:bg-[#00F0FF] selection:text-[#050811]">
      <Preloader />
      <CanvasBackground />
      <ScrollProgress />
      <Navbar />

      <Hero />
      <MeetTheArchitect />
      <MultiTabShowcase />
      <VisualArchives />
      <WebServices />
      <ConnectChannels />
      <Contact />

      {/* Footer */}
      <footer className="relative border-t border-[#0088FF]/20 bg-[#050811]">
        <div className="section-container py-16">
          <div className="flex flex-col items-center gap-6 text-center">
            
            <a href="#home" className="inline-flex items-center">
              <span className="font-black text-2xl tracking-tight text-white">
                Fadl<span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">Collection</span>
              </span>
            </a>

            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Mahasiswa TRPL di Politeknik IDN berfokus pada Full-Stack Web &amp; Mobile Development.
            </p>

            <div className="flex items-center gap-4">
              {[
                { href: 'https://github.com/Fadl-Ghazaly', icon: 'fab fa-github', label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/fadl-collection-82619a426', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
                { href: 'https://www.instagram.com/fadlcollection', icon: 'fab fa-instagram', label: 'Instagram' },
                { href: 'https://wa.me/6285730182757', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
                { href: 'mailto:fadlcollection29@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
              ].map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-[#0B0F19] border border-[#0088FF]/30 flex items-center justify-center text-zinc-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/60 transition-all"
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>

          </div>
        </div>

        <div className="border-t border-[#0088FF]/10 py-6 bg-[#050811]">
          <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <span>© 2026 FadlCollection. All rights reserved.</span>
            <span className="flex items-center gap-1.5 font-mono">
              SECURE CYBERNETIC PROTOCOL ACTIVE // NEXT.JS 14
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
