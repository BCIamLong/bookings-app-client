export interface SearchPost {
  tourId: string
  userId: string
  title: string
}

export default interface IPost {
  _id: string
  tourId: string
  userId: string
  title: string
  description: string
  likes: number
  comments: number
  shares: number
  bookmarks: number
  images: string[]
  createdAt: Date
  updatedAt: Date
}
