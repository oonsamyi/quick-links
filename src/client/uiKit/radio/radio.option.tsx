import classNames from 'classnames'
import { useCallback } from 'react'
import { Text } from '../typography/text'
import { useRadioContext } from './radio.context'

export interface RadioOptionProps {
  id: string
  children: React.ReactNode
}

export function RadioOption({ id, children }: RadioOptionProps) {
  const { value, disabled, onChange } = useRadioContext()

  const selected = id === value

  const handleClick = useCallback(() => {
    if (selected || disabled) return

    onChange(id)
  }, [id, selected, disabled, onChange])

  return (
    <div
      className={classNames(
        'option',
        selected && 'selected',
        disabled && 'disabled',
      )}
      onClick={handleClick}
    >
      <div className="radio">{selected && <div className="circle" />}</div>

      <Text ml={10} size="XS">
        {children}
      </Text>

      <style jsx>{`
        .option {
          display: flex;
          cursor: pointer;
        }

        .option + .option {
          margin-top: 16px;
        }

        .option.disabled {
          cursor: not-allowed;
        }

        .radio {
          position: relative;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ced1d7;
          border-radius: 50%;
        }

        .option.selected .radio {
          border-color: var(--primaryColor);
        }

        .circle {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--primaryColor);
        }
      `}</style>
    </div>
  )
}
