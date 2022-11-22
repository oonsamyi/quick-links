import { createContext, useContext } from 'react'

interface TopNavigationContextValue {
  toggleMenu(): void
}

export const TopNavigationContext =
  createContext<TopNavigationContextValue | null>(null)

export function useTopNavigationContext(): TopNavigationContextValue {
  const context = useContext(TopNavigationContext)

  if (!context) {
    throw new Error('Компонент TopNavigation используется вне провайдера')
  }

  return context
}
