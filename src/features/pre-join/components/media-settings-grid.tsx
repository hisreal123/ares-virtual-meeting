import type { CameraDevice } from '../hooks/use-camera-devices'
import { AudioPanel } from './audio-panel'
import { CameraPanel } from './camera-panel'
import { JoinActions } from './join-actions'

type MediaSettingsGridProps = {
  devices: CameraDevice[]
  selectedDeviceId: string | null
  onSelectDevice: (deviceId: string) => void
  mirrorVideo: boolean
  onOpenVideoSettings: () => void
  onOpenBackgroundSettings: () => void
  onOpenAudioSettings?: () => void
  onRefreshDevices: () => void
  onJoin?: () => void
}

export function MediaSettingsGrid({
  devices,
  selectedDeviceId,
  onSelectDevice,
  mirrorVideo,
  onOpenVideoSettings,
  onOpenBackgroundSettings,
  onOpenAudioSettings,
  onRefreshDevices,
  onJoin,
}: MediaSettingsGridProps) {
  return (
    <>
      <div className="flex w-[973px] max-w-[calc(100vw-32px)] gap-4">
        <CameraPanel
          devices={devices}
          selectedDeviceId={selectedDeviceId}
          onSelectDevice={onSelectDevice}
          mirrorVideo={mirrorVideo}
          onOpenVideoSettings={onOpenVideoSettings}
          onOpenBackgroundSettings={onOpenBackgroundSettings}
          onRefreshDevices={onRefreshDevices}
        />
        <AudioPanel onOpenAudioSettings={onOpenAudioSettings} />
      </div>
      <JoinActions onJoin={onJoin} />
    </>
  )
}
