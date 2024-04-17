import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { LoginInput } from "../../interfaces";
import { login as loginService } from "../../services/authApiService";

interface ErrorResponse {
  message: string;
}

export const useLogin = function () {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isPending: isLogging,
    error,
    mutate: login,
  } = useMutation({
    mutationFn: ({ email, password }: LoginInput) =>
      loginService({ email, password }),
    onSuccess: (data) => {
      // queryClient.setQueryData(["isVerify2FA"], data.enable2FA || false);
      const { enable2FA } = data;
      if (enable2FA) return navigate("/login/verify-2fa");
      console.log("ok la");
      toast.success("Login successfully");
      navigate("/", { replace: true });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isLogging, login, error };
};
