import { ICabin } from "../../../interfaces";
import CabinItem from "../CabinItem";

export default function LatestCabinsList({ cabins }: { cabins: ICabin[] }) {
  return (
    <div className="px-6">
      <h2 className="inline-block border-b-2 border-stone-700 pb-1 pt-2 text-xl font-bold text-stone-700">
        Latest Cabins list
      </h2>
      <ul className="flex gap-4 py-6">
        {cabins.map((cabin) => (
          <CabinItem cabin={cabin} key={cabin._id} />
        ))}
      </ul>
    </div>
  );
}
