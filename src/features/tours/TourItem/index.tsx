import Heading from "@/components/Heading";
import { ITour } from "@/interfaces";
import { Link } from "react-router-dom";

export default function TourItem({ tour, type }: { tour: ITour, type?: 'normal' }) {

  const tourDate = new Date(tour.startDates[0]?.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
  const description = tour.description.split(' ').slice(0, 10).join(' ') + '...'
  const price = tour.price.toLocaleString()

  if (type === 'normal') return (
    <li className="">
      <Link to={`/tours/${tour._id}`}>
        <div className="cursor-pointer w-full hover:shadow-md hover:-translate-y-2 rounded-lg overflow-hidden bg-stone-50 shadow-sm transition-all duration-300">
          <img className="w-full h-[11rem]" src={tour.imageCover} alt="" />
          <div className="decorate flex justify-between bg-brand-500 px-4 py-1 sm:max-xl:px-2 thin:max-sm:px-3">
            <p className="flex gap-1 text-stone-50 text-xs font-semibold lg:max-xl:text-xs">
              <span>📅</span>
              <span>{tourDate}</span>
              {/* <span>12, September 2022</span> */}
            </p>
            <p className="flex gap-1 text-stone-50 text-xs font-semibold lg:max-xl:text-xs">
              <span>🤼</span>
              <span>{tour.maxGroupSize} People</span></p>
          </div>
          <div className="py-5 px-4 flex flex-col gap-2 text-stone-600 min-h-[12rem] sm:max-md:min-h-[13rem] md:max-lg:min-h-[12rem] tiny:max-sm:min-h-[12rem]">
            <Heading type="heading-4">{tour.name}</Heading>
            <p className="text-sm">{description}</p>
            <div className="flex gap-3 font-semibold mb-1 mt-auto items-end">
              <p>{price} $</p>
              <p className="flex gap-1">
                <span>⭐</span>
                <span>{tour.ratingsAverage}</span></p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )

  return (
    <li className="bg-stone-50 shadow-sm rounded-lg overflow-hidden h-full">
      <Link to={`/tours/${tour._id}`}>
        <div className="cursor-pointer h-full">
          <img className="w-full h-[12rem]" src={tour.imageCover} alt="" />
          <div className="decorate flex justify-between bg-brand-500 px-4 py-1 sm:max-xl:px-2 thin:max-sm:px-3">
            <p className="flex gap-1 text-stone-50 text-xs font-semibold lg:max-xl:text-xs">
              <span>📅</span>
              <span>{tourDate}</span>
              {/* <span>{tour.duration} days</span> */}
            </p>
            <p className="flex gap-1 text-stone-50 text-xs font-semibold lg:max-xl:text-xs">
              <span>🤼</span>
              <span>{tour.maxGroupSize} People</span></p>
          </div>
          <div className="py-5 px-4 flex flex-col gap-2 text-stone-600 min-h-[12rem] md:max-lg:min-h-[13rem]">
            <Heading type="tertiary">{tour.name}</Heading>
            <p>{description}</p>
            <div className="flex gap-3 font-semibold mb-1 mt-auto items-end">
              <p>{price} $</p>
              <p className="flex gap-1">
                <span>⭐</span>
                <span>{tour.ratingsAverage}</span></p>
            </div>
          </div>
        </div>
      </Link>
    </li >
  )
}
