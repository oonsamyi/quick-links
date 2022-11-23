import { Controller, Get, Param } from '@nestjs/common'
import { RedirectException } from 'src/server/exceptions/redirect.exception'
import { QuickLinksService } from './quickLinks.service'

@Controller('/')
export class QuickLinksController {
  constructor(private quickLinksService: QuickLinksService) {}

  @Get(':linkId')
  public async getQuickLink(@Param('linkId') linkId: string) {
    const quickLink = await this.quickLinksService.find(linkId)

    throw new RedirectException(quickLink)
  }
}
