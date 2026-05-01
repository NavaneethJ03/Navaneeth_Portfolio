'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BOOT_MESSAGES } from '@/utils/constants'

interface BootSequenceProps {
  onComplete: () => void
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [showProgress, setShowProgress] = useState(false)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    BOOT_MESSAGES.forEach((msg, i) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, i])
      }, msg.delay)
      timers.push(t)
    })

    const finalTimer = setTimeout(() => {
      setShowProgress(true)
    }, 4600)
    timers.push(finalTimer)

    const completeTimer = setTimeout(() => {
      setComplete(true)
      setTimeout(onComplete, 600)
    }, 5200)
    timers.push(completeTimer)

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-[#050a0e] flex flex-col items-center justify-center"
        >
          {/* Header */}
          <div className="absolute top-8 left-8 flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-cyan-400 rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 bg-cyan-400 rotate-45" />
            </div>
            <span className="text-cyan-400 text-sm tracking-[0.3em] font-bold">DEDSEC_OS</span>
          </div>

          {/* Main terminal */}
          <div className="w-full max-w-2xl px-6">
            <div className="cyber-panel rounded-lg overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-cyan-500/20 bg-black/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                </div>
                <span className="ml-3 text-xs text-cyan-400/50 tracking-widest">SECURE_SHELL — DEDSEC_OS</span>
              </div>

              {/* Log output */}
              <div className="p-6 min-h-64 font-mono text-sm space-y-1">
                {BOOT_MESSAGES.map((msg, i) => (
                  <AnimatePresence key={i}>
                    {visibleLines.includes(i) && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`${
                          msg.text.includes('ACCESS GRANTED') 
                            ? 'text-green-400 font-bold neon-green-text' 
                            : msg.text.includes('Identity confirmed') || msg.text.includes('WARNING')
                            ? 'text-yellow-400'
                            : 'text-cyan-300/80'
                        }`}
                      >
                        {msg.text}
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}
                {visibleLines.length > 0 && !complete && (
                  <span className="text-cyan-400 terminal-cursor" />
                )}
              </div>
            </div>

            {/* Progress bar */}
            {showProgress && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 space-y-2"
              >
                <div className="flex justify-between text-xs text-cyan-400/60">
                  <span>LOADING OPERATIVE PROFILE</span>
                  <span>100%</span>
                </div>
                <div className="h-1 bg-dark-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 right-4 text-xs font-mono text-cyan-400/30 text-right">
            <div>SYS:0042</div>
            <div>NET:SECURE</div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cyan-400/20 text-xs tracking-widest">
            UNAUTHORIZED ACCESS WILL BE PROSECUTED // JK LUL
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
