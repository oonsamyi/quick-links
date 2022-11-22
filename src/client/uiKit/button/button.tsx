import { SpinnerTheme } from '../spinner/spinner'
import classNames from 'classnames'
import { Size, Theme } from './types'
import { staticButtonStyles } from './styles'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { LazySpinner } from '../spinner/lazySpinner'
import { usePreventedHandler } from 'src/client/hooks/usePreventedHandler'

interface Props extends StyledProps {
  children: React.ReactNode
  type?: Type
  theme?: Theme
  size?: Size
  loading?: boolean
  disabled?: boolean
  stopPropagation?: boolean
  preventDefault?: boolean
  onClick?(): void
}

type Type = 'submit' | 'reset' | 'button'

export function Button({
  children,
  type = 'button',
  theme = 'primary',
  size = 'L',
  loading,
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
      <button
        type={type}
        disabled={loading || disabled}
        className={classNames(
          'button',
          theme,
          size,
          disabled && 'disabled',
          loading && 'loading',
        )}
        style={style}
        onClick={handleClick}
      >
        <LazySpinner
          loading={!!loading}
          children={children}
          size={getSpinnerSize(size)}
          theme={getSpinnerTheme(theme)}
        />
      </button>

      <style jsx>{staticButtonStyles}</style>
    </>
  )
}

function getSpinnerTheme(theme: Theme): SpinnerTheme {
  switch (theme) {
    case 'primary':
      return 'white'

    case 'transparent':
      return 'gray'

    case 'semiPrimary':
      return 'primary'
  }
}

function getSpinnerSize(size: Size): number {
  switch (size) {
    case 'XS':
      return 16

    case 'M':
      return 18

    case 'L':
      return 20
  }
}
