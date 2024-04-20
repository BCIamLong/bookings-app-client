import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { disable2FA as disable2FAService } from "../../services/authApiService";
// import { useNavigate } from "react-router-dom";

interface ErrorResponse {
  message: string;
}

export const useDisable2FA = function () {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const {
    isPending: isDisabling,
    error,
    mutate: disable2FA,
  } = useMutation({
    mutationFn: disable2FAService,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // navigate("setup-2fa", { replace: true });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isDisabling, disable2FA, error };
};
