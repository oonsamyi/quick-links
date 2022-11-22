export interface Config {
  dev: boolean
  prod: boolean
  server: {
    port: number
    host: string
  }
  client: {
    dir: string
  }
  mongoDb: {
    url: string
  }
}
