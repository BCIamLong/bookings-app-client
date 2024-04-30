import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCabins } from '../../services/cabinApiService'
import { SortOptions } from '../../interfaces/types'
import { appConfig } from '../../config'
import { useSearchParams } from 'react-router-dom'

const { PAGE_LIMIT } = appConfig

export const useCabins = function ({
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
    // queryKey: [`cabins${sort !== "none" ? `-sort-by-${sort}` : ""}`],
    queryKey: [`cabins`, options],
    queryFn: () => getCabins(options),
  })
  const { cabins, count } = data || {}

  const numPages = Math.ceil(count / PAGE_LIMIT)
  if (page > 1 && page <= numPages) {
    const prefetchOptions = { ...options, page: page - 1 }
    queryClient.prefetchQuery({
      queryKey: [`cabins`, prefetchOptions],
      queryFn: () => getCabins(prefetchOptions),
    })
  }

  if (page >= 1 && page < numPages) {
    const prefetchOptions = { ...options, page: page + 1 }
    queryClient.prefetchQuery({
      queryKey: [`cabins`, prefetchOptions],
      queryFn: () => getCabins(prefetchOptions),
    })
  }

  return { cabins, isLoading, count, error }
}
