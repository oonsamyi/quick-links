import { Global, Module } from '@nestjs/common'
import { Logger } from './logger.service'

@Global()
@Module({
  exports: [Logger],
  providers: [Logger],
})
export class LoggerModule {}
