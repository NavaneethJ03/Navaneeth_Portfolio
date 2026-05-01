'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import HackerCard from '@/components/HackerCard'
import { PROJECTS } from '@/utils/constants'

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <SectionWrapper id="projects">
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
          <span className="text-cyan-400/50 text-xs tracking-[0.3em]">02 // ACTIVE_MISSIONS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-3"
        >
          Active{' '}
          <span className="text-cyan-400 neon-text">Missions</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {PROJECTS.map((project, i) => (
            <HackerCard
              key={project.id}
              delay={i * 0.15}
              glowColor={i === 0 ? '#00ffff' : '#9333ea'}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              {/* Mission header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-xs text-cyan-400/50 tracking-widest mb-1">{project.codename}</div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-xs px-2 py-1 rounded border ${
                    project.status === 'DEPLOYED' 
                      ? 'border-green-500/50 text-green-400 bg-green-500/10' 
                      : 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-red-400/70">{project.threat_level}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Expand indicator */}
              <AnimatePresence>
                {activeProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-cyan-500/20 pt-4 mt-2"
                  >
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-sm text-cyan-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>⬡</span> VIEW_SOURCE
                      </a>
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-sm text-purple-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>◈</span> LIVE_DEMO
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-xs text-slate-600 mt-3">
                {activeProject === project.id ? '▲ COLLAPSE' : '▼ EXPAND MISSION BRIEF'}
              </div>
            </HackerCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
