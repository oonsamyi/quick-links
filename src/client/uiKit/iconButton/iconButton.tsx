import classNames from 'classnames'
import { usePreventedHandler } from 'src/client/hooks/usePreventedHandler'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { CssColor } from 'src/client/types/css'
import { LazySpinner } from '../spinner/lazySpinner'
import { SpinnerTheme } from '../spinner/spinner'
import { dynamicIconButtonStyles, staticIconButtonStyles } from './styles'
import { Size, Theme } from './types'

interface Props extends StyledProps {
  children: React.ReactNode
  title: string
  theme?: Theme
  color?: CssColor
  hoverColor?: CssColor
  size?: Size
  loading?: boolean
  disabled?: boolean
  stopPropagation?: boolean
  preventDefault?: boolean
  tabIndex?: number
  onClick?(): void
}

export function IconButton({
  children,
  title,
  theme = 'primary',
  color = 'inherit',
  hoverColor = 'inherit',
  size = 'S',
  loading,
  disabled,
  stopPropagation = false,
  preventDefault = false,
  tabIndex,
  onClick = () => {},
  ...styledProps
}: Props) {
  const style = useStyle(styledProps, defaultStyledProps)
  const { className, styles } = dynamicIconButtonStyles({
    color,
    hoverColor,
  })

  const handleClick = usePreventedHandler({
    handler: onClick,
    stopPropagation,
    preventDefault,
  })

  return (
    <>
      <button
        type="button"
        className={classNames(
          'button',
          className,
          size,
          theme,
          loading && 'loading',
          disabled && 'disabled',
        )}
        style={style}
        disabled={loading || disabled}
        title={title}
        tabIndex={tabIndex}
        onClick={handleClick}
      >
        <LazySpinner
          loading={!!loading}
          children={children}
          size={getSpinnerSize(size)}
          theme={getSpinnerTheme(theme)}
        />
      </button>

      {styles}
      <style jsx>{staticIconButtonStyles}</style>
    </>
  )
}

const defaultStyledProps = {
  shrink: false,
}

function getSpinnerTheme(theme: Theme): SpinnerTheme {
  switch (theme) {
    case 'primary':
      return 'white'

    case 'transparent':
    case 'white':
      return 'gray'
  }
}

function getSpinnerSize(size: Size): number {
  switch (size) {
    case 'XS':
      return 14

    case 'S':
      return 16

    case 'M':
      return 18
  }
}
