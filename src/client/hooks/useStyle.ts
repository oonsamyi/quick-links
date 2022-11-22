import { omit, pick } from 'lodash'
import { CSSProperties, useMemo } from 'react'
import { Property } from 'csstype'

export interface StyledProps {
  mt?: Margin
  mr?: Margin
  mb?: Margin
  ml?: Margin
  m?: Margins
  display?: Display
  alignItems?: Property.AlignItems
  justifyContent?: Property.JustifyContent
  alignSelf?: Property.AlignSelf
  justifySelf?: Property.JustifySelf
  column?: boolean
  shrink?: boolean
  grow?: boolean
  minWidth?: string | number
}

type Display = 'inline' | 'block' | 'inline-block' | 'flex' | 'inline-flex'

type Margins =
  | [Margin, Margin]
  | [Margin, Margin, Margin]
  | [Margin, Margin, Margin, Margin]

type Margin = string | number

export function useStyle(
  props: StyledProps,
  defaultProps: StyledProps = {},
): CSSProperties {
  const {
    m = defaultProps.m,
    mt = defaultProps.mt,
    mr = defaultProps.mr,
    mb = defaultProps.mb,
    ml = defaultProps.ml,
    display = defaultProps.display,
    alignItems = defaultProps.alignItems,
    justifyContent = defaultProps.justifyContent,
    alignSelf = defaultProps.alignSelf,
    justifySelf = defaultProps.justifySelf,
    column = defaultProps.column,
    shrink = defaultProps.shrink,
    grow = defaultProps.grow,
    minWidth = defaultProps.minWidth,
  } = props

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const margins = useMemo(() => (m ? getMargins(m) : null), [...(m || [])])

  return useMemo<CSSProperties>(
    () => ({
      ...(margins && { margin: margins }),
      ...(mt !== undefined && { marginTop: mt }),
      ...(mr !== undefined && { marginRight: mr }),
      ...(mb !== undefined && { marginBottom: mb }),
      ...(ml !== undefined && { marginLeft: ml }),
      ...(display && { display }),
      ...(alignItems && { alignItems }),
      ...(justifyContent && { justifyContent }),
      ...(alignSelf && { alignSelf }),
      ...(justifySelf && { justifySelf }),
      ...(column && { flexDirection: 'column' }),
      ...(shrink === false && { flexShrink: 0 }),
      ...(grow && { flexGrow: 1 }),
      ...(minWidth && { minWidth }),
    }),
    [
      mt,
      mr,
      mb,
      ml,
      margins,
      display,
      alignItems,
      justifyContent,
      alignSelf,
      justifySelf,
      column,
      shrink,
      grow,
      minWidth,
    ],
  )
}

export function extractStyledProps<Props extends StyledProps>(
  props: Props,
): [Pick<StyledProps, keyof StyledProps>, Omit<Props, keyof StyledProps>] {
  const styledKeys = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'display',
    'alignItems',
    'justifyContent',
    'alignSelf',
    'justifySelf',
    'column',
    'shrink',
    'grow',
    'minWidth',
  ] as const

  return [pick(props, styledKeys), omit(props, styledKeys)]
}

function getMargins(margins: Margins): string {
  if (margins.length === 2) {
    const [top, right] = margins
    return `${getMarginUnit(top)} ${getMarginUnit(right)}`
  }

  if (margins.length === 3) {
    const [top, right, bottom] = margins
    // prettier-ignore
    return `${getMarginUnit(top)} ${getMarginUnit(right)} ${getMarginUnit(bottom)}`
  }

  const [top, right, bottom, left] = margins
  // prettier-ignore
  return `${getMarginUnit(top)} ${getMarginUnit(right)} ${getMarginUnit(bottom)} ${getMarginUnit(left)}`
}

function getMarginUnit(margin: Margin): string {
  if (typeof margin === 'number') return `${margin}px`
  return margin
}
