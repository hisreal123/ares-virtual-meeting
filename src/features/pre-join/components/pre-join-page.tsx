import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export type PreJoinPageSlots = {
  profile?: ReactNode
  header?: ReactNode
  mediaSettings?: ReactNode
  footer?: ReactNode
  rightBar?: ReactNode
}

type PreJoinPageProps = PreJoinPageSlots & {
  className?: string
}

export function PreJoinPage({
  profile,
  header,
  mediaSettings,
  footer,
  rightBar,
  className,
}: PreJoinPageProps) {
  return (
    <div className="teams-transition-root flex min-h-screen w-full">
      <div
        data-prejoin
        className={cn(
          'flex min-h-screen flex-1 flex-col items-center bg-teams-page py-6 font-[\'Segoe_UI\',_-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif] text-teams-body leading-(--text-teams-body--line-height) text-[#242424]',
          className,
        )}
      >
        <div className="flex flex-1 flex-col items-center justify-center">
          {profile ? (
            <section aria-label="Signed-in profile">{profile}</section>
          ) : null}
          {header ? (
            <section aria-label="Meeting header">{header}</section>
          ) : null}
          {mediaSettings ? (
            <section aria-label="Audio and video settings">
              {mediaSettings}
            </section>
          ) : null}
        </div>
        {footer ? (
          <section aria-label="Help links" className="mt-auto">
            {footer}
          </section>
        ) : null}
      </div>
      {rightBar}
    </div>
  )
}
