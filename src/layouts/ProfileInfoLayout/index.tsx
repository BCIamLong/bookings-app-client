import { HiStar, HiOutlineCalendarDays } from "react-icons/hi2";
import ButtonLink from "../../components/ButtonLink";
import { Outlet } from "react-router-dom";
import ProfileOptions from "../../features/users/ProfileOptions";
import { useUserBookings } from "../../features/bookings/useUserBookings";
import { useReviews } from "@/features/reviews/useReviews";
import Spinner from "@/components/Spinner";
import { useTranslation } from "react-i18next";

export default function ProfileInfoLayout() {
  const { t } = useTranslation()
  const { count: bookingsCount, isLoading: isLoadingBookings } = useUserBookings()
  const { count: reviewsCount, isLoading: isLoadingReviews } = useReviews({ isReviewsOfUser: true })

  if (isLoadingBookings || isLoadingReviews) return <Spinner size="normal" />

  return (
    <div>
      <ProfileOptions />
      <div className="flex flex-col gap-4 text-stone-700 mt-3 ">
        <div className="flex gap-2 divide-x-[1.5px] divide-stone-300">
          <ButtonLink type="profile" href="reviews">
            <span><HiStar className="text-xl" /></span>
            <p className="flex gap-1">
              {/* <span>{reviewsCount}</span>
              <span>Reviews</span> */}
              {t('profile.nav.edit.nav.reviews.heading', { count: reviewsCount })}
            </p>
          </ButtonLink>
          <ButtonLink type="profile" href="bookings">
            <span><HiOutlineCalendarDays className="text-xl" /></span>
            <p className="flex gap-1">
              {/* <span>{bookingsCount}</span>
              <span>Bookings</span> */}
              {t('profile.nav.edit.nav.bookings.heading', { count: bookingsCount })}
            </p>

          </ButtonLink>
        </div>
        <div className="border-b-2 w-full border-stone-100"></div>
        <Outlet />
      </div>
    </div>
  )
}
