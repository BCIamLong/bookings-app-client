import { format } from "date-fns";

import Heading from "../../../components/Heading";
import Spinner from "../../../components/Spinner";
import { IBooking, ICabin } from "../../../interfaces";
import { useUserBooking } from "../useUserBooking";
import { useUserSession } from "../../auth/useUserSession";
import { Link } from "react-router-dom";

export default function BookingCard({ isModal = false }: { isModal?: boolean }) {
  const { booking, isLoading: isBookingLoading } = useUserBooking()
  const { user, isLoading: isUserLoading } = useUserSession()
  const { startDate, endDate, numNights, numGuests, cabinPrice, totalPrice, extrasPrice, createdAt, cabinId } = booking as IBooking || {}
  const { name: cabinName, _id, discount } = cabinId as ICabin || {}
  const { name, fullName } = user || {}
  const classStyle = `flex justify-between items-center [&>span:first-child]:text-stone-500 [&>span:nth-child(2)]:text-brand-600 [&>span:nth-child(2)]:font-semibold`
  let style = ''
  if (isModal) style = style + 'bg-brand-200 w-[30rem] '

  if (isBookingLoading || isUserLoading) return <Spinner size="normal" />

  return (
    <div className={`p-8 shadow-md shadow-brand-300 rounded-md text-stone-700 w-full ${style}`}>
      <div className="border-b-[1.5px] pb-3">
        <Link to={`/cabins/${_id}`}> <Heading type="tertiary">{cabinName}</Heading></Link>
      </div>
      <ul className="flex flex-col gap-3 mt-3">
        <li className={classStyle}>
          <span>Payment time:</span> <span>{format(createdAt || new Date(), 'MMMM-dd-yyyy, hh:mm')}</span>
        </li>
        <li className={classStyle}>
          <span>Date:</span> <span>{numNights} days ({format(startDate || new Date(), 'MMMM-dd-yyyy')} - {format(endDate || new Date(), 'MMMM-dd-yyyy')})</span>
        </li>
        <li className={classStyle}>
          <span>Number of guests:</span> <span>{numGuests}</span>
        </li>
        <li className={classStyle}><span>Payment method:</span> <span>Credit Card (Visa)</span></li>
        <li className={classStyle}><span>Sender name:</span> <span>{fullName || name}</span></li>
        <li className={classStyle}><span>Amount of cabin:</span> <span>${cabinPrice}</span></li>
        <li className={classStyle}><span>Other fee:</span> <span>${extrasPrice}</span></li>
        <li className={classStyle}><span>Total amount:</span> <span>${cabinPrice * numNights * numGuests}</span></li>
        <li className={classStyle}><span>Discount:</span> <span>{discount}%</span></li>
        <li className={classStyle}><span>Final amount:</span> <span>${totalPrice}</span></li>
      </ul>
    </div>
  )
}
