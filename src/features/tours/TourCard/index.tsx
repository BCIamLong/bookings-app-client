import Button from "@/components/Button";
import { useBookTour } from "@/features/bookings/useBookTour";
import { ITour } from "@/interfaces";
import { useTranslation } from "react-i18next";

export default function TourCard({ tour }: { tour: ITour }) {
  const { t, i18n } = useTranslation()
  const locale = i18n.language.split('-')[0]
  const { _id: tourId, name, price, startDates, description, imageCover, maxGroupSize, duration } = tour
  const { isBooking, bookTour } = useBookTour()


  console.log('okk price', price)
  const handleClick = async function () {
    bookTour({ cabinId: tourId, cabinPrice: price, regularPrice: price, name, description, image: imageCover, endDate: startDates[startDates.length - 1].date, startDate: startDates[0].date, numGuests: maxGroupSize, numNights: duration, locale })

  }
  return (
    <div>
      <div className="px-6 bg-stone-50 pt-6 pb-8 flex flex-col gap-6 rounded-lg shadow-sm">
        <p className="flex gap-3 justify-between text-lg border-b-[1.5px]">
          <span className="text-stone-500 font-semibold">Type</span>
          <span className="text-stone-700 capitalize font-bold">{tour.type}</span>
        </p>
        <p className="flex gap-3 justify-between text-lg border-b-[1.5px]">
          <span className="text-stone-500 font-semibold">Price</span>
          <span className="text-stone-700 capitalize font-bold">{tour.price}</span>
        </p>
        <p className="flex gap-3 justify-between text-lg border-b-[1.5px]">
          <span className="text-stone-500 font-semibold">Date</span>
          <button>date icon</button>
        </p>
        <p className="flex gap-3 justify-between text-lg border-b-[1.5px] items-center">
          <span className="text-stone-500 font-semibold">Days</span>
          <input className="border-stone-300 border-[1.5px] rounded-md w-[40%] bg-stone-0 text-center py-1 text-stone-700 text-lg font-semibold" type="number" defaultValue={tour.startDates?.length} min={1} disabled={true} />
        </p>
        <p className="flex gap-3 justify-between text-lg border-b-[1.5px] items-center">
          <span className="text-stone-500 font-semibold">Group Size</span>
          <input className="border-stone-300 border-[1.5px] rounded-md w-[40%] bg-stone-0 text-center py-1 text-stone-700 text-lg font-semibold" type="number" defaultValue={tour.maxGroupSize} min={1} disabled={true} />
        </p>

        <p className="flex gap-3 justify-between text-lg border-b-[1.5px] items-center">
          <span className="text-stone-500 font-semibold">Participants</span>
          <input className="border-stone-300 border-[1.5px] rounded-md w-[40%] bg-stone-0 text-center py-1 text-stone-700 text-lg font-semibold" type="number" defaultValue={tour.maxGroupSize} min={tour.type === 'private' ? 3 : 1} disabled={tour.type === 'personal'} />
        </p>
        <Button type="brand">Book tour</Button>
      </div>
    </div>
  )
}
