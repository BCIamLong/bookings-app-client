import { useMutation } from '@tanstack/react-query'
import { forgotPassword as forgotPasswordService } from '../../services/authApiService'
import { ForgotPasswordInput } from '../../interfaces'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
// import { useNavigate } from "react-router-dom";

interface ErrorResponse {
  message: string
}

export const useForgotPassword = function () {
  // const navigate = useNavigate();
  const {
    isPending: isSending,
    error,
    mutate: forgotPassword,
  } = useMutation({
    mutationFn: (data: ForgotPasswordInput) => forgotPasswordService(data),
    onSuccess: () => {
      // console.log(data);
      toast.success(
        'Sent the reset password instructions mail to your email, please check that and reset your password',
      )
      toast.success(
        'Please notice that the reset process is valid in 3 minutes',
      )
      // navigate("/reset-password", { replace: true });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message)
    },
  })

  return { isSending, error, forgotPassword }
}
