import { useSearchParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { ICabin } from "../../../interfaces";
import CabinItem from "../CabinItem";
import { useCabins } from "../useCabins";
import { SortOptions } from "../../../interfaces/types";
import Pagination from "../../../components/Pagination";


export default function CabinsList({ pagination = false }: { pagination?: boolean }) {
  const [searchParams] = useSearchParams()
  const sort = searchParams.get('sort') || "none"
  const page = +searchParams.get('page')! || 1
  const { cabins, isLoading, count } = useCabins({ sort: sort as SortOptions, page })

  if (isLoading) return <Spinner size="normal" />

  return (
    <>
      <ul className="grid grid-cols-3 gap-y-6 px-24 py-6 overflow-hidden">
        {cabins?.map((cabin: ICabin) => (
          <CabinItem cabin={cabin} type="n-lines" key={cabin._id} />
        ))}
      </ul>
      {pagination && <Pagination count={count} />}
    </>
  );
}
