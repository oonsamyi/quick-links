import { ApolloError } from 'apollo-server-express'
import { ApolloCodes } from './codes'

export class BadRequestApolloError extends ApolloError {
  constructor(message: string) {
    super(message, ApolloCodes.NOT_FOUND)

    Object.defineProperty(this, 'name', { value: BadRequestApolloError.name })
  }
}
