import { createContext, useContext } from 'react'

interface RadioContextValue {
  value: string
  disabled: boolean
  onChange(value: string): void
}

export const RadioContext = createContext<RadioContextValue | null>(null)

export function useRadioContext(): RadioContextValue {
  const context = useContext(RadioContext)

  if (!context) {
    throw new Error('Компонент Radio используется вне провайдера')
  }

  return context
}
