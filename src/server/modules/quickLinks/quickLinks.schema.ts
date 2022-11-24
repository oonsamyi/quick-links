import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { MongooseModel } from 'src/server/types/mongoose'

export type QuickLinksModel = MongooseModel<InternalQuickLink>

@Schema()
export class InternalQuickLink {
  @Prop({ required: true, unique: true })
  id: string

  @Prop({ required: true })
  quickLink: string

  @Prop({ required: true })
  longLink: string
}

const QuickLinkSchema = SchemaFactory.createForClass(InternalQuickLink)

export const QuickLinksFeature = {
  name: 'QuickLink',
  schema: QuickLinkSchema,
}
