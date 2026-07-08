import { useState } from 'react'

import { cn } from '@/lib/utils'

type UnderlineFieldProps = {
  value: string
  onChange: (value: string) => void
  'aria-label': string
}

function UnderlineField({ value, onChange, ...props }: UnderlineFieldProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="peer box-border h-7 w-full border-0 border-b border-b-[#d1d1d1] bg-transparent text-center text-teams-body leading-5 text-[#242424] outline-none"
        {...props}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 bg-teams-brand transition-transform duration-200 ease-out peer-focus:scale-x-100"
      />
    </div>
  )
}

type MeetingNotFoundProps = {
  meetingId: string
  passcode: string
  onRejoin: (meetingId: string, passcode: string) => void
  onDismiss: () => void
}

export function MeetingNotFound({
  meetingId,
  passcode,
  onRejoin,
  onDismiss,
}: MeetingNotFoundProps) {
  const [idValue, setIdValue] = useState(meetingId)
  const [passcodeValue, setPasscodeValue] = useState(passcode)

  const canRejoin =
    idValue.trim().length > 0 &&
    passcodeValue.trim().length > 0 &&
    (idValue !== meetingId || passcodeValue !== passcode)

  const hasMeetingDetails = meetingId.trim().length > 0 && passcode.trim().length > 0

  if (!hasMeetingDetails) {
    return (
      <div className="flex h-dvh w-dvw flex-col items-center justify-center gap-2 bg-teams-page px-4 text-center">
        <p className="m-0 max-w-md text-teams-body font-semibold text-[#242424]">
          Meeting not found.
        </p>
        <p className="m-0 max-w-md text-teams-body text-teams-subtle">
          Kindly enter a correct meeting link.
        </p>
      </div>
    )
  }

  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center gap-6 bg-teams-page px-4 text-center">
      <p className="m-0 max-w-md text-teams-body text-[#242424]">
        We couldn&apos;t find a meeting matching this ID and passcode.
      </p>
      <div className="flex w-full max-w-xs flex-col gap-6">
        <UnderlineField
          value={idValue}
          onChange={setIdValue}
          aria-label="Meeting ID"
        />
        <UnderlineField
          value={passcodeValue}
          onChange={setPasscodeValue}
          aria-label="Passcode"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={!canRejoin}
          onClick={() => onRejoin(idValue.trim(), passcodeValue.trim())}
          className={cn(
            'rounded-sm border-0 bg-transparent px-4 py-2 text-teams-body font-semibold',
            canRejoin
              ? 'cursor-pointer text-[#242424] hover:bg-[#f5f5f5]'
              : 'cursor-not-allowed text-teams-subtle',
          )}
        >
          Rejoin call
        </button>
        <button
          type="button"
          onClick={onDismiss}
          className="cursor-pointer border border-[#d1d1d1] bg-white px-4 py-2 text-teams-body font-semibold text-[#242424] hover:bg-[#f5f5f5]"
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}
