import { useEffect, useState } from 'react'
import { PARTICIPANT_COUNT } from '../config'
import { MeetingTopBar } from './meeting-top-bar'
import { VideoGrid } from './video-grid'

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
  onLeave?: () => void
}

export function MeetingPage({ onLeave }: MeetingPageProps) {
  const elapsed = useElapsedTime()
  const [cameraOn, setCameraOn] = useState(true)
  const [micOn, setMicOn] = useState(true)

  return (
    <div className="meeting-root flex h-svh w-full flex-col bg-[#1f1f1f]">
      <MeetingTopBar
        elapsed={elapsed}
        participantCount={PARTICIPANT_COUNT}
        onLeave={onLeave}
        cameraOn={cameraOn}
        onToggleCamera={() => setCameraOn((v) => !v)}
        micOn={micOn}
        onToggleMic={() => setMicOn((v) => !v)}
      />
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <VideoGrid cameraOn={cameraOn} micOn={micOn} />
      </div>
    </div>
  )
}
