import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { VerifyEnable2FAInput } from "../../interfaces";
import { verifyEnable2FA as verifyEnable2FAService } from "../../services/authApiService";

interface ErrorResponse {
  message: string;
}

export const useVerifyEnable2FA = function () {
  const navigate = useNavigate();
  const {
    isPending: isVerifying,
    error,
    mutate: verifyEnable2FA,
  } = useMutation({
    mutationFn: (data: VerifyEnable2FAInput) => verifyEnable2FAService(data),
    onSuccess: () => {
      toast.success("Enable Two-Factor authentication successfully");

      navigate("/profile/setting/security", { replace: true });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isVerifying, error, verifyEnable2FA };
};
