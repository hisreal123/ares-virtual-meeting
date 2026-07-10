import { useEffect, useState } from 'react'
import type { Meeting } from '@/features/pre-join/types'
import { PARTICIPANT_COUNT } from '../config'
import { useLocalCamera } from '../hooks/use-local-camera'
import { useSpeakingIndicator } from '../hooks/use-speaking-indicator'
import { CameraErrorBanner } from './camera-error-banner'
import { ParticipantTile } from './participant-tile'

const NAME_POOL = ['Priya Sharma', 'Jordan Lee', 'Sam Patel', 'Alex Kim', 'Morgan Reyes', 'Taylor Brooks']

const REMOTE_VIDEO_POOL = [
  '/assets/videos/Jonathan Kwok_AVAX_.mp4',
  '/assets/videos/Video.mp4',
  '/assets/videos/video-1765831500913.mp4',
]

type Participant = {
  id: string
  name: string
  isLocal?: boolean
  muted?: boolean
  videoSrc?: string
}

function buildMockParticipants(micOn: boolean): Participant[] {
  const remoteCount = Math.max(PARTICIPANT_COUNT - 1, 0)
  return [
    { id: 'local', name: 'You', isLocal: true, muted: !micOn },
    ...Array.from({ length: remoteCount }, (_, i) => ({
      id: `mock-${i}`,
      name: NAME_POOL[i % NAME_POOL.length],
      muted: true,
      videoSrc: REMOTE_VIDEO_POOL[i % REMOTE_VIDEO_POOL.length],
    })),
  ]
}

function buildMeetingParticipants(meeting: Meeting, micOn: boolean): Participant[] {
  const remoteCount = Math.max(meeting.size - 1, 0)
  const remoteAssets = meeting.assets.slice(0, remoteCount)
  return [
    { id: 'local', name: 'You', isLocal: true, muted: !micOn },
    ...remoteAssets.map((asset) => ({
      id: String(asset.id),
      name: asset.role?.trim() || asset.owner,
      muted: true,
      videoSrc: `${import.meta.env.VITE_API_URL}${asset.path}`,
    })),
  ]
}

type VideoGridProps = {
  cameraOn: boolean
  micOn: boolean
  meeting?: Meeting
}

export function VideoGrid({ cameraOn, micOn, meeting }: VideoGridProps) {
  const { stream, error: cameraError } = useLocalCamera(cameraOn)
  const [cameraErrorDismissed, setCameraErrorDismissed] = useState(false)

  useEffect(() => {
    if (cameraError) setCameraErrorDismissed(false)
  }, [cameraError])

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {true && !cameraErrorDismissed && (
        <CameraErrorBanner onClose={() => setCameraErrorDismissed(true)} />
      )}
      <VideoGridLayout stream={stream} micOn={micOn} meeting={meeting} />
    </div>
  )
}

type VideoGridLayoutProps = {
  stream: MediaStream | null
  micOn: boolean
  meeting?: Meeting
}

function VideoGridLayout({ stream, micOn, meeting }: VideoGridLayoutProps) {
  const isLocalSpeaking = useSpeakingIndicator(micOn)
  const participants = meeting ? buildMeetingParticipants(meeting, micOn) : buildMockParticipants(micOn)
  const columns = Math.ceil(Math.sqrt(participants.length))
  const [pinnedIds, setPinnedIds] = useState<string[]>([])

  const togglePin = (id: string) =>
    setPinnedIds((prev) => (prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]))

  const pinned = participants.filter((p) => pinnedIds.includes(p.id))
  const others = participants.filter((p) => !pinnedIds.includes(p.id))

  const isPinned = (id: string) => pinnedIds.includes(id)

  const renderThreeLayout = (tiles: Participant[]) => {
    const [a, b, c] = tiles

    return (
      <div className="flex h-full w-full min-h-0 flex-col gap-0.75">
        <div className="flex min-h-0 flex-1 gap-0.75">
          {[a, b].map((participant) => (
            <div key={participant.id} className="min-w-0 flex-1">
              <ParticipantTile
                name={participant.name}
                muted={participant.muted}
                pinned={isPinned(participant.id)}
                onTogglePin={() => togglePin(participant.id)}
                stream={participant.isLocal ? stream : undefined}
                videoSrc={participant.isLocal ? undefined : participant.videoSrc}
                mirror={participant.isLocal}
                speaking={participant.isLocal && isLocalSpeaking}
                fill
              />
            </div>
          ))}
        </div>
        <div className="flex min-h-0 flex-1 justify-center gap-0.75">
          <div className="w-[calc(50%-0.09375rem)]">
            <ParticipantTile
              name={c.name}
              muted={c.muted}
              pinned={isPinned(c.id)}
              onTogglePin={() => togglePin(c.id)}
              stream={c.isLocal ? stream : undefined}
              videoSrc={c.isLocal ? undefined : c.videoSrc}
              mirror={c.isLocal}
              speaking={c.isLocal && isLocalSpeaking}
              fill
            />
          </div>
        </div>
      </div>
    )
  }

  const renderDefaultLayout = () => {
    if (participants.length === 2) {
      const host = participants.find((p) => p.isLocal) ?? participants[0]
      const other = participants.find((p) => p !== host) ?? participants[1]

      return (
        <div className="relative h-full w-full overflow-hidden">
          <ParticipantTile
            name={other.name}
            muted={other.muted}
            pinned={isPinned(other.id)}
            onTogglePin={() => togglePin(other.id)}
            stream={other.isLocal ? stream : undefined}
            videoSrc={other.isLocal ? undefined : other.videoSrc}
            mirror={other.isLocal}
            speaking={other.isLocal && isLocalSpeaking}
            fill
          />
          <div className="absolute right-3 bottom-3 h-28 w-44 shadow-lg">
            <ParticipantTile
              name={host.name}
              muted={host.muted}
              pinned={isPinned(host.id)}
              onTogglePin={() => togglePin(host.id)}
              stream={host.isLocal ? stream : undefined}
              videoSrc={host.isLocal ? undefined : host.videoSrc}
              mirror={host.isLocal}
              speaking={host.isLocal && isLocalSpeaking}
              compact
              fill
            />
          </div>
        </div>
      )
    }

    if (participants.length === 3) {
      return <div className="h-[99%] w-[80%]">{renderThreeLayout(participants)}</div>
    }

    return (
      <div
        className="grid h-[99%] w-[80%] gap-0.75 overflow-hidden rounded-sm"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gridAutoRows: '1fr' }}
      >
        {participants.map((participant) => (
          <ParticipantTile
            key={participant.id}
            name={participant.name}
            muted={participant.muted}
            pinned={isPinned(participant.id)}
            onTogglePin={() => togglePin(participant.id)}
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

  if (pinned.length === 1) {
    const [main] = pinned

    return (
      <div className="flex h-[99%] w-full gap-0.75">
        <div className="h-full min-w-0 flex-1">
          <ParticipantTile
            name={main.name}
            muted={main.muted}
            pinned
            onTogglePin={() => togglePin(main.id)}
            stream={main.isLocal ? stream : undefined}
            videoSrc={main.isLocal ? undefined : main.videoSrc}
            mirror={main.isLocal}
            speaking={main.isLocal && isLocalSpeaking}
            fill
          />
        </div>
        <div className="flex w-56 shrink-0 flex-col justify-center gap-0.75 overflow-y-auto">
          {others.map((participant) => (
            <div key={participant.id} className="relative aspect-video shrink-0 overflow-hidden">
              <div className="absolute inset-0">
                <ParticipantTile
                  name={participant.name}
                  muted={participant.muted}
                  onTogglePin={() => togglePin(participant.id)}
                  stream={participant.isLocal ? stream : undefined}
                  videoSrc={participant.isLocal ? undefined : participant.videoSrc}
                  mirror={participant.isLocal}
                  speaking={participant.isLocal && isLocalSpeaking}
                  compact
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (pinned.length === 2 && others.length > 0) {
    return (
      <div className="flex h-[99%] w-full items-center justify-center gap-0.75">
        <div className="grid h-[536px] w-full grid-cols-2 gap-0.75">
          {pinned.map((participant) => (
            <ParticipantTile
              key={participant.id}
              name={participant.name}
              muted={participant.muted}
              pinned
              onTogglePin={() => togglePin(participant.id)}
              stream={participant.isLocal ? stream : undefined}
              videoSrc={participant.isLocal ? undefined : participant.videoSrc}
              mirror={participant.isLocal}
              speaking={participant.isLocal && isLocalSpeaking}
              fill
            />
          ))}
        </div>
        <div className="flex w-56 shrink-0 flex-col justify-center gap-0.75 overflow-y-auto">
          {others.map((participant) => (
            <div key={participant.id} className="relative aspect-video shrink-0 overflow-hidden">
              <div className="absolute inset-0">
                <ParticipantTile
                  name={participant.name}
                  muted={participant.muted}
                  onTogglePin={() => togglePin(participant.id)}
                  stream={participant.isLocal ? stream : undefined}
                  videoSrc={participant.isLocal ? undefined : participant.videoSrc}
                  mirror={participant.isLocal}
                  speaking={participant.isLocal && isLocalSpeaking}
                  compact
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return renderDefaultLayout()
}
