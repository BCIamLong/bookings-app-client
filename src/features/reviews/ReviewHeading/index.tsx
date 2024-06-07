import Spinner from "@/components/Spinner";
import { useCabin } from "@/features/cabins/useCabin";
import { useTranslation } from "react-i18next";
import { HiStar } from "react-icons/hi2";

export default function ReviewHeading() {
  const { t } = useTranslation()
  const { cabin, isLoading } = useCabin()
  const { ratingAverage, ratingQuantity } = cabin || {}

  if (isLoading) return <Spinner size="normal" />
  return (
    <div className="flex gap-2 font-semibold text-xl text-stone-700 p-6 mt-1">
      <p className="flex items-center gap-1">
        {t('cabin.reviews.list.heading1')} <span><HiStar /></span> {ratingAverage?.toFixed(1)}
      </p>
      <span>&middot;</span>
      <p>{ratingQuantity} {t('cabin.reviews.list.heading2')}</p>
    </div>
  )
}
