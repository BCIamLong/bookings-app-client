import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../../services/authApiService";

interface Credentials {
  email: string;
  password: string;
}

export const useLogin = function () {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isPending: isLogging,
    error,
    mutate: login,
  } = useMutation({
    mutationFn: ({ email, password }: Credentials) =>
      loginService({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/", { replace: true });
    },
  });

  return { isLogging, login, error };
};
