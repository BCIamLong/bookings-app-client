import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Verify2FAInput } from "../../interfaces";
import { verify2FA as verify2FAService } from "../../services/authApiService";

interface ErrorResponse {
  message: string;
}

export const useVerify2FA = function () {
  const navigate = useNavigate();
  const {
    isPending: isVerifying,
    error,
    mutate: verify2FA,
  } = useMutation({
    mutationFn: (data: Verify2FAInput) => verify2FAService(data),
    onSuccess: () => {
      toast.success("Login successfully");

      navigate("/#hero", { replace: true });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isVerifying, error, verify2FA };
};
