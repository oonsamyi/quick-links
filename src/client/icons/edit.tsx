import { defaultIconProps, IconProps } from './icon'

export function EditIcon({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M11.59 1.585a1.997 1.997 0 1 1 2.825 2.824l-9.532 9.532L1 15l1.06-3.883L6.824 6.35l4.766-4.766Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

EditIcon.defaultProps = defaultIconProps
