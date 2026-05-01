'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HackerCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  onClick?: () => void
  delay?: number
}

export default function HackerCard({ children, className = '', glowColor = '#00ffff', onClick, delay = 0 }: HackerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5,
        boxShadow: `0 0 20px ${glowColor}40, 0 0 40px ${glowColor}20`,
        borderColor: glowColor,
      }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`cyber-panel rounded-xl p-6 cursor-pointer border border-cyan-500/20 transition-all duration-300 ${className}`}
      style={{ borderColor: `${glowColor}30` }}
    >
      {children}
    </motion.div>
  )
}
