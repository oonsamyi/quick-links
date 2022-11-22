import { getStackTrace } from './getStackTrace'

interface FormattedError {
  message: unknown
  stack: string | null
}

export function formatError(error: unknown): FormattedError {
  if (error instanceof Error) {
    const stack = getStackTrace(error)

    return {
      message: error.message,
      stack,
    }
  }

  return {
    message: error,
    stack: null,
  }
}
