import { useEffect, useState } from 'react'

import { BrowserBlockedPermissionIcon } from '@/features/pre-join/icons'
import { Dialog, DialogContent } from '@/components/ui/dialog'

type CameraPermissionModalProps = {
  onDone: () => void
}

type PermissionStage = 'requesting' | 'denied'

export function CameraPermissionModal({ onDone }: CameraPermissionModalProps) {
  const [stage, setStage] = useState<PermissionStage>('requesting')

  useEffect(() => {
    let cancelled = false

    const requestPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        })
        stream.getTracks().forEach((track) => track.stop())
        if (!cancelled) onDone()
      } catch {
        if (!cancelled) setStage('denied')
      }
    }

    void requestPermission()

    return () => {
      cancelled = true
    }
  }, [onDone])

  return (
    <Dialog open modal>
      <DialogContent
        showCloseButton={false}
        className="max-w-md rounded-lg bg-white p-8 py-10 text-center sm:max-w-md"
      >
        {stage === 'denied' ? (
          <>
            <BrowserBlockedPermissionIcon
              size={256}
              className="mx-auto mb-6 w-64"
            />
            <p className="text-[24px] font-bold text-[#242424df]">
              Are you sure you don&apos;t want audio or video? If you change
              your mind, select the camera icon by your address bar and then{' '}
              <span className="underline">Always allow</span>.
            </p>
            <button
              type="button"
              onClick={onDone}
              className="mt-6 w-fit mx-auto cursor-pointer rounded-sm border border-[#d1d1d1] px-2 py-1 text-xs font-semibold text-[#242424] hover:bg-[#f6f6f6ea]"
            >
              Continue without audio or video
            </button>
            <p className="mt-2 text-[0.6rem] text-[#242424a6]">
              Make sure no other app is using your camera and mic.
            </p>
          </>
        ) : (
          <>
            <p className="text-lg font-bold text-[#242424df]">
              Select <span className="underline">Allow</span> to let Microsoft
              Teams use your mic and camera for calls and meetings on this
              browser.
            </p>
            <p className="mt-4 text-sm text-[#242424a6]">
              When you do, we&apos;ll turn your devices on for a moment to set
              them up.
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
