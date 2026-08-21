import './globals.css'
import type { Metadata } from 'next'

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
      <body className="bg-[#07040D] text-zinc-100 antialiased selection:bg-[#A855F7] selection:text-[#07040D]">
        {children}
      </body>
    </html>
  )
}
