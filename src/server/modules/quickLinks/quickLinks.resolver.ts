import { Args, Resolver, Mutation } from '@nestjs/graphql'
import { CreateQuickLinkInput } from 'src/server/graphql/types'
import { TrimPipe } from 'src/server/pipes/trim.pipe'
import { QuickLinksService } from './quickLinks.service'

@Resolver()
export class QuickLinksResolver {
  constructor(private quickLinksService: QuickLinksService) {}

  @Mutation()
  async createQuickLink(
    @Args('input', new TrimPipe('link')) input: CreateQuickLinkInput,
  ): Promise<string> {
    return this.quickLinksService.create(input)
  }
}
