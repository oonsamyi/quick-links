import classNames from 'classnames'
import { HTMLInputTypeAttribute, useCallback } from 'react'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'

interface Props extends StyledProps {
  value: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  size?: Size
  maxWidth?: number
  autoComplete?: string
  autoFocus?: boolean
  required?: boolean
  disabled?: boolean
  onChange(value: string): void
  onEnterPress?(): void
}

export type Size = 'S' | 'M'

export function TextArea({
  value,
  placeholder,
  type,
  size = 'M',
  maxWidth,
  autoComplete,
  autoFocus,
  required,
  disabled,
  onChange,
  ...styledProps
}: Props) {
  const style = useStyle(styledProps)

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.target.value)
    },
    [onChange],
  )

  return (
    <>
      <textarea
        className={classNames('textarea', size, disabled && 'disabled')}
        style={style}
        required={required}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        onChange={handleChange}
      />

      <style jsx>{`
        .textarea {
          line-height: 18px;
          font-size: 12px;
          width: 100%;
          border-radius: 8px;
          background-color: #f0f0f3;
          border: 1px solid #f0f0f3;
          transition: border-color 0.5s ease;
          height: 70px;
          max-height: 300px;
          resize: vertical;
        }

        .textarea:focus {
          border-color: var(--primaryColor);
        }

        .disabled {
          cursor: not-allowed;
          color: #ced1d7;
        }

        .S {
          padding: 6px 10px;
          min-height: 30px;
        }

        .M {
          padding: 12px 14px;
          min-height: 44px;
        }
      `}</style>
    </>
  )
}
