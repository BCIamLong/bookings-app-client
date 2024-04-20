import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { enable2FA as enable2FAService } from "../../services/authApiService";

interface ErrorResponse {
  message: string;
}

export const useEnable2FA = function () {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    isPending: isEnabling,
    error,
    mutate: enable2FA,
  } = useMutation({
    mutationFn: enable2FAService,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("setup-2fa", { replace: true });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isEnabling, enable2FA, error };
};
