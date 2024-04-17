import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../../services/authApiService";
import { toast } from "react-toastify";

interface Credentials {
  email: string;
  password: string;
}

export const useLogin = function () {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isPending: isLogging,
    error,
    mutate: login,
  } = useMutation({
    mutationFn: ({ email, password }: Credentials) =>
      loginService({ email, password }),
    onSuccess: (data) => {
      // queryClient.setQueryData(["isVerify2FA"], data.enable2FA || false);
      const { enable2FA } = data;
      if (enable2FA) return navigate("/login/verify-2fa");
      console.log("ok la");
      toast.success("Login successfully");
      navigate("/", { replace: true });
    },
  });

  return { isLogging, login, error };
};
