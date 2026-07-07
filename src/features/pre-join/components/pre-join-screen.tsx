import { useState } from 'react'

import { useCameraDevices } from '../hooks/use-camera-devices'
import { AudioSettingsPanel } from './audio-settings-panel'
import type { BackgroundSelection } from './background-settings-panel'
import { BackgroundSettingsPanel } from './background-settings-panel'
import { MediaSettingsGrid } from './media-settings-grid'
import { PreJoinFooter } from './pre-join-footer'
import { PreJoinHeader } from './pre-join-header'
import { PreJoinPage } from './pre-join-page'
import { RightBarSetting } from './right-bar-setting'

type RightBarView = 'video' | 'audio' | 'background' | null

type PreJoinScreenProps = {
  onJoin?: () => void
}

export function PreJoinScreen({ onJoin }: PreJoinScreenProps) {
  const [rightBarView, setRightBarView] = useState<RightBarView>(null)
  const [mirrorVideo, setMirrorVideo] = useState(true)
  const [adjustBrightness, setAdjustBrightness] = useState(true)
  const [backgroundSelection, setBackgroundSelection] =
    useState<BackgroundSelection>('none')
  const { devices, selectedDeviceId, setSelectedDeviceId, refreshDevices } =
    useCameraDevices()

  return (
    <PreJoinPage
      header={<PreJoinHeader />}
      mediaSettings={
        <MediaSettingsGrid
          devices={devices}
          selectedDeviceId={selectedDeviceId}
          onSelectDevice={setSelectedDeviceId}
          mirrorVideo={mirrorVideo}
          onOpenVideoSettings={() => setRightBarView('video')}
          onOpenBackgroundSettings={() => setRightBarView('background')}
          onRefreshDevices={() => void refreshDevices()}
          onJoin={onJoin}
        />
      }
      footer={<PreJoinFooter />}
      rightBar={
        rightBarView === 'video' ? (
          <RightBarSetting
            devices={devices}
            selectedDeviceId={selectedDeviceId}
            onSelectDevice={setSelectedDeviceId}
            mirrorVideo={mirrorVideo}
            onMirrorVideoChange={setMirrorVideo}
            adjustBrightness={adjustBrightness}
            onAdjustBrightnessChange={setAdjustBrightness}
            onClose={() => setRightBarView(null)}
            onOpenAudioSettings={() => setRightBarView('audio')}
          />
        ) : rightBarView === 'audio' ? (
          <AudioSettingsPanel onClose={() => setRightBarView(null)} />
        ) : rightBarView === 'background' ? (
          <BackgroundSettingsPanel
            selection={backgroundSelection}
            onSelectionChange={setBackgroundSelection}
            onClose={() => setRightBarView(null)}
          />
        ) : null
      }
    />
  )
}
