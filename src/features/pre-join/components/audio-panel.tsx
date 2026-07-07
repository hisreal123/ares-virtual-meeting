import { useLayoutEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

import {
  ChevronIcon,
  CloseIcon,
  MicOffIcon,
  SpeakerIcon,
} from '../icons'
import { PrejoinRadio } from './prejoin-radio'
import { PrejoinSwitch } from './prejoin-switch'

type AudioOption = 'computer' | 'none'

const rowLabelClass =
  'text-teams-body leading-(--text-teams-body--line-height) text-teams-muted group-disabled:text-teams-subtle'
const rowLabelBoldClass =
  'text-teams-body leading-(--text-teams-body--line-height) font-semibold text-teams-muted'

export function AudioPanel() {
  const [micToggle, setMicToggle] = useState(true)
  const [audioOption, setAudioOption] = useState<AudioOption>('computer')
  const [showPopup, setShowPopup] = useState(true)
  const [popupTop, setPopupTop] = useState(100)
  const [arrowLeft, setArrowLeft] = useState(24)

  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLDivElement>(null)

  const isComputerAudio = audioOption === 'computer'
  const isNoAudio = audioOption === 'none'

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
      const popoverLeft =
        panelRect.width + popoverRightOffset - popoverWidth
      const toggleCenterX =
        toggleRect.left - panelRect.left + toggleRect.width / 2

      setPopupTop(toggleRect.bottom - panelRect.top + 8)
      setArrowLeft(toggleCenterX - popoverLeft - 7)
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)

    return () => window.removeEventListener('resize', updatePosition)
  }, [showPopup, isComputerAudio])

  if (isNoAudio) {
    return (
      <div className="relative flex h-[335px] flex-1 flex-col gap-1.5 overflow-visible bg-transparent">
        <button
          type="button"
          className="box-border flex min-h-[52px] w-full shrink-0 cursor-pointer items-center gap-3.5 border border-teams-border bg-white px-4 text-left"
          onClick={() => setAudioOption('computer')}
        >
          <PrejoinRadio />
          <span className={rowLabelBoldClass}>Computer audio</span>
        </button>

        <button
          type="button"
          className="group box-border flex min-h-[52px] w-full shrink-0 cursor-default items-center gap-3.5 border border-teams-border bg-white px-4 text-left disabled:cursor-default"
          disabled
        >
          <PrejoinRadio disabled />
          <span className={cn(rowLabelClass, 'font-normal')}>Phone audio</span>
        </button>

        <div className="flex min-h-0 flex-1 cursor-default flex-col items-stretch overflow-hidden rounded border border-teams-border bg-white">
          <button
            type="button"
            className="box-border flex min-h-[52px] flex-1 cursor-pointer items-center gap-3.5 border-0 bg-transparent px-4 text-left"
            onClick={() => setAudioOption('none')}
          >
            <PrejoinRadio selected />
            <span className={rowLabelBoldClass}>Don&apos;t use audio</span>
          </button>
          <div className="h-px w-full shrink-0 bg-teams-border" aria-hidden />
          <div className="flex min-h-[52px] flex-1 items-center px-[18px] py-4">
            <p className="m-0 w-full text-teams-body leading-[1.45] text-teams-muted">
              Join muted to avoid causing audio disruption.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={panelRef}
      className="relative flex h-[335px] flex-1 flex-col gap-1.5 overflow-visible bg-transparent"
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-visible rounded border border-teams-border bg-white">
        <button
          type="button"
          className="flex h-[96px] w-full shrink-0 cursor-pointer items-center gap-3.5 border-0 border-b border-teams-border bg-transparent px-[15px] text-left"
          onClick={() => setAudioOption('computer')}
        >
          <PrejoinRadio selected />
          <span className={rowLabelBoldClass}>Computer audio</span>
        </button>

        <div className="box-border flex h-[114px] shrink-0 flex-col gap-1 overflow-visible px-[15px] py-[13px]">
          <div className="flex min-h-0 flex-1 items-center gap-2.5 overflow-visible text-teams-subtle">
            <MicOffIcon size={20} className="shrink-0 text-teams-danger" />
            <span className="mr-0.5 shrink-0 text-teams-body text-teams-subtle">None</span>
            <span className="shrink-0">
              <ChevronIcon />
            </span>
            <div ref={toggleRef} className="ml-auto shrink-0">
              <PrejoinSwitch
                checked={micToggle}
                onChange={setMicToggle}
                aria-label="Mute microphone"
              />
            </div>
          </div>
          <div className="flex min-h-0 flex-1 items-center gap-2.5 overflow-visible text-teams-subtle">
            <span className="shrink-0">
              <SpeakerIcon />
            </span>
            <span className="mr-0.5 shrink-0 text-teams-body text-teams-subtle">None</span>
            <span className="shrink-0">
              <ChevronIcon />
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="group box-border flex min-h-[52px] w-full shrink-0 cursor-default items-center gap-3.5 border border-teams-border bg-white px-4 text-left disabled:cursor-default"
        disabled
      >
        <PrejoinRadio disabled />
        <span className={cn(rowLabelClass, 'font-normal text-teams-subtle')}>
          Phone audio
        </span>
      </button>

      <button
        type="button"
        className="box-border flex min-h-[52px] w-full shrink-0 cursor-pointer items-center gap-3.5 border border-teams-border bg-white px-4 text-left"
        onClick={() => setAudioOption('none')}
      >
        <PrejoinRadio />
        <span className={rowLabelBoldClass}>Don&apos;t use audio</span>
      </button>

      {showPopup ? (
        <div
          className="absolute -right-[216px] z-10 box-border min-h-[190px] w-[280px] rounded-md bg-teams-popup pt-0.5 pb-1 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          role="tooltip"
          style={{ top: popupTop }}
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
                onClick={() => setShowPopup(false)}
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
      ) : null}
    </div>
  )
}
