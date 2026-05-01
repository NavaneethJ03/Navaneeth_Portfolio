'use client'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import TerminalWindow from '@/components/TerminalWindow'
import { SKILLS } from '@/utils/constants'

const CATEGORY_COLORS: Record<string, { bar: string; label: string; border: string }> = {
  Backend: { bar: 'from-cyan-500 to-cyan-300', label: 'text-cyan-400', border: 'border-cyan-500/30' },
  'AI/ML': { bar: 'from-purple-500 to-purple-300', label: 'text-purple-400', border: 'border-purple-500/30' },
  Tools: { bar: 'from-green-500 to-green-300', label: 'text-green-400', border: 'border-green-500/30' },
}

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
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
          <span className="text-cyan-400/50 text-xs tracking-[0.3em]">03 // SKILL_MATRIX</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-10"
        >
          Skill{' '}
          <span className="text-purple-400 neon-purple-text">Arsenal</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, skills], catIdx) => {
            const colors = CATEGORY_COLORS[category]
            return (
              <TerminalWindow
                key={category}
                title={`${category.toUpperCase().replace('/', '_')}.sys`}
                delay={catIdx * 0.15}
              >
                <div className="mb-3">
                  <span className={`text-xs tracking-widest font-bold ${colors.label}`}>
                    {category.toUpperCase()}
                  </span>
                </div>
                <div className="space-y-4">
                  {skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-slate-300">{skill.name}</span>
                        <span className={`text-xs ${colors.label}`}>{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: catIdx * 0.1 + skillIdx * 0.05 + 0.2, ease: 'easeOut' }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
                          style={{ boxShadow: `0 0 8px ${catIdx === 0 ? '#00ffff' : catIdx === 1 ? '#9333ea' : '#00ff41'}60` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TerminalWindow>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
