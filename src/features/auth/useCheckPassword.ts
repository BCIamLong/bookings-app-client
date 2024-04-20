import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkPassword as checkPasswordService } from "../../services/authApiService";
import { CheckPasswordInput } from "../../interfaces";

interface ErrorResponse {
  message: string;
}

export const useCheckPassword = function () {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    isPending: isChecking,
    error,
    mutate: checkPassword,
  } = useMutation({
    mutationFn: (data: CheckPasswordInput) => checkPasswordService(data),
    onSuccess: () => {
      toast.success(
        "Your current password is correct, now you can reset your password",
      );
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isChecking, error, checkPassword };
};
