import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { toast } from 'react-toastify'
import { apolloIgnoreError } from './constants'
import { ApolloClient as TApolloClient } from './types'

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (!operation.variables[apolloIgnoreError]) {
    if (graphQLErrors?.length) toast.error(graphQLErrors[0].message)
    if (networkError) toast.error(networkError.message)
  }
})

const httpLink = new HttpLink({ uri: '/graphql' })

export function createPublicApolloClient(): TApolloClient {
  const cache = new InMemoryCache()

  return new ApolloClient({
    connectToDevTools: true,
    link: from([errorLink, httpLink]),
    uri: '/graphql',
    cache,
  })
}
