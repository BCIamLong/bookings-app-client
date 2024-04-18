import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordService } from "../../services/authApiService";
import { ResetPasswordInput } from "../../interfaces";

interface ErrorResponse {
  message: string;
}

export const useResetPassword = function () {
  const navigate = useNavigate();
  const {
    isPending: isResetting,
    error,
    mutate: resetPassword,
  } = useMutation({
    mutationFn: ({
      data,
      token,
    }: {
      data: ResetPasswordInput;
      token: string;
    }) => resetPasswordService(data, token),
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "Reset your password successfully, now you can login again.",
      );

      navigate("/login", { replace: true });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isResetting, error, resetPassword };
};
