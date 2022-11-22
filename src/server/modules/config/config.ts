import { ensureType } from 'src/shared/utils/assertType'
import { Config } from './types'

export function getConfig(): Config {
  const nodeEnv = ensureType({
    key: 'NODE_ENV',
    value: process.env.NODE_ENV,
    expectedType: 'string',
  })

  const serverPort = ensureType({
    key: 'SERVER_PORT',
    value: Number(process.env.SERVER_PORT),
    expectedType: 'number',
  })

  const serverHost = ensureType({
    key: 'SERVER_HOST',
    value: process.env.SERVER_HOST,
    expectedType: 'string',
  })

  const mongoDbUrl = ensureType({
    key: 'MONGODB_URL',
    value: process.env.MONGODB_URL,
    expectedType: 'string',
  })

  const prod = nodeEnv === 'production'

  return {
    dev: !prod,
    prod,
    server: {
      port: serverPort,
      host: serverHost,
    },
    client: {
      dir: 'src/client',
    },
    mongoDb: {
      url: mongoDbUrl,
    },
  }
}
