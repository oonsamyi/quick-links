import { useMemo } from 'react'
import { apolloStateName } from './constants'
import { initApolloClient } from './initApolloClient'
import { ApolloClient, ApolloProps } from './types'

export function useApollo(props: ApolloProps): ApolloClient {
  const initialState = props[apolloStateName] || null

  const apolloClient = useMemo(
    () => initApolloClient({ initialState }),
    [initialState],
  )

  return apolloClient
}
