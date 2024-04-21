import { useSearchParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { ICabin } from "../../../interfaces";
import CabinItem from "../CabinItem";
import { useCabins } from "../useCabins";
import { SortOptions } from "../../../interfaces/types";


export default function CabinsList() {
  const [searchParams] = useSearchParams()
  const sort = searchParams.get('sort') || "none"
  const { cabins, isLoading } = useCabins({ sort: sort as SortOptions })

  if (isLoading) return <Spinner size="normal" />

  return (
    <ul className="grid grid-cols-3 gap-y-6 px-24 py-6 ">
      {cabins?.map((cabin: ICabin) => (
        <CabinItem cabin={cabin} type="n-lines" key={cabin._id} />
      ))}
    </ul>

  );
}
