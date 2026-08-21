import './globals.css'
import type { Metadata } from 'next'
import Preloader from '@/components/Preloader'
import CanvasBackground from '@/components/CanvasBackground'
import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'FadlCollection — Cyberpunk Neon Purple Portfolio & Web Service Platform',
  description: 'Fadl Muhammad Ghazaly - Full-Stack Developer & Mahasiswa TRPL Politeknik IDN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-[#07040D] text-zinc-100 antialiased selection:bg-[#A855F7] selection:text-[#07040D] relative min-h-screen overflow-x-hidden flex flex-col justify-between">
        <div>
          <Preloader />
          <CanvasBackground />
          <ScrollProgress />
          <Navbar />

          <main className="pt-20">
            {children}
          </main>
        </div>

        {/* Footer present on all pages */}
        <footer className="relative border-t border-purple-500/30 bg-[#07040D] mt-24">
          <div className="section-container py-16">
            <div className="flex flex-col items-center gap-6 text-center">
              
              <a href="/" className="inline-flex items-center">
                <span className="font-black text-2xl tracking-tight text-white">
                  Fadl<span className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.6)]">Collection</span>
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
                    className="w-10 h-10 rounded-full bg-[#0F091A] border border-purple-500/30 flex items-center justify-center text-zinc-400 hover:text-purple-300 hover:border-purple-400/60 transition-all"
                  >
                    <i className={`${s.icon} text-sm`} />
                  </a>
                ))}
              </div>

            </div>
          </div>

          <div className="border-t border-purple-500/10 py-6 bg-[#07040D]">
            <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-400/60 font-mono">
              <span>© 2026 FadlCollection. All rights reserved.</span>
              <span>SECURE CYBERNETIC PROTOCOL ACTIVE // NEXT.JS 14</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
