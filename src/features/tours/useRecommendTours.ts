import { useQuery } from '@tanstack/react-query'
import { getRecommendTours } from '@/services/recommendApiService'
// import { useUserSession } from '../auth/useUserSession'

export const useRecommendTours = function ({
  userId,
  tourId,
}: {
  userId?: string
  tourId?: string
}) {
  // const { user, isLoading: isLoadingUser } = useUserSession()

  // const { _id: userId } = user || {}
  const queryId = !userId ? tourId : userId

  const {
    data,
    isLoading: isLoadingTours,
    error,
  } = useQuery({
    queryKey: ['recommend-tours', queryId],
    queryFn: () => getRecommendTours({ userId, tourId }),
  })
  const { recommendations, recommendations_core } = data || {}

  return {
    recommendations,
    recommendations_core,
    isLoading: isLoadingTours,
    error,
  }
}
