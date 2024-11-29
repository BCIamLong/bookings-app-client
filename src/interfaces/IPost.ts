import { ITour } from './ITour'
import IUser from './IUser'

export interface SearchPost {
  tourId: string
  userId: string
  title: string
}

export interface Like {
  id?: string
  userId: string
  likeAt: Date
}

export interface Comment {
  _id: string
  id: string
  userId: string
  content: string
  likes: Like[]
  commentAt: Date
  updateCommentAt: Date
}

export interface Bookmark {
  id?: string
  userId: string
  bookmarkAt: Date
}

export interface IPostInput {
  title: string
  description: string
  likes: Like[]
  comments: Comment[]
  shares: number
  bookmarks: Bookmark[]
  images: string[]
  commentId?: string
}

export default interface IPost {
  _id: string
  tourId: string
  userId: string
  title: string
  description: string
  likes: Like[]
  comments: Comment[]
  shares: number
  bookmarks: Bookmark[]
  images: string[]
  createdAt: Date
  updatedAt: Date
  users?: IUser[]
  tours?: ITour[]
}
