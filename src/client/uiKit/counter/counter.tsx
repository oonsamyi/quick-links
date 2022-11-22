import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { IconButton } from '../iconButton/iconButton'
import PlusIcon from './icons/plus.svg'
import MinusIcon from './icons/minus.svg'
import { LazySpinner } from '../spinner/lazySpinner'
import { Text } from '../typography/text'

interface Props extends StyledProps {
  value: number
  min?: number
  max?: number
  loading?: boolean
  onDecrease(): void
  onIncrease(): void
}

export function Counter({
  value,
  min,
  max,
  loading,
  onDecrease,
  onIncrease,
  ...styledProps
}: Props) {
  const style = useStyle(styledProps)

  const handleDecrease = () => {
    if (loading) return
    onDecrease()
  }

  const handleIncrease = () => {
    if (loading) return
    onIncrease()
  }

  return (
    <div className="counter" style={style}>
      <IconButton
        size="S"
        title="Decrease"
        disabled={value === min}
        onClick={handleDecrease}
      >
        <MinusIcon />
      </IconButton>

      <div className="count">
        <LazySpinner loading={!!loading} size={18} theme="gray">
          <Text size="L" fontWeight="bold">
            {value}
          </Text>
        </LazySpinner>
      </div>

      <IconButton
        size="S"
        title="Increase"
        disabled={value === max}
        onClick={handleIncrease}
      >
        <PlusIcon />
      </IconButton>

      <style jsx>{`
        .counter {
          display: flex;
          align-items: center;
        }

        .count {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
        }
      `}</style>
    </div>
  )
}
