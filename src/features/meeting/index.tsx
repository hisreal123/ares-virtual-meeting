import { useEffect, useState } from 'react'

import type { JoinBackgroundSettings } from '@/features/pre-join'
import type { Meeting } from '@/features/pre-join/types'

import { PARTICIPANT_COUNT } from './config'
// import { NonClosableModal } from './components'
import { MeetingTopBar, VideoGrid } from './components'

// const BLOCKING_MODAL_DELAY_MS = 8000

function useElapsedTime() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  return `${mm}:${ss}`
}

type MeetingPageProps = {
  meeting?: Meeting
  background?: JoinBackgroundSettings
  onLeave?: () => void
}

const DEFAULT_BACKGROUND: JoinBackgroundSettings = { selection: 'none', blurVariant: 'standard' }

export function MeetingPage({ meeting, background = DEFAULT_BACKGROUND, onLeave }: MeetingPageProps) {
  const elapsed = useElapsedTime()
  const [cameraOn, setCameraOn] = useState(false)
  const [micOn, setMicOn] = useState(true)
  // const [showBlockingModal, setShowBlockingModal] = useState(false)

  // useEffect(() => {
  //   const id = setTimeout(() => setShowBlockingModal(true), BLOCKING_MODAL_DELAY_MS)
  //   return () => clearTimeout(id)
  // }, [])

  return (
    <div className="meeting-root flex h-svh w-full flex-col bg-[#1f1f1f]">
      <MeetingTopBar
        elapsed={elapsed}
        participantCount={meeting?.size ?? PARTICIPANT_COUNT}
        onLeave={onLeave}
        cameraOn={cameraOn}
        onToggleCamera={() => setCameraOn((v) => !v)}
        micOn={micOn}
        onToggleMic={() => setMicOn((v) => !v)}
      />
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden">
        <VideoGrid cameraOn={cameraOn} micOn={micOn} meeting={meeting} background={background} />
      </div>
      {/* {showBlockingModal ? <NonClosableModal /> : null} */}
    </div>
  )
}
