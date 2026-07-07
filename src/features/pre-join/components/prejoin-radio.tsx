import { cn } from '@/lib/utils'

type PrejoinRadioProps = {
  selected?: boolean
  disabled?: boolean
  className?: string
}

export function PrejoinRadio({ selected, disabled, className }: PrejoinRadioProps) {
  return (
    <span
      className={cn(
        'relative box-border inline-flex size-5 shrink-0 items-center justify-center rounded-full',
        selected
          ? disabled
            ? 'border-2 border-[#d1d1d1]'
            : 'border-2 border-teams-brand'
          : 'border border-[#a6a6a6]',
        disabled && !selected && 'border-[#d1d1d1]',
        className,
      )}
      aria-hidden
    >
      {selected ? (
        <span
          className={cn(
            'size-[70%] rounded-full',
            disabled ? 'bg-[#d1d1d1]' : 'bg-teams-brand',
          )}
        />
      ) : null}
    </span>
  )
}
