import { useQuery } from '@tanstack/react-query'
import { getSearchPosts } from '@/services/postsApiService'

export const useSearchPosts = function ({ searchStr }: { searchStr: string }) {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts', searchStr],
    queryFn: () => getSearchPosts(searchStr),
  })

  return { posts, isLoading, error }
}
