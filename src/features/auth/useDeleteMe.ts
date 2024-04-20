import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DeleteMeInput } from "../../interfaces";
import { deleteMe as deleteMeService } from "../../services/authApiService";

interface ErrorResponse {
  message: string;
}

export const useDeleteMe = function () {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    isPending: isDeleting,
    error,
    mutate: deleteMe,
  } = useMutation({
    mutationFn: (data: DeleteMeInput) => deleteMeService(data),
    onSuccess: () => {
      // console.log(data);
      toast.success(
        "Your account is deleting, it will successfully deleted after 30 days",
      );

      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isDeleting, error, deleteMe };
};
