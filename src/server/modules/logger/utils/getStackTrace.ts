export function getStackTrace(error: Error): string {
  if (!error.stack) return 'Стек трейс не найден'

  const [_, ...stack] = error.stack.split('\n').map((item) => item.trim())

  return stack
    .filter((item) => {
      const blackList = ['node_modules', 'node:internal']

      return blackList.every((label) => !item.includes(label))
    })
    .join('; ')
}
