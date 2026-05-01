'use client'
import { useEffect, useState } from 'react'

export function useScrollSection() {
  const [activeSection, setActiveSection] = useState('boot')

  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'values', 'contact']
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}
