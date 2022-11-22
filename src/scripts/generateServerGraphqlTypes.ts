import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { Print } from './utils/print'
import { graphqlFilesPattern } from './constants/graphql'
import { getAbsolutePath } from './utils/getAbsolutePath'

const print = new Print('[GRAPHQL_TYPES]')

generateTypes()
  .then(() => {
    print.success('Типы сгенерированы успешно')
  })
  .catch((error) => {
    print.error(error)
  })

async function generateTypes() {
  const definitionsFactory = new GraphQLDefinitionsFactory()

  await definitionsFactory.generate({
    typePaths: [getAbsolutePath(graphqlFilesPattern)],
    path: getAbsolutePath('src/server/graphql/types.ts'),
    outputAs: 'class',
  })
}
