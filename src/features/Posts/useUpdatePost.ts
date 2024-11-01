import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IPostInput } from '../../interfaces'
import { updatePost as updatePostService } from '@/services/postsApiService'
import { useSearchParams } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

interface ErrorResponse {
  message: string
}

export const useUpdatePost = function ({ id }: { id?: string }) {
  // const navigate = useNavigate();
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()
  const postId = searchParams.get('id') || id || ''

  const {
    isPending: isUpdating,
    error,
    mutate: updatePost,
  } = useMutation({
    mutationFn: ({
      data,
      basedComments = false,
    }: {
      data: Partial<IPostInput>
      basedComments?: boolean
    }) => updatePostService({ id: postId, data, basedComments }),
    onSuccess: () => {
      // toast.success('Update post successfully')
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      queryClient.invalidateQueries({ queryKey: ['post'] })
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { isUpdating, error, updatePost }
}
