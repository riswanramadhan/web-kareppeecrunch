'use client'

import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const handleDiscoverClick = () => {
    const target = document.querySelector('#support')
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section
      id="home"
      aria-label="Hero section Kareppe Crunch"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <picture className="absolute inset-0 block">
        <source media="(max-width: 767px)" srcSet="/images/hero-mobile.webp" />
        <source media="(min-width: 768px)" srcSet="/images/hero-desktop-tablet.webp" />
        <img
          src="/images/hero-desktop-tablet.webp"
          alt="Kareppe Crunch kerupuk singkong khas Makassar dari Gowa"
          width="1536"
          height="1024"
          fetchPriority="high"
          className="h-full w-full object-cover brightness-[1.12] contrast-[1.08] saturate-[1.06]"
        />
      </picture>

      <div
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/65 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto w-full px-6 pb-20 text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-semibold tracking-[-0.015em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Kareppe Crunch
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          >
            <button
              onClick={handleDiscoverClick}
              aria-label="Jelajahi produk Kareppe Crunch"
              className="mt-5 inline-block text-xs uppercase tracking-widest border border-white/70 px-6 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer min-h-[48px] min-w-[48px]"
            >
              Discover
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70" aria-hidden="true">
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  )
}
