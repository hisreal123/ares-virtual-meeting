import { useState } from 'react'
import { PARTICIPANT_COUNT } from '../config'
import { useLocalCamera } from '../hooks/use-local-camera'
import { useSpeakingIndicator } from '../hooks/use-speaking-indicator'
import { ParticipantTile } from './participant-tile'

const NAME_POOL = ['Priya Sharma', 'Jordan Lee', 'Sam Patel', 'Alex Kim', 'Morgan Reyes', 'Taylor Brooks']

const REMOTE_VIDEO_POOL = [
  '/assets/videos/Jonathan Kwok_AVAX_.mp4',
  '/assets/videos/Video.mp4',
  '/assets/videos/video-1765831500913.mp4',
]

type Participant = {
  name: string
  isLocal?: boolean
  muted?: boolean
  videoSrc?: string
}

function useParticipants(micOn: boolean): Participant[] {
  const remoteCount = Math.max(PARTICIPANT_COUNT - 1, 0)
  return [
    { name: 'You', isLocal: true, muted: !micOn },
    ...Array.from({ length: remoteCount }, (_, i) => ({
      name: NAME_POOL[i % NAME_POOL.length],
      muted: true,
      videoSrc: REMOTE_VIDEO_POOL[i % REMOTE_VIDEO_POOL.length],
    })),
  ]
}

type VideoGridProps = {
  cameraOn: boolean
  micOn: boolean
}

export function VideoGrid({ cameraOn, micOn }: VideoGridProps) {
  const stream = useLocalCamera(cameraOn)
  const isLocalSpeaking = useSpeakingIndicator(micOn)
  const participants = useParticipants(micOn)
  const columns = Math.ceil(Math.sqrt(participants.length))
  const [pinnedName, setPinnedName] = useState<string | null>(null)

  const togglePin = (name: string) => setPinnedName((prev) => (prev === name ? null : name))

  if (pinnedName) {
    const pinned = participants.find((p) => p.name === pinnedName)
    const others = participants.filter((p) => p.name !== pinnedName)

    if (pinned) {
      return (
        <div className="flex h-[99%] w-full gap-0.75">
          <div className="min-w-0 flex-1">
            <ParticipantTile
              name={pinned.name}
              muted={pinned.muted}
              pinned
              onTogglePin={() => togglePin(pinned.name)}
              stream={pinned.isLocal ? stream : undefined}
              videoSrc={pinned.isLocal ? undefined : pinned.videoSrc}
              mirror={pinned.isLocal}
              speaking={pinned.isLocal && isLocalSpeaking}
              fill
            />
          </div>
          <div className="flex w-56 shrink-0 flex-col justify-center gap-0.75 overflow-y-auto">
            {others.map((participant) => (
              <div key={participant.name} className="aspect-video shrink-0">
                <ParticipantTile
                  name={participant.name}
                  muted={participant.muted}
                  onTogglePin={() => togglePin(participant.name)}
                  stream={participant.isLocal ? stream : undefined}
                  videoSrc={participant.isLocal ? undefined : participant.videoSrc}
                  mirror={participant.isLocal}
                  speaking={participant.isLocal && isLocalSpeaking}
                  compact
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      )
    }
  }

  return (
    <div
      className="grid h-[99%] w-[80%] gap-0.75 overflow-hidden rounded-sm"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gridAutoRows: '1fr' }}
    >
      {participants.map((participant) => (
        <ParticipantTile
          key={participant.name}
          name={participant.name}
          muted={participant.muted}
          onTogglePin={() => togglePin(participant.name)}
          stream={participant.isLocal ? stream : undefined}
          videoSrc={participant.isLocal ? undefined : participant.videoSrc}
          mirror={participant.isLocal}
          speaking={participant.isLocal && isLocalSpeaking}
          fill
        />
      ))}
    </div>
  )
}
