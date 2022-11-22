import { Property } from 'csstype'

export interface IconProps {
  size: number
  color: Property.Color
}

export const defaultIconProps = {
  size: 18,
  color: 'black',
}
