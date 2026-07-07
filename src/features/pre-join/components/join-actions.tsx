type JoinActionsProps = {
  onJoin?: () => void
}

export function JoinActions({ onJoin }: JoinActionsProps) {
  return (
    <div className="mt-9 flex w-[973px] max-w-[calc(100vw-32px)] justify-end gap-2">
      <button
        type="button"
        className="box-border h-8 min-w-24 cursor-pointer rounded border border-[#8a8886] bg-white px-3 py-[5px] text-teams-body leading-none font-semibold text-[#242424] hover:bg-[#f5f5f5]"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={onJoin}
        className="box-border h-8 min-w-24 cursor-pointer rounded border border-teams-brand bg-teams-brand px-3 py-[5px] text-teams-body leading-none font-semibold text-white hover:bg-teams-brand-dark"
      >
        Join now
      </button>
    </div>
  )
}
