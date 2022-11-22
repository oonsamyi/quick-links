import { GraphQLSchema } from 'graphql'
import getConfig, { setConfig } from 'next/config'

export interface NextConfig {
  serverRuntimeConfig: {
    graphqlSchema: GraphQLSchema
  }
}

export function setupGraphqlSchema(graphqlSchema: GraphQLSchema) {
  const config: NextConfig = {
    serverRuntimeConfig: {
      graphqlSchema,
    },
  }

  setConfig(config)
}

export function getGraphqlSchema(): GraphQLSchema {
  const config: NextConfig = getConfig()

  return config.serverRuntimeConfig.graphqlSchema
}
