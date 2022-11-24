import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import {
  CreateQuickLinkInput,
  LastQuickLinksInput,
  QuickLink,
} from 'src/server/graphql/types'
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

  async find(linkId: string): Promise<QuickLink> {
    const quickLink = await this.quickLinksModel
      .findOne({ id: linkId })
      .lean()
      .exec()

    assertQuickLinkExist(quickLink)

    return this.mapQuickLink(quickLink)
  }

  async findManyWithLimit(input: LastQuickLinksInput): Promise<QuickLink[]> {
    const { count } = input

    const quickLinks = await this.quickLinksModel
      .find()
      .sort({ _id: -1 })
      .limit(count)
      .lean()
      .exec()

    return quickLinks.map(this.mapQuickLink)
  }

  async create(
    input: CreateQuickLinkInput,
    params: CreateQuickLinkParams,
  ): Promise<QuickLink> {
    const { link } = input
    const { origin } = params

    const id = nanoid(linkIdLength)

    const quickLink = await this.quickLinksModel.create<InternalQuickLink>({
      id,
      quickLink: `${origin}/${id}`,
      longLink: link,
    })

    return this.mapQuickLink(quickLink)
  }

  private mapQuickLink = ({
    id,
    quickLink,
    longLink,
  }: InternalQuickLink): QuickLink => {
    return {
      id,
      quickLink,
      longLink,
    }
  }
}

function assertQuickLinkExist(
  quickLink: InternalQuickLink | null,
): asserts quickLink is InternalQuickLink {
  if (!quickLink) {
    throw new NotFoundException('Ссылка не найдена')
  }
}
