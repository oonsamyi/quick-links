import { Transform } from 'class-transformer'
import { IsUrl, MaxLength } from 'class-validator'
import { CreateQuickLinkInput } from 'src/server/graphql/types'

export class CreateQuickLinkDto implements CreateQuickLinkInput {
  @Transform(({ value }) => value.trim())
  @IsUrl(undefined, { message: 'Некорректный формат ссылки' })
  @MaxLength(1000, {
    message: 'Слишком длинная ссылка. Попробуйте поменьше :)',
  })
  link: string
}
