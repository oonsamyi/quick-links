import { defaultIconProps, IconProps } from './icon'

export function HomeIcon({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.627 8.855 9.955.737 9.441.192A.608.608 0 0 0 9 0a.608.608 0 0 0-.44.192L.372 8.855c-.12.127-.215.278-.279.444A1.413 1.413 0 0 0 0 9.823c.008.74.59 1.33 1.289 1.33h.843V18h13.736v-6.847h.861c.34 0 .66-.14.9-.395.118-.125.212-.273.275-.437.064-.163.097-.338.096-.515 0-.358-.133-.696-.373-.95Zm-7.515 7.631H7.888v-4.288h2.224v4.288Zm4.326-6.846v6.846h-3.055v-4.793c0-.464-.356-.84-.795-.84H7.412c-.44 0-.794.376-.794.84v4.793H3.562V9.64H1.656l7.346-7.772.459.485 6.885 7.287h-1.908Z"
        fill={color}
      />
    </svg>
  )
}

HomeIcon.defaultProps = defaultIconProps
