export type AudioMode = 'computer' | 'none'

export type PreJoinFormState = {
  displayName: string
  cameraEnabled: boolean
  audioMode: AudioMode
  microphoneId: string | null
  speakerId: string | null
  microphoneMuted: boolean
}

export type PreJoinMeetingInfo = {
  meetingTitle: string
}

export const DEFAULT_PRE_JOIN_FORM: PreJoinFormState = {
  displayName: '',
  cameraEnabled: false,
  audioMode: 'computer',
  microphoneId: null,
  speakerId: null,
  microphoneMuted: false,
}

export const DEFAULT_MEETING_INFO: PreJoinMeetingInfo = {
  meetingTitle: 'Microsoft Teams meeting',
}
