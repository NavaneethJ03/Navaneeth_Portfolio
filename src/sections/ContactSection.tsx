'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import TerminalWindow from '@/components/TerminalWindow'
import { CONTACT_LINKS } from '@/utils/constants'

export default function ContactSection() {
  const [transmitting, setTransmitting] = useState<string | null>(null)

  const handleConnect = (label: string) => {
    setTransmitting(label)
    setTimeout(() => setTransmitting(null), 2000)
  }

  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="text-cyan-400/50 text-xs tracking-[0.3em]">05 // SIGNAL_TRANSMISSION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-3"
        >
          Establish{' '}
          <span className="text-cyan-400 neon-text">Connection</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-400 text-sm mb-10"
        >
          {'> Secure channel available. Initiating encrypted handshake...'}
        </motion.p>

        <TerminalWindow title="SECURE_COMM.sys" delay={0.2}>
          <div className="space-y-2 mb-6 text-sm font-mono">
            <div className="text-cyan-400/60">{'> DEDSEC_COMM_SYSTEM initialized'}</div>
            <div className="text-cyan-400/60">{'> Encryption: AES-256-GCM'}</div>
            <div className="text-cyan-400/60">{'> Channel: SECURE'}</div>
            <div className="text-green-400">{'> Ready to establish connection ✓'}</div>
          </div>

          <div className="space-y-4">
            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleConnect(link.label)}
                className="flex items-center gap-4 p-3 rounded border border-cyan-500/10 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 group"
              >
                <span className="text-xl text-cyan-400 group-hover:text-white transition-colors">
                  {link.icon}
                </span>
                <div>
                  <div className="text-xs text-cyan-400/50 tracking-widest">{link.label}</div>
                  <div className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
                    {transmitting === link.label ? (
                      <span className="text-green-400">TRANSMITTING...</span>
                    ) : link.handle}
                  </div>
                </div>
                <div className="ml-auto text-xs text-slate-600 group-hover:text-cyan-400 transition-colors">
                  CONNECT →
                </div>
              </motion.a>
            ))}
          </div>
        </TerminalWindow>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-xs text-slate-600 tracking-widest"
        >
          <div>DEDSEC_OS v2.1.3 // NAVANEETH_J // {new Date().getFullYear()}</div>
          <div className="mt-1 text-cyan-400/20">ALL SYSTEMS OPERATIONAL</div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
