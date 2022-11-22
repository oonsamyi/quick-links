import classNames from 'classnames'
import { dynamicTextStyles, staticTextStyles } from './styles'
import { TypogrphyProps } from './types'
import { useStyle } from 'src/client/hooks/useStyle'

const defaultSize = 'XL'

export function Title({
  size = defaultSize,
  textAlign = 'inherit',
  whiteSpace = 'inherit',
  fontWeight = 'bold',
  color = 'inherit',
  ellipsis = false,
  children,
  ...styledProps
}: TypogrphyProps) {
  const style = useStyle(styledProps, {
    display: 'block',
  })

  const { className, styles } = dynamicTextStyles({
    textAlign,
    whiteSpace,
    fontWeight,
    color,
  })

  return (
    <div
      style={style}
      className={classNames('text', size, ellipsis && 'ellipsis', className)}
    >
      {children}
      {styles}
      <style jsx>{staticTextStyles}</style>
    </div>
  )
}
