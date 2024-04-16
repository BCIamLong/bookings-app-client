import { ICabin } from "../../../interfaces";
import CabinItem from "../CabinItem";

export default function CabinsList({ cabins }: { cabins: ICabin[] }) {
  return (
    <div className="px-6">
      <h2 className="inline-block border-b-2 border-stone-700 pb-1 pt-2 text-xl font-bold text-stone-700">
        Cabins list
      </h2>
      <ul className="grid grid-cols-3 gap-y-6 px-24 py-6 ">
        {cabins.map((cabin) => (
          <CabinItem cabin={cabin} type="n-lines" key={cabin._id} />
        ))}
      </ul>
    </div>
  );
}
