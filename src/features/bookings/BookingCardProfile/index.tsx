import { format } from "date-fns";

import Heading from "../../../components/Heading";
import Spinner from "../../../components/Spinner";
import { IBooking, ICabin } from "../../../interfaces";
import { useUserSession } from "../../auth/useUserSession";
import Button from "../../../components/Button";

export default function BookingCardProfile({ booking }: { booking: IBooking }) {
  const { user, isLoading: isUserLoading } = useUserSession()
  const { startDate, endDate, numNights, numGuests, cabinPrice, totalPrice, extrasPrice, createdAt, cabinId } = booking as IBooking || {}
  const { name: cabinName } = cabinId as ICabin || {}
  const { name, fullName } = user || {}
  const classStyle = `flex justify-between items-center [&>span:first-child]:text-stone-500 [&>span:nth-child(2)]:text-brand-600 [&>span:nth-child(2)]:font-semibold`

  if (isUserLoading) return <Spinner size="normal" />

  return (
    <div className={`p-8 shadow-md shadow-brand-300 rounded-md text-stone-700 bg-brand-200 w-[30rem]`}>
      <div className="border-b-[1.5px] border-stone-300 pb-4">
        <Heading type="tertiary">{cabinName}</Heading>
      </div>
      <ul className="flex flex-col gap-3 mt-4">
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
        <li className={classStyle}><span>Sender name:</span> <span>{fullName || name}</span></li>
        <li className={classStyle}><span>Amount:</span> <span>${cabinPrice}</span></li>
        <li className={classStyle}><span>Other fee:</span> <span>${extrasPrice}</span></li>
        <li className={classStyle}><span>Total amount:</span> <span>${totalPrice}</span></li>
      </ul>
      <div className="flex flex-col w-full mt-8">
        <Button type="brand" size="small">Delete</Button>
      </div>
    </div>
  )
}
