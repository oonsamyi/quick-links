import { Injectable } from '@nestjs/common'
import {
  ConfigService as NestConfigService,
  Path,
  PathValue,
} from '@nestjs/config'
import { Config } from './types'

@Injectable()
export class ConfigService extends NestConfigService<Config, true> {
  public get<P extends Path<Config>, R = PathValue<Config, P>>(
    propertyPath: P,
  ): R {
    return super.get(propertyPath, { infer: true })
  }
}
