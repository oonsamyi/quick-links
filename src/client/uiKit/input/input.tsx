import classNames from 'classnames'
import { HTMLInputTypeAttribute, useCallback } from 'react'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { dynamicInputStyles, staticInputStyles } from './styles'
import { Size, Theme } from './types'

interface Props extends StyledProps {
  value: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  size?: Size
  theme?: Theme
  maxWidth?: number
  autoComplete?: string
  autoFocus?: boolean
  required?: boolean
  disabled?: boolean
  onChange?(value: string): void
  onEnterPress?(): void
}

export function Input({
  value,
  placeholder,
  type,
  size = 'M',
  theme = 'white',
  maxWidth,
  autoComplete,
  autoFocus,
  required,
  disabled,
  onChange = () => {},
  onEnterPress = () => {},
  ...styledProps
}: Props) {
  const style = useStyle(styledProps)
  const { className, styles } = dynamicInputStyles({ maxWidth })

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value)
    },
    [onChange],
  )

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') onEnterPress()
    },
    [onEnterPress],
  )

  return (
    <>
      <input
        className={classNames(
          'input',
          className,
          size,
          theme,
          disabled && 'disabled',
        )}
        style={style}
        required={required}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />

      {styles}
      <style jsx>{staticInputStyles}</style>
    </>
  )
}
