import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { usePreventedHandler } from 'src/client/hooks/usePreventedHandler'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { CssColor } from 'src/client/types/css'
import { dynamicIconButtonStyles, staticIconButtonStyles } from './styles'
import { Size, Theme } from './types'

interface Props extends StyledProps {
  children: React.ReactNode
  title: string
  href: LinkProps['href']
  theme?: Theme
  color?: CssColor
  hoverColor?: CssColor
  size?: Size
  disabled?: boolean
  stopPropagation?: boolean
  preventDefault?: boolean
  onClick?(): void
}

export function LinkIconButton({
  children,
  title,
  href,
  theme = 'primary',
  color = 'inherit',
  hoverColor = 'inherit',
  size = 'S',
  disabled,
  stopPropagation = false,
  preventDefault = false,
  onClick = () => {},
  ...styledProps
}: Props) {
  const style = useStyle(styledProps, defaultStyledProps)
  const { className, styles } = dynamicIconButtonStyles({ color, hoverColor })

  const handleClick = usePreventedHandler({
    handler: onClick,
    stopPropagation,
    preventDefault,
  })

  return (
    <>
      <Link href={disabled ? '#' : href}>
        <a
          draggable={false}
          className={classNames(
            'button',
            className,
            size,
            theme,
            disabled && 'disabled',
          )}
          style={style}
          title={title}
          onClick={handleClick}
        >
          {children}
        </a>
      </Link>

      {styles}
      <style jsx>{staticIconButtonStyles}</style>
    </>
  )
}

const defaultStyledProps = {
  shrink: false,
}
