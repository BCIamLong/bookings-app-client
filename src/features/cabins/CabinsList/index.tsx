import { useSearchParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { ICabin } from "../../../interfaces";
import CabinItem from "../CabinItem";
import { useCabins } from "../useCabins";
import { SortOptions } from "../../../interfaces/types";
import Pagination from "../../../components/Pagination";


export default function CabinsList({ pagination = false, isLink = false }: { pagination?: boolean, isLink?: boolean }) {
  const [searchParams] = useSearchParams()
  const sort = searchParams.get('sort') || "none"
  const page = +searchParams.get('page')! || 1
  const { cabins, isLoading, count } = useCabins({ sort: sort as SortOptions, page })

  if (isLoading) return <Spinner size="normal" />

  return (
    <>
      <ul className="grid grid-cols-3 xl:gap-x-12 md:gap-x-8 xl:gap-y-16 xl:px-24 bg-stone-0 py-6 overflow-hidden md:gap-y-16 md:px-16 sm:max-md:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:px-12 sm:py-12 thin:max-sm:grid-cols-2 thin:gap-x-4 tiny:gap-x-6 tiny:px-6 thin:gap-y-16 tiny:gap-y-20 tiny:pb-12 md:pb-16">
        {cabins?.map((cabin: ICabin) => (
          <CabinItem cabin={cabin} type="n-lines" key={cabin._id} isLink={isLink} />
        ))}
      </ul>
      {pagination && <Pagination count={count} />}
    </>
  );
}
