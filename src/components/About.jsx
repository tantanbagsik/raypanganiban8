import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up mb-10 sm:mb-12 text-center">
          <p className="text-primary-400 uppercase tracking-[0.25em] text-xs mb-4">About Me</p>
          <h2 className="font-display text-[2rem] sm:text-5xl lg:text-6xl text-white font-bold leading-tight">Architecting the <span className="gradient-text">Intelligent Web</span></h2>
          <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-lg">This website was built in just 2 days. Imagine what&apos;s possible with more time...</p>
        </div>

        <div className="grid lg:grid-cols-[42%_1fr] gap-5 sm:gap-7 items-stretch">
          <div className="fade-in-up about-portrait-card" style={{ transitionDelay: '0.1s' }}>
            <div className="scan-status">Systems Online</div>
            <div className="scan-frame">
              <Image
                src="/images/logo/avatar.png"
                alt="Ray Panganiban"
                width={800}
                height={980}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="scan-photo"
              />
              <div className="scan-line"></div>
              <div className="scan-vignette"></div>
            </div>
            <div className="about-identity">
              <span className="about-availability">AVAILABLE FOR HIRE</span>
              <h3 className="font-display text-white text-4xl sm:text-5xl mt-4">Ray Panganiban</h3>
              <p className="text-slate-300 text-2xl sm:text-3xl mt-2">Global Remote</p>
            </div>
          </div>

          <div className="fade-in-up about-detail-card" style={{ transitionDelay: '0.2s' }}>
            <h3 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
              Architecting the <span className="gradient-text">Intelligent Web</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg sm:text-xl">
              I am a <span className="text-white font-semibold">Full Stack Developer</span>, <span className="text-white font-semibold">AI Specialist</span>, and{' '}
              <span className="text-white font-semibold">Designer</span> focused on building the next generation of digital products. My work sits at the intersection
              of elegant code, thoughtful design, and neural automation.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg sm:text-xl mt-6 sm:mt-8">
              With extensive experience in <span className="text-cyan-400">Python</span> and <span className="text-primary">React</span> ecosystems, I don&apos;t just
              build applications-I engineer living systems that learn, adapt, and scale.
            </p>

            <div className="about-stats-grid mt-8 sm:mt-10">
              <div>
                <p className="font-display text-white text-5xl">17+</p>
                <p className="about-stat-label">YEARS EXP</p>
              </div>
              <div>
                <p className="font-display text-white text-5xl">100+</p>
                <p className="about-stat-label">PROJECTS</p>
              </div>
              <div>
                <p className="font-display text-white text-5xl">24/7</p>
                <p className="about-stat-label">AVAILABILITY</p>
              </div>
              <div>
                <p className="font-display text-white text-5xl">5★</p>
                <p className="about-stat-label">RATING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
