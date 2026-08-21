'use client'

import { motion } from 'framer-motion'
import Tilt from './Tilt'

const services = [
  {
    id: 'landing',
    title: 'LANDING PAGE',
    price: 'Rp 750.000',
    subtitle: 'MULAI DARI',
    desc: 'Website satu halaman yang dirancang untuk konversi tinggi. Cocok untuk peluncuran produk atau promosi jasa.',
    features: [
      'Desain Responsif & Modern',
      'Integrasi Domain .com/id',
      'Revisi Desain',
      'Optimasi Kecepatan',
    ],
    whatsappText: 'Halo Fadl, saya tertarik memesan layanan Landing Page (Rp 750.000).',
  },
  {
    id: 'company',
    title: 'COMPANY PROFILE',
    price: 'Rp 1.500.000',
    subtitle: 'MULAI DARI',
    desc: 'Representasi digital profesional untuk perusahaan Anda. Membangun kepercayaan sejak pandangan pertama.',
    features: [
      'Desain Custom Profesional',
      'Dashboard Admin Khusus',
      'Free Hosting (Tahun Pertama)',
      'SEO Basic Setup',
    ],
    whatsappText: 'Halo Fadl, saya tertarik memesan layanan Company Profile (Rp 1.500.000).',
    popular: true,
  },
  {
    id: 'ecommerce',
    title: 'E-COMMERCE',
    price: 'Rp 3.000.000',
    subtitle: 'MULAI DARI',
    desc: 'Toko online modern dengan sistem manajemen stok, pembayaran, dan pengiriman yang terintegrasi secara seamless.',
    features: [
      'Manajemen Stok & Produk',
      'Fitur Chat WhatsApp / Checkout',
      'Sistem Ongkir Cek',
      'Desain User-Friendly',
    ],
    whatsappText: 'Halo Fadl, saya tertarik memesan layanan E-Commerce (Rp 3.000.000).',
  },
]

export default function WebServices() {
  return (
    <section id="services" className="relative py-24 bg-[#07040D]/90">
      <div className="section-container">
        
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 mb-3">
            PREMIUM DEVELOPMENT &amp; DIGITAL SOLUTION
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            SOLUSI LAYANAN WEB PROFESIONAL &amp; EKSKLUSIF.
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Membangun keberadaan digital yang kredibel dan inovatif untuk bisnis Anda. Kami mengombinasikan desain estetis dengan teknologi mutakhir untuk hasil yang terukur.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-600 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Tilt maxTilt={6} className="h-full">
                <div className={`relative rounded-3xl bg-[#0F091A] border ${service.popular ? 'border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.3)]' : 'border-purple-500/30'} p-8 flex flex-col justify-between h-full group hover:border-purple-400/60 transition-all duration-300`}>
                  
                  {service.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-600 text-white text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      MOST POPULAR
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-purple-500/40 flex items-center justify-center text-purple-300">
                        <i className={service.id === 'landing' ? 'fas fa-rocket' : service.id === 'company' ? 'fas fa-building' : 'fas fa-store'} />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                    <div className="text-2xl md:text-3xl font-black text-purple-400 mb-4">
                      {service.price}
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    <div className="flex flex-col gap-3 mb-8">
                      {service.features.map(feat => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <i className="fas fa-check text-purple-400 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/6285730182757?text=${encodeURIComponent(service.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-bold text-xs uppercase tracking-wider text-center shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp text-sm" />
                    PILIH PAKET
                  </a>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
