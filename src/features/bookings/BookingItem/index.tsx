import { format } from "date-fns";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

import Button from "../../../components/Button";
import { IBooking, ICabin } from "../../../interfaces";

export default function BookingItem({ booking }: { booking: IBooking }) {

  const { totalPrice, createdAt, cabinId } = booking
  const { name } = cabinId as ICabin

  return <li className="py-3 px-6 rounded-md bg-stone-100 flex justify-between items-center">
    <div>
      <p className="font-semibold text-sm">Book the {name} cabin</p>
      <p className="text-xs text-stone-500 leading-6">{format(createdAt, 'MM/dd/yyyy - hh:mm:ss')}</p>
    </div>
    <div className="flex gap-3 items-center">
      <p className="font-semibold">${totalPrice}</p>
      <Button type="icon" size="small">
        <HiOutlineEllipsisVertical className="text-xl" />
      </Button>
    </div>
  </li>
}
