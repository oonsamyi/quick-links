import fs from 'fs/promises'
import { GraphQLTypesLoader } from '@nestjs/graphql'
import { graphqlFilesPattern } from './constants/graphql'
import { getAbsolutePath } from './utils/getAbsolutePath'
import { Print } from './utils/print'

const print = new Print('[GRAPHQL_SCHEMA]')

readGraphqlSchema()
  .then(writeGraphqlSchema)
  .then(() => {
    print.success('Cхема сгенерирована успешно')
  })
  .catch((error) => {
    print.error(error)
  })

async function readGraphqlSchema(): Promise<string> {
  const topComment =
    '# 🚨 ВНИМАНИЕ! Файл сгенерирован автоматически с помощью команды "npm run gen-schema"\n'
  const graphqlFilesPath = getAbsolutePath(graphqlFilesPattern)
  const gqlTypesLoader = new GraphQLTypesLoader()

  const schema = await gqlTypesLoader.mergeTypesByPaths(graphqlFilesPath)

  return [topComment, schema].join('\n')
}

async function writeGraphqlSchema(graphQLSchema: string) {
  const schemaPath = getAbsolutePath('src/server/graphql/schema.graphql')

  await fs.writeFile(schemaPath, graphQLSchema)
}
