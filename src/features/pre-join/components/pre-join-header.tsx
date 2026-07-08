import { NameInput } from './name-input'

type PreJoinHeaderProps = {
  title?: string
}

export function PreJoinHeader({
  title = 'Microsoft Teams meeting',
}: PreJoinHeaderProps) {
  return (
    <header className="mb-5 flex flex-col items-center">
      <div className="flex flex-col items-center gap-2.5">
        <img
          src="/assets/images/Microsoft_Office_Teams_Logo_64px.png"
          alt=""
          width={32}
          height={32}
          className="block size-8"
        />
        <h1 className="m-0 text-center leading-none">
          <span className="block max-w-full truncate text-teams-title leading-(--text-teams-title--line-height) font-semibold text-[#242424]">
            {title}
          </span>
        </h1>
      </div>
      <NameInput />
    </header>
  )
}
