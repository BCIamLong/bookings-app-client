import { useQuery } from '@tanstack/react-query'
import { getRecommendTours } from '@/services/recommendApiService'
// import { useUserSession } from '../auth/useUserSession'

export const useRecommendTours = function ({ userId }: { userId: string }) {
  // const { user, isLoading: isLoadingUser } = useUserSession()

  // const { _id: userId } = user || {}

  const {
    data: recommendations,
    isLoading: isLoadingTours,
    error,
  } = useQuery({
    queryKey: ['recommend-tours', userId],
    queryFn: () => getRecommendTours(userId!),
  })

  return { recommendations, isLoading: isLoadingTours, error }
}
