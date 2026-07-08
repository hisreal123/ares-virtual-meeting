import { PrejoinRadio } from './prejoin-radio'

type NoAudioPanelProps = {
  onSelectComputerAudio: () => void
}

export function NoAudioPanel({ onSelectComputerAudio }: NoAudioPanelProps) {
  return (
    <div className="relative flex h-[335px] flex-1 flex-col gap-1.5 overflow-visible bg-transparent">
      <button
        type="button"
        className="box-border flex min-h-[52px] w-full flex-1 cursor-pointer items-center gap-3.5 border border-teams-border bg-white px-4 text-left"
        onClick={onSelectComputerAudio}
      >
        <PrejoinRadio />
        <span className="text-teams-body leading-(--text-teams-body--line-height) font-semibold text-teams-muted">
          Computer audio
        </span>
      </button>

      <div className="flex min-h-0 flex-1 cursor-default flex-col items-stretch overflow-hidden rounded border border-teams-border bg-white">
        <button
          type="button"
          className="box-border flex min-h-[52px] flex-1 cursor-pointer items-center gap-3.5 border-0 bg-transparent px-4 text-left"
        >
          <PrejoinRadio selected />
          <span className="text-teams-body leading-(--text-teams-body--line-height) font-semibold text-teams-muted">
            Don&apos;t use audio
          </span>
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
