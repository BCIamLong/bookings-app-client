import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { EditPasswordInput } from "../../interfaces";
import { editPassword as editPasswordService } from "../../services/authApiService";

interface ErrorResponse {
  message: string;
}

export const useEditPassword = function () {
  const queryClient = useQueryClient();
  const {
    isPending: isEditing,
    error,
    mutate: editPassword,
  } = useMutation({
    mutationFn: ({ data, token }: { data: EditPasswordInput; token: string }) =>
      editPasswordService(data, token),
    onSuccess: () => {
      // console.log(data);
      toast.success("Your password is edit successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isEditing, error, editPassword };
};
