'use client'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/SectionWrapper'
import TerminalWindow from '@/components/TerminalWindow'

const PROFILE_DATA = {
  operator: 'NAVANEETH_J',
  clearance: 'DEDSEC_OPERATIVE',
  location: 'India [ENCRYPTED]',
  status: 'ONLINE',
  role: 'Full-Stack Developer & AI Engineer',
  specializations: ['AI/ML Systems', 'Full-Stack Dev', 'System Architecture', 'API Design'],
  traits: ['Problem Solver', 'Tech Enthusiast', 'Open Source Contributor', 'Continuous Learner'],
  mission: 'Building systems that matter. One commit at a time.',
}

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
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
          <span className="text-cyan-400/50 text-xs tracking-[0.3em]">01 // SYSTEM_IDENTITY</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* JSON Profile */}
          <TerminalWindow title="OPERATOR_PROFILE.json" delay={0.1}>
            <div className="text-sm space-y-1 font-mono">
              <div className="text-slate-500">{'{'}</div>
              {Object.entries(PROFILE_DATA).map(([key, value]) => (
                <div key={key} className="pl-4">
                  <span className="text-purple-400">&quot;{key}&quot;</span>
                  <span className="text-slate-400">: </span>
                  {Array.isArray(value) ? (
                    <span className="text-green-400">[{value.map(v => `"${v}"`).join(', ')}]</span>
                  ) : (
                    <span className="text-cyan-300">&quot;{value}&quot;</span>
                  )}
                  <span className="text-slate-400">,</span>
                </div>
              ))}
              <div className="text-slate-500">{'}'}</div>
            </div>
          </TerminalWindow>

          {/* Stats + Bio */}
          <div className="space-y-6">
            <TerminalWindow title="STATUS_REPORT" delay={0.2}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm">SYSTEM ONLINE</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Full-Stack Developer &amp; AI Engineer with a passion for building 
                  intelligent systems. Specializing in AI-powered applications, 
                  backend architecture, and crafting seamless user experiences.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  When not hacking code, found exploring new AI frontiers or 
                  contributing to open source. Mission: make technology accessible 
                  and impactful.
                </p>
              </div>
            </TerminalWindow>

            <TerminalWindow title="QUICK_STATS" delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'PROJECTS', value: '10+' },
                  { label: 'TECH_STACK', value: '15+' },
                  { label: 'COMMITS', value: '500+' },
                  { label: 'COFFEE_INTAKE', value: '∞' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 neon-text">{stat.value}</div>
                    <div className="text-xs text-slate-500 tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
