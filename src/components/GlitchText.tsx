'use client'
import { useGlitch } from '@/hooks/useGlitch'

interface GlitchTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  interval?: number
}

export default function GlitchText({ text, className = '', as: Tag = 'span', interval = 3000 }: GlitchTextProps) {
  const isGlitching = useGlitch(interval)

  return (
    <Tag
      className={`relative inline-block ${isGlitching ? 'glitch-effect' : ''} ${className}`}
      data-text={text}
    >
      {text}
    </Tag>
  )
}
