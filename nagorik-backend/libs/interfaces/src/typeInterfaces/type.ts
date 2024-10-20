import { Types, Document } from 'mongoose'

export type CorrectedDocument = Document<Types.ObjectId> & {
  _id: Types.ObjectId
}
