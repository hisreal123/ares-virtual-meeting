import { useState } from 'react'

import { ComputerAudioPanel } from './computer-audio-panel'
import { NoAudioPanel } from './no-audio-panel'

type AudioOption = 'computer' | 'none'

type AudioPanelProps = {
  onOpenAudioSettings?: () => void
}

export function AudioPanel({ onOpenAudioSettings }: AudioPanelProps) {
  const [audioOption, setAudioOption] = useState<AudioOption>('computer')

  if (audioOption === 'none') {
    return (
      <NoAudioPanel onSelectComputerAudio={() => setAudioOption('computer')} />
    )
  }

  return (
    <ComputerAudioPanel
      onSelectNoAudio={() => setAudioOption('none')}
      onOpenAudioSettings={onOpenAudioSettings}
    />
  )
}
