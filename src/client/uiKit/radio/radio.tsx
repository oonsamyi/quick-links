import { RadioOptionProps, RadioOption } from './radio.option'
import { RadioContext } from './radio.context'
import { StyledProps, useStyle } from 'src/client/hooks/useStyle'

interface Props<V> extends StyledProps {
  value: V
  disabled?: boolean
  children: React.ReactElement<RadioOptionProps>[]
  onChange(value: V): void
}

export function Radio<V extends string>({
  value,
  disabled = false,
  onChange,
  children,
  ...styledProps
}: Props<V>) {
  const style = useStyle(styledProps, { display: 'inline-block' })

  return (
    <RadioContext.Provider value={{ value, disabled, onChange }}>
      <div style={style}>{children}</div>
    </RadioContext.Provider>
  )
}

Radio.Option = RadioOption
