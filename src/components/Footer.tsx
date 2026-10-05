'use client';

import { GitBranch, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-tight">
            Fadl<span className="text-blue-500">Collection</span>
          </span>
          <span>&copy; {new Date().getFullYear()} Fadl Muhammad Ghazaly. All rights reserved.</span>
        </div>

        <p className="text-xs text-slate-500">
          Dibuat menggunakan <span className="text-slate-300">Next.js</span>, <span className="text-slate-300">Tailwind CSS</span> &amp; <span className="text-slate-300">Framer Motion</span>.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Fadl-Ghazaly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GitBranch className="w-4 h-4" /> GitHub
          </a>
          <a
            href="mailto:fadlcollection29@gmail.com"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>

      </div>
    </footer>
  )
}