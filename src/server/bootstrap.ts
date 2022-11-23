import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { GraphQLSchemaHost } from '@nestjs/graphql'
import { setupGraphqlSchema } from 'src/shared/apollo/graphqlSchema'
import { AppModule } from './app.module'
import { ConfigService } from './modules/config/config.service'
import { LoggerService } from './modules/logger/logger.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true })

  const loggerService = app.get(LoggerService)
  const configService = app.get(ConfigService)

  app.useLogger(loggerService)
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(
    configService.get('server.port'),
    configService.get('server.host'),
  )

  const { schema } = app.get(GraphQLSchemaHost)

  setupGraphqlSchema(schema)

  const serverUrl = await app.getUrl()

  loggerService.log(`Сервер успешно запущен: ${serverUrl}`)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap()
