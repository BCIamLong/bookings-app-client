import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile as editProfileService } from "../../services/authApiService";
import { EditProfileInput } from "../../interfaces";
// import { useNavigate } from "react-router-dom";

interface ErrorResponse {
  message: string;
}

export const useEditProfile = function () {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    isPending: isEditing,
    error,
    mutate: editProfile,
  } = useMutation({
    mutationFn: (data: EditProfileInput) => editProfileService(data),
    onSuccess: () => {
      toast.success("Edit your info successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { isEditing, error, editProfile };
};
