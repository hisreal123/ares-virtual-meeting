import { useState } from 'react'

import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { useMediaDevices } from '../hooks/use-media-devices'
import { ChevronIcon, SpeakerIcon } from '../icons'
import { SpeakerDeviceMenu } from './speaker-device-menu'

type SpeakerRowProps = {
  onOpenAudioSettings?: () => void
}

export function SpeakerRow({ onOpenAudioSettings }: SpeakerRowProps) {
  const [showSpeakerMenu, setShowSpeakerMenu] = useState(false)
  const [volume, setVolume] = useState(75)
  const speaker = useMediaDevices('audiooutput')

  const hasDevices = speaker.devices.length > 0
  const selectedSpeakerLabel =
    speaker.devices.find(
      (device) => device.deviceId === speaker.selectedDeviceId,
    )?.label ?? 'None'

  return (
    <div className="flex min-h-0 flex-1 items-center gap-2.5 overflow-visible text-teams-subtle">
      <Popover open={showSpeakerMenu} onOpenChange={setShowSpeakerMenu}>
        <PopoverTrigger
          disabled={!hasDevices}
          aria-label="Choose speaker"
          className={cn(
            'flex min-w-0 items-center gap-2.5 border-0 bg-transparent p-0',
            hasDevices
              ? 'cursor-pointer text-teams-brand'
              : 'cursor-default text-teams-subtle',
          )}
        >
          <span className="shrink-0">
            <SpeakerIcon />
          </span>
          <span className="mr-0.5 shrink-0 truncate text-teams-body">
            {selectedSpeakerLabel}
          </span>
          {hasDevices ? (
            <span className="shrink-0">
              <ChevronIcon />
            </span>
          ) : null}
        </PopoverTrigger>
        <PopoverContent align="start" className="w-75.5">
          <SpeakerDeviceMenu
            devices={speaker.devices}
            selectedDeviceId={speaker.selectedDeviceId}
            onSelectDevice={(deviceId) => speaker.setSelectedDeviceId(deviceId)}
            volume={volume}
            onVolumeChange={setVolume}
            onOpenAudioSettings={onOpenAudioSettings}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
