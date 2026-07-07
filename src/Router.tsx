import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import { MeetingPage } from '@/features/meeting'
import { PreJoinScreen } from '@/features/pre-join'

function PreJoinRoute() {
  const navigate = useNavigate()
  return <PreJoinScreen onJoin={() => navigate('/meeting')} />
}

function MeetingRoute() {
  const navigate = useNavigate()
  return <MeetingPage onLeave={() => navigate('/')} />
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PreJoinRoute />} />
      <Route path="/meeting" element={<MeetingRoute />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
