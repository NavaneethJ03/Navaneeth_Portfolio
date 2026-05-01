'use client'
import { motion } from 'framer-motion'
import { useScrollSection } from '@/hooks/useScrollSection'

const NAV_ITEMS = [
  { id: 'about', label: 'IDENTITY' },
  { id: 'projects', label: 'MISSIONS' },
  { id: 'skills', label: 'ARSENAL' },
  { id: 'values', label: 'PROTOCOL' },
  { id: 'contact', label: 'CONNECT' },
]

export default function Navigation() {
  const activeSection = useScrollSection()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6"
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`group flex items-center gap-3 text-xs tracking-widest transition-all duration-300 ${
            activeSection === item.id ? 'text-cyan-400' : 'text-slate-500 hover:text-cyan-400'
          }`}
        >
          <span className={`h-px transition-all duration-300 ${
            activeSection === item.id ? 'w-8 bg-cyan-400' : 'w-3 bg-slate-600 group-hover:w-6 group-hover:bg-cyan-400'
          }`} />
          {item.label}
        </button>
      ))}
    </motion.nav>
  )
}
