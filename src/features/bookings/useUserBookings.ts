import { useQuery } from '@tanstack/react-query'
import { getUserBookings } from '../../services/bookingsApiService'
import { useParams } from 'react-router-dom'
import { UserBookingsOption } from '@/interfaces'

export const useUserBookings = function (options: UserBookingsOption = {}) {
  const { id: cabinId } = useParams() || {}

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['bookings', cabinId, options],
    queryFn: () => getUserBookings({ cabinId, options }),
  })

  return { bookings, isLoading, error, count: bookings?.length }
}
