import { toast } from "react-toastify";
import { AxiosErrorConfig } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserBooking as deleteUserBookingService } from "../../services/bookingsApiService";

export const useDeleteUserBooking = function () {
  const queryClient = useQueryClient();
  const {
    isPending: isDeleting,
    error,
    mutate: deleteUserBooking,
  } = useMutation({
    mutationFn: (id: string) => deleteUserBookingService(id),
    onSuccess: () => {
      toast.success("Delete your booking successful");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["booking"] });
    },
    onError: (err: AxiosErrorConfig) => {
      toast.error(err?.response?.data?.message || err.message);
    },
  });

  return { deleteUserBooking, isDeleting, error };
};
