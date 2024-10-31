import { useQuery, useQueryClient } from '@tanstack/react-query'
import { SortOptions } from '../../interfaces/types'
import { appConfig } from '../../config'
import { useSearchParams } from 'react-router-dom'
import { getPosts } from '@/services/postsApiService'

const { PAGE_LIMIT } = appConfig

export const usePosts = function ({
  sort = 'none',
  page = 1,
  bookmarkFor = '',
}: {
  sort: SortOptions
  page?: number
  bookmarkFor?: string
}) {
  const [searchParams] = useSearchParams()
  const search = JSON.parse(searchParams.get('search') || `{}`)

  const queryClient = useQueryClient()
  const options = { sort, page, search, bookmarkFor }
  const { data, isLoading, error } = useQuery({
    // queryKey: [`cabins${sort !== "none" ? `-sort-by-${sort}` : ""}`],
    queryKey: [`posts`, options],
    queryFn: () => getPosts(options),
  })
  const { posts, count } = data || {}

  const numPages = Math.ceil(count / PAGE_LIMIT)
  if (page > 1 && page <= numPages) {
    const prefetchOptions = { ...options, page: page - 1 }
    queryClient.prefetchQuery({
      queryKey: [`posts`, prefetchOptions],
      queryFn: () => getPosts(prefetchOptions),
    })
  }

  if (page >= 1 && page < numPages) {
    const prefetchOptions = { ...options, page: page + 1 }
    queryClient.prefetchQuery({
      queryKey: [`posts`, prefetchOptions],
      queryFn: () => getPosts(prefetchOptions),
    })
  }

  return { posts, isLoading, count, error }
}
