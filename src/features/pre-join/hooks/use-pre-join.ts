import { useCallback, useState } from 'react'

import {
  DEFAULT_MEETING_INFO,
  DEFAULT_PRE_JOIN_FORM,
  type PreJoinFormState,
  type PreJoinMeetingInfo,
} from '../types'

export function usePreJoin(
  meetingInfo: PreJoinMeetingInfo = DEFAULT_MEETING_INFO,
) {
  const [form, setForm] = useState<PreJoinFormState>(DEFAULT_PRE_JOIN_FORM)

  const updateForm = useCallback((patch: Partial<PreJoinFormState>) => {
    setForm((current) => ({ ...current, ...patch }))
  }, [])

  const joinMeeting = useCallback(async () => {
    // TODO: call join endpoint with form + meetingInfo
    void form
    void meetingInfo
  }, [form, meetingInfo])

  const cancel = useCallback(() => {
    // TODO: navigate away or call cancel endpoint
  }, [])

  return {
    meetingInfo,
    form,
    updateForm,
    joinMeeting,
    cancel,
  }
}
