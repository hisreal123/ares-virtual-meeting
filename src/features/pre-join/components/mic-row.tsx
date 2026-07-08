import { forwardRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { useMediaDevices } from '../hooks/use-media-devices'
import { ChevronIcon, MicOffIcon, MicOnIcon } from '../icons'
import { PrejoinSwitch } from './prejoin-switch'
import { MicDeviceMenu } from './mic-device-menu'

type MicRowProps = {
  micToggle: boolean
  onMicToggleChange: (checked: boolean) => void
  onOpenAudioSettings?: () => void
}

export const MicRow = forwardRef<HTMLDivElement, MicRowProps>(
  function MicRow({ micToggle, onMicToggleChange, onOpenAudioSettings }, toggleRef) {
    const [showMicMenu, setShowMicMenu] = useState(false)
    const microphone = useMediaDevices('audioinput')

    const hasDevices = microphone.devices.length > 0
    const selectedMicLabel =
      microphone.devices.find(
        (device) => device.deviceId === microphone.selectedDeviceId,
      )?.label ?? 'None'

    return (
      <div className="flex min-h-0 flex-1 items-center gap-2.5 overflow-visible text-teams-subtle">
        <Popover open={showMicMenu} onOpenChange={setShowMicMenu}>
          <PopoverTrigger
            disabled={!hasDevices}
            aria-label="Choose microphone"
            className={cn(
              'flex min-w-0 items-center gap-2.5 border-0 bg-transparent p-0',
              !hasDevices
                ? 'cursor-default text-teams-subtle'
                : micToggle
                  ? 'cursor-pointer text-teams-brand'
                  : 'cursor-pointer text-teams-subtle',
            )}
          >
            {micToggle ? (
              <MicOnIcon size={20} className="shrink-0" />
            ) : (
              <MicOffIcon size={20} className="shrink-0" />
            )}
            <span className="mr-0.5 shrink-0 truncate text-teams-body">
              {selectedMicLabel}
            </span>
            {hasDevices ? (
              <span className="shrink-0">
                <ChevronIcon />
              </span>
            ) : null}
          </PopoverTrigger>
          <PopoverContent align="start" className="w-75.5">
            <MicDeviceMenu
              devices={microphone.devices}
              selectedDeviceId={microphone.selectedDeviceId}
              onSelectDevice={(deviceId) => {
                microphone.setSelectedDeviceId(deviceId)
                setShowMicMenu(false)
              }}
              onOpenAudioSettings={onOpenAudioSettings}
            />
          </PopoverContent>
        </Popover>
        <div ref={toggleRef} className="ml-auto shrink-0">
          <PrejoinSwitch
            checked={micToggle}
            onChange={onMicToggleChange}
            aria-label="Mute microphone"
          />
        </div>
      </div>
    )
  },
)
