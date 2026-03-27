'use client'

import { useEffect, useState } from 'react'

export default function ElevenLabsWidget() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadWidget = () => {
      const existingScript = document.querySelector('script[src*="elevenlabs"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
        script.async = true
        script.onload = () => setIsLoaded(true)
        document.head.appendChild(script)
      } else {
        setIsLoaded(true)
      }
    }

    loadWidget()
  }, [])

  if (!isLoaded) {
    return null
  }

  return (
    <elevenlabs-convai 
      agent-id="agent_3b68f10d9e5d5c7e1f5651a9a7"
      api-key="vck_0Oa7w32RSbQKrsSJ2dsPPJqdemF28XPqQa4FHPXmZMDsCUJiV72Fa87t"
    ></elevenlabs-convai>
  )
}
