import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { usePreventedHandler } from 'src/client/hooks/usePreventedHandler'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { staticButtonStyles } from './styles'
import { Size, Theme } from './types'

interface Props extends StyledProps {
  children: React.ReactNode
  href: LinkProps['href']
  theme?: Theme
  size?: Size
  disabled?: boolean
  stopPropagation?: boolean
  preventDefault?: boolean
  onClick?(): void
}

export function LinkButton({
  children,
  theme = 'primary',
  size = 'L',
  href,
  disabled,
  stopPropagation = false,
  preventDefault = false,
  onClick = () => {},
  ...styledProps
}: Props) {
  const style = useStyle(styledProps)

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
          className={classNames('button', theme, size, disabled && 'disabled')}
          style={style}
          onClick={handleClick}
        >
          {children}
        </a>
      </Link>

      <style jsx>{staticButtonStyles}</style>
    </>
  )
}
