import { defaultIconProps, IconProps } from './icon'

interface Props extends IconProps {
  direction: Direction
}

type Direction = 'top' | 'right' | 'bottom' | 'left'

export function ArrowIcon({ size, color, direction }: Props) {
  return (
    <div
      className="wrapper"
      style={{ transform: `rotate(${rotate[direction]}deg)` }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.959.358 4.35 8.136a1.241 1.241 0 0 0 0 1.728l7.609 7.778a1.177 1.177 0 0 0 1.69 0 1.241 1.241 0 0 0 0-1.728L6.887 9l6.764-6.914a1.241 1.241 0 0 0 0-1.728 1.177 1.177 0 0 0-1.691 0Z"
          fill={color}
        />
      </svg>

      <style jsx>{`
        .wrapper {
          display: inline-flex;
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  )
}

ArrowIcon.defaultProps = {
  ...defaultIconProps,
  direction: 'bottom',
}

const rotate: Record<Direction, number> = {
  top: 90,
  right: 180,
  bottom: -90,
  left: 0,
}
