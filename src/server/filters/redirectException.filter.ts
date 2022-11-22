import { Catch, ArgumentsHost } from '@nestjs/common'
import { BaseExceptionFilter, HttpAdapterHost } from '@nestjs/core'
import { GqlContextType } from '@nestjs/graphql'
import { Response } from 'express'
import { RedirectApolloError } from 'src/shared/apollo/errors/redirect.error'
import { RedirectException } from '../exceptions/redirect.exception'

@Catch(RedirectException)
export class RedirectExceptionFilter extends BaseExceptionFilter {
  constructor(protected httpAdapterHost: HttpAdapterHost) {
    super()
  }

  catch(exception: RedirectException, host: ArgumentsHost) {
    if (host.getType<GqlContextType>() === 'graphql') {
      throw new RedirectApolloError(exception.location, exception.permanent)
    }

    if (host.getType<GqlContextType>() === 'http') {
      const { httpAdapter } = this.httpAdapterHost
      const context = host.switchToHttp()
      const response = context.getResponse<Response>()

      return httpAdapter.redirect(
        response,
        exception.getStatus(),
        exception.location,
      )
    }

    super.catch(exception, host)
  }
}
