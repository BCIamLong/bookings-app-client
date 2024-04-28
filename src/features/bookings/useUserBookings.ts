import { useQuery } from '@tanstack/react-query'
import { getUserBookings } from '../../services/bookingsApiService'
import { useParams } from 'react-router-dom'

export const useUserBookings = function () {
  const { id: cabinId } = useParams() || {}

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['bookings', cabinId],
    queryFn: () => getUserBookings({ cabinId }),
  })

  return { bookings, isLoading, error, count: bookings?.length }
}
