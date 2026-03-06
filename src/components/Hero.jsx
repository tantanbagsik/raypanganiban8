export default function Hero() {
  return (
    <section className="min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] lg:min-h-screen flex items-center pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6 sm:space-y-8 max-w-2xl">
            <div className="fade-in-up inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 rounded-full shadow-[0_0_24px_rgba(59,130,246,0.15)]">
              <span className="w-2 h-2 bg-green-400 rounded-full badge-pulse"></span>
              <span className="text-primary-400 text-xs sm:text-sm font-medium tracking-[0.04em] sm:tracking-normal">Creative. Efficient. Advanced.</span>
            </div>

            <h1 className="fade-in-up font-display text-[2.15rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05]" style={{ transitionDelay: '0.1s' }}>
              AI-Driven <span className="gradient-text">Design</span><br />
              Full Stack Development<br />
              AI Integration
            </h1>

            <p className="fade-in-up text-slate-400 text-[0.96rem] sm:text-lg max-w-2xl leading-relaxed sm:leading-relaxed" style={{ transitionDelay: '0.2s' }}>
              Crafting intelligent digital ecosystems where human creativity meets artificial intelligence.
              Advanced automation for the next generation of web.
            </p>

            <div className="fade-in-up flex flex-wrap gap-3 sm:gap-4" style={{ transitionDelay: '0.3s' }}>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-accent-purple text-white font-semibold rounded-lg hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg shadow-primary/25 text-sm tracking-[0.08em]"
              >
                INITIATE SYSTEM
              </a>
              <a
                href="#portfolio"
                className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-400 hover:bg-white/5 transition-all text-sm tracking-[0.08em]"
              >
                VIEW PORTFOLIO
              </a>
            </div>

            <div className="fade-in-up flex flex-wrap gap-5 sm:gap-8 pt-4 sm:pt-5" style={{ transitionDelay: '0.4s' }}>
              <div>
                <div className="font-display text-3xl font-bold text-white">17+</div>
                <div className="text-slate-500 text-sm">Years Exp</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-white">300+</div>
                <div className="text-slate-500 text-sm">Projects</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-white">24/7</div>
                <div className="text-slate-500 text-sm">Availability</div>
              </div>
            </div>

            <p className="fade-in-up text-[0.68rem] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] text-slate-500" style={{ transitionDelay: '0.5s' }}>
              Scroll to explore
            </p>
          </div>

          <div className="fade-in-up flex justify-center lg:justify-end" style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              <div className="avatar-glow"></div>
              <div className="relative w-60 h-60 sm:w-80 sm:h-80 lg:w-[23rem] lg:h-[23rem]">
                <img
                  src="/images/logo/avatar.jpg"
                  alt="Anton Manaev"
                  className="w-full h-full object-cover rounded-full relative z-10 border-4 border-background-card"
                />
                <div className="avatar-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
