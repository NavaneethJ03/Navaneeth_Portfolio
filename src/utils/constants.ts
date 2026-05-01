export const BOOT_MESSAGES = [
  { text: '> Initializing DEDSEC_OS v2.1.3...', delay: 0 },
  { text: '> Loading kernel modules...', delay: 400 },
  { text: '> Establishing secure channel...', delay: 800 },
  { text: '> Bypassing firewall [████████░░] 80%...', delay: 1200 },
  { text: '> Bypassing firewall [██████████] 100% ✓', delay: 1700 },
  { text: '> Scanning network topology...', delay: 2000 },
  { text: '> Decrypting operator profile...', delay: 2400 },
  { text: '> Identity confirmed: NAVANEETH_J', delay: 2800 },
  { text: '> Clearance level: DEDSEC OPERATIVE', delay: 3200 },
  { text: '> WARNING: This system is monitored', delay: 3600 },
  { text: '> ... just kidding. Welcome.', delay: 4000 },
  { text: '> ACCESS GRANTED ✓', delay: 4400 },
]

export const PROJECTS = [
  {
    id: 'ai-classroom',
    codename: 'MISSION_ALPHA',
    title: 'AI Classroom Assistant',
    description: 'Autonomous learning system that adapts to student behavior in real-time. Powered by advanced NLP to answer queries, generate quizzes, and track progress.',
    tech: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'React'],
    status: 'DEPLOYED',
    threat_level: 'HIGH_IMPACT',
    link: '#',
  },
  {
    id: 'converso-ai',
    codename: 'MISSION_BETA',
    title: 'Converso AI',
    description: 'Real-time AI conversation platform with voice synthesis and multi-language support. Enables seamless human-AI dialogue with context awareness.',
    tech: ['Next.js', 'OpenAI', 'WebRTC', 'Node.js', 'PostgreSQL'],
    status: 'ACTIVE',
    threat_level: 'CRITICAL',
    link: '#',
  },
]

export const SKILLS = {
  Backend: [
    { name: 'Python', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'FastAPI', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'REST APIs', level: 88 },
  ],
  'AI/ML': [
    { name: 'LangChain', level: 85 },
    { name: 'OpenAI API', level: 90 },
    { name: 'TensorFlow', level: 70 },
    { name: 'NLP', level: 82 },
    { name: 'RAG Systems', level: 78 },
  ],
  Tools: [
    { name: 'Git', level: 92 },
    { name: 'Docker', level: 75 },
    { name: 'Next.js', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Tailwind CSS', level: 90 },
  ],
}

export const CORE_VALUES = [
  { encoded: 'C4N_Y0U_R34D_TH1S?', decoded: 'BUILD WITH PURPOSE', icon: '⚡' },
  { encoded: '1NN0V4T10N_1S_K3Y', decoded: 'INNOVATE RELENTLESSLY', icon: '🔮' },
  { encoded: 'C0D3_1S_P03TRY', decoded: 'CODE IS POETRY', icon: '🎯' },
  { encoded: 'H4CK_TH3_FUT4R3', decoded: 'HACK THE FUTURE', icon: '🌐' },
]

export const CONTACT_LINKS = [
  { label: 'GitHub', handle: '@NavaneethJ03', url: 'https://github.com/NavaneethJ03', icon: '⬡' },
  { label: 'LinkedIn', handle: 'Navaneeth J', url: 'https://linkedin.com', icon: '◈' },
  { label: 'Email', handle: 'navaneeth@dedsec.ops', url: 'mailto:navaneeth@dedsec.ops', icon: '◉' },
]
