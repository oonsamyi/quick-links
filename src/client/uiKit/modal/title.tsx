import { StyledProps } from 'src/client/hooks/useStyle'
import { Title } from '../typography/title'

interface Props extends StyledProps {
  children: React.ReactNode
}

export const ModalTitle = ({ children, ...styledProps }: Props) => {
  return (
    <Title size="L" mb={24} {...styledProps}>
      {children}
    </Title>
  )
}
