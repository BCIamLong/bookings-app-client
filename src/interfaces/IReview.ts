import ICabin from './ICabin'
import IUser from './IUser'

export interface ReviewInput {
  review: string
  rating: number
}

export default interface IReview {
  _id: string
  user: string | IUser
  cabin: string | ICabin
  review: string
  rating: number
  createdAt: Date
  updatedAt: Date
}
