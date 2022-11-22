import { defaultIconProps, IconProps } from './icon'

export function CloseIcon({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m11.003 9.124 5.728-5.715a1.338 1.338 0 0 0-1.892-1.892L9.125 7.245 3.411 1.517a1.337 1.337 0 1 0-1.892 1.892l5.728 5.715-5.728 5.715a1.331 1.331 0 0 0 0 1.892 1.33 1.33 0 0 0 1.892 0l5.714-5.729 5.714 5.729a1.33 1.33 0 0 0 1.892 0 1.334 1.334 0 0 0 0-1.892l-5.728-5.715Z"
        fill={color}
      />
    </svg>
  )
}

CloseIcon.defaultProps = defaultIconProps
