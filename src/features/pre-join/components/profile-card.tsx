type ProfileCardProps = {
  name?: string
  email?: string
}

export function ProfileCard({
  name = 'gehorge hisreal',
  email = 'gehorgehisreal@gmail.com',
}: ProfileCardProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="teams-card mx-auto flex w-full max-w-[var(--teams-main-max-width)] items-center gap-3 px-3 py-2.5">
      <div
        className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--teams-bg-preview)] text-sm font-[var(--teams-font-weight-semibold)] text-[var(--teams-text-secondary)]"
        aria-hidden
      >
        {initials}
      </div>
      <div className="min-w-0 flex-1 text-left">
        <p className="truncate text-[length:var(--teams-font-size-base)] font-[var(--teams-font-weight-semibold)] text-[var(--teams-text-primary)]">
          {name}
        </p>
        <p className="truncate text-[length:var(--teams-font-size-base)] text-[var(--teams-text-tertiary)]">
          {email}
        </p>
      </div>
      <button
        type="button"
        className="shrink-0 text-[length:var(--teams-font-size-base)] text-[var(--teams-text-link)] hover:text-[var(--teams-text-link-hover)] hover:underline"
      >
        Change
      </button>
    </div>
  )
}
