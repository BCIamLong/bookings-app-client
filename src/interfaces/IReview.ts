export interface ReviewInput {
  review: string
  rating: number
}

export default interface IReview {
  _id: string
  user: string
  cabin: string
  review: string
  rating: number
  createdAt: Date
  updatedAt: Date
}
