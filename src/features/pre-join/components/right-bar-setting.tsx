import type { CameraDevice } from '../hooks/use-camera-devices'
import { DisclosureSection } from './disclosure-section'
import { InfoTooltip } from './info-tooltip'
import { PrejoinRadio } from './prejoin-radio'
import { PrejoinSwitch } from './prejoin-switch'
import { SettingsBarShell } from './settings-bar-shell'

type RightBarSettingProps = {
  devices: CameraDevice[]
  selectedDeviceId: string | null
  onSelectDevice: (deviceId: string) => void
  mirrorVideo: boolean
  onMirrorVideoChange: (checked: boolean) => void
  adjustBrightness: boolean
  onAdjustBrightnessChange: (checked: boolean) => void
  onClose: () => void
  onOpenAudioSettings: () => void
}

export function RightBarSetting({
  devices,
  selectedDeviceId,
  onSelectDevice,
  mirrorVideo,
  onMirrorVideoChange,
  adjustBrightness,
  onAdjustBrightnessChange,
  onClose,
  onOpenAudioSettings,
}: RightBarSettingProps) {
  return (
    <SettingsBarShell title="Video settings" onClose={onClose}>
      <DisclosureSection title="Camera">
        <div role="radiogroup" aria-label="Camera" className="pl-[22px]">
          {devices.length === 0 ? (
            <p className="text-[14px] text-teams-muted">No cameras found</p>
          ) : (
            devices.map((device) => (
              <button
                key={device.deviceId}
                type="button"
                role="radio"
                aria-checked={device.deviceId === selectedDeviceId}
                onClick={() => onSelectDevice(device.deviceId)}
                className="flex w-full cursor-pointer items-center gap-2.5 rounded-sm border-0 bg-transparent py-2 text-left text-[12px] text-[#424242] hover:bg-[#f5f5f5]"
              >
                <PrejoinRadio selected={device.deviceId === selectedDeviceId} />
                <span className="truncate">{device.label}</span>
              </button>
            ))
          )}
        </div>
      </DisclosureSection>

      <DisclosureSection title="Appearance">
        <div className="flex flex-col gap-4 pl-[22px]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[14px] text-[#424242]">
              Adjust brightness
              <InfoTooltip
                label="About adjust brightness"
                text="Enhance the quality of your video in low light conditions."
              />
            </span>
            <PrejoinSwitch
              checked={adjustBrightness}
              onChange={onAdjustBrightnessChange}
              aria-label="Adjust brightness"
            />
          </div>
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
      </DisclosureSection>

      <p className="pl-[22px] text-[14px] text-[#424242]">
        Looking for{' '}
        <button
          type="button"
          onClick={onOpenAudioSettings}
          className="cursor-pointer border-0 bg-transparent p-0 text-teams-brand underline-offset-2 hover:underline"
        >
          audio settings
        </button>
        ?
      </p>
    </SettingsBarShell>
  )
}
