import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'

import { BookCabin } from '../../interfaces'
import { bookCabin as bookCabinService } from '../../services/bookingsApiService'

interface ErrorResponse {
  message: string
}

export const useBookCabin = function () {
  // const queryClient = useQueryClient();

  const {
    isPending: isBooking,
    error,
    mutate: bookCabin,
  } = useMutation({
    mutationFn: (data: BookCabin) => bookCabinService(data),
    onSuccess: (url) => {
      // toast.success("Your cabin booking was successful");
      window.location.assign(url)
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { bookCabin, isBooking, error }
}
