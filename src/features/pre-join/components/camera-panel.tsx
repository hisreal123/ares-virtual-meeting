import { useEffect, useRef, useState } from 'react'

import type { CameraDevice } from '../hooks/use-camera-devices'
import {
  BackgroundFiltersFilledIcon,
  BackgroundFiltersIcon,
  CameraOffIcon,
  CameraOffPreviewIcon,
  CameraOnIcon,
  ChevronIcon,
} from '../icons'
import { PrejoinRadio } from './prejoin-radio'
import { PrejoinSwitch } from './prejoin-switch'

type CameraPanelProps = {
  devices: CameraDevice[]
  selectedDeviceId: string | null
  onSelectDevice: (deviceId: string) => void
  mirrorVideo: boolean
  onOpenVideoSettings: () => void
  onOpenBackgroundSettings: () => void
  onRefreshDevices: () => void
}

export function CameraPanel({
  devices,
  selectedDeviceId,
  onSelectDevice,
  mirrorVideo,
  onOpenVideoSettings,
  onOpenBackgroundSettings,
  onRefreshDevices,
}: CameraPanelProps) {
  const [cameraOn, setCameraOn] = useState(false)
  const [showCameraMenu, setShowCameraMenu] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop())
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    const stream = streamRef.current
    if (cameraOn && video && stream) {
      video.srcObject = stream
    }
  }, [cameraOn])

  async function startStream(deviceId: string | null) {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    const stream = await navigator.mediaDevices.getUserMedia({
      video: deviceId ? { deviceId: { exact: deviceId } } : true,
    })
    streamRef.current = stream
    setCameraOn(true)
    if (videoRef.current) {
      videoRef.current.srcObject = stream
    }
    onRefreshDevices()
  }

  async function handleCameraToggle(enabled: boolean) {
    if (!enabled) {
      streamRef.current?.getTracks().forEach((track) => track.stop())
      streamRef.current = null
      if (videoRef.current) {
        videoRef.current.srcObject = null
      }
      setCameraOn(false)
      return
    }

    try {
      await startStream(selectedDeviceId)
    } catch {
      streamRef.current = null
      setCameraOn(false)
    }
  }

  async function handleSelectDevice(deviceId: string) {
    onSelectDevice(deviceId)
    if (cameraOn) {
      try {
        await startStream(deviceId)
      } catch {
        streamRef.current = null
        setCameraOn(false)
      }
    }
  }

  return (
    <div className="relative box-border flex w-[509px] shrink-0 flex-col overflow-visible rounded border border-teams-border bg-white">
      <div className="relative box-border flex w-full shrink-0 flex-col items-center justify-center gap-3 overflow-hidden rounded-t bg-[#fafafa] aspect-video">
        {cameraOn ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="absolute inset-0 block size-full object-cover"
            style={mirrorVideo ? { transform: 'scaleX(-1)' } : undefined}
          />
        ) : (
          <>
            <CameraOffPreviewIcon size={20} className="text-[#424242]" />
            <span className="text-teams-body leading-(--text-teams-body--line-height) font-semibold text-teams-muted">
              Your camera is turned off
            </span>
          </>
        )}
      </div>
      <div
        role="toolbar"
        aria-label="Video options"
        className="box-border flex h-[44px] shrink-0 items-center gap-3.5 border-t border-teams-border p-[7px]"
      >
        <div className="relative flex items-center gap-1">
          <button
            type="button"
            className="group flex cursor-pointer items-center border-0 bg-transparent p-0 text-teams-muted"
            aria-label={cameraOn ? 'Turn camera off' : 'Turn camera on'}
            onClick={() => void handleCameraToggle(!cameraOn)}
          >
            {cameraOn ? (
              <CameraOnIcon
                size={20}
                className="text-teams-muted group-hover:text-teams-brand"
              />
            ) : (
              <CameraOffIcon
                size={20}
                className="text-teams-muted group-hover:text-teams-brand"
              />
            )}
          </button>
          <button
            type="button"
            className="group flex cursor-pointer items-center border-0 bg-transparent p-0 text-teams-muted"
            aria-label="Select camera"
            aria-expanded={showCameraMenu}
            onClick={() => setShowCameraMenu((open) => !open)}
          >
            <span className="flex items-center text-teams-muted group-hover:text-teams-brand">
              <ChevronIcon />
            </span>
          </button>

          {showCameraMenu ? (
            <div
              className="absolute top-[calc(100%+6px)] left-0 z-10 w-[360px] rounded border border-teams-border bg-white px-4 pt-3 pb-4 shadow-[0_4px_16px_rgba(0,0,0,0.14)]"
              role="dialog"
              aria-label="Camera"
            >
              <p className="mb-1 text-teams-body font-semibold text-teams-muted">
                Camera
              </p>
              {devices.length === 0 ? (
                <p className="py-2 text-teams-body text-teams-muted">
                  No cameras found
                </p>
              ) : (
                devices.map((device) => (
                  <button
                    key={device.deviceId}
                    type="button"
                    className="flex w-full cursor-pointer items-center gap-2.5 rounded-sm border-0 bg-transparent py-2 text-left text-teams-body text-[#242424] hover:bg-[#f5f5f5]"
                    role="menuitem"
                    onClick={() => void handleSelectDevice(device.deviceId)}
                  >
                    <PrejoinRadio selected={device.deviceId === selectedDeviceId} />
                    <span className="truncate">{device.label}</span>
                  </button>
                ))
              )}
              <div className="my-1.5 h-px bg-teams-border" aria-hidden />
              <button
                type="button"
                className="block w-full cursor-pointer rounded-sm border-0 bg-transparent py-2 text-left text-teams-body text-[#242424] hover:bg-[#f5f5f5]"
                role="menuitem"
                onClick={() => {
                  setShowCameraMenu(false)
                  onOpenVideoSettings()
                }}
              >
                More video settings
              </button>
            </div>
          ) : null}
        </div>
        <PrejoinSwitch
          checked={cameraOn}
          onChange={(enabled) => void handleCameraToggle(enabled)}
          aria-label="Turn camera on"
        />
        <span
          className="text-[#c8c6c4] select-none"
          aria-hidden
        >
          |
        </span>
        <button
          type="button"
          onClick={onOpenBackgroundSettings}
          disabled={!cameraOn}
          className="group flex items-center gap-2 border-0 bg-transparent p-0 text-teams-body leading-(--text-teams-body--line-height) font-semibold text-[#424242] transition-colors enabled:cursor-pointer enabled:hover:text-teams-brand disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="relative inline-flex size-5 shrink-0 items-center justify-center">
            <BackgroundFiltersIcon
              size={20}
              className="text-teams-subtle transition-opacity group-enabled:group-hover:opacity-0"
            />
            <BackgroundFiltersFilledIcon
              size={20}
              className="absolute text-teams-brand opacity-0 transition-opacity group-enabled:group-hover:opacity-100"
            />
          </span>
          <span className="transition-colors group-enabled:group-hover:text-teams-brand">
            Background filters
          </span>
        </button>
      </div>
    </div>
  )
}
