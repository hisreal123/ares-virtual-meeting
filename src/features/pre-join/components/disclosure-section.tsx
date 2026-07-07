import { useState } from 'react'

import { DisclosureChevronIcon } from '../icons'

type DisclosureSectionProps = {
  title: string
  children: React.ReactNode
}

export function DisclosureSection({ title, children }: DisclosureSectionProps) {
  const [expanded, setExpanded] = useState(true)

  return (
    <section aria-label={title}>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((open) => !open)}
        className="mb-2 flex cursor-pointer items-center border-0 bg-transparent p-0 text-[12px] font-semibold text-teams-muted"
      >
        <span className={expanded ? '' : '-rotate-90'}>
          <DisclosureChevronIcon size={16} className="ml-1" />
        </span>
        {title}
      </button>
      {expanded ? children : null}
    </section>
  )
}
