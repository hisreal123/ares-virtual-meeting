import { useState } from 'react'
import type { Meeting } from '@/features/pre-join/types'
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

function buildMockParticipants(micOn: boolean): Participant[] {
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

function buildMeetingParticipants(meeting: Meeting, micOn: boolean): Participant[] {
  const remoteCount = Math.max(meeting.size - 1, 0)
  const remoteAssets = meeting.assets.slice(0, remoteCount)
  return [
    { name: 'You', isLocal: true, muted: !micOn },
    ...remoteAssets.map((asset) => ({
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
  const stream = useLocalCamera(cameraOn)
  const isLocalSpeaking = useSpeakingIndicator(micOn)
  const participants = meeting ? buildMeetingParticipants(meeting, micOn) : buildMockParticipants(micOn)
  const columns = Math.ceil(Math.sqrt(participants.length))
  const [pinnedNames, setPinnedNames] = useState<string[]>([])

  const togglePin = (name: string) =>
    setPinnedNames((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]))

  const pinned = participants.filter((p) => pinnedNames.includes(p.name))
  const others = participants.filter((p) => !pinnedNames.includes(p.name))

  const renderThreeLayout = (tiles: Participant[], isPinned: boolean) => {
    const [a, b, c] = tiles

    return (
      <div className="flex h-full w-full min-h-0 flex-col gap-0.75">
        <div className="flex min-h-0 flex-1 gap-0.75">
          {[a, b].map((participant) => (
            <div key={participant.name} className="min-w-0 flex-1">
              <ParticipantTile
                name={participant.name}
                muted={participant.muted}
                pinned={isPinned}
                onTogglePin={() => togglePin(participant.name)}
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
              pinned={isPinned}
              onTogglePin={() => togglePin(c.name)}
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

  if (pinned.length === 1) {
    const [main] = pinned

    return (
      <div className="flex h-[99%] w-full gap-0.75">
        <div className="h-full min-w-0 flex-1">
          <ParticipantTile
            name={main.name}
            muted={main.muted}
            pinned
            onTogglePin={() => togglePin(main.name)}
            stream={main.isLocal ? stream : undefined}
            videoSrc={main.isLocal ? undefined : main.videoSrc}
            mirror={main.isLocal}
            speaking={main.isLocal && isLocalSpeaking}
            fill
          />
        </div>
        <div className="flex w-56 shrink-0 flex-col justify-center gap-0.75 overflow-y-auto">
          {others.map((participant) => (
            <div key={participant.name} className="relative aspect-video shrink-0 overflow-hidden">
              <div className="absolute inset-0">
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
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (pinned.length === 3) {
    if (others.length === 0) {
      return <div className="h-[99%] w-[80%]">{renderThreeLayout(pinned, true)}</div>
    }

    return (
      <div className="flex h-[99%] w-full gap-0.75">
        <div className="h-full min-w-0 flex-1">{renderThreeLayout(pinned, true)}</div>
        <div className="flex w-56 shrink-0 flex-col justify-center gap-0.75 overflow-y-auto">
          {others.map((participant) => (
            <div key={participant.name} className="relative aspect-video shrink-0 overflow-hidden">
              <div className="absolute inset-0">
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
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (pinned.length >= 2) {
    const pinnedColumns = Math.ceil(Math.sqrt(pinned.length))

    return (
      <div className="flex h-[99%] w-full items-center justify-center gap-0.75">
        <div
          className="grid h-[536px] w-full gap-0.75"
          style={{ gridTemplateColumns: `repeat(${pinnedColumns}, minmax(0, 1fr))`, gridAutoRows: '1fr' }}
        >
          {pinned.map((participant) => (
            <ParticipantTile
              key={participant.name}
              name={participant.name}
              muted={participant.muted}
              pinned
              onTogglePin={() => togglePin(participant.name)}
              stream={participant.isLocal ? stream : undefined}
              videoSrc={participant.isLocal ? undefined : participant.videoSrc}
              mirror={participant.isLocal}
              speaking={participant.isLocal && isLocalSpeaking}
              fill
            />
          ))}
        </div>
        {others.length > 0 && (
          <div className="flex w-56 shrink-0 flex-col justify-center gap-0.75 overflow-y-auto">
            {others.map((participant) => (
              <div key={participant.name} className="relative aspect-video shrink-0 overflow-hidden">
                <div className="absolute inset-0">
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
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (participants.length === 2) {
    const host = participants.find((p) => p.isLocal) ?? participants[0]
    const other = participants.find((p) => p !== host) ?? participants[1]

    return (
      <div className="relative h-full w-full overflow-hidden">
        <ParticipantTile
          name={other.name}
          muted={other.muted}
          onTogglePin={() => togglePin(other.name)}
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
            onTogglePin={() => togglePin(host.name)}
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
    return <div className="h-[99%] w-[80%]">{renderThreeLayout(participants, false)}</div>
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
