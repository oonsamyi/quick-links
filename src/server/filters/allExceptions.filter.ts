import {
  Catch,
  ArgumentsHost,
  HttpException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { GqlContextType } from '@nestjs/graphql'
import { Logger } from '../modules/logger/logger.service'
import { getAgnosticRequest } from '../utils/network/getAgnosticRequest'

/**
 * Правила, которыx нужно придерживаться при написании любого фильтра:
 * 1) BaseExceptionFilter нужен, только если мы хотим передать ему управление после обработки http ошибки
 * 2) Если запрос - graphql, ошибку всегда выбрасываем. Она корректно обрабатывается nestjs
 * и возвращается клиенту в поле errors со статусом 200
 * 3) Если запрос - http, ошибку нужно передавать в BaseExceptionFilter - super.catch(exception, host).
 * Выкидывать ошибку в этом случае нельзя, поскольку запрос подвиснет
 *
 * Данные правила были определены экспериментальным путем, в документации этих сведений нет
 */
@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(private logger: Logger) {
    super()
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const req = getAgnosticRequest(host)

    if (!(exception instanceof BadRequestException)) {
      this.logger.httpError({ error: exception, req })
    }

    const preparedException = prepareException(exception)

    if (host.getType<GqlContextType>() === 'graphql') {
      throw preparedException
    }

    super.catch(preparedException, host)
  }
}

function prepareException(exception: unknown): HttpException {
  if (exception instanceof HttpException) return exception

  if (typeof exception === 'string')
    return new InternalServerErrorException(exception)

  if (exception instanceof Error)
    return new InternalServerErrorException(exception.message)

  return new InternalServerErrorException()
}
