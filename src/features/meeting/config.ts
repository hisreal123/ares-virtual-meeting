const parsed = Number(import.meta.env.VITE_PARTICIPANT_COUNT)

export const PARTICIPANT_COUNT = Number.isFinite(parsed) && parsed > 0 ? parsed : 4
