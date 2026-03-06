const services = [
  {
    title: 'Full Stack Engineering',
    badge: 'WEB3.0',
    description: 'Building scalable, robust web applications from intuitive frontends to complex backend infrastructures using modern frameworks.',
    features: ['SPA Development', 'API Integration', 'Database Design'],
  },
  {
    title: 'AI Solutions',
    badge: 'CORE',
    description: 'Integrating advanced AI models to create intelligent chatbots, predictive systems, and automated content generation workflows.',
    features: ['LLM Integration', 'Neural Networks', 'Smart Agents'],
  },
  {
    title: 'Automation',
    badge: 'BOTS',
    description: 'Streamlining business processes with custom bots, scrapers, and workflow automation tools to save time and resources.',
    features: ['Browser Automation', 'Data Extraction', 'Workflow Scripts'],
  },
  {
    title: 'Design',
    badge: 'UI/UX',
    description: 'Creating stunning visual experiences from wireframes to polished interfaces that captivate users.',
    features: ['Figma', 'Brand Identity', 'Motion Graphics'],
  },
]

const tools = [
  'react',
  'nextjs',
  'typescript',
  'python',
  'fastapi',
  'nodejs',
  'tailwind',
  'docker',
  'postgresql',
  'mongodb',
  'redis',
  'openai',
]

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up mb-10 sm:mb-12 text-center">
          <p className="text-primary-400 uppercase tracking-[0.25em] text-xs mb-4">EXPERIENCE DATABASE</p>
          <h2 className="font-display text-[2rem] sm:text-5xl lg:text-6xl text-white font-bold">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <article key={service.title} className="fade-in-up rounded-2xl glass-panel p-6 card-hover min-h-[240px]" style={{ transitionDelay: `${index * 0.08}s` }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl text-white">{service.title}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary-300">{service.badge}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span key={feature} className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-300 bg-black/30">{feature}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="fade-in-up mt-10 rounded-2xl glass-panel p-6" style={{ transitionDelay: '0.3s' }}>
          <p className="text-slate-300 mb-5">Tools Inventory</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div key={tool} className="rounded-xl border border-slate-800 bg-black/30 p-4 flex flex-col items-center gap-2 card-hover">
                <img src={`/images/tools/${tool}.svg`} alt={tool} className="w-9 h-9" />
                <span className="text-xs text-slate-400 uppercase">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
