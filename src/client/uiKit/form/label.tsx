import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { Title } from '../typography/title'

interface Props extends StyledProps {
  label: React.ReactNode
  children: React.ReactNode
}

export function FormLabel({ label, children, ...styledProps }: Props) {
  const style = useStyle(styledProps)

  return (
    <label style={style}>
      <Title mb={4} ml={8} size="XS" color="#A0A0A0" fontWeight="semiBold">
        {label}
      </Title>

      {children}
    </label>
  )
}
