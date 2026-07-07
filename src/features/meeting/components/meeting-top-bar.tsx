import {
  ChatFilledIcon,
  ChatIcon,
  EncryptionIcon,
  MoreIcon,
  PeopleFilledIcon,
  PeopleIcon,
  RaiseHandFilledIcon,
  RaiseHandIcon,
  ReactFilledIcon,
  ReactIcon,
  ViewFilledIcon,
  ViewIcon,
} from '../icons'
import { MeetingToolbar } from './meeting-toolbar'
import { ToolbarButton } from './toolbar-button'

type MeetingTopBarProps = {
  elapsed: string
  participantCount: number
  onLeave?: () => void
  cameraOn: boolean
  onToggleCamera: () => void
  micOn: boolean
  onToggleMic: () => void
}

export function MeetingTopBar({
  elapsed,
  participantCount,
  onLeave,
  cameraOn,
  onToggleCamera,
  micOn,
  onToggleMic,
}: MeetingTopBarProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-[#292929] px-3 py-1">
      <div className="flex items-center gap-2 text-white/90">
        <button
          type="button"
          aria-label="Encryption status"
          className="flex size-8 cursor-pointer items-center justify-center rounded border-0 bg-transparent text-white/90 hover:bg-white/10"
        >
          <EncryptionIcon size={26} />
        </button>
        <span className="text-[13px] tabular-nums">{elapsed}</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <ToolbarButton
            icon={<ChatIcon size={26} />}
            filledIcon={<ChatFilledIcon size={26} />}
            label="Chat"
          />
          <ToolbarButton
            icon={<PeopleIcon size={26} />}
            filledIcon={<PeopleFilledIcon size={26} />}
            label="People"
            badge={participantCount}
          />
          <ToolbarButton
            icon={<RaiseHandIcon size={26} />}
            filledIcon={<RaiseHandFilledIcon size={26} />}
            label="Raise"
          />
          <ToolbarButton
            icon={<ReactIcon size={26} />}
            filledIcon={<ReactFilledIcon size={26} />}
            label="React"
          />
          <ToolbarButton
            icon={<ViewIcon size={26} />}
            filledIcon={<ViewFilledIcon size={26} />}
            label="View"
          />
          <ToolbarButton icon={<MoreIcon size={26} />} label="More" />
        </div>
        <div className="h-6 w-px bg-white/15" aria-hidden />
        <MeetingToolbar
          onLeave={onLeave}
          cameraOn={cameraOn}
          onToggleCamera={onToggleCamera}
          micOn={micOn}
          onToggleMic={onToggleMic}
        />
      </div>
    </div>
  )
}
