import { apolloStateName } from './constants'
import { ApolloClient, ApolloProps } from './types'

export function getApolloProps(client: ApolloClient): ApolloProps {
  return {
    [apolloStateName]: client.cache.extract(),
  }
}
