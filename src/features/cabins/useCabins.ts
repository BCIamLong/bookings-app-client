import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/cabinApiService";

export const useCabins = function () {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { cabins, isLoading, error };
};
