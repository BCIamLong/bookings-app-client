import { useQuery } from '@tanstack/react-query'
import { getBookmark as getBookmarkService } from '@/services/bookmarksApiService'
import { useParams } from 'react-router-dom'

export const useBookmark = function () {
  const { id: cabinId } = useParams() || {}

  const {
    data: bookmark,
    isLoading,
    error,
  } = useQuery({
    // queryKey: [`bookmark`, cabinId],
    queryKey: [`bookmark-me-${cabinId}`],
    queryFn: () => getBookmarkService(cabinId!),
  })

  return { bookmark, isLoading, error }
}
