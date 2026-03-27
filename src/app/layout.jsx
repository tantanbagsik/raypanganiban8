import './globals.css'
import { Space_Grotesk, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'Ray Panganiban - Full Stack Developer, AI & Automation Solutions',
  description: 'Crafting intelligent digital ecosystems where human creativity meets artificial intelligence. 17+ years of experience in full-stack development, AI integration, and automation solutions.',
  keywords: 'Full Stack Developer,AI Solutions,Automation,Web Development,React,Next.js,Python,FastAPI,Machine Learning,Ray Panganiban',
  author: 'Ray Panganiban',
}

export const viewport = {
  themeColor: '#050505',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable} dark`}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      </head>
      <body className="font-body antialiased bg-background-dark text-slate-200 transition-colors duration-300 overflow-x-hidden selection:bg-primary selection:text-white">
        <elevenlabs-convai agent-id="agent_8101kmpnp2nff0ts5vcrzxxfe16y" api-key="sk_e36fabf76b548b8248da831c6a9bd6b2b31e50b42e48c389"></elevenlabs-convai>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
