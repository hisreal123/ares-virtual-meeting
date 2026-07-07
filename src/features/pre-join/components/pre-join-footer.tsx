export function PreJoinFooter() {
  return (
    <footer className="mt-[120px] flex items-center justify-center gap-3">
      <a href="#sign-in" className="text-[13px] text-teams-brand underline">
        Sign in
      </a>
      <span className="text-[13px] text-[#c8c6c4] select-none" aria-hidden>
        |
      </span>
      <a href="#download" className="text-[13px] text-teams-brand underline">
        Download the Teams app
      </a>
      <span className="text-[13px] text-[#c8c6c4] select-none" aria-hidden>
        |
      </span>
      <a href="#help" className="text-[13px] text-teams-brand underline">
        Need Help?
      </a>
    </footer>
  )
}
