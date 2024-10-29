import { getPost } from '@/services/postsApiService'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export const usePost = function () {
  const { id } = useParams()

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id!),
  })

  return { post, isLoading, error }
}
