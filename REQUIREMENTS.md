# Ares Virtual Meeting — Requirements

## Overview

Build a Microsoft Teams–style virtual meeting UI. **UI only** — no real meeting logic, auth, or media APIs for v1.

**Deadline:** UI ready by tomorrow.

**Stack:** React + Vite + Tailwind CSS + shadcn/ui

---

## Scope (in)

| Page | Description |
|------|-------------|
| **Join meeting (pre-join)** | Teams pre-join screen: name input, camera preview, audio settings, Cancel / Join now |
| **Meeting (in-call)** | Video grid showing participants with cameras on |

## Out of scope (v1)

- Real WebRTC / camera / microphone access
- Authentication
- Backend / API integration
- Chat, screen share, recording, etc.
- Any page other than join + meeting

---

## Styling

- Match **Microsoft Teams meeting site** as closely as possible
- Reference: Teams pre-join and in-call layouts
- Key brand color: Teams purple (`#464EB8` / `#5B5FC7`)
- Light gray page background (`#F5F5F5`)
- Segoe UI–style typography (system UI stack acceptable)

## Responsive

- **Maximum content width: 974px** (centered on larger screens)
- Mobile-friendly layout for join and meeting pages

---

## Meeting page — participants

- Participant count driven by an **environment variable**:

```env
VITE_PARTICIPANT_COUNT=6
```

- Each participant tile shows a **camera-on** style preview (placeholder imagery is fine for v1)
- Grid layout should adapt to participant count

---

## Pages checklist

### Join meeting (pre-join)

- [x] Teams logo + “Microsoft Teams meeting” title
- [x] Name input (“Type your name”)
- [x] Camera card (off-state preview, toggle, background filters)
- [x] Audio card (computer audio / don’t use audio, mic & speaker selects)
- [x] Cancel + Join now buttons
- [x] Footer links (Sign in, Download the Teams app, Need help?)
- [x] Teams-accurate styling pass (Fluent tokens in `src/styles/teams-tokens.css`)

### Meeting (in-call)

- [ ] Video grid for `VITE_PARTICIPANT_COUNT` participants
- [ ] Camera-on participant tiles
- [ ] Meeting toolbar / chrome (if needed for visual match)
- [ ] Static navigation: Join now → meeting page

---

## Technical setup

### Done

- [x] React + Vite + TypeScript + Tailwind CSS v4
- [x] shadcn/ui (Nova preset) + components: button, input, card, switch, radio-group, select, label
- [x] Path aliases (`@/` → `src/`)
- [x] Feature folder: `src/features/pre-join/`
- [x] `PreJoinPage` layout shell (slot-based sections)
- [x] `PreJoinScreen` container
- [x] Types + `usePreJoin` hook scaffold (for future endpoints)
- [x] `App.tsx` wired to pre-join screen
- [x] `PreJoinHeader` (logo + title)
- [x] `.env.example` for `VITE_PARTICIPANT_COUNT`
- [x] 974px max-width on pre-join layout

### Not done

- [ ] Meeting page feature (`src/features/meeting/`)
- [ ] React Router (or simple view switch) for join → meeting
---

## Project structure (target)

```
src/
├── features/
│   ├── pre-join/          # Join meeting page
│   │   ├── components/
│   │   ├── hooks/
│   │   └── types.ts
│   └── meeting/           # In-call meeting page
│       ├── components/
│       └── config.ts      # reads VITE_PARTICIPANT_COUNT
├── components/ui/         # shadcn primitives
└── App.tsx
```

---

## Notes

- Prefer **separation of concerns**: presentational components vs container/screen components; API calls go in hooks later.
- Copy visual patterns from the live Teams meeting site; no need to replicate proprietary assets exactly.
- Ignore business logic until UI is complete.
