'use client'
import { useState, useEffect, useCallback } from 'react'

export function useGlitch(interval = 3000) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 300)
    }, interval + Math.random() * 2000)

    return () => clearInterval(timer)
  }, [interval])

  return isGlitching
}

export function useDecrypt(encoded: string, decoded: string) {
  const [text, setText] = useState(encoded)
  const [isDecoded, setIsDecoded] = useState(false)

  const decrypt = useCallback(() => {
    setIsDecoded(true)
    let step = 0
    const chars = '!@#$%^&*<>?/\\|{}[]0123456789ABCDEF'
    const intervalId = setInterval(() => {
      if (step >= decoded.length) {
        setText(decoded)
        clearInterval(intervalId)
        return
      }
      setText(
        decoded
          .split('')
          .map((char, i) => {
            if (i < step) return char
            if (char === ' ') return ' '
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      step += 0.5
    }, 50)
    return () => clearInterval(intervalId)
  }, [decoded])

  const encrypt = useCallback(() => {
    setIsDecoded(false)
    setText(encoded)
  }, [encoded])

  return { text, isDecoded, decrypt, encrypt }
}
