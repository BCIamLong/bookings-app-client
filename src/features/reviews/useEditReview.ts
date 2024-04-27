import { toast } from 'react-toastify'
import { AxiosErrorConfig } from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { editReview as editReviewService } from '@/services/reviewsApiService'
import { ReviewInput } from '@/interfaces'

export const useEditReview = function () {
  const queryClient = useQueryClient()
  const {
    isPending: isEditing,
    error,
    mutate: editReview,
  } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<ReviewInput> }) =>
      editReviewService(id, data),
    onSuccess: () => {
      toast.success('Edit your review successful')
      queryClient.invalidateQueries({ queryKey: ['reviews'] })
      queryClient.invalidateQueries({ queryKey: ['cabin'] })
    },
    onError: (err: AxiosErrorConfig) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { editReview, isEditing, error }
}
