import { Catch, ArgumentsHost, NotFoundException } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { GqlContextType } from '@nestjs/graphql'
import { NotFoundApolloError } from 'src/shared/apollo/errors/notFound.error'
import { Logger } from '../modules/logger/logger.service'
import { getAgnosticRequest } from '../utils/network/getAgnosticRequest'

@Catch(NotFoundException)
export class NotFoundExceptionFilter extends BaseExceptionFilter {
  constructor(private logger: Logger) {
    super()
  }

  catch(exception: NotFoundException, host: ArgumentsHost) {
    const req = getAgnosticRequest(host)

    this.logger.httpError({ error: exception, req })

    if (host.getType<GqlContextType>() === 'graphql') {
      throw new NotFoundApolloError(exception.message)
    }

    super.catch(exception, host)
  }
}
