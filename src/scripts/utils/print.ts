/* eslint-disable no-console */
import colors from 'colors/safe'

export class Print {
  public constructor(private label?: string) {}

  public message(message: string, withoutLabel?: boolean) {
    const log = this.prepare(message, withoutLabel)

    console.log(log)
  }

  public success(message: string, withoutLabel?: boolean) {
    const log = this.prepare(message, withoutLabel)

    console.log(colors.green(log))
  }

  public error(message: string, withoutLabel?: boolean) {
    const log = this.prepare(message, withoutLabel)

    console.error(colors.red(log))
  }

  private prepare(message: string, withoutLabel?: boolean): string {
    const label = this.label

    if (withoutLabel || !label) return message

    return `${label} ${message}`
  }
}
