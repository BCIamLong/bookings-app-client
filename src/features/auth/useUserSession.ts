import { useQuery } from "@tanstack/react-query";
import { getUserSession } from "../../services/authApiService";

export const useUserSession = function () {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserSession,
  });

  return { user, isLoading, error };
};
