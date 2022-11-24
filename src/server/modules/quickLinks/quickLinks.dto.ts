import { Transform } from 'class-transformer'
import { IsUrl, MaxLength, Max, Min } from 'class-validator'
import {
  CreateQuickLinkInput,
  LastQuickLinksInput,
} from 'src/server/graphql/types'

export class LastQuickLinksDto implements LastQuickLinksInput {
  @Min(1)
  @Max(50)
  count: number
}

export class CreateQuickLinkDto implements CreateQuickLinkInput {
  @Transform(({ value }) => value.trim())
  @IsUrl(undefined, { message: 'Некорректный формат ссылки' })
  @MaxLength(1000, {
    message: 'Слишком длинная ссылка. Попробуйте поменьше :)',
  })
  link: string
}
