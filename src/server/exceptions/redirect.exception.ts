import { HttpException } from '@nestjs/common'

export class RedirectException extends HttpException {
  location: string
  permanent: boolean

  constructor(location: string, permanent = false) {
    super('Need redirect', permanent ? 301 : 302)

    this.location = location
    this.permanent = permanent
  }
}
