import { XIcon } from 'lucide-react'

type CameraErrorBannerProps = {
  onClose: () => void
}

export function CameraErrorBanner({ onClose }: CameraErrorBannerProps) {
  return (
    <div
      role="alert"
      className="absolute top-2 left-1/2 z-20 flex w-70 min-h-10 -translate-x-1/2 flex-col rounded-lg border border-[#3d3d3d] bg-[#242424] p-2 pr-2 text-[#adadad]"
      style={{
        filter:
          'drop-shadow(rgba(0, 0, 0, 0.11) 0px 0.6px 1.8px) drop-shadow(rgba(0, 0, 0, 0.13) 0px 3.2px 7.2px)',
      }}
    >
      <div className="flex items-start justify-between">
        <p className="text-[12px] font-normal text-white">Your video isn&apos;t working</p>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onClose}
          className="flex size-6 shrink-0 items-center justify-center rounded text-[#adadad] hover:text-teams-brand"
        >
          <XIcon size={20}  className='font-light'/>
        </button>
      </div>
      <p className="text-[14px] text-[#adadad]">We couldn&apos;t access your camera.</p>
    </div>
  )
}
