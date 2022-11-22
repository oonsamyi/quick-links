import { getDisplayName } from '../utils/react/getDisplayName'

export function withProviders<Props extends object>(
  Component: React.ComponentType<Props>,
  ...providers: React.ComponentType<{ children: React.ReactNode }>[]
): React.FC<Props> {
  const WithProviders: React.FC<Props> = (props) => {
    return providers
      .reverse()
      .reduce(
        (children, Provider) => <Provider>{children}</Provider>,
        <Component {...props} />,
      )
  }

  WithProviders.displayName = getDisplayName(WithProviders, Component)

  return WithProviders
}
