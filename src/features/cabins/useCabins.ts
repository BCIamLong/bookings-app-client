import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/cabinApiService";
import { SortOptions } from "../../interfaces/types";

export const useCabins = function ({ sort = "none" }: { sort: SortOptions }) {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`cabins${sort !== "none" ? `-sort-by-${sort}` : ""}`],
    queryFn: () => getCabins({ sort }),
  });

  return { cabins, isLoading, error };
};
