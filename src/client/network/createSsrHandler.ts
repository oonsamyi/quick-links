import { ApolloError } from '@apollo/client'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getApolloProps } from 'src/client/apollo/getApolloProps'
import { initApolloClient } from 'src/client/apollo/initApolloClient'
import { ApolloClient, ApolloProps } from 'src/client/apollo/types'
import { ApolloCodes } from 'src/shared/apollo/errors/codes'
import { ensureGraphQLError } from 'src/shared/apollo/errors/ensureGraphQLError'

interface Params<Query> {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
  query: Query
  apolloClient: ApolloClient
}

export function createSsrHandler<Query = ParsedUrlQuery>(
  request: (params: Params<Query>) => Promise<any>,
) {
  return async ({
    req,
    res,
    query,
  }: GetServerSidePropsContext): Promise<
    GetServerSidePropsResult<ApolloProps>
  > => {
    const apolloClient = initApolloClient({
      initialState: null,
      context: { req, res },
    })

    try {
      await request({
        req,
        res,
        query: query as unknown as Query,
        apolloClient,
      })
    } catch (error: unknown) {
      if (!(error instanceof ApolloError)) {
        throw error
      }

      const graphQLError = error.graphQLErrors[0]

      if (!graphQLError) {
        throw error
      }

      const redirectError = ensureGraphQLError(
        graphQLError,
        ApolloCodes.NEED_REDIRECT,
      )

      if (redirectError) {
        const { location, permanent } = redirectError.extensions

        return {
          redirect: {
            destination: location,
            permanent,
          },
        }
      }

      const notFoundError = ensureGraphQLError(
        graphQLError,
        ApolloCodes.NOT_FOUND,
      )

      if (notFoundError)
        return {
          notFound: true,
        }

      throw error
    }

    return {
      props: getApolloProps(apolloClient),
    }
  }
}
