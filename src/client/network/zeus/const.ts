/* eslint-disable */

export const AllTypesProps: Record<string, any> = {
  Query: {
    lastQuickLinks: {
      input: {
        type: 'LastQuickLinksInput',
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    redirectToLink: {
      linkId: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  Mutation: {
    createQuickLink: {
      input: {
        type: 'CreateQuickLinkInput',
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  LastQuickLinksInput: {
    count: {
      type: 'Int',
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  CreateQuickLinkInput: {
    link: {
      type: 'String',
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
}

export const ReturnTypes: Record<string, any> = {
  Query: {
    lastQuickLinks: 'QuickLink',
    redirectToLink: 'String',
  },
  Mutation: {
    createQuickLink: 'QuickLink',
  },
  QuickLink: {
    id: 'String',
    quickLink: 'String',
    longLink: 'String',
  },
}
