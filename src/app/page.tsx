'use client'
import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import BootSequence from '@/components/BootSequence'
import Navigation from '@/components/Navigation'
import AboutSection from '@/sections/AboutSection'
import ProjectsSection from '@/sections/ProjectsSection'
import SkillsSection from '@/sections/SkillsSection'
import CoreValuesSection from '@/sections/CoreValuesSection'
import ContactSection from '@/sections/ContactSection'
import GlitchText from '@/components/GlitchText'

// Dynamically import 3D scene to avoid SSR issues
const CyberScene = dynamic(() => import('@/scenes/CyberScene'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#050a0e]" />
})

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false)

  return (
    <main className="bg-[#050a0e] min-h-screen">
      {/* Boot Sequence */}
      <BootSequence onComplete={() => setBootComplete(true)} />

      <AnimatePresence>
        {bootComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Navigation */}
            <Navigation />

            {/* Hero Section with 3D */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* 3D Cyber Scene */}
              <Suspense fallback={null}>
                <CyberScene />
              </Suspense>

              {/* Hero overlay content */}
              <div className="relative z-10 text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-cyan-400/60 text-sm tracking-[0.5em] mb-4"
                >
                  DEDSEC OPERATIVE // ONLINE
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter"
                >
                  <GlitchText text="NAVANEETH" className="text-white" interval={4000} />
                  <span className="block text-cyan-400 neon-text">_J</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-slate-400 text-lg md:text-xl tracking-wider mb-8"
                >
                  Full-Stack Developer{' '}
                  <span className="text-cyan-400">{'<'}</span>
                  {' AI Engineer '}
                  <span className="text-cyan-400">{'>'}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 text-sm tracking-widest rounded-sm"
                  >
                    VIEW_MISSIONS
                  </button>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/30 transition-all duration-300 text-sm tracking-widest rounded-sm"
                  >
                    ESTABLISH_CONTACT
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="mt-16 text-slate-600 text-xs tracking-widest animate-bounce"
                >
                  ↓ SCROLL TO NAVIGATE ↓
                </motion.div>
              </div>

              {/* Corner HUD elements */}
              <div className="absolute top-4 right-4 text-xs font-mono text-cyan-400/30 text-right">
                <div>LAT: 10.8505°N</div>
                <div>LONG: 76.2711°E</div>
                <div>ALT: [ENCRYPTED]</div>
              </div>

              <div className="absolute bottom-4 left-4 text-xs font-mono text-cyan-400/30">
                <div>SYSTEM: NOMINAL</div>
                <div>THREAT: LOW</div>
              </div>
            </section>

            {/* Content Sections */}
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <CoreValuesSection />
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
