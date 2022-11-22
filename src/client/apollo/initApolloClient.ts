import { ApolloClient as TApolloClient, ApolloClientParams } from './types'
import * as createPrivateApolloClientModule from './createPrivateApolloClient'
import * as createPublicApolloClientModule from './createPublicApolloClient'

let publicApolloClient: TApolloClient | undefined

// Если стейт будет перезаписываться при навигации в браузере, добавить мерж стейтов:
// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js#L40
export function initApolloClient({
  initialState,
  context,
}: ApolloClientParams): TApolloClient {
  // Не попадет в бандл клиента: https://github.com/vercel/next.js/issues/5354#issuecomment-520305040
  if (typeof window === 'undefined') {
    const { createPrivateApolloClient } =
      require('./createPrivateApolloClient') as typeof createPrivateApolloClientModule

    const privateApolloClient = createPrivateApolloClient({ context })

    if (initialState) {
      privateApolloClient.cache.restore(initialState)
    }

    return privateApolloClient
  } else {
    const { createPublicApolloClient } =
      require('./createPublicApolloClient') as typeof createPublicApolloClientModule

    if (!publicApolloClient) {
      publicApolloClient = createPublicApolloClient()
    }

    if (initialState) {
      publicApolloClient.cache.restore(initialState)
    }

    return publicApolloClient
  }
}
