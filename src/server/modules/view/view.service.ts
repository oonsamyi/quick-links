import { Injectable, OnModuleInit } from '@nestjs/common'
import createServer from 'next'
import { NextServer } from 'next/dist/server/next'
import { Request, Response } from 'express'
import { ConfigService } from '../config/config.service'
import { parse } from 'url'
import { Logger } from '../logger/logger.service'

@Injectable()
export class ViewService implements OnModuleInit {
  private server: NextServer

  constructor(private configService: ConfigService, private logger: Logger) {}

  async onModuleInit(): Promise<void> {
    try {
      this.server = createServer({
        dev: this.configService.get('dev'),
        dir: this.configService.get('client.dir'),
      })

      await this.server.prepare()
    } catch (error) {
      this.logger.error({ error, label: 'Ошибка запуска сервера nextjs' })
    }
  }

  handler(req: Request, res: Response) {
    const parsedUrl = parse(req.url, true)

    return this.server.getRequestHandler()(req, res, parsedUrl)
  }
}
