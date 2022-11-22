import { defaultIconProps, IconProps } from './icon'

export function EmptyImageIcon({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        <path d="M10.92 2.492A2.133 2.133 0 0 1 13.33.677l9.507 1.336a2.133 2.133 0 0 1 1.815 2.41L23.02 16.04a2.133 2.133 0 0 1-2.41 1.816l-1.677-.236-.603-4.393 2.875.404 1.336-9.507-9.507-1.336-.308 2.193-2.201.336.397-2.826Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.637 8.413a2.133 2.133 0 0 0-1.816 2.41l1.633 11.619a2.133 2.133 0 0 0 2.41 1.815l9.506-1.336a2.133 2.133 0 0 0 1.816-2.41L15.553 8.894a2.133 2.133 0 0 0-2.41-1.816L3.637 8.413Zm1.798 5.133a1.067 1.067 0 1 0-.297-2.113 1.067 1.067 0 0 0 .297 2.113Zm8.599-.132.89 6.338-9.506 1.336 3.03-4.304 2.05 1.651 3.536-5.02Z"
        />
      </g>
    </svg>
  )
}

EmptyImageIcon.defaultProps = defaultIconProps
