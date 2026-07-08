import { useEffect, useState } from 'react'

import { TeamsLogo } from '@/components/teams-logo'

const MESSAGE_DELAY_MS = 5000

export function SplashScreen() {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), MESSAGE_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center gap-4 bg-background">
      <TeamsLogo
        size={150}
        className="animate-in slide-in-from-bottom-6 fade-in duration-700"
      />
      <p
        className={`mt-3 text-center text-xs font-semibold text-[#2424248d] ${
          showMessage
            ? 'animate-in slide-in-from-bottom-6 fade-in duration-500'
            : 'invisible'
        }`}
      >
        We&apos;re setting things up for you...
      </p>
    </div>
  )
}
