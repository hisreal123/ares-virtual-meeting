import type { MediaDeviceOption } from '../hooks/use-media-devices'
import { PrejoinRadio } from './prejoin-radio'

type MicDeviceMenuProps = {
  devices: MediaDeviceOption[]
  selectedDeviceId: string | null
  onSelectDevice: (deviceId: string) => void
  onOpenAudioSettings?: () => void
}

export function MicDeviceMenu({
  devices,
  selectedDeviceId,
  onSelectDevice,
  onOpenAudioSettings,
}: MicDeviceMenuProps) {
  return (
    <>
      <p className="m-0 px-1.5 pb-1 text-[13px] font-normal text-[#242424]">
        Microphone
      </p>
      <div role="radiogroup" aria-label="Microphone">
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
