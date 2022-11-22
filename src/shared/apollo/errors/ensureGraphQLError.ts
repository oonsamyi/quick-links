import { GraphQLError } from 'graphql'
import { ApolloCodes } from './codes'
import { ApolloErrors } from './errors'

export function ensureGraphQLError<C extends ApolloCodes>(
  graphQLError: GraphQLError,
  code: C,
): ApolloErrors[C] | null {
  if (graphQLError.extensions.code === code) {
    return graphQLError as ApolloErrors[C]
  }

  return null
}
