import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import type { CameraDevice } from '../hooks/use-camera-devices'
import { useMediaDevices } from '../hooks/use-media-devices'
import type { MediaDeviceOption } from '../hooks/use-media-devices'
import { InfoTooltip } from './info-tooltip'
import { PrejoinSwitch } from './prejoin-switch'
import { SettingsBarShell } from './settings-bar-shell'

type DeviceSettingsPanelProps = {
  cameraDevices: CameraDevice[]
  selectedCameraId: string | null
  onSelectCamera: (deviceId: string) => void
  mirrorVideo: boolean
  onMirrorVideoChange: (checked: boolean) => void
  onClose: () => void
}

type DeviceSelectProps = {
  label: string
  devices: { deviceId: string; label: string }[]
  value: string | null
  onChange: (deviceId: string) => void
}

function DeviceSelect({ label, devices, value, onChange }: DeviceSelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[12px] font-light text-[#242424]">{label}</span>
      <div className="relative">
        <Select
          value={value ?? undefined}
          onValueChange={(next) => onChange(next as string)}
          disabled={devices.length === 0}
        >
          <SelectTrigger className="peer w-full rounded-none border-0 px-0 text-[12px] focus-visible:ring-0">
            <SelectValue placeholder="None">
              {(selected: string | null) =>
                devices.find((device) => device.deviceId === selected)?.label ??
                'None'
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false}>
            {devices.map((device) => (
              <SelectItem
                key={device.deviceId}
                value={device.deviceId}
                className="text-[12px]"
              >
                {device.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 bg-teams-brand transition-transform duration-200 ease-out peer-data-popup-open:scale-x-100"
        />
      </div>
    </div>
  )
}

function findCombinedDevices(
  microphoneDevices: MediaDeviceOption[],
  speakerDevices: MediaDeviceOption[],
) {
  return microphoneDevices.filter((mic) =>
    speakerDevices.some((speaker) => speaker.label === mic.label),
  )
}

export function DeviceSettingsPanel({
  cameraDevices,
  selectedCameraId,
  onSelectCamera,
  mirrorVideo,
  onMirrorVideoChange,
  onClose,
}: DeviceSettingsPanelProps) {
  const microphone = useMediaDevices('audioinput')
  const speaker = useMediaDevices('audiooutput')

  const combinedDevices = findCombinedDevices(microphone.devices, speaker.devices)
  const combinedSelectedId =
    combinedDevices.find((device) => device.label === microphone.devices.find(
      (mic) => mic.deviceId === microphone.selectedDeviceId,
    )?.label)?.deviceId ?? null

  function handleSelectCombinedDevice(deviceId: string) {
    const combined = combinedDevices.find((device) => device.deviceId === deviceId)
    if (!combined) return

    const matchingMic = microphone.devices.find(
      (device) => device.label === combined.label,
    )
    const matchingSpeaker = speaker.devices.find(
      (device) => device.label === combined.label,
    )
    if (matchingMic) microphone.setSelectedDeviceId(matchingMic.deviceId)
    if (matchingSpeaker) speaker.setSelectedDeviceId(matchingSpeaker.deviceId)
  }

  return (
    <SettingsBarShell title="Device settings" onClose={onClose}>
      <div className="flex flex-col gap-4">
        <h3 className="m-0 text-teams-body font-semibold text-[#242424]">
          Audio Settings
        </h3>
        <DeviceSelect
          label="Audio devices"
          devices={combinedDevices}
          value={combinedSelectedId}
          onChange={handleSelectCombinedDevice}
        />
        <DeviceSelect
          label="Speaker"
          devices={speaker.devices}
          value={speaker.selectedDeviceId}
          onChange={speaker.setSelectedDeviceId}
        />
        <DeviceSelect
          label="Microphone"
          devices={microphone.devices}
          value={microphone.selectedDeviceId}
          onChange={microphone.setSelectedDeviceId}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="m-0 text-teams-body font-semibold text-[#242424]">
          Video Settings
        </h3>
        <DeviceSelect
          label="Camera"
          devices={cameraDevices}
          value={selectedCameraId}
          onChange={onSelectCamera}
        />
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[14px] text-[#424242]">
            Mirror my video
            <InfoTooltip
              label="About mirror my video"
              text="Changing this setting will only change the view for you. This setting doesn't currently work in Together mode."
            />
          </span>
          <PrejoinSwitch
            checked={mirrorVideo}
            onChange={onMirrorVideoChange}
            aria-label="Mirror my video"
          />
        </div>
      </div>
    </SettingsBarShell>
  )
}
