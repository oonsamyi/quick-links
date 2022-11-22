import classNames from 'classnames'
import { TypogrphyProps } from './types'
import { dynamicTextStyles, staticTextStyles } from './styles'
import { useStyle } from 'src/client/hooks/useStyle'

export function Text({
  size = 'M',
  textAlign = 'inherit',
  whiteSpace = 'inherit',
  fontWeight = 'normal',
  color = 'inherit',
  ellipsis = false,
  children,
  ...styledProps
}: TypogrphyProps) {
  const style = useStyle(styledProps, { display: 'inline' })

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
