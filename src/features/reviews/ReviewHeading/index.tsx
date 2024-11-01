import Spinner from "@/components/Spinner";
// import { useCabin } from "@/features/cabins/useCabin";
import { useTour } from "@/features/tours/useTour";
import { useTranslation } from "react-i18next";
import { HiStar } from "react-icons/hi2";

export default function ReviewHeading() {
  const { t } = useTranslation()
  const { tour, isLoading } = useTour()
  const { ratingsAverage, ratingsQuantity } = tour || {}
  // console.log(ratingsAverage, ratingsQuantity)

  if (isLoading) return <Spinner size="normal" />
  return (
    <div className="flex gap-2 font-semibold text-xl text-stone-700 p-6 mt-1">
      <p className="flex items-center gap-1">
        {t('cabin.reviews.list.heading1')} <span><HiStar /></span> {ratingsAverage?.toFixed(1)}
      </p>
      <span>&middot;</span>
      <p>{ratingsQuantity} {t('cabin.reviews.list.heading2')}</p>
    </div>
  )
}
