import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NAVANEETH_J // DEDSEC OPS',
  description: 'Hacker portfolio - Access granted',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#050a0e] text-slate-200 font-mono antialiased">
        <div className="scanline" />
        {children}
      </body>
    </html>
  )
}
