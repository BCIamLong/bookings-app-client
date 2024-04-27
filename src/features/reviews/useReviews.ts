import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { getReviews } from '@/services/reviewsApiService'
import { FilterReviewOption, SortReviewOption } from '@/interfaces/types'

export const useReviews = function ({
  userId,
  isReviewsOfUser,
  filter,
  sort,
}: {
  userId?: string
  isReviewsOfUser?: boolean
  filter?: FilterReviewOption
  sort?: SortReviewOption
}) {
  const { id: cabinId } = useParams()

  const options = { cabinId: cabinId!, userId, isReviewsOfUser, filter, sort }

  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['reviews', options],
    queryFn: () => getReviews(options),
  })

  return { reviews, isLoading, count: reviews?.length, error }
}
