export interface SearchTour {
  name: string
  duration?: number
  maxGroupSize?: number
  difficulty?: string
  type?: string
  price?: number
  vip?: boolean
  createdAt: Date
}

interface StartDate {
  date: Date
  participants: number
  soldOut: boolean
}

interface StartLocation {
  type: string
  coordinates: number[]
  address: string
  description: string
}

interface Location extends StartLocation {
  day: number
}

export interface ITour {
  _id: string
  name: string
  slug: string
  duration: number
  maxGroupSize: number
  difficulty: string
  type: string
  ratingsAverage: number
  ratingsQuantity: number
  summary: string
  description: string
  price: number
  imageCover: string
  images: string[]
  createdAt: Date
  updatedAt: Date
  startDates: StartDate[]
  vip: boolean
  startLocation: StartLocation
  locations: Location[]
}
