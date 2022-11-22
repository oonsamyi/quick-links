import { StyledProps } from 'src/client/hooks/useStyle'
import { CssColor } from 'src/client/types/css'

export type Size = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'
export type TextAlign = 'inherit' | 'start' | 'center' | 'end'
export type WhiteSpace = 'inherit' | 'normal' | 'nowrap'
export type FontWeight = 'normal' | 'semiBold' | 'bold' | 'extraBold'

export interface TypogrphyProps extends StyledProps {
  size?: Size
  textAlign?: TextAlign
  whiteSpace?: WhiteSpace
  fontWeight?: FontWeight
  color?: CssColor
  ellipsis?: boolean
  children: React.ReactNode
}
