type JoinActionsProps = {
  onJoin?: () => void
}

export function JoinActions({ onJoin }: JoinActionsProps) {
  return (
    <div className="mt-6 flex w-[973px] max-w-[calc(100vw-32px)] justify-end gap-2">
      <button
        type="button"
        className="box-border h-8 min-w-24 cursor-pointer rounded bg-white px-3 py-[5px] text-teams-body leading-(--text-teams-body--line-height) font-semibold text-[#242424] shadow-[0_2px_4px_-0.75px_rgba(0,0,0,0.25)] hover:bg-[#f5f5f5]"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={onJoin}
        className="box-border h-8 min-w-24 cursor-pointer rounded border border-teams-brand bg-teams-brand px-3 py-[5px] text-teams-body leading-(--text-teams-body--line-height) font-semibold text-white shadow-[0_2px_4px_-0.75px_rgba(0,0,0,0.25)] hover:bg-teams-brand-dark"
      >
        Join now
      </button>
    </div>
  )
}
