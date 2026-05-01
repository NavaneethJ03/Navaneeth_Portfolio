/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00ffff',
        'neon-purple': '#9333ea',
        'neon-green': '#00ff41',
        'neon-blue': '#0088ff',
        'dark-bg': '#050a0e',
        'dark-panel': '#0a1628',
        'dark-border': '#1a2f4a',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
        sans: ['system-ui', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'scan': 'scan 3s linear infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'flicker': 'flicker 0.15s infinite',
        'typing': 'typing 2s steps(20) forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)', filter: 'hue-rotate(90deg)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)', filter: 'hue-rotate(180deg)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff' },
          '50%': { boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
