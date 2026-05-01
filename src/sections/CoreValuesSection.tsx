'use client'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import HackerCard from '@/components/HackerCard'
import { CORE_VALUES } from '@/utils/constants'
import { useDecrypt } from '@/hooks/useGlitch'

function ValueCard({ value, index }: { value: typeof CORE_VALUES[0], index: number }) {
  const { text, isDecoded, decrypt, encrypt } = useDecrypt(value.encoded, value.decoded)

  return (
    <HackerCard
      delay={index * 0.1}
      glowColor={index % 2 === 0 ? '#00ffff' : '#9333ea'}
      className="text-center"
    >
      <div
        className="h-full flex flex-col items-center gap-4 cursor-pointer"
        onMouseEnter={decrypt}
        onMouseLeave={encrypt}
      >
        <span className="text-3xl">{value.icon}</span>
        <div className={`font-mono text-sm font-bold tracking-wider transition-colors duration-300 ${
          isDecoded ? 'text-cyan-400 neon-text' : 'text-slate-500'
        }`}>
          {text}
        </div>
        <div className="text-xs text-slate-600">
          {isDecoded ? '[ DECODED ]' : '[ HOVER TO DECRYPT ]'}
        </div>
      </div>
    </HackerCard>
  )
}

export default function CoreValuesSection() {
  return (
    <SectionWrapper id="values">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="text-cyan-400/50 text-xs tracking-[0.3em]">04 // CORE_PROTOCOL</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-3"
        >
          Core{' '}
          <span className="text-green-400 neon-green-text">Protocol</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-500 text-sm mb-10 tracking-wider"
        >
          {'> Hover over encrypted values to reveal operative principles'}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CORE_VALUES.map((value, i) => (
            <ValueCard key={value.encoded} value={value} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
