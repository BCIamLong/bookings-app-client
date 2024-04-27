import { toast } from 'react-toastify'
import { AxiosErrorConfig } from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteReview as deleteReviewService } from '@/services/reviewsApiService'

export const useDeleteReview = function () {
  const queryClient = useQueryClient()
  const {
    isPending: isDeleting,
    error,
    mutate: deleteReview,
  } = useMutation({
    mutationFn: (id: string) => deleteReviewService(id),
    onSuccess: () => {
      toast.success('Delete your review successful')
      queryClient.invalidateQueries({ queryKey: ['reviews'] })
      queryClient.invalidateQueries({ queryKey: ['cabin'] })
    },
    onError: (err: AxiosErrorConfig) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { deleteReview, isDeleting, error }
}
