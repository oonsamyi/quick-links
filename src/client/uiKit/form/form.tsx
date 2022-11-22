import { useCallback } from 'react'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'
import { FormError } from './error'
import { FormHint } from './hint'
import { FormLabel } from './label'

interface Props extends StyledProps {
  children: React.ReactNode
  onSubmit(event: React.FormEvent): void
}

export function Form({ children, onSubmit, ...styledProps }: Props) {
  const style = useStyle(styledProps, { display: 'flex', column: true })

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      onSubmit(event)
    },
    [onSubmit],
  )

  return (
    <form style={style} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

Form.Label = FormLabel
Form.Hint = FormHint
Form.Error = FormError
