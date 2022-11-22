import path from 'path'

export function getAbsolutePath(relativePath: string): string {
  return path.resolve(process.cwd(), relativePath)
}
