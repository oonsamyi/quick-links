import React from 'react'

export function getDisplayName(
  Wrapper: React.ComponentType<any>,
  Component: React.ComponentType<any>,
): string {
  const componentName = Component.displayName || Component.name || 'Component'

  return `${Wrapper.name}(${componentName})`
}
