export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up mb-10 sm:mb-12 text-center">
          <p className="text-primary-400 uppercase tracking-[0.25em] text-xs mb-4">About Me</p>
          <h2 className="font-display text-[2rem] sm:text-5xl lg:text-6xl text-white font-bold leading-tight">Architecting the <span className="gradient-text">Intelligent Web</span></h2>
          <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-lg">This website was built in just 2 days. Imagine what&apos;s possible with more time...</p>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-6 sm:gap-8 items-start">
          <div className="fade-in-up rounded-2xl glass-panel p-6 card-hover" style={{ transitionDelay: '0.1s' }}>
            <img src="/images/logo/avatar.jpg" alt="Anton Manaev" className="w-full aspect-square object-cover rounded-xl" />
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-green-400">Available for Hire</p>
              <p className="text-slate-400">Global Remote</p>
            </div>
          </div>

          <div className="fade-in-up rounded-2xl glass-panel p-8" style={{ transitionDelay: '0.2s' }}>
            <p className="text-slate-300 leading-relaxed">
              I am a <span className="text-white font-semibold">Full Stack Developer</span>, <span className="text-white font-semibold">AI Specialist</span>, and{' '}
              <span className="text-white font-semibold">Designer</span> focused on building the next generation of digital products. My work sits at the intersection
              of elegant code, thoughtful design, and neural automation.
            </p>
            <p className="text-slate-400 leading-relaxed mt-6">
              With extensive experience in <span className="text-cyan-400">Python</span> and <span className="text-primary">React</span> ecosystems, I don&apos;t just
              build applications-I engineer living systems that learn, adapt, and scale.
            </p>

            <div className="mt-8 grid sm:grid-cols-4 gap-4">
              <div className="rounded-xl bg-black/30 border border-slate-800 p-4">
                <p className="font-display text-2xl text-white">17+</p>
                <p className="text-xs text-slate-400">Years Exp</p>
              </div>
              <div className="rounded-xl bg-black/30 border border-slate-800 p-4">
                <p className="font-display text-2xl text-white">300+</p>
                <p className="text-xs text-slate-400">Projects</p>
              </div>
              <div className="rounded-xl bg-black/30 border border-slate-800 p-4">
                <p className="font-display text-2xl text-white">24/7</p>
                <p className="text-xs text-slate-400">Availability</p>
              </div>
              <div className="rounded-xl bg-black/30 border border-slate-800 p-4">
                <p className="font-display text-2xl text-white">5.0</p>
                <p className="text-xs text-slate-400">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
