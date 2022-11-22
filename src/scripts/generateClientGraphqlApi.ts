import { exec } from 'child_process'
import { Print } from './utils/print'
import { promisify } from 'util'
import { getAbsolutePath } from './utils/getAbsolutePath'

const execAsync = promisify(exec)
const print = new Print('[GRAPHQL_API]')

generateApi()
  .then(() => {
    print.success('Api сгенерировано успешно')
  })
  .catch((error) => {
    print.error(error)
  })

async function generateApi() {
  const scemaPath = getAbsolutePath('src/server/graphql/schema.graphql')
  const outputPath = getAbsolutePath('src/client/network')

  await execAsync(
    `npx zeus ${scemaPath} ${outputPath} && npx prettier --write \"${outputPath}/zeus/**/*.{ts,tsx}\"`,
  )
}
