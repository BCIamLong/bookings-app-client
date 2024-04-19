import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editEmail as editEmailService } from "../../services/authApiService";
import { EditEmailInput } from "../../interfaces";

interface ErrorResponse {
  message: string;
}

export const useEditEmail = function () {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    isPending: isEditing,
    error,
    mutate: editEmail,
  } = useMutation({
    mutationFn: (data: EditEmailInput) => editEmailService(data),
    onSuccess: () => {
      toast.success("Edit your email successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isEditing, error, editEmail };
};
