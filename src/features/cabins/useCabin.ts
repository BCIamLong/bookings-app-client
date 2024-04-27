import { useQuery } from '@tanstack/react-query'
import { getCabin } from '../../services/cabinApiService'
import { useParams } from 'react-router-dom'

export const useCabin = function () {
  const { id } = useParams()

  const {
    data: cabin,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cabin'],
    queryFn: () => getCabin(id!),
  })

  return { cabin, isLoading, error }
}
