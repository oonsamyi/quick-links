import { ApolloError } from 'apollo-server-express'
import { ApolloCodes } from './codes'

interface Extensions {
  location: string
  permanent: boolean
  // Делает полную перезагрузку страницы на данный location вместо SPA перехода
  shouldReloadClient: boolean
}

export class RedirectApolloError extends ApolloError {
  extensions!: Extensions

  constructor(location: string, permanent = false) {
    const extensions: Extensions = {
      location,
      permanent,
      shouldReloadClient: location.startsWith('/api'),
    }

    super('Need redirect', ApolloCodes.NEED_REDIRECT, extensions)

    Object.defineProperty(this, 'name', { value: RedirectApolloError.name })
  }
}
