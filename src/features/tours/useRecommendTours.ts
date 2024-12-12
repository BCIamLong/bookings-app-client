import { useQuery } from '@tanstack/react-query'
import { getRecommendTours } from '@/services/recommendApiService'
// import { useUserSession } from '../auth/useUserSession'

export const useRecommendTours = function ({ userId }: { userId: string }) {
  // const { user, isLoading: isLoadingUser } = useUserSession()

  // const { _id: userId } = user || {}

  const {
    data,
    isLoading: isLoadingTours,
    error,
  } = useQuery({
    queryKey: ['recommend-tours', userId],
    queryFn: () => getRecommendTours(userId!),
  })
  const { recommendations, recommendations_core } = data || {}

  return {
    recommendations,
    recommendations_core,
    isLoading: isLoadingTours,
    error,
  }
}
