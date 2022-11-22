import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateQuickLinkInput } from 'src/server/graphql/types'
import { QuickLinksFeature, QuickLinksModel } from './quickLinks.schema'

@Injectable()
export class QuickLinksService {
  constructor(
    @InjectModel(QuickLinksFeature.name)
    private quickLinksModel: QuickLinksModel,
  ) {}

  async find(link: string): Promise<string> {
    return 'TODO'
  }

  async create(input: CreateQuickLinkInput): Promise<string> {
    return 'TODO'
  }
}
