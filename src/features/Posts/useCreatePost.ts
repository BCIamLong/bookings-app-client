import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IPostInput } from '../../interfaces'
import { createPost as createPostService } from '@/services/postsApiService'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

interface ErrorResponse {
  message: string
}

export const useCreatePost = function () {
  // const navigate = useNavigate();
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const {
    isPending: isCreating,
    error,
    mutate: createPost,
  } = useMutation({
    mutationFn: (data: FormData) => createPostService({ data }),
    onSuccess: (post) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      // queryClient.invalidateQueries({ queryKey: ['post'] })
      navigate(`/posts/${post._id}`)
      toast.success('Create post successfully')
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { isCreating, error, createPost }
}
