import { HiOutlineBuildingOffice, HiOutlinePhone } from "react-icons/hi2";

import Button from "../../../components/Button";
import { ICabin } from "../../../interfaces";
import { useBookCabin } from "../../bookings/useBookCabin";
import Spinner from "../../../components/Spinner";
import { useUserBookings } from "@/features/bookings/useUserBookings";
import ButtonLink from "@/components/ButtonLink";
import { useUserSession } from "@/features/auth/useUserSession";

export default function CabinCard({ cabin }: { cabin: ICabin }) {
  const { user, isLoading: isLoadingUser } = useUserSession()
  const { _id: cabinId, regularPrice, discount, name, description, image } = cabin || {}
  const discountPrice = regularPrice - Math.round(regularPrice * (discount / 100))
  const { isBooking, bookCabin } = useBookCabin()
  const { count, isLoading } = useUserBookings()
  const handleClick = async function () {
    bookCabin({ cabinId, regularPrice, name, description, image })
  }
  if (isLoading || isLoadingUser) return <Spinner size="normal" />
  return (
    <div className={`min-h-24 bg-stone-0 text-stone-700 shadow-md thin:max-sm:px-6 thin:max-sm:w-[17.4rem] shadow-stone-300 px-4 py-6 ${count ? ' backdrop-brightness-90' : ''}`}>
      {Boolean(count) && <p className="py-1 px-2 text-xs uppercase font-semibold text-stone-50 bg-green-500 rounded-lg flex justify-center items-center mb-3">Payment Completed</p>}
      <p className="pb-4 border-b-[1.5px] font-bold border-stone-300">
        <span className="line-through text-stone-400">$ {regularPrice} </span>
        <span> &rarr; $ {discountPrice} </span>
        <span>(-{discount}%)</span>
      </p>
      <ul className="py-8 text-sm text-stone-500 flex flex-col gap-1">
        <li>3 days: $ 1000</li>
        <li>7 days: $ 2000</li>
        <li>14 days: $ 3000</li>
      </ul>
      {!count ? !user ? <div className="w-[62%]"><ButtonLink type="primary" href="/login">Login to book</ButtonLink></div> : <Button type="primary" size="small" onClick={handleClick}>
        {isBooking ? <Spinner size="small" /> : 'Reserve Now'}
      </Button> : <div className="w-[62%]">
        <ButtonLink href='/profile/bookings' type="primary" size="small">See your bookings</ButtonLink>
      </div>}
      <div className="flex justify-between items-center py-6 text-xs font-semibold">
        <div className="flex items-center gap-2">
          <HiOutlineBuildingOffice className="text-sm" />
          <p>Property Inquiry</p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlinePhone className="text-sm" />
          <p>Contact Host</p>
        </div>
      </div>
    </div>
  )
}
