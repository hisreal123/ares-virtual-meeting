import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export function CameraOffPreviewIcon({
  size = 20,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      role="presentation"
      focusable="false"
      viewBox="2 2 16 16"
      width={size}
      height={size}
      className={className}
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.85355 2.14652C2.65829 1.95126 2.34171 1.95126 2.14645 2.14652C1.95118 2.34178 1.95118 2.65837 2.14645 2.85363L3.50058 4.20777C2.61732 4.59341 2 5.47461 2 6.5V13.5C2 14.8807 3.11929 16 4.5 16H10.5C11.8136 16 12.8906 14.9869 12.9922 13.6994L17.1464 17.8536C17.3417 18.0489 17.6583 18.0489 17.8536 17.8536C18.0488 17.6584 18.0488 17.3418 17.8536 17.1465L2.85355 2.14652Z"
      />
      <path
        fill="currentColor"
        d="M16.7642 14.4319L15.3547 13.2334L14 11.8787V7.93076L16.7692 5.61749C17.2575 5.20956 18 5.55679 18 6.19309V13.8605C18 14.4999 17.2512 14.846 16.7642 14.4319Z"
      />
      <path
        fill="currentColor"
        d="M13 10.8787L6.12134 4H10.5C11.8807 4 13 5.11929 13 6.5V10.8787Z"
      />
    </svg>
  )
}

export function CameraOffIcon({
  size = 20,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h5a3 3 0 0 0 2.93-2.36l4.22 4.21a.5.5 0 0 0 .7-.7l-15-15ZM12 12.7V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.39-1.9L12 12.7ZM12 7v2.88l1 1V8.54l3.6-2.5c.17-.1.4.01.4.21v7.5c0 .2-.23.32-.4.2l-1.71-1.18 2.19 2.18c.5-.14.92-.6.92-1.2v-7.5c0-1-1.13-1.6-1.96-1.03L13 7.32V7a3 3 0 0 0-3-3H6.12l1 1H10a2 2 0 0 1 2 2Z" />
    </svg>
  )
}

export function CameraOnIcon({
  size = 20,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M2 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm14.04 7.78L14 13.37V6.63l2.04-1.4c.83-.58 1.96.01 1.96 1.02v7.5c0 1-1.13 1.6-1.96 1.03Z" />
    </svg>
  )
}

export function BackgroundFiltersIcon({
  size = 20,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M6.2 4 2 8.2V6.8L4.8 4h1.4ZM3.5 16H5v-1.7l-1.7 1.69.2.01Zm11.7 0H15v-1.2l3-3v1.4L15.2 16ZM18 9.7l-3.1 3.1a2.5 2.5 0 0 0-.5-.92L18 8.3v1.42ZM12.5 12a1.5 1.5 0 0 1 1.5 1.5V16h-1v-2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V16H6v-2.5c0-.08 0-.15.02-.22A1.5 1.5 0 0 1 7.5 12h5Zm-2.78-1.02a2.49 2.49 0 0 1-2.21-2.7 2.5 2.5 0 1 1 2.21 2.7ZM10 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7.88 5.09 4.84-4.85a3.48 3.48 0 0 1-.39-1.02L2 13.79v.71c0 .2.04.4.12.59Zm9.62-9.63a3.48 3.48 0 0 0-1.02-.39L11.79 4h1.42l-1.47 1.46Zm1.58 1.93a3.49 3.49 0 0 0-.48-.94L15.29 4h1.21l.2.01-3.38 3.38ZM12.45 11c.44-.43.76-.98.93-1.59l4.5-4.5c.08.18.12.38.12.59v.7l-4.87 4.88a2.5 2.5 0 0 0-.63-.08h-.05ZM2 11.7 9.7 4H8.3L2 10.3v1.4Z" />
    </svg>
  )
}

export function BackgroundFiltersFilledIcon({
  size = 20,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M6.2 4 2 8.2V6.8L4.8 4h1.4Zm7 0-1.46 1.46a3.48 3.48 0 0 0-1.02-.39L11.79 4h1.42Zm-1.08 3.17a2.51 2.51 0 0 0-2.34-1.16 2.5 2.5 0 1 0 2.34 1.16Zm.72-.72c.2.29.37.6.48.94L16.69 4 16.5 4h-1.2l-2.46 2.45ZM7.5 12c-.08 0-.15 0-.22.02A1.5 1.5 0 0 0 6 13.5V16h8v-2.5a1.5 1.5 0 0 0-1.5-1.5h-5Zm5-1c.22 0 .43.03.63.08L18 6.2V5.5c0-.2-.04-.4-.12-.59l-4.5 4.5a3.5 3.5 0 0 1-.93 1.59h.05Zm1.9.88c.23.27.4.58.5.93L18 9.7V8.29l-3.6 3.6ZM15 16v-1.2l3-3v1.4L15.2 16H15Zm-10-.3v-1.4l-1.7 1.69.2.01h1.2l.3-.3Zm1.57-6.48c.08.36.21.7.4 1.02L2.11 15.1A1.5 1.5 0 0 1 2 14.5v-.7l4.57-4.58ZM9.71 4 2 11.7v-1.4L8.3 4h1.4Z" />
    </svg>
  )
}

export function MicOffIcon({
  size = 20,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M12 5v4.88l.9.9A3 3 0 0 0 13 10V5a3 3 0 0 0-6-.12l1 1V5a2 2 0 1 1 4 0ZM7 7.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-3.63-3.62a5.48 5.48 0 0 1-3.02 1.25v2.02a.5.5 0 0 1-1 0v-2.02a5.5 5.5 0 0 1-5-5.48.5.5 0 0 1 1 0 4.5 4.5 0 0 0 7.3 3.52l-1.06-1.07A3 3 0 0 1 7 10V7.7Zm4.02 4.02L8 8.71V10a2 2 0 0 0 3.02 1.72Zm3.78.96-.74-.74c.28-.59.44-1.25.44-1.94a.5.5 0 0 1 1 0c0 .97-.25 1.89-.7 2.68Z" />
    </svg>
  )
}

export function MicOnIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M5.5 10a.5.5 0 0 0-1 0 5.5 5.5 0 0 0 5 5.48v2.02a.5.5 0 0 0 1 0v-2.02c2.8-.26 5-2.61 5-5.48a.5.5 0 0 0-1 0 4.5 4.5 0 1 1-9 0Zm7.5 0a3 3 0 0 1-6 0V5a3 3 0 0 1 6 0v5Z" />
    </svg>
  )
}

export function SpeakerIcon({ size = 18, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M4 9.5v5h3.2L12 18.2V5.8L7.2 9.5H4z" fill="currentColor" />
      <path
        d="M15.5 9a4 4 0 010 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M17.5 6.5a7.5 7.5 0 010 11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function DisclosureChevronIcon({
  size = 12,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      role="presentation"
      focusable="false"
      viewBox="-2 -2 16 16"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M3.07615 4.61732C3.23093 4.24364 3.59557 4 4.00003 4H8.00003C8.40449 4 8.76913 4.24364 8.92391 4.61732C9.07869 4.99099 8.99313 5.42111 8.70714 5.70711L6.70714 7.70711C6.31661 8.09763 5.68345 8.09763 5.29292 7.70711L3.29292 5.70711C3.00692 5.42111 2.92137 4.99099 3.07615 4.61732Z" />
    </svg>
  )
}

export function InfoIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      fill="currentColor"
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path d="M8.5 7.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3Zm.25-2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z" />
    </svg>
  )
}

export function InfoFilledIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      fill="currentColor"
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm0 5.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.5 1.25a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Z" />
    </svg>
  )
}

export function NoBackgroundIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      fill="none"
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={className}
      {...props}
    >
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.8 4.8l10.4 10.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function UploadIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      fill="none"
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={className}
      {...props}
    >
      <path
        d="M10 13.5V4M10 4 6.5 7.5M10 4l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 13.5v1.75c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25V13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CheckmarkIcon({ size = 14, className, ...props }: IconProps) {
  return (
    <svg
      fill="none"
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path
        d="M3 8.5 6.2 11.5 13 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function DismissIcon({
  size = 20,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden
      {...props}
    >
      <path
        d="M4.4 4.4a.75.75 0 0 1 1.06 0L10 8.94l4.54-4.54a.75.75 0 1 1 1.06 1.06L11.06 10l4.54 4.54a.75.75 0 1 1-1.06 1.06L10 11.06l-4.54 4.54a.75.75 0 0 1-1.06-1.06L8.94 10 4.4 5.46a.75.75 0 0 1 0-1.06Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BrowserBlockedPermissionIcon({
  size = 256,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 533 342"
      width={size}
      height={size}
      className={className}
      aria-hidden
      {...props}
    >
      <path
        fill="#aaa"
        d="M43.6 73.8h441.7c1.5 0 2.6 1.2 2.6 2.6v221.2c0 1.5-1.2 2.6-2.6 2.6H43.6c-1.5 0-2.6-1.2-2.6-2.6V76.4c0-1.5 1.2-2.6 2.6-2.6z"
      />
      <circle cx="49.8" cy="86" r="3.5" fill="#ff6159" />
      <path
        d="M49.8 89.8c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zm0-7.1c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3z"
        fill="#df514b"
      />
      <circle cx="60.4" cy="86" r="3.5" fill="#ffbd2e" />
      <path
        d="M60.4 89.8c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zm0-7.1c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3z"
        fill="#dea533"
      />
      <path
        d="M43.6 96.5h441.7c1.5 0 2.6 1.2 2.6 2.6v237.2c0 1.5-1.2 2.6-2.6 2.6H43.6c-1.5 0-2.6-1.2-2.6-2.6V99.2c0-1.5 1.2-2.7 2.6-2.7z"
        fill="#464775"
      />
      <path
        fill="#aaa"
        d="M379 7.1c-48.2 0-87.3 39.2-87.3 87.4 0 8.8 1.3 17.5 3.9 25.8h165.9c2.6-8.2 4.8-16.9 4.8-26 0-48.1-39-87.2-87.3-87.2z"
      />
      <path
        fill="#fff"
        d="M357.9 105.2l-.7.8-2.2-2.3-2.3 2.3-.7-.8 2.2-2.2-2.2-2.2.7-.8 2.3 2.3 2.2-2.3.7.8-2.2 2.2z"
      />
      <circle cx="71" cy="86" r="3.5" fill="#2ace42" />
      <path
        d="M71 89.8c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zm0-7.1c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3c-.1-1.8-1.5-3.3-3.3-3.3z"
        fill="#26ae37"
      />
      <path
        fill="#dedede"
        d="M118.7 78c1.4 0 2.5 1.2 2.5 2.6l1.8 13.2H78l1.8-13.2c0-1.4 1.1-2.6 2.5-2.6h36.4z"
      />
      <path fill="#dedede" d="M41 93.9h447v17.6H41z" />
      <path fill="#fff" d="M58.6 97.4h391.5V108H58.6z" />
      <path
        fill="#c2c3c4"
        d="M450.5 108.4H58.2V97h392.3v11.4zm-391.4-.8h390.6v-9.7H59.1v9.7z"
      />
      <path
        fill="#dedede"
        d="M458.5 58.6H298.8c-11.9 27-9.4 58.2 6.7 82.9h146.3c16.1-24.7 18.6-55.9 6.7-82.9z"
      />
      <path
        fill="#fff"
        d="M444.6 76.8H293.1c-3.1 15.8-1.9 32.1 3.7 47.2h147.9V76.8z"
      />
      <path
        fill="#c2c3c4"
        d="M442 79.5v41.9H298.6c-3-8.8-4.6-18.1-4.6-27.5 0-4.8.4-9.7 1.2-14.4H442m2.6-2.7H293.1c-3.1 15.8-1.9 32.1 3.7 47.2h147.9c-.1 0-.1-47.2-.1-47.2z"
      />
      <path
        fill="#4d4d4d"
        d="M348.1 98.7v-5.1c0-.8-.7-1.5-1.5-1.5H329c-.8 0-1.5.7-1.5 1.5v14.7c0 .8.7 1.5 1.5 1.5h17.6c.8 0 1.5-.7 1.5-1.5v-5.1l5.9 5.9V92.9l-5.9 5.8z"
      />
      <path
        fill="#fff"
        d="M360.8 119h-11.6c-1.9 0-3.5-1.5-3.5-3.4v-11c0-1.9 1.6-3.4 3.5-3.4h11.6c1.9 0 3.5 1.5 3.5 3.4v11c0 1.9-1.6 3.4-3.5 3.4z"
      />
      <path
        d="M349.2 102.9c-.9 0-1.7.7-1.8 1.6v11c0 .9.8 1.7 1.8 1.6h11.6c.9 0 1.7-.7 1.8-1.6v-11c0-.9-.8-1.7-1.8-1.6h-11.6z"
        fill="#e45541"
      />
      <path
        fill="#fff"
        d="M357.9 112.3l-.7.7-2.2-2.2-2.3 2.2-.7-.7 2.2-2.2-2.2-2.3.7-.7 2.3 2.2 2.2-2.2.7.7-2.2 2.3z"
      />
      <path
        fill="#fff"
        d="M362.3 131l-4.1-6.3-4 2.6-2.9-17.6 14.9 9.7-4 2.6 4.1 6.3-4 2.7zm-3.6-8.7l4.1 6.3 1.2-.8-4.1-6.3 3.2-2.1-9.3-6 1.8 11 3.1-2.1z"
      />
      <path d="M361.1 121.7l3.6-2.3-12.2-7.9 2.4 14.3 3.5-2.3 4.1 6.2 2.7-1.7z" />
      <path
        d="M378.7 181.2c-48.2 0-87.3-39.1-87.3-87.3s39.1-87.3 87.3-87.3S466 45.7 466 93.9c-.1 48.2-39.1 87.2-87.3 87.3zm0-169.3c-45.3 0-82 36.7-82 82s36.7 82 82 82 82-36.7 82-82c-.1-45.3-36.8-81.9-82-82z"
        fill="#d8d8d8"
      />
      <path
        fill="#4d4d4d"
        d="M411.8 96.7l-10.2-.9-4-9.4-4 9.4-10.2.9 7.8 6.7-2.3 10 8.8-5.3 8.8 5.3-2.3-10 7.6-6.7zm-14.3 8.7l-5.4 3.2 1.4-6.1-4.7-4.1 6.2-.5 2.4-5.7L400 98l6.2.5-4.7 4.1 1.4 6.1-5.4-3.3z"
      />
    </svg>
  )
}
