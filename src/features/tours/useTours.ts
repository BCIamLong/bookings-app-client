import { useQuery, useQueryClient } from '@tanstack/react-query'
import { SortOptions } from '../../interfaces/types'
import { appConfig } from '../../config'
import { useSearchParams } from 'react-router-dom'
import { getTours } from '@/services/toursApiService'

const { PAGE_LIMIT } = appConfig

export const useTours = function ({
  sort = 'none',
  page = 1,
}: {
  sort: SortOptions
  page?: number
}) {
  const [searchParams] = useSearchParams()
  const search = JSON.parse(searchParams.get('search') || `{}`)

  const queryClient = useQueryClient()
  const options = { sort, page, search }
  const { data, isLoading, error } = useQuery({
    // queryKey: [`tours${sort !== "none" ? `-sort-by-${sort}` : ""}`],
    queryKey: [`tours`, options],
    queryFn: () => getTours(options),
  })
  const { tours, count } = data || {}

  const numPages = Math.ceil(count / PAGE_LIMIT)
  if (page > 1 && page <= numPages) {
    const prefetchOptions = { ...options, page: page - 1 }
    queryClient.prefetchQuery({
      queryKey: [`tours`, prefetchOptions],
      queryFn: () => getTours(prefetchOptions),
    })
  }

  if (page >= 1 && page < numPages) {
    const prefetchOptions = { ...options, page: page + 1 }
    queryClient.prefetchQuery({
      queryKey: [`tours`, prefetchOptions],
      queryFn: () => getTours(prefetchOptions),
    })
  }

  return { tours, isLoading, count, error }
}
