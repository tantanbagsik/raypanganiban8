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
      </head>
      <body className="font-body antialiased bg-background-dark text-slate-200 transition-colors duration-300 overflow-x-hidden selection:bg-primary selection:text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
