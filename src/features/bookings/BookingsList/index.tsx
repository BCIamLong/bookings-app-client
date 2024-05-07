import Empty from "@/components/Empty";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Spinner from "@/components/Spinner";
import { IBooking } from "@/interfaces";
import BookingCardProfile from "../BookingCardProfile";
import BookingItem from "../BookingItem";
import { useUserBookings } from "../useUserBookings";

export default function BookingList() {
  const { bookings, isLoading } = useUserBookings()

  if (isLoading) return <Spinner size="normal" />

  if (!bookings.length) return <Empty>You have no bookings yet</Empty>

  return (
    <div>
      <ul className="flex flex-col gap-3">
        {bookings?.map((booking: IBooking) => <Modal key={booking._id}>
          <Modal.Open openName={`booking${booking._id}}`}>
            <div className="[&>button]:w-full">
              <Button type="">
                <BookingItem booking={booking} key={booking._id} />
              </Button>
            </div>
          </Modal.Open>
          <Modal.Window name={`booking${booking._id}}`} type="brand">
            <BookingCardProfile booking={booking} />
          </Modal.Window>
        </Modal>)}
      </ul>
    </div>
  )
}
