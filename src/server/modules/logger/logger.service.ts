/* eslint-disable no-console */
import { Injectable, LoggerService as TLoggerService } from '@nestjs/common'
import { ConfigService } from '../config/config.service'
import {
  DebugLog,
  ErrorLog,
  ErrorParams,
  HttpErrorLog,
  HttpErrorParams,
  InfoLog,
  Log,
  WarnLog,
} from './types'
import { formatError } from './utils/formatError'
import { getTimestamp } from './utils/getTimestamp'

@Injectable()
export class LoggerService implements TLoggerService {
  constructor(private configService: ConfigService) {}

  log(message: unknown) {
    const log: InfoLog = {
      type: 'info',
      timestamp: getTimestamp(),
      message,
    }

    console.log(this.prepareLog(log))
  }

  warn(message: unknown) {
    const log: WarnLog = {
      type: 'warn',
      message,
      timestamp: getTimestamp(),
    }

    console.log(this.prepareLog(log))
  }

  debug(message: unknown) {
    const log: DebugLog = {
      type: 'debug',
      message,
      timestamp: getTimestamp(),
    }

    console.log(this.prepareLog(log))
  }

  error({ error, label }: ErrorParams) {
    const formattedError = formatError(error)

    const log: ErrorLog = {
      type: 'error',
      timestamp: getTimestamp(),
      label,
      ...formattedError,
    }

    console.error(this.prepareLog(log))
  }

  httpError({ error, req, additionalData }: HttpErrorParams) {
    const formattedError = formatError(error)

    const log: HttpErrorLog = {
      type: 'httpError',
      timestamp: getTimestamp(),
      body: req.body,
      additionalData,
      ...formattedError,
    }

    console.error(this.prepareLog(log))
  }

  private prepareLog(log: Log): string {
    const prod = this.configService.get('prod')

    if (prod) {
      return JSON.stringify(log)
    }

    return JSON.stringify(log, null, 2)
  }
}
