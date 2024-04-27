import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { getReviews } from '@/services/reviewsApiService'

export const useReviews = function ({
  userId,
  isReviewsOfUser,
}: {
  userId?: string
  isReviewsOfUser?: boolean
}) {
  const { id: cabinId } = useParams()

  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['reviews', cabinId],
    queryFn: () => getReviews({ cabinId: cabinId!, userId, isReviewsOfUser }),
  })

  return { reviews, isLoading: isLoading, error }
}
