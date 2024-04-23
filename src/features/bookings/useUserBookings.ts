import { useQuery } from "@tanstack/react-query";
import { getUserBookings } from "../../services/bookingsApiService";

export const useUserBookings = function () {
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getUserBookings,
  });

  return { bookings, isLoading, error, count: bookings?.length };
};
