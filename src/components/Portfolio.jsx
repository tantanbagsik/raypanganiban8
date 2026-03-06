'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Art NFT Project',
    image: '/content/portfolio/art-nft-project/Art-NFT.png',
    link: 'https://app.gainium.io/',
    category: 'Design',
    tech: ['React', 'Web3', 'Design'],
  },
  {
    title: 'Crypto Redesign',
    image: '/content/portfolio/crypto-redesign/screen1.jpg',
    link: 'https://zena.capital',
    category: 'Web',
    tech: ['Next.js', 'Tailwind', 'Product UI'],
  },
  {
    title: 'AI Chrome Extension',
    image: '/content/portfolio/commenter/screen1.jpg',
    link: 'https://chromewebstore.google.com/detail/social-post-mate-commente/ffebfjkgjgbpmnoogjjdgfkmiobngdnf',
    category: 'Automation',
    tech: ['Extension', 'OpenAI', 'Automation'],
  },
  {
    title: 'JetAPI WooCommerce',
    image: '/content/portfolio/jet-api/banner.jpg',
    link: 'https://wordpress.org/plugins/jetapi-integration-for-woocommerce/',
    category: 'Web',
    tech: ['WordPress', 'API', 'Plugin'],
  },
  {
    title: 'Django Portfolio Landing',
    image: '/content/portfolio/django-landing/demo.jpg',
    link: 'https://github.com/xglukx/django-landing-demo',
    category: 'Web',
    tech: ['Django', 'Frontend', 'Landing'],
  },
  {
    title: 'Learning Platform',
    image: '/content/portfolio/learning-platform/demo.jpg',
    link: 'https://github.com/xglukx/lms-concept-demo',
    category: 'AI',
    tech: ['LMS', 'Next.js', 'Analytics'],
  },
  {
    title: 'PDF Chat',
    image: '/content/portfolio/pdf-chat/homepage.jpg',
    link: 'https://github.com/xglukx',
    category: 'AI',
    tech: ['RAG', 'LLM', 'FastAPI'],
  },
  {
    title: 'Resume Generator',
    image: '/content/portfolio/resume-generator/demoDashboard.jpg',
    link: 'https://github.com/xglukx',
    category: 'Automation',
    tech: ['Templates', 'AI', 'Dashboard'],
  },
  {
    title: 'Beauty App',
    image: '/content/portfolio/beauty-app/demo1.jpg',
    link: 'https://github.com/xglukx',
    category: 'Design',
    tech: ['UI Design', 'Brand', 'Motion'],
  },
  {
    title: 'Trading Bot',
    image: '/content/portfolio/trading-bot/logs.jpg',
    link: 'https://github.com/xglukx/binance-trading-bot-demo',
    category: 'Automation',
    tech: ['Trading', 'Python', 'Bots'],
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], [])

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  useEffect(() => {
    if (!activeProject) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProject(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeProject])

  return (
    <section id="portfolio" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-in-up mb-10 sm:mb-12 text-center">
          <p className="section-kicker mb-4">Portfolio</p>
          <h2 className="font-display text-[2rem] sm:text-5xl lg:text-6xl text-white font-bold max-w-4xl mx-auto">Complete Project Gallery</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Explore a broader selection of production and concept builds across web, AI, and automation categories.</p>
        </div>

        <div className="fade-in-up flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                activeCategory === category
                  ? 'bg-primary/20 border-primary/40 text-primary-200'
                  : 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredProjects.map((project, index) => (
            <article key={project.title} className="fade-in-up portfolio-item glass-panel" style={{ transitionDelay: `${index * 0.05}s` }}>
              <div className="relative w-full h-52 sm:h-56 lg:h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="portfolio-overlay">
                <h3 className="font-display text-white text-lg">{project.title}</h3>
                <button onClick={() => setActiveProject(project)} className="mt-3 text-left text-sm text-primary-300 hover:text-primary-200">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>

        {activeProject && (
          <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
            <div className="modal-card" onClick={(event) => event.stopPropagation()}>
              <div className="relative w-full h-72 sm:h-96">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 960px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="section-kicker mb-3">Project Detail</p>
                    <h3 className="font-display text-2xl sm:text-3xl text-white">{activeProject.title}</h3>
                    <p className="text-slate-300 mt-2">Category: {activeProject.category}</p>
                  </div>
                  <button onClick={() => setActiveProject(null)} className="text-slate-400 hover:text-white text-sm">CLOSE</button>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.tech.map((item) => (
                    <span key={item} className="text-xs px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary-200">{item}</span>
                  ))}
                </div>
                <a href={activeProject.link} target="_blank" rel="noreferrer" className="inline-block mt-7 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-white font-semibold">
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
