import { ApolloCodes } from './codes'
import { NotFoundApolloError } from './notFound.error'
import { RedirectApolloError } from './redirect.error'
import { BadRequestApolloError } from './badRequest.error'

export interface ApolloErrors {
  [ApolloCodes.NEED_REDIRECT]: RedirectApolloError
  [ApolloCodes.NOT_FOUND]: NotFoundApolloError
  [ApolloCodes.BAD_REQUEST]: BadRequestApolloError
}
