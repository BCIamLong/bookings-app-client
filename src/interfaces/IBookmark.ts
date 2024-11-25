import ICabin from './ICabin'
import { ITour } from './ITour'

export default interface IBookmark {
  _id: string
  user: string
  cabin: string | ICabin | ITour
  link: string
  createdAt: Date
  updatedAt: Date
}
