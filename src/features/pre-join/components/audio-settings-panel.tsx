import { useMediaDevices } from '../hooks/use-media-devices'
import { DisclosureSection } from './disclosure-section'
import { PrejoinRadio } from './prejoin-radio'
import { SettingsBarShell } from './settings-bar-shell'

type AudioSettingsPanelProps = {
  onClose: () => void
}

export function AudioSettingsPanel({ onClose }: AudioSettingsPanelProps) {
  const speaker = useMediaDevices('audiooutput')
  const microphone = useMediaDevices('audioinput')

  return (
    <SettingsBarShell title="Audio settings" onClose={onClose}>
      <DisclosureSection title="Speaker">
        <div role="radiogroup" aria-label="Speaker" className="pl-[22px]">
          {speaker.devices.length === 0 ? (
            <div className="flex w-full items-center gap-2.5 py-2 text-left text-[14px] text-teams-subtle">
              <PrejoinRadio disabled selected />
              <span className="truncate">None</span>
            </div>
          ) : (
            speaker.devices.map((device) => (
              <button
                key={device.deviceId}
                type="button"
                role="radio"
                aria-checked={device.deviceId === speaker.selectedDeviceId}
                onClick={() => speaker.setSelectedDeviceId(device.deviceId)}
                className="flex w-full cursor-pointer items-center gap-2.5 rounded-sm border-0 bg-transparent py-2 text-left text-[12px] text-[#424242] hover:bg-[#f5f5f5]"
              >
                <PrejoinRadio selected={device.deviceId === speaker.selectedDeviceId} />
                <span className="truncate">{device.label}</span>
              </button>
            ))
          )}
        </div>
      </DisclosureSection>

      <DisclosureSection title="Microphone">
        <div role="radiogroup" aria-label="Microphone" className="pl-[22px]">
          {microphone.devices.length === 0 ? (
            <div className="flex w-full items-center gap-2.5 py-2 text-left text-[14px] text-teams-subtle">
              <PrejoinRadio disabled selected />
              <span className="truncate">None</span>
            </div>
          ) : (
            microphone.devices.map((device) => (
              <button
                key={device.deviceId}
                type="button"
                role="radio"
                aria-checked={device.deviceId === microphone.selectedDeviceId}
                onClick={() => microphone.setSelectedDeviceId(device.deviceId)}
                className="flex w-full cursor-pointer items-center gap-2.5 rounded-sm border-0 bg-transparent py-2 text-left text-[12px] text-[#424242] hover:bg-[#f5f5f5]"
              >
                <PrejoinRadio selected={device.deviceId === microphone.selectedDeviceId} />
                <span className="truncate">{device.label}</span>
              </button>
            ))
          )}
        </div>
      </DisclosureSection>
    </SettingsBarShell>
  )
}
