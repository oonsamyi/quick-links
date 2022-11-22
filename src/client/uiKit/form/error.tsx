import { StyledProps } from 'src/client/hooks/useStyle'
import { Text } from '../typography/text'

interface Props extends StyledProps {
  children: React.ReactNode
}

export function FormError({ children }: Props) {
  return (
    <div className="wrapper">
      <div className="hint">
        <Text size="XS" color="red">
          {children}
        </Text>
      </div>

      <style jsx>{`
        .wrapper {
          position: relative;
        }

        .hint {
          position: absolute;
          top: 4px;
          left: 8px;
        }
      `}</style>
    </div>
  )
}
