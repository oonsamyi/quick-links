import { defaultIconProps, IconProps } from './icon'

export function TickIcon({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.283 15.188.113 9.046a.381.381 0 0 1 0-.54L1.67 6.944a.38.38 0 0 1 .538 0l4.063 4.043a.382.382 0 0 0 .54-.002l8.976-9.072a.383.383 0 0 1 .542-.002l1.56 1.561c.148.15.148.39 0 .54l-9.778 9.877.001.001-1.29 1.298a.382.382 0 0 1-.54 0Z"
        fill={color}
      />
    </svg>
  )
}

TickIcon.defaultProps = defaultIconProps
