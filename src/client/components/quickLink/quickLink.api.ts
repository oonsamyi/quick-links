import { gql } from '@apollo/client'
import { $, Selector, Zeus } from 'src/client/network/zeus'
import { lastLinksCount } from './constants'

export const lastQuickLinksSelector = Selector('Query')({
  lastQuickLinks: [
    {
      input: {
        count: lastLinksCount,
      },
    },
    {
      id: true,
      quickLink: true,
      longLink: true,
    },
  ],
})

export const lastQuickLinksQuery = gql(Zeus('query', lastQuickLinksSelector))

export const createQuickLinkSelector = Selector('Mutation')({
  createQuickLink: [
    {
      input: {
        link: $`link`,
      },
    },
    { quickLink: true },
  ],
})
