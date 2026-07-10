import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import type { ComponentProps } from 'react'

import { MeetingPage } from '@/features/meeting'
import { PreJoinScreen } from '@/features/pre-join'
import { MeetingNotFound } from '@/features/pre-join/components'
import type { JoinBackgroundSettings } from '@/features/pre-join'

type Meeting = NonNullable<ComponentProps<typeof MeetingPage>['meeting']>

function PreJoinRoute() {
  const navigate = useNavigate()
  const { meetingId } = useParams<{ meetingId: string }>()
  const [searchParams] = useSearchParams()
  const passcode = searchParams.get('p')

  return (
    <PreJoinScreen
      meetingId={meetingId}
      passcode={passcode}
      onJoin={(meeting, background) => navigate('/meeting', { state: { meeting, background } })}
    />
  )
}

function MeetingRoute() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as { meeting?: Meeting; background?: JoinBackgroundSettings } | null
  const meeting = state?.meeting
  const background = state?.background

  return <MeetingPage meeting={meeting} background={background} onLeave={() => navigate('/meet')} />
}

function InvalidMeetingLinkRoute() {
  const navigate = useNavigate()

  return (
    <MeetingNotFound
      meetingId=""
      passcode=""
      onRejoin={(nextId, nextPasscode) =>
        navigate(`/meet/${nextId}?p=${encodeURIComponent(nextPasscode)}`)
      }
      onDismiss={() => navigate('/meet')}
    />
  )
}

export function Router() {
  return (
    <Routes>
      <Route path="/meet/:meetingId" element={<PreJoinRoute />} />
      <Route path="/meeting" element={<MeetingRoute />} />
      <Route path="*" element={<InvalidMeetingLinkRoute />} />
    </Routes>
  )
}
