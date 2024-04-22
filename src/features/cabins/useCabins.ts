import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/cabinApiService";
import { SortOptions } from "../../interfaces/types";

export const useCabins = function ({
  sort = "none",
  page = 1,
}: {
  sort: SortOptions;
  page: number;
}) {
  const options = { sort, page };
  const { data, isLoading, error } = useQuery({
    // queryKey: [`cabins${sort !== "none" ? `-sort-by-${sort}` : ""}`],
    queryKey: [`cabins`, options],
    queryFn: () => getCabins(options),
  });
  const { cabins, count } = data || {};

  return { cabins, isLoading, count, error };
};
