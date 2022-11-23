import { Catch, ArgumentsHost, NotFoundException } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { GqlContextType } from '@nestjs/graphql'
import { NotFoundApolloError } from 'src/shared/apollo/errors/notFound.error'

@Catch(NotFoundException)
export class NotFoundExceptionFilter extends BaseExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    if (host.getType<GqlContextType>() === 'graphql') {
      throw new NotFoundApolloError(exception.message)
    }

    super.catch(exception, host)
  }
}
