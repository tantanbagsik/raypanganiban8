'use client'

import { useEffect } from 'react'

export default function ElevenLabsWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <elevenlabs-convai 
      agent-id="agent_6501kmp5v1rrec8snxkwnn13q4sr"
      api-key="vck_0Oa7w32RSbQKrsSJ2dsPPJqdemF28XPqQa4FHPXmZMDsCUJiV72Fa87t"
    ></elevenlabs-convai>
  )
}
