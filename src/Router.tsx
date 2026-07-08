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
      onJoin={(meeting) => navigate('/meeting', { state: { meeting } })}
    />
  )
}

function MeetingRoute() {
  const navigate = useNavigate()
  const location = useLocation()
  const meeting = (location.state as { meeting?: Meeting } | null)?.meeting

  return <MeetingPage meeting={meeting} onLeave={() => navigate('/meet')} />
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
