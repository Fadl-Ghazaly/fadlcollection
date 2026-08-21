'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.fadlcollection.my.id/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="relative py-24 bg-[#07040D]/90">
      <div className="section-container">
        
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 mb-3">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            LET'S BUILD SOMETHING AMAZING.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <div className="flex flex-col gap-6">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Punya proyek yang ingin dikerjakan bersama atau sekadar ingin berdiskusi tentang teknologi Laravel &amp; Next.js? Jangan ragu untuk menghubungi saya.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: 'fas fa-envelope', label: 'Email', val: 'fadlcollection29@gmail.com', href: 'mailto:fadlcollection29@gmail.com' },
                { icon: 'fab fa-whatsapp', label: 'WhatsApp', val: '+62 857-3018-2757', href: 'https://wa.me/6285730182757' },
                { icon: 'fas fa-map-marker-alt', label: 'Location', val: 'Bandar Lampung, Lampung', href: null },
              ].map(item => (
                <div key={item.label} className="p-4 rounded-2xl bg-[#0F091A] border border-purple-500/30 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-bold text-white hover:text-purple-400 transition-colors">
                        {item.val}
                      </a>
                    ) : (
                      <div className="text-sm font-bold text-white">{item.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-[#0F091A] border border-purple-500/30 flex flex-col gap-4" suppressHydrationWarning>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  suppressHydrationWarning
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Fadl Ghazaly"
                  className="w-full px-4 py-3 rounded-xl bg-[#07040D] border border-purple-500/30 text-white text-sm focus:border-purple-400 outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  suppressHydrationWarning
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#07040D] border border-purple-500/30 text-white text-sm focus:border-purple-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5 block">Subject</label>
              <input
                type="text"
                required
                suppressHydrationWarning
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                placeholder="Project Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-[#07040D] border border-purple-500/30 text-white text-sm focus:border-purple-400 outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                suppressHydrationWarning
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-[#07040D] border border-purple-500/30 text-white text-sm focus:border-purple-400 outline-none resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                ✓ Pesan berhasil dikirim! Saya akan segera menghubungi Anda.
              </div>
            )}
            {status === 'error' && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                ✕ Gagal mengirim pesan. Silakan coba lagi via WhatsApp.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-600 text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>

        </div>

      </div>
    </section>
  )
}
