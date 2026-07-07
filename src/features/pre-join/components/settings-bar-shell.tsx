import { DismissIcon } from '../icons'

type SettingsBarShellProps = {
  title: string
  onClose: () => void
  children: React.ReactNode
}

export function SettingsBarShell({ title, onClose, children }: SettingsBarShellProps) {
  return (
    <aside
      role="dialog"
      aria-label={title}
      className="box-border flex h-screen w-[600px] shrink-0 flex-col overflow-y-auto border-l border-teams-border bg-teams-page"
    >
      <div className="mt-[3px] flex items-center justify-between border-b border-teams-border px-5 py-3">
        <h2 className="text-lg font-semibold text-[#242424]">{title}</h2>
        <button
          type="button"
          aria-label={`Close ${title.toLowerCase()}`}
          onClick={onClose}
          className="flex size-8 cursor-pointer items-center justify-center rounded border-0 bg-transparent text-[#424242] hover:bg-[#f5f5f5]"
        >
          <DismissIcon size={20} />
        </button>
      </div>

      <div className="flex flex-col gap-6 px-4 py-6">{children}</div>
    </aside>
  )
}
