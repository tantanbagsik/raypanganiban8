'use client'

import { useEffect, useState } from 'react'

const works = [
  {
    title: 'Crypto WealthTech Platform',
    subtitle: 'Next.js Landing + Full-Featured Dashboard',
    image: '/content/best-works/01-zena-landing-dashboard/Main-screen.jpg',
    live: 'https://zena.capital',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Three.js'],
    description:
      'Enterprise-grade crypto wealth management platform combining animated landing experiences with a production dashboard for trading analytics and investor workflows.',
  },
  {
    title: 'AI-Powered Deals Discovery System',
    subtitle: 'Multi-marketplace deal intelligence platform',
    image: '/content/best-works/02-deal-finding-system/demo.jpg',
    live: 'https://github.com/xglukx/ai-deal-finding-system-demo',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'AWS'],
    description:
      'AI-first architecture for discovering, scoring, and tracking high-value deals across marketplaces with recommendation intelligence and real-time filtering.',
  },
  {
    title: 'AI-Powered Upwork Automation Suite',
    subtitle: 'Chrome Extension + Next.js backend',
    image: '/content/best-works/03-upwork-AI-extension/banner-1280x800.png',
    live: 'https://uwsa.app',
    stack: ['Chrome Extension', 'React', 'OpenAI API', 'Next.js'],
    description:
      'Freelancer productivity system with job scoring, proposal generation, and automation controls directly embedded in the Upwork experience.',
  },
]

export default function Works() {
  const [activeWork, setActiveWork] = useState(null)

  useEffect(() => {
    if (!activeWork) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveWork(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeWork])

  return (
    <section id="works" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-in-up mb-10 sm:mb-12 text-center">
          <p className="section-kicker mb-4">Best Works</p>
          <h2 className="font-display text-[2rem] sm:text-5xl lg:text-6xl text-white font-bold max-w-4xl mx-auto">Curated Portfolio Selection</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Selected flagship projects focused on AI-powered systems, product depth, and measurable outcomes.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
          {works.map((work, index) => (
            <article key={work.title} className="fade-in-up portfolio-item glass-panel" style={{ transitionDelay: `${index * 0.08}s` }}>
              <img src={work.image} alt={work.title} className="w-full h-56 sm:h-64 lg:h-72 object-cover" />
              <div className="portfolio-overlay">
                <h3 className="font-display text-white text-xl">{work.title}</h3>
                <p className="text-slate-300 text-sm mt-2">{work.subtitle}</p>
                <button onClick={() => setActiveWork(work)} className="mt-4 text-left inline-block text-sm text-primary-300 hover:text-primary-200">
                  VIEW CASE STUDY
                </button>
              </div>
            </article>
          ))}
        </div>

        {activeWork && (
          <div className="modal-backdrop" onClick={() => setActiveWork(null)}>
            <div className="modal-card" onClick={(event) => event.stopPropagation()}>
              <img src={activeWork.image} alt={activeWork.title} className="w-full h-72 sm:h-96 object-cover" />
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="section-kicker mb-3">Case Study</p>
                    <h3 className="font-display text-2xl sm:text-3xl text-white">{activeWork.title}</h3>
                    <p className="text-slate-300 mt-2">{activeWork.subtitle}</p>
                  </div>
                  <button onClick={() => setActiveWork(null)} className="text-slate-400 hover:text-white text-sm">CLOSE</button>
                </div>
                <p className="text-slate-400 leading-relaxed mt-6">{activeWork.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {activeWork.stack.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary-200">{tech}</span>
                  ))}
                </div>
                <a href={activeWork.live} target="_blank" rel="noreferrer" className="inline-block mt-7 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-semibold">
                  Open Live Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
