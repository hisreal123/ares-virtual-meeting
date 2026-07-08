import { CloseIcon } from '../icons'

type MicPermissionPopoverProps = {
  top: number
  arrowLeft: number
  onClose: () => void
}

export function MicPermissionPopover({
  top,
  arrowLeft,
  onClose,
}: MicPermissionPopoverProps) {
  return (
    <div
      className="absolute -right-[216px] z-10 box-border min-h-[190px] w-[280px] rounded-sm bg-teams-popup pt-0.5 pb-1 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
      role="tooltip"
      style={{ top }}
    >
      <div
        className="absolute -top-[7px] h-0 w-0 border-x-[7px] border-x-transparent border-b-[7px] border-b-teams-popup"
        style={{ left: arrowLeft }}
        aria-hidden
      />
      <div className="px-5 pt-4 pb-[18px]">
        <div className="mb-2.5 flex items-start justify-between gap-3">
          <h3 className="m-0 text-base leading-[1.3] font-bold">
            Allow Teams to access your mic
          </h3>
          <button
            type="button"
            className="flex shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0.5 opacity-90 hover:opacity-100"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
        <p className="mb-4 text-[13px] leading-[1.45] text-[#eceaf6]">
          Teams needs permission to access your device. Go to your privacy
          settings to allow it, then close this window and join again.
        </p>
        <button
          type="button"
          className="w-full cursor-pointer rounded border-0 bg-white px-0 py-2.5 text-teams-body font-semibold text-[#242424] hover:bg-[#f0f0f0]"
        >
          Open privacy settings
        </button>
      </div>
    </div>
  )
}
