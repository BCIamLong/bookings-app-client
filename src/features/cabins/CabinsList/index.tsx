import Spinner from "../../../components/Spinner";
import { ICabin } from "../../../interfaces";
import CabinItem from "../CabinItem";
import { useCabins } from "../useCabins";

export default function CabinsList() {
  const { cabins, isLoading } = useCabins()

  if (isLoading) return <Spinner size="normal" />

  return (
    <div className="px-6">
      <h2 className="inline-block border-b-2 border-stone-700 pb-1 pt-2 text-xl font-bold text-stone-700">
        Cabins list
      </h2>
      <ul className="grid grid-cols-3 gap-y-6 px-24 py-6 ">
        {cabins?.map((cabin: ICabin) => (
          <CabinItem cabin={cabin} type="n-lines" key={cabin._id} />
        ))}
      </ul>
    </div>
  );
}
