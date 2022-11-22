import { ArgumentsHost, InternalServerErrorException } from '@nestjs/common'
import { GqlArgumentsHost, GqlContextType } from '@nestjs/graphql'
import { Request } from 'express'

export function getAgnosticRequest<R extends Request = Request>(
  host: ArgumentsHost,
): R {
  if (host.getType<GqlContextType>() === 'http') {
    const httpContext = host.switchToHttp()

    return httpContext.getRequest<R>()
  }

  if (host.getType<GqlContextType>() === 'graphql') {
    const gqlHost = GqlArgumentsHost.create(host)
    const gqlContext = gqlHost.getContext<{ req: R }>()

    return gqlContext.req
  }

  throw new InternalServerErrorException('Тип запроса не определен')
}
