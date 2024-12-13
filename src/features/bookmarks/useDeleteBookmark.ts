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
      queryClient.invalidateQueries({ queryKey: ['recommend-tours'] })
      // queryClient.removeQueries({ queryKey: ['recommend-tours'] }) //! reviews action posts action also effect to recommend-tours query so we just use invalidateQueries to refresh not use remove to delete
      // * we can use remove if we can find the way to see that if the user just do 1 action to emit event train recommends data
      // * in the most case it is rare to happen right so just keep it like this
    },
    onError: (err: AxiosErrorConfig) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { deleteBookmark, isDeleting, error }
}
