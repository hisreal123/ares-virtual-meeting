import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ToolbarButtonProps = {
  icon: ReactNode
  filledIcon?: ReactNode
  label: string
  badge?: number
  active?: boolean
  onClick?: () => void
  'aria-label'?: string
}

export function ToolbarButton({
  icon,
  filledIcon,
  label,
  badge,
  active,
  onClick,
  'aria-label': ariaLabel,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? label}
      aria-pressed={active}
      className={cn(
        'group flex h-11 min-w-14 cursor-pointer flex-col items-center justify-center gap-0.5 rounded border-0 px-2 text-[11px] leading-none text-white/85 hover:bg-white/10',
        active && 'bg-white/15',
      )}
    >
      <span className="relative flex items-center">
        {filledIcon ? (
          <>
            <span className="group-hover:opacity-0">{icon}</span>
            <span className="absolute inset-0 text-teams-brand opacity-0 group-hover:opacity-100">
              {filledIcon}
            </span>
          </>
        ) : (
          icon
        )}
        {badge ? (
          <span className="absolute -top-1.5 -right-2 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#c4314b] px-0.5 text-[10px] leading-none font-semibold text-white">
            {badge}
          </span>
        ) : null}
      </span>
      <span>{label}</span>
    </button>
  )
}
