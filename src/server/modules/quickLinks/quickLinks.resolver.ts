import { Args, Resolver, Mutation, Context } from '@nestjs/graphql'
import { GqlContext } from 'src/server/types/graphql'
import { CreateQuickLinkDto } from './quickLinks.dto'
import { QuickLinksService } from './quickLinks.service'

@Resolver()
export class QuickLinksResolver {
  constructor(private quickLinksService: QuickLinksService) {}

  @Mutation()
  async createQuickLink(
    @Args('input') input: CreateQuickLinkDto,
    @Context() { req }: GqlContext,
  ): Promise<string> {
    const { headers } = req
    const origin = headers.origin || ''

    return this.quickLinksService.create(input, { origin })
  }
}
