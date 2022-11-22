import { $, Selector } from 'src/client/network/zeus'

export const createQuickLinkSelector = Selector('Mutation')({
  createQuickLink: [
    {
      input: {
        link: $`link`,
      },
    },
    true,
  ],
})
