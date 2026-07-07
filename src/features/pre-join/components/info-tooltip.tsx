import { useState } from 'react'

import { InfoFilledIcon, InfoIcon } from '../icons'

type InfoTooltipProps = {
  label: string
  text: string
}

export function InfoTooltip({ label, text }: InfoTooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-label={label}
        className="group flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-teams-brand"
      >
        <InfoIcon size={16} className="group-hover:hidden" />
        <InfoFilledIcon size={16} className="hidden group-hover:block" />
      </button>

      {open ? (
        <div
          role="note"
          className=" text-[12px] absolute bottom-[calc(100%+8px)] left-0 z-30 w-[242px] rounded bg-white p-3 text-xs text-[#242424] shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
        >
          {text}
          <span className="absolute top-full left-2 size-2 -translate-y-1/2 rotate-45 bg-white" />
        </div>
      ) : null}
    </span>
  )
}
