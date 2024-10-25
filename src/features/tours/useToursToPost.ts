import { useQuery } from '@tanstack/react-query'
import { getToursAvailableToPost } from '@/services/toursApiService'

export const useToursToPost = function () {
  const {
    data: tours,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tours-to-post'],
    queryFn: () => getToursAvailableToPost(),
  })

  return { tours, isLoading, error }
}
