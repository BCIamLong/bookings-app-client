import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ReviewInput } from '@/interfaces'
import { addReview as addReviewService } from '@/services/reviewsApiService'
import { useCabin } from '../cabins/useCabin'

interface ErrorResponse {
  message: string
}

export const useAddReview = function () {
  const { cabin, isLoading } = useCabin()
  const { _id } = cabin || {}
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
