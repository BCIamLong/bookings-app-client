import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePost as deletePostService } from '@/services/postsApiService'
import { useSearchParams } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

interface ErrorResponse {
  message: string
}

export const useDeletePost = function ({ id }: { id?: string }) {
  // const navigate = useNavigate();
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()
  const postId = searchParams.get('id') || id || ''

  const {
    isPending: isDeleting,
    error,
    mutate: deletePost,
  } = useMutation({
    mutationFn: () => deletePostService({ id: postId }),
    onSuccess: () => {
      toast.success('Delete post successfully')
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      queryClient.invalidateQueries({ queryKey: ['tours-to-post'] })
      queryClient.invalidateQueries({ queryKey: ['recommend-tours'] })
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { isDeleting, error, deletePost }
}
