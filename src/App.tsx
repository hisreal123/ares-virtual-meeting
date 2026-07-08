import { useEffect, useState } from 'react'
import { Router } from '@/Router'
import { SplashScreen } from '@/components/splash-screen'

const SPLASH_DURATION_MS = 10000

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <SplashScreen />
  }

  return <Router />
}

export default App
