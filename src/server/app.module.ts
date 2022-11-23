import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { ViewModule } from './modules/view/view.module'
import { getConfig } from './modules/config/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigService } from './modules/config/config.service'
import { ConfigModule } from './modules/config/config.module'
import { APP_FILTER } from '@nestjs/core'
import { GqlContext } from './types/graphql'
import { AllExceptionsFilter } from './filters/allExceptions.filter'
import { RedirectExceptionFilter } from './filters/redirectException.filter'
import { NotFoundExceptionFilter } from './filters/notFoundException.filter'
import { QuickLinksModule } from './modules/quickLinks/quickLinks.module'
import { LoggerModule } from './modules/logger/logger.module'
import { BadRequestExceptionFilter } from './filters/badRequestException.filter'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getConfig],
      expandVariables: true,
    }),
    LoggerModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get('mongoDb.url')

        return { uri }
      },
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      context: ({ req, res }: GqlContext) => ({ req, res }),
      cache: 'bounded',
    }),
    ViewModule,
    QuickLinksModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_FILTER,
      useClass: RedirectExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
  ],
})
export class AppModule {}
