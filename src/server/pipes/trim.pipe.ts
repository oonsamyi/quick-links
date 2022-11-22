import {
  PipeTransform,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'

type Input = Record<string, unknown>

@Injectable()
export class TrimPipe implements PipeTransform<Input, Input> {
  private fields: string[]

  constructor(...fields: string[]) {
    this.fields = fields
  }

  transform(input: Input): Input {
    const trimmedValues = this.fields.reduce((acc, field) => {
      const value = input[field]

      if (typeof value !== 'string') {
        const stringValue = JSON.stringify(value, null, 2)

        throw new InternalServerErrorException(
          `TrimPipe: "${field}: ${stringValue}" - поле ${field} не является строковым`,
        )
      }

      acc[field] = value.trim()

      return acc
    }, {} as Record<string, string>)

    return {
      ...input,
      ...trimmedValues,
    }
  }
}
