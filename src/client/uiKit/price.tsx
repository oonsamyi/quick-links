import { useMemo } from 'react'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { CssColor } from '../types/css'
import { Text } from './typography/text'
import { FontWeight, Size } from './typography/types'

interface Props extends StyledProps {
  children: number
  size?: Size
  fontWeight?: FontWeight
  color?: CssColor
}

export function Price({
  children,
  size = 'M',
  fontWeight = 'semiBold',
  color = 'primary',
  ...styledProps
}: Props) {
  const style = useStyle(styledProps)

  const price = useMemo(() => {
    const preparedPrice = children
      .toLocaleString('ru-RU', {
        minimumFractionDigits: 2,
        // С бэка должно приходить максимум 2 знака после запятой.
        // Но, если пришло больше => есть проблемы в расчетах на беке, мы это заметим на ui
        maximumFractionDigits: 8,
      })
      .replace(' ', '&nbsp;')

    return preparedPrice
  }, [children])

  return (
    <span style={style}>
      <Text size={size} fontWeight={fontWeight} color={color}>
        {price}
      </Text>
      &nbsp;
      <Text size={currencySize[size]} fontWeight={fontWeight} color={color}>
        ₽
      </Text>
    </span>
  )
}

const currencySize: Record<Size, Size> = {
  XXS: 'XXS',
  XS: 'XXS',
  S: 'XS',
  M: 'S',
  L: 'M',
  XL: 'L',
  XXL: 'XL',
}
