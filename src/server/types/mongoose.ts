import { Document, Model } from 'mongoose'

export type MongooseModel<T extends object> = Model<T & Omit<Document, 'id'>>
