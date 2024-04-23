import { format } from "date-fns";

import Heading from "../../../components/Heading";
import Spinner from "../../../components/Spinner";
import { IBooking } from "../../../interfaces";
import { useUserBooking } from "../useUserBooking";

export default function BookingCard() {
  const { booking, isLoading } = useUserBooking()
  const { startDate, endDate, numNights, numGuests, cabinPrice, totalPrice, extrasPrice, createdAt } = booking as IBooking || {}
  const classStyle = `flex justify-between items-center [&>span:first-child]:text-stone-500 [&>span:nth-child(2)]:text-brand-600 [&>span:nth-child(2)]:font-semibold`

  if (isLoading) return <Spinner size="normal" />

  return (
    <div className="p-8 w-[40%] shadow-md shadow-brand-300 rounded-md text-stone-700">
      <div className="border-b-[1.5px] pb-3">
        <Heading type="tertiary">Name of cabin</Heading>
      </div>
      <ul className="flex flex-col gap-3 mt-3">
        <li className={classStyle}>
          <span>Payment time:</span> <span>{format(createdAt, 'MMMM-dd-yyyy, hh:mm')}</span>
        </li>
        <li className={classStyle}>
          <span>Date:</span> <span>{numNights} days ({format(startDate, 'MMMM-dd-yyyy')} - {format(endDate, 'MMMM-dd-yyyy')})</span>
        </li>
        <li className={classStyle}>
          <span>Number of guests:</span> <span>{numGuests}</span>
        </li>
        <li className={classStyle}><span>Payment method:</span> <span>Credit Card (Visa)</span></li>
        <li className={classStyle}><span>Sender name:</span> <span>John Smith</span></li>
        <li className={classStyle}><span>Amount:</span> <span>${cabinPrice}</span></li>
        <li className={classStyle}><span>Other fee:</span> <span>${extrasPrice}</span></li>
        <li className={classStyle}><span>Total amount:</span> <span>${totalPrice}</span></li>
      </ul>
    </div>
  )
}
