import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CameraPermissionModal } from '@/components/camera-permission-modal'

import { useCameraDevices } from './hooks/use-camera-devices'
import { useMeetingDetails } from './hooks/use-meeting-details'
import {
  BackgroundSettingsPanel,
  DeviceSettingsPanel,
  MediaSettingsGrid,
  MeetingNotFound,
  PreJoinFooter,
  PreJoinHeader,
  PreJoinPage,
} from './components'
import type { BackgroundSelection } from './components'
import type { Meeting } from './types'

type RightBarView = 'device' | 'background' | null

type PreJoinScreenProps = {
  meetingId?: string
  passcode?: string | null
  onJoin?: (meeting: Meeting | null) => void
}

export function PreJoinScreen({
  meetingId,
  passcode = null,
  onJoin,
}: PreJoinScreenProps) {
  const [permissionResolved, setPermissionResolved] = useState(false)
  const [rightBarView, setRightBarView] = useState<RightBarView>(null)
  const [mirrorVideo, setMirrorVideo] = useState(true)
  const [backgroundSelection, setBackgroundSelection] =
    useState<BackgroundSelection>('none')
  const { devices, selectedDeviceId, setSelectedDeviceId, refreshDevices } =
    useCameraDevices()
  const { meeting, error } = useMeetingDetails(meetingId, passcode)
  const navigate = useNavigate()

  if (meetingId && error) {
    return (
      <MeetingNotFound
        meetingId={meetingId}
        passcode={passcode ?? ''}
        onRejoin={(nextId, nextPasscode) =>
          navigate(`/meet/${nextId}?p=${encodeURIComponent(nextPasscode)}`)
        }
        onDismiss={() => navigate('/meet')}
      />
    )
  }

  if (!permissionResolved) {
    return (
      <CameraPermissionModal onDone={() => setPermissionResolved(true)} />
    )
  }

  return (
    <PreJoinPage
      header={<PreJoinHeader />}
      mediaSettings={
        <MediaSettingsGrid
          devices={devices}
          selectedDeviceId={selectedDeviceId}
          onSelectDevice={setSelectedDeviceId}
          mirrorVideo={mirrorVideo}
          onOpenVideoSettings={() => setRightBarView('device')}
          onOpenBackgroundSettings={() => setRightBarView('background')}
          onOpenAudioSettings={() => setRightBarView('device')}
          onRefreshDevices={() => void refreshDevices()}
          onJoin={() => onJoin?.(meeting)}
        />
      }
      footer={<PreJoinFooter />}
      rightBar={
        rightBarView === 'device' ? (
          <DeviceSettingsPanel
            cameraDevices={devices}
            selectedCameraId={selectedDeviceId}
            onSelectCamera={setSelectedDeviceId}
            mirrorVideo={mirrorVideo}
            onMirrorVideoChange={setMirrorVideo}
            onClose={() => setRightBarView(null)}
          />
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
