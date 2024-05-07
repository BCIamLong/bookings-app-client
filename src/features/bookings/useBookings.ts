import { useQuery } from '@tanstack/react-query'
import { getBookings } from '../../services/bookingsApiService'
import { useParams } from 'react-router-dom'

export const useBookings = function ({
  status,
}: {
  status?: string | { operation: string; value: string }
}) {
  const { id: cabinId } = useParams() || {}

  const options = { cabinId, status }

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['bookings', options],
    queryFn: () => getBookings(options),
  })

  return { bookings, isLoading, error, count: bookings?.length }
}
