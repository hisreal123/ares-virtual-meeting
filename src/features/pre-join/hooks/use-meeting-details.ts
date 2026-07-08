import { useEffect, useState } from 'react'

import type { Meeting } from '../types'

type MeetingJoinResponse = {
  meeting: Meeting
}

type UseMeetingDetailsResult = {
  meeting: Meeting | null
  loading: boolean
  error: string | null
}

export function useMeetingDetails(
  meetingId: string | undefined,
  passcode: string | null,
): UseMeetingDetailsResult {
  const [meeting, setMeeting] = useState<Meeting | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!meetingId) {
      setMeeting(null)
      setError(null)
      setLoading(false)
      return
    }

    const controller = new AbortController()

    async function fetchMeeting() {
      setLoading(true)
      setError(null)

      try {
        const params = new URLSearchParams({ meeting_id: meetingId as string })
        if (passcode) params.set('passcode', passcode)

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/meetings/join?${params.toString()}`,
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error(`Failed to join meeting (${response.status})`)
        }

        const data: MeetingJoinResponse = await response.json()
        setMeeting(data.meeting)
      } catch (err) {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : 'Failed to join meeting')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    void fetchMeeting()

    return () => controller.abort()
  }, [meetingId, passcode])

  return { meeting, loading, error }
}
