import { HiStar, HiOutlineCalendarDays } from "react-icons/hi2";
import ButtonLink from "../../components/ButtonLink";
import { Outlet } from "react-router-dom";
import ProfileOptions from "../../features/users/ProfileOptions";
import { useUserBookings } from "../../features/bookings/useUserBookings";

export default function ProfileInfoLayout() {
  const { count } = useUserBookings()
  return (
    <div>
      <ProfileOptions />
      <div className="flex flex-col gap-4 text-stone-700 mt-3 ">
        <div className="flex gap-2 divide-x-[1.5px] divide-stone-300">
          <ButtonLink type="profile" href="reviews">
            <span><HiStar className="text-xl" /></span>
            <p className="flex gap-1">
              <span>0</span>
              <span>Reviews</span>
            </p>
          </ButtonLink>
          <ButtonLink type="profile" href="bookings">
            <span><HiOutlineCalendarDays className="text-xl" /></span>
            <p className="flex gap-1">
              <span>{count}</span>
              <span>Bookings</span>
            </p>

          </ButtonLink>
        </div>
        <div className="border-b-2 w-full border-stone-100"></div>
        <Outlet />
      </div>
    </div>
  )
}
