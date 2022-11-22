import { defaultIconProps, IconProps } from './icon'

export function InfoIcon({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 .25a8.75 8.75 0 1 0 .001 17.501A8.75 8.75 0 0 0 9 .25Zm0 16.016A7.267 7.267 0 0 1 9 1.734a7.267 7.267 0 0 1 0 14.532Z"
        fill={color}
      />
      <path
        d="M8.063 5.563a.937.937 0 1 0 1.874 0 .937.937 0 0 0-1.874 0ZM9.469 7.75H8.53a.157.157 0 0 0-.156.156v5.313c0 .086.07.156.156.156h.938c.086 0 .156-.07.156-.156V7.906a.157.157 0 0 0-.156-.156Z"
        fill={color}
      />
    </svg>
  )
}

InfoIcon.defaultProps = defaultIconProps
