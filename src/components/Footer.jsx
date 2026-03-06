export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-900 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">© 2026. All systems operational.</p>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <a href="https://x.com/ManaevLab" target="_blank" rel="noreferrer" className="hover:text-white">X</a>
          <a href="https://www.youtube.com/@AntonManaev" target="_blank" rel="noreferrer" className="hover:text-white">YouTube</a>
          <a href="https://www.tiktok.com/@antonmanaev.name" target="_blank" rel="noreferrer" className="hover:text-white">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
