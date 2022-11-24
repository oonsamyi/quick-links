import { Args, Resolver, Mutation, Context, Query } from '@nestjs/graphql'
import { RedirectException } from 'src/server/exceptions/redirect.exception'
import { QuickLink } from 'src/server/graphql/types'
import { GqlContext } from 'src/server/types/graphql'
import { CreateQuickLinkDto, LastQuickLinksDto } from './quickLinks.dto'
import { QuickLinksService } from './quickLinks.service'

@Resolver()
export class QuickLinksResolver {
  constructor(private quickLinksService: QuickLinksService) {}

  @Query()
  async lastQuickLinks(
    @Args('input') input: LastQuickLinksDto,
  ): Promise<QuickLink[]> {
    return this.quickLinksService.findManyWithLimit(input)
  }

  @Query()
  async redirectToLink(@Args('linkId') linkId: string): Promise<void> {
    const quickLink = await this.quickLinksService.find(linkId)

    throw new RedirectException(quickLink.longLink)
  }

  @Mutation()
  async createQuickLink(
    @Args('input') input: CreateQuickLinkDto,
    @Context() { req }: GqlContext,
  ): Promise<QuickLink> {
    const { headers } = req
    const origin = headers.origin || ''

    return this.quickLinksService.create(input, { origin })
  }
}
