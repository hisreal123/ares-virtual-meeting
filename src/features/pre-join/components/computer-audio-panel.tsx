import { useLayoutEffect, useRef, useState } from 'react'

import { PrejoinRadio } from './prejoin-radio'

import { MicPermissionPopover } from './mic-permission-popover'
import { MicRow } from './mic-row'
import { SpeakerRow } from './speaker-row'

type ComputerAudioPanelProps = {
  onSelectNoAudio: () => void
  onOpenAudioSettings?: () => void
}

export function ComputerAudioPanel({
  onSelectNoAudio,
  onOpenAudioSettings,
}: ComputerAudioPanelProps) {
  const [micToggle, setMicToggle] = useState(true)
  const [showPopup, setShowPopup] = useState(true)
  const [popupTop, setPopupTop] = useState(100)
  const [arrowLeft, setArrowLeft] = useState(24)

  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!showPopup || !panelRef.current || !toggleRef.current) return

    const updatePosition = () => {
      const panel = panelRef.current
      const toggle = toggleRef.current
      if (!panel || !toggle) return

      const panelRect = panel.getBoundingClientRect()
      const toggleRect = toggle.getBoundingClientRect()

      const popoverWidth = 280
      const popoverRightOffset = 216
      const popoverLeft = panelRect.width + popoverRightOffset - popoverWidth
      const toggleCenterX =
        toggleRect.left - panelRect.left + toggleRect.width / 2

      setPopupTop(toggleRect.bottom - panelRect.top + 8)
      setArrowLeft(toggleCenterX - popoverLeft - 7)
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)

    return () => window.removeEventListener('resize', updatePosition)
  }, [showPopup])

  return (
    <div
      ref={panelRef}
      className="relative flex h-[331px] flex-1 flex-col gap-1.5 overflow-visible bg-transparent"
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-visible rounded border border-teams-border bg-white">
        <button
          type="button"
          className="flex min-h-[80px] w-full flex-1 cursor-pointer items-center gap-3.5 border-0 border-b border-teams-border bg-transparent px-[15px] text-left"
        >
          <PrejoinRadio selected />
          <span className="text-teams-body leading-(--text-teams-body--line-height) font-semibold text-teams-muted">
            Computer audio
          </span>
        </button>

        <div className="box-border flex h-[130px] shrink-0 flex-col gap-1 overflow-visible bg-[#fbfafa] px-[15px] py-[13px]">
          <MicRow
            ref={toggleRef}
            micToggle={micToggle}
            onMicToggleChange={setMicToggle}
            onOpenAudioSettings={onOpenAudioSettings}
          />
          <SpeakerRow onOpenAudioSettings={onOpenAudioSettings} />
        </div>
      </div>

      <button
        type="button"
        className="box-border flex min-h-[52px] w-full shrink-0 cursor-pointer items-center gap-3.5 border border-teams-border bg-white px-4 text-left"
        onClick={onSelectNoAudio}
      >
        <PrejoinRadio />
        <span className="text-teams-body leading-(--text-teams-body--line-height) font-semibold text-teams-muted">
          Don&apos;t use audio
        </span>
      </button>

      {showPopup ? (
        <MicPermissionPopover
          top={popupTop}
          arrowLeft={arrowLeft}
          onClose={() => setShowPopup(false)}
        />
      ) : null}
    </div>
  )
}
