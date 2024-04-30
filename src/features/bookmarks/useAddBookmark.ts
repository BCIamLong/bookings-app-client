import { AxiosErrorConfig } from 'axios'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { appConfig } from '@/config'
import { addBookmark as addBookmarkService } from '@/services/bookmarksApiService'

const { CLIENT_BASE_UTL } = appConfig

export const useAddBookmark = function () {
  const { id: cabinId } = useParams() || {}
  const link = `${CLIENT_BASE_UTL}/cabins/${cabinId}`
  const queryClient = useQueryClient()

  const {
    isPending: isBookmarking,
    error,
    mutate: addBookmark,
  } = useMutation({
    mutationFn: () => addBookmarkService(cabinId!, { link }),
    onSuccess: () => {
      toast.success('Your bookmark is added successful')
      queryClient.invalidateQueries({ queryKey: [`bookmark-me-${cabinId}`] })
    },
    onError: (err: AxiosErrorConfig) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { addBookmark, isBookmarking, error }
}
