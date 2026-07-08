import { Slider } from '@/components/ui/slider'

import type { MediaDeviceOption } from '../hooks/use-media-devices'
import { SpeakerIcon } from '../icons'
import { PrejoinRadio } from './prejoin-radio'

type SpeakerDeviceMenuProps = {
  devices: MediaDeviceOption[]
  selectedDeviceId: string | null
  onSelectDevice: (deviceId: string) => void
  volume: number
  onVolumeChange: (volume: number) => void
  onOpenAudioSettings?: () => void
}

export function SpeakerDeviceMenu({
  devices,
  selectedDeviceId,
  onSelectDevice,
  volume,
  onVolumeChange,
  onOpenAudioSettings,
}: SpeakerDeviceMenuProps) {
  return (
    <>
      <p className="m-0 px-1.5 pb-1 text-[13px] font-normal text-[#242424]">
        Speaker
      </p>
      <div role="radiogroup" aria-label="Speaker">
        {devices.length === 0 ? (
          <div className="flex w-full items-center gap-2.5 px-1.5 py-2 text-left text-[13px] text-teams-subtle">
            <PrejoinRadio disabled selected />
            <span className="truncate">None</span>
          </div>
        ) : (
          devices.map((device) => (
            <button
              key={device.deviceId}
              type="button"
              role="radio"
              aria-checked={device.deviceId === selectedDeviceId}
              onClick={() => onSelectDevice(device.deviceId)}
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-sm border-0 bg-transparent px-1.5 py-2 text-left text-[13px] text-[#242424] hover:bg-[#f5f5f5]"
            >
              <PrejoinRadio selected={device.deviceId === selectedDeviceId} />
              <span className="truncate">{device.label}</span>
            </button>
          ))
        )}
      </div>

      <div className="flex items-center gap-2.5 px-1.5 py-2">
        <SpeakerIcon />
        <Slider
          aria-label="Volume"
          value={[volume]}
          onValueChange={(value) => onVolumeChange(Array.isArray(value) ? value[0] : value)}
          className="flex-1"
        />
      </div>

      {onOpenAudioSettings ? (
        <>
          <div className="h-px w-full bg-teams-border" aria-hidden />
          <button
            type="button"
            onClick={onOpenAudioSettings}
            className="w-full cursor-pointer border-0 bg-transparent px-1.5 py-1.5 text-left text-[13px] text-[#242424] hover:bg-[#f5f5f5]"
          >
            More audio settings
          </button>
        </>
      ) : null}
    </>
  )
}
