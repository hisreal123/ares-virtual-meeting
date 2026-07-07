import {
  CameraOffIcon,
  CameraOnIcon,
  ChevronDownIcon,
  LeaveIcon,
  MicMutedIcon,
  MicOnIcon,
  ShareIcon,
} from '../icons'

type SplitToggleProps = {
  on: boolean
  onToggle: () => void
  onIcon: React.ReactNode
  offIcon: React.ReactNode
  label: string
  onLabel: string
  offLabel: string
  menuLabel: string
}

function SplitToggle({
  on,
  onToggle,
  onIcon,
  offIcon,
  label,
  onLabel,
  offLabel,
  menuLabel,
}: SplitToggleProps) {
  return (
    <div className="flex items-center rounded">
      <button
        type="button"
        onClick={onToggle}
        aria-label={on ? onLabel : offLabel}
        aria-pressed={on}
        className="flex h-11 min-w-14 cursor-pointer flex-col items-center justify-center gap-0.5 rounded border-0 bg-transparent px-2 text-[11px] leading-none text-white/85 hover:bg-white/10"
      >
        {on ? onIcon : offIcon}
        <span>{label}</span>
      </button>
      <button
        type="button"
        aria-label={menuLabel}
        aria-haspopup="menu"
        className="flex h-11 w-5 items-center justify-center self-stretch border-0 bg-transparent text-white/70 hover:bg-white/10"
      >
        <ChevronDownIcon size={12} />
      </button>
    </div>
  )
}

type MeetingToolbarProps = {
  onLeave?: () => void
  cameraOn: boolean
  onToggleCamera: () => void
  micOn: boolean
  onToggleMic: () => void
}

export function MeetingToolbar({
  onLeave,
  cameraOn,
  onToggleCamera,
  micOn,
  onToggleMic,
}: MeetingToolbarProps) {
  return (
    <div className="flex items-center gap-1">
      <SplitToggle
        on={cameraOn}
        onToggle={onToggleCamera}
        onIcon={<CameraOnIcon size={18} />}
        offIcon={<CameraOffIcon size={18} />}
        label="Camera"
        onLabel="Turn camera off"
        offLabel="Turn camera on"
        menuLabel="Video options"
      />

      <SplitToggle
        on={micOn}
        onToggle={onToggleMic}
        onIcon={<MicOnIcon size={18} />}
        offIcon={<MicMutedIcon size={18} />}
        label="Mic"
        onLabel="Mute mic"
        offLabel="Unmute mic"
        menuLabel="Audio options"
      />

      <button
        type="button"
        aria-label="Share"
        className="flex h-11 min-w-14 cursor-pointer flex-col items-center justify-center gap-0.5 rounded border-0 bg-transparent px-2 text-[11px] leading-none text-white/85 hover:bg-white/10"
      >
        <ShareIcon size={18} />
        <span>Share</span>
      </button>

      <button
        type="button"
        aria-label="Leave"
        onClick={onLeave}
        className="ml-1 flex h-8 items-center gap-1.5 rounded bg-[#c4314b] px-3 text-[13px] font-semibold text-white hover:bg-[#a92d43]"
      >
        <LeaveIcon size={16} />
        <span>Leave</span>
      </button>
    </div>
  )
}
