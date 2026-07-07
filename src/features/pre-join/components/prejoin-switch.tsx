import { cn } from '@/lib/utils'

type PrejoinSwitchProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
  'aria-label': string
}

export function PrejoinSwitch({
  checked,
  onChange,
  className,
  'aria-label': ariaLabel,
}: PrejoinSwitchProps) {
  return (
    <label className={cn('relative inline-block h-4 w-8 shrink-0', className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="peer sr-only"
        aria-label={ariaLabel}
      />
      <span
        className="absolute inset-0 cursor-pointer rounded-full border border-[#616161] bg-white transition-colors peer-checked:border-transparent peer-checked:bg-[#6264a7] before:absolute before:top-px before:left-px before:size-3 before:rounded-full before:bg-[#616161] before:transition-transform peer-checked:before:translate-x-4 peer-checked:before:bg-white"
        aria-hidden
      />
    </label>
  )
}
