'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { href: '#about', label: 'ABOUT ME' },
    { href: '#works', label: 'BEST WORKS' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#portfolio', label: 'PORTFOLIO' },
    { href: '#contact', label: 'CONTACTS' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/85 backdrop-blur-xl shadow-xl border-b border-slate-800/70' : 'bg-gradient-to-b from-black/70 to-black/30 border-b border-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary to-accent-purple rounded-lg text-white font-display font-bold text-xl">
              M
            </span>
              <span className="font-display font-bold text-lg text-white hidden sm:block tracking-[0.02em] drop-shadow-sm">
                RAY PANGANIBAN
              </span>
            </Link>

          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-slate-300 hover:text-white transition-colors text-[0.78rem] lg:text-[0.8rem] tracking-[0.11em]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-primary to-accent-purple text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-xs tracking-[0.12em]"
            >
              INITIATE SYSTEM
            </a>
          </div>

          <button
            id="mobile-menu-btn"
            className="md:hidden flex flex-col gap-1.5 p-2.5 -mr-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[70vh] pb-3' : 'max-h-0'}`}>
          <div className="flex flex-col gap-3 bg-black/70 backdrop-blur-xl rounded-xl border border-slate-800 shadow-2xl p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors py-2 text-[0.82rem] tracking-[0.11em]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-primary to-accent-purple text-white font-semibold rounded-lg text-center text-[0.78rem] tracking-[0.12em]"
              onClick={() => setMobileOpen(false)}
            >
              INITIATE SYSTEM
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
