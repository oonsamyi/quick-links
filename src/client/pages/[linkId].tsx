import { createSsrHandler } from '../network/createSsrHandler'
import { typedQuery } from '../network/apollo'
import { $, Selector } from '../network/zeus'

interface Query {
  linkId: string
}

export const redirectToLinkSelector = Selector('Query')({
  redirectToLink: [{ linkId: $`linkId` }, true],
})

export const getServerSideProps = createSsrHandler<Query>(
  ({ query, apolloClient }) =>
    typedQuery(apolloClient, redirectToLinkSelector, {
      linkId: query.linkId,
    }),
)

export default function RedirectPage() {
  return null
}
