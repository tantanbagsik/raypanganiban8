export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="fade-in-up rounded-2xl glass-panel p-8">
          <p className="text-primary-400 uppercase tracking-[0.25em] text-xs mb-4">Contact</p>
          <h2 className="font-display text-[2rem] sm:text-5xl lg:text-6xl text-white font-bold">Let&apos;s Sync.</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Bridging human intent with artificial intelligence. Send a signal to initiate collaboration on your next breakthrough.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a className="block text-slate-300 hover:text-white" href="mailto:antonmanaev@mail.com">antonmanaev@mail.com</a>
            <a className="block text-slate-300 hover:text-white" href="https://www.linkedin.com/in/anton-manaev-dev/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="block text-slate-300 hover:text-white" href="https://github.com/xglukx" target="_blank" rel="noreferrer">GitHub</a>
            <a className="block text-slate-300 hover:text-white" href="https://t.me/AntonManaevLab" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>

        <form className="fade-in-up rounded-2xl glass-panel p-8 space-y-4" style={{ transitionDelay: '0.1s' }}>
          <label className="block text-sm text-slate-300">
            Identify Yourself / Entity
            <input className="mt-2 w-full rounded-lg border border-slate-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary" placeholder="Your name" />
          </label>
          <label className="block text-sm text-slate-300">
            Email Address
            <input type="email" className="mt-2 w-full rounded-lg border border-slate-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary" placeholder="you@example.com" />
          </label>
          <label className="block text-sm text-slate-300">
            Message Payload
            <textarea rows="5" className="mt-2 w-full rounded-lg border border-slate-700 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary" placeholder="Tell me about your project..." />
          </label>
          <button type="button" className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent-purple text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Transmit Signal
          </button>
          <p className="text-xs text-slate-500">256-bit AES Encryption Active</p>
        </form>
      </div>
    </section>
  )
}
