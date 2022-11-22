import { Zeus, GraphQLTypes, InputType, ValueTypes } from './zeus/index'
import {
  gql,
  useQuery,
  useLazyQuery,
  useMutation,
  OperationVariables,
} from '@apollo/client'
import { ApolloClient } from '../apollo/types'
import type {
  QueryHookOptions,
  LazyQueryHookOptions,
  MutationHookOptions,
} from '@apollo/client'

export function useTypedQuery<Z extends ValueTypes[O], O extends 'Query'>(
  query: Z | ValueTypes[O],
  options?: QueryHookOptions<InputType<GraphQLTypes[O], Z>>,
  operationName?: string,
) {
  return useQuery<InputType<GraphQLTypes[O], Z>>(
    gql(Zeus('query', query, operationName)),
    withDefaultOptions(options),
  )
}

export function useTypedLazyQuery<Z extends ValueTypes[O], O extends 'Query'>(
  LazyQuery: Z | ValueTypes[O],
  options?: LazyQueryHookOptions<InputType<GraphQLTypes[O], Z>>,
  operationName?: string,
) {
  return useLazyQuery<InputType<GraphQLTypes[O], Z>>(
    gql(Zeus('query', LazyQuery, operationName)),
    withDefaultOptions(options),
  )
}

export function useTypedMutation<Z extends ValueTypes[O], O extends 'Mutation'>(
  mutation: Z | ValueTypes[O],
  options?: MutationHookOptions<InputType<GraphQLTypes[O], Z>>,
  operationName?: string,
) {
  return useMutation<InputType<GraphQLTypes[O], Z>>(
    gql(Zeus('mutation', mutation, operationName)),
    withDefaultOptions(options),
  )
}

export function typedQuery<Z extends ValueTypes['Query']>(
  client: ApolloClient,
  query: Z,
  variables?: OperationVariables,
) {
  return client.query<InputType<GraphQLTypes['Query'], Z> | void>({
    query: gql(Zeus('query', query)),
    variables,
  })
}

function withDefaultOptions<O extends object | undefined>(options: O): O {
  return { onError: () => {}, ...options }
}
