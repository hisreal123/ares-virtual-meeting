import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export function EncryptionIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M9.72 2.08a.5.5 0 0 1 .56 0c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0 1 17 5v4.5c0 3.9-2.3 6.73-6.82 8.47a.5.5 0 0 1-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.5 15.05 15.05 0 0 0 6.3-2.42Z" />
    </svg>
  )
}

export function ChatIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M10 2a8 8 0 1 1-3.61 15.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm0 1a7 7 0 0 0-6.1 10.42.5.5 0 0 1 .06.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04A7 7 0 1 0 10 3Zm.5 8a.5.5 0 0 1 .09 1H7.5a.5.5 0 0 1-.09-1h3.09Zm2-3a.5.5 0 0 1 .09 1H7.5a.5.5 0 0 1-.09-1h5.09Z" />
    </svg>
  )
}

export function ChatFilledIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M10 2a8 8 0 1 1-3.61 15.14l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm.5 9H7.41a.5.5 0 0 0 0 1H10.59a.5.5 0 0 0 0-1h-.09Zm2-3H7.41a.5.5 0 0 0 0 1h5.18a.5.5 0 0 0 0-1h-.09Z" />
    </svg>
  )
}

export function PeopleIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0 0 17 13a2 2 0 0 0-2-2H5Zm-1 2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0 1 10 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 4 13Z" />
    </svg>
  )
}

export function PeopleFilledIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0 0 17 13a2 2 0 0 0-2-2H5Z" />
    </svg>
  )
}

export function RaiseHandIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M4 12.02c0 1.06.2 2.1.6 3.08l.6 1.42c.22.55.64 1.01 1.17 1.29.27.14.56.21.86.21h2.55c.77 0 1.49-.41 1.87-1.08.5-.87 1.02-1.7 1.72-2.43l1.32-1.39c.44-.46.97-.84 1.49-1.23l.59-.45a.6.6 0 0 0 .23-.47c0-.75-.54-1.57-1.22-1.79a3.34 3.34 0 0 0-2.78.29V4.5a1.5 1.5 0 0 0-2.05-1.4 1.5 1.5 0 0 0-2.9 0A1.5 1.5 0 0 0 6 4.5v.09A1.5 1.5 0 0 0 4 6v6.02ZM8 4.5v4a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-4a.5.5 0 0 1 1 0v6a.5.5 0 0 0 .85.37h.01c.22-.22.44-.44.72-.58.7-.35 2.22-.57 2.4.5l-.53.4c-.52.4-1.04.78-1.48 1.24l-1.33 1.38c-.75.79-1.31 1.7-1.85 2.63-.21.36-.6.58-1.01.58H7.23a.87.87 0 0 1-.4-.1 1.55 1.55 0 0 1-.71-.78l-.59-1.42a7.09 7.09 0 0 1-.53-2.7V6a.5.5 0 0 1 1 0v3.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0Z" />
    </svg>
  )
}

export function RaiseHandFilledIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M9 8.5V2.75a.75.75 0 0 1 1.5 0V8.5a.5.5 0 0 0 1 0V3.75a.75.75 0 0 1 1.5 0v6.5c.66-.43 1.4-.75 2-.75.97 0 1.79.32 1.98 1.12.02.04.02.1.02.14 0 .15-.07.3-.2.38l-1.3.99c-1.07.8-2.07 1.86-2.76 2.99-.38.6-.72 1.23-1.06 1.86-.36.68-.59 1.02-1.68 1.02H6.95C6 18 5.64 17.47 5 16a11.7 11.7 0 0 1-1-3.5V5.25a.75.75 0 0 1 1.5 0V9a.5.5 0 0 0 1 0V3.75a.75.75 0 0 1 1.5 0V8.5a.5.5 0 0 0 1 0Z" />
    </svg>
  )
}

export function ReactIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm10.5-1.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1.61 4.01a.5.5 0 1 0-.78.63 5 5 0 0 0 7.78 0 .5.5 0 1 0-.78-.63 4 4 0 0 1-6.22 0Z" />
    </svg>
  )
}

export function ReactFilledIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-6.5-1.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm.39 4.01a4 4 0 0 0 6.22 0 .5.5 0 1 1 .78.63 5 5 0 0 1-7.78 0 .5.5 0 1 1 .78-.63Z" />
    </svg>
  )
}

export function ViewIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Zm1 5v4c0 .83.67 1.5 1.5 1.5h4v-5.5H4Zm5.5-1V4h-4C4.67 4 4 4.67 4 5.5v4h5.5Zm1 1V16h4c.83 0 1.5-.67 1.5-1.5v-4h-5.5Zm5.5-1v-4c0-.83-.67-1.5-1.5-1.5h-4v5.5H16Z" />
    </svg>
  )
}

export function ViewFilledIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M5.5 3A2.5 2.5 0 0 0 3 5.5v4h6.5V3h-4Zm4 7.5H3v4A2.5 2.5 0 0 0 5.5 17h4v-6.5Zm1 0H17v4a2.5 2.5 0 0 1-2.5 2.5h-4v-6.5Zm6.5-1v-4A2.5 2.5 0 0 0 14.5 3h-4v6.5H17Z" />
    </svg>
  )
}

export function MoreIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M6.75 10a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm5 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM15 11.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
    </svg>
  )
}

export function MicOnIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M12 5v4.88l.9.9A3 3 0 0 0 13 10V5a3 3 0 0 0-6-.12l1 1V5a2 2 0 1 1 4 0ZM7 7.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-3.63-3.62a5.48 5.48 0 0 1-3.02 1.25v2.02a.5.5 0 0 1-1 0v-2.02a5.5 5.5 0 0 1-5-5.48.5.5 0 0 1 1 0 4.5 4.5 0 0 0 7.3 3.52l-1.06-1.07A3 3 0 0 1 7 10V7.7Zm4.02 4.02L8 8.71V10a2 2 0 0 0 3.02 1.72Zm3.78.96-.74-.74c.28-.59.44-1.25.44-1.94a.5.5 0 0 1 1 0c0 .97-.25 1.89-.7 2.68Z" />
    </svg>
  )
}

export function MicMutedIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M13 10a3 3 0 0 1-.1.78L7 4.88A3 3 0 0 1 13 5v5ZM7 7.7V10a3 3 0 0 0 4.74 2.45l1.07 1.07A4.5 4.5 0 0 1 5.5 10a.5.5 0 0 0-1.01 0 5.5 5.5 0 0 0 5 5.48v2.02a.5.5 0 0 0 1 0v-2.02a5.48 5.48 0 0 0 3.02-1.25l3.63 3.62a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L7 7.71Zm7.8 4.98c.45-.8.7-1.7.7-2.68a.5.5 0 0 0-1 0c0 .7-.16 1.35-.44 1.94l.74.74Z" />
    </svg>
  )
}

export function CameraOnIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M2 7a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm14.04 7.78L14 13.37V6.63l2.04-1.4c.83-.58 1.96.01 1.96 1.02v7.5c0 1-1.13 1.6-1.96 1.03Z" />
    </svg>
  )
}

export function CameraOffIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h5a3 3 0 0 0 2.93-2.36l4.22 4.21a.5.5 0 0 0 .7-.7l-15-15ZM14 11.88l3.08 3.07c.5-.14.92-.6.92-1.2v-7.5c0-1-1.13-1.6-1.96-1.03L14 6.63v5.25ZM6.12 4 13 10.88V7a3 3 0 0 0-3-3H6.12Z" />
    </svg>
  )
}

export function MicOffIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="2 2 16 16"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M13 10c0 .27-.035.53-.102.777L7.002 4.881A3 3 0 0 1 13 5v5zM7 7.707V10a3 3 0 0 0 4.738 2.445l1.07 1.07A4.5 4.5 0 0 1 5.5 10a.5.5 0 0 0-.999.001 5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-2.022a5.475 5.475 0 0 0 3.02-1.251l3.626 3.627a.5.5 0 0 0 .708-.707l-15-15a.5.5 0 1 0-.708.707L7 7.707zM14.803 12.682A5.474 5.474 0 0 0 15.5 10a.5.5 0 0 0-1 0c0 .695-.157 1.353-.439 1.94l.742.742z" />
    </svg>
  )
}

export function PinIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M10.12 3.14a2 2 0 0 1 3.2-.52l4.06 4.05a2 2 0 0 1-.52 3.2l-3.46 1.74a1.5 1.5 0 0 0-.72.78L11.25 16a1 1 0 0 1-1.64.33L7 13.7 3.7 17H3v-.7L6.3 13l-2.62-2.61a1 1 0 0 1 .34-1.64L7.6 7.32c.34-.14.62-.4.78-.72l1.73-3.46Zm2.5.18a1 1 0 0 0-1.6.26L9.29 7.04a2.5 2.5 0 0 1-1.31 1.2L4.39 9.69l5.93 5.93 1.43-3.59a2.5 2.5 0 0 1 1.2-1.3l3.46-1.74a1 1 0 0 0 .26-1.6l-4.05-4.06Z" />
    </svg>
  )
}

export function PinFilledIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M13.33 2.62a2 2 0 0 0-3.2.52L8.38 6.6a1.5 1.5 0 0 1-.78.72L4 8.75a1 1 0 0 0-.33 1.64l2.61 2.6L3 16.3v.7h.7L7 13.72l2.61 2.6a1 1 0 0 0 1.64-.33l1.43-3.59c.14-.34.4-.62.72-.78l3.46-1.73a2 2 0 0 0 .52-3.2l-4.05-4.06Z" />
    </svg>
  )
}

export function ShareIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm6 10a.5.5 0 0 1-.5-.5V7.7L7.85 9.36a.5.5 0 1 1-.7-.7l2.5-2.5c.2-.2.5-.2.7 0l2.5 2.5a.5.5 0 0 1-.7.7L10.5 7.71v5.79a.5.5 0 0 1-.5.5Z" />
    </svg>
  )
}

export function ChevronDownIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z" />
    </svg>
  )
}

export function LeaveIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M10 6c3.332-.004 5.586 1.276 7.154 2.66.66.582.962 1.458.805 2.28l-.157.83c-.148.776-.875 1.298-1.698 1.218l-1.637-.158c-.714-.069-1.243-.59-1.467-1.33-.304-1.005-.5-1.75-.5-1.75a6.188 6.188 0 0 0-2.5-.5c-1.014 0-1.738.215-2.5.5 0 0-.204.746-.5 1.75-.198.671-.504 1.257-1.203 1.327l-1.628.164a1.735 1.735 0 0 1-1.822-1.21l-.248-.828a2.255 2.255 0 0 1 .577-2.28C4.101 7.287 6.673 6.003 10 6Z" />
    </svg>
  )
}
