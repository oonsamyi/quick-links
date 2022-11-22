import { createContext, useContext } from 'react'
import { NavigatorActions, NavigatorRefs, NavigatorState } from './types'

interface NavigatorContextValue {
  state: NavigatorState
  actions: NavigatorActions
  refs: NavigatorRefs
}

export const NavigatorContext = createContext<NavigatorContextValue | null>(
  null,
)

export function useNavigatorContext(): NavigatorContextValue {
  const context = useContext(NavigatorContext)

  if (!context) {
    throw new Error('Компонент Navigator используется вне провайдера')
  }

  return context
}
