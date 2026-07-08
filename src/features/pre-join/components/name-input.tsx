export function NameInput() {
  return (
    <div className="relative mt-2 w-[18rem] max-w-[calc(100vw-32px)]">
      <input
        type="text"
        placeholder="Type your name"
        autoFocus
        className="peer box-border h-7 w-full border-0 bg-white px-3 text-teams-body leading-5 text-[#242424] outline-none placeholder:text-[#707070]"
        aria-label="Display name"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 bg-teams-brand transition-transform duration-200 ease-out peer-focus:scale-x-100"
      />
    </div>
  )
}
