import { PropOptions } from '@nestjs/mongoose'
import { Document, Model } from 'mongoose'

export type SchemaByType<T extends object> = {
  [K in keyof T]: PropOptions<T[K]>
}

export type MongooseModel<T extends object> = Model<T & Omit<Document, 'id'>>
