import { Request } from 'express'

export interface ErrorParams {
  error: unknown
  label?: string
}

export interface HttpErrorParams {
  error: unknown
  req: Request
  additionalData?: unknown
}

interface BaseLog {
  timestamp: string
  message: unknown
}

export type Log = InfoLog | WarnLog | DebugLog | ErrorLog | HttpErrorLog

export interface InfoLog extends BaseLog {
  type: 'info'
}

export interface WarnLog extends BaseLog {
  type: 'warn'
}

export interface DebugLog extends BaseLog {
  type: 'debug'
}

export interface ErrorLog extends BaseLog {
  type: 'error'
  stack: string | null
  label?: string
}

export interface HttpErrorLog extends BaseLog {
  type: 'httpError'
  stack: string | null
  body: unknown
  additionalData?: unknown
}
