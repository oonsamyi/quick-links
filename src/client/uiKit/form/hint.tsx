import { StyledProps } from 'src/client/hooks/useStyle'
import { Text } from '../typography/text'

interface Props extends StyledProps {
  children: React.ReactNode
}

export function FormHint({ children }: Props) {
  return (
    <div className="wrapper">
      <div className="hint">
        <Text size="S">{children}</Text>
      </div>

      <style jsx>{`
        .wrapper {
          position: relative;
        }

        .hint {
          position: absolute;
          top: 6px;
          left: 8px;
        }
      `}</style>
    </div>
  )
}
