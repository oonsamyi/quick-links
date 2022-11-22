import { defaultIconProps, IconProps } from './icon'

export function BurgerIcon({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3h12M1 11h12H1Zm0-4h12H1Z"
        stroke={color}
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

BurgerIcon.defaultProps = defaultIconProps
