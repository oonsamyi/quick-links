/* eslint-disable */

export const AllTypesProps: Record<string, any> = {
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
    stub: 'Boolean',
  },
  Mutation: {
    createQuickLink: 'String',
  },
}
