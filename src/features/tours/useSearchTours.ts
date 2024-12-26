import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getSearchTours } from '@/services/toursApiService'

export const useSearchTours = function ({ searchStr }: { searchStr: string }) {
  const {
    data: tours,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tours', searchStr],
    queryFn: () => getSearchTours(searchStr),
  })

  return { tours, isLoading, error }
}
