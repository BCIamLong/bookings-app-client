import ICabin from './ICabin'

export default interface IBookmark {
  _id: string
  user: string
  cabin: string | ICabin
  link: string
  createdAt: Date
  updatedAt: Date
}
