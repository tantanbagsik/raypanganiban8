const leftTop = ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Chrome Extensions', 'Web3']
const leftBottom = ['LLMs / GPT', 'LangChain', 'RAG', 'Vector DB', 'AI Agents']
const rightTop = ['Python / FastAPI', 'Django', 'Node.js', 'PostgreSQL', 'Supabase', 'REST API', 'Docker']
const rightBottom = ['Figma', '3D Design', 'Mobile-First', 'UI/UX']

function Spark({ color = '#60a5fa' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1.4L8.15 5.85L12.6 7L8.15 8.15L7 12.6L5.85 8.15L1.4 7L5.85 5.85L7 1.4Z" stroke={color} strokeWidth="1.2" />
    </svg>
  )
}

function Chip({ label, className = '', icon = null, delay = 0 }) {
  return (
    <span className={`skill-chip ${className}`} style={{ animationDelay: `${delay * 0.14}s` }}>
      {icon}
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up mb-10 sm:mb-12 text-center">
          <p className="section-kicker mb-4">EXPERIENCE</p>
          <h2 className="font-display text-[2rem] sm:text-5xl lg:text-6xl text-white font-bold">Database</h2>
        </div>

        <div className="fade-in-up expertise-shell">
          <div className="expertise-col expertise-col-left">
            <div className="chip-grid chip-grid-tight">
              {leftTop.map((item, index) => (
                <Chip key={item} label={item} className="chip-float" delay={index} />
              ))}
            </div>
            <p className="expertise-label expertise-label-blue">FRONTEND SYSTEMS</p>

            <div className="chip-grid chip-grid-loose mt-10">
              {leftBottom.map((item, index) => (
                <Chip
                  key={item}
                  label={item}
                  icon={item === 'LLMs / GPT' ? <Spark color="#60a5fa" /> : null}
                  className={`chip-float ${item === 'LLMs / GPT' ? 'skill-chip-accent-blue' : ''}`}
                  delay={index + 2}
                />
              ))}
            </div>
            <p className="expertise-label expertise-label-blue mt-4">MACHINE LEARNING &amp; AUTOMATION</p>
          </div>

          <div className="expertise-core-wrap" aria-hidden="true">
            <div className="expertise-core">
              <div className="expertise-dot"></div>
              <div className="expertise-core-inner">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M8.5 7.5C8.5 5.57 10.07 4 12 4C13.93 4 15.5 5.57 15.5 7.5V8.2C16.7 8.6 17.6 9.7 17.6 11V13.5C17.6 15.71 15.81 17.5 13.6 17.5H10.4C8.19 17.5 6.4 15.71 6.4 13.5V11C6.4 9.7 7.3 8.6 8.5 8.2V7.5Z" stroke="#E5E7EB" strokeWidth="1.4" />
                  <path d="M5 10L3 12L5 14M19 10L21 12L19 14M12 4V2M9 20L8 22M15 20L16 22" stroke="#E5E7EB" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                <p className="font-display text-white text-4xl sm:text-5xl font-bold tracking-[0.03em]">EXPERIENCE</p>
                <p className="text-slate-400 tracking-[0.25em] text-xs sm:text-sm">DATABASE</p>
              </div>
            </div>
          </div>

          <div className="expertise-col expertise-col-right">
            <div className="chip-grid chip-grid-tight chip-grid-right">
              {rightTop.map((item, index) => (
                <Chip key={item} label={item} className="chip-float" delay={index + 1} />
              ))}
            </div>
            <p className="expertise-label expertise-label-red">BACKEND LOGIC</p>

            <div className="chip-grid chip-grid-loose chip-grid-right mt-10">
              {rightBottom.map((item, index) => (
                <Chip
                  key={item}
                  label={item}
                  icon={item === 'Figma' ? <Spark color="#f87171" /> : null}
                  className={`chip-float ${item === 'Figma' ? 'skill-chip-accent-red' : ''}`}
                  delay={index + 3}
                />
              ))}
            </div>
            <p className="expertise-label expertise-label-red mt-4">DESIGN</p>
          </div>
        </div>
      </div>
    </section>
  )
}
