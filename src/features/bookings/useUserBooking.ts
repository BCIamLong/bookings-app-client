import { useQuery } from "@tanstack/react-query";
import { getUserBooking } from "../../services/bookingsApiService";

export const useUserBooking = function () {
  const {
    data: booking,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: getUserBooking,
  });

  return { booking, isLoading, error };
};
