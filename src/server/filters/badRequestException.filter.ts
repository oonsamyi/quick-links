import { Catch, ArgumentsHost, BadRequestException } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { GqlContextType } from '@nestjs/graphql'
import { isObject } from 'lodash'
import { BadRequestApolloError } from 'src/shared/apollo/errors/badRequest.error'

@Catch(BadRequestException)
export class BadRequestExceptionFilter extends BaseExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    if (host.getType<GqlContextType>() === 'graphql') {
      const message = getBadRequestMessage(exception)

      throw new BadRequestApolloError(message)
    }

    super.catch(exception, host)
  }
}

function getBadRequestMessage(exception: BadRequestException): string {
  const response = exception.getResponse()

  if (isObject(response)) {
    const { message } = response as Record<string, unknown>

    if (Array.isArray(message) && typeof message[0] === 'string')
      return message[0]
  }

  return exception.message
}
