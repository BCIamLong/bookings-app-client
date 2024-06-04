import { useTranslation } from "react-i18next";
import Spinner from "../../../components/Spinner";
import { ICabin } from "../../../interfaces";
import CabinItem from "../CabinItem";
import { useCabins } from "../useCabins";

export default function LatestCabinsList() {
  const { t } = useTranslation()
  const { cabins, isLoading } = useCabins({ sort: 'latest' })

  if (isLoading) return <Spinner size="normal" />

  return (
    <div className="xl:px-6 bg-stone-0 md:px-4 px-3">
      <h2 className="inline-block border-b-2 border-stone-700 pb-1 pt-2 text-xl font-bold text-stone-700">
        {t('cabins.homepage.latest.heading')}
      </h2>
      <ul className="flex gap-4 py-6 thin:max-tiny:grid thin:max-tiny:grid-cols-3">
        {cabins.map((cabin: ICabin) => (
          <CabinItem cabin={cabin} key={cabin._id} />
        ))}
      </ul>
    </div>
  );
}
