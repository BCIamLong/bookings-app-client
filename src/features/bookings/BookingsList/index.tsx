import Spinner from "../../../components/Spinner";
import { IBooking } from "../../../interfaces";
import BookingItem from "../BookingItem";
import { useUserBookings } from "../useUserBookings";

export default function BookingList() {
  const { bookings, isLoading } = useUserBookings()

  if (isLoading) return <Spinner size="normal" />

  return (
    <div>
      <ul>
        {bookings?.map((booking: IBooking) => <BookingItem booking={booking} key={booking._id} />)}
      </ul>
    </div>
  )
}
