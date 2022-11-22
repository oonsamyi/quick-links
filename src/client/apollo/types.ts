import {
  ApolloClient as ApolloClientGeneric,
  NormalizedCacheObject,
} from '@apollo/client'
import { GetServerSidePropsContext } from 'next'
import { apolloStateName } from './constants'

// eslint-disable-next-line prettier/prettier
export interface ApolloClientParams extends PrivateApolloClientParams {
  initialState: ApolloState | null
}

export interface PrivateApolloClientParams {
  context?: NextContext
}

export interface NextContext {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}

export interface ApolloProps {
  [apolloStateName]?: ApolloState
}

export type ApolloState = NormalizedCacheObject

export type ApolloClient = ApolloClientGeneric<NormalizedCacheObject>
