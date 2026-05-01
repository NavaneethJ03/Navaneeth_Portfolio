'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TerminalWindowProps {
  title?: string
  children: ReactNode
  className?: string
  delay?: number
}

export default function TerminalWindow({ title = 'TERMINAL', children, className = '', delay = 0 }: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`cyber-panel rounded-lg overflow-hidden ${className}`}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-cyan-500/20 bg-[#0a1628]">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-cyan-400/60 uppercase tracking-widest">{title}</span>
      </div>
      {/* Content */}
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  )
}
