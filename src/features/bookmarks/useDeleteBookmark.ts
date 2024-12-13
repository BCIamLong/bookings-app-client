import { toast } from 'react-toastify'
import { AxiosErrorConfig } from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteBookmark as deleteBookmarkService } from '@/services/bookmarksApiService'
import { useParams } from 'react-router-dom'

export const useDeleteBookmark = function () {
  const queryClient = useQueryClient()
  const { id: cabinId } = useParams() || {}

  const {
    isPending: isDeleting,
    error,
    mutate: deleteBookmark,
  } = useMutation({
    mutationFn: (id: string) => deleteBookmarkService(id),
    onSuccess: () => {
      toast.success('Delete your bookmark successful')
      // queryClient.invalidateQueries({ queryKey: ['bookmark'] })
      queryClient.removeQueries({ queryKey: [`bookmark-me-${cabinId}`] })
      queryClient.invalidateQueries({ queryKey: ['bookmarks-me'] })
      queryClient.removeQueries({ queryKey: ['recommend-tours'] })
    },
    onError: (err: AxiosErrorConfig) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { deleteBookmark, isDeleting, error }
}
