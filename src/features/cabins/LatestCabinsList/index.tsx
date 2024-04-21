import Spinner from "../../../components/Spinner";
import { ICabin } from "../../../interfaces";
import CabinItem from "../CabinItem";
import { useCabins } from "../useCabins";

export default function LatestCabinsList() {
  const { cabins, isLoading } = useCabins({ sort: 'latest' })

  if (isLoading) return <Spinner size="normal" />

  return (
    <div className="px-6">
      <h2 className="inline-block border-b-2 border-stone-700 pb-1 pt-2 text-xl font-bold text-stone-700">
        Latest Cabins list
      </h2>
      <ul className="flex gap-4 py-6">
        {cabins.map((cabin: ICabin) => (
          <CabinItem cabin={cabin} key={cabin._id} />
        ))}
      </ul>
    </div>
  );
}
