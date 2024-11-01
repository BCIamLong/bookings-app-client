import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ReviewInput } from '@/interfaces'
import { addReview as addReviewService } from '@/services/reviewsApiService'
// import { useCabin } from '../cabins/useCabin'
import { useTour } from '../tours/useTour'

interface ErrorResponse {
  message: string
}

export const useAddReview = function () {
  const { tour, isLoading } = useTour()
  const { _id } = tour || {}
  const queryClient = useQueryClient()

  const {
    isPending: isAdding,
    error,
    mutate: addReview,
  } = useMutation({
    mutationFn: (data: ReviewInput) => addReviewService(data, _id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] })
      queryClient.invalidateQueries({ queryKey: ['cabin'] })
      toast.success('Your review is added')
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { addReview, isAdding: isAdding || isLoading, error }
}
