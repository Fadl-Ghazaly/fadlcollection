'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Tentang Saya', href: '#about' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <a href="#" className="font-extrabold text-xl tracking-tight text-white">
          Fadl<span className="text-blue-500">Collection</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:fadlcollection29@gmail.com"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all"
          >
            Hubungi Saya
          </a>
        </nav>

        <button
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-slate-950/95 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white text-base font-medium py-2 transition-colors border-b border-slate-900/60"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:fadlcollection29@gmail.com"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full text-center py-2.5 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all"
              >
                Hubungi Saya
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}