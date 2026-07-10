import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import type { BackgroundSelection, BlurVariant } from '@/features/pre-join/types'
import { VirtualBackgroundVideo } from '@/lib/virtual-background/virtual-background-video'

import { MicOffIcon, MoreIcon, PinFilledIcon, PinIcon } from '../icons'

type ParticipantTileProps = {
  name: string
  compact?: boolean
  fill?: boolean
  square?: boolean
  stream?: MediaStream | null
  videoSrc?: string
  mirror?: boolean
  muted?: boolean
  pinned?: boolean
  speaking?: boolean
  backgroundSelection?: BackgroundSelection
  blurVariant?: BlurVariant
  onTogglePin?: () => void
}

const TILE_TINT =
  'radial-gradient(at -15% -15%, hsla(156, 85%, 54%, .08) 0px, transparent 72%), ' +
  'radial-gradient(at 115% -15%, hsla(191, 91%, 45%, .08) 0px, transparent 72%), ' +
  'radial-gradient(at -15% 115%, hsla(98, 74%, 80%, .08) 0px, transparent 72%), ' +
  'radial-gradient(at 115% 115%, hsla(24, 100%, 89%, .08) 0px, transparent 72%)'

function initialsFor(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

const AVATAR_COLORS = ['#6264a7', '#498205', '#c239b3', '#0078d4', '#986f0b', '#c4314b']

type MenuPos = { x: number; y: number }

export function ParticipantTile({
  name,
  compact,
  fill,
  square,
  stream,
  videoSrc,
  mirror,
  muted,
  pinned,
  speaking,
  backgroundSelection,
  blurVariant,
  onTogglePin,
}: ParticipantTileProps) {
  const colorIndex = name.length % AVATAR_COLORS.length
  const tileRef = useRef<HTMLDivElement>(null)
  const moreButtonRef = useRef<HTMLButtonElement>(null)
  const [moreMenuPos, setMoreMenuPos] = useState<MenuPos | null>(null)
  const [contextMenuPos, setContextMenuPos] = useState<MenuPos | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [videoErrored, setVideoErrored] = useState(false)

  useEffect(() => {
    if (!videoSrc || isVisible) return
    const node = tileRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [videoSrc, isVisible])

  const openMoreMenu = () => {
    const rect = moreButtonRef.current?.getBoundingClientRect()
    if (!rect) return
    setMoreMenuPos({ x: rect.right + 6, y: rect.top + rect.height / 2 })
  }

  const renderPinMenuAt = (pos: MenuPos, onClose: () => void) =>
    createPortal(
      <>
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 cursor-default"
          onClick={onClose}
        />
        <div
          role="menu"
          className="pin-menu fixed z-50 flex -translate-y-1/2 items-center gap-1 rounded bg-[#3b3b3b] py-0.5 pr-3 pl-2 text-[12px] whitespace-nowrap text-white shadow-lg"
          style={{ left: pos.x, top: pos.y }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onTogglePin?.()
              onClose()
            }}
            className="group/pin flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-white"
          >
            <span className="relative flex size-4 items-center">
              <PinIcon size={16} className="group-hover/pin:opacity-0" />
              <PinFilledIcon
                size={16}
                className="absolute inset-0 text-teams-brand opacity-0 group-hover/pin:opacity-100"
              />
            </span>
            Pin for me
          </button>
        </div>
      </>,
      document.body
    )

  return (
    <div
      ref={tileRef}
      onContextMenu={(e) => {
        e.preventDefault()
        if (!pinned) setContextMenuPos({ x: e.clientX, y: e.clientY })
      }}
      className={`tile-no-transition group relative flex items-center justify-center overflow-hidden bg-[#292929] ${
        speaking ? 'border-2 border-teams-brand' : 'border border-white/10'
      } ${square ? '' : 'rounded-md'} ${fill ? 'h-full w-full' : 'aspect-video'}`}
      style={{ backgroundImage: TILE_TINT }}
    >
      {stream ? (
        <VirtualBackgroundVideo
          stream={stream}
          selection={backgroundSelection ?? 'none'}
          blurVariant={blurVariant ?? 'standard'}
          mirror={mirror}
          className="h-full w-full object-cover"
        />
      ) : videoSrc && !videoErrored ? (
        <video
          key={videoSrc}
          autoPlay
          loop
          playsInline
          muted
          preload="none"
          src={isVisible ? videoSrc : undefined}
          onError={() => setVideoErrored(true)}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div
          className={`flex items-center justify-center rounded-full font-medium text-white ${
            compact ? 'size-8 text-[11px]' : 'aspect-square h-[44%] @container'
          }`}
          style={{ backgroundColor: AVATAR_COLORS[colorIndex] }}
        >
          <span className={compact ? '' : 'text-[40cqw]'}>{initialsFor(name)}</span>
        </div>
      )}
      <span
        className={`group/name absolute bottom-2 left-2 flex items-center gap-1 rounded bg-black/55 text-white ${
          compact ? 'px-1 py-0.5 text-[12px]' : 'px-2 text-[12px]'
        }`}
      >
        <span>{name}</span>
        {muted && <MicOffIcon size={compact ? 10 : 14} className="shrink-0 text-white/85" />}
        {pinned && (
          <button
            type="button"
            aria-label="Unpin"
            onClick={(e) => {
              e.stopPropagation()
              onTogglePin?.()
            }}
            className="flex shrink-0 items-center justify-center rounded hover:bg-white/20"
          >
            <PinFilledIcon size={compact ? 10 : 14} className="shrink-0 text-white" />
          </button>
        )}
        {!pinned && (
          <button
            ref={moreButtonRef}
            type="button"
            aria-label="More options"
            aria-haspopup="menu"
            aria-expanded={moreMenuPos !== null}
            onClick={(e) => {
              e.stopPropagation()
              if (moreMenuPos) {
                setMoreMenuPos(null)
              } else {
                openMoreMenu()
              }
            }}
            className={`ml-0.5 hidden shrink-0 items-center justify-center rounded group-hover/name:flex ${
              compact ? 'size-3.5' : 'size-4'
            } ${moreMenuPos ? 'flex' : ''}`}
          >
            <MoreIcon size={compact ? 12 : 14} />
          </button>
        )}
      </span>
      {moreMenuPos && renderPinMenuAt(moreMenuPos, () => setMoreMenuPos(null))}
      {contextMenuPos && renderPinMenuAt(contextMenuPos, () => setContextMenuPos(null))}
    </div>
  )
}
