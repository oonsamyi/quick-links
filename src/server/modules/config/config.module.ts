import { Global, Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'
import { ConfigService } from './config.service'

@Global()
@Module({
  exports: [ConfigService],
  providers: [ConfigService],
})
export class ConfigModule extends NestConfigModule {}
