import classNames from 'classnames'
import { useCallback } from 'react'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { dynamicInputStyles, staticInputStyles } from './styles'
import { Size, Theme } from './types'

interface Props extends StyledProps {
  value: number
  placeholder?: string
  size?: Size
  theme?: Theme
  maxWidth?: number
  autoComplete?: string
  autoFocus?: boolean
  required?: boolean
  disabled?: boolean
  minValue?: number
  maxValue?: number
  fractionDigits?: number
  onChange(value: number): void
  onEnterPress?(): void
}

export function NumberInput({
  value,
  placeholder,
  size = 'M',
  theme = 'white',
  maxWidth,
  autoComplete,
  autoFocus,
  required,
  disabled,
  minValue = 0,
  maxValue = 10_000_000,
  fractionDigits = 2,
  onChange,
  onEnterPress = () => {},
  ...styledProps
}: Props) {
  const style = useStyle(styledProps)
  const { className, styles } = dynamicInputStyles({ maxWidth })

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // parseFloat может вернуть NaN, приводим его к 0
      const value = parseFloat(event.target.value) || 0
      const fixedValue = Number(value.toFixed(fractionDigits))
      const limitedValue = Math.max(minValue, Math.min(fixedValue, maxValue))

      onChange(limitedValue)
    },
    [onChange, minValue, maxValue, fractionDigits],
  )

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') onEnterPress()
    },
    [onEnterPress],
  )

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const forbiddenLetters = ['e', 'E', '+']

      if (fractionDigits === 0) {
        forbiddenLetters.push('.', ',')
      }

      if (minValue >= 0) {
        forbiddenLetters.push('-')
      }

      if (forbiddenLetters.includes(event.key)) {
        event.preventDefault()
      }
    },
    [fractionDigits, minValue],
  )

  return (
    <>
      <input
        type="number"
        inputMode="numeric"
        className={classNames(
          'input',
          className,
          size,
          theme,
          disabled && 'disabled',
        )}
        style={style}
        required={required}
        value={value || ''}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
      />

      {styles}
      <style jsx>{staticInputStyles}</style>

      <style jsx>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type='number'] {
          -moz-appearance: textfield;
        }
      `}</style>
    </>
  )
}
