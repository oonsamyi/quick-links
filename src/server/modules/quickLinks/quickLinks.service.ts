import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateQuickLinkInput } from 'src/server/graphql/types'
import {
  InternalQuickLink,
  QuickLinksFeature,
  QuickLinksModel,
} from './quickLinks.schema'
import { nanoid } from 'nanoid'
import { CreateQuickLinkParams } from './types'
import { linkIdLength } from './constants'

@Injectable()
export class QuickLinksService {
  constructor(
    @InjectModel(QuickLinksFeature.name)
    private quickLinksModel: QuickLinksModel,
  ) {}

  async find(linkId: string): Promise<string> {
    const quickLink = await this.quickLinksModel
      .findOne({ id: linkId })
      .lean()
      .exec()

    assertQuickLinkExist(quickLink)

    return quickLink.link
  }

  async create(
    input: CreateQuickLinkInput,
    params: CreateQuickLinkParams,
  ): Promise<string> {
    const { link } = input
    const { origin } = params

    const id = nanoid(linkIdLength)

    await this.quickLinksModel.create<InternalQuickLink>({ id, link })

    return `${origin}/${id}`
  }
}

function assertQuickLinkExist(
  quickLink: InternalQuickLink | null,
): asserts quickLink is InternalQuickLink {
  if (!quickLink) {
    throw new NotFoundException('Ссылка не найдена')
  }
}
