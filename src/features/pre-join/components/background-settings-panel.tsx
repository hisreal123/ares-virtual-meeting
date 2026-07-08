import { useState } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { backgroundOptions } from '../data/backgrounds'
import { CheckmarkIcon, ChevronIcon, NoBackgroundIcon } from '../icons'
import { SettingsBarShell } from './settings-bar-shell'

export type BlurVariant = 'standard' | 'portrait'

export type BackgroundSelection = 'none' | 'blur' | { imageId: string }

type BackgroundSettingsPanelProps = {
  selection: BackgroundSelection
  onSelectionChange: (selection: BackgroundSelection) => void
  onClose: () => void
}

function isSameSelection(a: BackgroundSelection, b: BackgroundSelection) {
  if (typeof a === 'string' || typeof b === 'string') return a === b
  return a.imageId === b.imageId
}

export function BackgroundSettingsPanel({
  selection,
  onSelectionChange,
  onClose,
}: BackgroundSettingsPanelProps) {
  const [blurVariant, setBlurVariant] = useState<BlurVariant>('standard')
  const [showBlurMenu, setShowBlurMenu] = useState(false)

  return (
    <SettingsBarShell title="Background settings" onClose={onClose}>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onSelectionChange('none')}
          aria-pressed={selection === 'none'}
          className="flex aspect-video max-w-28 flex-col items-center justify-center gap-1 rounded border border-teams-border bg-white text-[12px] text-[#424242] hover:bg-[#f5f5f5]"
        >
          <NoBackgroundIcon size={20} />
          None
        </button>

        <div className="relative max-w-28">
          <button
            type="button"
            onClick={() => onSelectionChange('blur')}
            aria-pressed={selection === 'blur'}
            className={`flex aspect-video w-full flex-col items-center justify-center gap-1 rounded border bg-white text-[12px] text-[#424242] hover:bg-[#f5f5f5] ${
              selection === 'blur' ? 'border-2 border-teams-brand' : 'border-teams-border'
            }`}
          >
            <span className="flex items-center gap-1">
              <span className="size-4 rounded bg-[repeating-linear-gradient(45deg,#e0e0e0,#e0e0e0_2px,#f5f5f5_2px,#f5f5f5_4px)]" />
              <Popover open={showBlurMenu} onOpenChange={setShowBlurMenu}>
                <PopoverTrigger
                  render={
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label="Choose blur type"
                      onClick={(event: React.MouseEvent) => {
                        event.stopPropagation()
                      }}
                      onKeyDown={(event: React.KeyboardEvent) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.stopPropagation()
                        }
                      }}
                      className="flex items-center rounded hover:text-teams-brand"
                    />
                  }
                >
                  <ChevronIcon />
                </PopoverTrigger>
                <PopoverContent align="start" className="w-40">
                  <div role="radiogroup" aria-label="Blur type">
                    {(['standard', 'portrait'] as const).map((variant) => (
                      <button
                        key={variant}
                        type="button"
                        role="radio"
                        aria-checked={blurVariant === variant}
                        className="flex w-full cursor-pointer items-center gap-2 rounded-sm border-0 bg-transparent px-1.5 py-1.5 text-left text-[13px] text-[#242424] hover:bg-[#f5f5f5]"
                        onClick={() => {
                          setBlurVariant(variant)
                          onSelectionChange('blur')
                          setShowBlurMenu(false)
                        }}
                      >
                        <CheckmarkIcon
                          size={16}
                          className={blurVariant === variant ? 'text-teams-brand' : 'invisible'}
                        />
                        {variant === 'standard' ? 'Standard blur' : 'Portrait blur'}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </span>
            {blurVariant === 'standard' ? 'Standard blur' : 'Portrait blur'}
            {selection === 'blur' ? (
              <CheckmarkIcon
                size={14}
                className="absolute top-1 right-1 text-teams-brand"
              />
            ) : null}
          </button>
        </div>

        {backgroundOptions.map((background) => {
          const isSelected = isSameSelection(selection, { imageId: background.id })
          return (
            <button
              key={background.id}
              type="button"
              onClick={() => onSelectionChange({ imageId: background.id })}
              aria-pressed={isSelected}
              className={`relative aspect-video max-w-28 overflow-hidden rounded border bg-white ${
                isSelected ? 'border-2 border-teams-brand' : 'border-teams-border'
              }`}
            >
              <img
                src={background.thumbnailSrc}
                alt=""
                loading="lazy"
                className="size-full object-cover"
              />
              {isSelected ? (
                <CheckmarkIcon
                  size={14}
                  className="absolute top-1 right-1 rounded-full bg-white text-teams-brand"
                />
              ) : null}
            </button>
          )
        })}
      </div>
    </SettingsBarShell>
  )
}
