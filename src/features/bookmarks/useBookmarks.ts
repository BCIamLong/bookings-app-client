import { useQuery } from '@tanstack/react-query'
import { getBookmarks as getBookmarksService } from '@/services/bookmarksApiService'

export const useBookmarks = function () {
  const {
    data: bookmarks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['bookmarks-me'],
    queryFn: getBookmarksService,
  })

  return { bookmarks, isLoading, error, count: bookmarks?.length }
}
