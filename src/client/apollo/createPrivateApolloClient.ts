import { ApolloClient, InMemoryCache } from '@apollo/client'
import { SchemaLink } from '@apollo/client/link/schema'
import { getGraphqlSchema } from 'src/shared/apollo/graphqlSchema'
import {
  ApolloClient as TApolloClient,
  PrivateApolloClientParams,
} from './types'

export function createPrivateApolloClient({
  context,
}: PrivateApolloClientParams): TApolloClient {
  const graphqlSchema = getGraphqlSchema()

  const cache = new InMemoryCache()
  const schemaLink = new SchemaLink({ schema: graphqlSchema, context })

  return new ApolloClient({
    ssrMode: true,
    link: schemaLink,
    cache,
  })
}
